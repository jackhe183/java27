/*
	�ֲ��ڲ��ࣺ
		A:����ֱ�ӷ����ⲿ��ĳ�Ա
		B:���Դ����ڲ������ͨ����������ڲ��෽������ʹ�þֲ��ڲ��๦��

	�����⣺
		�ֲ��ڲ�����ʾֲ�����Ϊʲô��Ҫ��final����?
			��Ϊ�ֲ����������ŷ����ĵ�����϶���ʧ��
			���ʱ�򣬾ֲ�����û������Ӷ��ڴ�����ʧ��
			��Ҫʹ���Ǹ�������Ϊ�������ݻ��ܼ�����ʹ�ã�
			����fianl���Σ��������ڶ��ڴ�����洢����ʵ��һ������ֵ��
*/
class Outer {
	//private int num = 100;
		
	public void method() {
		final int num = 100;

		class Inner {
			public void show() {
				System.out.println(num);
			}
		}

		Inner i = new Inner();
		i.show();
	}
}

class InnerClassDemo3 {
	public static void main(String[] args) {
		Outer2 o = new Outer2();
		o.method();
	}
}