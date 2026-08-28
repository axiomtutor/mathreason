---
title: "Chapter 1: A Case Study in Number Theory"
---


This chapter is dedicated to explaining the very basics of number theory.  

In a course in mathematical reasoning, this might be strange: Shouldn’t we first study logic, so that we may know how to reason? And then study sets, so that we have a foundation in an elementary subject which is used by all other subjects?  And then we may choose to study number theory, or analysis, or other subjects which typically require no other prerequisites?

I wanted to approach mathematical reasoning in precisely the reverse way. I think a student often benefits from having an intuitive example *first*, and then to see how the example is abstracted into a theory.  After all, this is precisely how actual mathematics gets done in practice.  

Therefore this lesson in number theory is a case study.  It depends on learning logic and sets at an intuitive and natural level, so that we may see some basic results in number theory—one of the most important, being the GCD integer combination theorem.  

These mathematical results are important in their own right.  But I have placed them here at the beginning, so that it serves as an example of how we use sets and logic.  

After this chapter, we focus on sets and logic.  Again this is unusual, because it is more traditional to study logic and then sets.  However, logic informs the study of sets, and sets inform the study of logic—so instead of creating a somewhat artificial separation between the two subjects, I’ve opted for developing both subjects in tandem.

# Natural Numbers and Integers

Where should we begin our studies of the logic of mathematics? 

Perhaps the starting place of mathematics is counting, and therefore it is natural to study the numbers which count stuff.  

> [!definition] ***Definition***
>
> The **natural numbers** are the numbers
>
>$$
>1,2,3,\dots
>$$
>
>The **integers** are 
>
>$$
>\dots,-2,-1,0,1,2,\dots
>$$

The **positive integers** are 1, 2, 3, …, which is just the same thing as the natural numbers.  

The **negative integers** are -1, -2, -3, …

The **nonnegative integers** are 0, 1, 2, …

The **nonpositive integers** are 0, -1, -2, …

Number theory is arguably the study of these numbers.  (Some might say that it’s the study of the integers, which we’ll see soon.)

I particularly want to open the study of discrete math with a conversation about number theory, because it serves my specific interests:

- It is elementary in the sense that you do not need any prerequisites.
- The objects (the natural numbers) are familiar and obviously important.
- The theorems and proofs start simple, offering a relatively inviting entry to the subject.
- The theorems and proofs quickly become advanced, offering a case study in the need for a rigorous methods of logic.  This provides motivation and examples for the later chapters on logic.

# Basic Set Theory

I wish to discuss various “sets of integers”, but first I must say what a “set” is.

## Set Extensionality

A set is a fundamental mathematical object, and as such, cannot be formally defined.

> [!note]- Why can’t a set be formally defined?  A philosophical note.
    >To some, the idea of an object which cannot be defined seems odd, perhaps even paradoxical.  
    >
>    Here’s an argument for why we *must* deal in concepts which are not defined.
    >
    >Any time that one concept is defined, it is defined in terms of other concepts — defining something in terms of itself is nonsense.  
    >
    >(Amusingly, in Moliere’s play *Le Malade Imaginaire*, a medical student is asked why opium causes sleep — to which he responds (translated) “because it possesses a *virtus dormitiva*!”  But then *virtus dormitiva* just means “causes sleep”.  So the joke goes: Opium causes sleep because opium causes sleep.  A useless circular explanation.)
    >
    >So a concept, when defined, is necessarily defined in terms of some other concepts.  But these other concepts must, themselves, be understood either because they are defined, or because they are simply fundamental and undefined.  Well if they are fundamental and not defined in terms of other concepts, then we have accepted the existence of concepts which we understand without definition. 
    >
    >But if *they* are defined in terms of other concepts, then *those* other concepts must again be understood, either as fundamental or in terms of yet more concepts.  Of course the idea repeats any number of times, with concepts in terms of concepts, in terms of concepts, in terms of concepts, and so on.  
    >
    >If this chain of definitions goes on infinitely, then we could never thinks of the concepts in the first place.  In order to make sense of anything, the chain must terminate somewhere — and wherever it does terminate is at an undefined concept.
    >
    >So this idea of a fundamental and undefined concept is necessary in mathematics, and the rest of life.  
    >
    >In mathematics, our main undefined concept is that of a set.
    

But although we cannot define sets formally, we can gesture at some intuitions.  A set is mean to be a “collection” or a “gathering together” of some disparate objects.  

For example, the set $\{-1,\pi, 3, 2\}$ contains four objects, brought together into a single set.

The set is indicated by curly braces, and then we list the elements of the set.  

