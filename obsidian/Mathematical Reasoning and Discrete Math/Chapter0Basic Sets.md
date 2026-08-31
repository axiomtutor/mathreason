---
title: "Chapter 0: The Bare Necessities of Sets and Functions"
---
> [!note]- TODOs
> I still need to 
> * Add extra exercises and solutions to existing exercises.

Almost any serious mathematical subject requires a minimum understand of sets.  Here we will discuss that minimum.  

We will return to discussing set theory in a deeper, axiomatic way, later in this course. 

# Set Extensionality

  

A set is a fundamental mathematical object, and as such, cannot be formally defined.

  

>[!note]- Why can’t a set be formally defined? A philosophical note.
> The idea that certain concepts cannot be defined may seem paradoxical.
> 
> Here’s an argument for why we *must* deal in concepts which are not defined.
Any time that one concept is defined, it is defined in terms of *other concepts*.
>
(Amusingly, in Moliere’s play *Le Malade Imaginaire*, a medical student is asked why opium causes sleep — to which he responds (translated) “because it possesses a *virtus dormitiva*!” But then *virtus dormitiva* just means “causes sleep”. So the joke goes: Opium causes sleep because opium causes sleep. A useless circular explanation.)
>
So a concept, when defined, is necessarily defined in terms of some other concepts. But these other concepts must, themselves, be understood either because they are defined, or because they are simply fundamental and undefined. So we have a dilemma.  
>
You can think of this like a network of concepts.  Say that concept *A* is defined in terms of *B*, *C*, and *D*.  Then concept *B* is defined in terms of, say, *E*.  And so on — each concept defined in terms of others.  
>
> If the chain goes on infinitely, then we never actually define the concept *A*.  This would imply the impossibility of definition, and so we must reject this "horn of the dilemma".
> 
> If the chain does not go on infinitely, then we arrive at a concept which is not defined. We must accept this horn of the dilemma.

  
Although we cannot define "sets" formally, we can gesture at some intuitions. A set is mean to be a “collection” or a “gathering together” of some disparate objects.

  

For example, the set $\{-1,\pi, 3, 2\}$ contains four objects (numbers), brought together into a single set.

  

The set is indicated by curly braces, and then we list the elements of the set.

  

A set is defined “extensionally”, which is a fancy way of saying:

  

> A set’s only true defining feature is “what is in it, and what is not”.

  

In the example above, -1 is in the set but 0 is not.

  

To express membership, we write and infix $\in$, like below.

  

$$

-1\in \{-1,\pi,3,2\}

$$

  

This expresses that “-1 is in the set $\{-1,\pi,3,2\}$”.

  

When something is *not* in the set we write $\notin$. So for example

  

$$

0\notin \{-1,\pi,3,2\}

$$

  

Extensionality implies that $\{-1,2,3,\pi\}$ is equal to $\{-1,\pi,3,2\}$. After all, they have the same members!

  This demonstrates that

> *Sets do not respect ordering.*

  

Extensionality also implies that

  

> *Sets do not respect repetition.*

  

Note that the set {1, 2} is equal to the set {1, 1, 2, 2, 2, 2}, because again, these have the same elements.

> [!exercise] ***Exercise***
> Decide on the truth of the following expressions.
> 1. $\pi\in\{1,2\}$
> 2. $2\in\{1,2\}$
> 3. $\pi\notin \{1,2\}$
> 4. $2\notin\{1,2\}$
> 5. $\{1,2\}\in \{1,2\}$
> 6. $\{1\}\in\{1,2\}$
> 7. $\{1,2,3\}=\{1,2\}$
> 8. $\{1,2,1,2,1\} = \{1,2\}$
> > [!note]- ***Solution***
> > 1. False
> > 2. True
> > 3. True
> > 4. False
> > 5. False
> > 6. False
> > 7. False
> > 8. True

> [!definition] ***Definition***
> Let *X* and *Y* be sets.
>
> We say that *X* is a **subset** of *Y* if, for every $a\in X$ we have $a\in Y$.
> 
> When *X* is a subset of *Y* we write $X\subseteq Y$. 
> 
> If *X* is *not* a subset of *Y* we write $X\not\subseteq Y$.

For example, $\{1,2,3\}$ is a subset of $\{0,1,2,3,4\}$, so 
$$
\{1,2,3\} \subseteq \{0,1,2,3,4\}
$$
Of course the reverse subset inclusion is not true.
$$
\{0,1,2,3,4\}\not\subseteq \{1,2,3\}
$$
  
It is important to recognize that "set equality" and the "subset relation" have a close relationship.  
> Set equality is just two subset relations.

More precisely, the set equality $X = Y$ is true if and only if we have both 
* $X\subseteq Y$ and 
* $Y\subseteq X$

> [!exercise] ***Exercise***
> For each of the following sets, decide which of the other sets are subsets.
> 1. $\{1,2,3\}$
> 2. $\{1,2\}$
> 3. $\{1,2,3,4\}$
> 4. $\{5,6\}$
> 
> > [!note]- ***Solution***
> > (2.) is a subset of (1.) and (3.).
> > (1.) is a subset of (3.).
> > No other subset relation holds among the sets.

  

# Number Sets

