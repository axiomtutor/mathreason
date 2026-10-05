---
title: "Chapter 5: Predicate Syntax and Semantics"
---
In the previous chapters, we developed propositional logic, both its syntax and semantics.  

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
> If the predicate ${\tt P}$ asserts a claim about *n* objects, then ${\tt P}$ is said to have **arity** *n*.
>
> If the arity of a predicate is 1, then we call it a **property**.  
>
> If the arity of a predicate is 2, then we call it a **binary relation**.
>
> If the arity of a predicate is 3, then we call it a **ternary relation**.
>
> If the arity is larger than *n* then we simply say that ${\tt P}$ is an ***n*-ary relation**.

> [!exercise] ***Exercise***
> Consider the proposition “The average of 5, 6, and 7, is 6.”
>
> Identify the objects, the predicate, and the arity of the predicate.

There is a helpful way to visualize a property (recall that a property is a predicate which applies to just one object at a time).  

Take for example, a party in which some people are math majors, some are philosophy majors, some are computer scientists.  We can represent this by a Venn diagram.
![[venn3way.png]]


There is an obvious connection between properties and sets.  Consider the property "being a math major". We can identify it with the set of all individuals who are math majors.  Therefore the upper-left circle in the Venn diagram represents the set of math majors, but we can think of it corresponding to the property of being a math major.

Let's get even more specific.  Let's suppose that the people at the party are named Adam, Brooke, Cecil, ..., Jelani.  

In our symbolic system of logic we'll want symbols for each of these individuals, and we tend to prefer lower-case Latin letters for "constant symbols".  Therefore let's use the symbols $\text{Consts} = \{{\tt a},{\tt b},{\tt c},{\tt d},{\tt e},{\tt f},{\tt g},{\tt h},{\tt i},{\tt j}\}$.  

Keep in mind that the symbols are ${\tt a}$ through ${\tt j}$, but the meanings of the symbols are the corresponding people.  

The correspondence between a symbol and its meaning is tracked by an "interpretation".  We will use the symbol $इ$ for an interpretation. It is most nearly pronounced as the English 'i' in the word "bit".  

$$
\begin{aligned}
 {\tt a}^{इ} &= \text{Adam} \\
 {\tt b}^{इ} &= \text{Brooke} \\
 {\tt c}^{इ} &= \text{Cecil} \\
 {\tt d}^{इ} &= \text{Dale} \\
 {\tt e}^{इ} &= \text{Eudoxus} \\
 {\tt f}^{इ} &= \text{Francis} \\
 {\tt g}^{इ} &= \text{Gyanesh} \\
 {\tt h}^{इ} &= \text{Hilary} \\
 {\tt i}^{इ} &= \text{Irene} \\
 {\tt j}^{इ} &= \text{Jelani} \\
\end{aligned}
$$

We choose the predicate names ${\tt M}, {\tt P}, {\tt C}$ to denote the math, philosophy, and computer science majors, respectively.  For example, if the math majors are Adam, Brooke, Cecil, Dale, and Eudoxus, then 

$$
{\tt M}^{इ} = \{\text{Adam, Brooke, Cecil, Dale, Eudoxus}\}
$$

If the philosophy majors are Adam, Brooke, Cecil, Gyanesh, and Irene, then the denotation of ${\tt P}$ is

$$
{\tt P}^{इ} = \{\text{Adam, Brooke, Cecil, Gyanesh, Irene}\}
$$

> [!exercise] ***Exercise***
>
> Make up a denotation of the symbol ${\tt C}$ so that it is consistent with the example we have described above.  That is to say, ${\tt C}^इ$ contains five people at the party, but shares exactly two members with ${\tt M}^इ$ and ${\tt P}^इ$, and there is only one person in all three ${\tt M}^इ,{\tt P}^इ,{\tt C}^इ$.  There is more than one correct way to do this.  

# Relation Diagrams

There is a nice graphical representation of binary relations.

Just to take a fresh example, consider the relation “less than” on the set of numbers {1, 2, 3, 4, 5}.  

