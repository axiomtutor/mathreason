---
title: "Chapter 1: A Case Study in Number Theory"
---

This chapter is a case study in elementary number theory.  

As you read this case study, of course, one intent is for you to learn number theory.  But it is just one of the intended goals of this chapter.

You should also pay attention to the use of logic in proofs.  If a theorem claims that something is true "if and only if" something else, then you should notice how this corresponds to the structure of the proof.  You should also pay attention to proof by cases, proof by contradiction, and any other styles of proof.  These will all serve as examples later on when we discuss set theory.

Also you should pay attention to the use of any sets.  This will help to motivate why we need the study of sets in order to study other mathematical subjects, like this one.

# Divisibility

A fundamental interest in number theory is to understand how a natural number can be written as a product of smaller numbers.  This is the same as the question of "which numbers divide a given number".

For example, 4 can be written as the product $2\cdot 2$.  In fact, technically, it can also be written as $1\cdot 4$ or $4\cdot 1$.  

Equivalently this means that the divisors of 4 are 1, 2, and 4.

> [!definition] ***Definition***
> 
> If *n* is an integer, and $a,b$ are integers such that $n=ab$, then the following statements are equivalent:
> 
> - *a* and *b* are **factors** of *n*.
> - *a* and *b* **divide** *n*.
> - *n* is a **multiple** of *a*, and is a multiple of *b*.
> 
> When *a* divides *n*, we write $a|n$.  Note that, if $a\mid n$, then by definition there exists an integer *b* such that $n=ab$.
> 
> For each integer *n*, we will say that the **trivial divisors** or **trivial factors** of *n* are: 1, -1, $n,$ and $-n$.  

For example, 5 and 7 are factors of 700.  The former is true because $700 = 5\cdot 140$ (in the definition we use $a=5$ and $b=140$).  The latter is true because $700 = 7\cdot 100$.  

Equivalently, 5 and 7 divide 700.  Equivalently, 700 is a multiple of 5 and 7.  

Therefore $5\mid700$ and $7\mid700$. 

The trivial divisors of 700 are 1, -1, 700, and -700.  

The trivial divisors are called "trivial" because any number is divisible by its trivial divisors.  In that sense, they are not "interesting".

> [!exercise] ***Exercise***
> Find all of the divisors of -6, and identify which of them are the trivial divisors.
> 
> Also find all ways of writing -6 as a product of two integers.  For example, one way to write -6 as a product of two integers is $1\cdot -6$, and another is $-1\cdot 6$.  
> 
> > [!note]- ***Solution***
> > Its divisors are 1, 2, 3, 6, -1, -2, -3, -6.  The trivial divisors are 1, -1, 6, and -6.
> > 
> > The following lists all ways of writing -6 as a product of two integers.  
> > 
> > $1\cdot -6, 2\cdot -3, -1\cdot 6, -2\cdot 3$
> > 
> > $-6\cdot 1, -3\cdot 2, 6\cdot -1, 3\cdot -2$.  

We cannot talk about a number with no divisors, since there are always the trivial divisors.  Instead we define the notion of a number without any "nontrivial divisors", which we call a prime number.

For example, 2 is greater than 1 and has only the factorizations $2\cdot1$ and $1\cdot2$.  Since 1 and 2 are trivial divisors of 2, the fact that 2 has no other factorization means that 2 is prime.  Likewise 3 is prime.

But 4 is composite because $4=2\cdot 2$, and 2 is not a trivial divisor of 4.

For simplicity we will restrict our definition of prime numbers to those larger than 1.  Doing otherwise would cause difficulties later on.  

> [!definition]- ***Definition***
> For each integer $n > 1$ we say that *n* is **prime** if all of its divisors are trivial.  If *n* is not prime, we call it **composite**.

The prime numbers are the “atoms” in the universe of number theory.  They are the fundamental and indivisible objects, which assemble to make all the other objects. This helps to suggest why they are interesting to mathematicians.

> [!exercise] ***Exercise***
>
>Find the first 10 primes.
>
> > [!note]- Solution
    >>
    >> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.


Let us see a first proof of a theorem.

> [!theorem] ***Theorem***
>
>Let *a* and *n* be any two natural numbers.
>
>$a|n$ if and only if $\frac n a$ is a natural number.

