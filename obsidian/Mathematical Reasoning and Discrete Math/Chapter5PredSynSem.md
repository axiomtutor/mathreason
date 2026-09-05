---
title: "Chapter 5: Predicate Syntax and Semantics"
---


We previously developed a syntax and semantics for propositional logic, and then used it to develop a system of writing proofs. 

In this chapter we will expand this system to “predicate logic”.  Again we will develop a syntax and semantics.

The syntax requires yet again declaring an alphabet, $\Sigma$, and a language, $L\subseteq \Sigma^*$.  Just as before, *L* will be defined recursively.  However, this time we will not just have a single subset of meaningful expressions.  More on this later.

The semantics will determine the meanings of meaningful components.  Like the semantics of propositional logic, this is determined recursively as well: We establish the meanings of small signifiers, and then recursively describe how meaning is attached to more complex compositions.

# Predicates and Objects

As you consider many examples of propositions, you notice a pattern.  They are always made up of an “object” and a “predicate”.  

For example, in the sentence “The ball is red” the object is “the ball”.  The predicate is “is red”.  

The object is the *thing* that the sentence is about.  The predicate is the claim that we make about it.

> [!exercise] ***Exercise***
>
> In the proposition “Anya is tall” there is only one good choice for which is the object and which is the predicate.
>
> Which is which?
>
> Also, choose a symbol for Anya, a symbol for the predicate “*x* is tall”, and then write the propositional atom which represents “Anya is tall”.

Now as you consider more propositions you may quickly recognize that many of them involve multiple objects at the same time.  For example “1 is less than 2” uses the objects 1 and 2.  

We can also find examples like “Ljubljana is in the middle of Zagreb, Graz, and Venice.”  In this sentence there are four objects, the four referenced cities, and one relationship, the “is in the middle of” relation.  

> [!definition] ***Definition***
>
> An **object** or **constant** is a particle of a proposition, which refers to something.
>
> A **predicate** is a particle of a proposition, which asserts a claim about objects.
>
> If the predicate *P* asserts a claim about *n* objects, then *P* is said to have **arity** *n*.
>
> If the arity of a predicate is 1, then we call it a **property**.  
>
> If the arity of a predicate is 2, then we call it a **binary relation**.
>
> If the arity of a predicate is 3, then we call it a **ternary relation**.

> [!exercise] ***Exercise***
>
> Consider the proposition “The average of 5, 6, and 7, is 6.”
>
> Identify the objects, the predicate, and the arity of the predicate.

There is a helpful way to visualize a property.  Take for example, a party in which some people are math majors, some are philosophy majors, some are computer scientists.  “Being a philosophy major” is a property—likewise for all the other majors.  

Moreover, some people may have more than one of these majors, and some have none of these majors.  

![image.png](Chapter%204%20Predicates,%20Objects,%20and%20Types/image.png)

We can identify the property of “being a math major” with the set of people who are math majors:  It is a set of five people, according to the diagram above.  Likewise for the other majors.

This Venn diagram also represents that two people are triple-majors: Math, philosophy, and computer science.  

And there is just one person who is a double-major in math and philosophy (who is not also majoring in computer science).

And there are two people who have none of these majors.  

If we make up some names and symbols, we might use the following language to describe this party:  We choose the object names $\text{Objs} = \{ \text{a,b,c,d,e,f,g,h,i,j} \}$.  Let’s suppose that the people at the party are Adam, Brooke, Cecil, Dale, Eudoxus, …, Jelani.  We’ll interpret the names like so 

$$
\begin{aligned}
 a^{\mathcal I} &= \text{Adam} \\
 b^{\mathcal I} &= \text{Brooke} \\
 c^{\mathcal I} &= \text{Cecil} \\
 d^{\mathcal I} &= \text{Dale} \\
 e^{\mathcal I} &= \text{Eudoxus} \\
 f^{\mathcal I} &= \text{Francis} \\
 g^{\mathcal I} &= \text{Gyanesh} \\
 h^{\mathcal I} &= \text{Hilary} \\
 i^{\mathcal I} &= \text{Irene} \\
 j^{\mathcal I} &= \text{Jelani} \\