A set is defined “extensionally”, meaning that its only true defining feature is “what is inside and what is not”.  In the example above, -1 is in the set but 0 is not.  

To express membership, we write $\in$.  We use this notation in an “infix” way, so for example 

$$
-1\in \{-1,\pi,3,2\}
$$

expresses that -1 is in the set $\{-1,\pi,3,2\}$.  Of course we can also say that $\pi$ is in the set, by writing 

$$
\pi \in \{-1,\pi,3,2\}
$$

When something is *not* in the set we write $\notin$.  So for example 

$$
0\notin \{-1,\pi,3,2\}
$$

Because a set is defined extensionally, then it means that set $\{-1,2,3,\pi\}$ is equal to $\{-1,\pi,3,2\}$.  After all, they have the same members!  And since membership is the only thing that defines what a given set is, therefore these must be the same sets.

> *Sets do not respect ordering.*

Also:

> *Sets do not respect repetition.*

Note that the set {1, 2} is equal to the set {1,1,2,2,2,2}, because again, these have the same elements.

> [!definition] ***Definition*** 
>
>Let *X* and *Y* be sets.  
>
>We say that *X* is a **subset** of *Y* if, for every $a\in X$ we have $a\in Y$.
>
>When *X* is a subset of *Y* we write $X\subseteq Y$.  

It is immediate from definitions that, for sets *X* and *Y*, we have that $X=Y$ if and only if $X\subseteq Y$ and $Y\subseteq X$.

## Subsets of Integers

> [!definition] ***Definition***
>
>The set of natural numbers is 
>
>$$
>\Bbb N = \{1,2,3,\dots\}
>$$
>
>The set of integers is 
>
>$$
>\Bbb Z = \{\dots,-2,-1,0,1,2,\dots\}
>$$

Of course we see that $\Bbb N\subseteq \Bbb Z$.

## Set Builder Notation

Most of the sets that we’ll be interested are defined by a property, like “all even natural numbers”.  We could express it like this 

$$
\{2,4,6,\dots\}
$$

But the set is defined by a property, so we would prefer to write it in a way that expresses that property explicitly.  To do so we use “set builder notation”.  The following demonstrates set builder notation for the set of even numbers.

$$
\{x \in\Bbb N: x \text{ is even}\}
$$

The way to read this is: 

- The curly brace means set.
- The *x* is a variable — this will represent any one of the elements in the set.
- The $\in \Bbb N$ tells us that *x* will be a natural number. This essentially establishes the type of object that *x* is.
- Everything after the colon, “:”, states the property that *x* must have.

![image.png](Chapter%201%20A%20Case%20Study%20in%20Number%20Theory/image.png)

You can imagine it working like this: 

Consider the number 1.  Since this is in $\Bbb N$, it is a possible value of *x*.  We then check whether this has the property, “*x* is even”.  It does not have the property, so 1 is not in the set.

Consider the number 2.  Since this is in $\Bbb N$, it is a possible value of *x*.  We then check whether this has the property, “*x* is even”.  It does have the property, so 2 is in the set.

And so on.

> [!exercise] ***Exercise*** 
>
>Write out the three smallest elements of the set
>
>$$
>\{x\in\Bbb N: x^2 - 2x > 0\}
>$$
    
    

> [!exercise] ***Exercise***
>
>Give two negative numbers in the set
>
>$$
>\{x\in \Bbb Z: x^2-2x > 0\}
>$$
    
    

There are some variations on set builder notation that you’ll sometimes see when you read other texts.  For one example, you can move the “type” after the colon.

For example one could write the set of even natural numbers as 

$$
\{x:x\in\Bbb N, x \text{ is even}\}
$$

This now says that *x* is a variable, and it takes values in the natural numbers, and which are even.

Another variation is that the symbol before the colon does not have to be merely a variable.  It is allowed to be a function. For example, 

$$
S=\{x^2+1:x\in\Bbb N\}
$$

To list out some of the elements of this set, we may let *x* first take the value 1 (we start with 1 because $x\in\Bbb N$).  Then the expression $x^2+1$ has the value $1^2+1=2$.  Therefore $2\in S$.

Next let $x=2$.  Then the expression $x^2+1$ has the value $2^2+1=5$.  Therefore $5\in S$.

> [!exercise] ***Exercise***
>
>List two more elements of the set *S* described above.
    
    

> [!exercise] ***Exercise***
>
>List all of the elements of the set
>
>$$
>\{\sin(\pi x):x\in\Bbb N\}
>$$


> [!exercise] ***Exercise***
>
>List all elements of 
>
>$$
>\{\sin(\pi x) : x\in\Bbb Z\}
>$$

    