Note that the claim is an "if and only if" statement.  This means two things: "If $a|n$ then $\frac n a$ is a natural number" and "If $\frac n a$ is a natural number then $a|n$".
> [!proof] ***Proof***
>
>Let *a* and *n* be natural numbers.
>
> > [!note]- If $a|n$ then $\frac n a$ is a natural number.
> >   
> >   Suppose that *a* divides *n*.  Then by definition, there is a natural number *b* such that $n=ab$.  
> >   
> >   Then $\frac n a = b$, and since we already noted that *b* is a natural number, then therefore $\frac n a$ is a natural number.
>    
> > [!note]- If $\frac n a$ is a natural number, then $a|n$.
> >   
> >   Suppose that $\frac n a$ is a natural number, and let’s call that number *b*.  So $\frac n a = b$.
> >   
> >   Then $n = ab$ and therefore, by definition, $a|n$.
>    
>
>$\Box$

> [!note]- Why do we have to prove such obviously true statements?
    >
    >Although the theorem is obvious, we will later see very advanced theorems which are not obvious.  
    >
    >In order to prove advanced theorems, we will need to use sophisticated techniques of logic.  It is better to see those techniques of logic employed now, while things are easy.  That way, when we get to the hard ones, you will already have some facility with the logic.

> [!definition] ***Theorem***
> 
> Every integer is divisible by 1 and by itself.

> [!proof] ***Proof***
> 
> Let *n* be any integer.
> 
> Then $n = 1\cdot n$. 
> 
> So $n\mid n$.
> 
> It also follows from $n=1\cdot n$ that $1\mid n$.
> 
> $\Box$

The proof above is extremely simple, yet demonstrates an important point: If a proof is to be rigorous, it must refer to the exact and literal definitions of the terms involved.

To prove that *n* divides itself, it's not enough to just say that it's "obvious".  You must use the definition that *a* divides *b* if there exists an integer *k* such that $ak = b$.  

We applied this principle in the proof above, by showing that $1\cdot n = n$.  When aligning *a* with 1 and *b* with *n*, the definition implies that $1|n$.  When aligning *a* with *n* and aligning *b* with *n*, the definition implies that $n|n$.

> [!exercise] ***Exercise***
> 
> Suppose that $a,b,c$ are natural numbers such that $a|b$ and $b|c$.
> 
> Prove that therefore $a\mid c$.
> > [!note]- Solution
    >> 
    >> Suppose that $a,b,c$ are natural numbers such that $a|b$ and $b|c$.  Since $a|b$ then by definition there is an integer, *x*, such that $b= ax$.  Since $b|c$ there is some integer, *y*, such that $c=by$.
    >> 
    >> By substitution of one equation into the other, we obtain 
    >> 
    >> $$
    >> \begin{aligned}
    >> c &= (ax)y\\
    >> &= a(xy)
    >> \end{aligned}
    >> $$
    >> 
    >> Since *x* and *y* are natural numbers, therefore $xy$ is a natural number.  
    >> 
    >> We have now shown that *a* and *xy* are factors of *c.*  In particular, this means that $a|c$.
    >> 
    >> $\Box$
    

> [!exercise] ***Exercise***
> 
> Suppose that $a,b,c$ are natural numbers such that $ab\mid c$.  
> 
> Prove that $a\mid c$.
> > [!note]- Solution
>     > 
>     > Suppose that $a,b,c$ are natural numbers such that $ab|c$. Then by definition there is a natural number *x* such that $c=(ab)x$.
>     > 
>     > Then $c = a(bx)$.  Since *b* and *x* are natural numbers therefore $bx$ is a natural number, and therefore by definition $a|c$.
>     > 
>     > $\Box$
    

> [!exercise] ***Exercise***
> 
> Suppose that *a* and *b* are natural numbers such that $a|b$ and $b|a$.  
> 
> Prove that $a=b$.
> 
> > [!note]-  Solution
> > Since $a\mid b$, there is a natural number $m$ such that $b=am$. Since $b\mid a$, there is a natural number $n$ such that $a=bn$.
> > 
> > Substituting $b=am$ into $a=bn$ gives $a=amn$. Since $a$ is a natural number, $a>0$, so $mn=1$. The only natural numbers whose product is 1 are 1 and 1. Thus $m=n=1$, and therefore $a=b$.
> > 
> > $\Box$

