# Chapter 5: First-order Logic

We now take the scaffolding of propositional logic, and develop it into a more powerful system called “first-order logic”.

Throughout this chapter it will help to keep in mind how you would develop a language to talk about the real numbers. Recall that the real numbers can be thought of as “every possible decimal expansion”. The decimal expansion, for example, of 3/2 is 1.5. And the decimal expansion of 1/3 is the infinite expansion 0.333…

Later we’ll have more to say about decimal expansions and the formal construction of real numbers. But at least for now, this is a simple start to thinking about the real numbers.

Some examples: Every integer and rational number is a real number. But then there are some real numbers, like $\sqrt 2$ and $\pi$, which are real numbers but not rational. Later in this course we will actually *prove* that $\sqrt 2$ is real but not rational, whereas proving this for $\pi$ is a bit beyond the scope of this course.

Note that $\sqrt 2$ doesn’t look like a “decimal expansion”. But there is a sequence of decimal numerals which is equivalent to $\sqrt 2$.

$$
\sqrt 2 = 1.4142...
$$

Now what does this have to do with logic?

First of all notice that the “number of real numbers” is enormous. It is clearly infinite, and bigger than the rational numbers in the sense that the rational numbers are a subset of the real numbers. In fact, this doesn’t even fully capture the way in which the real numbers are bigger than the rational numbers — we’ll have more to say about that later.

But one thing is clear: Our language cannot, in any practical sense, name every single real number. Of course each real number is an infinite decimal sequence — you might therefore argue that one can regard the decimal sequence as the “name” of the number.

However, that’s not practical. We can only practically write down finitely many digits of any decimal expansion. We will never fully name any number, if we were to use that system.

Alternately, we can name a real number by symbols like $\sqrt 2$ and $\pi$. These names fully identify the decimal sequence. When we write $\sqrt 2$, this refers to the exact number — in a sense, referring to its entire completed decimal expansion.

But for all practical purposes, our collection of names can only be finite. We might grow the set of names, but at any given moment in our use of language, we will only have specifically named finitely many real numbers. And yet there is an infinity of real numbers, and we will often want to reason about all of them, or certain infinite subsets of them.

In this chapter we will introduce the notion of predicates and objects. These ideas help us to analyze language. They help to make our logical system a bit more expressive. But they have relatively little to do with the issue of trying to talk about an infinite set of objects.

After that we introduce “quantifiers”. We use quantifiers to represent our how our logical system will express statements regarding “all” or “some” elements of the domain. Especially in the case of the real numbers, quantifiers are our solution to the question “how do we productively talk and reason about an infinite set, when we can only name finitely many of its elements?”

# “All” and “Some”

Consider a sentence like “every dog deserves pets”.

![image.png](Chapter%205%20First-order%20Logic/image.png)

If we were to express this in predicate syntax, first we would need a name for every dog. That would be a lot of names, like

$$
d_1,d_2,d_3,...,d_{10^{9}}
$$

for each of about a billion doggies.

Already this is uncomfortably large, to be listing every individual. But then we would need to say that each dog deserves pets. Ok, so we make a predicate “deserves pets”, let’s say it’s *D*.

Then we need to form the very long conjunction

$$
D(d_1)\land D(d_2)\land\cdots\land D(d_{10^9})
$$

But in English, the sentence is much simpler and shorter—we just use a phrase like “all”.

Of course there is a parallel idea for disjunction: Consider the sentence “Some chimpanzee deserves pets.”

![image.png](Chapter%205%20First-order%20Logic/image%201.png)

Yep, this chimp deserves pets!

But maybe not the next one.

![image.png](Chapter%205%20First-order%20Logic/image%202.png)

To express “some chimps deserve pets” we’ll need to name every chimp,

$$
c_1,...,c_{10^6}
$$

and then assert

$$
D(c_1)\lor\cdots\lor D(c_{10^6})
$$

The point being that “all” indicates a long conjunction of a predicate, over every individual in the domain. “Some” indicates a long disjunction of a predicate, over every individual in the domain.

---

The above only considers a finite domain, like the set of all doggies or the set of all chimps.

