---
title: "Chapter 6: First-order Syntax and Semantics"
---

We have developed propositional logic, and expanded it to predicate logic.  We now continue the project.  This time we expand predicate logic to what is called first-order logic.

# Keep $\Bbb R$ in Your Heart

Throughout this chapter it will help to keep in mind how you would develop a language to talk about the real numbers. 

Recall that the real numbers can be thought of, roughly, as “every possible decimal expansion”. The decimal expansion, for example, of 3/2 is 1.5. And the decimal expansion of 1/3 is the infinite expansion 0.333…

Later we’ll have more to say about decimal expansions and the formal construction of real numbers. But at least for now, this is a simple start to thinking about the real numbers.

Some examples: Every integer and rational number is a real number. But then there are some real numbers, like $\sqrt 2$ and $\pi$, which are real numbers but not rational. Later in this course we will actually *prove* that $\sqrt 2$ is real but not rational, whereas proving this for $\pi$ is beyond the scope of this course.

Note that $\sqrt 2$ doesn’t look like a “decimal expansion”. But there is a sequence of decimal numerals which is equivalent to $\sqrt 2$.

$$
\sqrt 2 = 1.4142...
$$

Now what does this have to do with logic?

First of all notice that the “number of real numbers” is enormous. It is clearly infinite, and bigger than the rational numbers in the sense that the rational numbers are a subset of the real numbers. In fact, this doesn’t even fully capture the way in which the real numbers are bigger than the rational numbers — we’ll have more to say about that later.

But one thing is clear: Our language cannot, in any practical sense, name every single real number. Of course each real number is an infinite decimal sequence — you might therefore argue that one can regard the decimal sequence as the “name” of the number.

However, that’s not practical. We can only practically write down finitely many digits of any decimal expansion. We will never fully name any number, if we name it by its decimal expansion.

Alternately, we can name a real number by symbols like $\sqrt 2$ and $\pi$. These names fully identify the number, without an infinite representation. When we write $\sqrt 2$, this refers to the exact number — in a sense, referring to its entire completed decimal expansion.

But for all practical purposes, our collection of names can only be finite. And yet there is an infinity of real numbers, and we will often want to reason about all of them, or certain infinite subsets of them.

In this chapter we will introduce “quantifiers”, which will allow us to easily reason about sets which are either large or infinite.  In particular we will discuss the syntax and semantics of our expanded logical system.  

Some of the ways that we define our semantics, in particular, may seem odd and complicated.  Many of the complexities of first-order semantics are due to the issues raised by the real numbers: The need to have a reasonably small collection of names, while trying to reason about a very large infinite set.  So keep this example in mind as you read the rest of this chapter.

# “All” and “Some”

Consider a sentence like “every dog deserves pets”.

![[Pasted image 20261004205111.png]]

If we were to express this in predicate syntax, first we would need a name for every dog. That would be a lot of names, like

$$
\tt d_1,\tt d_2,\tt d_3,...,\tt d_{10^{9}}
$$

for each of about a billion doggies.  Then we need a predicate, like $\tt D(\tt x)$, to represent "$\tt x$ deserves pets".

Then we need to form the very long conjunction

$$
\tt D(\tt d_1)\tt \land \tt D(\tt d_2)\tt \land\cdots\tt \land \tt D(\tt d_{10^9})
$$

But in English, the sentence is much simpler and shorter—we just use a phrase like “all”.  

> "All doggies deserve pets."

Much simpler!

Of course there is a parallel idea for disjunction: Consider the sentence “Some chimpanzee deserves pets.”  This one might deserve pets:

![[Pasted image 20261004211041.png]]

This one gives me "no pets" vibes.

![[Pasted image 20261004211251.png]]

To express “some chimps deserve pets” we’ll need to name every chimp,

$$
\tt c_1,...,\tt c_{10^6}
$$

and then assert

$$
\tt D(\tt c_1)\tt \lor\cdots\tt \lor \tt D(\tt c_{10^6})
$$

The point being that “all” indicates a long conjunction of a predicate, over every individual in the domain. “Some” indicates a long disjunction of a predicate, over every individual in the domain.

---

The above only considers a finite domain, like the set of all doggies or the set of all chimps.

But in math we’ll often need to discuss an infinite domain, like in the sentence “Every number divisible by 4 is divisible by 2.” The natural domain for this statement is the set of integers, and so we are claiming 

> “If 0 is divisible by 4 then 0 is divisible by 2, and if 1 is divisible by 4 then 1 is divisible by 2, and if -1 …”

This is like an “infinitely long conjunction”, although an *actual* infinitely long sentence is not possible.  Therefore we need a system of finite expressions, which is able to make claims about an infinite domain.

Of course we could repeat much of this for disjunction. In the sentence “there is an integer larger than $\pi^{100}$” we are essentially saying “either 0 is larger than $\pi^{100}$, or 1 is larger than $\pi^{100}$, or -1 is larger than $\pi^{100}$, or …”

---

Whenever we want to make a claim about all objects within the domain, we call this “universal quantification”. This is indicated by words like “all”, “every”, “each”, and so on.

Whenever we want to make a claim that there is some object within the domain, we call this “existential quantification”. This is indicated by words like “there is”, “there exists”, “some”, and so on.

# Quantifiers 

We are now going to add quantifiers to our predicate logic. The result is called first-order logic, which we officially define later.

To express “every dog deserves pets” in first-order logic, we will write

$$
\tt \forall \tt x \tt D(\tt x)
$$

The upside-down ‘A’ is read as “for all”. So the literal reading of this expression is

> For all $\tt x$ in the domain, $\tt x$ deserves pets.

This expresses that all dogs deserve pets, so long as the "domain of discourse" is the set of all dogs.  If the domain were all chimps, then $\tt \forall \tt x \tt D(\tt x)$ would express that all chimps deserve pets.

To express “some chimp deserves pets”, if the domain is all chimps then we would write 

$$
\tt \exists \tt x \tt D(\tt x)
$$

The backwards 'E' is read as "there exists".  So the literal reading of this expression is 