\end{aligned}
$$

We choose the predicate names *M, P, C*.  Each predicate name will denote the set of people in each major.  For example, if the math majors are Adam, Brooke, Cecil, Dale, and Eudoxus, then 

$$
M^{\mathcal I} = \{\text{Adam, Brooke, Cecil, Dale, Eudoxus}\}
$$

If the philosophy majors are Adam, Brooke, Cecil, Gyanesh, and Irene, then these are the denotation of *P*.

$$
P^{\mathcal I} = \{\text{Adam, Brooke, Cecil, Gyanesh, Irene}\}
$$

> [!exercise] ***Exercise***
>
> Make up a denotation of the symbol *C*, which denotes the set of computer science majors.  There is more than one valid way to decide which names are in *C*, so just find one that is consistent with everything that we’ve said above.  
>
> But note that not every denotation of *C* is correct.  
>
> - $C^{\mathcal I}$ must contain five people, and
> - it must overlap $M^{\mathcal I}$ in exactly three people, and
> - it must overlap $P^{\mathcal I}$ in exactly three people, and
> - $C^{\mathcal I}, M^{\mathcal I}, P^{\mathcal I}$ must overlap in exactly two people.

# Relation Diagrams

There is a nice graphical representation of binary relations.

Just to take a fresh example, consider the relation “less than” on the set of numbers {1, 2, 3, 4, 5}.  

If we use the symbol *L* to represent the relation, then $(1,2)\in L^{\mathcal I}$ because 1 < 2.  Also $(2, 5)\in L^{\mathcal I}$ because 2 < 5.  On the other hand $(2, 2)\notin L^{\mathcal I}$ and $(2,3)\notin L^{\mathcal I}$.

![image.png](Chapter%204%20Predicate%20Syntax%20and%20Semantics/image.png)

When drawing a node-and-arrow diagram for a relation, we put an arrow from *x* to *y* if the ordered pair $(x,y)$ is in the relation.  

In this example, since $(1,2)\in L^{\mathcal I}$ then there is an arrow pointing from 1 to 2.

> [!exercise] ***Exercise***
>
> Draw the diagram for the relation “less than or equal to” on the set {1, 2, 3, 4, 5}.
>
> Draw the diagram for “is one more than”.

> [!exercise] ***Exercise***
>
> Consider a family of 
>
> - a mother, Sun,
> - a father, Albert,
> - a son, Ryan,
> - a daughter, Yuna.
>
> Consider the relation “is a parent of”.
>
> Draw the diagram representing this relation.  

# Predicate and Object Syntax

We will often use lower-case italic Latin letters as symbols for objects, like $a,b,\dots,z$.  If we need more symbols we will use indexed symbols, like $a_1,a_2,\dots,b_1,b_2,\dots,z_1,z_2,...$ as well.  

We will use upper-case italic Latin letters as symbols for predicates, also allowing for indices.  So the predicate symbols are $A, A_1, A_2,\dots,B,B_1,B_2,\dots,Z,Z_1,Z_2,\dots$

Therefore an expression like $C_{10}(x_{100})$ roughly means 

- $x_{100}$ is the name of some object.
- $C_{10}$ is the name of some predicate.
- $C_{10}(x_{100})$ is the proposition that $x_{100}$ has property $C_{10}$.

An example usage would be “the ball is red”, in which case we might choose the object symbol *b* for the ball, and the predicate symbol *R* for “is red”.  Then the proposition is symbolized as $R(b)$.

If the arity is greater than one, like in the example “3 is less than 2”, then we will have names for each constant.  Here we might use *b* for 2, and *c* for 3, and then *L* for “is less than”.  In that case, we would write $L(c,b)$ to express that 3 is less than 2.  

Although these are our usual conventions, note that the technical definition allows the symbols to be anything at all.  We only require that the set of object and predicate symbols be nonempty and not overlapping.  

