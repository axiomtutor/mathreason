# Lesson 1: Set Extensionality

## Sets and Membership

Sets are the most foundational objects in mathematics.  Nearly every advanced math course will rely heavily on the basics of set theory.  

- Because it is fundamental, the idea of a set cannot be defined.
    
    After all, to define some concept, you must use other concepts.  And if those other concepts are not defined, then you must define each of them in terms of yet more concepts!  And again this idea repeats, of concepts being defined in terms of other concepts.  
    
    There are just two possibilities: Either we let this chain of definitions go on infinitely, or it must terminate.  We can’t let it go on infinitely, since we would then never have a place to start thinking or investigating.  So the chain must terminate.
    
    But since the chain of definitions must terminate, we must have certain concepts which are not defined.  Any concept which is not defined, must be understood fundamentally.
    
    In mathematics, this fundamental concept is the set.
    

Although formally we cannot define what a set is, we can still say something less formal, to help communicate the idea.  You can think of a set as a “grouping” or “collection” of things.  

For example, the set {1,2,3} is a set with three numbers.  The set is a way of bringing different objects together into one object.

For another example, we could have the set of even integers.  

$$
\{\dots,-4,-2,0,2,4,\dots\}
$$

One important fact about sets is that they are entirely defined by which elements are in the set.  This may seem trivial, but this fact has a few consequences that you might not immediately predict!

For one thing, it implies that, for example, the set {1,2,3} is equal to the set {3,2,1}.  I mean — after all — they have the same members!  1 is a member of both, and so are 2 and 3.  Nothing else is a member of either one.  Since membership is the *only* thing that determines the identity of a set, then {1,2,3} = {3,2,1}.

Here’s another consequence: The set {1,2,3} equals the set {1,1,2,2,2,3}.  Again, they both have 1 as a member, and 2 and 3.  The repetitions don’t change anything about membership.  Therefore {1,2,3} = {1,1,2,2,2,3}.

One can encapsulate these facts by saying 

> Sets do not respect order or repetitions.
> 

(The technical expression of the fact that sets are defined only by membership, is that “sets are defined extensionally”.)

To express that 1 is a member of {1,2,3} we use the $\in$ symbol.  

$$
1\in \{1,2,3\}
$$

If we wanted to state that 0 is not in {1,2,3} we would write 

$$
0\notin\{1,2,3\}
$$

These examples have been finite, but we could also have the infinite set of all natural numbers.

$$
\{1,2,3,\dots\}
$$

Or the set of even integers, 

$$
\{2,4,6,\dots\}
$$

## Set Builder Notation

Often a set is defined by a property.  

For example, we could consider the set of prime numbers.  

- Recall the definition of a prime number.
    
    A natural number *n* is prime if $n> 1$ and its only divisor $m > 1$ is itself.  
    
    The first 10 primes are therefore 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29.
    

To write the set of prime numbers, by enumerating its elements, we would write 

$$
\{2,3,5,7,\dots\}
$$

Writing the elements in a sequence is not always desirable.  For one thing, you are depending on the reader to detect the pattern in the elements that you write.  If you look at the above example, this set could be confused with “2 and then all the odd numbers greater than 2”.  

Therefore we often prefer to define a set, *using the property that defines it*.  We do this with “set builder notation”.  The set builder notation for the set of primes is demonstrated below.

$$
P=\{x: x \text{ is prime}\}
$$

Here *x* is a variable, and it can take any value under current discussion.  That means *x* can be 1, or 2, or 3, or so on.  

The set *P* is formed by *keeping* only those values, for which the property is satisfied.  The “property” is written after “:”, so in this example the property is “*x* is prime”.

Therefore we could let $x=1$, but then since this *x* fails the property “*x* is prime”, therefore *x* is not included in the set *P*.

Next we could let $x=2$.  Since now *x* satisfies the property, then *x* is included in *P*.  Therefore $2\in P$.

If we repeat the reasoning, we may infer that $3\in P$ but $4\notin P$, and so on.  

Let’s see another example, just to make sure the idea is clear.  Here is the set of even numbers:

$$
E = \{x: x\text{ is even}\}
$$

You may reason, like we did before, that $2\in E$, because 2 has the property, but $3\notin E$ because 3 does not have the property, and so on.  

Let’s see a more complicated example.  Consider the set 

$$
A = \{n^2+1: n \text{ is a natural number}\}
$$

This time the “elements that get in” are not merely the variable.  To list the first few elements of *A*, we have 

$$
A = \{2,5,10,17,\dots\}
$$

This is because we let $n=1$, and decide if *n* is a natural number.  It is, and therefore we keep the corresponding element—BUT, this time the element is not *n*.  Rather the element is $n^2+1$ which is 2.  

Next let $n=2$, which is a natural number, and therefore the element gets in.  Therefore $n^2+1=5$ is in *A*.

And so on.