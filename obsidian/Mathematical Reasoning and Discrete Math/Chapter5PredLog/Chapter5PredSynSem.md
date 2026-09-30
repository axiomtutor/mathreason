---
title: "Chapter 5: Predicate Syntax and Semantics"
---
In the previous chapters we developed propositional logic, both its syntax and semantics.  

In this chapter we will discuss a new and more expressive system of logic, predicate logic.  Predicate logic uses the same propositional logic structure, but adds detail to the nature of propositions.  Rather than propositions being the fundamental components of a formula, propositions are themselves constructed from constituent predicates and objects.

# Predicates and Objects

As you consider many examples of propositions, you notice a pattern.  They are always made up of an “object” and a “predicate”.  Predicates and objects are linguistic notions that we will now explain. 

For example, in the sentence “The ball is red”, the object is “the ball”.  The predicate is “is red”.  

The object is the *thing* that the sentence is about.  

The predicate is the claim that we make about it.

> [!exercise] ***Exercise***
>
> In the proposition “Anya is tall” identify the predicate and object.

Now as you consider more propositions you may quickly recognize that many of them involve multiple objects at the same time.  For example “1 is less than 2” uses the objects (the numbers) 1 and 2.  

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
>
> If the arity is larger than *n* then we simply say that *P* is an ***n*-ary relation**.

> [!exercise] ***Exercise***
> Consider the proposition “The average of 5, 6, and 7, is 6.”
>
> Identify the objects, the predicate, and the arity of the predicate.

There is a helpful way to visualize a property (recall that a property is a predicate which applies to just one object at a time).  

Take for example, a party in which some people are math majors, some are philosophy majors, some are computer scientists.  We can represent this by a Venn diagram.
![[venn3way.png]]


There is an obvious connection between properties and sets.  Consider the property "being a math major". We can identify it with the set of all individuals who are math majors.  Therefore the upper-left circle in the Venn diagram represents the set of math majors, but we can think of it corresponding to the property of being a math major.

Let's get even more specific.  Let's suppose that the people at the party are named Adam, Brooke, Cecil, ..., Jelani.  

In our symbolic system of logic we'll want symbols for each of these individuals, and we tend to prefer lower-case Latin letters for "object symbols".  Therefore let's use the symbols $\text{Objs} = \{ \text{a,b,c,d,e,f,g,h,i,j} \}$.  

Keep in mind that the symbols are *a* through *j*, but the meanings of the symbols are the corresponding people.  

The correspondence between a symbol and its meaning is tracked by an "interpretation".  We will use the symbol $इ$ for an interpretation. It is most nearly pronounced as the English 'i' in the word "bit".  

$$
\begin{aligned}
 a^{इ} &= \text{Adam} \\
 b^{इ} &= \text{Brooke} \\
 c^{इ} &= \text{Cecil} \\
 d^{इ} &= \text{Dale} \\
 e^{इ} &= \text{Eudoxus} \\
 f^{इ} &= \text{Francis} \\
 g^{इ} &= \text{Gyanesh} \\
 h^{इ} &= \text{Hilary} \\
 i^{इ} &= \text{Irene} \\
 j^{इ} &= \text{Jelani} \\
\end{aligned}
$$

We choose the predicate names *M, P, C* to denote the math, philosophy, and computer science majors, respectively.  For example, if the math majors are Adam, Brooke, Cecil, Dale, and Eudoxus, then 

$$
M^{इ} = \{\text{Adam, Brooke, Cecil, Dale, Eudoxus}\}
$$

If the philosophy majors are Adam, Brooke, Cecil, Gyanesh, and Irene, then the denotation of *P* is

$$
P^{इ} = \{\text{Adam, Brooke, Cecil, Gyanesh, Irene}\}
$$

> [!exercise] ***Exercise***
>
> Make up a denotation of the symbol *C* so that it is consistent with the example we have described above.  That is to say, $C^TODO$ contains five people at the party, but shares exactly two members with $M^TODO$ and $P^TODO$, and there is only one person in all three $M^TODO,P^TODO,C^TODO$.  There is more than one correct way to do this.  