> [!exercise] ***Exercise***
>
>Consider the sets
>
>$$
>\begin{aligned}
>  A &= \{x\in\Bbb N: x \text{ is even, and } x < 10\}\\
>  B &= \{2,4,6\} \\
>  C &= \{2,4,6,8\} \\
>  D &= \{x: x \in\Bbb N, \text{ and $x$ is even}\} \\
>  E &= \{1\} \\
>  \Bbb N &= \{1,2,\dots\}\\
>  F&= \emptyset \\
>  G&= \{x\in \Bbb N: x < 0\}
>\end{aligned}
>$$
>
>Of these sets, which of them are equal?  Which is a subset of some other set?  Write out all of the relationships that apply.  

    

> [!exercise] ***Exercise*** 
> 
> Consider the set
> 
> $$
> \{2x-4y: x,y\in\Bbb N\}
> $$
> 
> Does the set contain 0?  Does it contain positive numbers? Does it contain negative numbers?  
> 
> Is there a number which you can prove is not in the set?  (Hint: Use the fact that an even times any number is even, and the sum of even numbers is even.)

> [!definition] ***Definition*** 
>
>If $X\subseteq \Bbb Z$ then we denote subset of positive elements by $X^+$.  That is to say, 
>
>$$
>X^+ = \{a\in X: a > 0\}
>$$
>
>Likewise 
>
>$$
>\begin{aligned}
> X^- &= \{a\in X: a < 0\} \\
> X^{\ge 0} &= \{a\in X: a\ge 0\} \\
> X^{\le 0} &= \{a\in X:a\le 0\}
>\end{aligned}
>$$
>
>Note that $\Bbb N = \Bbb Z^+$ and 
>
>$$
>\Bbb Z^- = \{-1,-2,-3,\dots\}
>$$
>
>and 
>
>$$
>\begin{aligned}
> \Bbb Z^{\ge 0} &= \{0,1,2,\dots\} \\
> \Bbb Z^{\le 0} &= \{\dots,-2,-1,0\}
>\end{aligned}
>$$

## The Empty Set

> [!definition] ***Definition***
>
>The set which has no elements is called **the empty set**, or **the null set**.
>
>It is written as $\emptyset$ or $\{\}$.

So of course, for any integer *a* we have $a\notin \emptyset$.

One of the facts that students often find the most confusing about the empty set, is that it is a subset of *every* set.  

For example, $\emptyset \subseteq \{1,2,3\}$.

Why? This can be hard to think of, because you have to assess the sentence

> For every element $a\in \emptyset$ we have $a\in \{1,2,3\}$.

But of course the part $a\in\emptyset$ is simply never true!  There is no choice of *a* for which this part is true — so how could we then go on to evaluate the $a\in \{1,2,3\}$ part? — and how do we then assess the truth of the entire sentence?

It is precisely because $a\in\emptyset$ is never true, that therefore the entire sentence “For every element $a\in\emptyset$ we have $a\in\{1,2,3\}$” is necessarily true.  That is to say, a sentence of the form “Every *P* is *Q*” will always be true when there is no object which is *P*.

If that confuses you, here are a few explanations which try to make this fact sensible.  

- As you remove elements, you should still have a subset.  
So for example, $\{1,2,3\}\subseteq \{1,2,3\}$ and $\{1,2\}\subseteq \{1,2,3\}$ and $\{1\}\subseteq \{1,2,3\}$.  
A subset is supposed to be “the same elements or fewer”, and so if we continue this progression one more time, we should have $\emptyset \subseteq \{1,2,3\}$.
- Consider a computer program that checks whether the set *X* is a subset of *Y*.  It considers each element of *X.* If that element is not in *Y*, the program returns `False`.  If no such “counterexample” is ever found, then the program returns `True` (i.e. the program determines that *X* is a subset of *Y*).
If the program now runs with $X=\emptyset$, then there is no element to consider.  The program never finds a counterexample, and so returns `True`.

> [!definition] ***Definition***
>
>Consider the following principle.

> Any sentence of the form “Every *P* is *Q*.” is true, whenever there is no object that is *P*.


This principle is called **vacuous quantification**.

We will revisit the idea of vacuous quantification later, in the section on logic.  

## Set Operations

When working with sets it is common to need to “put sets together” in a variety of ways.  The following diagrams show the common set operations of union, intersection, complement, and set-minus.

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%201.png)

I’ll demonstrate each of these with the sets $A = \{1,2,3,4,5\}$ and $B = \{0,2,4,6\}$.

