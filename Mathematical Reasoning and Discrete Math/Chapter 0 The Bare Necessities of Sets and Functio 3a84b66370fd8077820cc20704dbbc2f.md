# Chapter 0: The Bare Necessities of Sets and Functions

It is hard to discuss any amount of mathematics in a serious and rigorous way, without having a certain minimum understanding of sets and set notation.  

We will return to discussing set theory is a deeper, even axiomatic way, later in this course.  I will try to keep this chapter very brief so that we can get to the fun stuff!

# Set Extensionality

A set is a fundamental mathematical object, and as such, cannot be formally defined.

- Why can’t a set be formally defined?  A philosophical note.
    
    To some, the idea of an object which cannot be defined seems odd, perhaps even paradoxical.  
    
    Here’s an argument for why we *must* deal in concepts which are not defined.
    
    Any time that one concept is defined, it is defined in terms of other concepts — defining something in terms of itself is nonsense.  
    
    (Amusingly, in Moliere’s play *Le Malade Imaginaire*, a medical student is asked why opium causes sleep — to which he responds (translated) “because it possesses a *virtus dormitiva*!”  But then *virtus dormitiva* just means “causes sleep”.  So the joke goes: Opium causes sleep because opium causes sleep.  A useless circular explanation.)
    
    So a concept, when defined, is necessarily defined in terms of some other concepts.  But these other concepts must, themselves, be understood either because they are defined, or because they are simply fundamental and undefined.  Well if they are fundamental and not defined in terms of other concepts, then we have accepted the existence of concepts which we understand without definition. 
    
    But if *they* are defined in terms of other concepts, then *those* other concepts must again be understood, either as fundamental or in terms of yet more concepts.  Of course the idea repeats any number of times, with concepts in terms of concepts, in terms of concepts, in terms of concepts, and so on.  
    
    If this chain of definitions goes on infinitely, then we could never thinks of the concepts in the first place.  In order to make sense of anything, the chain must terminate somewhere — and wherever it does terminate is at an undefined concept.
    
    So this idea of a fundamental and undefined concept is necessary in mathematics, and the rest of life.  
    
    In mathematics, our main undefined concept is that of a set.
    

But although we cannot define sets formally, we can gesture at some intuitions.  A set is mean to be a “collection” or a “gathering together” of some disparate objects.  

For example, the set $\{-1,\pi, 3, 2\}$ contains four objects, brought together into a single set.

The set is indicated by curly braces, and then we list the elements of the set.  

A set is defined “extensionally”, which is a fancy way of saying:

> A set’s only true defining feature is “what is inside and what is not”.
> 

In the example above, -1 is in the set but 0 is not.  

To express membership, we write $\in$.  We use this notation in an “infix” way, so for example 

$$
-1\in \{-1,\pi,3,2\}
$$

expresses that “-1 is in the set $\{-1,\pi,3,2\}$”.  Of course we can also say that $\pi$ is in the set, by writing 

$$
\pi \in \{-1,\pi,3,2\}
$$

When something is *not* in the set we write $\notin$.  So for example 

$$
0\notin \{-1,\pi,3,2\}
$$

Because a set is defined extensionally, then it means that set $\{-1,2,3,\pi\}$ is equal to $\{-1,\pi,3,2\}$.  After all, they have the same members!  And since membership is the only thing that defines what a given set is, therefore these must be the same sets.

We could express this by saying,

> *Sets do not respect ordering.*
> 

Also

> *Sets do not respect repetition.*
> 

Note that the set {1, 2} is equal to the set {1,1,2,2,2,2}, because again, these have the same elements.

***Exercise***

Decide on the truth of the following expressions.

1. $\pi\in\{1,2\}$
2. $2\in\{1,2\}$
3. $\pi\notin \{1,2\}$
4. $2\notin\{1,2\}$
5. $\{1,2\}\in \{1,2\}$
6. $\{1\}\in\{1,2\}$
7. $\{1,2,3\}=\{1,2\}$
8. $\{1,2,1,2,1\} = \{1,2\}$

***Definition*** 

Let *X* and *Y* be sets.  

We say that *X* is a **subset** of *Y* if, for every $a\in X$ we have $a\in Y$.

When *X* is a subset of *Y* we write $X\subseteq Y$.  

