function digital_root(n) {
   return (n - 1) % 9 + 1;
 }
 console.log(digital_root(123));

 /*
 Prove that the formula P(s)=(s−1)mod9+1 finds the sum of one digit of an integer greater than 0 with one or more digits.

Prove:
Let A be the set of integers {1,2,...,9}.
Let P(s) be the sum of one digit of a multi-digit number.
Based on the formula P(s)=(s−1)mod9+1, s>0, then s−1 is always s≥0, so P(s)€A.
Let a1,a2,a3,...,an be the digits in a number, the value of the set {0,1,2,...,9}.
Let s be a 1 or more digit number.
Me has the general formula of s:

s=a1∗100+a2∗101+a3∗102+...+an∗10n−1=a1+a2∗10+a3∗102+...+an∗10n−1=a1+a2+a2∗(101−1)+a3+a3∗(102−1)+...+an+an∗(10n−1−1)=a1+a2+a3+...+an+a2∗9+a3∗99+...+an∗(10n−1−1)

Let b be the value of the expression a2∗9+a3∗99+...+an∗(10n−1−1), based on the sign of divisibility by 9, b is always divisible by 9.

Let Cn be the sum of n numbers, the values ​​obtained are respectively:

Cn	total value	values
C1	a1	0→1∗10−1=9∗1
C2	a1 + a2	0→2∗10−2=9∗2
C3	a1 + a2 + a3	0→3∗10−3=9∗3
Cn	a1 + a2 + a3 + ... + an	0→n∗10−n=9∗n
Cₙ=a1+a2+a3+...+an=a1+a2∗10+a3∗102+...+an∗10n−1−a2∗9−a3∗99−...−an∗(10n−1−1)=s−b

Conclusion [1] :
when s loses b value, we get a sum of digits
[2] When n = 1, then Cn € A , s=Cn, P(s)=(s−1)mod9+1 is always true.
With s:
s=Cn+b=(Cn)Cn+bCn+b​=((Cn)Cn)Cn+b(Cn)Cn+bCn+b​=...((Cn)Cn)Cn+b...((Cn)Cn)Cn+...+b(Cn)Cn+bCn+b​

Let Zm be the sum of Cn the expression of the value s, to get [3] the value Zm€A then:
s=b+bZ0+bZ1+bZ2+...+bZm−1+Zm
Let B be the value of the expression b+bZ0+bZ1+bZ2+...+bZm−1 then:
s=Zm+B​

Based on [1] :
P(s)=Zm+B−B=Zm+Bmod9​

Based on [2] and [3] :
P(s)=(Zm−1)mod9+1+Bmod9​=(Zm+B−1)mod9+1​=(s−1)mod9+1​

Conclusion Thesis:
The formula P(s)=(s−1)mod9+1 finds the sum of one digit of an integer greater than 0 with one or more digits.
 */