1. Their union is the set of all elements which are in either *A* or *B*.  In the diagram this is the merged region in purple.
    1. For example since $1\in A$ then therefore $1\in A$ or $1\in B$.  Therefore $1\in A\cup B$.
    2. Since $0\in B$ then therefore $0\in A$ or $0\in B$.  Therefore $0\in A\cup B$.
    3. Since $-1\notin A$ and $-1\notin B$ then therefore $-1$ is not in *A* or *B*.  Therefore $-1\notin A\cup B$.
    4. In this example the union is equal to 
        
        $$
        A\cup B = \{0,1,2,3,4,5,6\}
        $$
        
2. Their intersection is the set of elements in both *A* and *B.*  In the diagram this means the overlap shown in green.
    1. Since $1\in A$ but $1\notin B$ then therefore $1\notin A\cap B$.
    2. Since $2\in A$ and $2\in B$ then therefore $2\in A\cap B$.
    3. The set is equal to 
        
        $$
        A\cap B = \{2,4\}
        $$
        
3. The complement of the set *A* is the set of all elements in the “universe” which are not in *A*.  This is the region inside the universe, but outside of *A*, shown in yellow.  
What is the universe?  It is whatever set of elements we currently want to discuss.  For the purpose of this example, we’ll choose the universe to be $\Bbb Z$, although we could pick it to be many other things.  
    1. Since $1\in A$ therefore $1\notin A^c$.
    2. Since $0\notin A$ then therefore $0\in A^c$.
    3. The set equals 
    
    $$
    A^c = \{...,-2,-1,0,6,7,8,...\}
    $$
    
4. The set of *A* minus *B* is the set of elements in *A* but not in *B*.  In the diagram, this is the blue region in *A*, but removing the portion that overlaps with *B*.
    1. Since $1\in A$ and $1\notin B$ then therefore $1\in A\smallsetminus B$.
    2. Since $0\notin A$ then $0\notin A\setminus B$.
    3. Since $2\in A$ and $2\in B$ then $2\notin A\smallsetminus B$.
    4. The set equals 
        
        $$
        \{1,3,5\}
        $$
        

> [!definition] ***Definition***
>
>Let *U* be any set which we call the **universe**.
>
>Let $A,B\subseteq U$.
>
>Then their **union** is the set of all elements in *A* or *B*, and is denoted $A\cup B$.
>
>Their **intersection** is the set of elements in both *A* and *B*, and is denoted $A\cap B$.
>
>The **complement of *A*** is the set of elements in *U* which are not in *A,* and is denoted $A^c$.
>
>The set of *A* **set-minus** *B* is the set of elements in *A* but not *B*, and is denoted $A\smallsetminus B$.  

> [!exercise] ***Exercise***
>
>Let the universe be $\{0,1,2,3,4\}$, and $X = \{0,1,2\}$, and $Y = \{2,3,4\}$.
>
>Find 
>
>1. $X\cup Y$
>2. $X\cap Y$
>3. $X^c$
>4. $Y^c$
>5. $X\smallsetminus Y$
>6. $Y\smallsetminus X$

> [!exercise] ***Exercise***
>
>Let *U* be the universe and $X \subseteq U$.
>
>1. Show that $(X^c)^c= X$.
>2. Show that $X^c = U\smallsetminus X$.
>3. Show that $U\cup X = U$ and $\emptyset \cap X = \emptyset$.
>4. Show that $U\cap X = X = \emptyset \cup X$.

> [!definition] ***Definition***
>
>Let *X* and *Y* be two sets. We say that *X* and *Y* are **disjoint** if 
>
>$$
>X\cap Y=\emptyset
>$$

> [!exercise] ***Exercise***
>
>Show that $\emptyset$ is disjoint from every other set.

> [!exercise] ***Exercise***
>
>Of the following sets, decide which pairs are disjoint.
>
>- The set of positive integers.
>- The set of negative integers.
>- The set of even integers.
>- The set of odd integers.
>- The set of prime integers.
>- $\{0\}$
>
>For example, the set of positive integers and the set of negative integers are disjoint.
>
>Which other pairs taken from this list are disjoint?

## Bounds, Max, Min

> [!definition] ***Definition***
>
>Let $X\subseteq \Bbb Z$ be a nonempty set.  Let $a\in \Bbb Z$.
>
>We say that *a* is a **lower bound** of *X* if, for every element $b\in X$, we have
>
>$$
> a\le b
>$$
>
>We say that *a* is an **upper bound** of *X* if, for every element $b\in X$, we have 
>
>$$
> b\le a
>$$
>
>We say that *a* is **the minimum** of *X* if *a* is a lower bound and also $a\in X$.
>
>We say that *a* is **the maximum** of *X* if *a* is an upper bound and also $a\in X$.
>
>When the minimum exists, we denote it by $\min(X)$. When the maximum exists, we denote it by $\max(X)$.