> There exists an $\tt x$ in the domain, $\tt x$ deserves pets.

The symbols $\tt \forall$ and $\tt \exists$ are called "quantifiers".

Notice that the syntax uses a variable, like $\tt x$ above. However, we will still want to have constant symbols, as we did with predicate logic.  

For example, suppose that the domain is all integers, $\tt o$ denotes the number 1, and the predicate $\tt D(\tt x,\tt y)$ denotes the relation "$\tt x$ is divisible by $\tt y$".  Then to express that every number is divisible by 1, we write 

$$ \tt \forall \tt x \tt D(\tt x,\tt o) $$

This demonstrates that our logical language will need two kinds of object symbols, one for variables and one for constants.  

Traditionally we will use the letters $\tt a$ through $\tt t$ for constants, and the letters $\tt u$ through $\tt z$ for variables.  Of course we also allow indices, so that $\tt a_{101}$ and $\tt t_0$ may be constants, and $\tt u_{123}$ could be a variable. 

> [!exercise] ***Exercise***
> Establish a reasonable domain and symbols to express the proposition 
> > There is some integer greater than $\pi$.

Note that we can also quantify over formulas.  For example, suppose that the domain is all integers, $\tt t$ denotes 2, $\tt f$ denotes 4, and $\tt D(\tt x,\tt y)$ denotes "$\tt x$ is divisible by $\tt y$".  Then consider the expression 

$$ \tt \forall \tt x(\tt D(\tt x,\tt f) \to \tt D(\tt x,\tt t)) $$

This expresses that "for every integer $\tt x$, if $\tt x$ is divisible by 4, then $\tt x$ is divisible by 2".  

If $\tt E$ expresses "is even" and $\tt P$ expresses "is prime" then 

$$ \tt \exists \tt x (\tt E(\tt x)\tt \land \tt P(\tt x)) $$

expresses that there exists an even prime integer.  

> [!exercise] ***Exercise***
> Choose a reasonable domain and symbols to express that "every differentiable function of a real variable is continuous".  
> 
> Choose another reasonable domain and symbols to express that "every cat is a mammal".

Not only can we quantify over formulas, but in fact, we can make formulas out of quantified expressions.  For example, if the domain is integers, $\tt E$ denotes "is even", $\tt O$ denotes "is odd", then the expression 

$$ (\tt \exists \tt x \tt E(\tt x)) \tt \land (\tt \exists \tt x \tt O(\tt x)) $$ 
expresses that "there is some number which is even, and there is some number which is odd".  This is a true proposition, since there does exist an even integer, 2, and there does exist an odd integer, 3.  

Note how different this expression is from the seemingly similar expression 

$$\tt \exists \tt x(\tt E(\tt x)\tt \land \tt O(\tt x))$$
This says that there exists an integer, $\tt x$, which is *both even and odd*.  That is not true, of course, since any number which is even cannot also be odd.  

> [!exercise] ***Exercise***
> Choose a domain and symbols to express "All cats are mammals but not all mammals are cats."

> [!exercise] ***Exercise***
> Suppose that the domain is all polygons in a two dimensional plane.  Just for example, this means that one of the elements in the domain is a triangle with vertices at (0,0), and (1,0), and (0,1).  The domain also contains many other triangles, quadrilaterals, pentagons, and so on.  
> 
> Suppose that $\tt E$ denotes the equilateral polygons, $\tt R$ the rectangles.
> 
> ***Part 1.***
> 
> Interpret the meaning of the expression 
> $$ \tt \forall \tt x(\tt \neg(\tt E(\tt x)\tt \land \tt R(\tt x))) $$
> and decide whether it's a true proposition.  
> 
> ***Part 2.***
> 
> Contrast this with the meaning of 
> $$ \tt \neg \tt \forall \tt x(\tt E(\tt x)\tt \land \tt R(\tt x)) $$ 
> and decide wehther this is a true proposition.  
> 
> ***Part 3.***
> 
> Come up with symbols that express the proposition: 
> 
> > Every equilateral rectangle is a square.
> 
> (This is, of course, a true proposition.)

# Functions

We are studying logic, to study math.  One of the most central things that we understand in mathematics, is how to solve an equation, like 

$$ 2x+1=13 $$

How are we going to represent such a thing in logic?

We're not entirely ready to address this question in its entirety.  But certainly any answer is going to have to say something about functions.

In particular, the part of the expression $2x+1$ is a function.

Let's say that we use the symbols $\tt o$ for 1 and $\tt t$ for 2.  Let's now further agree that we use the symbol $\tt f$ for the "times two" function.  That is to say, we will use $\tt f$ to denote the function $g(x)=2x$. 

> [!note]- $\tt f$ is in the object language, not $\tt g$.
 > Note that we are using the symbol $\tt f$ for a symbol in the logical language.  $g$ is not in the logical language (called the "object language").  $\tt g$ is in the function itself, which we say is in the "metalanguage".  The metalanguage is the language that I am writing to you in: English, or a mathy version of English.  
> 
> If this is confusing, note that it is exactly the same distinction as having a symbol like '$\tt a$' in the logical language, but the symbol refers to the person, Adam.  It is the distinction between syntax and semantics: $\tt a$ is in the syntax, the person to whom it refers, Adam, is in the semantics.
> 
> In the current context, $\tt f$ is the symbol in the syntax, $g$ is the actal function that it refers to, in the semantics.

Then suppose that we want to interpret the object referred to by $\tt f(\tt o)$.  Intuitively this should be the function, $g$, applied to the number 1.  That is 

$$ g(1) = 2(1) = 2 $$

This is what we will eventually ensure when we define the semantics of functions.

But now notice that we will also need to have a certain collection of symbols that are reserved for functions.  It is tradition to use $\tt f, \tt g, \tt h$ and perhaps more after that.  But here, the tradition is not especially clear: Is $\tt i$ a constant or function?

Well, luckly, we do not rely on tradition.  If there is ever ambiguity, we can always just resolve it by declaring explicitly our symbol sets for constants (recall, $\text{Consts}$), variables (from now on, $\text{Vars}$), functions ($\text{Funcs}$), and predicates ($\text{Preds}$).  