> [!definition] ***Definition***
> The set of **natural numbers** is
> $$
> \Bbb N = \{1,2,3,\dots\}
> $$
> The set of **integers** is
> $$
> \Bbb Z = \{\dots,-2,-1,0,1,2,\dots\}
> $$
> The set of **rational numbers** is the set of all fractions, and is denoted $\Bbb Q$.  We cannot easily give a pattern for this set, but we can say that $\frac 1 2 \in \Bbb Q$ and $\frac{-7}{3}\in\Bbb Q$.  
> 
> In a section below we will introduce set-builder notation.  Once you understand set-builder notation, we can then define 
> $$\Bbb Q = \left\{ \frac p q : p,q\in\Bbb Z, \text{ and } q\ne 0 \right\}$$
> 
> The **real numbers** will be formally defined later, but for now we intuitively define this as the "set of all decimal expansions".  It is denoted $\Bbb R$.  For example $0.5\in\Bbb R$ and $-12.12121... \in \Bbb R$.  

It is commonly known that $\sqrt 2$ and $\pi$ and $e$ are real numbers, but not rational.  

$$ \sqrt 2,\pi,e \in\Bbb R\smallsetminus \Bbb Q $$

We will prove some of these claims later, but at least for the duration of this chapter I will assume that this is true.  

We will also rely on the fact, without proof, that the rational numbers are the numbers with a decimal expansion which eventually repeats some sequence.  

So for example, 1.23454545... is a rational number because its decimal expansion begins to repeat '45' infinitely often.  

On the other hand, say $x = 1.01001000100001...$ is constructed by using only the digits 0 and 1.  We start with a single 0 ended by 1.  Then two 0's ended by 1.  Then three 0's ended by 1, and so on. 

This number, *x*, will never have a repeating pattern in its decimal expansion.  Therefore *x* cannot be rational.  


> [!exercise] ***Exercise***
> Decide whether the following are rational.  (Note that 1 is equivalent to 1.0, which is also equivalent to 1.000...)
> 1. $1.111...$
> 2. 1
> 3. $0.1491625...$  This number is formed by writing down the squares of each natural number, as part of the decimal expansion.  So first we write 0 dot, so to speak.  Then we write $1^2=1$.  Then we write $2^2 = 4$.  Then $3^2 = 9$.  Then we write $4^2 = 16$, and so on.  


---

It is clear that $\Bbb N\subseteq \Bbb Z$ and $\Bbb Z\subseteq \Bbb Q$, and $\Bbb Q\subseteq \Bbb R$.  

Of course it immediately follows that $\Bbb N\subseteq \Bbb Q$, and $\Bbb N\subseteq \Bbb R$.  Likewise $\Bbb Z\subseteq \Bbb R$.

To summarize all of these subset relationships we simply write 

$$ \Bbb N\subseteq\Bbb Z\subseteq\Bbb Q\subseteq\Bbb R $$


> [!exercise] ***Exercise***
> Let *X*, *Y*, and *Z* be sets such that $X\subseteq Y$ and $Y\subseteq Z$.
> 
> Show that $X\subseteq Z$.
> 
> The property of subsets that you are demonstrating in this exercise, is called "transitivity".  Recall that we said $\in$ is *not* transitive.  We are now seeing that $\subseteq$ *is* transitive.


# Sets of Non-numbers

  

Sets of numbers will be our most common use of sets.

  

But in principle we can form sets of anything. We could form sets of letters, like $\{\text`a\text',\text`b\text',\text`c\text'\}$. We could form sets of equations, like

  

$$

\{x^2+1=x, \ xe^x=1\}

$$

  

We could form sets of … well, *sets*!

  

$$

X=\{\{1,2\}, \{0,1\}, \{\pi,e,-\sqrt 2\}\}

$$

  

This can be confusing at first: How many elements does *X* have?

  

It has three elements. 

You might have thought “but I see seven elements”. 

Well yeah, but 1 is not in *X*. Rather, $1\in\{1,2\}$ and $\{1,2\} \in X$.  And yet $1\notin X$.


In jargon, this means "set membership is not transitive".  We will discuss the idea of "transitivity" more later.

  

> [!exercise] ***Exercise***
> Let $Y = \{\{\{1,2\},\{3,4\}\}, \{5,6\},7\}$.
> 
> Decide which of the following is true.
> 1. $1\in Y$
> 2. $\{1,2\}\in Y$
> 3. $\{\{1,2\},\{3,4\}\}\in Y$
> 
> Find the number of elements in *Y*.

  

# Set Builder Notation

  

Most of the sets that we’ll be interested in, are defined by a property, like “all even natural numbers”. We could write this set as

  

$$

X = \{2,4,6,\dots\}

$$

  

But *X* is defined by a property! So we would prefer to write it in a way that expresses its property, rather than making you infer it from a pattern.

  

To do so we use “set builder notation”, demonstrated below.

  

$$

X = \{x \in\Bbb N: x \text{ is even}\}

$$

  

The way to read this is:

  

- The curly brace means “set”.

- The lower-case *x* is a “variable” — this will represent any one of the elements in the set.

- The $\in \Bbb N$ tells us that *x* will be a natural number. This essentially establishes the "*type*" of object that *x* is.

- Everything after the colon, “:”, states the property that *x* must have.

  

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image.png)

  

You can imagine it working like this:

  

Consider the number 1. Since $1\in \Bbb N$, then 1 is a possible value of *x*. So we temporarily set $x=1$.  We then check whether *x* satisfies the property, “*x* is even”.  It does not have the property, so $1\notin X$.

  