For example, an upper bound of the set $\{1,2,3\}$ is 5, but the maximum is 3.  A lower bound of this set is -100 but the minimum is 1.

$$
\begin{aligned}
 \min\{1,2,3\} &= 1 \\
 \max\{1,2,3\} &= 3
\end{aligned}
$$

Note that we sometimes drop the parentheses in the expression $\min(X)$ if it causes no confusion.  So when I write $\min\{1,2,3\}$ this is really shorthand for $\min(\{1,2,3\})$.

Note that the maximum and minimum need not always exist.  For example, there is no maximum of the set $\Bbb N$. And of course, the set $\Bbb Z$ has neither a maximum nor a minimum.  

However, there is a fact which we will accept as fundamental throughout this course: 

> [!theorem] ***Theorem***
>
>Let $X\subseteq \Bbb Z$.  
>
>If *X* is bounded below, then *X* has a minimum.  
>
>If *X* is bounded above, then *X* has a maximum.

> [!proof] ***No proof***
>
>The proof of this theorem is beyond the scope of this course.  We will instead accept this result without proof.
>
>Later in the course, after we have discussed enough logic and set theory, we might revisit the proof of this theorem.

> [!exercise] ***Exercise***
>
>Consider the set 
>
>$$
>\{a \in \Bbb Z : a \text{ is an upper bound of } \{1,2,3\}\}
>$$
>
>Write this set in a simpler description.  

# Divisibility

A fundamental interest in number theory is to understand how a given number can be written as a product.  

- This has applications in cryptography, computer science, abstract algebra, and apparently (although I personally know nothing about this) physics.
    
    Number theorists would further argue that number theory doesn’t need any applications to make it interesting.  
    
    It is common for number theorists to say that number theory is just interesting, for it’s own sake, without any reference to the outside world.  
    

For example, 4 can be written as the product $2\cdot 2$.  In fact, technically, it can also be written as $1\cdot 4$ or $4\cdot 1$.  

> [!definition] ***Definition***
> 
> If *n* is a natural number, and $a,b$ some two natural numbers such that $n=ab$, then we say any of the following equivalent statements:
> 
> - *a* and *b* are **factors** of *n*.
> - *a* and *b* **divide** *n*.
> - *n* is a **multiple** of *a*, and is a multiple of *b*.
> 
> When *a* divides *n*, we write $a|n$.  Note that, if $a|n$ then it follows immediately by definition that there exists a natural number *b* such that $n=ab$.
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

> [!definition] ***Theorem***
>
>Let *a* and *n* be any two natural numbers.
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
> Let *x* be an integer and $d > 0$ an integer.  Let *q* and *r* be the unique integers satisfying 
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
> Let $x,d\in\Bbb Z$.
> 
> Show that $d|x$ if and only if $x\mod d = 0$.

> [!definition] ***Definition***
> 
> An integer, *n,* is called **even** if $n\mod 2 = 0$.  If $n\mod 2 = 1$ then *n* is called **odd**.  

> [!theorem] ***Theorem***
> 
> For any integer, *n*, we have that *n* is either even or odd, but not both.

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
> When *d* is the greatest common divisor of *a* and *b* we write $d = (a,b)$ or $d = \text{GCD}(a,b)$.
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
> For any $x,y\in\Bbb Z$ we say that $ax+by$ is an **integer combination of *x* and *y***, for every $a,b\in \Bbb Z$.  
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
> $$
> L=\{ax+by:a,b\in\Bbb Z, ax+by>0\}
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
> For each $n\in\Bbb Z$ we say that $m\in\Bbb Z$ is a **trivial divisor of *n*** if $m=1$ or $m=n$.
> 
> If $n\ge 2$ and every divisor of *n* is trivial, then we say that *n* is **prime**.  If *n* is not prime then we say that it’s **composite**.

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
> Then either $p | a$ or $p|b$.  

The following proof uses a particular way of proving an “or” statement:  In order to prove $p|a$ or $p|b$, we prove that if $p \not| \ \ a$ then $p|b$.

We will study logical patterns like this one in the next chapter.

> [!proof] ***Proof***
> 
> Suppose that *p* is prime and $a,b\in\Bbb Z$ such that $p|ab$.  
> 
> Suppose that $p\not| \ \ a$.  
> 
> Since *p* is prime, then its only divisors are 1 or *p*.  Therefore $(p,a)$ is 1 or *p*.
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