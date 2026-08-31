---
title: "Chapter 1: A Case Study in Number Theory"
---


This chapter is a case study in elementary number theory.  

In a course in mathematical reasoning, this might be strange: Shouldn’t we first study logic, so that we may know how to reason? And then study sets, so that we have a foundation in an elementary subject which is used by all other subjects?  And then we may choose to study number theory, or analysis, or other subjects which typically require no other prerequisites?

I wanted to approach mathematical reasoning in precisely the reverse way. I think a student often benefits from having an intuitive example *first*, and then to see how the example is abstracted into a theory.  After all, this is precisely how actual mathematics gets done in practice.  

Therefore this lesson in number theory is a case study. It assumes only the intuitive understanding of logic and sets developed in the preceding chapter, so that we can study some basic results in number theory, including the GCD integer combination theorem.

# Divisibility

A fundamental interest in number theory is to understand how a given number can be written as a product.  

- This has applications in cryptography, computer science, abstract algebra, and apparently (although I personally know nothing about this) physics.
    
    Number theorists would further argue that number theory doesn’t need any applications to make it interesting.  
    
    It is common for number theorists to say that number theory is just interesting, for it’s own sake, without any reference to the outside world.  
    

For example, 4 can be written as the product $2\cdot 2$.  In fact, technically, it can also be written as $1\cdot 4$ or $4\cdot 1$.  

> [!definition] ***Definition***
> 
> If *n* is a natural number, and $a,b$ are natural numbers such that $n=ab$, then the following statements are equivalent:
> 
> - *a* and *b* are **factors** of *n*.
> - *a* and *b* **divide** *n*.
> - *n* is a **multiple** of *a*, and is a multiple of *b*.
> 
> When *a* divides *n*, we write $a\mid n$.  Note that, if $a|n$ then it follows immediately by definition that there exists a natural number *b* such that $n=ab$.
> 
> For each natural number *n*, we will say that *n* and 1 are **trivial divisors** or **trivial factors** of *n*.
> 
> For each natural number $n \ge 2$ we say that *n* is **prime** if all of its divisors are trivial.  If *n* is not prime, we call it **composite**.

The prime numbers are the “atoms” in the universe of number theory.  They are the fundamental and indivisible objects, which assemble to make all the other objects.  We could call composite numbers “molecules” in this analogy to chemistry.

For example, 2 is at least 2 and has only the factorizations $2\cdot 1$ and $1\cdot 2$.  Since 1 and 2 are trivial divisors of 2, the fact that 2 has no other factorization means that 2 is prime.  Likewise 3 is prime.

But 4 is composite because $4=2\cdot 2$, and 2 is not a trivial divisor of 4.

> [!exercise] ***Exercise***
>
>Find the first 10 primes.
>
>Also take the number 100 and write all ways of expressing 100 as a product of two natural numbers.  (For instance, one way of expressing 100 as a product of two natural numbers is $100=1\cdot 100$.)
>
>Use this to list all of the divisors of 100.
> > [!note]- Solution
    >>
    >>The first ten prime numbers are 2,3,5,7,11,13,17,19,23,29.
    >>
    >>The factors of 100 are
    >>
    >>- $1\cdot 100$
    >>- $2\cdot 50$
    >>- $4 \cdot 25$
    >>- $5\cdot 20$
    >>- $10\cdot 10$
    >>
    >>And 100 factors by taking any of the above factorizations and reversing the order of the product.  
    >>
    >>Therefore the divisors of 100 are any of the numbers which occur in a factorization.  So the divisors of 100 are: 1, 2, 4, 5, 10, 20, 25, 50, 100.
    

Let us see a first proof of a theorem.

 > [!theorem] ***Theorem***
>
> Let *a* and *n* be any two natural numbers.
>
>$a|n$ if and only if $\frac n a$ is a natural number.

> [!note]- Why do we have to prove such obviously true statements?
    >
    >Although the theorem is obvious, we will later see very advanced theorems which are not obvious.  
    >
    >In order to prove advanced theorems, we will need to use sophisticated techniques of logic.  It is better to see those techniques of logic employed now, while things are easy.  That way, when we get to the hard ones, you will already have some facility with the logic.
    

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

Here’s another example.

> [!definition] ***Theorem***
> 
> Every natural number divides itself.

> [!proof] ***Proof***
> 
> Let *n* be any natural number.
> 
> Then $n = 1\cdot n$. 
> 
> So $n|n$.
> 
> $\Box$

> [!exercise] ***Exercise***
> 
> Suppose that $a,b,c$ are natural numbers such that $a|b$ and $b|c$.
> 
> Prove that therefore $a|c$.
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
> Suppose that $a,b,c$ are natural numbers such that $ab | c$.  
> 
> Prove that $a | c$.
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
> > TODO