> [!definition] ***Definition***
>
> Let $\text{Objs},\text{Preds}$ be two disjoint nonempty sets of symbols, not containing the symbols from $\text{Conns}$.  
>
> The elements of $\text{Objs}$ we call **object symbols** or **constant symbols**.  
>
> The elements of $\text{Preds}$ we call the **predicate symbols**.  
>
> To each $P\in \text{Preds}$, we associate it with a positive integer $n\ge 1$, which is its **arity**.  We denote this 
>
> $$
> \text{Arity}(P)=n
> $$
>
> Now let $P\in \text{Preds}$, and $\text{Arity}(P)=n$, and $a_1,\dots,a_n\in \text{Objs}$.  
>
> Then we call $P(a_1,\dots,a_n)$ an **atomic formula**.

> [!exercise] ***Exercise***
>
> Let $\text{Objs} = \{a,b\}$ and $\text{Preds}=\{P,Q\}$.  Let $\text{Arity}(P)=1$ and $\text{Arity}(Q)=2$.
>
> For each of the following strings, decide which are object symbols, which are predicate symbols, which are atomic formulas, and which are none of the above.
>
> 1. 1
> 2. one
> 3. *a*
> 4. *P*
> 5. $P\land Q$
> 6. *Pa*
> 7. $P(a)$
> 8. $Q(b)$
> 9. $Q(a,a)$
> 10. $Q(a,b)$

# Predicate and Object Semantics

To give meaning to these symbols, we will speak of a model, written as $\mathcal M$.  This time $\mathcal M$ does not immediately tell us which propositions are true and false—instead, $\mathcal M$ determines the meanings of object and predicate symbols.  From those meanings, we can then determine which propositions are true and false.

You should think of the main job of a model, as *interpreting* the symbols.  By analogy, imagine that you meet someone who speaks a strange and unfamiliar version of English.  They tell you “This gibblestrump is whifterstrook.”  Of course you have no idea what that means.  

But then later you find out that “gibblestrump” is just this person’s word for a cat.  And then you also find out that “whifterstrook” is an adjective which roughly translates to “a jerk”.  Now you know at the person was saying “This cat is a jerk.”  

That is essentially what an interpretation does: For a object symbol, it tells you which thing in the universe, the symbol refers to.  For a predicate symbol, it tells you which things in the universe, the symbol describes.

In any given setting, we will always need a universe of things that our statements can talk about.  The universe could be “the numbers 1 to 10” or “the people in this room right now” or “all physical objects in the universe”.  In any given setting, you choose your so-called “domain of discourse”.  