> [!exercise] ***Exercise***
> 
> Suppose that $a,b,c$ are natural numbers such that $a|b$ and $a|c$.  
> 
> Prove that $a|b+c$.
> 
> > [!note]- Solution
> > Since $a\mid b$, there is a natural number $m$ such that $b=am$. Since $a\mid c$, there is a natural number $n$ such that $c=an$.
> > 
> > Therefore $b+c=am+an=a(m+n)$. Since $m+n$ is a natural number, it follows from the definition of divisibility that $a\mid b+c$.
> > 
> > $\Box$

# Quotient and Remainder

> [!definition] ***Definition***
> 
> Let *x* be an integer and *d* a positive integer. Let *q* and *r* be the unique integers satisfying 
> 
> $$
> x = qd+r, \quad 0\le r<d
> $$
> 
> We call *q* the **quotient** and *r* the **remainder** when *x* is divided by *d*.
> 
> We write 
> 
> $$
> \begin{aligned}
>   q &= x \text{ div } d\\
>   r &= x \text{ mod } d
> \end{aligned}
> $$

The above definition assumes, for any given integers *x* and $d > 0$, that the quotient and remainder

- exist, and
- are unique.

For example, if $x=16$ and $d=6$ then there is a quotient-remainder pair.  Namely, $q=2$ and $r=4$.  

Moreover, there is no other quotient-remainder pair.  That is to say, 2 and 4 are the only numbers which satisfy 

$$ 16 = 6q+r, \quad 0\le r<6 $$

But so far we just assume that existence and uniqueness are true.

We shouldn’t let such assumptions go unproven.


> [!theorem] ***Theorem***
> 
> Let *x* be an integer and *d* a positive integer.  
> 
> Then there exist unique integers *q* and *r* satisfying 
> 
> $$
> x = qd+r, \quad 0\le r< d
> $$

Note that, to prove this theorem we must: 

- Find integers *q* and *r* satisfying
    - $x=qd+r$
    - $0\le r$
    - $r < d$
- Show that no *other* integers also have these properties.

In the proof below we will proceed in the following order.

1. Find *r*.
2. Find *q.*
3. Prove that $r\ge 0$.
4. Prove that $r<d$.
5. Prove that $x=qd+r$.
6. Prove uniqueness.  That means, prove that for any integers $q_2,r_2$ satisfying $x=q_2d+r_2$ and also $0\le r_2<d$, we must have that $q=q_2$ and $r=r_2$.