It is immediate from definitions that, for sets *X* and *Y*, we have that $X=Y$ if and only if $X\subseteq Y$ and $Y\subseteq X$.

***Exercise***

For each of the following sets, decide which of the other sets are subsets.  

1. $\{1,2,3\}$
2. $\{1,2\}$
3. $\{1,2,3,4\}$
4. $\{5,6\}$

# Subsets of Integers

***Definition***

The set of **natural numbers** is 

$$
\Bbb N = \{1,2,3,\dots\}
$$

The set of **integers** is 

$$
\Bbb Z = \{\dots,-2,-1,0,1,2,\dots\}
$$

Of course we see that $\Bbb N\subseteq \Bbb Z$.

# Sets of Non-numbers

We will find a lot of use for sets of numbers—this may be their most common use, early on.  

But in principle we can form sets of anything.  We could form sets of letters, like $\{\text`a\text',\text`b\text',\text`c\text'\}$.  We could form sets of equations, like 

$$
\{x^2+1=x, \ xe^x=1\}
$$

We could form sets of … well, *sets*! 

$$
X=\{\{1,2\}, \{0,1\}, \{\pi,e,-\sqrt 2\}\}
$$

This can be confusing at first: How many elements does the example set above have?  

It has three elements.  You might have thought “but I see seven elements”.  Well yeah, but 1 is not in the set.  Rather, $1\in\{1,2\}$ and $\{1,2\} \in \{\{1,2\}, \{0,1\}, \{\pi,e,-\sqrt 2\}\}$.  

But the “membership” relation is not “transitive”.  Just because $1\in\{1,2\}$ and also $\{1,2\}\in X$, we do *not* have that $1\in X$.  

***Exercise***

Let $Y = \{\{\{1,2\},\{3,4\}\}, \{5,6\},7\}$.  

Decide which of the following is true.

1. $1\in Y$
2. $\{1,2\}\in Y$
3. $\{\{1,2\},\{3,4\}\}\in Y$

Find the number of elements in *Y*.

# Set Builder Notation

Most of the sets that we’ll be interested are defined by a property, like “all even natural numbers”.  We could express it like this 

$$
\{2,4,6,\dots\}
$$

But the set is defined by a property! So we would prefer to write it in a way that expresses that property explicitly, rather than making you infer it from a pattern.  

To do so we use “set builder notation”.  The following demonstrates set builder notation for the set of even numbers.

$$
\{x \in\Bbb N: x \text{ is even}\}
$$

The way to read this is: 

- The curly brace means “set”.
- The *x* is a “variable” — this will represent any one of the elements in the set.
- The $\in \Bbb N$ tells us that *x* will be a natural number. This essentially establishes the *type* of object that *x* is.
- Everything after the colon, “:”, states the property that *x* must have.

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image.png)

You can imagine it working like this: 

Consider the number 1.  Since 1 is in $\Bbb N$, it is a possible value of *x*.  We then check whether this has the property, “*x* is even”.  It does not have the property, so 1 is not in the set.

Moving on, consider the number 2.  Since this is in $\Bbb N$, it is a possible value of *x*.  We then check whether this has the property, “*x* is even”.  It does have the property, so 2 is in the set.

And so on.

***Exercise*** 

Write out the three smallest elements of the set

$$
\{x\in\Bbb N: x^2 - 2x > 0\}
$$

- Solution
    
    

***Exercise***

Give two negative numbers in the set

$$
\{x\in \Bbb Z: x^2-2x > 0\}
$$

- Solution
    
    

There are some variations on set builder notation that you’ll sometimes see when you read other texts.  For one example, you can move the “type” after the colon.

For example one could write the set of even natural numbers as 

$$
\{x:x\in\Bbb N, x \text{ is even}\}
$$

This now says that *x* is a variable, and it takes values which are both natural numbers and even.

Another variation is that the symbol before the colon does not have to be merely a variable.  It is allowed to be a function. For example, 

$$
S=\{x^2+1:x\in\Bbb N\}
$$

To list out some of the elements of this set, we may let *x* first take the value 1 (we start with 1 because $x\in\Bbb N$).  Then the expression $x^2+1$ has the value $1^2+1=2$.  Therefore $2\in S$.

Next let $x=2$.  Then the expression $x^2+1$ has the value $2^2+1=5$.  Therefore $5\in S$.