If we use the symbol ${\tt L}$ to represent the relation, then $(1,2)\in L^{इ}$ because 1 < 2.  Also $(2, 5)\in {\tt L}^{इ}$ because 2 < 5.  On the other hand $(2, 2)\notin {\tt L}^{इ}$ and $(2,3)\notin {\tt L}^{इ}$.

![[lessthanrel.png]]

When drawing a node-and-arrow diagram for a relation, we put an arrow from $x$ to $y$ if the ordered pair $(x,y)$ is in the relation.  

In this example, since $(1,2)\in {\tt L}^{इ}$ then there is an arrow pointing from 1 to 2.

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

We will often use lower-case italic Latin letters as symbols for objects, like ${\tt a},{\tt b},\dots,{\tt z}$.  If we need more symbols we will use indexed symbols, like ${\tt a_1},{\tt a_2},\dots,{\tt b_1},{\tt b_2},\dots,{\tt z_1},{\tt z_2},...$ as well.  

We will use upper-case italic Latin letters as symbols for predicates, also allowing for indices.  So the predicate symbols are ${\tt A}, {\tt A_1}, {\tt A_2},\dots,{\tt B},{\tt B_1},{\tt B_2},\dots,{\tt Z},{\tt Z_1},{\tt Z_2},\dots$

Therefore an expression like ${\tt C_{3}}({\tt x_{100}})$ roughly means 

- ${\tt x_{100}}$ is the name of some object.
- ${\tt C_{3}}$ is the name of some predicate. (Because it is applied to a single object, we can infer that the arity of ${\tt C_{3}}$ is 1.)
- ${\tt C_{3}}({\tt x_{100}})$ is the proposition that ${\tt x_{100}}$ has property ${\tt C_{3}}$.

An example usage would be “the ball is red”, in which case we might choose the constant symbol ${\tt b}$ for the ball, and the predicate symbol ${\tt R}$ for “is red”.  Then the proposition is symbolized as ${\tt R}({\tt b})$.

If the arity is greater than one, like in the example “3 is less than 2”, then we will have names for each constant.  Here we might use ${\tt b}$ for 2, and ${\tt c}$ for 3, and then ${\tt L}$ for “is less than”.  In that case, we would write ${\tt L}({\tt c},{\tt b})$ to express that 3 is less than 2.  

> [!definition] ***Definition***
> *Syntax*
>
> Let $\text{Consts},\text{Preds}$ be two disjoint nonempty sets of symbols, not containing the symbols from $\text{Conns}$.  
>
> The elements of $\text{Consts}$ we call **constant symbols**.  
>
> The elements of $\text{Preds}$ we call the **predicate symbols**.  
>
> To each ${\tt P}\in \text{Preds}$, we associate it with a positive integer $n\ge 1$, which is its **arity**.  We denote this 
>
> $$
> \text{Arity}({\tt P})=n
> $$
>
> Now let ${\tt P}\in \text{Preds}$, and $\text{Arity}({\tt P})=n$, and ${\tt a_1},\dots,{\tt a_n}\in \text{Consts}$.  
>
> Then we call ${\tt P}({\tt a_1},\dots,{\tt a_n})$ an **atomic formula**.

> [!exercise] ***Exercise***
>
> Let $\text{Consts} = \{{\tt a},{\tt b}\}$ and $\text{Preds}=\{{\tt P},{\tt Q}\}$.  Let $\text{Arity}({\tt P})=1$ and $\text{Arity}({\tt Q})=2$.
>
> For each of the following strings, decide which are constant symbols, which are predicate symbols, which are atomic formulas, and which are none of the above.
>
> 1. 1
> 2. one
> 3. ${\tt a}$
> 4. ${\tt P}$
> 5. ${\tt P}{\tt \land} {\tt Q}$
> 6. *Pa*
> 7. ${\tt P}({\tt a})$
> 8. ${\tt Q}({\tt b})$
> 9. ${\tt Q}({\tt a},{\tt a})$
> 10. ${\tt Q}({\tt a},{\tt b})$

# Predicate and Object Semantics

To give meaning to these symbols, we will speak of a model, written as $म$.  You guessed it!  This is like the notion of a model in propositional logic.  

However, in propositional logic, $म$ directly dictates the truth or falsehood of any propositional variable.  In predicate logic that would make no sense--it would not use the information about the predicate and the object.  

