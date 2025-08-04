import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as d,c as r,a as e,b as i,d as s,e as l}from"./app-7KT7HDzT.js";const c={},v=l(`<h1 id="日志服务" tabindex="-1"><a class="header-anchor" href="#日志服务"><span>日志服务</span></a></h1><h2 id="日志服务功能" tabindex="-1"><a class="header-anchor" href="#日志服务功能"><span>日志服务功能</span></a></h2><ul><li>1、收集 ：能够采集多个来源的日志数据。</li><li>2、传输 ：能够稳定的把日志数据传输到日志服务。</li><li>3、存储 ：能够存储海量的日志数据。</li><li>4、查询 ：能够灵活且高效的查询日志数据，并提供一定的分析能力。</li><li>5、告警 ：能够提供提供告警功能，通知开发和运维等等。</li></ul><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><ul><li>开源解决方案 <ul><li>ELK</li><li>Apache Chukwa</li><li>Apache Kafka</li><li>Cloudera Fluentd</li><li>Syslog、Rsyslog、Syslog-ng</li><li>Facebook Scribe</li></ul></li><li>商业解决方案 <ul><li>阿里云 SLS、腾讯云 CLS、华为云 LTS</li><li>Splunk</li></ul></li><li>目前线上采用阿里云 SLS 日志服务，主要考虑使用方便，成本合算。</li><li>目前采用最多的日志服务的解决方案，是 ELK 搭建的日志服务。</li></ul><h2 id="elk定义" tabindex="-1"><a class="header-anchor" href="#elk定义"><span>ELK定义</span></a></h2><p>官方 Elastic NV 定义 &quot;ELK” 是三个开源项目的首字母缩写，分别是：Elasticsearch、Logstash 和 Kibana。</p><ul><li>Elasticsearch 是一个搜索和分析引擎。</li><li>Logstash 是服务器端数据处理管道，能够同时从多个来源采集数据，转换数据，然后将数据发送到诸如 Elasticsearch 等“存储库”中。</li><li>Kibana 则可以让用户在 Elasticsearch 中使用图形和图表对数据进行可视化。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/4b0c11b65a80816b04865.jpg" alt="elk1.png"></li></ul><p>由于 Logstash 是基于 JVM 的重量级的采集器，对系统的 CPU、内存、IO 等等资源占用非常高，这样可能影响服务器上的其它服务的运行。所以，Elastic NV 推出 Beats ，基于 Go 的轻量级采集器，对系统的 CPU、内存、IO 等等资源的占用基本可以忽略不计。负责采集数据，并通过网路传输给 Logstash。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/b05a051c3d46973c8eb0e.jpg" alt="elk2.png"></p><h2 id="elk-filebeat8-14-1部署" tabindex="-1"><a class="header-anchor" href="#elk-filebeat8-14-1部署"><span>ELK+FileBeat8.14.1部署</span></a></h2><ol><li>vim /etc/sysctl.conf添加下面的配置</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vm.max_map_count=655360
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建<code>.env</code>文件</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Project namespace (defaults to the current folder name if not set)
#COMPOSE_PROJECT_NAME=myproject

# Password for the &#39;elastic&#39; user (at least 6 characters)
ELASTIC_PASSWORD=abcdef

# Password for the &#39;kibana_system&#39; user (at least 6 characters)
KIBANA_PASSWORD=abcdef

# Version of Elastic products
STACK_VERSION=8.14.1

# Set the cluster name
CLUSTER_NAME=docker-cluster

# Set to &#39;basic&#39; or &#39;trial&#39; to automatically start the 30-day trial
LICENSE=basic
#LICENSE=trial

# Port to expose Elasticsearch HTTP API to the host
ES_PORT=9200

# Port to expose Kibana to the host
KIBANA_PORT=5601

# Increase or decrease based on the available host memory (in bytes)
ES_MEM_LIMIT=2147483648
KB_MEM_LIMIT=2147483648
LS_MEM_LIMIT=2147483648

# SAMPLE Predefined Key only to be used in POC environments
ENCRYPTION_KEY=c34d38b3a14956121ff2170e5030b471551370178f43e5626eec58b04a30fae2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ELASTIC_PASSWORD和KIBANA_PASSWORD不要全数字,ES_MEM_LIMIT、KB_MEM_LIMIT、LS_MEM_LIMIT在8.14版本至少2g<br> Native controller process has stopped - no new native processes can be started报错是内存不够<br> docker-compose.yml</p></blockquote><ol start="2"><li>创建 ELK 堆栈的 docker-compose.yml 文件</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>version: &quot;3.8&quot;


volumes:
 certs:
   driver: local
 esdata01:
   driver: local
 kibanadata:
   driver: local
 metricbeatdata01:
   driver: local
 filebeatdata01:
   driver: local
 logstashdata01:
   driver: local


networks:
 default:
   name: elastic
   external: false


services:
 setup:
   image: docker.elastic.co/elasticsearch/elasticsearch:\${STACK_VERSION}
   volumes:
     - certs:/usr/share/elasticsearch/config/certs
   user: &quot;0&quot;
   command: &gt;
     bash -c &#39;
       if [ x\${ELASTIC_PASSWORD} == x ]; then
         echo &quot;Set the ELASTIC_PASSWORD environment variable in the .env file&quot;;
         exit 1;
       elif [ x\${KIBANA_PASSWORD} == x ]; then
         echo &quot;Set the KIBANA_PASSWORD environment variable in the .env file&quot;;
         exit 1;
       fi;
       if [ ! -f config/certs/ca.zip ]; then
         echo &quot;Creating CA&quot;;
         bin/elasticsearch-certutil ca --silent --pem -out config/certs/ca.zip;
         unzip config/certs/ca.zip -d config/certs;
       fi;
       if [ ! -f config/certs/certs.zip ]; then
         echo &quot;Creating certs&quot;;
         echo -ne \\
         &quot;instances:\\n&quot;\\
         &quot;  - name: es01\\n&quot;\\
         &quot;    dns:\\n&quot;\\
         &quot;      - es01\\n&quot;\\
         &quot;      - localhost\\n&quot;\\
         &quot;    ip:\\n&quot;\\
         &quot;      - 127.0.0.1\\n&quot;\\
         &quot;  - name: kibana\\n&quot;\\
         &quot;    dns:\\n&quot;\\
         &quot;      - kibana\\n&quot;\\
         &quot;      - localhost\\n&quot;\\
         &quot;    ip:\\n&quot;\\
         &quot;      - 127.0.0.1\\n&quot;\\
         &gt; config/certs/instances.yml;
         bin/elasticsearch-certutil cert --silent --pem -out config/certs/certs.zip --in config/certs/instances.yml --ca-cert config/certs/ca/ca.crt --ca-key config/certs/ca/ca.key;
         unzip config/certs/certs.zip -d config/certs;
       fi;
       echo &quot;Setting file permissions&quot;
       chown -R root:root config/certs;
       find . -type d -exec chmod 750 \\{\\} \\;;
       find . -type f -exec chmod 640 \\{\\} \\;;
       echo &quot;Waiting for Elasticsearch availability&quot;;
       until curl -s --cacert config/certs/ca/ca.crt https://es01:9200 | grep -q &quot;missing authentication credentials&quot;; do sleep 30; done;
       echo &quot;Setting kibana_system password&quot;;
       until curl -s -X POST --cacert config/certs/ca/ca.crt -u &quot;elastic:\${ELASTIC_PASSWORD}&quot; -H &quot;Content-Type: application/json&quot; https://es01:9200/_security/user/kibana_system/_password -d &quot;{\\&quot;password\\&quot;:\\&quot;\${KIBANA_PASSWORD}\\&quot;}&quot; | grep -q &quot;^{}&quot;; do sleep 10; done;
       echo &quot;All done!&quot;;
     &#39;
   healthcheck:
     test: [&quot;CMD-SHELL&quot;, &quot;[ -f config/certs/es01/es01.crt ]&quot;]
     interval: 1s
     timeout: 5s
     retries: 120
 es01:
   depends_on:
     setup:
       condition: service_healthy
   image: docker.elastic.co/elasticsearch/elasticsearch:\${STACK_VERSION}
   labels:
     co.elastic.logs/module: elasticsearch
   volumes:
     - certs:/usr/share/elasticsearch/config/certs
     - esdata01:/usr/share/elasticsearch/data
   ports:
     - \${ES_PORT}:9200
   environment:
     - node.name=es01
     - cluster.name=\${CLUSTER_NAME}
     - discovery.type=single-node
     - ELASTIC_PASSWORD=\${ELASTIC_PASSWORD}
     - bootstrap.memory_lock=true
     - xpack.security.enabled=true
     - xpack.security.http.ssl.enabled=true
     - xpack.security.http.ssl.key=certs/es01/es01.key
     - xpack.security.http.ssl.certificate=certs/es01/es01.crt
     - xpack.security.http.ssl.certificate_authorities=certs/ca/ca.crt
     - xpack.security.transport.ssl.enabled=true
     - xpack.security.transport.ssl.key=certs/es01/es01.key
     - xpack.security.transport.ssl.certificate=certs/es01/es01.crt
     - xpack.security.transport.ssl.certificate_authorities=certs/ca/ca.crt
     - xpack.security.transport.ssl.verification_mode=certificate
     - xpack.license.self_generated.type=\${LICENSE}
   mem_limit: \${ES_MEM_LIMIT}
   ulimits:
     memlock:
       soft: -1
       hard: -1
   healthcheck:
     test:
       [
         &quot;CMD-SHELL&quot;,
         &quot;curl -s --cacert config/certs/ca/ca.crt https://localhost:9200 | grep -q &#39;missing authentication credentials&#39;&quot;,
       ]
     interval: 10s
     timeout: 10s
     retries: 120
 kibana:
   depends_on:
     es01:
       condition: service_healthy
   image: docker.elastic.co/kibana/kibana:\${STACK_VERSION}
   labels:
     co.elastic.logs/module: kibana
   volumes:
     - certs:/usr/share/kibana/config/certs
     - kibanadata:/usr/share/kibana/data
   ports:
     - \${KIBANA_PORT}:5601
   environment:
     - SERVERNAME=kibana
     - ELASTICSEARCH_HOSTS=https://es01:9200
     - ELASTICSEARCH_USERNAME=kibana_system
     - ELASTICSEARCH_PASSWORD=\${KIBANA_PASSWORD}
     - ELASTICSEARCH_SSL_CERTIFICATEAUTHORITIES=config/certs/ca/ca.crt
     - XPACK_SECURITY_ENCRYPTIONKEY=\${ENCRYPTION_KEY}
     - XPACK_ENCRYPTEDSAVEDOBJECTS_ENCRYPTIONKEY=\${ENCRYPTION_KEY}
     - XPACK_REPORTING_ENCRYPTIONKEY=\${ENCRYPTION_KEY}
   mem_limit: \${KB_MEM_LIMIT}
   healthcheck:
     test:
       [
         &quot;CMD-SHELL&quot;,
         &quot;curl -s -I http://localhost:5601 | grep -q &#39;HTTP/1.1 302 Found&#39;&quot;,
       ]
     interval: 10s
     timeout: 10s
     retries: 120
 logstash01:
   depends_on:
     es01:
       condition: service_healthy
     kibana:
       condition: service_healthy
   image: docker.elastic.co/logstash/logstash:\${STACK_VERSION}
   labels:
     co.elastic.logs/module: logstash
   user: root
   ports:
     - &quot;5044:5044&quot;
     - &quot;9600:9600&quot;
   volumes:
     - certs:/usr/share/logstash/certs
     - logstashdata01:/usr/share/logstash/data
     - &quot;./logstash_ingest_data/:/usr/share/logstash/ingest_data/&quot;
     - &quot;./logstash.conf:/usr/share/logstash/pipeline/logstash.conf:ro&quot;
   environment:
     - xpack.monitoring.enabled=false
     - ELASTIC_USER=elastic
     - ELASTIC_PASSWORD=\${ELASTIC_PASSWORD}
     - ELASTIC_HOSTS=https://es01:9200
 filebeat01:
   depends_on:
     es01:
       condition: service_healthy
   image: docker.elastic.co/beats/filebeat:\${STACK_VERSION}
   user: root
   volumes:
     - certs:/usr/share/filebeat/certs
     - filebeatdata01:/usr/share/filebeat/data
     - &quot;./filebeat_ingest_data/:/usr/share/filebeat/ingest_data/&quot;
     - &quot;./filebeat.yml:/usr/share/filebeat/filebeat.yml:ro&quot;
     - &quot;/var/lib/docker/containers:/var/lib/docker/containers:ro&quot;
     - &quot;/var/run/docker.sock:/var/run/docker.sock:ro&quot;
     - &quot;/var/log:/var/log/test:ro&quot;
   environment:
     - ELASTIC_USER=elastic
     - ELASTIC_PASSWORD=\${ELASTIC_PASSWORD}
     - ELASTIC_HOSTS=https://es01:9200
     - KIBANA_HOSTS=http://kibana:5601
     - LOGSTASH_HOSTS=http://logstash01:9600
 metricbeat01:
   depends_on:
     es01:
       condition: service_healthy
     kibana:
       condition: service_healthy
   image: docker.elastic.co/beats/metricbeat:\${STACK_VERSION}
   user: root
   volumes:
     - certs:/usr/share/metricbeat/certs
     - metricbeatdata01:/usr/share/metricbeat/data
     - &quot;./metricbeat.yml:/usr/share/metricbeat/metricbeat.yml:ro&quot;
     - &quot;/var/run/docker.sock:/var/run/docker.sock:ro&quot;
     - &quot;/sys/fs/cgroup:/hostfs/sys/fs/cgroup:ro&quot;
     - &quot;/proc:/hostfs/proc:ro&quot;
     - &quot;/:/hostfs:ro&quot;
   environment:
     - ELASTIC_USER=elastic
     - ELASTIC_PASSWORD=\${ELASTIC_PASSWORD}
     - ELASTIC_HOSTS=https://es01:9200
     - KIBANA_HOSTS=http://kibana:5601
     - LOGSTASH_HOSTS=http://logstash01:9600

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>setup服务用于监听es和kibana正常启动<br> metricbeat用于查看宿主机cpu等情况，在kibana界面上Stack Monitoring可以看到<br> filebeat01中&quot;/var/log:/var/log/test:ro&quot;表示将系统日志以只读方式同步到容器中，这样可以监控宿主机的系统日志，同理监控宿主机容器日志达到监控java日志目的</p></blockquote><figure><img src="" alt="clusteroverview.png" tabindex="0"><figcaption>clusteroverview.png</figcaption></figure><ol start="3"><li>创建logstash.conf文件</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>input {
  beats {
    port =&gt; 5044
  }
}
filter {
}
output {
 elasticsearch {
   index =&gt; &quot;logstash-%{+YYYY.MM.dd}&quot;
   hosts=&gt; &quot;\${ELASTIC_HOSTS}&quot;
   user=&gt; &quot;\${ELASTIC_USER}&quot;
   password=&gt; &quot;\${ELASTIC_PASSWORD}&quot;
   cacert=&gt; &quot;certs/ca/ca.crt&quot;
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>创建metricbeat.yml文件</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>metricbeat.config.modules:
 path: \${path.config}/modules.d/*.yml
 reload.enabled: false
metricbeat.modules:
- module: elasticsearch
  hosts: \${ELASTIC_HOSTS}
  username: \${ELASTIC_USER}
  password: \${ELASTIC_PASSWORD}
  xpack:
    enabled: true
  period: 10s
  ssl:
      enabled: true
      certificate_authorities: &quot;certs/ca/ca.crt&quot;
      certificate: &quot;certs/es01/es01.crt&quot;
      key: &quot;certs/es01/es01.key&quot;
- module: logstash
  xpack:
    enabled: true
  period: 10s
  hosts: \${LOGSTASH_HOSTS}
- module: kibana
  metricsets:
   - stats
  period: 10s
  hosts: \${KIBANA_HOSTS}
  username: \${ELASTIC_USER}
  password: \${ELASTIC_PASSWORD}
  xpack.enabled: true
- module: docker
  metricsets:
   - &quot;container&quot;
   - &quot;cpu&quot;
   - &quot;diskio&quot;
   - &quot;healthcheck&quot;
   - &quot;info&quot;
   #- &quot;image&quot;
   - &quot;memory&quot;
   - &quot;network&quot;
  hosts: [&quot;unix:///var/run/docker.sock&quot;]
  period: 10s
  enabled: true
processors:
 - add_host_metadata: ~
 - add_docker_metadata: ~
output.elasticsearch:
 hosts: \${ELASTIC_HOSTS}
 username: \${ELASTIC_USER}
 password: \${ELASTIC_PASSWORD}
 ssl:
   certificate: &quot;certs/es01/es01.crt&quot;
   certificate_authorities: &quot;certs/ca/ca.crt&quot;
   key: &quot;certs/es01/es01.key&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>创建filebeat.yml</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>filebeat.inputs:
- type: filestream
  id: default-filestream
  paths:
   - ingest_data/*.log
   - /var/log/test/*.log
- type: container
  id: java
  paths:
   - /var/lib/docker/containers/*/*.log
filebeat.autodiscover:
 providers:
   - type: docker
     hints.enabled: true


processors:
- add_docker_metadata: ~


setup.kibana:
 host: \${KIBANA_HOSTS}
 username: \${ELASTIC_USER}
 password: \${ELASTIC_PASSWORD}


# output.elasticsearch:
#  hosts: \${ELASTIC_HOSTS}
#  username: \${ELASTIC_USER}
#  password: \${ELASTIC_PASSWORD}
#  ssl.enabled: true
#  ssl.certificate_authorities: &quot;certs/ca/ca.crt&quot;

output.logstash:
  hosts: &quot;logstash01&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>将上面文件全部放入同一个目录并运行以下命令启动 ELK 堆栈：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27),u={start:"7"},o=e("br",null,null,-1),m={href:"https://localhost:9200",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),p=e("img",{src:"https://290ff162.telegraph-image-eg9.pages.dev/file/9fa817d3a9b480a081bb5.jpg",alt:"esok.png"},null,-1),h=e("br",null,null,-1),g={href:"http://localhost:5601",target:"_blank",rel:"noopener noreferrer"},S=l(`<figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/f3a22d1b54b166448f8d7.jpg" alt="kibanaok.png" tabindex="0"><figcaption>kibanaok.png</figcaption></figure><p>kibana左侧中提供了一个DevTools界面：可以编写DSL来操作elasticsearch。并且对DSL语句有自动补全功能。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/ba0918c606927331626f9.jpg" alt="devtools.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/6a8c0540680bfbddf62fa.jpg" alt="devtools2.png"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>POST /_analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ik_max_word&quot;</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;java学习java太棒了&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导航到 &quot;Discover&quot; 页面，查看日志数据是否成功索引到 Elasticsearch。</p>`,4);function f(_,q){const n=t("ExternalLinkIcon");return d(),r("div",null,[v,e("ol",u,[e("li",null,[i("验证"),o,i(" 验证 Elasticsearch：打开浏览器并访问 "),e("a",m,[i("https://localhost:9200"),s(n)]),i("。选择继续登陆输入账号密码，你应该会看到类似以下内容的 JSON 响应："),b,p])]),e("p",null,[i("验证 Kibana："),h,i(" 打开浏览器并访问 "),e("a",g,[i("http://localhost:5601"),s(n)]),i("。你应该会看到 Kibana 的欢迎页面。")]),S])}const A=a(c,[["render",f],["__file","elk.html.vue"]]),T=JSON.parse('{"path":"/backend/monitoringsystem/elk.html","title":"ELK","lang":"zh-CN","frontmatter":{"title":"ELK","date":"2023-01-01T00:00:00.000Z","tags":"ELK","categories":"后端","description":"日志服务 日志服务功能 1、收集 ：能够采集多个来源的日志数据。 2、传输 ：能够稳定的把日志数据传输到日志服务。 3、存储 ：能够存储海量的日志数据。 4、查询 ：能够灵活且高效的查询日志数据，并提供一定的分析能力。 5、告警 ：能够提供提供告警功能，通知开发和运维等等。 解决方案 开源解决方案 ELK Apache Chukwa Apache Ka...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/monitoringsystem/elk.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"ELK"}],["meta",{"property":"og:description","content":"日志服务 日志服务功能 1、收集 ：能够采集多个来源的日志数据。 2、传输 ：能够稳定的把日志数据传输到日志服务。 3、存储 ：能够存储海量的日志数据。 4、查询 ：能够灵活且高效的查询日志数据，并提供一定的分析能力。 5、告警 ：能够提供提供告警功能，通知开发和运维等等。 解决方案 开源解决方案 ELK Apache Chukwa Apache Ka..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/4b0c11b65a80816b04865.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ELK\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/4b0c11b65a80816b04865.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/b05a051c3d46973c8eb0e.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/9fa817d3a9b480a081bb5.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/f3a22d1b54b166448f8d7.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/ba0918c606927331626f9.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/6a8c0540680bfbddf62fa.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"日志服务功能","slug":"日志服务功能","link":"#日志服务功能","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"ELK定义","slug":"elk定义","link":"#elk定义","children":[]},{"level":2,"title":"ELK+FileBeat8.14.1部署","slug":"elk-filebeat8-14-1部署","link":"#elk-filebeat8-14-1部署","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.35,"words":1606},"filePathRelative":"backend/monitoringsystem/elk.md","localizedDate":"2023年1月1日","excerpt":"\\n<h2>日志服务功能</h2>\\n<ul>\\n<li>1、收集 ：能够采集多个来源的日志数据。</li>\\n<li>2、传输 ：能够稳定的把日志数据传输到日志服务。</li>\\n<li>3、存储 ：能够存储海量的日志数据。</li>\\n<li>4、查询 ：能够灵活且高效的查询日志数据，并提供一定的分析能力。</li>\\n<li>5、告警 ：能够提供提供告警功能，通知开发和运维等等。</li>\\n</ul>\\n<h2>解决方案</h2>\\n<ul>\\n<li>开源解决方案\\n<ul>\\n<li>ELK</li>\\n<li>Apache Chukwa</li>\\n<li>Apache Kafka</li>\\n<li>Cloudera Fluentd</li>\\n<li>Syslog、Rsyslog、Syslog-ng</li>\\n<li>Facebook Scribe</li>\\n</ul>\\n</li>\\n<li>商业解决方案\\n<ul>\\n<li>阿里云 SLS、腾讯云 CLS、华为云 LTS</li>\\n<li>Splunk</li>\\n</ul>\\n</li>\\n<li>目前线上采用阿里云 SLS 日志服务，主要考虑使用方便，成本合算。</li>\\n<li>目前采用最多的日志服务的解决方案，是 ELK 搭建的日志服务。</li>\\n</ul>","autoDesc":true}');export{A as comp,T as data};