Therefore, to represent *S* by listing a few of its values, 

$$
S = \{2,5,10,17,26,...\}
$$

***Exercise***

List two more elements of the set *S* described above.  That is to say: Determine two elements of *S* which are larger than 26.

- Solution
    
    

***Exercise***

List all of the elements of the set

$$
\{\sin(\pi x):x\in\Bbb N\}
$$

- Solution
    
    

***Exercise***

List all elements of 

$$
\{\sin(\pi x) : x\in\Bbb Z\}
$$

- Solution
    
    

***Exercise***

Consider the sets

$$
\begin{aligned}
  A &= \{x\in\Bbb N: x \text{ is even, and } x < 10\}\\
  B &= \{2,4,6\} \\
  C &= \{2,4,6,8\} \\
  D &= \{x: x \in\Bbb N, \text{ and $x$ is even}\} \\
  E &= \{1\} \\
  \Bbb N &= \{1,2,\dots\}\\
  F&= \emptyset \\
  G&= \{x\in \Bbb N: x < 0\}
\end{aligned}
$$

Of these sets, which of them are equal?  Which is a subset of some other set?  Write out all of the relationships that apply.  

- Solution
    
    

***Exercise*** 

Consider the set

$$
\{2x-4y: x,y\in\Bbb N\}
$$

Does the set contain 0?  Does it contain positive numbers? Does it contain negative numbers?  

Is there a number which you can prove is not in the set?  (Hint: Use the fact that an even times any number is even, and the sum of even numbers is even.)

- Solution
    
    

***Definition*** 

If $X\subseteq \Bbb Z$ then we denote subset of positive elements by $X^+$.  That is to say, 

$$
X^+ = \{a\in X: a > 0\}
$$

Likewise 

$$
\begin{aligned}
 X^- &= \{a\in X: a < 0\} \\
 X^{\ge 0} &= \{a\in X: a\ge 0\} \\
 X^{\le 0} &= \{a\in X:a\le 0\}
\end{aligned}
$$

Note that $\Bbb N = \Bbb Z^+$.

Also,

$$
\begin{aligned}
\Bbb Z^- &= \{-1,-2,-3,\dots\}\\

 \Bbb Z^{\ge 0} &= \{0,1,2,\dots\} \\
 \Bbb Z^{\le 0} &= \{\dots,-2,-1,0\}
\end{aligned}
$$

# The Empty Set

***Definition***

The set which has no elements is called **the empty set**.

It is written as $\emptyset$ or $\{\}$.

So of course, for any integer *a* we have $a\notin \emptyset$.

One of the facts that students often find the most confusing about the empty set, is that it is a subset of *every* set.  

For example, $\emptyset \subseteq \{1,2,3\}$.

Why? This can be hard to think of, because you have to assess the sentence

> For every element $a\in \emptyset$ we have $a\in \{1,2,3\}$.
> 

But of course the part $a\in\emptyset$ is simply never true!  There is no choice of *a* for which this part is true — so how could we then go on to evaluate the $a\in \{1,2,3\}$ part? — and how do we then assess the truth of the entire sentence?

It is precisely because $a\in\emptyset$ is never true, that therefore the entire sentence “For every element $a\in\emptyset$ we have $a\in\{1,2,3\}$” is necessarily true.  That is to say, a sentence of the form “Every *P* is *Q*” will always be true when there is no object which is *P*.

If that confuses you, here are a few explanations which try to make this fact sensible.  

- As you remove elements, you should still have a subset.  
So for example, $\{1,2,3\}\subseteq \{1,2,3\}$ and $\{1,2\}\subseteq \{1,2,3\}$ and $\{1\}\subseteq \{1,2,3\}$.  
A subset is supposed to be “the same elements or fewer”, and so if we continue this progression one more time, we should have $\emptyset \subseteq \{1,2,3\}$.
- Consider a computer program that checks whether the set *X* is a subset of *Y*.  It considers each element of *X.* If that element is not in *Y*, the program returns `False`.  If no such “counterexample” is ever found, then the program returns `True` (i.e. the program determines that *X* is a subset of *Y*).
If the program now runs with $X=\emptyset$, then there is no element to consider.  The program never finds a counterexample, and so returns `True`.

***Definition***

Consider the following principle.

> Any sentence of the form “Every *P* is *Q*.” is true, whenever there is no object that is *P*.
> 