> [!proof] ***Proof***
> 
> > [!note]- Finding *r*.
> > 
> > Let 
> > 
> > $$
> > S = \{x-qd: q\in\Bbb Z, x-qd \ge 0\}
> > $$
> > 
> > > [!note]- *S* explained.
> > >     
> > >    If the definition of *S* is confusing, let’s see a specific example.  
> > >     
> > >    Suppose for instance that $x=17$ and $d=4$.  
> > >     
> > >    Then we find the choices of *q* such that $x-qd$ is nonnegative.  That means we consider every nonnegative $17-4q$.  
> > >    
> > >    Let's start by trying out $q=1,2,3,4$.
> > >     
> > >    $$
> > >   \begin{aligned}
> > >     17-4(1) &= 13\\
> > >     17-4(2) &= 9\\
> > >     17-4(3) &= 5\\
> > >     17-4(4) &= 1
> > >   \end{aligned}
> > > $$
> > >     
> > >   Of course with $q=0,-1,-2,\dots$ we would see even more nonnegative values of $x-qd$.
> > >     
> > >   Note that, regardless of the value of *x* and *d*, it is always possible to choose *q* such that $x-qd$ is nonnegative.  We will use this fact below, but we will also prove it after we are done with the current proof.  
> >     
> > 
> > *S* has at least one element (as explained in the note above).  
> > 
> > Because *S* is a nonempty set of nonnegative numbers, then $\min(S)$ exists.  
> > 
> > Define 
> > 
> > $$
> > r = \min(S)
> > $$
> 
> > [!note]- Finding *q*.
> > 
> > Since $r\in S$ then 
> > 
> > - there is a $q\in\Bbb Z$ such that $r=x-qd$
> > - $x-qd \ge 0$
> 
> > [!note]- Showing $r\ge 0$.
> > 
> > Note that this means $r=x-qd\ge 0$, which shows that $r\ge 0$.
> 
> > [!note]- Showing $r<d$.
> >
> > > [!note]- If $r \ge d$ then *r* is not a lower bound of *S*.
> > >    
> > >  Suppose that $r\ge d$.  
> > >    
> > >  Then $r-d\ge 0$
> > >    
> > >  From $r=x-qd$ we have 
> > >    
> > >  $$
> > >  \begin{aligned}
> > >   r-d &= x-qd-d \\
> > >   &= x-(q+1)d
> > >  \end{aligned}
> > > $$
> > >    
> > >    Since $x-(q+1)d\ge 0$ then therefore $x-(q+1)d \in S$.
> > >    
> > >    But also 
> > >    
> > >    $$
> > >  x-qd > x-(q+1)d
> > >  $$
> > >    
> > >  This is because $q<q+1$ so $qd < (q+1)d$, and so $-qd > -(q+1)d$, and so $x-qd > x-(q+1)d$.
> > >    
> > >  But this now show that there is an element in *S* which is smaller than $r=x-qd$.  Therefore *r* is not a lower bound of *S*.
> >    
> >
> >Notice that the principle above equivalently shows that, if *r* is a lower bound of *S* then $r < d$.
> >
> >But because $r=\min S$ by definition, then *r* is a lower bound of *S*.
> >
> >Therefore $r < d$.
> 
> > [!note]- Showing $x=qd+r$.
> > 
> > From the fact that $r=x-qd$ we have that $x=qd+r$.  
> 
> > [!note]- Showing uniqueness.  
> > 
> > Suppose that there are integers $q_2,r_2$ satisfying $x=q_2d+r_2$ and $0\le r_2<d$.
> > 
> > Note that therefore $qd+r=q_2d+r_2$ and so $r-r_2 = (q_2-q)d$.
> > 
> > This proves that $r-r_2$ is a multiple of *d*.  
> > 
> > But because $0\le r<d$ and $0\le r_2 < d$ then we must have that $-d < r-r_2 < d$.
> > 
> > The only multiple of *d* which is greater than -*d* and less than *d* is just the multiple 0.
> > 
> > Therefore $r-r_2=0$ and so $r=r_2$.
> > 
> > Because of this, together with $qd+r=q_2d+r_2$ we can now infer that $qd=q_2d$.  And since $d>0$ we have $q=q_2$.
> > 
> > $\Box$

The proof relied on the following principle, which we should prove before moving on to the next topic.

> [!theorem] ***Theorem***
> Let *x* be any integer, and *d* a positive integer. 
> 
> Then $x+|x|\ge0$ and, because $d\ge1$, $x+|x|d\ge0$.
> 
> Moreover, there always exists an integer *q* such that $x-qd>0$.

Notice that the following proof employs a technique called "proof by cases".  It breaks the proof up into two possibilties: If $x\ge 0$ then we will show the claim holds, and if $x < 0$ then we will again show that the claim holds.  

> [!proof] ***Proof***
> Let *x* be an integer.  
> 
> If $x\ge 0$ then $|x|=x$ and therefore $x+|x| = 2x \ge 0$.
> 
> If $x < 0$ then $|x|=-x$ and therefore $x+|x| = 0 \ge 0$.  
> 
> Hence, in every possible case, we always have $x+|x| \ge 0$.
> 
> If *d* is a positive integer, then therefore $|x|d \ge |x|$ which implies $x+|x|d \ge x+|x|$.
> 
> Now we can prove that there is always a choice of integer *q* such that $x-qd$ is positive.  Set $q = -|x|-1$.  Then 
> $$ \begin{aligned}
> x-qd &= x-(-|x|-1)d \\
> &= x+|x|d + d
> \end{aligned} $$
> Since we have already shown $x+|x|d\ge0$ it follows that $x+|x|d + d > 0$, using the fact that $d > 0$.  
> 
> $\Box$

> [!exercise] ***Exercise***
> 
> Let $x=10$ and $d=3$.  
> 
> (Part 1.)
> 
> Find the quotient and remainder of $\frac x d$.
> 
> (Part 2.)
> 
> Write down the three smallest elements of 
> 
> $$
> S = \{x-qd:q\in\Bbb Z, \ x-qd\ge 0\}
> $$
> 
> Repeat the exercise with $x=1$ and $d=2$.

> [!exercise] ***Exercise***
> 
> Find the quotient and remainder for $x=-10$ and $d=3$.