> [!exercise] ***Exercise***
> 
> Suppose that $a,b,c$ are natural numbers such that $a|b$ and $a|c$.  
> 
> Prove that $a|b+c$.
> 
> > [!note]- Solution
> > TODO

# Quotient and Remainder

> [!definition] ***Definition***
> 
 > Let *x* be an integer and *d* a positive integer. Let *q* and *r* be the unique integers satisfying 
> 
> $$
> x = qd+r, \quad 0\le r<d
> $$
> 
> We call *q* the **quotient of $\frac x d$** and *r* the **remainder of $\frac x d$**.  We also call *r* the **modulus** of $\frac x d$.
> 
> We write 
> 
> $$
> \begin{aligned}
>   q &= x \text{ div } d\\
>   r &= x \text{ mod } d
> \end{aligned}
> $$

The above definition assumes that, for any given integers *x* and $d > 0$, that the quotient and remainder

- exist, and
- are unique.

We shouldn’t let such assumptions go unproven.

The following proof demonstrates why we needed to understand sets in order to be able to do number theory.

> [!theorem] ***Theorem***
> 
> Let *x* be an integer and $d >0$ an integer.  
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
> > >     If the definition of *S* is confusing, let’s see a specific example.  
> > >     
> > >     Suppose for instance that $x=17$ and $d=4$.  
> > >     
> > >     Then consider every positive $x-qd$ for positive $x-qd$.  That means we consider every positive $17-4q$.  Below I show the results for using $q=1,2,3,4$.
> > >     
> > >     $$
> > >     \begin{aligned}
> > >       17-4(1) &= 13\\
> > >       17-4(2) &= 9\\
> > >       17-4(3) &= 5\\
> > >       17-4(4) &= 1
> > >     \end{aligned}
> > >     $$
> > >     
> > >     Of course with $q=0,-1,-2,\dots$ we would see even more positive values of $x-qd$.
> > >     
> > >     Note that, regardless of the value of *x* and *d*, we will always have some positive value of $x-qd$.  This is because $d>0$ and therefore, as *q* is taken smaller (“more negative”) then *qd* becomes very small (“very negative”).  Hence, eventually for some sufficiently small *q*, we will have $x > qd$ and therefore $x-qd > 0$.
> >     
> > 
> > *S* has at least one element (as explained in the note above).  
> > 
> > Because *S* is a nonempty set of nonnegative numbers, then $\min(S)$ exists.  We will then define
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
> > >    Suppose that $r\ge d$.  
> > >    
> > >    Then $r-d\ge 0$
> > >    
> > >    From $r=x-qd$ we have 
> > >    
> > >    $$
> > >    \begin{aligned}
> > >     r-d &= x-qd-d \\
> > >     &= x-(q+1)d
> > >    \end{aligned}
> > >    $$
> > >    
> > >    Since $x-(q+1)d\ge 0$ then therefore $x-(q+1)d \in S$.
> > >    
> > >    But also 
> > >    
> > >    $$
> > >    x-qd > x-(q+1)d
> > >    $$
> > >    
> > >    This is because $q<q+1$ so $qd < (q+1)d$, and so $-qd > -(q+1)d$, and so $x-qd > x-(q+1)d$.
> > >    
> > >    But this now show that there is an element in *S* which is smaller than $r=x-qd$.  Therefore *r* is not a lower bound of *S*.
> >    
> >
> >Since $r=\min(S)$ then we must have that *r* is a lower bound of *S*, and therefore $r < d$.  
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

> [!exercise] ***Exercise***
> 
> Let $x=10$ and $d=3$. 
> 
> (Part 1.)
> 
> Find the quotient and remainder.
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
> Sometimes $q < 0$ and sometimes $q\ge 0$.  
> 
> Give a simple explanation which predicts when *q* will be negative or nonnegative.

> [!exercise] ***Exercise***
> 
> Let $x\in\Bbb Z$ and $d\in\Bbb Z_{>0}$.
> 
> Show that $d\mid x$ if and only if $x\mathbin{\operatorname{mod}}d = 0.

> [!definition] ***Definition***
> 
> An integer, *n,* is called **even** if $n\mod 2 = 0$.  If $n\mod 2 = 1$ then *n* is called **odd**.  

> [!theorem] ***Theorem***
> 
> For any integer *n*, *n* is either even or odd, but not both.