# Relation Diagrams

There is a nice graphical representation of binary relations.

Just to take a fresh example, consider the relation “less than” on the set of numbers {1, 2, 3, 4, 5}.  

If we use the symbol *L* to represent the relation, then $(1,2)\in L^{इ}$ because 1 < 2.  Also $(2, 5)\in L^{इ}$ because 2 < 5.  On the other hand $(2, 2)\notin L^{इ}$ and $(2,3)\notin L^{इ}$.

![image.png](Chapter%204%20Predicate%20Syntax%20and%20Semantics/image.png)

When drawing a node-and-arrow diagram for a relation, we put an arrow from *x* to *y* if the ordered pair $(x,y)$ is in the relation.  

In this example, since $(1,2)\in L^{इ}$ then there is an arrow pointing from 1 to 2.

> [!exercise] ***Exercise***
>
> Draw the diagram for the relation “less than or equal to” on the set {1, 2, 3, 4, 5}.
>
> Draw the diagram for “is one more than”.

> [!exercise] ***Exercise***
>
> Consider a family of 
>
> - a mother, named Sun,
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
- $C_{3}$ is the name of some predicate. (Because it is applied to a single object, we can infer that the arity of $C_{3}$ is 1.)
- $C_{3}(x_{100})$ is the proposition that $x_{100}$ has property $C_{3}$.

An example usage would be “the ball is red”, in which case we might choose the object symbol *b* for the ball, and the predicate symbol *R* for “is red”.  Then the proposition is symbolized as $R(b)$.

If the arity is greater than one, like in the example “3 is less than 2”, then we will have names for each constant.  Here we might use *b* for 2, and *c* for 3, and then *L* for “is less than”.  In that case, we would write $L(c,b)$ to express that 3 is less than 2.  

> [!definition] ***Definition***
> *Syntax*
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

To give meaning to these symbols, we will speak of a model, written as $म$.  This is the extension of the idea of a propositional logic model, to our new predicate logic.  However, instead of $म$ directly dictating the truth or falsehood of any proposition, it first decides the "interpretation" of the object and predicate symbols.  From the interpretation, we can then determine which propositions are true and false.

To understand what an "interpretation" is, imagine that you meet someone who speaks a strange and unfamiliar version of English.  They tell you “This gibblestrump is whifterstrook.”  Of course you have no idea what that means.  

But then later you find out that “gibblestrump” is just this person’s word for a cat.  And then you also find out that “whifterstrook” is an adjective which roughly translates to “rude”.  Now you know at the person was saying “This cat is rude.”  

That is essentially what an interpretation does: For an object symbol, it tells you which thing in the universe, the symbol refers to.  For a predicate symbol, it tells you which things in the universe, the symbol describes.  Choosing to use one particular interpretation, is a choice of how we will match symbols to their meaning.

In any given setting, we will always need a universe of things that our statements can talk about.  The universe could be “the numbers 1 to 10” or “the people in this room right now” or “all physical objects in the universe”.  Whatever we choose for this set or universe, we call it the “domain of discourse”.  