Moving on, consider the number 2. Since $2\in \Bbb N$, then 2 is a possible value of *x*. So we temporarily set $x=2$.  We then check whether *x* has the property, “*x* is even”. It does have the property, so $2\in X$.

  

And so on.  In this way we can confirm that $X = \{2,4,6,...\}$,

  

> [!exercise] ***Exercise***
> Write out the three smallest elements of the set
> $$
> \{x\in\Bbb N: x^2 - 2x > 0\}
> $$
> > [!note]- ***Solution***
> > Since the possible candidates of *X* are natural numbers, we can start by considering 1.  Temporarily set $x=1$ and then $x^2-2x$ evaluates to -1.  Therefore the inequality is not satisfied, therefore 1 is not in this set.
> > 
> > Next temporarily set $x=2$ and then $x^2-2x$ evaluates to 0.  Because the inequality is strict, therefore the inequality is not satisfied and 2 is not in the set.
> >
> > Next set $x=3$ and then $x^2-2x$ evaluates to 3.  Since this is greater than 0, then 3 is the smallest element of the set.
> > 
> > Next set $x=4$, the expression evaluates to 8, so 4 is in the set.
> > 
> > Do it again with $x=5$ and we see that 5 is in the set.
> > 
> > So the three smallest elements are 3,4,5.

  

> [!exercise] ***Exercise***
> Give two negative numbers in the set
> $$
> \{x\in \Bbb Z: x^2-2x > 0\}
> $$
> > [!note]- ***Solution***
> > -1 and 1/2.  Of course others are possible as well.

  

There are some variations on set builder notation that you’ll sometimes see when you read other texts. For one example, you can move the “type” after the colon.

  

For example one could write the set of even natural numbers as

  

$$

\{x:x\in\Bbb N, x \text{ is even}\}

$$

  

This now says that *x* is a variable, and it takes values which are both natural numbers and even.

  

Another variation is that the symbol before the colon does not have to be merely a variable. It is allowed to be a function. For example,

  

$$

S=\{x^2+1:x\in\Bbb N\}

$$

  

To list out some of the elements of *S*, we may let *x* first take the value 1. Then the expression $x^2+1$ has the value $1^2+1=2$. Therefore $2\in S$.

  

Next let $x=2$. Then the expression $x^2+1$ has the value $2^2+1=5$. Therefore $5\in S$.

  

Therefore, to represent *S* by listing a few of its values,

  

$$

S = \{2,5,10,17,26,...\}

$$

The important point here is that: 
> Whatever is in the curly braces, before the colon, is the object that is *actually in* the set.

  

> [!exercise] ***Exercise***
> List two more elements of the set *S* described above. 
> 
> That is to say: Determine two elements of *S* which are larger than 26.
> 
> > [!note]- ***Solution***
> > TODO

  

> [!exercise] ***Exercise***
> List all of the elements of the set
> $$
> \{\sin(\pi x):x\in\Bbb N\}
> $$

  

> [!exercise] ***Exercise***
> List all elements of
> $$
> \{\sin(\pi x) : x\in\Bbb Z\}
> $$

  

> [!exercise] ***Exercise***
> Consider the sets
> $$
> \begin{aligned}
> A &= \{x\in\Bbb N: x \text{ is even, and } x < 10\}\\
> B &= \{2,4,6\} \\
> C &= \{2,4,6,8\} \\
> D &= \{x: x \in\Bbb N, \text{ and $x$ is even}\} \\
> E &= \{1\} \\
> \Bbb N &= \{1,2,\dots\}\\
> F&= \emptyset \\
> G&= \{x\in \Bbb N: x < 0\}
> \end{aligned}
> $$
> Of these sets, which of them are equal? Which is a subset of some other set? Write out all of the relationships that apply.

  

> [!exercise] ***Exercise***
> Consider the set
> $$
> \{2x-4y: x,y\in\Bbb N\}
> $$
> Does the set contain 0? Does it contain positive numbers? Does it contain negative numbers?
> 
> Is there a number which you can prove is not in the set? (Hint: Use the fact that an even times any number is even, and the sum of even numbers is even.)

  

> [!definition] ***Definition***
> If $X\subseteq \Bbb Z$ then we denote subset of **positive elements of *X*** by $X^+$. That is to say,
> $$
> X^+ = \{a\in X: a > 0\}
> $$
> Likewise
> $$
> \begin{aligned}
> X^- &= \{a\in X: a < 0\} \\
> X^{\ge 0} &= \{a\in X: a\ge 0\} \\
> X^{\le 0} &= \{a\in X:a\le 0\}
> \end{aligned}
> $$
> which are, respectively, the **negative, nonnegative**, and **nonpositive elements of *X***.

  For example, if $X = \{-2,0,1\}$ then 
  $$
\begin{aligned}
X^+ &= \{1\}\\
X^- &= \{-2\}\\
X^{\ge 0} &= \{0,1\}\\
X^{\le 0} &= \{-2,0\}
\end{aligned}
$$

For another, let $Y = \{1,2,3\}$.  Then 
$$
\begin{aligned}
Y^+ = Y = Y^{\ge 0}
\end{aligned}
$$

If you think about what $Y^-$ or $Y^{\le 0}$, you'll realize that it has *no elements*.  That means that these are equal to the "empty set", which we describe in the next section.

Note that $\Bbb N = \Bbb Z^+$.

  