But in math we’ll often need to discuss an infinite domain, like in the sentence “Every number divisible by 4 is divisible by 2.” The natural domain for this statement is the set of integers, and so we are claiming “If 0 is divisible by 4 then 0 is divisible by 2, and if 1 is divisible by 4 then 1 is divisible by 2, and if -1 …”

This is like an “infinitely long conjunction”. But an infinitely long sentence is not actually possible.

Therefore we need a system of finite expressions, which is able to make claims about an infinite domain.

And of course there is a parallel for disjunction. In the sentence “there is an integer larger than $\pi^{100}$” we are essentially saying “either 0 is larger than $\pi^{100}$, or 1 is larger than $\pi^{100}$, or -1 is larger than $\pi^{100}$, or …”

---

Whenever we want to make a claim about all objects within the domain, we call this “universal quantification”. This is indicated by words like “all”, “every”, “each”, and so on.

Whenever we want to make a claim that there is some object within the domain, we call this “existential quantification”. This is indicated by words like “there is”, “there exists”, “some”, and so on.

# Quantifiers over Properties

We are now going to add quantifiers to our predicate logic. The result is called first-order logic, which we officially define later.

To express “every dog deserves pets” in first-order logic, we will write

$$
\forall x D(x)
$$

The upside-down ‘A’ is read as “for all”. So the literal reading of this expression is

> For all *x*, *x* deserves pets.

We assume that the “domain of discourse” here is the set of all dogs.

To express “some chimp deserves pets” we write

$$
\exists xD(x)
$$

Note that here we are switching the domain of discourse, and now we assume that “$\exists x$” means “exists a chimp”.

How do we know what the domain of discourse is, at any moment? It is usually understood from context. If we are ever worried about a misunderstanding, we can always state the domain of discourse explicitly.

> [!definition] ***Definition***
>
> *Syntax*
>
> We assume that we have sets of symbols for
>
> - Objects
> - Functions
> - Variables
> - Properties
>
> None of these sets overlap, and none of them contain parentheses, logical connectives, or commas.
>
> **Terms** are defined as before, except that now both objects and variables are terms.
>
> Let *P* be a property symbol, and *x* a variable symbol.
>
> The expression $\forall x P(x)$ is called the **universal quantification of *P* over *x***.
>
> The expression $\exists xP(x)$ is called the **existential quantification of *P* over *x***.
>
> Any proposition that is formed as a predicate formula, or a predicate formulas with universal or existential quantification over all of its variables, is called a **first-order formula** (or just **formula** for short). #TODO

Let $\varphi$ be a formula. Let *x* $\varphi$$\phi$ …

- Note, this only defines a narrowly restricted case.
    
    The above definition does not define quantification over general predicates. It only defines quantification over properties.

All of these are examples of first-order propositions.

$$
\exists x D(x)\\
\forall x P(a,x)\leftrightarrow \neg\exists z(Q(z)\lor Z(z,b))\\
R(a,b,c)
$$

The following are not first-order propositions.

$$
\exists D(x)\\
\forall xP(y,x) \leftrightarrow \neg \exists z (Q(z)\lor Z(z,b)) \\
R(x,b,c)\\
\forall a S(a)
$$

The first is not because it is simply malformed: the existential quantifier requires a variable.

The second is not because the variable *y* is not bounded by a quantifier. All variables must be bounded.

The third is not for the same reason, although this time *x* is the unbounded quantifier.

The fourth is not because it uses a constant symbol *a* in quantification. Quantification requires the use of a variable.

> [!exercise] ***Exercise***
>
> Classify each of the following as first-order formulas or not.
>
> 1. $\forall x\forall yT(x,y,y,x)$
> 2. $\exists aA(a,a)$
> 3. $\neg \exists v Q(v)$
> 4. $\exists v \neg Q(v)$
> 5. $\forall x P$

> [!definition] ***Definition***
>
> *Semantics*
>
> Let $\mathfrak{U}$ be the domain of discourse and $\mathfrak{M}$ a model.
>
> We assign $(\forall x P(x))^{\mathfrak{M}}=\mathfrak{T}$ if for every choice of $u\in \mathfrak{U}$ we have $u\in P^{\mathfrak{M}}$. Otherwise $(\forall xP(x))^{\mathfrak{M}}=\mathfrak{F}$.
>
> We assign $(\exists xP(x))^{\mathfrak{M}} = \mathfrak{T}$ if there is some choice of $u\in \mathfrak{U}$ such that $u\in P^{\mathfrak{M}}$. Otherwise $(\exists xP(x))^{\mathfrak{M}} = \mathfrak{F}$.