> [!exercise] ***Exercise***
> 
> Let $x\in\Bbb Z$ and $d\in\Bbb Z^{>0}$.
> 
> Show that $d\mid x$ if and only if $x\mod d = 0$.

> [!definition] ***Definition***
> 
> An integer, *n,* is called **even** if $n\mod 2 = 0$.  If $n\mod 2 = 1$ then *n* is called **odd**.  

> [!theorem] ***Theorem***
> 
> For any integer, *n*, we have that *n* is either even or odd, but not both.

> [!proof] ***Proof***
> 
> Let $n=2q+r$ be the quotient-remainder decomposition of $n/2$.  
> 
> By definition, $q=n\text{ div } 2$ and $r = n\mod 2$.
> 
> We know, from the quotient-remainder theorem above, that *q* and *r* are integers, and $0\le r<2$.  
> 
> Therefore the only integers that *r* could be are 0 or 1.
> 
> > [!note]- *Case 1*: $r=0$.
> > 
> > Suppose that $r=0$.  Then $n\mod 2 = 0$ and therefore *n* is even.  
> > 
> > Because $q,r$ are unique, we cannot also have $r=1$, hence $n\mod 2 \ne 1$.  Therefore *n* is not odd.
> > 
> > So *n* is even or odd, but not both.  
> 
> > [!note]- *Case 2*: $r=1$.
> > 
> > Suppose that $r=1$.  Then $n\mod 2=1$ and therefore *n* is odd.
> > 
> > Because of uniqueness, $n\mod 2\ne 0$ and therefore *n* is not even.
> > 
> > So *n* is even or odd, but not both.
> 
> The only cases are $r=0$ and $r=1$.  In both cases, the theorem is true.
> 
> Therefore the theorem is always true.
> 
> $\Box$

> [!theorem] ***Theorem***
> 
> The product of an even and odd integer is even.

> [!proof] ***Proof***
> 
> Let *m* be an even integer, and *n* an odd integer.  Then $m\mod 2=0$ and $n\mod 2=1$.
> 
> By definition of the modulus, there is an integer $q_1$ such that $m=2q_1+0$, and an integer $q_2$ such that $n=2q_2+1$.
> 
> Then their product is 
> 
> $$
> \begin{aligned}
>  mn &= (2q_1)(2q_2+1) \\
>  &= 2(2q_1q_2+q_1)
> \end{aligned}
> $$
> 
> Define $k=2q_1q_2+q_1$.  Because *k* is a product and sum of integers, therefore *k* is an integer.  
> 
> By definition, therefore, $mn=2k$ shows that $mn\mod 2 = 0$ and therefore *mn* is even.  
> 
> $\Box$

> [!exercise] ***Exercise***
> 
> Prove that the product of two even integers is even.
> 
> Prove that the product of two odd integers is odd.
> 
> Prove that the sum of two even integers is even, the sum of an even and odd is odd, and the sum of two odds is even.

# Greatest Common Divisor

Suppose that you wish to simplify the fraction 

$$
\frac{12}{18}
$$

One can do it by eliminating a factor of 2, so that the fraction becomes 

$$
\frac{6}9
$$

One could then notice a shared factor of 3 and cancel this as well, resulting in 

$$
\frac 2 3
$$

We could have noticed right at the beginning that each number shared a factor of 6, and that this was the greatest common factor for the two numbers.  If we had seen that in the beginning we could have done everything in one step, by dividing by 6.

---

The above demonstrates just one use of the idea of the following definition.

> [!definition] ***Definition***
> 
> Let $a,b\in\Bbb Z$.  For any integer $d\in\Bbb Z$ we say that *d* is a **common divisor** of *a* and *b*, if both $d|a$ and $d|b$.
> 
> If *a* and *b* are not both zero, then we say that an integer $d\in\Bbb N$ is **the greatest common divisor** of *a* and *b*, if 
> 
> $$
> d = \max\{e\in\Bbb N:e\text{ is a common divisor of $a$ and $b$}\}
> $$
> 
> When *d* is the greatest common divisor of *a* and *b*, we write $d=\gcd(a,b)$.
> 
> If $\text{gcd}(a,b) = 1$ then we say that *a* and *b* are **coprime**.

> [!exercise] ***Exercise***
> 
> Explain why, if *a* and *b* are not both zero, then the set of their common divisors is bounded above, and therefore must have a maximum.  