This principle is called **vacuous quantification**.

We will revisit the idea of vacuous quantification later, in the section on logic.  

# Set Operations

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
        

***Definition***

Let *U* be any set which we call the **universe**.

Let $A,B\subseteq U$.

Then their **union** is the set of all elements in *A* or *B*, and is denoted $A\cup B$.

Their **intersection** is the set of elements in both *A* and *B*, and is denoted $A\cap B$.

The **complement of *A*** is the set of elements in *U* which are not in *A,* and is denoted $A^c$.

The set of *A* **set-minus** *B* is the set of elements in *A* but not *B*, and is denoted $A\smallsetminus B$.  

***Exercise***

Let the universe be $\{0,1,2,3,4\}$, and $X = \{0,1,2\}$, and $Y = \{2,3,4\}$.

Find 

1. $X\cup Y$
2. $X\cap Y$
3. $X^c$
4. $Y^c$
5. $X\smallsetminus Y$
6. $Y\smallsetminus X$

***Exercise***

Let *U* be the universe and $X \subseteq U$.

1. Show that $(X^c)^c= X$.
2. Show that $X^c = U\smallsetminus X$.
3. Show that $U\cup X = U$ and $\emptyset \cap X = \emptyset$.
4. Show that $U\cap X = X = \emptyset \cup X$.

***Definition***

Let *X* and *Y* be two sets. We say that *X* and *Y* are **disjoint** if 

$$
X\cap Y=\emptyset
$$

***Exercise***

Show that $\emptyset$ is disjoint from every other set.

***Exercise***

Of the following sets, decide which pairs are disjoint.

- The set of positive integers.
- The set of negative integers.
- The set of even integers.
- The set of odd integers.
- The set of prime integers.
- $\{0\}$

For example, the set of positive integers and the set of negative integers are disjoint.

Which other pairs taken from this list are disjoint?

# Bounds, Max, Min

***Definition***

Let $X\subseteq \Bbb Z$ be a nonempty set.  Let $a\in \Bbb Z$.

We say that *a* is a **lower bound** of *X* if, for every element $b\in X$, we have

$$
 a\le b
$$

We say that *a* is an **upper bound** of *X* if, for every element $b\in X$, we have 

$$
 b\le a
$$

We say that *a* is **the minimum** of *X* if *a* is a lower bound and also $a\in X$.

We say that *a* is **the maximum** of *X* if *a* is an upper bound and also $a\in X$.

When the minimum exists, we denote it by $\min(X)$. When the maximum exists, we denote it by $\max(X)$.

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

***Theorem***

Let $X\subseteq \Bbb Z$.  

If *X* is bounded below, then *X* has a minimum.  

If *X* is bounded above, then *X* has a maximum.

***No proof***

The proof of this theorem is beyond the scope of this course.  We will instead accept this result without proof.

Later in the course, after we have discussed enough logic and set theory, we might revisit the proof of this theorem.

***Exercise***

Consider the set 

$$
\{a \in \Bbb Z : a \text{ is an upper bound of } \{1,2,3\}\}
$$

Write this set in a simpler description.  

# Lists and Set Products

A list of objects is a finite sequence of them.  So for instance, the list of the integers from 1 to 5 is (1, 2, 3, 4, 5) and the list of the numbers from 4 down to 0 is (4, 3, 2, 1, 0).

We can also form lists of elements which are not of the same type.  For example, we might have a list containing a set and a number, like 

$$
(\{1,2,3\},7)
$$

This list has length two because it, technically, contains two items: The first item is the set $\{1,2,3\}$ and the second is the number 7.  

Consider the list (‘a’, 10, {1,2,3}), which has length 3.  We will often want to refer to the elements in the list.  To aid in this we refer to the “indices” of elements: In this example, the element ‘a’ is at index 1, the element 10 is at index 2, and the element $\{1,2,3\}$ is at index 3.  

The objects at these indices are called the “coordinates”.  So the first coordinate in the example above is ‘a’, the second coordinate is 10, and the third coordinate is $\{1,2,3\}$.

***Definition***

For any objects *a* and *b*, the **pair** of them is the list of length two: $(a,b)$.

Let *A* and *B* be sets.  Then their **set product** is $A\times B$, which is the set of all pairs with a left coordinate in *A*, and a right coordinate in *B*.  That is to say, 