These sets of symbols are allowed to be literally any nonempty sets, with the caveat that they cannot overlap.  If any object were both a constant and a function symbol, it would introduce unnecessary and unpleasant ambiguity when trying to read a formula.

Similarly none of these sets are allowed to contain parentheses, since that would create readability issues.  For example if the left paren, ), were a constant symbol then we would have annoying difficulty reading "$\tt P\tt (\tt )\tt )$".  For similar reasons, none of the sets may contain logical connectives, like $\tt \neg$ or $\tt \forall$, nor may they contain commas.

Finally let's notice that not all functions have just one input.  Consider the function $\tt h(x,y)=2x + \pi y$.  

We have already discused the concept of "arity" with regard to predicates, and the same idea applies to functions.  The function above has arity 2.  If it is represented by the symbol **

# Terms

"Terms" are a generalization of functions.  

# First-order Syntax

> [!definition] ***Definition***
>
> *Syntax*
>
> We assume that we have sets of symbols for
>
> - Objects, $\text{Consts}$,
> - Variables, $\text{Vars}$,
> - Functions, $\text{Funcs}$,
> - Predicates, $\text{Preds}$
>
> None of these sets overlap, and none of them contain parentheses, logical connectives, or commas.
>
> **Terms** are defined as before, except that now both objects and variables are terms.
>
> Let $\tt P$ be a property symbol, and $\tt x$ a variable symbol.
>
> The expression $\tt \forall \tt x \tt P(\tt x)$ is called the **universal quantification of $\tt P$ over $\tt x$**.
>
> The expression $\tt \exists \tt x \tt P(\tt x)$ is called the **existential quantification of $\tt P$ over $\tt x$**.
>
> Any proposition that is formed as a predicate formula, or a predicate formula with universal or existential quantification over all of its variables, is called a **first-order formula** (or just **formula** for short). #TODO

- Note, this only defines a narrowly restricted case.
    
    The above definition does not define quantification over general predicates. It only defines quantification over properties.

All of these are examples of first-order propositions.

$$
\tt \exists \tt x \tt D(\tt x)\\
\tt \forall \tt x \tt P(\tt a,\tt x)\tt \leftrightarrow \tt \neg\tt \exists \tt z(\tt Q(\tt z)\tt \lor \tt Z(\tt z,\tt b))\\
\tt R(\tt a,\tt b,\tt c)
$$

The following are not first-order propositions.

$$
\tt \exists \tt D(\tt x)\\
\tt \forall xP(\tt y,\tt x) \tt \leftrightarrow \tt \neg \tt \exists \tt z (\tt Q(\tt z)\tt \lor \tt Z(\tt z,\tt b)) \\
\tt R(\tt x,\tt b,\tt c)\\
\tt \forall \tt a \tt S(\tt a)
$$

The first is not because it is simply malformed: the existential quantifier requires a variable.

The second is not because the variable $\tt y$ is not bounded by a quantifier. All variables must be bounded.

The third is not for the same reason, although this time $\tt x$ is the unbounded quantifier.

The fourth is not because it uses a constant symbol $\tt a$ in quantification. Quantification requires the use of a variable.

> [!exercise] ***Exercise***
>
> Classify each of the following as first-order formulas or not.
>
> 1. $\tt \forall \tt x\tt \forall \tt y\tt T(\tt x,\tt y,\tt y,\tt x)$
> 2. $\tt \exists \tt a\tt A(\tt a,\tt a)$
> 3. $\tt \neg \tt \exists \tt v \tt Q(\tt v)$
> 4. $\tt \exists \tt v \tt \neg \tt Q(\tt v)$
> 5. $\tt \forall \tt x \tt P$

> [!definition] ***Definition***
>
> *Semantics*
>
> Let $उ$ be the domain of discourse and $म$ a model.
>
> We assign $(\tt \forall \tt x \tt P(\tt x))^{म}=ट$ if for every choice of $u\in उ$ we have $u\in \tt P^{म}$. Otherwise $(\tt \forall \tt x\tt P(\tt x))^{म}=फ$.
>
> We assign $(\tt \exists \tt x\tt P(\tt x))^{म} = ट$ if there is some choice of $u\in उ$ such that $u\in \tt P^{म}$. Otherwise $(\tt \exists xP(\tt x))^{म} = फ$.

To give an example, suppose the domain is the set of these objects:

![image.png](Chapter%205%20First-order%20Logic/image%203.png)

Let the predicate $\tt R$ denote a red object, $\tt B$ blue, $\tt W$ white, $\tt K$ black, $\tt C$ cone, $\tt S$ sphere, $\tt U$ cube, $\tt Y$ cylinder, $\tt T$ tetrahedron, and $\tt P$ a rectangular prism.

Then $(\tt \forall \tt x \tt R(\tt x))^{म}=फ$ because not all of the objects in the domain are red.

However $(\tt \exists \tt x\tt R(\tt x))^{म}=ट$ because some object in the domain is red.

> [!exercise] ***Exercise***
>
> Let $उ = \Bbb N$. Let $\tt P(\tt x)$ be the predicate “$\tt x$ is positive”, and $\tt Q(\tt x)$ is the predicate “$\tt x$ is negative”, and $\tt R(\tt x)$ the predicate “$\tt x$ is equal to 1”.
>
> Decide which of the following is true.
>
> 1. $\tt \forall \tt x\tt P(\tt x)$
> 2. $\tt \exists \tt x \tt P(\tt x)$
> 3. $\tt \forall \tt x \tt Q(\tt x)$
> 4. $\tt \exists \tt x \tt Q(\tt x)$
> 5. $\tt \forall \tt x \tt R(\tt x)$
> 6. $\tt \exists \tt x \tt R(\tt x)$