[!note]- The domain of discourse is usually determined by context, in natural languages.
    
    We will sometimes be explicit about just what our domain of discourse is.  When it’s obvious or unimportant, we won’t declare the universe explicitly.  
    
    In practice, in natural languages, the domain of discourse is almost always determined by context.  This usually causes no confusion.
    
    For the reader interested in related concepts in linguistics, you may want to read the following Wikipedia article.
    
    [https://en.wikipedia.org/wiki/Domain_of_discourse](https://en.wikipedia.org/wiki/Domain_of_discourse)

We regard the universe as a set, which we’ll call $उ$.  This is the last Devanagari symbol that you'll need to learn for this course!  It is most nearly pronounced as the English 'u' in "put".

If we have any constant symbol, say $a\in\text{Objs}$, then the semantics tells us which element in $उ$ the symbol *a* refers to.  

For example, we could have $उ$ be the set of integers, so $उ = \Bbb Z$.  We could have the symbol *o* refer to the number $1\in उ$.  If so then we write $o^TODO\in TODO$.

The model could also determine that the predicate *P* refers to the set of all even numbers.  

From all of these components, we know that syntactically, we can form the proposition $P(o)$, which is supposed to represent the (false) proposition “one is an even number”.  How we define our semantics should then tell us, (1) the denotation of $o$, (2) the denotation of $P$, and (3) a rule which explains why $P(o)$ is assigned the truth-value TODO.

In the definition below, TODO does the job of (1) and (2).  After that, TODO takes over and does the job of (3).

> [!definition] ***Definition***
> *Semantics*
>
> Let $\text{Objs},\text{Preds}$ be sets of object and predicate symbols respectively. Let $\text{Arity}$ be an arity function for $\text{Preds}$.
>
> Let $उ$ be any nonempty set, which we will refer to as the **universe**.  
>
> An **interpretation**, $इ$, assigns to each object symbol, an element of the universe.  If $a\in\text{Objs}$, then the assigned element is written $a^{इ}$.  Therefore 
>
> $$
> a^{इ} \in उ
> $$
> 
> The interpretation, TODO, also assigns to each predicate symbol a relation on TODO.  If $P\in\text{Preds}$ and $n=\text{Arity}(P)$, then the assigned subset of $TODO^n$ is written $P^TODO$.  Therefore 
> $$
> P^TODO \in TODO^n
> $$
>
> A **model**, TODO, assigns to each formula a truth-value. Let $P\in \text{Preds}$ and $n=\text{Arity}(P)$, and $a_1,\dots,a_n\in उ$.  
>
> Then 
>
> $$
> (P(a_1,...,a_n))^{म} = ट \ \ \text{ if } (a_1^{इ},...,a_n^{इ})\in P^{इ}
> $$
>
> and 
>
> $$
> (P(a_1,...,a_n))^{म} = फ \ \ \text{ if } (a_1^{इ},...,a_n^{इ})\notin P^{इ}
> $$

> [!note]- What is the difference between a superscript $म$ and a superscript $इ$?
>
> Note that the job of the interpretation, $इ$, is *only* to track the association between symbols in the syntax and meaning of symbols.  A superscript $इ$ only makes sense when it is written over an object or predicate symbol.
>
> The job of a model, TODO, is to determine truth-values of formulas, after TODO has determined the meanings of the symbols.  Therefore a superscript $म$ only makes sense when it is written over a formula.

The picture below represents these ideas for a property.  As a predicate with arity 1, this means that its interpretation $P^{इ}$ will just be a subset of the universe, TODO.  

The left side contains our basic syntax: constant symbols like *c*, and predicate symbols like *P*.  These are the symbols we use to express propositions.  

![image.png](Chapter%204%20Predicate%20Syntax%20and%20Semantics/image%201.png)

On the right is the basic semantic object, the universe, $उ$—the set of things our symbols “talk about”.

The model, $म=(उ,इ)$, is first a choice of which universe to pick.  Then it also requires choosing an interpretation, $इ$.  That means choosing which element, $u\in उ$, should be associated with each $c\in \text{Objs}$.  This is $c^{इ}=u$.  It also means choosing which subset, $X\subseteq उ$, is associated with *P*.  This is $P^{इ}=X$.

Let’s practice by applying these ideas to the earlier example.  In that example we said that the domain was the integers, so $उ = \Bbb Z$.  We said that we would use the symbol *o* to denote the number 1, so that means our interpretation assigns $o^{इ} = 1$.  We also said that $P^{इ}$ is the set of even numbers.  The model is then $म=(उ,इ)$, where these are the universe and interpretation thta we have now chosen.  

To evaluate the proposition means that we find the value of $(P(o))^{म}$.  The definition of this tells us to check whether $o^{इ}\in P^{इ}$.  But this is the same as checking whether 1 is in the set of even numbers.  

Since 1 is not in the set of even numbers, $o^{इ}\notin P^{इ}$, and therefore by the rule which determines truth-value, $(P(o))^{म}=फ$.  This is exactly the result that we intuitively know that we should obtain: "one is an even number" is false.  

# Propositional Connectives

Now that we have formulas, we can compose them together in exactly the same way that we did in propositional logic, using $\text{Conn}=\{\neg,\land,\lor,\to,\leftrightarrow\}$. 

> [!definition] ***Definition***
> *Syntax*
> 
> Let $\phi,\psi$ be any predicate formulas.  Then each of the following is also a predicate formula.  
> 
> * $\neg\phi$
> * $\phi\land\psi$
> * $\phi\lor\psi$
> * $\phi\to\psi$
> * $\phi\leftrightarrow \psi$
> 
> *Semantics*
>
> The semantics are exactly the same as they were for propositional logic.  To rehearse it, if TODO is any predicate model, and $\phi,\psi$ are any formulas then 
> 
> * $(\neg\phi)^TODO = \sim(\phi^TODO)$
> * $(\phi\land\psi)^TODO = (\phi^TODO)\curlywedge(\psi^TODO)$
> * $(\phi\lor\psi)^TODO = (\phi^TODO)\curlyvee (\psi^TODO)$
> * $(\phi\to\psi)^TODO = (\phi^TODO)\leadsto(\psi^TODO)$
> * $(\phi\leftrightarrow)^TODO = (\phi^TODO)\curlyleftrightarrow (\psi^TODO)$

To demonstrate, suppose that $\text{Objs}=\{a,b\}$, and $\text{Preds}=\{P,Q\}$, and $P$ has arity 2, $Q$ has arity 3.  On the semantic side, assume that $TODO = \{1,2,3\}$, and 

$$ a^TODO = 1, b^TODO = 2, c^TODO = 2 $$

> [!note]- Not every element gets a symbol.
> You may notice that in this example, there is an element of the domain (3) for which no object symbol denotes it.  That may seem odd, but note that nothing in our definitions says that this is forbidden.  
> 
> It is a bit silly, though.  Since nothing denotes 3, there is no way to talk about it, and therefore it is useless in this example.  
> 
> That is true for now.  In the next chapter, where we introduce quantifiers, this will change.  

and 

$$ P^TODO = \{ (1,2) \},\ Q^TODO = \{ (1,2,3), (3,1,2), (2,3,1) \} $$

Let's now evaluate, for example, $Q(a,b,c)\to \neg P(a,b)$.

$$
\begin{aligned}
 (Q(a,b,c)\to P(a,b))^TODO &= (Q(a,b,c))^TODO \leadsto (\neg P(a,b))^TODO \\
 &= (Q(a,b,c))^TODO \leadsto \sim (P(a,b))^TODO
\end{aligned}$$

Now we have to determine the values of $Q(a,b,c)^TODO$ and $P(a,b)^TODO$.  To do this we refer to the interpretation.  Note that $(a^TODO,b^TODO,c^TODO) = (1,2,2)\notin Q^TODO$.  Therefore $Q(a,b,c)^TODO = TODO$.  

And since $(a^TODO,b^TODO)=(1,2)\in P^TODO$ therefore $P(a,b)^TODO = TODO$.

Now we may infer that 

$$\begin{aligned}
 (Q(a,b,c)\to \neg P(a,b))^TODO &= TODO \leadsto \sim TODO \\
 & TODO \leadsto TODO \\
 & TODO 
\end{aligned}$$

> [!exercise] ***Exercise***
> Using the same syntax and semantics as the example above, evaluate $(P(a,a)\leftrightarrow Q(a,a,a))^TODO$.


































---

We can also think of this in a Venn diagram: Given a constant *c* and predicate *P*, the model decides what the universe is, and what the interpretation is.  The interpretation, in turn, decides where *c* is in the universe, and which region *P* occupies.  

![image.png](Chapter%204%20Predicate%20Syntax%20and%20Semantics/image%202.png)

---

Let’s see a non-mathematical example.  Consider the proposition “The ball is red”, uttered in a room with a red ball.  

Let’s choose *b* to be the object symbol, and *R* to be the predicate symbol.  Therefore we represent “The ball is red,” by the formula $R(b)$.

At this point we have only established the syntax.  Let’s now “wire it up to” the semantics.  In this context, a reasonable choice of universe, $उ$, is the set of objects in the room where the proposition was uttered.  

A reasonable choice of $b^{इ}$ is the red ball that’s in the room.  

A reasonable choice of $R^{इ}$ is the set of all red objects in the room.  

With all of that specified, we now know $इ$, and $उ$, and therefore we know what the model, $म$, is.

This is everything that we need to now evaluate $(R(b))^{म}$.  Because $b^{इ}$ is a red ball in the room, it therefore is a red object in the room, and therefore $b^{इ}\in R^{इ}$.  So it follows, by definition, that $(R(b))^{म}=ट$.

> [!exercise] ***Exercise***
>
> Consider the sentence “The ball is red,” uttered in a room containing only a green ball.  
>
> Using the same syntax as above, now choose a reasonable model for this context.  
>
> Use this model to evaluate $(R(b))^{म}$.

> [!exercise] ***Exercise***
>
> Consider the propositions “2 is a prime number” and “4 is a prime number”.  
>
> Choose a shared syntax and semantics for these propositions, and evaluate both formulas.  

> [!exercise] ***Exercise***
>
> Suppose that we have a syntax with one object symbol, *a*, and one predicate symbol, *P*.  
>
> Suppose that we consider only models with universe $उ=\{1\}$.
>
> There are two interpretations, $इ$, which are possible under these conditions.  Find both.  

> [!exercise] ***Exercise***
>
> Suppose that we have a syntax with two objects, one predicate, and the universe is $उ = \{1,2\}$.
>
> How many models are possible?

# Conjunction, Disjunction, Negation

Consider the set $A=\{1,2,3,4\}$ and the minimum $\min A = 1$.

The minimum is 1 because 

- 1 is a lower bound of *A*, and
- $1\in A$.

This is a *conjunction* of the two propositions, because both are required for 1 to be the minimum of *A*.  

In order to symbolically represent the first proposition, “1 is a lower bound of *A,*” we will make up a symbol to stand for this.  Say that we use $L(a)$.  Here *a* is a constant symbol, which is intended to represent the number $1\in \Bbb Z$. And *L* is a predicate symbol which I have chosen to represent the predicate “*x* is a lower bound of *A*”.

This means that, in the model I intend for this example, $म=(\Bbb Z, इ)$.  That is to say, the universe is $\Bbb Z$.  And $इ$ is an association between the symbols *a* and *L*, with the elements of $\Bbb Z$.  More specifically, it is the association $a^{इ}=1$ and $P^{इ} = \{x\in \Bbb Z: x \text{ is a lower bound of } A\}$.

Next, we can represent the second proposition, “$1\in A$”, by the symbolic expression $M(a)$.  Here *M* is a symbol that I’m using for the predicate “$x\in A$”.  In the intended model, $M^{इ} = \{x\in \Bbb Z: x \in A\}$.  Of course, in this case, $M^{इ}=A$. 

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
> $$\begin{aligned}
> \phi\land\psi\\
> \phi\lor \psi\\
> \neg\phi\\
> \phi\to\psi\\
> \phi\leftrightarrow \psi
> \end{aligned}$$
>
> are each a **predicate formula**.  
>
> Their **evaluations** are give by 
>
> $$
> \begin{aligned}
> (\phi\land\psi)^{म}&=\phi^{म}\curlywedge \psi^{म}\\
> (\phi\lor\psi)^{म}&=\phi^{म}\curlyvee \psi^{म} \\
> (\neg\phi)^{म}&=\sim\phi^{म} \\
> (\phi\to\psi)^{म}&= \phi^{म}\leadsto\psi^{म}\\
> (\phi\leftrightarrow\psi)^{म}&=\phi^{म}\leftrightsquigarrow \psi^{म}
> \end{aligned}
> $$

Notice that the rules governing the propositional connectives are exactly the same rules that we used when studying propositional logic.  A propositional atom is made up of predicate and object—but once those components are assembled, the atom is essentially the same as a propositional variable. 

The way that formulas are then combined with propositional connectives, is exactly the same as we saw previously for propositional formulas. And the way that these are evaluated in a model is exactly the same.

---

Let’s see an example.

Suppose that we have a syntax with object symbols *a* and *b*, and predicates *P* and *Q*.  Suppose we have a model, $म = (उ,इ)$, with universe $उ = \Bbb Z$ and the interpretation is defined by 

$$
\begin{aligned}
 a^{इ} &= 0 \\
 b^{इ} &= 1 \\
 P^{इ} &= \{x\in\Bbb Z:x \text{ is even}\} \\
 Q^{इ} &= \{x\in\Bbb Z: x < 10\}
\end{aligned}
$$

Let’s then determine $((P(a)\land \neg Q(a))\to P(b))^{म}$.  It should be clear that $(P(a))^{म} = ट$ and $(Q(a))^{म} = ट$, and $(P(b))^{म} = फ$.

$$
\begin{aligned}
 ((P(a)\land \neg Q(a))\to P(b))^{म} &= (P(a)\land \neg Q(a))^{म} \leadsto (P(b))^{म} \\
 &= ((P(a))^{म}\curlywedge (\neg Q(a))^{म}) \leadsto फ \\
 &= (ट\curlywedge \sim (Q(a))^{म})\leadsto फ \\
 &= (ट\curlywedge \sim ट)\leadsto फ \\
 &= (ट\curlywedge फ)\leadsto फ\\
 &= फ\leadsto फ\\
 &= ट
\end{aligned}
$$

> [!exercise] ***Exercise***
>
> Using the same syntax and semantics as above, find 
>
> $$
> ((Q(b)\leftrightarrow P(a))^{म}
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
> Let $उ$ be any nonempty set.
>
> Let $इ$ be an assignment of elements in $उ$ to the elements in $\text{Objs}$.  If $a\in\text{Objs}$ then the element assigned to it is denoted $a^{इ}$.  
>>>>>>> origin/main
>
> For each $P\in\text{Preds}$, if $n=\text{Arity}$ then $इ$ assigns a *P* to a subset of $उ^n$.  That is to say, $P^{इ}\subseteq उ^n$.
>
> We define the pair $म = (उ,इ)$ to be a **predicate model** (or just **model** for short).
>
> For any formula $\phi\in L$ we denote its **evaluation in $म$** by $\phi^{म}$.  We define this recursively by 
>
> - If $\phi\in\text{Atom}$ and $\phi=P(a_1,\dots,a_n)$ for some $P\in\text{Preds}$ and $n = \text{Arity}(P)$ and $a_1,\dots,a_n\in\text{Objs}$, then
>     
>     $$
>     \phi^{म} = ट \text{ \ \ if } (a_1^{इ},...,a_n^{इ})\in P^{इ}
>     $$
>     
>     and
>     
>     $$
>     \phi^{म} = फ \text{ \ \ if } (a_1^{इ},...,a_n^{इ})\notin P^{इ}
>     $$
>     
> - If there is a $\chi\in L$ such that $\phi=\neg\chi$ then
>     
>     $$
>     \phi^{म}  = \ \sim \chi^{म}
>     $$
>     
> - If there are $\chi,\psi\in L$
>     - If $\phi=\chi\land\psi$ then
>         
>         $$
>         \phi^{म} = \chi^{म}\curlywedge \psi^{म}
>         $$
>         
>     - If $\phi=\chi\lor\psi$ then
>         
>         $$
>         \phi^{म} = \chi^{म}\curlyvee \psi^{म}
>         $$
>         
>     - If $\phi=\chi\to\psi$ then
>         
>         $$
>         \phi^{म} = \chi^{म}\leadsto \psi^{म}
>         $$
>         
>     - If $\phi=\chi\leftrightarrow\psi$ then
>         
>         $$
>         \phi^{म} = \chi^{म}\leftrightsquigarrow \psi^{म}
>         $$