> [!exercise] ***Exercise***
> Determine the elements of $\Bbb Z^-,\Bbb Z^{\ge 0},\Bbb Z^{\le 0}$.
  

# The Empty Set

  

> [!definition] ***Definition***
> The set which has no elements is called **the empty set**.
> 
> It is written as $\emptyset$ or $\{\}$.

  

So of course, for any integer *a* we have $a\notin \emptyset$.

  

One of the facts that students often find the most confusing about the empty set, is that it is a subset of *every* set.

  

For example, $\emptyset \subseteq \{1,2,3\}$.

  

Why? This is equivalent to saying

  

> For every element $a\in \emptyset$ we have $a\in \{1,2,3\}$.

  

But of course the part $a\in\emptyset$ is simply never true! So how could we then go on to evaluate the $a\in \{1,2,3\}$ part? — and how do we then assess the truth of the entire sentence?

  

It is precisely because $a\in\emptyset$ is never true, that therefore the entire sentence “For every element $a\in\emptyset$ we have $a\in\{1,2,3\}$” is necessarily true. That is to say, a sentence of the form “Every *P* is *Q*” will always be true when there is no object which is *P*.

  

If that confuses you, here are a few explanations which try to make this fact sensible.

  

- As you remove elements, you should still have a subset.
	  
	So for example, $\{1,2,3\}\subseteq \{1,2,3\}$, of course.  But if we remove 3, then we still have a subset, $\{1,2\}\subseteq \{1,2,3\}$.  And if we then remove 2 we still have a subset, $\{1\}\subseteq \{1,2,3\}$.
	
	A subset is supposed to be “the same elements or fewer”.  So if we continue this progression one more time, and remove 1, we should have $\emptyset \subseteq \{1,2,3\}$.

- Consider a computer program that checks whether the set *X* is a subset of *Y*. 
	- It considers each element of *X.* 
		- If that element is not in *Y*, the program returns `False`. 
		- If no such “counterexample” is ever found, then the program returns `True` (i.e. the program determines that *X* is a subset of *Y*).
	- If that program now runs with $X=\emptyset$, then there is no element to consider. The program never finds a counterexample, and so returns `True` -- that is to say, such a program determines that the empty set is a subset of any set.

  

> [!definition] ***Definition***
> Consider the following principle.
> 
> > Any sentence of the form 
> > “Every *P* is *Q*.” 
> > is true, whenever there is no object that is *P*.
> 
> This principle is called **vacuous quantification**.

  

We will revisit the idea of vacuous quantification later, in the section on logic.

  

# Set Operations

  

When working with sets it is common to need to “put sets together” in a variety of ways. The following diagrams show the common set operations of union, intersection, complement, and set-minus.

  

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%201.png)

  

I’ll demonstrate each of these with the sets $A = \{1,2,3,4,5\}$ and $B = \{0,2,4,6\}$.

  

1. Their union is the set of all elements which are in either *A* or *B*. In the diagram this is the merged region in purple.

2. For example since $1\in A$ then therefore $1\in A$ or $1\in B$. Therefore $1\in A\cup B$.

3. Since $0\in B$ then therefore $0\in A$ or $0\in B$. Therefore $0\in A\cup B$.

4. Since $-1\notin A$ and $-1\notin B$ then therefore $-1$ is not in *A* or *B*. Therefore $-1\notin A\cup B$.

5. In this example the union is equal to

$$

A\cup B = \{0,1,2,3,4,5,6\}

$$

2. Their intersection is the set of elements in both *A* and *B.* In the diagram this means the overlap shown in green.

3. Since $1\in A$ but $1\notin B$ then therefore $1\notin A\cap B$.

4. Since $2\in A$ and $2\in B$ then therefore $2\in A\cap B$.

5. The set is equal to

$$

A\cap B = \{2,4\}

$$

3. The complement of the set *A* is the set of all elements in the “universe” which are not in *A*. This is the region inside the universe, but outside of *A*, shown in yellow.

What is the universe? It is whatever set of elements we currently want to discuss. For the purpose of this example, we’ll choose the universe to be $\Bbb Z$, although we could pick it to be many other things.

1. Since $1\in A$ therefore $1\notin A^c$.

2. Since $0\notin A$ then therefore $0\in A^c$.

3. The set equals

$$

A^c = \{...,-2,-1,0,6,7,8,...\}

$$

4. The set of *A* minus *B* is the set of elements in *A* but not in *B*. In the diagram, this is the blue region in *A*, but removing the portion that overlaps with *B*.

5. Since $1\in A$ and $1\notin B$ then therefore $1\in A\smallsetminus B$.

6. Since $0\notin A$ then $0\notin A\setminus B$.

7. Since $2\in A$ and $2\in B$ then $2\notin A\smallsetminus B$.

8. The set equals

$$

\{1,3,5\}

$$

  

> [!definition] ***Definition***
> Let *U* be any set which we call the **universe**.
> 
> Let $A,B\subseteq U$.
> 
> Then their **union** is the set of all elements in *A* or *B*, and is denoted $A\cup B$.
> 
> Their **intersection** is the set of elements in both *A* and *B*, and is denoted $A\cap B$.
> 
> The **complement of *A*** is the set of elements in *U* which are not in *A,* and is denoted $A^c$.
> 
> The set of *A* **set-minus** *B* is the set of elements in *A* but not *B*, and is denoted $A\smallsetminus B$.

  