> [!proof] ***Proof***
> 
> Let $n=2q+r$ be the quotient-remainder decomposition of $n/2$.  We know, from the quotient-remainder theorem above, that *q* and *r* are integers, and $0\le r<2$.  
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
> The product of an even integer and an odd integer is even.

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
> Let $a,b\in\Bbb Z$. For any integer $d\in\Bbb Z$, we say that *d* is a **common divisor** of *a* and *b* if both $d\mid a$ and $d\mid b$.
> 
> If *a* and *b* are not both zero, then we say that an integer $d\in\Bbb N$ is **the greatest common divisor** of *a* and *b*, if 
> 
> $$
> d = \max\{e\in\Bbb N:e\text{ is a common divisor of $a$ and $b$}\}
> $$
> 
> When *d* is the greatest common divisor of *a* and *b*, we write $d=\gcd(a,b)$.
> 
> If $(a,b) = 1$ then we say that *a* and *b* are **coprime**.

> [!exercise] ***Exercise***
> 
> Explain why, if *a* and *b* are not both zero, then the set of their common divisors is bounded above, and therefore must have a maximum.  

> [!exercise] ***Exercise***
> 
> Find (6,6) and (6,7) and (6,8) and (6,9) and (6,12).

> [!exercise] ***Exercise***
> 
> Let $a,b\in\Bbb Z$ and assume that not both are zero.  Let $d=(a,b)$.
> 
> Prove that $2d$ is a common divisor of $2a$ and $2b$.
> 
> Try to prove that $2d$ is the greatest common divisor of $2a$ and $2b$, but do not break your back trying to do this.  You will probably get stuck, since this proof is surprisingly hard.  
> 
> In order to prove that $2d=(2a,2b)$, you would have to show that, if *e* is any common divisor of $2a$ and $2b$, then $2d\ge e$.  This about proving it, and realize how hard it is to come up with a rigorous proof, using only the theorems that we’ve developed so far in the course.
> 
> We will revisit this exercise after we’ve developed the concept of integer combinations.  Then providing a proof of this statement will be easy.

> [!exercise] ***Exercise***
> 
> Identify which of the following pairs are coprime.
> 
> - $a=2,b=3$
> - $a=-1, b=1$
> - $a=36, b=15$
> - $a=36,b=0$

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

> [!theorem] ***Theorem***
> 
> Let $x,y\in\Bbb Z$ and not both of them equal to zero.  
> 
> Then there exists an integer combination of *x* and *y*, which is equal to $(x,y)$.

> [!proof] ***Proof***
> 
> Let $x,y\in\Bbb Z$, not both equal to zero.
> 
> Define the set
>
> $
> L=\{ax+by:a,b\in\Bbb Z,\ ax+by>0\}
> $$
> 
> > [!note]- $L$ is nonempty bounded below integers
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
> >  d&=\min L\\
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
> > r = (1-aq)x + (-b)y
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
> > > Show that $d|y$.  The proof is a rehearsal of the proof that $d|x$, but *mutatis mutandis*.
> > > 
> > > > [!note]- Note: I am fond of using the phrase “*mutatis mutandis*” in proofs.
> > > >     
> > > >     It means “With the necessary changes having been made”. I use this to indicate that a part of the proof is very similar to the previous part, if you make minor rearrangements or substitutions.  
> > > >     
> > > >     Some people, who know quite a bit about proofs, might think that this means the same thing as “W.L.O.G.” which is an abbreviation of “without loss of generality”.  In fact that phrase means something a bit more restrictive than “*mutatis mutandis*”.  
> > > >     
> > > >     But I don’t want to bore the intended reader with those details.
>     
> 
> > [!note]- Show that *d* is the greatest common divisor.
> > 
> > Suppose that $e\in\Bbb Z$ is a common divisor of *x* and *y*.  
> > 
> > Then $e | ax+by = d$ and therefore $e\le d$.
> > 
> > Hence *d* is a common divisor, and an upper bound on the set of common divisors. 
> > 
> Therefore $d = (x,y)$.
> 
> $\Box$

> [!exercise] ***Exercise***
> 
> Find *a* and *b* such that $a(2)+b(3)=1$. 
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
>     

> [!exercise] ***Exercise***
> 
> Let $x,y\in\Bbb Z$ and not both zero.  Let $d=(x,y)$.
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
> For each $n\ge2$, we say that a positive integer $m$ is a **trivial divisor of *n*** if $m=1$ or $m=n$.
> 
> If $n\ge2$ and every positive divisor of *n* is trivial, then we say that *n* is **prime**. If $n\ge2$ is not prime, then we say that it is **composite**.

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
> Find integers $a,b,c\ge 2$ such that $a | bc$ but also $a\not | \ \ b$ and $a\not| \ \ c$.
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
> Since *p* is prime, its only positive divisors are 1 and *p*.  Therefore $(p,a)$ is 1 or *p*.
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
> Now $p|xpb$ because $p|p$.
> 
> Also $p|yab$ because $p|ab$.  
> 
> Therefore *p* divides the left-hand side, $xpb+yab$.  But since this equals the right-hand side, *b*, we must have that that $p|b$.
> 
> $\Box$