/*
	�����ڲ��ࣺû�����ֵ��ڲ���
	
	ǰ�᣺����һ������߽ӿ�
			�����������Ǿ�����Ҳ�����ǳ����ࡣ

	��ʽ��
		new �������߽ӿ���() {
			��д����;
		}

	������⣺�䱾���������������
*/
interface Inter {
	public abstract void show();
	public abstract void show2();
}

class Outer {
	private int num = 100;

	public void method() {
		//һ������
		/*
		new Inter() {
			public void show() {
				System.out.println("show");
			}
		}.show();
		*/

		
		//��������
		/*
		new Inter() {
			public void show() {
				System.out.println("show");
			}

			public void show2() {
				System.out.println("show2");
			}
		}.show();

		new Inter() {
			public void show() {
				System.out.println("show");
			}

			public void show2() {
				System.out.println("show2");
			}
		}.show2();
		*/

		//��������
		Inter2 i = new Inter2() {
			public void show() {
				System.out.println("show");
			}

			public void show2() {
				System.out.println("show2");
			}
		};

		i.show();
		i.show2();
	}
}

class InnerClassDemo4 {
	public static void main(String[] args) {
		Outer2 o = new Outer2();
		o.method();
	}
}