> [!exercise] ***Exercise***
> Let the universe be $\{0,1,2,3,4\}$, and $X = \{0,1,2\}$, and $Y = \{2,3,4\}$.
> 
> Find
> 1. $X\cup Y$
> 2. $X\cap Y$
> 3. $X^c$
> 4. $Y^c$
> 5. $X\smallsetminus Y$
> 6. $Y\smallsetminus X$

  

> [!exercise] ***Exercise***
> Let *U* be the universe and $X \subseteq U$.
> 
> 1. Show that $(X^c)^c= X$.
> 2. Show that $X^c = U\smallsetminus X$.
> 3. Show that $U\cup X = U$ and $\emptyset \cap X = \emptyset$.
> 4. Show that $U\cap X = X = \emptyset \cup X$.

  

> [!definition] ***Definition***
> Let *X* and *Y* be two sets. We say that *X* and *Y* are **disjoint** if
> $$
> X\cap Y=\emptyset
> $$

  

> [!exercise] ***Exercise***
> Show that $\emptyset$ is disjoint from every other set.

  

> [!exercise] ***Exercise***
> Of the following sets, decide which pairs are disjoint.
> 
> - The set of positive integers.
> - The set of negative integers.
> - The set of even integers.
> - The set of odd integers.
> - The set of prime integers.
> - $\{0\}$
> 
> For example, the set of positive integers and the set of negative integers are disjoint.
> 
> Which other pairs taken from this list are disjoint?


# Bounds, Max, Min

  

> [!definition] ***Definition***
> Let $X\subseteq \Bbb Z$ be a nonempty set. Let $a\in \Bbb Z$.
> 
> We say that *a* is a **lower bound** of *X* if, for every element $b\in X$, we have
> $$
> a\le b
> $$
> We say that *a* is an **upper bound** of *X* if, for every element $b\in X$, we have
> $$
> b\le a
> $$
> We say that *a* is **the minimum** of *X* if *a* is a lower bound and also $a\in X$.
> 
> We say that *a* is **the maximum** of *X* if *a* is an upper bound and also $a\in X$.
> 
> When the minimum exists, we denote it by $\min(X)$. When the maximum exists, we denote it by $\max(X)$.

  

For example, an upper bound of the set $\{1,2,3\}$ is 5, but the maximum is 3. A lower bound of this set is -100 but the minimum is 1.

  

$$

\begin{aligned}

\min\{1,2,3\} &= 1 \\

\max\{1,2,3\} &= 3

\end{aligned}

$$

  

Note that we sometimes drop the parentheses in the expression $\min(X)$ if it causes no confusion. So when I write $\min\{1,2,3\}$, this is really shorthand for $\min(\{1,2,3\})$.

  

Note that the maximum and minimum need not always exist. For example, there is no maximum of the set $\Bbb N$. And of course, the set $\Bbb Z$ has neither a maximum nor a minimum.

  

However, there is a fact which we will accept as fundamental throughout this course:

  

> [!theorem] ***Theorem***
> Let $X\subseteq \Bbb Z$.
> 
> If *X* is bounded below, then *X* has a minimum.
> 
> If *X* is bounded above, then *X* has a maximum.

  

> [!note] ***No proof***
> The proof of this theorem is beyond the scope of this course. We will instead accept this result without proof.

  

Later in the course, after we have discussed enough logic and set theory, we might revisit the proof of this theorem.

  

> [!exercise] ***Exercise***
> Consider the set
> $$
> B = \{a \in \Bbb Z : a \text{ is an upper bound of } \{1,2,3\}\}
> $$
> Write out several elements of *B*.

  

# Integer Intervals

To lead with an example, the interval of all natural numbers from 5 to 9 is 
$$\{5,6,7,8,9\}$$
To be more precise, we might call this the "inclusive" interval from 5 to 9, since we include 5 and 9.  We might also talk about the "exclusive" interval from 5 to 9, which would then be 
$$ \{6,7,8\}$$
We will denote the inclusive interval from 5 to 9 with the notation 
$$[5..9] = \{5,6,7,8,9\}$$

> [!definition] ***Definition***
> Let *a* and *b* be integers such that $a\le b$.  
> The **(inclusive) integer interval from *a* to *b*** is 
> $$ \begin{aligned}
> \ [a..b] &= \{a,a+1,a+2,...,b-1, b\} \\
> &= \{x\in\Bbb Z: a\le x\le b\}
> \end{aligned}$$
> The **exclusive integer interval from *a* to *b*** is 
> $$\begin{aligned}
> (a..b) &= \{a+1,a+2,...,b-1,b\} \\
> &= \{x\in\Bbb Z: a < x < b\}
> \end{aligned}$$
> The **out-in integer interval from *a* to *b*** is 
> $$\begin{aligned}
> (a,b] &= \{x\in\Bbb Z: a<x\le b\}
> \end{aligned}$$
> The **in-out integer interval from *a* to *b*** is 
> $$ [a,b) = \{x \in \Bbb Z: a\le x < b\}$$
> We further extend this notation to allow for infinite sets, 
> $$ \begin{aligned}
> \ [a..\infty) &= \{a,a+1,...\} \\
> &=\{x\in\Bbb Z: a < x\}
> \end{aligned} 
> $$
> and 
> $$
> (-\infty..b) = \{x\in\Bbb Z: x < b\}
> $$
> and 
> $$(-\infty, \infty) = \Bbb Z$$
> We call *a* the **left end-point** of the interval, and *b* the **right end-point**.  