- The domain of discourse is usually determined by context, in natural languages.
    
    We will sometimes be explicit about just what our domain of discourse is.  When it’s obvious or unimportant, we won’t declare the universe explicitly.  
    
    In practice, in natural languages, the domain of discourse is almost always determined by context.  This usually causes no confusion, although it sometimes can.
    
    For the reader interested in linguistics, you may want to read up on this subject more.
    
    [https://en.wikipedia.org/wiki/Domain_of_discourse](https://en.wikipedia.org/wiki/Domain_of_discourse)

We regard the universe as a set, which we’ll call $\mathcal U$.  

If we have any constant symbol, say *a*, then the semantics tells us which element in *U* the symbol *a* refers to.  

For example, we could have $\mathcal U$ be the set of integers, so $\mathcal U = \Bbb Z$.  We could have the symbol *o* refer to the number $1\in \mathcal U$.  

The model could also determine that the predicate *P* refers to the set of all even numbers.  

From all of these components, we know that syntactically, we can form the proposition $P(o)$, which is supposed to represent the (false) proposition “one is an even number”.  How we define our semantics should agree with this.  

> [!definition] ***Definition***
>
> Let $\text{Objs},\text{Preds}$ be sets of object and predicate symbols respectively.
>
> Let $\mathcal U$ be any nonempty set, which we will refer to as the **universe**.  
>
> An **interpretation**, $\mathcal I$, assigns to each object symbol, an element of the universe.  If $a\in\text{Objs}$, then the assigned element is written $a^{\mathcal I}$.  Therefore 
>
> $$
> a^{\mathcal I} \in \mathcal U
> $$
>
> Let $P\in\text{Preds}$ and let $n = \text{Arity}(P)$.  Then
>
> $$
> P^{\mathcal I} \subseteq \mathcal U^n
> $$
>
> Now the pair $\mathcal M = (\mathcal U,\mathcal I)$ is called a **predicate model** (or just **model** for short).
>
> Let $P\in \text{Preds}$ and $n=\text{Arity}(P)$, and $a_1,\dots,a_n\in \mathcal U$.  
>
> Then 
>
> $$
> (P(a_1,...,a_n))^{\mathcal M} = \mathfrak{T} \ \ \text{ if } (a_1^{\mathcal I},...,a_n^{\mathcal I})\in P^{\mathcal I}
> $$
>
> and 
>
> $$
> (P(a_1,...,a_n))^{\mathcal M} = \mathfrak{F} \ \ \text{ if } (a_1^{\mathcal I},...,a_n^{\mathcal I})\notin P^{\mathcal I}
> $$

> [!note]- What is the difference between a superscript $\mathcal M$ and a superscript $\mathcal I$?
>
> Note that the job of the interpretation, $\mathcal I$, is *only* to track the association between symbols in the syntax and elements in the universe.  A superscript $\mathcal I$ only makes sense when it is written over a symbol that refers to the domain (objects and predicates).
>
> A superscript $\mathcal M$ is used to determine truth-values of formulas.  Therefore a superscript $\mathcal M$ only makes sense when it is written over a formula.

The picture below represents these ideas, focusing initially on a predicate with arity 1.  As a predicate with arity 1, this means that its interpretation $P^{\mathcal I}$ will just be a subset of the universe.  

The left side contains our basic syntax: constant symbols like *c*, and predicate symbols like *P*.  These are the symbols we use to express propositions.  

![image.png](Chapter%204%20Predicate%20Syntax%20and%20Semantics/image%201.png)

On the right is the basic semantic object, the universe, $\mathcal U$—the set of things our symbols “talk about”

The model, $\mathcal M=(\mathcal U,\mathcal I)$, is first a choice of which universe to pick.  Then it also requires choosing an interpretation, $\mathcal I$.  That means choosing which element, $u\in \mathcal U$, should be associated with *c*.  This is $c^{\mathcal I}=u$.  It also means choosing which subset, $X\subseteq \mathcal U$, is associated with *P*.  This is $P^{\mathcal I}=X$.

Let’s practice by applying these ideas to the earlier example.  In that example we said that the domain was the integers, so $\mathcal U = \Bbb Z$.  We said that we would use the symbol *o* to denote the number 1, so that means our interpretation assigns $o^{\mathcal I} = 1$.  We also said that $P^{\mathcal I}$ is the set of even numbers.  The model is then $\mathcal M=(\mathcal U,\mathcal I)$.  

To evaluate the proposition means that we find the value of $(P(o))^{\mathcal M}$.  The definition of this tells us to check whether $o^{\mathcal I}\in P^{\mathcal I}$.  But this is the same as checking whether 1 is in the set of even numbers.  

Since 1 is not in the set of even numbers, $o^{\mathcal I}\notin P^{\mathcal I}$, and therefore $(P(o))^{\mathcal M}=\mathfrak{F}$.  This is exactly the result that we intuitively know that we should obtain.  

---

We can also think of this in a Venn diagram: Given a constant *c* and predicate *P*, the model decides what the universe is, and what the interpretation is.  The interpretation, in turn, decides where *c* is in the universe, and which region *P* occupies.  

![image.png](Chapter%204%20Predicate%20Syntax%20and%20Semantics/image%202.png)

---

Let’s see a non-mathematical example.  Consider the proposition “The ball is red”, uttered in a room with a red ball.  

Let’s choose *b* to be the object symbol, and *R* to be the predicate symbol.  Therefore we represent “The ball is red,” by the formula $R(b)$.

At this point we have only established the syntax.  Let’s now “wire it up to” the semantics.  In this context, a reasonable choice of universe, $\mathcal U$, is the set of objects in the room where the proposition was uttered.  

A reasonable choice of $b^{\mathcal I}$ is the red ball that’s in the room.  

A reasonable choice of $R^{\mathcal I}$ is the set of all red objects in the room.  

With all of that specified, we now know $\mathcal I$, and $\mathcal U$, and therefore we know what the model, $\mathcal M$, is.

This is everything that we need to now evaluate $(R(b))^{\mathcal M}$.  Because $b^{\mathcal I}$ is a red ball in the room, it therefore is a red object in the room, and therefore $b^{\mathcal I}\in R^{\mathcal I}$.  So it follows, by definition, that $(R(b))^{\mathcal M}=\mathfrak{T}$.

> [!exercise] ***Exercise***
>
> Consider the sentence “The ball is red,” uttered in a room containing only a green ball.  
>
> Using the same syntax as above, now choose a reasonable model for this context.  
>
> Use this model to evaluate $(R(b))^{\mathcal M}$.

> [!exercise] ***Exercise***
>
> Consider the propositions “2 is a prime number” and “4 is a prime number”.  
>
> Choose a shared syntax and semantics for these propositions, and evaluate both formulas.  

> [!exercise] ***Exercise***
>
> Suppose that we have a syntax with one object symbol, *a*, and one predicate symbol, *P*.  
>
> Suppose that we consider only models with universe $\mathcal U=\{1\}$.
>
> There are two interpretations, $\mathcal I$, which are possible under these conditions.  Find both.  

> [!exercise] ***Exercise***
>
> Suppose that we have a syntax with two objects, one predicate, and the universe is $\mathcal U = \{1,2\}$.
>
> How many models are possible?

# Conjunction, Disjunction, Negation

Consider the set $A=\{1,2,3,4\}$ and the minimum $\min A = 1$.

The minimum is 1 because 

- 1 is a lower bound of *A*, and
- $1\in A$.

This is a *conjunction* of the two propositions, because both are required for 1 to be the minimum of *A*.  

In order to symbolically represent the first proposition, “1 is a lower bound of *A,*” we will make up a symbol to stand for this.  Say that we use $L(a)$.  Here *a* is a constant symbol, which is intended to represent the number $1\in \Bbb Z$. And *L* is a predicate symbol which I have chosen to represent the predicate “*x* is a lower bound of *A*”.

This means that, in the model I intend for this example, $\mathcal M=(\Bbb Z, \mathcal I)$.  That is to say, the universe is $\Bbb Z$.  And $\mathcal I$ is an association between the symbols *a* and *L*, with the elements of $\Bbb Z$.  More specifically, it is the association $a^{\mathcal I}=1$ and $P^{\mathcal I} = \{x\in \Bbb Z: x \text{ is a lower bound of } A\}$.

Next, we can represent the second proposition, “$1\in A$”, by the symbolic expression $M(a)$.  Here *M* is a symbol that I’m using for the predicate “$x\in A$”.  In the intended model, $M^{\mathcal I} = \{x\in \Bbb Z: x \in A\}$.  Of course, in this case, $M^{\mathcal I}=A$. 

Now, finally, we can symbolically express the conjunction of these two propositions by 

$$
L(a)\land M(a)
$$

Now that we have the expressive power of predicates and objects, we can connect the idea of conjunction, with the set-theoretic idea of intersection.

Here we discussed an example of conjunction at length.  The discussion of disjunction, negation, conditional, and biconditional are all *mutatis mutandis* the same.  

> [!definition] ***Definition***
>
> Let $\phi$ and $\psi$ be predicate formulas.  Then
>
> $$
> \phi\land\psi\\
> \phi\lor \psi\\
> \neg\phi\\
> \phi\to\psi\\
> \phi\leftrightarrow \psi
> $$
>
> are each a **predicate formula**.  
>
> Their **evaluations** are give by 
>
> $$
> \begin{aligned}
> (\phi\land\psi)^{\mathcal M}&=\phi^{\mathcal M}\curlywedge \psi^{\mathcal M}\\
> (\phi\lor\psi)^{\mathcal M}&=\phi^{\mathcal M}\curlyvee \psi^{\mathcal M} \\
> (\neg\phi)^{\mathcal M}&=\sim\phi^{\mathcal M} \\
> (\phi\to\psi)^{\mathcal M}&= \phi^{\mathcal M}\leadsto\psi^{\mathcal M}\\
> (\phi\leftrightarrow\psi)^{\mathcal M}&=\phi^{\mathcal M}\leftrightsquigarrow \psi^{\mathcal M}
> \end{aligned}
> $$

Notice that the rules governing the propositional connectives are exactly the same rules that we used when studying propositional logic.  A propositional atom is made up of predicate and object—but once those components are assembled, the atom is essentially the same as a propositional variable. 

The way that formulas are then combined with propositional connectives, is exactly the same as we saw previously for propositional formulas. And the way that these are evaluated in a model is exactly the same.

---

Let’s see an example.

Suppose that we have a syntax with object symbols *a* and *b*, and predicates *P* and *Q*.  Suppose we have a model, $\mathcal M = (\mathcal U,\mathcal I)$, with universe $\mathcal U = \Bbb Z$ and the interpretation is defined by 

$$
\begin{aligned}
 a^{\mathcal I} &= 0 \\
 b^{\mathcal I} &= 1 \\
 P^{\mathcal I} &= \{x\in\Bbb Z:x \text{ is even}\} \\
 Q^{\mathcal I} &= \{x\in\Bbb Z: x < 10\}
\end{aligned}
$$

Let’s then determine $((P(a)\land \neg Q(a))\to P(b))^{\mathcal M}$.  It should be clear that $(P(a))^{\mathcal M} = \mathfrak{T}$ and $(Q(a))^{\mathcal M} = \mathfrak{T}$, and $(P(b))^{\mathcal M} = \mathfrak{F}$.

$$
\begin{aligned}
 ((P(a)\land \neg Q(a))\to P(b))^{\mathcal M} &= (P(a)\land \neg Q(a))^{\mathcal M} \leadsto (P(b))^{\mathcal M} \\
 &= ((P(a))^{\mathcal M}\curlywedge (\neg Q(a))^{\mathcal M}) \leadsto \mathfrak{F} \\
 &= (\mathfrak{T}\curlywedge \sim (Q(a))^{\mathcal M})\leadsto \mathfrak{F} \\
 &= (\mathfrak{T}\curlywedge \sim \mathfrak{T})\leadsto \mathfrak{F} \\
 &= (\mathfrak{T}\curlywedge \mathfrak{F})\leadsto \mathfrak{F}\\
 &= \mathfrak{F}\leadsto \mathfrak{F}\\
 &= \mathfrak{T}
\end{aligned}
$$

> [!exercise] ***Exercise***
>
> Using the same syntax and semantics as above, find 
>
> $$
> ((Q(b)\leftrightarrow P(a))^{\mathcal M}
> $$

> [!exercise] ***Exercise***
>
> Choose a reasonable syntax and semantics to represent the statement “2 is even or 2 is odd”.

# Predicate Syntax and Semantics

The following now summarizes everything that we have said so far, and consolidates it into a single organized definition.  

But also notice that there is one small tedious issue.  We have agreed to use the notation $R(a,b)$, for example, when writing a binary relation for two objects.  This means that we now have to include in the alphabet of predicate logic, the comma!

Well that’s going to make it awkward when we have to list this symbol in a collection of other symbols.  Consider the set of symbols $\{(,),,\}$.  This is intended to have three symbols: The ‘(’ symbol, the ‘)’ symbol, and the comma, ‘,’.  But you can’t tell because the comma is already used as the separator in set notation.

Therefore when talking about the comma symbol as a part of the formal language, I will write it in bold.  Therefore, the set above will instead be written as $\{(,),\boldsymbol, \}$.  The bold comma is just a symbol in the set, while the un-bold commas are separators.  

> [!definition] ***Definition***
>
> *Syntax*
>
> Let $\text{Objs}, \text{Preds}$ be two nonempty disjoint sets of symbols which do not contain the elements of $\text{Conns}$. 
>
> We call $\text{Objs}$ the **set of object symbols** and $\text{Preds}$ the **set of predicate symbols**.
>
> Let $\text{Arity}(P)$ be a positive integer for each $P\in \text{Preds}$.
>
> Define 
>
> $$
> \Sigma = \text{Objs}\cup \text{Preds}\cup \text{Conns}\cup \{(,),\boldsymbol, \}
> $$
>
> The set $\Sigma$ is then called **an alphabet for a predicate language**.
>
> If $P\in \text{Preds}$ and $n = \text{Arity}(P)$, and $a_1,\dots,a_n\in\text{Objs}$,, then 
>
> $$
> P(a_1,...,a_n) 
> $$
>
> is called an **atomic formula**.  We denote the set of atomic formulas by $\text{Atom}$.
>
> Let $L\subseteq \Sigma^*$ be defined by the following recursion.
>
> - $\text{Atom}\subseteq L$.
> - For any $\phi,\psi\in L$ we have $(\neg\phi),(\phi\land\psi),(\phi\lor\psi),(\phi\to\psi),(\phi\leftrightarrow \psi)\in L$.
>
> Then *L* is called **a predicate language**.  Any element $\phi\in L$ is called a **predicate formula** (or just **formula** for short).
>
> *Semantics*
>
> Let $\mathcal U$ be any nonempty set.
>
> Let $\mathcal I$ be an assignment of elements in $\mathcal U$ to the elements in $\text{Objs}$.  If $a\in\text{Objs}$ then the element assigned to it is denoted $a^{\mathcal I}$.  
>
> For each $P\in\text{Preds}$, if $n=\text{Arity}$ then $\mathcal I$ assigns a *P* to a subset of $\mathcal U^n$.  That is to say, $P^{\mathcal I}\subseteq \mathcal U^n$.
>
> We define the pair $\mathcal M = (\mathcal U,\mathcal I)$ to be a **predicate model** (or just **model** for short).
>
> For any formula $\phi\in L$ we denote its **evaluation in $\mathcal M$** by $\phi^{\mathcal M}$.  We define this recursively by 
>
> - If $\phi\in\text{Atom}$ and $\phi=P(a_1,\dots,a_n)$ for some $P\in\text{Preds}$ and $n = \text{Arity}(P)$ and $a_1,\dots,a_n\in\text{Objs}$, then
>     
>     $$
>     \phi^{\mathcal M} = \mathfrak{T} \text{ \ \ if } (a_1^{\mathcal I},...,a_n^{\mathcal I})\in P^{\mathcal I}
>     $$
>     
>     and
>     
>     $$
>     \phi^{\mathcal M} = \mathfrak{F} \text{ \ \ if } (a_1^{\mathcal I},...,a_n^{\mathcal I})\notin P^{\mathcal I}
>     $$
>     
> - If there is a $\chi\in L$ such that $\phi=\neg\chi$ then
>     
>     $$
>     \phi^{\mathcal M}  = \ \sim \chi^{\mathcal M}
>     $$
>     
> - If there are $\chi,\psi\in L$
>     - If $\phi=\chi\land\psi$ then
>         
>         $$
>         \phi^{\mathcal M} = \chi^{\mathcal M}\curlywedge \psi^{\mathcal M}
>         $$
>         
>     - If $\phi=\chi\lor\psi$ then
>         
>         $$
>         \phi^{\mathcal M} = \chi^{\mathcal M}\curlyvee \psi^{\mathcal M}
>         $$
>         
>     - If $\phi=\chi\to\psi$ then
>         
>         $$
>         \phi^{\mathcal M} = \chi^{\mathcal M}\leadsto \psi^{\mathcal M}
>         $$
>         
>     - If $\phi=\chi\leftrightarrow\psi$ then
>         
>         $$
>         \phi^{\mathcal M} = \chi^{\mathcal M}\leftrightsquigarrow \psi^{\mathcal M}
>         $$