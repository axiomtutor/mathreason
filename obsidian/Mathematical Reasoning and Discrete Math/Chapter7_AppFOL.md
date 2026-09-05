---
title: "Chapter 7: Applications of First-order Logic"
---


# Examples and Counter-examples #TODO

Notice that it is hard to demonstrate the truth of a “for all” proposition: You have to consider every possible choice from the domain, which can mean evaluating many propositions.

For example, if $\mathfrak{M}$ is a model with universe $\{a,b,c\}$, then to directly confirm the truth of $\forall x P(x)$, you have to confirm $P(x)$ for three different assignments of *x*.  

However, that *disconfirming* $\forall x P(x)$ can (in principle) take much less labor.  To show that $\forall x P(x)^{\mathfrak{M}}=\mathfrak{F}$ we only need to find *one* domain element $u\in\{a,b,c\}$, for which $P(u)^{\mathfrak{M}}=\mathfrak{F}$.

Consider this in the context of a concrete example.  Take the sentence “all swans are white”.  [(This example comes from a historical example which is often used in discussions about the philosophy of science.)](https://en.wikipedia.org/wiki/Falsifiability)  

To confirm this sentence, one would have to inspect every swan in the universe. Europeans in the 16th century *believed* that this sentence was true—that is to say, they believed that all swans are white—even though they could not observe every swan.  But because every swan that they could observe was white, they made the reasonable (though false) assumption that all swans are white.

But when Europeans discovered Australia, they found a first counter-example: They observed a black swan!

(This has been generalized to the concept of a “[black swan event](https://en.wikipedia.org/wiki/Black_swan_theory)”.)

For our current purposes, the take-away lesson of this story is more limited: Proving that a for-all proposition is true requires inspecting every element of the domain. But proving that it is *false* requires just one well-chosen element of the domain.  

> [!exercise] ***Exercise***
>
> Consider a model $\mathfrak{M}$ with domain $\mathfrak{U} = \{a,b,c,d,e\}$.
>
> Suppose that 
>
> $$
> P^{\mathfrak{M}} = \{a,b,c,d\} \\
> Q^{\mathfrak{M}} = \{b,c,d,e\}
> $$
>
> Show that $\forall x P(x)^{\mathfrak{M}} = \mathfrak{F}$ by exhibiting a single element of the domain, $u\in\mathfrak{U}$, for which $u\notin P^{\mathfrak{M}}$.
>
> Do likewise for $\forall xQ(x)$.

> [!definition] ***Definition***
>
> Suppose that $\forall x \phi(x)$ be any first-order proposition.

# Vacuous Quantification

Suppose that *P* and *Q* are properties.  

Suppose that we have a model in which $P(x)$ is false for every element of the domain.  That is to say, if *U* is the domain and $u\in U$, then $P(u)^{\mathfrak{M}}=\mathfrak{F}$.

Let’s now evaluate 

$$
\forall x (P(x)\to Q(x))^{\mathfrak{M}}
$$

Let $u\in U$ be any element of the domain.  Then 

$$
\begin{aligned}
 (P(u)\to Q(u))^{\mathfrak{M}} &= P(u)^{\mathfrak{M}}\leadsto Q(u)^{\mathfrak{M}} \\
 &= \mathfrak{F} \leadsto Q(u)^{\mathfrak{M}} \\
 &= \mathfrak{T}
\end{aligned}
$$

Notice this last equality!  Even without knowing the value of $Q(u)^{\mathfrak{M}}$, we can still judge that $\mathfrak{F}\leadsto Q(u)^{\mathfrak{M}} = \mathfrak{T}$.  

That is because of how the boolean conditional $\leadsto$ is defined.  Whenever the antecedent is false, $\leadsto$ returns true.  So whether $Q(u)^{\mathfrak{M}}=\mathfrak{T}$ or $Q(u)^{\mathfrak{M}}=\mathfrak{F}$, either way the result will be $\mathfrak{F}\leadsto Q(u)^{\mathfrak{M}}=\mathfrak{T}$.

We have just shown that $(P(u)\to Q(u))^{\mathfrak{M}}=\mathfrak{T}$ for every $u\in U$, which shows that 

$$
\forall x(P(x)\to Q(x))^{\mathfrak{M}}=\mathfrak{T}
$$

This result explains the following definition.  

> [!definition] ***Definition***
>
> Let *P* be a predicate which is false for every element of the domain.
>
> It follows that, for any predicate *Q*, 
>
> $$
> \forall x(P(x)\to Q(x))^{\mathfrak{M}}=\mathfrak{T}
> $$
>
> This phenomenon is called **vacuous quantification**.

> [!exercise] ***Exercise***
>
> Show how the fact that “the empty set is a subset of every set” follows by vacuous quantification.

> [!exercise] ***Exercise***
>
> For any integer *x*, show that *x* is positive and negative, if and only if it is both even and odd.

# Tautology, Contradiction, and Contingency

Although we have a new syntax and a new semantics, the definition of tautology, contradiction, and contingency are exactly as before.

> [!definition] ***Definition***
>
> Let $\phi$ be a first-order proposition.  We say that $\phi$ is a **tautology** if 
>
> $$
> \phi^{\mathfrak{M}} = \mathfrak{T}
> $$
>
> for every choice of model $\mathfrak{M}$.
>
> The proposition $\phi$ is a **contradiction** if 
>
> $$
> \phi^{\mathfrak{M}}=\mathfrak{F}
> $$
>
> for every choice of $\mathfrak{M}$.
>
> If $\phi$ is neither a tautology nor a contradiction, then it is a **contingency**.

Let’s see examples.  Here’s a tautology: 

$$
\forall x(P(x)\lor \neg P(x))
$$

How can we demonstrate that it is a tautology?  Let $\mathfrak{M}$ be a model and *u* any element of the domain.  We need to evaluate 

$$
(P(u)\lor\neg P(u))^{\mathfrak{M}} = P(u)\curlyvee \sim P(u)^{\mathfrak{M}}
$$

If $P(u)^{\mathfrak{M}}=\mathfrak{T}$ then we compute 

$$
\begin{aligned}
\mathfrak{T}\ \curlyvee \sim \mathfrak{T} &= \mathfrak{T}\curlyvee \mathfrak{F} \\
&= \mathfrak{T}
\end{aligned}
$$

On the other hand if $P(u)^{\mathfrak{M}}=\mathfrak{F}$ then 

$$
\begin{aligned}
 \mathfrak{F}\curlyvee\sim \mathfrak{F} &= \mathfrak{F}\curlyvee \mathfrak{T} \\
&= \mathfrak{T}
\end{aligned}
$$

This demonstrates that $\forall x(P(x)\lor\neg P(x))^{\mathfrak{M}}=\mathfrak{T}$ no matter what we choose for $\mathfrak{M}$.  

> [!exercise] ***Exercise***
>
> Show that $\exists x (P(x)\land \neg P(x))$ is a contradiction.  
>
> Infer that $\forall x(P(x)\land \neg P(x))$ is a contradiction.  
>
> Show that $\forall x P(x)$ is a contingency.  
>
> Show that $\forall x P(x)\lor\neg \forall x P(x)$ is a tautology.  

# Properties of Binary Relations #TODO

There are several properties that a binary relation can have, which play large roles in mathematics.  

- “Reflexive” means “everything is related to itself”.
- “Symmetric” means “if the relation goes one way then it also goes the other”.
- “Transitive” means “if *a* reaches *b* and if *b* reaches *c*, then *a* reaches *c*”.
- “Anti-symmetric” means “the relation can’t go both ways”.
- “Asymmetric” means “the relation can’t go both ways, and no self-loops”.
- “Complete” means “any two nodes have an edge in some direction”.

> [!definition] ***Definition***
>
> Let *R* be a relation, and $\mathfrak{M}$ a model.  
>
> *R* is called **reflexive** if 
>
> $$
> \forall x R(x,x)
> $$

![image.png](Chapter%206%20Applications%20of%20First-order%20Logic/image.png)

Reflexive, not symmetric, not transitive.

![image.png](Chapter%206%20Applications%20of%20First-order%20Logic/image%201.png)

Not reflexive because $R(b,b)^{\mathfrak{M}}=\mathfrak{F}$, although other counter-examples could be given too.

The relation $\le$ on real numbers is reflexive.  For example, $1\le 1$.

The relation $\subseteq$ on sets is reflexive.  For example $\{1,3\}\subseteq \{1,3\}$.

The relation “*x* divides *y*” on integers is reflexive.  For example $4|4$.

But the strict relations $<$ and $\subset$ are not reflexive. Also “*x* is one more than *y*” is not reflexive.  

> [!definition] ***Definition continued***
>
> *R* is called **symmetric** if 
>
> $$
> \forall x\forall y(R(x,y)\rightarrow R(y,x))
> $$

![image.png](Chapter%206%20Applications%20of%20First-order%20Logic/image%202.png)

Symmetric, not reflexive, not transitive.

![image.png](Chapter%206%20Applications%20of%20First-order%20Logic/image%203.png)

Not symmetric because $(R(a,b)\to R(b,a))^{\mathfrak{M}}=\mathfrak{F}$.

For example, “*x* and *y* have the same absolute value” is symmetric.  That is to say, the relation *R* is defined by $R(x,y)^{\mathfrak{M}}=\mathfrak{T}$ if and only if 

$$
|x|=|y|
$$

The relation “$x = y\mod 4$” is symmetric.

But $\le$ and $\subseteq$ and $<$ are all not symmetric.  

> [!definition] ***Definition continued***
>
> *R* is called **transitive** if 
>
> $$
> \forall x\forall y\forall z ((R(x,y)\land R(y,z))\to R(x,z))
> $$

![image.png](Chapter%206%20Applications%20of%20First-order%20Logic/image%204.png)

Transitive, not reflexive, not symmetric.

![image.png](Chapter%206%20Applications%20of%20First-order%20Logic/image%205.png)

Not transitive because $((R(a,d)\land R(d,c))\to R(a,c))^{\mathfrak{M}}=\mathfrak{F}$. One other counter-example is possible.

The relations $\le, \subseteq, <,\subset$ are all transitive.  

The relation “the numbers *x* and *y* have the same absolute value” is transitive.

But the relation “the number *x* is one more than *y*” is not transitive.  The relation “The point *x* is 1 unit away from *y*” is not transitive.

> [!definition] ***Definition continued***
>
> *R* is called an **equivalence relation** if it is reflexive, symmetric, and transitive.
>
> The relation “for integers, $x = y\mod 4$” is an equivalence relation.
>
> The relation “for finite sets *x* and *y*, they contain the same number of elements” is an equivalence relation.
>
> The relations $\le,\subseteq,<,\subset$ are not equivalence relations.  The relation “*x* is one more than *y*” is not an equivalence relation.

> [!definition] ***Definition continued***
>
> *R* is called **antisymmetric** if 
>
> $$
> \forall x\forall y((R(x,y)\land R(y,x))\to x=y)
> $$
>
> *R* is called **asymmetric** if 
>
> $$
> \forall x\forall y(R(x,y)\to \neg R(y,x))
> $$
>
> *R* is called **irreflexive** if 
>
> $$
> \forall x(\neg R(x,x))
> $$

Anti-symmetric.

Not anti-symmetric because

*R* is called **connected** if 

$$
\forall x\forall y(x\ne y \to (R(x,y)\lor R(y,x))
$$

Connected, not reflexive, symmetric, transitive.

Not connected because 

*R* is called a **partial order** if it is reflexive, antisymmetric, and transitive.

*R* is called a **strict partial order** if it is irreflexive, asymmetric, and transitive.

*R* is called a **total order** if it is reflexive, antisymmetric, transitive, and connected.

> [!exercise] ***Exercise***
>
> Find an example of a relation that is antisymmetric but not asymmetric.

> [!exercise] ***Exercise***
>
> Find examples of asymmetric, irreflexive, connected relations, and then also find counter-examples.
>
> Find examples and counter-examples of partial orders, strict partial orders, and total orders.  

Consider the random example of a relation *R* and model $\mathfrak{M}$ with domain $\mathfrak{U} = \{a,b,c\}$.  If we have 

$$
\begin{aligned}
 R(a,a)^{\mathfrak{M}} &= \mathfrak{T} \\
 R(a,b)^{\mathfrak{M}} &= \mathfrak{T} \\
 R(b,b)^{\mathfrak{M}} &= \mathfrak{T} \\
 R(c,c)^{\mathfrak{M}} &= \mathfrak{T}  
\end{aligned}
$$

then this has diagram 

![image.png](Chapter%206%20Applications%20of%20First-order%20Logic/image%206.png)

> [!exercise] ***Exercise***
>
> Show that the above relation is 
>
> - reflexive
> - not irreflexive
> - not symmetric
> - antisymmetric
> - not asymmetric
> - transitive
> - not an equivalence relation
> - a partial order
> - not complete

# Quantifier Equivalences

Notice that if you express “Not every person is free” this is equivalent to expressing “Some person is not free”.  

Likewise “It is not true that someone is free” is equivalent to “Everyone is not free”.

If two propositions, $\phi,\psi$ are equivalent, we will write $\phi\equiv \psi$.  From the observations above, we should expect to find that 

$$
\neg \forall xP(x) \equiv \exists x \neg P(x)
$$

and 

$$
\neg \exists x P(x) \equiv \forall x\neg P(x)
$$

for every predicate *P*.  

But first we must define equivalence for first-order propositions.  Yet again, however, the definition is just as it was for propositional formulas.  

> [!definition] ***Definition***
>
> Let $\phi$ and $\psi$ be first-order propositions.  
>
> Then $\phi$ and $\psi$ are said to be **equivalent** if $\phi\leftrightarrow \psi$ is a tautology.  When they are equivalent we write 
>
> $$
> \phi\equiv \psi
> $$

> [!exercise] ***Exercise***
>
> Let *P* be any property.  
>
> 1. Prove that 
>
> $$
> \neg\forall xP(x)\equiv \exists x \neg P(x)
> $$
>
> 1. Prove that 
>
> $$
> \neg\exists x P(x)\equiv \forall x\neg P(x)
> $$

# At Least One, At Most One

Quantifiers can actually do just a little bit of counting.  

This isn’t too surprising.  After all, if $\exists x P(x)$ is a false statement, then the number of things with property *P* is zero.  If $\exists x P(x)$ is true, then the number of things with property *P* is at least one (although exactly what its number is could be anything, from 1 to infinity).  

Can we express, using quantifiers, that “the number of things with property *P* is exactly 1”?

Well, we know that we can express that the number is “at least one”.  If we could also express that the number is “at most one”, it would then follow that the number is “exactly 1”.

So we need to find a way to express “the number of things with property *P* is at most one”.  Here’s how: 

$$
\forall x\forall y((P(x)\land P(y))\to x=y)
$$

This may seem strange or confusing, so let’s talk about what’s going on here.  

This proposition says “If *x* and *y* are any two objects with property *P*, then *x* is *y*.”  

You might, with effort, develop an intuition for why this means that there is at most one object with property *P*.  But let’s analyze it formally, as that might give you something more concrete to understand.

---

Let’s examine this in the context of a small example.  Consider the domain {1, 2, 3} and the proposition “There is at most one even number.”  The proposition is true because there is precisely one number which is even.  

But the proposition “There is at most one odd number” is false.

Let $E(x)$ represent “*x* is even”, and $O(x)$ represent “*x* is odd”.

To express that “there is at most one even number,” we write

$$
\forall x\forall y((E(x)\land E(y))\to x=y)
$$

so our formal analysis should evaluate this to *T*.

To express that “there is at most one odd number,” we write

$$
\forall x\forall y ((O(x)\land O(y))\to x=y)
$$

which should evaluate to *F*.  

Below, we will look at every possible assignment of domain elements to the variables, and judge whether $\forall x\forall y((E(x)\land E(y))\to x=y)^{\mathfrak{M}}=\mathfrak{T}$.

To do so, we need to evaluate the proposition under the assignments 

$$
x\mapsto 1, y\mapsto 1; x\mapsto 1,y\mapsto2; x\mapsto 1,y\mapsto 3 \\
x\mapsto 2, y\mapsto 1; x\mapsto 2,y\mapsto2; x\mapsto 2,y\mapsto 3 \\
x\mapsto 3, y\mapsto 1; x\mapsto 3,y\mapsto2; x\mapsto 3,y\mapsto 3 \\

$$

That’s 9 assignments in total.  

- $x\mapsto 1,y\mapsto 1$
    
    Under this assignment, we compute the evaluation.
    
    $$
    \begin{aligned}
     ((E(1)\land E(1))\to 1=1)^{\mathfrak{M}} &= (E(1)\land E(1))^{\mathfrak{M}} \leadsto (1=1)^{\mathfrak{M}}\\
     &= (E(1)^{\mathfrak{M}} \curlywedge E(1)^{\mathfrak{M}})\leadsto \mathfrak{T} \\
     &= (\mathfrak{F}\curlywedge \mathfrak{F}) \leadsto \mathfrak{T} \\
     &= \mathfrak{F}\leadsto \mathfrak{T} \\
     &= \mathfrak{T}
    \end{aligned}
    $$
    
- $x\mapsto 1,y\mapsto 2$.
    
    $$
    \begin{aligned}
     ((E(1)\land E(2))\to 1=2)^{\mathfrak{M}} &= (E(1)\land E(2))^{\mathfrak{M}} \leadsto (1=2)^{\mathfrak{M}}\\
     &= (E(1)^{\mathfrak{M}} \curlywedge E(2)^{\mathfrak{M}})\leadsto \mathfrak{F} \\
     &= (\mathfrak{F}\curlywedge \mathfrak{T}) \leadsto \mathfrak{F} \\
     &= \mathfrak{F}\leadsto \mathfrak{T} \\
     &= \mathfrak{T}
    \end{aligned}
    $$
    

At this point we can kind of tell that this proposition is always going to be true whenever we pick a not-even number.  It’ll just keep making the antecedent false, and therefore the conditional will be true.

Let’s skip ahead and try the one assignment where the antecedent will be true, $x\mapsto 2,y\mapsto2$. 

$$
\begin{aligned}
 ((E(2)\land E(2))\to 2=2)^{\mathfrak{M}} &= (E(2)\land E(2))^{\mathfrak{M}} \leadsto (2=2)^{\mathfrak{M}}\\
 &= (E(2)^{\mathfrak{M}} \curlywedge E(2)^{\mathfrak{M}})\leadsto \mathfrak{T} \\
 &= (\mathfrak{T}\curlywedge \mathfrak{T}) \leadsto \mathfrak{T} \\
 &= \mathfrak{T}\leadsto \mathfrak{T} \\
 &= \mathfrak{T}
\end{aligned}
$$

Yet again the proposition is true under this assignment!  

> [!exercise] ***Exercise***
>
> Above we tested three of the nine possible assignments: 
>
> $$
> \begin{aligned}
>  x\mapsto 1,y\mapsto 1\\
>  x\mapsto 1,y\mapsto 2\\
>  x\mapsto 2,y\mapsto 2
> \end{aligned}
> $$
>
> Pick one more possible assignment and evaluate $((E(x)\land E(y))\to x=y)^{\mathfrak{M}}$ using that assignment.  
>
> Explain why $(\forall x\forall y ((E(x)\land E(y))\to x=y))^{\mathfrak{M}}=\mathfrak{T}$.

The proposition $\forall x\forall y ((O(x)\land O(y))\to x=y)$ should be false.

To show that it is false, we need to find a single assignment to *x* and *y* for which the proposition is false.  I bet that if we use the assignment $x\mapsto 1, y\mapsto 3$ then the proposition will be false.  Let’s test it out! 

$$
\begin{aligned}
 ((O(1)\land O(3))\to 1=3)^{\mathfrak{M}} &= (O(1)\land O(3))^{\mathfrak{M}} \leadsto (1=3)^{\mathfrak{M}}\\
 &= (O(1)^{\mathfrak{M}} \curlywedge O(3)^{\mathfrak{M}})\leadsto \mathfrak{F} \\
 &= (\mathfrak{T}\curlywedge \mathfrak{T}) \leadsto \mathfrak{F} \\
 &= \mathfrak{T}\leadsto \mathfrak{F} \\
 &= \mathfrak{F}
\end{aligned}
$$

Yep!  I was able to find some assignment to *x* and *y* such that the proposition was false.  Therefore the universal claim is false!

> [!exercise] ***Exercise***
>
> Suppose that you have any property, *P.*
>
> 1. Explain how to write a formula which expresses that “there is at least one *P*”.  
> 2. Explain how to write a formula which expresses that “there is at most one *P*.
> 3. Write a formula which expresses that “there is exactly one *P*”.
> 4. Write a formula which expresses that “there is at least one thing in the domain of discourses”.
> 5. Write a formula which expresses that “there is at most one thing in the domain of discourse”.

# At Least *n*, At Most *n*

So far we’re able to count using quantifiers: 0 and 1.  

How do you express that there are exactly 2 elements of the domain with a property *P*?  Just as we did for 1: We will find a way to express that there are at least two elements with property *P*.  Then we will express that there are at most two elements.  

To express that there are at least two elements, you might guess that it’s $\exists x\exists y (P(x)\land P(y))$.  However, this is not correct!

This proposition is true, *even when there is just one element with property P!*  

This is because, technically speaking, for both existential quantifiers we can select the same element.  If we select *u* for both of them, where $P(u)^{\mathfrak{M}}=\mathfrak{T}$, then the proposition is true.

So apparently it is not enough to merely state that “there are two things with property *P*”, so to speak.  You must specify “there are two *distinct* things with property *P*”.  

$$
\exists x \exists y(P(x)\land P(y)\land x\ne y)
$$

This is how one says “there are at least two objects with property *P*”.  

Now how about “at most two”?

This is a generalization of the “at most one” logic.  This time we say “if you pick any *three* things, then some *two* of them must be equal”.  Effectively this means that you cannot have three *distinct* things, so there are at most two.  

$$
\forall x\forall y\forall z((P(x)\land P(y)\land P(z))\to (x=y\lor x=z\lor y=z))
$$

> [!exercise] ***Exercise***
>
> How do you state that “there are exactly two things with property *P*”?

> [!exercise] ***Exercise***
>
> How do you state that “there are at least three things” and “there are at most three things”?  Hint: For “at least three things” you need three inequalities.  For “at most three things” you need 3+2+1 = 6 equalities.