> [!exercise] ***Exercise***
> Determine the elements of 
> 1. $[-2..2]$
> 2. $(-2..2)$
> 3. $[-2..\infty)$ 
> 4. $(-\infty..2)$
> 5. $[2..2]$
> 6. $(2..2)$

# Real and Rational Intervals

We will also use intervals of rational and real numbers.  For these, we will use a different notation.  This notation is a bit unfortunate, because it can look exactly the same as the notation for pairs.  But because it is standard, we will use it.

> [!definition] Definition
> Let *a* and *b* be two real numbers such that $a\le b$.
> 
> The **inclusive (real) interval from *a* to *b*** is 
> $$ [a,b] = \{x\in\Bbb R: a\le x\le b\} $$
> This interval is commonly called the "closed interval from *a* to *b*".  That vocabulary comes from topology, but because we are very far from discussing topology, we will not adopt that vocabulary.
> 
> The **exclusive interval from *a* to *b*** is 
> $$(a,b) = \{x\in\Bbb R:a < x < b\} $$
> In the common vocabulary, this is called the "open interval from *a* to *b*".  Again this vocabulary is from topology, so we don't adopt it now.
> 
> The **in-out interval from *a* to *b*** is 
> $$(a,b] = \{x\in\Bbb R:a < x\le b\}$$
> and the **out-in interval from *a* to *b*** is 
> $$[a,b) = \{x\in \Bbb R: a\le x < b\}$$
> 
> We further extend these to sets with up upper or lower bound, in the same way as with integer intervals.
> 
> In every case, we call *a* the **left end-point** of the interval, and *b* the **right end-point**.

For example, the exclusive interval (0, 4) is a set of real numbers — that is to say, each element is a decimal expansion.  It contains the decimal 1 (which can also be written as 1.0 or 1.000...).  It also contains 0.5 (or $\frac 1 2$), and it contains $\pi, \sqrt 2, e$ and a bunch of other real numbers.  


> [!exercise] ***Exercise***
> Which of the following are in the interval (0, 4)?
> 1. $-1$
> 2. 2
> 3. 0
> 4. 4
> 5. 5
> 6. $2\pi$
> 7. $\frac 1 \pi$


> [!exercise] ***Exercise***
> In every case below, I give you a set formed from intervals and set operations.  For example, in problem number (1.) below, the solution is that this is equal to $[0,4]$.
> 
> In each case, it is possible to rewrite each set as a single interval.  Find that interval.
> 
> 1. $(0,4)\cup\{0,4\}$
> 2. $[0,4]\smallsetminus (0,4)$
> 3. $(0,4)\cup [0,4]$
> 4. $(0,4)\cap [0,4]$
> 5. $(0,\infty)^c$


We have discussed interval vocabulary and notation for integers, which automatically also covers notation for natural numbers.  If you want an interval for natural numbers, just make sure the left end-point is at least 1.

But that means we still must say something about intervals of rational numbers.  

To simplify matters, we'll just use what we've already done for real numbers, and simply restrict them to rationals.  

So for instance if we want the interval of rational numbers from 1 to 2, we will merely write 

$$ (1,2)\cap \Bbb Q$$

So we think of this as starting from the interval of real numbers and then filtering it so that it contains only the rationals.


> [!definition] Definition
> Let *a* and *b* be any two real numbers, and let *I* be any interval from *a* to *b*.
> 
> The **rational interval from *a* to *b*** is the set 
> $$ I\cap \Bbb Q$$


> [!exercise] ***Exercise***
> Determine whether the following statements are true or false.
> 1. $1\in [1,2]\cap \Bbb Q$
> 2. $2\in [1,2]\cap \Bbb Q$
> 3. $\sqrt 2 \in [1,2]\cap \Bbb Q$
> 4. $\sqrt 4 \in [1,2]\cap \Bbb Q$
> 5. $4.5\in [1,2]\cap\Bbb Q$
> 6. $4.5 \in [1,\infty) \cap \Bbb Q$

# Lists and Set Products

  

A list of objects is a finite sequence of them. So for instance, the list of the integers from 1 to 5 is (1, 2, 3, 4, 5) and the list of the numbers from 4 down to 0 is (4, 3, 2, 1, 0).

A list is similar to a set, in the sense that both are formed by a collection of elements.  They are, in that sense, both examples of "data structures".  They are containers for data.

However, unlike a set, a list respects both order and repetition.  
* The list (1, 2) is not the same as (2, 1).
* The list (1, 2) is not the same as (1, 1, 2).

We can also form lists of elements which are not of the same type. For example, we might have a list containing a set and a number, like

  

$$

(\{1,2,3\},7)

$$

  

This list has length two because it, technically, contains two items: The first item is the set $\{1,2,3\}$ and the second is the number 7.

  

Consider the list (‘a’, 10, {1,2,3}), which has length 3. We will often want to refer to the elements in the list. To aid in this we refer to the “indices” of elements: In this example, the element ‘a’ is at index 1, the element 10 is at index 2, and the element $\{1,2,3\}$ is at index 3.

  

The objects at these indices are called the “coordinates”. So the first coordinate in the example above is ‘a’, the second coordinate is 10, and the third coordinate is $\{1,2,3\}$.