To give an example, suppose the domain is the set of these objects:

![image.png](Chapter%205%20First-order%20Logic/image%203.png)

Let the predicate *R* denote a red object, *B* blue, *W* white, *K* black, *C* cone, *S* sphere, *C* cube, *Y* cylinder, *T* tetrahedron, and *P* a rectangular prism.

Then $\forall x R(x)^{\mathfrak{M}}=\mathfrak{F}$ because not all of the objects in the domain are red.

However $\exists xR(x)^{\mathfrak{M}}=\mathfrak{T}$ because some object in the domain is red.

> [!exercise] ***Exercise***
>
> Let $\mathfrak{U} = \Bbb N$. Let $P(x)$ be the predicate “*x* is positive”, and $Q(x)$ is the predicate “*x* is negative”, and $R(x)$ the predicate “*x* is equal to 1”.
>
> Decide which of the following is true.
>
> 1. $\forall xP(x)$
> 2. $\exists x P(x)$
> 3. $\forall x Q(x)$
> 4. $\exists x Q(x)$
> 5. $\forall x R(x)$
> 6. $\exists x R(x)$

> [!exercise] ***Exercise***
>
> Let $P(x)$ be the predicate “*x* is even”.
>
> For each choice of universe, decide whether $\forall xP(x)$ and $\exists x P(x)$ are true.
>
> 1. $\mathfrak{U} = \Bbb Z$.
> 2. $\mathfrak{U} = \Bbb N$.
> 3. $\mathfrak{U} = \{x\in\Bbb N: x \text{ is prime}\}$.
> 4. $\mathfrak{U} = \{2\}$.

Of course we don’t have to live with only simple predicates—we can join them into more complex expressions, using the propositional logic from before.

If we refer back to the colorful shapes in the image above, here are some true quantified statements about them:

$\forall x(B(x)\to \neg C(x))$

$\exists x(W(x)\land S(x))$

$\forall x(K(x)\to W(x))$

$\neg \exists x K(x)$

$\exists x \neg R(x)$

Respectively, these say

1. Every blue object is not a cone.
2. There is a white sphere.
3. Every black object is white.
4. There does not exist a black object.
5. There exists an object which is not red.

Notice that (3) above is kind of funny—but technically true!

Don’t believe me? Test it out using the official semantics!

Pick any object, like say, the red cube. Let’s call it *u*. Now let’s evaluate $(K(u)\to W(u))^{\mathfrak{M}}$. By the semantics of the conditional, this is $(K(u))^{\mathfrak{M}} \leadsto (W(u))^{\mathfrak{M}}$. Because *u* is not black, $K(u)^{\mathfrak{M}}=\mathfrak{F}$. Because *u* is not white, $W(u)^{\mathfrak{M}}=\mathfrak{F}$. Therefore

$$
\begin{aligned}
 (K(u)\to W(u))^{\mathfrak{M}} &= K(u)^{\mathfrak{M}}\leadsto W(u)^{\mathfrak{M}} \\
 &= \mathfrak{F}\leadsto \mathfrak{F} \\
 &= \mathfrak{T}
\end{aligned}
$$

So it’s true for the red cube!