$$
A\times B = \{(a,b):a\in A, b\in B\}
$$

More generally if we have an *n* sets, $A_1,A_2,…,A_n$, then their **set product** is 

$$
A_1\times A_2\times \cdots\times A_n = \\
\{(a_1,a_2,...,a_n): a_1\in A_1, ...,a_n\in A_n\}
$$

We also define, for each positive integer $n\ge 1$, 

$$
A^n = \overbrace{A\times \cdots \times A}^n
$$

Suppose that we have sets 

$$
\begin{aligned}
 A&= \{1,2\}\\
 B&= \{3,4\}\\
 C&= \{5\}
\end{aligned}
$$

Then 

$$
A\times B\times C = \{(1,3,5),(1,4,5),(2,3,5),(2,4,5)\}
$$

Note that it is not accident that this has four elements, and that $2\cdot 2\cdot 1 = 4$.  This fact generalizes: If the number of elements in $A_1$ is $n_1$, and the number of elements in $A_2$ is $n_2$, and so on, then the number of elements in $A_1\times A_2\times \cdots A_{n_m}$ is 

$$
n_1\cdot n_2\cdots n_m
$$

Also note that, technically,  

$$
\begin{aligned}
 A\times (B\times C) &= \{1,2\}\times \{(3,5),(4,5)\} \\
 &=\{(1,(3,5)), (1,(4,5)), (2,(3,5)),(2,(4,5))\}
\end{aligned}
$$

So by being very technical, $A\times (B\times C)$ is not the same as $A\times B\times C$.  

However, we will not care about this difference.  That is to say, we will regard $A\times (B\times C)$ as being equal to $A\times B\times C$, and in fact we regard these as also equal to $(A\times B)\times C$.  

It just makes things easier to treat these things as equal, and nothing harmful happens because of this slight “abuse of notation”.  If we are being very technical, we would say that all three of these are “isomorphic”.  However, we have to develop some more mathematical theory before I can explain what that means exactly.  

So for now, just rest assured that this technicality is unimportant—and later on, we can even *prove* that it is unimportant!

***Exercise***

Let $A = \{1,2,3\}, B=\{4,5\}$.

Find $A\times A$ and $A\times B$ and $B\times A$.

Also find $B^3$.

Also find $\{1\}^5$.

***Exercise***

Show that if *A* is any set, then $A\times \emptyset=\emptyset$.

# Functions

We are mostly familiar with functions, like $f(x)=x^2+1$.  You can give it an input, like 0, and it gives back an output, in this case $f(0)=1$.

Likewise we can find that $f(1)=2$ and $f(-1)=2$, and so on.  

We can graph this input-output relationship like so:

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%202.png)

Recall the idea of the graph: There is the entire space of $(x,y)$ coordinates, where *x* measures how far you go along the horizontal direction, and *y* how far you go vertically.  A point like $(0,1)$ is on the graph of *f* because $f(0)=1$.  

Basically the graph tells you, for every possible input, the value that *f* outputs.  

Now recall the essential idea of a function: If you input something, you get *one* output.  So for example, the following graph is not the graph of any function. 

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%203.png)

That is because, for a particular choice of *x*, like say $x=1$, we can trace that up and down to *two* different points on the graph.  

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%204.png)

This is an interesting mathematical object, surely.  But it is *not* a function.  

This means that a function must pass the “vertical line test”.  The idea of the vertical line test is: If you can draw some vertical line on a graph, and intersect it at two different points, then the graph is not the graph of any function.

Conversely, if *every* vertical line that you can draw intersects the graph at one point, then it is the graph of some function.  

***Exercise***

Determine which of the following equations has a graph that is a function.  

1. $y=2x-1$
2. $y^3 = x$
3. $y=\ln x$
4. $y^2=x$

## Domain

A function typically has a domain and a “range”.  The idea of the domain is likely to be familiar to anyone who has taken high school algebra: It is the set of values which one is able to give as input to the function.  

For example, the domain of *f* above is just “all real numbers”.  We haven’t talked about the real numbers yet, and we will talk about them more formally later—but for now we will simply use these concepts at the same intuitive level that is familiar from algebra. 

Sometimes we like to write a set of real numbers using interval notation.  In this particular case, the interval of “all real numbers” is written $(-\infty,\infty)$, so this is the domain of *f*. 