We will use bracket notation to reference the indices of a list.  So for example, if the list is $\ell = ('a', 10, \{1,2,3\})$ then $\ell[1] = 'a'$ and $\ell[2] = 10$.

> [!exercise] ***Exercise***
> Let $\ell = (1,(2,3),(4,5,6))$.  Determine 
> * $\ell[1]$
> * $\ell[2]$
> * $\ell[3]$
> * $\ell[2][1]$
> * $\ell[3][3]$

> [!Definition] 
> Let $\ell$ be any list of *n* elements, for $n\in\Bbb Z^{\ge 0}$.  Let $1\le i\le n$.   Then $i$ is called an **index of $\ell$**.
> 
> The expression $\ell[i]$ refers to the *i*th element of $\ell$, which we call **the element of $\ell$ at index *i***.

> [!exercise] ***Exercise***
> Explain why it would make no sense to try to define a notion of "index" for sets.
  

> [!definition] ***Definition***
> For any objects *a* and *b*, the **pair** of them is the list of length two: $(a,b)$.  
> 
> For any three objects, *a*, *b*, *c*, the **triple** of them is the list of length three: $(a,b,c)$.
> 
> Let *A* and *B* be sets. Then their **set product** is $A\times B$, which is the set of all pairs with a left coordinate in *A*, and a right coordinate in *B*. That is to say,
> $$
> A\times B = \{(a,b):a\in A, b\in B\}
> $$
> More generally if we have an *n* sets, $A_1,A_2,…,A_n$, then their **set product** is
> $$
> A_1\times A_2\times \cdots\times A_n = \\
> \{(a_1,a_2,...,a_n): a_1\in A_1, ...,a_n\in A_n\}
> $$
> We also define, for each positive integer $n\ge 1$,
> $$
> A^n = \overbrace{A\times \cdots \times A}^n
> $$
> So the set $A^n$ is the set of all lists of length *n* which have elements from the set *A*.

  

Suppose that we have sets

  

$$

\begin{aligned}

A&= \{1,2\}\\

B&= \{3,4\}\\

C&= \{5\}

\end{aligned}

$$

  

Then
$$ A\times B = \{(1,3), (1,4), (2,3), (2,4)\}$$

  Also 

$$

A\times B\times C = \{(1,3,5),(1,4,5),(2,3,5),(2,4,5)\}

$$

  

Note that it is not accident that $A\times B\times C$ has four elements, and that $2\cdot 2\cdot 1 = 4$. That is to say, the number of elements in the set product, is the same as taking the number of elements in each set and multiplying them together.

This fact generalizes: If the number of elements in $A_1$ is $n_1$, and the number of elements in $A_2$ is $n_2$, and so on, then the number of elements in $A_1\times A_2\times \cdots A_{n_m}$ is

  

$$

n_1\cdot n_2\cdots n_m

$$

  

> [!note]- We will regard $A\times (B\times C)$ as the same as $A\times B\times C$.
> Also note that, technically,
> 
>   
> 
> $$
> 
> \begin{aligned}
> 
> A\times (B\times C) &= \{1,2\}\times \{(3,5),(4,5)\} \\
> 
> &=\{(1,(3,5)), (1,(4,5)), (2,(3,5)),(2,(4,5))\}
> 
> \end{aligned}
> 
> $$
> 
>   
> 
> So by being very technical, $A\times (B\times C)$ is not the same as $A\times B\times C$.
> 
>   
> 
> However, we will not care about this difference. That is to say, we will regard $A\times (B\times C)$ as being equal to $A\times B\times C$, and in fact we regard these as also equal to $(A\times B)\times C$.
> 
>   
> 
> It just makes things easier to treat these things as equal, and nothing harmful happens because of this slight “abuse of notation”. If we are being very technical, we would say that all three of these are “isomorphic”. However, we have to develop some more mathematical theory before I can explain what that means exactly.
> 
>   
> 
> So for now, just rest assured that this technicality is unimportant—and later on, we can even *prove* that it is unimportant!

  

> [!exercise] ***Exercise***
> Let $A = \{1,2,3\}, B=\{4,5\}$.
> 
> Find $A\times A$ and $A\times B$ and $B\times A$.
> 
> Also find $B^3$.
> 
> Also find $\{1\}^5$.

  

> [!exercise] ***Exercise***
> Show that if *A* is any set, then $A\times \emptyset=\emptyset$.

  

# Functions

  

We are mostly familiar with functions, like $f(x)=x^2+1$. You can give it an input, like 0.  It gives back an output, in this case $f(0)=1$.

  

Likewise we can find that $f(1)=2$ and $f(-1)=2$, and so on.

  

We can graph this input-output relationship like so:

  

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%202.png)

  

Recall the idea of the graph: There is the entire space of $(x,y)$ coordinates, where *x* measures how far you go along the horizontal direction, and *y* how far you go vertically. That's the *entire* coordinate plane.

A point like $(0,1)$ is on the graph of *f* because $f(0)=1$.  The input, 0, is identified on the horizontal axis.  The output, 1, is identified on the vertical axis.  The point (0, 1) is then on the graph of *f*.  

More generally, the points on the graph are the input-output pairs for the function.  

Not every possible curve in the coordinate plane is the graph of a function.  Recall the essential idea of a function: If you input something, you get *one* output. So for example, the following graph is not the graph of any function.

  

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%203.png)

  