> [!exercise] ***Exercise***
>
> Now let *u* be the white cylinder. Evaluate $(K(u)\to W(u))^{\mathfrak{M}}$.
>
> Next, explain why $(\forall x (K(x)\to W(x))^{\mathfrak{M}} = \mathfrak{T}$.

> [!exercise] ***Exercise***
>
> Let’s consider a property, *P,* and a model, $\mathfrak{M}$, such that $P(u)^{\mathfrak{M}} = \mathfrak{T}$ for every choice of *u* in the domain.
>
> Certain it follows that $\forall x P(x)^{\mathfrak{M}}=\mathfrak{T}$.
>
> Now prove that $\forall x(P(x)\lor Q(x))^{\mathfrak{M}}=\mathfrak{T}$.
>
> Also prove that $(\forall x P(x)\lor \forall x Q(x))^{\mathfrak{M}}=\mathfrak{T}$.

> [!exercise] ***Exercise***
>
> Consider a property, *P*, and model, $\mathfrak{M}$, such that $(P(u)\lor Q(u))^{\mathfrak{M}} = \mathfrak{T}$ for every *u* in the domain.
>
> It follows immediately by definition that $\forall x(P(x)\lor Q(x))^{\mathfrak{M}}=\mathfrak{T}$.
>
> Is it necessarily true that $\forall xP(x)\lor\forall x Q(x)$?
>
> Hint: What if the model has domain elements *a* and *b*, such that
>
> $$
> P(a)^{\mathfrak{M}}=\mathfrak{T}\\
> P(b)^{\mathfrak{M}}=\mathfrak{F}\\
> Q(a)^{\mathfrak{M}}=\mathfrak{F}\\
> Q(b)^{\mathfrak{M}}=\mathfrak{T}
> $$

# Set Properties, Operations, and Relations

There is a direct connection between the familiar set operations, on the one hand, and the logical constructs that we’ve developed so far.

Consider for example the set of all even natural numbers, $X = \{2,4,…\}$, which in set-builder notation is

$$
X=\{x\in \Bbb N:x \text{ is even}\}
$$

Notice that this set is defined by the “is even” property. If we use the symbol *E* for the “is even” property, then the following proposition is true (in a model with universe $\Bbb N$).

$$
\forall x(x\in X\leftrightarrow E(x))
$$

The above expression says that “*x* is an element of *X* if and only if *x* is even”. This is more than just true, it is in fact the definition of the set *X*!

We have previously said that any set, *Y*, can be defined some property, call it $\varphi(x)$. Specifically, if the universe is *U*, then *Y* can be defined as

$$
Y = \{x\in U: \varphi(x)\}
$$

Well, this is just the same thing as saying

$$
\forall x(x\in Y\leftrightarrow \varphi(x))
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

Then the union, $A\cup B$, is the set of all elements in *A* or *B*. Put into a logical expression,

$$
A\cup B = \{x\in U: x\in A\lor x\in B\}
$$

Notice the use of the logical operator, $\lor$.

In fact, we could even state the definition of the union with quantifier logic *instead* of set-builder notation:

$$
\forall x(x\in A\cup B\leftrightarrow (x\in A\lor x\in B))
$$

This expression “says” that *x* is an element of $A\cup B$, if and only if *x* is either in *A* or *B*.

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
> What is the relationship between sets *A* and *B*, if the following proposition is true?
>
> $$
> \forall x(x\in A\leftrightarrow x\in B)
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

Consider the domain of all humans on the planet, and the relation $L(x,y)$ which represents “*x* loves *y*”.

Now consider the different meanings of each of the following propositions.

- $\forall x\forall y L(x,y)$
- $\forall x\exists y L(x,y)$
- $\exists x\forall y L(x,y)$
- $\exists x\exists y L(x,y)$

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

Let’s use $L(x,y)$ to mean “*x* is linked to *y* by a road”. So for example $L(a,b)$ is true while $L(a,d)$ is not.

Let’s also use $N(x,y)$ to mean “*x* is lexically next after *y*”. Note that $N(b,a)$ is true because *b* is lexically next after *a*. However, $N(c,a)$ is not true.

Here is a sentence that should be true: For any two cities, *x* and *y*, if *x* is lexically next after *y* then *x* is linked to *y*. In a formula, this is

$$
\forall x\forall y(N(x,y) \to L(x,y))
$$

Intuitively this is true because we see four pairs where one city is lexically next: A and B, B and C, C and D, and D and E. In every case, the pair of cities are linked, as you can see in the graph.

To evaluate $(\forall x\forall y(N(x,y)\to L(x,y)))^{\mathfrak{M}}$ formally, we need to consider five total possible assignments to *x*.

- $x\mapsto a$
- $x\mapsto b$
- $x\mapsto c$
- $x\mapsto d$
- $x\mapsto e$

Let’s consider these each in turn.

- $x\mapsto a$

With this assignment we now have to evaluate $(\forall y (N(a,y)\to L(a,y)))^{\mathfrak{M}}$. To do this we again need to consider five possible assignments to *y*.

  - $y\mapsto a$

    With this assignment we now have to evaluate $(N(a,a)\to L(a,a))^{\mathfrak{M}}$. Noting that $N(a,a)^{\mathfrak{M}}=\mathfrak{F}$ and $L(a,a)^{\mathfrak{M}}=\mathfrak{T}$, then

    $$
    \begin{aligned}
     (N(a,a)\to L(a,a))^{\mathfrak{M}} &= N(a,a)^{\mathfrak{M}} \leadsto L(a,a)^{\mathfrak{M}} \\
     &= \mathfrak{F}\leadsto \mathfrak{T} \\
     &= \mathfrak{T}
    \end{aligned}
    $$

  - $y\mapsto b$

    With this assignment

    $$
    \begin{aligned}
     (N(a,b)\to L(a,b))^{\mathfrak{M}} &= N(a,b)^{\mathfrak{M}} \leadsto L(a,b)^{\mathfrak{M}} \\
     &= \mathfrak{T}\leadsto \mathfrak{T} \\
     &= \mathfrak{T}
    \end{aligned}
    $$

  - $y\mapsto c$

    $$
    \begin{aligned}
     (N(a,c)\to L(a,c))^{\mathfrak{M}} &= N(a,c)^{\mathfrak{M}} \leadsto L(a,c)^{\mathfrak{M}} \\
     &= \mathfrak{F}\leadsto \mathfrak{T} \\
     &= \mathfrak{T}
    \end{aligned}
    $$

  - $y\mapsto d$

    $$
    \begin{aligned}
     (N(a,d)\to L(a,d))^{\mathfrak{M}} &= N(a,d)^{\mathfrak{M}} \leadsto L(a,d)^{\mathfrak{M}} \\
     &= \mathfrak{F}\leadsto \mathfrak{F} \\
     &= \mathfrak{T}
    \end{aligned}
    $$

  - $y\mapsto e$

    $$
    \begin{aligned}
     (N(a,e)\to L(a,e))^{\mathfrak{M}} &= N(a,e)^{\mathfrak{M}} \leadsto L(a,e)^{\mathfrak{M}} \\
     &= \mathfrak{F}\leadsto \mathfrak{F} \\
     &= \mathfrak{T}
    \end{aligned}
    $$

    As we see, when $x\mapsto a$, then for every possible mapping of *y*, we get a true proposition.

    Therefore $(\forall y(N(a,y)\to L(a,y)))^{\mathfrak{M}} = \mathfrak{T}$.

- $x\mapsto b$

  > [!exercise] ***Exercise***
  >
  > Perform this assignment and evaluate $(\forall y(N(b,y)\to L(b,y)))^{\mathfrak{M}}$.

- $x\mapsto c$

  > [!exercise] ***Exercise***
  >
  > Perform this assignment and evaluate the relevant proposition.

- $x\mapsto d$

  - $y\mapsto a$

    $$
    \begin{aligned}
     (N(d,a)\to L(d,a))^{\mathfrak{M}} &= N(d,a)^{\mathfrak{M}} \leadsto L(d,a)^{\mathfrak{M}} \\
     &= \mathfrak{F}\leadsto \mathfrak{F} \\
     &= \mathfrak{T}
    \end{aligned}
    $$

  - $y\mapsto b$

    With this assignment

    $$
    \begin{aligned}
     (N(d,b)\to L(a,b))^{\mathfrak{M}} &= N(d,b)^{\mathfrak{M}} \leadsto L(d,b)^{\mathfrak{M}} \\
     &= \mathfrak{F}\leadsto \mathfrak{T} \\
     &= \mathfrak{T}
    \end{aligned}
    $$

  - $y\mapsto c$

    $$
    \begin{aligned}
     (N(d,c)\to L(d,c))^{\mathfrak{M}} &= N(d,c)^{\mathfrak{M}} \leadsto L(d,c)^{\mathfrak{M}} \\
     &= \mathfrak{F}\leadsto \mathfrak{T} \\
     &= \mathfrak{T}
    \end{aligned}
    $$

  - $y\mapsto d$

    $$
    \begin{aligned}
     (N(d,d)\to L(d,d))^{\mathfrak{M}} &= N(d,d)^{\mathfrak{M}} \leadsto L(d,d)^{\mathfrak{M}} \\
     &= \mathfrak{F}\leadsto \mathfrak{F} \\
     &= \mathfrak{T}
    \end{aligned}
    $$

  - $y\mapsto e$

    $$
    \begin{aligned}
     (N(d,e)\to L(d,e))^{\mathfrak{M}} &= N(d,e)^{\mathfrak{M}} \leadsto L(d,e)^{\mathfrak{M}} \\
     &= \mathfrak{T}\leadsto \mathfrak{T} \\
     &= \mathfrak{T}
    \end{aligned}
    $$

    As we see, when $x\mapsto d$, then for every possible mapping of *y*, we get a true proposition.

    Therefore $(\forall y(N(a,y)\to L(a,y)))^{\mathfrak{M}} = \mathfrak{T}$.

- $x\mapsto e$

We should check this case too, but I promise $(\forall y(N(e,y)\to L(e,y)))^{\mathfrak{M}}=\mathfrak{T}$. However, you are invited to check for yourself if you would like more exercise.

The above now confirms that, for every possible assignment to *x*, the resulting proposition is true.

Therefore it demonstrates $(\forall x\forall y (N(x,y)\to L(x,y)))^{\mathfrak{M}}$.

> [!exercise] ***Exercise***
>
> Using the same city and road diagram, solve the following exercises.
>
> You don’t always have to make every single assignment. For example, to show $\forall x\exists y L(x,y)$ is true, you do need to show that it is true for every possible assignment to *x*. So this means that you need to check *at least* five assignments to *x*.
>
> Now if you were very flat-footed, you would then check five assignments to *y*. If at least one of those assignments is true, then the existential proposition is true.
>
> But this is more effort than you really need to do. When it comes to an existential quantifier, you really just need to exhibit *one* instance of $\mathfrak{T}$, not *every* instance of $\mathfrak{T}$. So, for each assignment of *x*, if you find one satisfying assignment of $\mathfrak{T}$, you can stop early!
>
> 1. Show that
>
>     $$
>     \forall x\exists y L(x,y)
>     $$
>
>     is true. (Hint: With an appropriate choice of assignments, this only requires evaluating five propositions. Further hint: For any choice of *x*, it is not linked to itself!)
>
> 2. Show that
>
>     $$
>     \exists x\forall y L(x,y)
>     $$
>
>     is true. (With an appropriate choice of assignments, this only requires evaluating five propositions.)
>
> 3. Show that
>
>     $$
>     \forall x\forall y L(x,y)
>     $$
>
>     is false. (With an appropriate choice of assignments, this only requires evaluating *one* proposition!)
>
> 4. Show that
>
>     $$
>     \forall x\forall y(L(x,y)\to N(x,y))
>     $$
>
>     is false. (With an appropriate choice of assignments, this only requires evaluating one proposition.)
>
> 5. Show that
>
>     $$
>     \exists x \exists y (L(x,y)\land\neg N(x,y))
>     $$
>
>     is true. (With an appropriate choice of assignments, this requires only evaluating one proposition.)
>
> 6. Show that $\exists x L(x,x)$ is false. This requires evaluating five propositions.

# First-order Logic

Up to this point I’ve been pretty dogged in presenting the formal syntax and semantics of each logical system that we consider: First with propositional logic and then with predicate logic.

But now consider a formula like the following.

$$
\forall x\exists y(R(x,y) \to S(y,y,a))
$$

This has many-place relations, and nested quantifiers. This is a more general instance of a first-order formula.

As you can see below, the rigorous definition of the syntax and semantics for first-order logic is long and complex. I don’t recommend that you actually read the following definition in detail—we will not use it through the rest of the course.

> [!definition] ***Definition***
>
> *Syntax*
>
> Note that we will use a bold comma: $\boldsymbol ,$. This is a distinct symbol from our simple comma. We do so in order to tell the difference between a comma used in our regular language, and a comma used inside our first-order syntax.
>
> Let $\text{Un}=\{\neg\}$, $\text{Bins} = \{\land,\lor,\to,\leftrightarrow\}$, and $\text{Quants} = \{\forall, \exists\}$. These, respectively, are the sets of **unary connectives**, **binary** **connectives**, and **quantifier symbols**.
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
> Let $f\in \text{Funcs}$ and $n = \text{Arity}(f)$, and let $t_1,…,t_n$ be terms. Then $f(t_1,…,t_n)$ is a **term**.
>
> We define $\text{Term}$ to be the **set of terms**,
>
> $$
> \text{Term} = \{t \in \Sigma^*:t\text{ is a term}\}
> $$
>
> Let $P\in \text{Preds}$ and $n = \text{Arity}(P)$, and let $t_1,...,t_n$ be terms. Then $P(t_1\boldsymbol ,t_2\boldsymbol ,…\boldsymbol,t_n)$ is called an **atomic formula**. Every atomic formula is a **first-order formula**.
>
> If $\phi,\psi$ are any two first-order formulas, and $\Box\in\text{Bins}$, and $\Diamond\in\text{Quants}$, and $x\in \text{Vars}$, then the following are also **first-order formulas**.
>
> - $(\neg \phi)$
> - $(\phi\Box\psi)$
> - $(\Diamond x \phi)$
>
> We define $\text{Forms}$ to be the **set of first-order formulas**,
>
> $$
> \text{Forms} = \{\phi\in\Sigma^*:\phi \text{ is a first-order formula}\}
> $$
>
> We define a function $\text{Free}:\text{Term}\cup\text{Forms}\to \mathcal P(\text{Vars})$ recursively. Let $\Box\in\text{Bins}$ and $\Diamond\in\text{Quants}$ and $x\in \text{Vars}$. Let $\phi,\psi\in\text{Forms}$.
>
> - If $x\in \text{Objs}$ then $\text{Free}(x) = \emptyset$.
> - If $x\in \text{Vars}$ then $\text{Free}(x) = \{x\}$.
> - If $f\in \text{Funcs}$ and $n=\text{Arity}(f)$ and if $t_1,…,t_n\in\text{Terms}$, then
>
>     $$
>     \text{Free}(f(t_1,...,t_n)) = \text{Free}(t_1)\cup \dots \cup \text{Free}(t_n)
>     $$
>
> - If $P\in \text{Preds}$ and $n=\text{Arity}$, and if $t_1,…,t_n\in\text{Terms}$, then
>
>     $$
>     \text{Free}(P(t_1,...,t_n)) = \text{Free}(t_1)\cup\cdots \cup \text{Free}(t_n)
>     $$
>
> - $\text{Free}((\neg \phi)) = \text{Free}(\phi)$
> - $\text{Free}((\phi\Box\psi)) = \text{Free}(\phi)\cup \text{Free}(\psi)$
> - $\text{Free}((\Diamond x\phi)) = \text{Free}(\phi)\smallsetminus \{x\}$
>
> We call $\text{Free}(\phi)$ the **set of free variables of $\phi$**.
>
> If $\phi \in \text{Forms}$ and $\text{Free}(\phi)=\emptyset$, then we say that $\phi$ is a **closed formula**.
>
> We denote the **set of closed formulas**,
>
> $$
> \text{Closeds} = \{\phi\in\text{Forms}: \text{Free}(\phi) = \emptyset\}
> $$

> [!definition] ***Definition***
>
> *Semantics*
>
> We use the same sets as above for the syntax.
>
> Let $\mathfrak{U}$ be any nonempty set, called the **universe**.
>
> Let $\mathfrak{I}$ be a function such that, for each $a\in \text{Obj}$, the expression $a^{\mathfrak{I}}$ is the **interpretation of *a***, which denotes the element of $\mathfrak{U}$ to which *a* is mapped.
>
> $$
> a^{\mathfrak{I}} \in \mathfrak{U}
> $$
>
> Moreover let $f\in \text{Funcs}$ and $n=\text{Arity}(f)$. The expression $f^{\mathfrak{I}}$ is the **interpretation of *f***, which denotes the function to which *f* is mapped.
>
> $$
> f^{\mathfrak{I}}:\mathfrak{U}^n\to\mathfrak{U}
> $$
>
> Moreover, let $P\in \text{Preds}$ and $n=\text{Arity}$. The expression $P^{\mathfrak{I}}$ is the **interpretation of *P***, which denotes the subset of $\mathfrak{U}^n$ to which *P* is mapped.
>
> $$
> P^{\mathfrak{I}} \subseteq \mathfrak{U}^n
> $$
>
> Let $\mathfrak{M} = (\mathfrak{U},\mathfrak{I})$.
>
> Let $v: \text{Vars}\to \mathfrak{U}$ be a function, which we call a **variable assignment**.
>
> We define the notation $v[x\mapsto y]$ to be the function
>
> $$
> v[x\mapsto y](z) = \begin{cases}
> v(z) & \text{ if } z\ne x\\
> y & \text{ if } z = x
> \end{cases}
> $$
>
> We call $v[x\mapsto y]$ the function ***v* remapping *x* to *y***.
>
> We now define the **extended variable mapping**, $\overline v$.
>
> - If $x\in \text{Objs}$ then $\overline v(x) = x$.
> - If $x\in \text{Vars}$ then $\overline v(x) = v(x)$.
> - If $f\in\text{Funcs}$ and $n=\text{Arity}(f)$, and $t_1,…,t_n\in\text{Terms}$, then
>
> $$
> \overline v(f(t_1,...,t_n)) = f^{\mathfrak{I}}(\overline v(t_1),...,\overline v(t_n))
> $$
>
> For a formula $\phi\in\text{Forms}$, model $\mathfrak{M}$, and variable assignment *v*, we will define what it means for **the model and assignment to satisfy the formula**, denoted
>
> $$
> \mathfrak{M},v\vDash \phi
> $$
>
> We use $\mathfrak{M},v\not\vDash\phi$ to express that $\mathfrak{M}, v\vDash \phi$ does not hold.
>
> - If $P\in\text{Preds}$ and $n=\text{Arity}$ and $t_1,…,t_n\in\text{Terms}$, and if we have
>
>     $$
>     (\overline v(t_1),...,\overline v(t_n))\in P^{\mathfrak{I}}
>     $$
>
>     then $\mathfrak{M},v\vDash P(t_1,…,t_n)$.
>
> - If $\phi,\psi\in\text{Form}$ then
>     - If $\mathfrak{M},v\not\vDash \phi$ then $\mathfrak{M},v\vDash (\neg \phi)$.
>     - If $\mathfrak{M},v\vDash \phi$ and $\mathfrak{M},v\vDash \psi$ then $\mathfrak{M},v\vDash (\phi\land\psi)$.
>     - If $\mathfrak{M},v\vDash \phi$ or $\mathfrak{M},v\vDash \psi$ then $\mathfrak{M},v\vDash (\phi\lor\psi)$.
>     - If $\mathfrak{M},v\not\vDash \phi$ or $\mathfrak{M},v\vDash \psi$ then $\mathfrak{M},v\vDash (\phi\to\psi)$.
>     - If $\mathfrak{M},v\vDash \phi \to \psi$ and $\mathfrak{M},v\vDash \psi\to\phi$ then $\mathfrak{M},v\vDash (\phi\leftrightarrow\psi)$.
>     - Suppose that $x\in \text{Vars}$, and for every $u\in\mathfrak{U}$ we have $\mathfrak{M},v[x\mapsto u]\vDash \phi$. Then $\mathfrak{M},v\vDash (\forall x\phi)$.
>     - Suppose that $x\in \text{Vars}$ and for some $u\in\mathfrak{U}$ we have $\mathfrak{M},v[x\mapsto u]\vDash \phi$. Then $\mathfrak{M},v\vDash (\exists x\phi)$.
>
> Finally we can define **truth in the model $\mathfrak{M}$**.
>
> Let $\phi$ be a closed formula. Then we say that $\phi$ is **true in the model $\mathfrak{M}$**, and write $\mathfrak{M}\vDash \phi$, if for every variable assignment *v* we have $\mathfrak{M},v\vDash \phi.

Another reason why we will avoid actually using this rigorous definition: In my opinion, these ideas don’t significantly help your understanding of other mathematical topics like algebra and topology. Remember, we’re studying logic because it’s inherently interesting, yes—but also, so that we may apply it to understanding other mathematical subjects.

---

However, we will need a few ideas, even if we do not emphasize their rigorous definition. We will need to understand the idea of a formula, and free and bound variables. Rather than follow the formal definition, we just gesture at the idea with a few examples.

In the following expression, the variables *x* and *y* are free while *w* and *z* are not.

$$
\forall x(P(x)\to \exists y((\neg R(x,y)\land Q(f(y,z))))
$$