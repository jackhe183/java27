/*
	�ڲ��ࣺ���ඨ������������ڲ��������ͱ���Ϊ�ڲ��ࡣ
		����������A��������B���ڲ���A����Ϊ�ڲ��ࡣ

	�ڲ���ķ����ص㣺
		A:�ڲ������ֱ�ӷ����ⲿ��ĳ�Ա������˽�С�
		B:�ⲿ��Ҫ�����ڲ���ĳ�Ա�����봴������

	�����ڲ��������е�λ�ò�ͬ���ڲ�����Է�Ϊ��
		A:��Աλ��
			��Ա�ڲ���
		B:�ֲ�λ��
			�ֲ��ڲ���

	��Ա�ڲ��ࣺ
		A:�����ڲ��ķ���
			�����ڲ���Ķ��󼴿ɡ�
			��ʽ���ⲿ����.�ڲ����� ������ = �ⲿ�����.�ڲ������;
*/
class Outer {
	private int num = 10;

	//��Աλ��
	class Inner	{
		public void show() {
			System.out.println(num);
		}
	}

	public void method() {
		Inner i = new Inner();
		i.show();
	}
}

class InnerClassDemo {
	public static void main(String[] args) {
		//����
		//Inner i = new Inner();
		//i.show();
	
		//��ʽ���ⲿ����.�ڲ����� ������ = �ⲿ�����.�ڲ������;
		Outer2.Inner oi = new Outer2().new Inner();
		oi.show();
	}
}