> [!exercise] ***Exercise***
>
> Let $\tt P(\tt x)$ be the predicate “$\tt x$ is even”.
>
> For each choice of universe, decide whether $\tt \forall \tt x\tt P(\tt x)$ and $\tt \exists \tt x \tt P(\tt x)$ are true.
>
> 1. $उ = \Bbb Z$.
> 2. $उ = \Bbb N$.
> 3. $उ = \{\tt x\in\Bbb N: \tt x \text{ is prime}\}$.
> 4. $उ = \{2\}$.

Of course we don’t have to live with only simple predicates—we can join them into more complex expressions, using the propositional logic from before.

If we refer back to the colorful shapes in the image above, here are some true quantified statements about them:

$\tt \forall \tt x(\tt B(\tt x)\to \tt \neg \tt C(\tt x))$

$\tt \exists \tt x(\tt W(\tt x)\tt \land \tt S(\tt x))$

$\tt \forall \tt x(\tt K(\tt x)\to \tt W(\tt x))$

$\tt \neg \tt \exists \tt x \tt K(\tt x)$

$\tt \exists \tt x \tt \neg \tt R(\tt x)$

Respectively, these say

1. Every blue object is not a cone.
2. There is a white sphere.
3. Every black object is white.
4. There does not exist a black object.
5. There exists an object which is not red.

Notice that (3) above is kind of funny—but technically true!

Don’t believe me? Test it out using the official semantics!

Pick any object, like say, the red cube. Let’s call it *u*. Now let’s evaluate $(\tt K(u)\to \tt W(u))^{म}$. By the semantics of the conditional, this is $(\tt K(u))^{म} \leadsto (\tt W(u))^{म}$. Because *u* is not black, $\tt K(u)^{म}=फ$. Because *u* is not white, $\tt W(u)^{म}=फ$. Therefore

$$
\begin{aligned}
 (\tt K(u)\to \tt W(u))^{म} &= \tt K(u)^{म}\leadsto \tt W(u)^{म} \\
 &= फ\leadsto फ \\
 &= ट
\end{aligned}
$$

So it’s true for the red cube!

> [!exercise] ***Exercise***
>
> Now let *u* be the white cylinder. Evaluate $(\tt K(u)\to \tt W(u))^{म}$.
>
> Next, explain why $(\tt \forall \tt x (\tt K(\tt x)\to \tt W(\tt x)))^{म} = ट$.

> [!exercise] ***Exercise***
>
> Let’s consider a property, *P,* and a model, $म$, such that $\tt P(u)^{म} = ट$ for every choice of *u* in the domain.
>
> Certain it follows that $\tt \forall \tt x \tt P(\tt x)^{म}=ट$.
>
> Now prove that $\tt \forall \tt x(\tt P(\tt x)\tt \lor \tt Q(\tt x))^{म}=ट$.
>
> Also prove that $(\tt \forall \tt x \tt P(\tt x)\tt \lor \tt \forall \tt x \tt Q(\tt x))^{म}=ट$.

> [!exercise] ***Exercise***
>
> Consider a property, $\tt P$, and model, $म$, such that $(\tt P(u)\tt \lor \tt Q(u))^{म} = ट$ for every *u* in the domain.
>
> It follows immediately by definition that $\tt \forall \tt x(\tt P(\tt x)\tt \lor \tt Q(\tt x))^{म}=ट$.
>
> Is it necessarily true that $\tt \forall xP(\tt x)\tt \lor\tt \forall \tt x \tt Q(\tt x)$?
>
> Hint: What if the model has domain elements $\tt a$ and $\tt b$, such that
>
> $$\begin{aligned}
> \tt P(\tt a)^{म}=ट\\
> \tt P(\tt b)^{म}=फ\\
> \tt Q(\tt a)^{म}=फ\\
> \tt Q(\tt b)^{म}=ट
> \end{aligned}$$

# Set Properties, Operations, and Relations

There is a direct connection between the familiar set operations, on the one hand, and the logical constructs that we’ve developed so far.

Consider for example the set of all even natural numbers, $X = \{2,4,…\}$, which in set-builder notation is

$$
X=\{x\in \Bbb N:x \text{ is even}\}
$$

Notice that this set is defined by the “is even” property. If we use the symbol $\tt E$ for the “is even” property, then the following proposition is true (in a model with universe $\Bbb N$).

$$
\tt \forall \tt x(\tt x\in \tt X\tt \leftrightarrow \tt E(\tt x))
$$

The above expression says that “$\tt x$ is an element of $\tt X$ if and only if $\tt x$ is even”. This is more than just true, it is in fact the definition of the set $X$!

We have previously said that any set, *Y*, can be defined some property, call it $\varphi(x)$. Specifically, if the universe is *U*, then *Y* can be defined as

$$
Y = \{x\in U: \tt \varphi(x)\}
$$

Well, this is just the same thing as saying

$$
\tt \forall \tt x(\tt x\in \tt Y\tt \leftrightarrow \tt \varphi(\tt x))
$$

What this demonstrates is that anything which we can express by set-builder notation can also be expressed by quantified logic.

> [!exercise] ***Exercise***
>
> Write the quantifier logic expression of the set
>
> $$
> \{x\in\Bbb Q: x>1\}
> $$

Let *U* be a universal set and $A,B\subseteq U$.

Then the union, $A\cup B$, is the set of all elements in $\tt A$ or $\tt B$. Put into a logical expression,

$$
\tt A\cup \tt B = \{\tt x\in \tt U: \tt x\in \tt A\tt \lor \tt x\in \tt B\}
$$

Notice the use of the logical operator, $\tt \lor$.

In fact, we could even state the definition of the union with quantifier logic *instead* of set-builder notation:

$$
\tt \forall \tt x(\tt x\in \tt A\cup \tt B\tt \leftrightarrow (\tt x\in \tt A\tt \lor \tt x\in \tt B))
$$

This expression “says” that $\tt x$ is an element of $A\cup B$, if and only if $\tt x$ is either in $A$ or $B$.

So we have seen that the idea of the union of sets is something which has equivalent definitions in set-builder notation, and in quantifier logic.

