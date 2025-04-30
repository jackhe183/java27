/*
	��������������ࡣ

	class Body {
		private class Heart {
			public void operator() {
				System.out.println("�������");
			}
		}

		public void method() {
			if(�������ҽ��){
				Heart h = new Heart();
				h.operator();
			}
		}
	}

	Body.Heart bh = new Body().new Heart();
	bh.operator();

	Ϊ�˲������ֱ�ӷ�������������ԣ����ǰ��ڲ�����private���Ρ�
	���ʱ���ֲ����������ˣ���ô�����׸���ô�����?
	���ǾͿ������ⲿ���ж���һ�����ܣ�
	�������ʹ����?
		Body b = new Body();
		b.method();
		

	��Ա�ڲ��ࣺ
		private��Ϊ�����ݵİ�ȫ��
		static��Ϊ�������ݷ��ʸ�����

*/
/*
class Outer {
	private class Inner {
		public void show() {
			System.out.println("show");
		}
	} 

	public void method() {
		Inner i = new Inner();
		i.show();
	}
}
*/

class Outer {
	//int num  = 10;
	//static int num2 = 20;

	public static class Inner {
		public void show() {
			System.out.println("show");
			//System.out.println(num);
			//System.out.println(num2);
		}

		public static void show2() {
			System.out.println("show2");
			//System.out.println(num);
			//System.out.println(num2);
		}
	}
}

class InnerClassDemo2 {
	public static void main(String[] args) {
		//����
		//Outer.Inner oi = new Outer().new Inner();
	
		//��private����
		//Outer o = new Outer();
		//o.method();

		//��static���κ�����д������
		//Outer.Inner oi = new Outer().new Inner();
		//�������޶�
		Outer2.Inner oi = new Outer2.Inner();
		oi.show();
		oi.show2();

		//Outer.Inner.show2();
	}
}
