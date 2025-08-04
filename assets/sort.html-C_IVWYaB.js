import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,e as l}from"./app-7KT7HDzT.js";const t={},a=l(`<h2 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法"><span>排序算法</span></a></h2><ul><li>排序算法(Sort Algorithm)是将一组数据，依指定的顺序进行排列的过程。</li></ul><h2 id="排序的分类" tabindex="-1"><a class="header-anchor" href="#排序的分类"><span>排序的分类：</span></a></h2><ul><li><p>内部排序：指将需要处理的所有数据都加载到内部存储器中进行排序。</p><ul><li>插入排序：直接插入排序、希尔排序</li><li>选择排序：简单选择排序、堆排序</li><li>交换排序：冒泡排序、快速排序</li><li>归并排序</li><li>基数排序</li></ul></li><li><p>外部排序：数据量过大，无法全部加载到内存中，需要借助外部存储(文件等)进行排序。</p></li><li><p>稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；</p></li><li><p>不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；</p></li><li><p>内排序：所有排序操作都在内存中完成；</p></li><li><p>外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；</p></li><li><p>n: 数据规模</p></li><li><p>k: “桶”的个数</p></li><li><p>In-place: 不占用额外内存</p></li><li><p>Out-place: 占用额外内存</p></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/42c8f6b8f06cfbbad2482.png" alt="排序算法总结.png" tabindex="0"><figcaption>排序算法总结.png</figcaption></figure><p><code>记忆：插冒归基最稳,方选冒插,nlogn快归堆</code><br><code>简析快堆都不稳直冒二归才最稳</code></p><h2 id="冒泡排序-bubble-sorting-o-n-2" tabindex="-1"><a class="header-anchor" href="#冒泡排序-bubble-sorting-o-n-2"><span>冒泡排序(Bubble Sorting) O(n^2)</span></a></h2><ul><li>通过对待排序序列从前向后（从下标较小的元素开始）,依次比较相邻元素的值，若发现逆序则交换，使值较大的元素逐渐从前移向后部，就象水底下的气泡一样逐渐向上冒</li><li>冒泡排序规则 <ul><li>一共进行 数组的大小-1 次 大的循环</li><li>每一趟排序的次数在逐渐的减少</li><li>优化：因为排序的过程中，各元素不断接近自己的位置，如果一趟比较下来没有进行过交换，就说明序列有序，因此要在排序过程中设置一个标志flag判断元素是否进行过交换。从而减少不必要的比较</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void bubbleSort(int[] arr) {
	int temp = 0; // 临时变量
	boolean flag = false; // 标识变量，表示是否进行过交换//优化代码
  //外层循环控制循环次数，需要n-1次比较
	for (int i = 0; i &lt; arr.length - 1; i++) {
    //内层循环控制每趟循环比较次数,逐渐减少比较次数是因为每次遍历后最后i个元素已经排好序，不再需要比较
		for (int j = 0; j &lt; arr.length - 1 - i; j++) {
			if (arr[j] &gt; arr[j + 1]) {// 如果前面的数比后面的数大，则交换
				flag = true;//优化代码
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		//优化代码
		if (!flag) { // 在一趟排序中，一次交换都没有发生过
			break;
		} else {
			flag = false; // 重置flag!!!, 进行下次判断
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单-选择排序-select-sorting-o-n-2" tabindex="-1"><a class="header-anchor" href="#简单-选择排序-select-sorting-o-n-2"><span>[简单]选择排序(select sorting)O(n^2)</span></a></h2><ul><li>基本思想： <ul><li>第一次从arr[0]~arr[n-1]中选取最小值，与arr[0]交换，</li><li>第二次从arr[1]~arr[n-1]中选取最小值，与arr[1]交换，</li><li>第i次从arr[i-1]~arr[n-1]中选取最小值，与arr[i-1]交换，…,</li><li>第n-1次从arr[n-2]~arr[n-1]中选取最小值，与arr[n-2]交换，</li><li>总共通过n-1次，得到一个按排序码从小到大排列的有序序列</li></ul></li><li>说明 <ul><li>选择排序一共有 数组大小 - 1 轮排序</li><li>每1轮排序，又是一个循环, 循环的规则(代码) <ul><li>先假定当前这个数是最小数</li><li>然后和后面的每个数进行比较，如果发现有比当前数更小的数，就重新确定最小数，并得到下标</li><li>当遍历到数组的最后时，就得到本轮最小数和下标</li><li>交换</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void selectSort(int[] arr) {
	for (int i = 0; i &lt; arr.length - 1; i++) {//外层循环遍历数组的每个元素
		int minIndex = i;
		int min = arr[i];
		for (int j = i + 1; j &lt; arr.length; j++) {//内层循环从未排序部分寻找最小元素，并记录其索引
			if (min &gt; arr[j]) { // 说明假定的最小值，并不是最小
				min = arr[j]; // 重置min
				minIndex = j; // 重置minIndex
			}
		}
		// 将最小值，放在arr[0], 即交换
		if (minIndex != i) {
			arr[minIndex] = arr[i];
			arr[i] = min;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插入排序-insertion-sorting-o-n-2" tabindex="-1"><a class="header-anchor" href="#插入排序-insertion-sorting-o-n-2"><span>插入排序(Insertion Sorting)O(n^2)</span></a></h2><ul><li>把n个待排序的元素看成为一个有序表和一个无序表，&quot;扑克摸牌&quot;</li><li>开始时有序表中只包含一个元素，无序表中包含有n-1个元素，</li><li>排序过程中每次从无序表中取出第一个元素，把它的排序码依次与有序表元素的排序码进行比较，</li><li>将它插入到有序表中的适当位置，然后插入位置后面的数值后移，使之成为新的有序表。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8c51d3e56ec82be128c9b.png" alt="插入排序.png" tabindex="0"><figcaption>插入排序.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//将i从1-&gt;arr.length循环遍历，每次取出arr[i],然后比较之前的数值
//大于则让之前的数值往后移，同时索引减少，小于则将arr[i]放到当前索引
public static void insertSort(int[] arr) {
	int insertVal = 0;
	int insertIndex = 0;
	for(int i = 1; i &lt; arr.length; i++) {//因为0已经算排好序了。故从1开始
		insertVal = arr[i];
		insertIndex = i - 1; 
		// 1. insertIndex &gt;= 0 保证在给insertVal 找插入位置，不越界
		// 2. insertVal &lt; arr[insertIndex] 待插入的数，还没有找到插入位置
		//3. 将arr[insertIndex]后移
		while (insertIndex &gt;= 0 &amp;&amp; insertVal &lt; arr[insertIndex]) {//arr[insertIndex],从后向前遍历比较的数值
			arr[insertIndex + 1] = arr[insertIndex];
			insertIndex--;//当需要插入的数是较小的数时，后移的次数明显增多，对效率有影响.引出
		}
		// 当退出while循环时，说明插入的位置找到, insertIndex + 1
		arr[insertIndex + 1] = insertVal;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="希尔排序-shell-sort-o-nlog2n" tabindex="-1"><a class="header-anchor" href="#希尔排序-shell-sort-o-nlog2n"><span>希尔排序(shell Sort)O(nlog2n)</span></a></h2><ul><li>希尔排序是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序。</li><li>希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8bb7c9d4b07f9195a38bf.png" alt="希尔排序.png" tabindex="0"><figcaption>希尔排序.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//（分组+插入排序）插入的1改为gap加上外部分组循环
public static void shellSort(int[] arr) {
	for (int gap = arr.length / 2; gap &gt; 0; gap /= 2) {
		for (int i = gap; i &lt; arr.length; i++) {// 从第gap个元素，逐个对其所在的组进行直接插入排序
			int j = i - gap;
			int temp = arr[i];
      while (j  &gt;= 0 &amp;&amp; temp &lt; arr[j]) {
        arr[j+gap] = arr[j];//移动
        j -= gap;
      }
      //当退出while后，就给temp找到插入的位置
      if(j + gap != i){
        arr[j+gap] = temp;
      }
				
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速排序-quick-sort-o-n-2" tabindex="-1"><a class="header-anchor" href="#快速排序-quick-sort-o-n-2"><span>快速排序(Quick sort)O(n^2)</span></a></h2><ul><li>通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/5a6d66d80e037389d69d7.png" alt="快速排序.png" tabindex="0"><figcaption>快速排序.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class MyQuickSortHoare {

    public static void sort(int[] a) {
        quick(a, 0, a.length - 1);
    }

    private static void quick(int[] a, int left, int right) {
        if (left &gt;= right) {
            return;
        }
        int p = partition(a, left, right);
        quick(a, left, p - 1);
        quick(a, p + 1, right);
    }

    private static int partition(int[] arr, int left, int right) {
        int pivot = arr[right]; // 选择最后一个元素作为基准
        int i = left - 1; // 较小元素的索引

        for (int j = left; j &lt; right; j++) {
            // 如果当前元素小于或等于 pivot
            if (arr[j] &lt;= pivot) {
                i++;

                // 交换 arr[i] 和 arr[j]
                swap(arr,i,j);
            }
        }

        // 交换 arr[i+1] 和 arr[high] (或 pivot)
        swap(arr,i+1,right);

        return i + 1;
    }

    private static void swap(int[] a, int i, int j) {
        int t = a[i];
        a[i] = a[j];
        a[j] = t;
    }

    public static void main(String[] args) {
        int[] a = {9, 3, 7, 2, 8, 5, 1, 4};
        System.out.println(Arrays.toString(a));
        sort(a);
        System.out.println(Arrays.toString(a));
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="归并排序-merge-sort-o-nlog2n" tabindex="-1"><a class="header-anchor" href="#归并排序-merge-sort-o-nlog2n"><span>归并排序(Merge sort)O(nlog2n)</span></a></h2><ul><li>归并排序（MERGE-SORT）是利用归并的思想实现的排序方法，该算法采用经典的分治（divide-and-conquer）策略（分治法将问题分(divide)成一些小的问题然后递归求解，</li><li>而治(conquer)的阶段则将分的阶段得到的各答案&quot;修补&quot;在一起，即分而治之)。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/a053e1ecb9acb06c487e1.png" alt="归并排序.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/625043b7e9c3fa53e3c46.png" alt="归并排序2.png"></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class MergeSortTopDown {

    /*
        a1 原始数组
        i~iEnd 第一个有序范围
        j~jEnd 第二个有序范围
        a2 临时数组
     */
    public static void merge(int[] a1, int i, int iEnd, int j, int jEnd, int[] a2) {
        int k = i;
        while (i &lt;= iEnd &amp;&amp; j &lt;= jEnd) {
            if (a1[i] &lt; a1[j]) {
                a2[k] = a1[i];
                i++;
            } else {
                a2[k] = a1[j];
                j++;
            }
            k++;
        }
        if (i &gt; iEnd) {//将j剩余的复制到a2
            System.arraycopy(a1, j, a2, k, jEnd - j + 1);
        }
        if (j &gt; jEnd) {//将i剩余的复制到a2
            System.arraycopy(a1, i, a2, k, iEnd - i + 1);
        }
    }

    public static void sort(int[] a1) {
        int[] a2 = new int[a1.length];
        split(a1, 0, a1.length - 1, a2);
    }

    private static void split(int[] a1, int left, int right, int[] a2) {
        // 2. 治
        if (left == right) {
            return;
        }
        // 1. 分
        int m = (left + right) &gt;&gt;&gt; 1;
        split(a1, left, m, a2);                 // left = 0 m = 0  9
        split(a1, m + 1, right, a2);       // m+1 = 1 right = 1  3
        // 3. 合
        merge(a1, left, m, m + 1, right, a2);
        System.arraycopy(a2, left, a1, left, right - left + 1);//将已经排序好的数据复制回去原数组
    }

    public static void main(String[] args) {
        int[] a = {9, 3, 7, 2, 8, 5, 1, 4};
        System.out.println(Arrays.toString(a));
        sort(a);
        System.out.println(Arrays.toString(a));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基数排序-radix-sort-o-nlog2n" tabindex="-1"><a class="header-anchor" href="#基数排序-radix-sort-o-nlog2n"><span>基数排序(radix sort)O(nlog2n)</span></a></h2><ul><li>属于“分配式排序”（distribution sort），又称“桶子法”（bucket sort）或bin sort，桶排序的扩展</li><li>通过键值的各个位的值，将要排序的元素分配至某些“桶”中，达到排序的作用</li><li>基数排序法是属于稳定性的排序，基数排序法的是效率高的稳定性排序法</li><li>基数排序是1887年赫尔曼·何乐礼发明的。它是这样实现的：将整数按位数切割成不同的数字，然后按每个位数分别比较。将所有待比较数值统一为同样的数位长度，数位较短的数前面补零。然后，从最低位开始，依次进行一次排序。这样从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列。</li><li>基数排序是使用空间换时间的经典算法</li><li>第1轮排序: <ul><li>(1) 将每个元素的个位数取出，然后看这个数应该放在哪个对应的桶(一个一维数组)</li><li>(2) 按照这个桶的顺序(一维数组的下标依次取出数据，放入原来数组)</li></ul></li><li>第2轮排序: <ul><li>(1) 将每个元素的十位数取出，然后看这个数应该放在哪个对应的桶(一个一维数组)</li><li>(2) 按照这个桶的顺序(一维数组的下标依次取出数据，放入原来数组)<br> ...</li></ul></li></ul><p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/c9c5e395b4d5db1de172e.png" alt="基数排序1.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8eb855b2d5544664f87cc.png" alt="基数排序2.png"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> public static void radixSort(String[] a, int length) {
    ArrayList&lt;String&gt;[] buckets = new ArrayList[128];
    for (int i = 0; i &lt; buckets.length; i++) {
        buckets[i] = new ArrayList&lt;&gt;();
    }
    for (int i = length - 1; i &gt;= 0 ; i--) {
        for (String s : a) {
            buckets[s.charAt(i)].add(s);
        }
        int k = 0;
        for (ArrayList&lt;String&gt; bucket : buckets) {
            for (String s : bucket) {
                a[k++] = s;
            }
            bucket.clear();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="堆排序o-nlogn" tabindex="-1"><a class="header-anchor" href="#堆排序o-nlogn"><span>堆排序O(nlogn)</span></a></h2><ul><li>堆排序是利用堆这种数据结构而设计的一种选择排序算法，它的最坏，最好，平均时间复杂度均为O(nlogn)，也是不稳定排序</li><li>堆是具有以下性质 <ul><li>完全二叉树（除了最后一层外，每一层的节点都是满的，且最后一层的节点尽可能地靠左排列。），</li><li>对于n个元素的序列{R0, R1, ... , Rn}当且仅当满足下列关系之一时，称之为堆： <ul><li>每个结点的值都大于或等于其左右孩子结点的值，Ri &gt;= R2i+1 且 Ri &gt;= R2i+2 称为大顶堆,i从0开始编号。注意 : 没有要求结点的左孩子的值和右孩子的值的大小关系。</li><li>每个结点的值都小于或等于其左右孩子结点的值，Ri &lt;= R2i+1 且 Ri &lt;= R2i+2 称为小顶堆,i从0开始编号。</li><li>升序用大顶堆，降序用小顶堆</li><li>设当前元素在数组中以R[i]表示，它的左孩子、右孩子、父结点是：R[2i+1]、R[2i+2]、R[(i-1)/2];其中i=1,2,…,n/2向下取整;</li></ul></li></ul></li><li>堆排序的思想 <ul><li>将待排序序列构造成一个大顶堆,此时，整个序列的最大值就是堆顶的根节点。 <ul><li>找到所有包含子节点的节点，也就是非叶子节点，然后调整他们的父子关系，因爲根据大顶堆的性质，每个节点的值都大于或者等于它的左右子节点的值。</li><li>非叶子节点遍历的顺序应该是从下往上，这比从上往下的顺序遍历次数少很多，因为，大顶堆的性质要求父节点的值要大于或者等于子节点的值，如果从上往下遍历，当某个节点即是父节点又是子节点并且它的子节点仍然有子节点的时候，因为子节点还没有遍历到，所以子节点不符合大顶堆性质，当子节点调整后，必然会影响其父节点需要二次调整。但是从下往上的方式不需要考虑父节点，因为当前节点调整完之后，当前节点必然比它的所有子节点都大，所以，只会影响到子节点二次调整。相比之下，从下往上的遍历方式比从上往下的方式少了父节点的二次调整。</li><li>最后一个非叶子节点的索引值？对于一个完全二叉树，在填满的情况下（非叶子节点都有两个子节点），每一层的元素个数是上一层的二倍，根节点数量是1，所以最后一层的节点数量，一定是之前所有层节点总数+1，所以，最后一层的第一个节点的索引，即节点总数/2（根节点索引为0），也就是第一个叶子节点，所以第一个非叶子节点的索引就是第一个叶子结点的索引-1。那么对于填不满的二叉树呢？当我们从上往下，从左往右填充二叉树的过程中，第一个叶子节点，一定是序列长度/2，所以第一个非叶子节点的索引就是arr.length / 2 -1。</li></ul></li><li>将其与末尾元素进行交换，此时末尾就为最大值。</li><li>然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了。在构建大顶堆的过程中，元素的个数逐渐减少，最后就得到一个有序序列了</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //编写一个堆排序的方法
	public static void heapSort(int arr[]) {
		//从最后一个非叶子节点开始向上调整，使整个数组符合大顶堆的性质。
		for(int i = arr.length / 2 -1; i &gt;=0; i--) {
			adjustHeap(arr, i, arr.length);
		}
		//2.将堆顶元素与末尾元素交换，将最大元素&quot;沉&quot;到数组末端
		//3.重新调整结构，使其满足堆定义，然后继续交换堆顶元素与当前末尾元素，反复执行调整+交换步骤，直到整个序列有序。
		for(int j = arr.length-1;j &gt;0; j--) {
			//交换
			int temp = arr[j];
			arr[j] = arr[0];
			arr[0] = temp;
			adjustHeap(arr, 0, j); 
		}
		
	}
	
	//将一个数组(二叉树), 调整成一个大顶堆
	/**
	 * 功能： 完成 将 以 i 对应的非叶子结点的树调整成大顶堆
	 * 举例  int arr[] = {4, 6, 8, 5, 9}; =&gt; i = 1 =&gt; adjustHeap =&gt; 得到 {4, 9, 8, 5, 6}
	 * 如果我们再次调用  adjustHeap 传入的是 i = 0 =&gt; 得到 {4, 9, 8, 5, 6} =&gt; {9,6,8,5, 4}
	 * @param arr 待调整的数组
	 * @param i 表示非叶子结点在数组中索引
	 * @param length 表示对多少个元素继续调整， length 是在逐渐的减少
	 */
	public  static void adjustHeap(int arr[], int i, int length) {
		
		int temp = arr[i];
		//1. k = i * 2 + 1 k 是 i结点的左子结点,循环找左节点，并防止溢出
		for(int k = i * 2 + 1; k &lt; length; k = k * 2 + 1) {
      // 如果右子节点大于左子节点，则k指向右子节点
			if(k+1 &lt; length &amp;&amp; arr[k] &lt; arr[k+1]) {
				k++;
			}
			if(arr[k] &gt; temp) {
				arr[i] = arr[k];
				i = k; //发生交换后，子节点可能受影响，所以继续遍历子节点
			} else {
				break;//没有发生交换直接退出
			}
		}
		//当for 循环结束后，我们已经将以i 为父结点的树的最大值，放在了最顶(局部)
		arr[i] = temp;//将temp值放到之前最大值的索引的地方完成当前节点和最大值的交换
	}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),s=[a];function r(d,v){return n(),e("div",null,s)}const m=i(t,[["render",r],["__file","sort.html.vue"]]),b=JSON.parse('{"path":"/interview/algorithm/sort.html","title":"排序","lang":"zh-CN","frontmatter":{"title":"排序","icon":"circle-info","date":"2023-01-01T00:00:00.000Z","tags":"排序","categories":"面试","description":"排序算法 排序算法(Sort Algorithm)是将一组数据，依指定的顺序进行排列的过程。 排序的分类： 内部排序：指将需要处理的所有数据都加载到内部存储器中进行排序。 插入排序：直接插入排序、希尔排序 选择排序：简单选择排序、堆排序 交换排序：冒泡排序、快速排序 归并排序 基数排序 外部排序：数据量过大，无法全部加载到内存中，需要借助外部存储(文件...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/algorithm/sort.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"排序"}],["meta",{"property":"og:description","content":"排序算法 排序算法(Sort Algorithm)是将一组数据，依指定的顺序进行排列的过程。 排序的分类： 内部排序：指将需要处理的所有数据都加载到内部存储器中进行排序。 插入排序：直接插入排序、希尔排序 选择排序：简单选择排序、堆排序 交换排序：冒泡排序、快速排序 归并排序 基数排序 外部排序：数据量过大，无法全部加载到内存中，需要借助外部存储(文件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/42c8f6b8f06cfbbad2482.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"排序\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/42c8f6b8f06cfbbad2482.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8c51d3e56ec82be128c9b.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8bb7c9d4b07f9195a38bf.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/5a6d66d80e037389d69d7.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/a053e1ecb9acb06c487e1.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/625043b7e9c3fa53e3c46.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/c9c5e395b4d5db1de172e.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8eb855b2d5544664f87cc.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"排序算法","slug":"排序算法","link":"#排序算法","children":[]},{"level":2,"title":"排序的分类：","slug":"排序的分类","link":"#排序的分类","children":[]},{"level":2,"title":"冒泡排序(Bubble Sorting) O(n^2)","slug":"冒泡排序-bubble-sorting-o-n-2","link":"#冒泡排序-bubble-sorting-o-n-2","children":[]},{"level":2,"title":"[简单]选择排序(select sorting)O(n^2)","slug":"简单-选择排序-select-sorting-o-n-2","link":"#简单-选择排序-select-sorting-o-n-2","children":[]},{"level":2,"title":"插入排序(Insertion Sorting)O(n^2)","slug":"插入排序-insertion-sorting-o-n-2","link":"#插入排序-insertion-sorting-o-n-2","children":[]},{"level":2,"title":"希尔排序(shell Sort)O(nlog2n)","slug":"希尔排序-shell-sort-o-nlog2n","link":"#希尔排序-shell-sort-o-nlog2n","children":[]},{"level":2,"title":"快速排序(Quick sort)O(n^2)","slug":"快速排序-quick-sort-o-n-2","link":"#快速排序-quick-sort-o-n-2","children":[]},{"level":2,"title":"归并排序(Merge sort)O(nlog2n)","slug":"归并排序-merge-sort-o-nlog2n","link":"#归并排序-merge-sort-o-nlog2n","children":[]},{"level":2,"title":"基数排序(radix sort)O(nlog2n)","slug":"基数排序-radix-sort-o-nlog2n","link":"#基数排序-radix-sort-o-nlog2n","children":[]},{"level":2,"title":"堆排序O(nlogn)","slug":"堆排序o-nlogn","link":"#堆排序o-nlogn","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":14.1,"words":4229},"filePathRelative":"interview/algorithm/sort.md","localizedDate":"2023年1月1日","excerpt":"<h2>排序算法</h2>\\n<ul>\\n<li>排序算法(Sort Algorithm)是将一组数据，依指定的顺序进行排列的过程。</li>\\n</ul>\\n<h2>排序的分类：</h2>\\n<ul>\\n<li>\\n<p>内部排序：指将需要处理的所有数据都加载到内部存储器中进行排序。</p>\\n<ul>\\n<li>插入排序：直接插入排序、希尔排序</li>\\n<li>选择排序：简单选择排序、堆排序</li>\\n<li>交换排序：冒泡排序、快速排序</li>\\n<li>归并排序</li>\\n<li>基数排序</li>\\n</ul>\\n</li>\\n<li>\\n<p>外部排序：数据量过大，无法全部加载到内存中，需要借助外部存储(文件等)进行排序。</p>\\n</li>\\n<li>\\n<p>稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；</p>\\n</li>\\n<li>\\n<p>不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；</p>\\n</li>\\n<li>\\n<p>内排序：所有排序操作都在内存中完成；</p>\\n</li>\\n<li>\\n<p>外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；</p>\\n</li>\\n<li>\\n<p>n: 数据规模</p>\\n</li>\\n<li>\\n<p>k: “桶”的个数</p>\\n</li>\\n<li>\\n<p>In-place: 不占用额外内存</p>\\n</li>\\n<li>\\n<p>Out-place: 占用额外内存</p>\\n</li>\\n</ul>","autoDesc":true}');export{m as comp,b as data};