> [!exercise] ***Exercise***
>
> In the same style as above, use set-builder notation and a logical operation to define the intersection, $A\cap B$.
>
> That is to say, fill in the blank in the expression below.
>
> $$
> A\cap B = \{x\in U: \underline{\hspace{3cm}}\}
> $$

> [!exercise] ***Exercise***
>
> Now define the intersection using quantifier logic instead of set-builder notation.

> [!exercise] ***Exercise***
>
> Define $A\smallsetminus B$ using set-builder notation and logical operations, and then also define it using quantifier logic.
>
> Do likewise for the complement, $A^c$.

We have now seen that all of the set operations, union, intersection, set minus, and complement, can be expressed in quantifier logic.

What about the

> [!exercise] ***Exercise***
>
> What is the relationship between sets $A$ and $B$, if the following proposition is true?
>
> $$
> \tt \forall \tt x(\tt x\in \tt A\tt \leftrightarrow \tt x\in \tt B)
> $$

> [!exercise] ***Exercise***
>
> Choose appropriate symbols to express the sentence “All squares are rectangles, but not all rectangles are squares.”

> [!exercise] ***Exercise***
>
> Explain why “all that glisters is not gold” implies “gold does not glister”.

> [!exercise] ***Exercise***
>
> Explain why “every integer is even or odd” does not rule out the possibility that some integer is *both* even and odd.
>
> Write a symbolic expression for “every integer is even or odd but not both”.

# Nested Quantifiers

Things get more interesting still when we consider multiple quantifiers.

Consider the domain of all humans on the planet, and the relation $\tt L(\tt x,\tt y)$ which represents “$\tt x$ loves $\tt y$”.

Now consider the different meanings of each of the following propositions.

- $\tt \forall \tt x\tt \forall \tt y \tt L(\tt x,\tt y)$
- $\tt \forall \tt x\tt \exists \tt y \tt L(\tt x,\tt y)$
- $\tt \exists \tt x\tt \forall \tt y \tt L(\tt x,\tt y)$
- $\tt \exists \tt x\tt \exists \tt y \tt L(\tt x,\tt y)$

The first one says “everyone loves everyone”. This would perhaps be true in some futuristic utopia.

![image.png](Chapter%205%20First-order%20Logic/image%204.png)

The second says that “everyone loves someone”. That’s the content of a pop song.