On the other hand, the function $g(x)=\frac 1 x$ has domain equal to all real numbers *except* for $x=0$.  That is to say, this function has one real number not in its domain, because $\frac 1 0$ is undefined.  

If we wish to express this domain in interval notation, then we would write $(-\infty,0)\cup (0,\infty)$.  Notice that curved parentheses at the end of an interval means that the end-point is excluded from the interval.  So $(-\infty,0)$ does not actually include $-\infty$ (obviously, because it’s not a real number, but also because of the curved parenthesis).  And it does not include 0.  Likewise $(0,\infty)$ does not include 0 or $\infty$.  

Therefore their union, $(-\infty,0)\cup(0,\infty)$, does not include 0.  

Let’s see another example.  Assuming that we’re sticking to real numbers, the function $h(x)=\sqrt x$ has domain equal to all nonnegative real numbers.  That is to say, its domain is $[0,\infty)$.  This is because there is no (real number) square root of negative numbers.

You can identify the domain of a function by looking at its graph.  For example, in the graph above for $f(x)=x^2+1$ has no “gaps” in it—you can set *x* to anything and find a corresponding *y* value on the graph.  

Here is the graph for $g(x)=\frac 1 x$.  

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%205.png)

You can see that when $x=0$ there is no corresponding value on the graph.  

And here is the graph of $h(x)=\sqrt x$. 

![image.png](Chapter%200%20The%20Bare%20Necessities%20of%20Sets%20and%20Functio/image%206.png)

Again you can see where the domain is missing: negative numbers.  

***Exercise***

Find the domain of each function below.

1. $a(x) = \sqrt[3]x$
2. $b(x) = \frac 1 {x^2}$
3. $c(x) = \sin x$
4. $d(x)=2^x$
5. $e(x)=\tan x$

If you find it helpful then you should put this function into some kind of graphing software and use the graph to help identify the domain.

## Range

We will make a change when we talk about the “range”.  

Typically, the word “range” is used in an ambiguous way.  At least I have observed US schools teaching the word “range” to mean two very different things.

- At times, students are taught that the range of a function is “the set of all outputs”. If you refer back to this graph of $f(x)=x^2+1$, you would identify every *y*-value with a point in the range.
The least *y* value you can identify in this graph is at (0,1), where the *y*-value is 1.
For every number above 1, you can find a this *y* value on the graph.  
So by this definition, the range is $[1,\infty)$.
- At other times, students are taught that the range of a function is “any set that *contains* the outputs”.  
You will often see it stated that a function like $f(x)=x^2+1$ has a range equal to all real numbers, $(-\infty,\infty)$.  Because this set *contains* all of the outputs of *f*, then according to this definition, $(-\infty,\infty)$ is an acceptable choice for “the range of *f*”.

Of course this ambiguity is unpleasant, and therefore we will do what many university mathematics courses do: We distinguish between the “range” and the “codomain”.

So for us, the range of a function is “the set of all outputs”.

We will define the codomain of a function to be “any set that contains all outputs”.

According to these definitions, therefore the range of *f* is $[1,\infty)$ and the codomain of *f* can be $(-\infty,\infty)$.

Let’s see the range for the other functions that we’ve been describing.  If you look back at the graph of $g(x)=\frac 1 x$, it should be clear that the range is $(-\infty,\infty)$.  If you look at the graph of $h(x)=\sqrt x$ it should be clear that the range is $[0,\infty)$.

***Exercise***

Go back to the previous exercise, which asked you to find the domains of several functions.  Now find their ranges.  

## Codomain

You may be asking a very reasonable question: Why do we even have the concept of a codomain?

I mean, the range seems natural, precisely defined, and descriptive of what the function is.  

The codomain can be just *any* set bigger than the range.  That seems less natural, less precise, and less descriptive.  Why even bother with this concept?  

There are two reasons not to answer this right now.  First, we will discuss it later on, when we’ve developed more rigorous and serious ideas in mathematics which will help us to talk about it.  Second, I want to keep the current section short.

## Domain and Range Notation

If *f* is a function with domain *A* and range *B*, we will write $f:A\to B$.

***Exercise***

Look back at the previous exercise, which asking you to find the domains of several functions.  Write the domain and range in the notation introduce here, for each function.