So a predicate logic model must first decide the "interpretation" of the object and predicate symbols.  From the interpretation, we can then determine which propositions are true and false.

To understand what an "interpretation" is, imagine that you meet someone who speaks a strange and unfamiliar version of English.  They tell you “This gibblestrump is whifterstrook.”  Of course you have no idea what that means.  (That is assuming you are not British.  This example sentence is exactly how British people sound to my American ear.)

But then later you find out that “gibblestrump” is just this person’s word for a cat.  And then you also find out that “whifterstrook” is an adjective which roughly translates to “rude”.  Now you know at the person was saying “This cat is rude.”  

That is essentially what an interpretation does: For a constant symbol, it tells you which thing in the universe, the symbol refers to.  For a predicate symbol, it tells you which things in the universe, the symbol describes.  Choosing to use one particular interpretation, is a choice of how we will match symbols to their meaning.

In any given setting, we will always need a universe of things that our statements can talk about.  The universe could be “the numbers 1 to 10” or “the people in this room right now” or “all physical objects in the universe”.  Whatever we choose for this set or universe, we call it the “domain of discourse”.  

[!note]- The domain of discourse is usually determined by context, in natural languages.
    
    We will sometimes be explicit about just what our domain of discourse is.  When it’s obvious or unimportant, we won’t declare the universe explicitly.  
    
    In practice, in natural languages, the domain of discourse is almost always determined by context.  This usually causes no confusion.
    
    For the reader interested in related concepts in linguistics, you may want to read the following Wikipedia article.
    
    [https://en.wikipedia.org/wiki/Domain_of_discourse](https://en.wikipedia.org/wiki/Domain_of_discourse)

We regard the universe as a set, which we’ll call $उ$.  This is the last Devanagari symbol that you'll need to learn for this course!  It is most nearly pronounced as the English 'u' in "put".

If we have any constant symbol, say $a\in\text{Consts}$, then the semantics tells us which element in $उ$ the symbol ${\tt a}$ refers to.  

For example, we could have $उ$ be the set of integers, so $उ = \Bbb Z$.  We could have the symbol ${\tt o}$ refer to the number $1\in उ$.  If so then we write $o^इ\in उ$.

The model could also determine that the predicate ${\tt P}$ refers to the set of all even numbers.  

From all of these components, we know that syntactically, we can form the proposition ${\tt P}({\tt o})$, which is supposed to represent the (false) proposition “one is an even number”.  How we define our semantics should then tell us, (1) the denotation of ${\tt o}$, (2) the denotation of ${\tt P}$, and (3) a rule which explains why ${\tt P}({\tt o})$ is assigned the truth-value फ.

In the definition below, इ does the job of (1) and (2).  After that, म takes over and does the job of (3).

> [!definition] ***Definition***
> *Semantics*
>
> Let $\text{Consts},\text{Preds}$ be sets of constant and predicate symbols respectively. Let $\text{Arity}$ be an arity function for $\text{Preds}$.
>
> Let $उ$ be any nonempty set, which we will refer to as the **universe**.  
>
> An **interpretation**, $इ$, assigns to each constant symbol, an element of the universe.  If $a\in\text{Consts}$, then the assigned element is written ${\tt a}^{इ}$.  Therefore 
>
> $$
> {\tt a}^{इ} \in उ
> $$
> 
> The interpretation, इ, also assigns to each predicate symbol a relation on उ.  If ${\tt P}\in\text{Preds}$ and $n=\text{Arity}({\tt P})$, then the assigned subset of $उ^n$ is written ${\tt P}^इ$.  Therefore 
> $$
> {\tt P}^इ \in उ^n
> $$
>
> A **model**, म, assigns to each formula a truth-value. Let ${\tt P}\in \text{Preds}$ and $n=\text{Arity}({\tt P})$, and $a_1,\dots,a_n\in उ$.  
>
> Then 
>
> $$
> ({\tt P}({\tt a_1},...,{\tt a_n}))^{म} = ट \ \ \text{ if } ({\tt a_1}^{इ},...,{\tt a_n}^{इ})\in {\tt P}^{इ}
> $$
>
> and 
>
> $$
> ({\tt P}({\tt a_1},...,{\tt a_n}))^{म} = फ \ \ \text{ if } ({\tt a_1}^{इ},...,{\tt a_n}^{इ})\notin {\tt P}^{इ}
> $$

> [!note]- What is the difference between a superscript $म$ and a superscript $इ$?
>
> Note that the job of the interpretation, $इ$, is *only* to track the association between symbols in the syntax and meaning of symbols.  A superscript $इ$ only makes sense when it is written over an object or predicate symbol.
>
> The job of a model, म, is to determine truth-values of formulas, after इ has determined the meanings of the symbols.  Therefore a superscript $म$ only makes sense when it is written over a formula.

The picture below represents these ideas for a property.  As a predicate with arity 1, this means that its interpretation ${\tt P}^{इ}$ will just be a subset of the universe, उ.  

The left side contains our basic syntax: constant symbols like ${\tt c}$, and predicate symbols like ${\tt P}$.  These are the symbols we use to express propositions.  

![image.png](Chapter%204%20Predicate%20Syntax%20and%20Semantics/image%201.png)

On the right is the basic semantic object, the universe, $उ$—the set of things our symbols “talk about”.

The model, $म=(उ,इ)$, is first a choice of which universe to pick.  Then it also requires choosing an interpretation, $इ$.  That means choosing which element, $u\in उ$, should be associated with each $c\in \text{Consts}$.  This is ${\tt c}^{इ}=u$.  It also means choosing which subset, $X\subseteq उ$, is associated with ${\tt P}$.  This is ${\tt P}^{इ}=X$.

Let’s practice by applying these ideas to the earlier example.  In that example we said that the domain was the integers, so $उ = \Bbb Z$.  We said that we would use the symbol ${\tt o}$ to denote the number 1, so that means our interpretation assigns ${\tt o}^{इ} = 1$.  We also said that ${\tt P}^{इ}$ is the set of even numbers.  The model is then $म=(उ,इ)$, where these are the universe and interpretation thta we have now chosen.  

To evaluate the proposition means that we find the value of $({\tt P}({\tt o}))^{म}$.  The definition of this tells us to check whether $o^{इ}\in {\tt P}^{इ}$.  But this is the same as checking whether 1 is in the set of even numbers.  

Since 1 is not in the set of even numbers, ${\tt o}^{इ}\notin {\tt P}^{इ}$, and therefore by the rule which determines truth-value, $({\tt P}(o))^{म}=फ$.  This is exactly the result that we intuitively know that we should obtain: "one is an even number" is false.  

# Propositional Connectives

Now that we have formulas, we can compose them together in exactly the same way that we did in propositional logic, using $\text{Conn}=\{{\tt \neg},{\tt \land},{\tt \lor},{\tt \to},{\tt \leftrightarrow}\}$. 

> [!definition] ***Definition***
> *Syntax*
> 
> Let ${\tt \phi},{\tt \psi}$ be any predicate formulas.  Then each of the following is also a predicate formula.  
> 
> * ${\tt \neg}{\tt \phi}$
> * ${\tt \phi}{\tt \land}{\tt \psi}$
> * ${\tt \phi}{\tt \lor}{\tt \psi}$
> * ${\tt \phi}{\tt \to}{\tt \psi}$
> * ${\tt \phi}{\tt \leftrightarrow} {\tt \psi}$
> 
> *Semantics*
>
> The semantics are exactly the same as they were for propositional logic.  To rehearse it, if म is any predicate model, and ${\tt \phi},{\tt \psi}$ are any formulas then 
> 
> * $({\tt \neg}{\tt \phi})^म = \sim({\tt \phi}^म)$
> * $({\tt \phi}{\tt \land}{\tt \psi})^म = ({\tt \phi}^म)\curlywedge({\tt \psi}^म)$
> * $({\tt \phi}{\tt \lor}{\tt \psi})^म = ({\tt \phi}^म)\curlyvee ({\tt \psi}^म)$
> * $({\tt \phi}{\tt \to}{\tt \psi})^म = ({\tt \phi}^म)\leadsto({\tt \psi}^म)$
> * $({\tt \phi}{\tt \leftrightarrow})^म = ({\tt \phi}^म)\curlyleftrightarrow ({\tt \psi}^म)$

To demonstrate, suppose that $\text{Consts}=\{{\tt a},{\tt b}\}$, and $\text{Preds}=\{{\tt P},{\tt Q}\}$, and ${\tt P}$ has arity 2, ${\tt Q}$ has arity 3.  On the semantic side, assume that $उ = \{1,2,3\}$, and 

$$ {\tt a}^इ = 1, {\tt b}^इ = 2, {\tt c}^इ = 2 $$

> [!note]- Not every element gets a symbol.
> You may notice that in this example, there is an element of the domain (3) for which no constant symbol denotes it.  That may seem odd, but note that nothing in our definitions says that this is forbidden.  
> 
> It is a bit silly, though.  Since nothing denotes 3, there is no way to talk about it, and therefore it is useless in this example.  
> 
> That is true for now.  In the next chapter, where we introduce quantifiers, this will change.  

and 

$$ {\tt P}^इ = \{ (1,2) \},\ {\tt Q}^इ = \{ (1,2,3), (3,1,2), (2,3,1) \} $$

Let's now evaluate, for example, ${\tt Q}({\tt a},{\tt b},{\tt c}){\tt \to} {\tt \neg} {\tt P}({\tt a},{\tt b})$.

$$
\begin{aligned}
 ({\tt Q}({\tt a},{\tt b},{\tt c}){\tt \to} {\tt P}({\tt a},{\tt b}))^म &= ({\tt Q}({\tt a},{\tt b},{\tt c}))^म \leadsto ({\tt \neg} {\tt P}({\tt a},{\tt b}))^म \\
 &= ({\tt Q}({\tt a},{\tt b},{\tt c}))^म \leadsto \sim ({\tt P}({\tt a},{\tt b}))^म
\end{aligned}$$

Now we have to determine the values of ${\tt Q}({\tt a},{\tt b},{\tt c})^म$ and ${\tt P}({\tt a},{\tt b})^म$.  To do this we refer to the interpretation.  Note that $({\tt a}^इ,{\tt b}^इ,{\tt c}^इ) = (1,2,2)\notin {\tt Q}^इ$.  Therefore ${\tt Q}({\tt a},{\tt b},{\tt c})^म = फ$.  

And since $({\tt a}^इ,{\tt b}^इ)=(1,2)\in {\tt P}^इ$ therefore ${\tt P}({\tt a},{\tt b})^म = ट$.

Now we may infer that 

$$\begin{aligned}
 ({\tt Q}({\tt a},{\tt b},{\tt c}){\tt \to} {\tt \neg} {\tt P}({\tt a},{\tt b}))^म &= फ \leadsto \sim ट \\
 & फ \leadsto फ \\
 & ठ 
\end{aligned}$$

> [!exercise] ***Exercise***
> Using the same syntax and semantics as the example above, evaluate $({\tt P}({\tt a},{\tt a}){\tt \leftrightarrow} {\tt Q}({\tt a},{\tt a},{\tt a}))^म$.


































---

We can also think of this in a Venn diagram: Given a constant ${\tt c}$ and predicate ${\tt P}$, the model decides what the universe is, and what the interpretation is.  The interpretation, in turn, decides where ${\tt c}$ is in the universe, and which region ${\tt P}$ occupies.  

![image.png](Chapter%204%20Predicate%20Syntax%20and%20Semantics/image%202.png)

---

Let’s see a non-mathematical example.  Consider the proposition “The ball is red”, uttered in a room with a red ball.  

Let’s choose ${\tt b}$ to be the constant symbol, and ${\tt R}$ to be the predicate symbol.  Therefore we represent “The ball is red,” by the formula ${\tt R}({\tt b})$.

At this point we have only established the syntax.  Let’s now “wire it up to” the semantics.  In this context, a reasonable choice of universe, $उ$, is the set of objects in the room where the proposition was uttered.  

A reasonable choice of ${\tt b}^{इ}$ is the red ball that’s in the room.  

A reasonable choice of ${\tt R}^{इ}$ is the set of all red objects in the room.  

With all of that specified, we now know $इ$, and $उ$, and therefore we know what the model, $म$, is.

This is everything that we need to now evaluate $({\tt R}({\tt b}))^{म}$.  Because ${\tt b}^{इ}$ is a red ball in the room, it therefore is a red object in the room, and therefore ${\tt b}^{इ}\in {\tt R}^{इ}$.  So it follows, by definition, that $({\tt R}({\tt b}))^{म}=ट$.

> [!exercise] ***Exercise***
>
> Consider the sentence “The ball is red,” uttered in a room containing only a green ball.  
>
> Using the same syntax as above, now choose a reasonable model for this context.  
>
> Use this model to evaluate $({\tt R}({\tt b}))^{म}$.

> [!exercise] ***Exercise***
>
> Consider the propositions “2 is a prime number” and “4 is a prime number”.  
>
> Choose a shared syntax and semantics for these propositions, and evaluate both formulas.  

> [!exercise] ***Exercise***
>
> Suppose that we have a syntax with one constant symbol, ${\tt a}$, and one predicate symbol, ${\tt P}$.  
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

- 1 is a lower bound of ${\tt A}$, and
- $1\in A$.

This is a *conjunction* of the two propositions, because both are required for 1 to be the minimum of ${\tt A}$.  

In order to symbolically represent the first proposition, “1 is a lower bound of *A,*” we will make up a symbol to stand for this.  Say that we use ${\tt L}({\tt a})$.  Here ${\tt a}$ is a constant symbol, which is intended to represent the number $1\in \Bbb Z$. And ${\tt L}$ is a predicate symbol which I have chosen to represent the predicate “${\tt x}$ is a lower bound of ${\tt A}$”.

This means that, in the model I intend for this example, $म=(\Bbb Z, इ)$.  That is to say, the universe is $\Bbb Z$.  And $इ$ is an association between the symbols ${\tt a}$ and ${\tt L}$, with the elements of $\Bbb Z$.  More specifically, it is the association ${\tt a}^{इ}=1$ and ${\tt P}^{इ} = \{x\in \Bbb Z: x \text{ is a lower bound of } A\}$.

Next, we can represent the second proposition, “$1\in A$”, by the symbolic expression ${\tt M}({\tt a})$.  Here ${\tt M}$ is a symbol that I’m using for the predicate “$x\in A$”.  In the intended model, ${\tt M}^{इ} = \{x\in \Bbb Z: x \in A\}$.  Of course, in this case, ${\tt M}^{इ}=A$. 

Now, finally, we can symbolically express the conjunction of these two propositions by 

$$
{\tt L}({\tt a}){\tt \land} {\tt M}({\tt a})
$$

Now that we have the expressive power of predicates and objects, we can connect the idea of conjunction, with the set-theoretic idea of intersection.

Here we discussed an example of conjunction at length.  The discussion of disjunction, negation, conditional, and biconditional are all *mutatis mutandis* the same.  

> [!definition] ***Definition***
>
> Let ${\tt \phi}$ and ${\tt \psi}$ be predicate formulas.  Then
>
> $$\begin{aligned}
> {\tt \phi}{\tt \land}{\tt \psi}\\
> {\tt \phi}{\tt \lor} {\tt \psi}\\
> {\tt \neg}{\tt \phi}\\
> {\tt \phi}{\tt \to}{\tt \psi}\\
> {\tt \phi}{\tt \leftrightarrow} {\tt \psi}
> \end{aligned}$$
>
> are each a **predicate formula**.  
>
> Their **evaluations** are give by 
>
> $$
> \begin{aligned}
> ({\tt \phi}{\tt \land}{\tt \psi})^{म}&={\tt \phi}^{म}\curlywedge {\tt \psi}^{म}\\
> ({\tt \phi}{\tt \lor}{\tt \psi})^{म}&={\tt \phi}^{म}\curlyvee {\tt \psi}^{म} \\
> ({\tt \neg}{\tt \phi})^{म}&=\sim{\tt \phi}^{म} \\
> ({\tt \phi}{\tt \to}{\tt \psi})^{म}&= {\tt \phi}^{म}\leadsto{\tt \psi}^{म}\\
> ({\tt \phi}{\tt \leftrightarrow}{\tt \psi})^{म}&={\tt \phi}^{म}\leftrightsquigarrow {\tt \psi}^{म}
> \end{aligned}
> $$

Notice that the rules governing the propositional connectives are exactly the same rules that we used when studying propositional logic.  A propositional atom is made up of predicate and object—but once those components are assembled, the atom is essentially the same as a propositional variable. 

The way that formulas are then combined with propositional connectives, is exactly the same as we saw previously for propositional formulas. And the way that these are evaluated in a model is exactly the same.

---

Let’s see an example.

Suppose that we have a syntax with constant symbols ${\tt a}$ and ${\tt b}$, and predicates ${\tt P}$ and ${\tt Q}$.  Suppose we have a model, $म = (उ,इ)$, with universe $उ = \Bbb Z$ and the interpretation is defined by 

$$
\begin{aligned}
 {\tt a}^{इ} &= 0 \\
 {\tt b}^{इ} &= 1 \\
 {\tt P}^{इ} &= \{{\tt x}\in\Bbb Z:{\tt x} \text{ is even}\} \\
 {\tt Q}^{इ} &= \{{\tt x}\in\Bbb Z: {\tt x} < 10\}
\end{aligned}
$$

Let’s then determine $(({\tt P}({\tt a}){\tt \land} {\tt \neg} {\tt Q}({\tt a})){\tt \to} {\tt P}({\tt b}))^{म}$.  It should be clear that $({\tt P}({\tt a}))^{म} = ट$ and $({\tt Q}({\tt a}))^{म} = ट$, and $({\tt P}({\tt b}))^{म} = फ$.

$$
\begin{aligned}
 (({\tt P}({\tt a}){\tt \land} {\tt \neg} {\tt Q}({\tt a})){\tt \to} {\tt P}({\tt b}))^{म} &= ({\tt P}({\tt a}){\tt \land} {\tt \neg} {\tt Q}({\tt a}))^{म} \leadsto ({\tt P}({\tt b}))^{म} \\
 &= (({\tt P}({\tt a}))^{म}\curlywedge ({\tt \neg} {\tt Q}({\tt a}))^{म}) \leadsto फ \\
 &= (ट\curlywedge \sim ({\tt Q}({\tt a}))^{म})\leadsto फ \\
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
> (({\tt Q}({\tt b}){\tt \leftrightarrow} {\tt P}({\tt a}))^{म}
> $$

> [!exercise] ***Exercise***
>
> Choose a reasonable syntax and semantics to represent the statement “2 is even or 2 is odd”.

# Predicate Syntax and Semantics

The following now summarizes everything that we have said so far, and consolidates it into a single organized definition.  

But also notice that there is one small tedious issue.  We have agreed to use the notation ${\tt R}({\tt a},{\tt b})$, for example, when writing a binary relation for two objects.  This means that we now have to include in the alphabet of predicate logic, the comma!

Well that’s going to make it awkward when we have to list this symbol in a collection of other symbols.  Consider the set of symbols $\{{\tt (},{\tt )},{\tt \boldsymbol},\}$.  This is intended to have three symbols: The ‘(’ symbol, the ‘)’ symbol, and the comma, ‘,’.  But you can’t tell because the comma is already used as the separator in set notation.

Therefore when talking about the comma symbol as a part of the formal language, I will write it in bold.  Therefore, the set above will instead be written as $\{{\tt (},{\tt )},{\tt \boldsymbol}, \}$.  The bold comma is just a symbol in the set, while the un-bold commas are separators.  

> [!definition] ***Definition***
>
> *Syntax*
>
> Let $\text{Consts}, \text{Preds}$ be two nonempty disjoint sets of symbols which do not contain the elements of $\text{Conns}$. 
>
> We call $\text{Consts}$ the **set of constant symbols** and $\text{Preds}$ the **set of predicate symbols**.
>
> Let $\text{Arity}({\tt P})$ be a positive integer for each ${\tt P}\in \text{Preds}$.
>
> Define 
>
> $$
> \Sigma = \text{Consts}\cup \text{Preds}\cup \text{Conns}\cup \{(,),\boldsymbol, \}
> $$
>
> The set $\Sigma$ is then called **an alphabet for a predicate language**.
>
> If ${\tt P}\in \text{Preds}$ and $n = \text{Arity}({\tt P})$, and ${\tt a_1},\dots,{\tt a_n}\in\text{Consts}$, then 
>
> $$
> {\tt P}({\tt a_1},...,{\tt a_n}) 
> $$
>
> is called an **atomic formula**.  We denote the set of atomic formulas by $\text{Atom}$.
>
> Let $L\subseteq \Sigma^*$ be defined by the following recursion.
>
> - $\text{Atom}\subseteq L$.
> - For any ${\tt \phi},{\tt \psi}\in {\tt L}$ we have $({\tt \neg}{\tt \phi}),({\tt \phi}{\tt \land}{\tt \psi}),({\tt \phi}{\tt \lor}{\tt \psi}),({\tt \phi}{\tt \to}{\tt \psi}),({\tt \phi}{\tt \leftrightarrow} {\tt \psi})\in {\tt L}$.
>
> Then $L$ is called **a predicate language**.  Any element ${\tt \phi}\in L$ is called a **predicate formula** (or just **formula** for short).
>
> *Semantics*
>
> Let $उ$ be any nonempty set.
>
> Let $इ$ be an assignment of elements in $उ$ to the elements in $\text{Consts}$.  If $a\in\text{Consts}$ then the element assigned to it is denoted ${\tt a}^{इ}$.  
>>>>>>> origin/main
>
> For each ${\tt P}\in\text{Preds}$, if $n=\text{Arity}$ then $इ$ assigns a ${\tt P}$ to a subset of $उ^n$.  That is to say, ${\tt P}^{इ}\subseteq उ^n$.
>
> We define the pair $म = (उ,इ)$ to be a **predicate model** (or just **model** for short).
>
> For any formula ${\tt \phi}\in {\tt L}$ we denote its **evaluation in $म$** by ${\tt \phi}^{म}$.  We define this recursively by 
>
> - If ${\tt \phi}\in\text{Atom}$ and ${\tt \phi}={\tt P}({\tt a_1},\dots,{\tt a_n})$ for some ${\tt P}\in\text{Preds}$ and $n = \text{Arity}({\tt P})$ and ${\tt a_1},\dots,{\tt a_n}\in\text{Consts}$, then
>     
>     $$
>     {\tt \phi}^{म} = ट \text{ \ \ if } ({\tt a_1}^{इ},...,{\tt a_n}^{इ})\in {\tt P}^{इ}
>     $$
>     
>     and
>     
>     $$
>     {\tt \phi}^{म} = फ \text{ \ \ if } ({\tt a_1}^{इ},...,{\tt a_n}^{इ})\notin {\tt P}^{इ}
>     $$
>     
> - If there is a ${\tt \chi}\in L$ such that ${\tt \phi}={\tt \neg}{\tt \chi}$ then
>     
>     $$
>     {\tt \phi}^{म}  = \ \sim {\tt \chi}^{म}
>     $$
>     
> - If there are ${\tt \chi},{\tt \psi}\in {\tt L}$
>     - If ${\tt \phi}={\tt \chi}{\tt \land}{\tt \psi}$ then
>         
>         $$
>         {\tt \phi}^{म} = {\tt \chi}^{म}\curlywedge {\tt \psi}^{म}
>         $$
>         
>     - If ${\tt \phi}={\tt \chi}{\tt \lor}{\tt \psi}$ then
>         
>         $$
>         {\tt \phi}^{म} = {\tt \chi}^{म}\curlyvee {\tt \psi}^{म}
>         $$
>         
>     - If ${\tt \phi}={\tt \chi}{\tt \to}{\tt \psi}$ then
>         
>         $$
>         {\tt \phi}^{म} = {\tt \chi}^{म}\leadsto {\tt \psi}^{म}
>         $$
>         
>     - If ${\tt \phi}={\tt \chi}{\tt \leftrightarrow}{\tt \psi}$ then
>         
>         $$
>         {\tt \phi}^{म} = {\tt \chi}^{म}\leftrightsquigarrow {\tt \psi}^{म}
>         $$