[https://youtu.be/1ja32uS-bD0?si=KR5ZGXTEr2EbJC_M](https://youtu.be/1ja32uS-bD0?si=KR5ZGXTEr2EbJC_M)

The third one says that “someone loves everyone”, which seems to describe a kind of Jesus figure.

![image.png](Chapter%205%20First-order%20Logic/image%205.png)

And finally the last one says that “someone loves someone”, which seems almost like a truism.

![image.png](Chapter%205%20First-order%20Logic/image%206.png)

Let’s see an example. Suppose that we have the following road network between cities.

![image.png](Chapter%205%20First-order%20Logic/image%207.png)

Let’s use $\tt L(\tt x,\tt y)$ to mean “$\tt x$ is linked to $\tt y$ by a road”. So for example $\tt L(\tt a,\tt b)$ is true while $\tt L(\tt a,\tt d)$ is not.

Let’s also use $\tt N(\tt x,\tt y)$ to mean “$\tt x$ is lexically next after $\tt y$”. Note that $\tt N(\tt b,\tt a)$ is true because $\tt b$ is lexically next after $\tt a$. However, $\tt N(\tt c,\tt a)$ is not true.

Here is a sentence that should be true: For any two cities, $\tt x$ and $\tt y$, if $\tt x$ is lexically next after $\tt y$ then $\tt x$ is linked to $\tt y$. In a formula, this is

$$
\tt \forall \tt x\tt \forall \tt y(\tt N(\tt x,\tt y) \to \tt L(\tt x,\tt y))
$$

Intuitively this is true because we see four pairs where one city is lexically next: A and B, B and C, C and D, and D and E. In every case, the pair of cities are linked, as you can see in the graph.

To evaluate $(\tt \forall \tt x\tt \forall \tt y(\tt N(\tt x,\tt y)\to \tt L(\tt x,\tt y)))^{म}$ formally, we need to consider five total possible assignments to $\tt x$.

- $\tt x\mapsto \tt a$
- $\tt x\mapsto \tt b$
- $\tt x\mapsto \tt c$
- $\tt x\mapsto \tt d$
- $\tt x\mapsto \tt e$

Let’s consider these each in turn.

- $\tt x\mapsto \tt a$

With this assignment we now have to evaluate $(\tt \forall \tt y (\tt N(\tt a,\tt y)\to \tt L(\tt a,\tt y)))^{म}$. To do this we again need to consider five possible assignments to $\tt y$.

  - $\tt y\mapsto \tt a$

    With this assignment we now have to evaluate $(\tt N(\tt a,\tt a)\to \tt L(\tt a,\tt a))^{म}$. Noting that $\tt N(\tt a,\tt a)^{म}=फ$ and $\tt L(\tt a,\tt a)^{म}=ट$, then

    $$
    \begin{aligned}
     (\tt N(\tt a,\tt a)\to \tt L(\tt a,\tt a))^{म} &= \tt N(\tt a,\tt a)^{म} \leadsto \tt L(\tt a,\tt a)^{म} \\
     &= फ\leadsto ट \\
     &= ट
    \end{aligned}
    $$

  - $\tt y\mapsto \tt b$

    With this assignment

    $$
    \begin{aligned}
     (\tt N(\tt a,\tt b)\to \tt L(\tt a,\tt b))^{म} &= \tt N(\tt a,\tt b)^{म} \leadsto \tt L(\tt a,\tt b)^{म} \\
     &= फ\leadsto ट \\
     &= ट
    \end{aligned}
    $$

  - $\tt y\mapsto \tt c$

    $$
    \begin{aligned}
     (\tt N(\tt a,\tt c)\to \tt L(\tt a,\tt c))^{म} &= \tt N(\tt a,\tt c)^{म} \leadsto \tt L(\tt a,\tt c)^{म} \\
     &= फ\leadsto ट \\
     &= ट
    \end{aligned}
    $$

  - $\tt y\mapsto \tt d$

    $$
    \begin{aligned}
     (\tt N(\tt a,\tt d)\to \tt L(\tt a,\tt d))^{म} &= \tt N(\tt a,\tt d)^{म} \leadsto \tt L(\tt a,\tt d)^{म} \\
     &= फ\leadsto फ \\
     &= ट
    \end{aligned}
    $$

  - $\tt y\mapsto \tt e$

    $$
    \begin{aligned}
     (\tt N(\tt a,\tt e)\to \tt L(\tt a,\tt e))^{म} &= \tt N(\tt a,\tt e)^{म} \leadsto \tt L(\tt a,\tt e)^{म} \\
     &= फ\leadsto फ \\
     &= ट
    \end{aligned}
    $$

    As we see, when $\tt x\mapsto \tt a$, then for every possible mapping of $\tt y$, we get a true proposition.

    Therefore $(\tt \forall \tt y(\tt N(\tt a,\tt y)\to \tt L(\tt a,\tt y)))^{म} = ट$.

- $\tt x\mapsto \tt b$

  > [!exercise] ***Exercise***
  >
  > Perform this assignment and evaluate $(\tt \forall \tt y(\tt N(\tt b,\tt y)\to \tt L(\tt b,\tt y)))^{म}$.

- $\tt x\mapsto \tt c$

  > [!exercise] ***Exercise***
  >
  > Perform this assignment and evaluate the relevant proposition.

- $\tt x\mapsto \tt d$

  - $\tt y\mapsto \tt a$

    $$
    \begin{aligned}
     (\tt N(\tt d,\tt a)\to \tt L(\tt d,\tt a))^{म} &= \tt N(\tt d,\tt a)^{म} \leadsto \tt L(\tt d,\tt a)^{म} \\
     &= फ\leadsto फ \\
     &= ट
    \end{aligned}
    $$

  - $\tt y\mapsto \tt b$

    With this assignment

    $$
    \begin{aligned}
      (\tt N(\tt d,\tt b)\to \tt L(\tt d,\tt b))^{म} &= \tt N(\tt d,\tt b)^{म} \leadsto \tt L(\tt d,\tt b)^{म} \\
     &= फ\leadsto ट \\
     &= ट
    \end{aligned}
    $$

  - $\tt y\mapsto \tt c$

    $$
    \begin{aligned}
     (\tt N(\tt d,\tt c)\to \tt L(\tt d,\tt c))^{म} &= \tt N(\tt d,\tt c)^{म} \leadsto \tt L(\tt d,\tt c)^{म} \\
     &= ट\leadsto ट \\
     &= ट
    \end{aligned}
    $$

  - $\tt y\mapsto \tt d$

    $$
    \begin{aligned}
     (\tt N(\tt d,\tt d)\to \tt L(\tt d,\tt d))^{म} &= \tt N(\tt d,\tt d)^{म} \leadsto \tt L(\tt d,\tt d)^{म} \\
     &= फ\leadsto फ \\
     &= ट
    \end{aligned}
    $$

  - $\tt y\mapsto \tt e$

    $$
    \begin{aligned}
     (\tt N(\tt d,\tt e)\to \tt L(\tt d,\tt e))^{म} &= \tt N(\tt d,\tt e)^{म} \leadsto \tt L(\tt d,\tt e)^{म} \\
     &= फ\leadsto ट \\
     &= ट
    \end{aligned}
    $$

    As we see, when $\tt x\mapsto \tt d$, then for every possible mapping of $\tt y$, we get a true proposition.

    Therefore $(\tt \forall \tt y(\tt N(\tt d,\tt y)\to \tt L(\tt d,\tt y)))^{म} = ट$.

- $\tt x\mapsto \tt e$

We should check this case too, but I promise $(\tt \forall \tt y(\tt N(\tt e,\tt y)\to \tt L(\tt e,\tt y)))^{म}=ट$. However, you are invited to check for yourself if you would like more exercise.

The above now confirms that, for every possible assignment to $\tt x$, the resulting proposition is true.

Therefore it demonstrates $(\tt \forall \tt x\tt \forall \tt y (\tt N(\tt x,\tt y)\to \tt L(\tt x,\tt y)))^{म}$.

> [!exercise] ***Exercise***
>
> Using the same city and road diagram, solve the following exercises.
>
> You don’t always have to make every single assignment. For example, to show $\tt \forall \tt x\tt \exists \tt y \tt L(\tt x,\tt y)$ is true, you do need to show that it is true for every possible assignment to $\tt x$. So this means that you need to check *at least* five assignments to $\tt x$.
>
> Now if you were very flat-footed, you would then check five assignments to $\tt y$. If at least one of those assignments is true, then the existential proposition is true.
>
> But this is more effort than you really need to do. When it comes to an existential quantifier, you really just need to exhibit *one* instance of $ट$, not *every* instance of $ट$. So, for each assignment of $\tt x$, if you find one satisfying assignment of $ट$, you can stop early!
>
> 1. Show that
>
>     $$
>     \tt \forall \tt x\tt \exists \tt y \tt L(\tt x,\tt y)
>     $$
>
>     is true. (Hint: With an appropriate choice of assignments, this only requires evaluating five propositions. Further hint: For any choice of $\tt x$, it is not linked to itself!)
>
> 2. Show that
>
>     $$
>     \tt \exists \tt x\tt \forall \tt y \tt L(\tt x,\tt y)
>     $$
>
>     is true. (With an appropriate choice of assignments, this only requires evaluating five propositions.)
>
> 3. Show that
>
>     $$
>     \tt \forall \tt x\tt \forall \tt y \tt L(\tt x,\tt y)
>     $$
>
>     is false. (With an appropriate choice of assignments, this only requires evaluating *one* proposition!)
>
> 4. Show that
>
>     $$
>     \tt \forall \tt x\tt \forall \tt y(\tt L(\tt x,\tt y)\to \tt N(\tt x,\tt y))
>     $$
>
>     is false. (With an appropriate choice of assignments, this only requires evaluating one proposition.)
>
> 5. Show that
>
>     $$
>     \tt \exists \tt x \tt \exists \tt y (\tt L(\tt x,\tt y)\tt \land\tt \neg \tt N(\tt x,\tt y))
>     $$
>
>     is true. (With an appropriate choice of assignments, this requires only evaluating one proposition.)
>
> 6. Show that $\tt \exists \tt x \tt L(\tt x,\tt x)$ is false. This requires evaluating five propositions.

# First-order Logic

Up to this point I’ve been pretty dogged in presenting the formal syntax and semantics of each logical system that we consider: First with propositional logic and then with predicate logic.

But now consider a formula like the following.

$$
\tt \forall \tt x\tt \exists \tt y(\tt R(\tt x,\tt y) \to \tt S(\tt y,\tt y,\tt a))
$$

This has many-place relations, and nested quantifiers. This is a more general instance of a first-order formula.

As you can see below, the rigorous definition of the syntax and semantics for first-order logic is long and complex. I don’t recommend that you actually read the following definition in detail—we will not use it through the rest of the course.

> [!definition] ***Definition***
>
> *Syntax*
>
> Note that we will use a bold comma: $\boldsymbol ,$. This is a distinct symbol from our simple comma. We do so in order to tell the difference between a comma used in our regular language, and a comma used inside our first-order syntax.
>
> Let $\text{Un}=\{\tt \neg\}$, $\text{Bins} = \{\tt \land,\tt \lor,\to,\tt \leftrightarrow\}$, and $\text{Quants} = \{\tt \forall, \tt \exists\}$. These, respectively, are the sets of **unary connectives**, **binary** **connectives**, and **quantifier symbols**.
>
> Let $\text{Objs}, \text{Vars}, \text{Funcs}$, and $\text{Preds}$ be three nonempty sets such that each of the following sets are disjoint: $\text{Objs},\text{Vars},\text{Funcs},\text{Preds},\text{Un},\text{Bins},\text{Quants}$, and $\{ (, ), \boldsymbol ,\}$. The first four of these are, respectively, the set of **object symbols**, **variable symbols**, **function symbols**, **predicate symbols**.
>
> The set
>
> $$
> \begin{aligned}
> \Sigma=&\text{Objs}\cup\text{Vars}\\
> &\cup\text{Funcs}\cup\text{Preds}\\&\cup\text{Un}\cup\text{Bins}\\
> &\cup\text{Quants}\cup\{(,),\boldsymbol,\}
> \end{aligned}
> $$
>
> is the **alphabet of a first-order language**.
>
> Let $\text{Arity}: \text{Funcs}\cup \text{Preds}\to \{0,1,2,...\}$ be a function, called **the arity function**.
>
> Every element of $\text{Objs}\cup \text{Vars}$ is a **term**.
>
> Let $\tt f\in \text{Funcs}$ and $n = \text{Arity}(\tt f)$, and let $\tt t_1,…,\tt t_n$ be terms. Then $\tt f(\tt t_1,…,\tt t_n)$ is a **term**.
>
> We define $\text{Term}$ to be the **set of terms**,
>
> $$
> \text{Term} = \{\tt t \in \Sigma^*:\tt t\text{ is a term}\}
> $$
>
> Let $\tt P\in \text{Preds}$ and $n = \text{Arity}(\tt P)$, and let $\tt t_1,...,\tt t_n$ be terms. Then $\tt P(\tt t_1\boldsymbol ,\tt t_2\boldsymbol ,…\boldsymbol,\tt t_n)$ is called an **atomic formula**. Every atomic formula is a **first-order formula**.
>
> If $\tt \phi,\tt \psi$ are any two first-order formulas, and $\tt \Box\in\text{Bins}$, and $\tt \Diamond\in\text{Quants}$, and $\tt x\in \text{Vars}$, then the following are also **first-order formulas**.
>
> - $(\tt \neg \tt \phi)$
> - $(\tt \phi\tt \Box\tt \psi)$
> - $(\tt \Diamond \tt x \tt \phi)$
>
> We define $\text{Forms}$ to be the **set of first-order formulas**,
>
> $$
> \text{Forms} = \{\tt \phi\in\Sigma^*:\tt \phi \text{ is a first-order formula}\}
> $$
>
> We define a function $\text{Free}:\text{Term}\cup\text{Forms}\to \mathcal \tt P(\text{Vars})$ recursively. Let $\tt \Box\in\text{Bins}$ and $\tt \Diamond\in\text{Quants}$ and $\tt x\in \text{Vars}$. Let $\tt \phi,\tt \psi\in\text{Forms}$.
>
> - If $\tt x\in \text{Objs}$ then $\text{Free}(\tt x) = \emptyset$.
> - If $\tt x\in \text{Vars}$ then $\text{Free}(\tt x) = \{\tt x\}$.
> - If $\tt f\in \text{Funcs}$ and $n=\text{Arity}(\tt f)$ and if $\tt t_1,…,\tt t_n\in\text{Terms}$, then
>
>     $$
>     \text{Free}(\tt f(\tt t_1,...,\tt t_n)) = \text{Free}(\tt t_1)\cup \dots \cup \text{Free}(\tt t_n)
>     $$
>
> - If $\tt P\in \text{Preds}$ and $n=\text{Arity}(\tt P)$, and if $\tt t_1,…,\tt t_n\in\text{Terms}$, then
>
>     $$
>     \text{Free}(\tt P(\tt t_1,...,\tt t_n)) = \text{Free}(\tt t_1)\cup\cdots \cup \text{Free}(\tt t_n)
>     $$
>
> - $\text{Free}((\tt \neg \tt \phi)) = \text{Free}(\tt \phi)$
> - $\text{Free}((\tt \phi\tt \Box\tt \psi)) = \text{Free}(\tt \phi)\cup \text{Free}(\tt \psi)$
> - $\text{Free}((\tt \Diamond \tt x\tt \phi)) = \text{Free}(\tt \phi)\smallsetminus \{\tt x\}$
>
> We call $\text{Free}(\tt \phi)$ the **set of free variables of $\tt \phi$**.
>
> If $\tt \phi \in \text{Forms}$ and $\text{Free}(\tt \phi)=\emptyset$, then we say that $\tt \phi$ is a **closed formula**.
>
> We denote the **set of closed formulas**,
>
> $$
> \text{Closeds} = \{\tt \phi\in\text{Forms}: \text{Free}(\tt \phi) = \emptyset\}
> $$

> [!definition] ***Definition***
>
> *Semantics*
>
> We use the same sets as above for the syntax.
>
> Let $उ$ be any nonempty set, called the **universe**.
>
> Let $इ$ be a function such that, for each $\tt a\in \text{Obj}$, the expression $\tt a^{इ}$ is the **interpretation of $\tt a$**, which denotes the element of $उ$ to which $\tt a$ is mapped.
>
> $$
> \tt a^{इ} \in उ
> $$
>
> Moreover let $\tt f\in \text{Funcs}$ and $n=\text{Arity}(\tt f)$. The expression $\tt f^{इ}$ is the **interpretation of $\tt f$**, which denotes the function to which $\tt f$ is mapped.
>
> $$
> \tt f^{इ}:उ^n\toउ
> $$
>
> Moreover, let $\tt P\in \text{Preds}$ and $n=\text{Arity}(\tt P)$. The expression $\tt P^{इ}$ is the **interpretation of $\tt P$**, which denotes the subset of $उ^n$ to which $\tt P$ is mapped.
>
> $$
> \tt P^{इ} \subseteq उ^n
> $$
>
> Let $म = (उ,इ)$.
>
> Let $v: \text{Vars}\to उ$ be a function, which we call a **variable assignment**.
>
> We define the notation $v[\tt x\mapsto \tt y]$ to be the function
>
> $$
> v[\tt x\mapsto \tt y](\tt z) = \begin{cases}
> v(\tt z) & \text{ if } \tt z\ne \tt x\\
> \tt y & \text{ if } \tt z = \tt x
> \end{cases}
> $$
>
> We call $v[\tt x\mapsto \tt y]$ the function ***v* remapping $\tt x$ to $\tt y$**.
>
> We now define the **extended variable mapping**, $\overline v$.
>
> - If $\tt x\in \text{Objs}$ then $\overline v(\tt x) = \tt x$.
> - If $\tt x\in \text{Vars}$ then $\overline v(\tt x) = v(\tt x)$.
> - If $\tt f\in\text{Funcs}$ and $n=\text{Arity}(\tt f)$, and $\tt t_1,…,\tt t_n\in\text{Terms}$, then
>
> $$
> \overline v(\tt f(\tt t_1,...,\tt t_n)) = \tt f^{इ}(\overline v(\tt t_1),...,\overline v(\tt t_n))
> $$
>
> For a formula $\tt \phi\in\text{Forms}$, model $म$, and variable assignment *v*, we will define what it means for **the model and assignment to satisfy the formula**, denoted
>
> $$
> म,v\vDash \tt \phi
> $$
>
> We use $म,v\not\vDash\tt \phi$ to express that $म, v\vDash \tt \phi$ does not hold.
>
> - If $\tt P\in\text{Preds}$ and $n=\text{Arity}(\tt P)$ and $\tt t_1,…,\tt t_n\in\text{Terms}$, and if we have
>
>     $$
>     (\overline v(\tt t_1),...,\overline v(\tt t_n))\in \tt P^{इ}
>     $$
>
>     then $म,v\vDash \tt P(\tt t_1,…,\tt t_n)$.
>
> - If $\tt \phi,\tt \psi\in\text{Form}$ then
>     - If $म,v\not\vDash \tt \phi$ then $म,v\vDash (\tt \neg \tt \phi)$.
>     - If $म,v\vDash \tt \phi$ and $म,v\vDash \tt \psi$ then $म,v\vDash (\tt \phi\tt \land\tt \psi)$.
>     - If $म,v\vDash \tt \phi$ or $म,v\vDash \tt \psi$ then $म,v\vDash (\tt \phi\tt \lor\tt \psi)$.
>     - If $म,v\not\vDash \tt \phi$ or $म,v\vDash \tt \psi$ then $म,v\vDash (\tt \phi\to\tt \psi)$.
>     - If $म,v\vDash \tt \phi \to \tt \psi$ and $म,v\vDash \tt \psi\to\tt \phi$ then $म,v\vDash (\tt \phi\tt \leftrightarrow\tt \psi)$.
>     - Suppose that $\tt x\in \text{Vars}$, and for every $u\inउ$ we have $म,v[\tt x\mapsto u]\vDash \tt \phi$. Then $म,v\vDash (\tt \forall \tt x\tt \phi)$.
>     - Suppose that $\tt x\in \text{Vars}$ and for some $u\inउ$ we have $म,v[\tt x\mapsto u]\vDash \tt \phi$. Then $म,v\vDash (\tt \exists \tt x\tt \phi)$.
>
> Finally we can define **truth in the model $म$**.
>
> Let $\tt \phi$ be a closed formula. Then we say that $\tt \phi$ is **true in the model $म$**, and write $म\vDash \tt \phi$, if for every variable assignment *v* we have $म,v\vDash \tt \phi$.

Another reason why we will avoid actually using this rigorous definition: In my opinion, these ideas don’t significantly help your understanding of other mathematical topics like algebra and topology. Remember, we’re studying logic because it’s inherently interesting, yes—but also, so that we may apply it to understanding other mathematical subjects.

---

However, we will need a few ideas, even if we do not emphasize their rigorous definition. We will need to understand the idea of a formula, and free and bound variables. Rather than follow the formal definition, we just gesture at the idea with a few examples.

In the following expression, the variables $\tt x$ and $\tt y$ are free while $\tt w$ and $\tt z$ are not.

$$
\tt \forall \tt x(\tt P(\tt x)\to \tt \exists \tt y((\tt \neg \tt R(\tt x,\tt y)\tt \land \tt Q(\tt f(\tt y,\tt z))))
$$