> [!exercise] ***Exercise***
> 
> Find gcd(6,6) and gcd(6,7) and gcd(6,8) and gcd(6,9) and gcd(6,12).

> [!exercise] ***Exercise***
> 
> Let $a,b\in\Bbb Z$ and assume that not both are zero.  Let $d=\gcd(a,b)$.
> 
> Prove that $2d$ is a common divisor of $2a$ and $2b$.
> 
> Try to prove that $2d$ is the greatest common divisor of $2a$ and $2b$, but do not break your back trying to do this.  You will probably get stuck, since this proof is surprisingly hard.  
> 
> In order to prove that $2d=\gcd(2a,2b)$, you would have to show that, if *e* is any common divisor of $2a$ and $2b$, then $2d\ge e$.  
> 
> Think about proving this, and realize how hard it is to come up with a rigorous proof, using only the theorems that we’ve developed so far in the course.  (You can't use other common-knowledge facts about divisors.)
> 
> But after some of the other theorems in this chapter, we will actually be able to prove that $2d = \gcd(2a,2b)$ quite easily.

> [!exercise] ***Exercise***
> 
> Identify which of the following pairs are coprime.
> 
> - $a=2, b=3$
> - $a=-1, b=1$
> - $a=36, b=15$
> - $a=36, b=0$

# Integer Combinations

> [!definition] ***Definition***
> 
> For any $x,y\in\Bbb Z$, an expression $ax+by$, where $a,b\in\Bbb Z$, is called an **integer combination of *x* and *y***.  
> 
> The **set of all integer combinations of *x* and *y*** is 
> 
> $$
> \{ax+by:a,b\in\Bbb Z\}
> $$

For example, set $x=2, y=4$.  Then 

$$
(3)2+(-2)4 = -2
$$

is an integer combination of *x* and *y*.  

Another integer combination of them is 

$$
(-2)2 + (-1)4 = -8
$$

Therefore $-2$ and $-8$ are in the set of all integer combinations of 2 and 4.

> [!theorem] ***Theorem***
> 
> Let $x,y\in\Bbb Z$ and not both of them equal to zero.  
> 
> Then there exists an integer combination of *x* and *y*, which is equal to $\gcd(x,y)$.

> [!proof] ***Proof***
> 
> Let $x,y\in\Bbb Z$, not both equal to zero.
> 
> Define the set 
> 
> $$
> L=\{ax+by:a,b\in\Bbb Z, ax+by>0\}
> $$
> 
> > [!note]- $L$ is a nonempty set of integers bounded below.
> > 
> > > [!exercise] ***Exercise***
> > > 
> > > Prove that $L\ne \emptyset$, that it is bounded below, and is a set of integers.
> 
> > [!note]- Find *a* and *b*.
> > 
> > Define 
> > 
> > $$
> > \begin{aligned}
> > d&=\min L\\
> > &= ax+by\\
> > \end{aligned}
> > $$
> 
> > [!note]- Show that *d* is a common divisor.
> > 
> > Let the quotient-remainder decomposition of $\frac xd$ be 
> > 
> > $$
> > x=qd+r, \quad 0\le r<d
> > $$
> > 
> > Then 
> > 
> > $$
> > \begin{aligned}
> >  x &= q(ax+by)+r 
> > \end{aligned}
> > $$
> > 
> > which implies 
> > 
> > $$
> > r = (1-aq)x + (-bq)y
> > $$
> > 
> > Now *r* is a nonnegative linear combination of *x* and *y*.  
> > 
> > Recall that *d* is the minimum positive linear combination of *x* and *y*, and therefore $r=0$ or $d\le r$.
> > 
> > But since we already have $r < d$ then we must have $r=0$.
> > 
> > Therefore $d|x$.
> > 
> > > [!exercise] ***Exercise***
> > > 
> > > Show that $d\mid y$.  The proof is a rehearsal of the proof that $d|x$, but *mutatis mutandis*.
> > > 
> > > > [!note]- Note: I am fond of using the phrase “*mutatis mutandis*” in proofs. 
> > > >    It means “With the necessary changes having been made”. 
> > > >    
> > > >    I use this phrase to indicate that a part of the proof is very similar to the previous part, but with minor rearrangements or substitutions.  
>     
> 
> > [!note]- Show that *d* is the greatest common divisor.
> > 
> > Suppose that $e\in\Bbb Z$ is a common divisor of *x* and *y*.  
> > 
> > Then $e\mid ax+by=d$, and therefore $e\le d$.
> > 
> > Hence *d* is a common divisor, and an upper bound on the set of common divisors. Hence it is the maximum element, in the set of common divisors.
> > 
> Therefore $d = \gcd(x,y)$.
> 
> $\Box$

> [!exercise] ***Exercise***
> 
> Find $\gcd(2,3)$.
> 
> Then find *a* and *b* such that $a(2)+b(3)=1$. 
> 
> Now find *another* pair of *a* and *b* such that $a(2)+b(3)=1$.
> 
> Now find *a* and *b* such that $a(6)+b(100) = 2$.
> 
> > [!note]- The lesson.
>     > 
>     > Given *x* and *y* you have a theorem guaranteeing the existence of *a* and *b* such that 
>     > 
>     > $$
>     > ax+by=(x,y)
>     > $$
>     > 
>     > But just because you have a theorem doesn’t mean you have an algorithm to efficiently find *a* and *b*.  We will see an algorithm later.

> [!exercise] ***Exercise***
> Explain why it is impossible to find integers *a* and *b* such that 
> $$ 6a + 9b = 1 $$

> [!exercise] ***Exercise***
> 
> Let $x,y\in\Bbb Z$ and not both zero.  Let $d=\gcd(x,y)$.
> 
> Show that $2d = (2x,2y)$.  *Hint*: Apply the integer combination theorem to $d=(x,y)$, and multiply by 2.  Then argue that any common divisor of $2x$ and $2y$ must divide $2d$.
> 
> > [!note]- The lesson.
>    >  
>    > We couldn’t do this before we had the integer combination theorem, but we can do it now.  Hence the integer combination theorem is valuable.
    

# Prime Numbers

The prime numbers are perhaps *the* object of study in number theory.  

> [!definition] ***Definition***
> 
> For each integer $n$, we say that the **trivial divisors of *n*** are $1,-1,n,$ and $-n$.
> 
> If $n\ge2$ and every divisor of *n* is trivial, then we say that *n* is **prime**. If $n\ge2$ is not prime, then we say that it is **composite**.

For example, 2 is prime since its only divisors are 1 and 2, which are trivial.  3 is also prime.  4 is not because $4=2\cdot 2$ and 2 is not a trivial divisor of 4.

> [!exercise] ***Exercise***
> 
> List the first ten primes.
> 
> Check whether 123 is prime, and whether 127 is prime.  

> [!exercise] ***Exercise***
> 
> Prove that an integer $n\ge 2$ is prime if and only if it is coprime with every $m\in\Bbb Z$ such that $2\le m < n$.

> [!exercise] ***Exercise***
> 
> Find integers $a,b,c\ge 2$ such that $a\mid bc$ but also $a\nmid b$ and $a\nmid c$.
> 
> *Hint*: If you read the statement of the next theorem, it suggests that you should not choose *a* to be a prime number.  

The following is a fundamental fact about prime numbers, which deeply characterizes how they behave.  

> [!theorem] ***Theorem***
> 
> Let *p* be a prime and $a,b\in\Bbb Z$ such that $p | ab$.  
> 
> Then either $p\mid a$ or $p\mid b$.  

The following proof uses a particular way of proving an “or” statement:  In order to prove $p|a$ or $p|b$, we prove that if $p \not| \ \ a$ then $p|b$.

We will study logical patterns like this one in the next chapter.

> [!proof] ***Proof***
> 
> Suppose that *p* is prime and $a,b\in\Bbb Z$ such that $p\mid ab$.  
> 
> Suppose that $p\not| \ \ a$.  
> 
> Since *p* is prime, its only positive divisors are 1 and *p*.  Therefore $\gcd(p,a)$ is 1 or *p*.
> 
> But since $p\not| \ \ a$ then $(p,a) = 1$.
> 
> By the integer combination theorem, there are $x,y\in\Bbb Z$ such that 
> 
> $$
> xp+ya = 1
> $$
> 
> Multiplying throughout by *b*, 
> 
> $$
> xpb + yab = b
> $$
> 
> Now $p\mid xpb$ because $p|p$.
> 
> Also $p\mid yab$ because $p|ab$.  
> 
> Therefore *p* divides the left-hand side, $xpb+yab$.  But since this equals the right-hand side, *b*, we must have that that $p\mid b$.
> 
> $\Box$