That is because, for a particular choice of *x*, like say $x=1$, we can trace that up and down to *two* different points on the graph.

  

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%204.png)

  

This is an interesting mathematical object, surely. But it is not a *function*.

  

This means that a function must pass the “vertical line test”. The idea of the vertical line test is: If you can draw some vertical line on a graph, and intersect it at two different points, then the graph is not the graph of any function.

  

Conversely, if *every* vertical line that you can draw intersects the graph at one point, then it is the graph of some function.

  

> [!exercise] ***Exercise***
> Determine which of the following equations has a graph that is a function.  This means that you'll need to determine the graph of each equation.
> 
> 1. $y=2x-1$
> 2. $y^3 = x$
> 3. $y=\ln x$
> 4. $y^2=x$

  

## Domain

  

A function typically has a domain and a “range”. 

The idea of the domain is likely to be familiar to anyone who has taken high school algebra: It is the set of values which one is able to give as input to the function.

For example, the domain of *f* above is just “all real numbers”. If you have any doubt about the meaning of "real numbers", for now, don't worry about it.  Just regard this as "all numbers".

  

Sometimes we like to write a set of real numbers using interval notation. In this particular case, the interval of “all real numbers” is written $(-\infty,\infty)$, so this is the domain of *f*.

  

On the other hand, the function $g(x)=\frac 1 x$ has domain equal to all real numbers *except* for $x=0$. That is to say, this function has one real number not in its domain, because $\frac 1 0$ is undefined.

The best way to represent this domain is $$\Bbb R\smallsetminus \{0\}$$

If we wish to express this domain in interval notation (which students are often taught to do in high school, so we might as well connect that to what we're doing here), then we would write $(-\infty,0)\cup (0,\infty)$.  But clearly this is much more notation than just $\Bbb R\smallsetminus\{0\}$, and therefore we prefer to use the simpler expression.

Let’s see another example. Assuming that we’re sticking to real numbers, the function $h(x)=\sqrt x$ has domain equal to all nonnegative real numbers. That is to say, its domain is $\Bbb R^{\ge 0}$. This is because there is no real square root of negative numbers.

You can identify the domain of a function by looking at its graph. For example, in the graph above for $f(x)=x^2+1$ has no “gaps” in it—you can set *x* to anything and find a corresponding *y* value on the graph.

Here is the graph for $g(x)=\frac 1 x$.

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%205.png)

You can see that when $x=0$ there is no corresponding value on the graph.

And here is the graph of $h(x)=\sqrt x$.

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%206.png)

Again you can see where the domain is missing: negative numbers.

> [!exercise] ***Exercise***
> Find the domain of each function below.
> 
> 1. $a(x) = \sqrt[3]x$
> 2. $b(x) = \frac 1 {x^2}$
> 3. $c(x) = \sin x$
> 4. $d(x)=2^x$
> 5. $e(x)=\tan x$
> 
> If you find it helpful then you should put this function into some kind of graphing software and use the graph to help identify the domain.

  

## Range

In many US high schools, the word "range" is often used in an ambiguous way.  Therefore we need to clarify the meaning of this word.

- At times, students are taught that the range of a function is “the set of all outputs”. If you refer back to this graph of $f(x)=x^2+1$, you would identify every *y*-value with a point in the range.

	The least *y* value you can identify in this graph is at (0,1), where the *y*-value is 1.

	For every number above 1, you can find a this *y* value on the graph.

	So by this definition, the range is $[1,\infty)$.

- At other times, students are taught that the range of a function is “any set that *contains* the outputs”.

	You will often see it stated that a function like $f(x)=x^2+1$ has a range equal to all real numbers, $(-\infty,\infty)$. Because this set *contains* all of the outputs of *f*, then according to this definition, $(-\infty,\infty)$ is an acceptable choice for “the range of *f*”.
	
	  
	
Of course this ambiguity is unpleasant, and therefore we will do what many university mathematics courses do: We distinguish between the “range” and the “codomain”.

  

So for us, the range of a function is “the set of all outputs”.

  

We will define the codomain of a function to be “any set that contains all outputs”.

  

According to these definitions, therefore the range of *f* is $[1,\infty)$ and the codomain of *f* can be $(-\infty,\infty)$.

  

Let’s see the range for the other functions that we’ve been describing. If you look back at the graph of $g(x)=\frac 1 x$, it should be clear that the range is $(-\infty,\infty)$. If you look at the graph of $h(x)=\sqrt x$ it should be clear that the range is $[0,\infty)$.

  

> [!exercise] ***Exercise***
> Go back to the previous exercise, which asked you to find the domains of several functions. Now find their ranges.

  

## Codomain

  

You may be asking a very reasonable question: Why do we even have the concept of a codomain?

  

I mean, the range seems natural, precisely defined, and descriptive of what the function is.

  

The codomain can be just *any* set bigger than the range. That seems less natural, less precise, and less descriptive. Why even bother with this concept?

  

There are two reasons not to answer this right now. First, we will discuss it later on, when we’ve developed more rigorous and serious ideas in mathematics which will help us to talk about it. Second, I want to keep the current section short.

  

## Domain and Range Notation

  

If *f* is a function with domain *A* and codomain *B*, we will write $f:A\to B$.

  

> [!exercise] ***Exercise***
> Look back at the previous exercise, which asking you to find the domains of several functions. Write the domain and range in the notation introduce here, for each function.