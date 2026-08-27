# Chapter 6: Quantifier Syntax and Semantics

# Introduction

Consider a sentence like “every dog deserves pets”. 

![image.png](Chapter%205%20First-order%20Logic/image.png)

If we were to express this in predicate syntax, first we would need a name for every dog. That would be a lot of names, like

$$
d_1,d_2,d_3,...,d_{10^{9}}
$$

for each of about a billion doggies.

Already this is uncomfortably large, to be listing every individual.  But then we would need to say that each one deserves pets.  Ok, so we make a predicate “needs pets”, let’s say it’s *N*.

Then we need to form the very long conjunction 

$$
P(d_1)\land P(d_2)\land\cdots\land P(d_{10^9})
$$

But in English, the sentence is much simpler and shorter—we just use a phrase like “all”.  

Of course there is a parallel idea for disjunction: Consider the sentence “Some chimpanzee deserves pets.”

![image.png](Chapter%205%20First-order%20Logic/image%201.png)

Yep, that’s true for this chimp!  

But maybe not the next one.

![image.png](Chapter%205%20First-order%20Logic/image%202.png)

To express this proposition, we’ll need to name every chimp,

$$
c_1,...,c_{10^6}
$$

and then assert 

$$
P(c_1)\lor\cdots\lor P(c_{10^6})
$$

The point being that “all” indicates a long conjunction of a predicate, over every individual in the domain. “Some” indicates a long disjunction of a predicate, over every individual in the domain.  

---

The above only considers a finite domain, like the set of all doggies or the set of all chimps.  

But in math we’ll often need to discuss an infinite domain, like in the sentence “Every number divisible by 4 is divisible by 2.” The natural domain for this statement is the set of integers, and so we are claiming “If 0 is divisible by 4 then 0 is divisible by 2, and if 1 is divisible by 4 then 1 is divisible by 2, and if -1 …”

This is like an “infinitely long conjunction”, which is a kind of expression our logical system is not yet able to accommodate.  Expressions in a language should always be finite.  

So what we need therefore, is a system of finite expressions which refer to something like an infinite conjunction.

And of course there is a parallel for disjunction.  In the sentence “there is an integer larger than $\pi^{100}$” we are essentially saying “either 0 is larger than $\pi^{100}$, or 1 is larger than $\pi^{100}$, or -1 is larger than $\pi^{100}$, or …”

---

Whenever we want to make a claim about all objects within the domain, we call this “universal quantification”.  This is indicated by words like “all”, “every”, “each”, and so on.  

Whenever we want to make a claim that there is some object within the domain, we call this “existential quantification”.  This is indicated by words like “there is”, “there exists”, “some”, and so on. 

# Formal and Informal Syntax

Consider an expression of the form $\forall x P(x)\land Q(x)$.  How is this meant to be read? 

You could guess that it’s supposed to be equivalent to $\forall x(P(x)\land Q(x))$, effectively asserting “every *x* is *P* and *Q*”.  This is perfectly reason if only because this is the only way to parse it which would give a meaningful expression.  

However, guessing at where the parentheses are supposed to go is unpleasant, and so in our official definitions, we will not permit an expression of the form $$\forall 

# Quantifier Syntax

To express “all dogs deserve pets” let’s again us the symbol *P* for “deserves pets”.  Assuming the domain is all dogs, then we want to express that: For every *x* in the domain, *x* deserves pets.”  

We will express this with 

$$
\forall x P(x)
$$

We read the upside-down ‘A’, the $\forall$ symbol, as expressing “for all”.

So to read “$\forall xP(x)$”, this says “for all *x*” and then it claims “$P(x)$”.  This essentially says that everything has the property *P*.

In the intended interpretation, where the universe is all dogs, and *P* represents the “deserves pets” property, then $\forall xP(x)$ means that all dogs deserve pets.

If we want an existential quantifier then we would use 

$$
\exists x P(x)
$$

which says that there exists an *x* such that $P(x)$.  In the intended interpretation, that means “some dog deserves pets”.

---

To formally describe the language, we will now need to distinguish between two subtly different kinds of symbols: Those for objects and those for “variables”.  When we say “all dogs deserve pets”, this requires a variable: We need to be able to talk about Bella deserving pets, and Luna deserving pets, and Max deserving pets, and so on.  The object varies.

We can imagine that there is a kind of schema, “*x* deserves pets”.  Here *x* is a variable inside the schema.  As a schema, it doesn’t really mean anything, but as soon as we replace *x* with an object, it becomes meaningful.  If we replace *x* with “Bella” then the schema turns into the proposition “Bella deserves pets”, which we can assert and evaluate.  But then we go back to the schema “*x* deserves pets” and assign a new object to *x*, like Luna, and evaluate “Luna deserves pets”, and so on.

Therefore our new and expanded language will have to include not just object symbols but also variable symbols.  

Note that a schema like “*x* deserves pets” is meaningless by itself, because *x* is a variable and does not have a definition.  On the other hand, “For all *x*, *x* deserves pets.” is meaningful, because it effectively states “No matter what we replace *x* with: *x* deserves pets.”  That is a proposition—it has meaning which our semantics should be able to evaluate.

So the lesson here is that an expression with a “free variable” is not a proposition, and does not have a semantics.  A free variable is one which is not bound by any quantifier.  An expression in which every term is either an object (which has a fixed semantics) or is a bound variable, is a meaningful expression (a “closed formula”).

***Definition***

Let $\text{Objs},\text{Vars},\text{Funcs},\text{Preds}$ be disjoint sets, and assume the symbol $=\ \in\text{Preds}$.  Assume $\text{Preds}$ is nonempty.  

Let $\text{Arity}:\text{Funcs}\cup\text{Preds}\to \Bbb N$ be an arity function.  

The set

$$
\Sigma=\text{Objs}\cup\text{Vars}\cup\text{Funcs}\cup \text{Preds}\cup \{(,),=,\boldsymbol ,\}
$$

is then **an alphabet for a first-order language**.  

We define the set of **terms**, $\text{Terms}$, recursively.  

- $\text{Objs}\cup\text{Vars}\subseteq \text{Terms}$
- If $f\in \text{Funcs}$ and $n=\text{Arity}$, and if $t_1,…,t_n\in\text{Terms}$, then $f(t_1,…,t_n)\in \text{Terms}$.

Assume that *a* is an object symbol, *x* a variable symbol, and + a binary function symbol which we write with infix notation.  

Examples of terms include *a*, *x*, and $a+(x+a)$.

***Definition***

The definition of **atomic formulas**, $\text{Atoms}$, is exactly as before.  

Assume that *P* is a unary predicate, *R* a binary predicate.  

Examples of atomic formulas include $P(a),P(x),$ and $R(a+x,x+x)$.

***Definition***

We again define the notion of a **formula**, although we now call the set of formulas $\text{Forms}$.  The definition is exactly as before, except for the additional recursive rule,

- If $\phi\in\text{Forms}$ then $\exists x\phi, \forall x\phi \in \text{Forms}$.

Examples of formulas include $P(a),P(x),$ and $\forall y\exists z (R(x+a,x)\lor (\neg(P(a))))$.

***Definition***

We define the function $\text{FreeVars}:\text{Terms}\cup \text{Forms}\to \text{Vars}$.

- If $t\in\text{Objs}$ then $\text{FreeVars}(t)=\emptyset$.
- If $t\in \text{Vars}$ then $\text{FreeVars}(t)=\{t\}$.
- If $t\in \text{Terms}$, and $t = f(t_1,t_2,…,t_n)$ where $f\in\text{Funcs}$, and $t_1,…,t_n\in \text{Terms}$, then $\text{FreeVars}(t)=\text{FreeVars}(t_1)\cup \cdots\cup \text{FreeVars}(t_n)$.
- If $\phi\in \text{Atoms}$ and $\phi = P(t_1,…,t_n)$ where $P\in\text{Preds}$ and $t_1,…,t_n\in\text{Terms}$, then $\text{FreeVars}(\phi) = \text{FreeVars}(t_1)\cup \cdots\cup \text{FreeVars}$.
- If $\phi\in\text{Forms}$, and $\phi=\neg\chi$, then $\text{FreeVars}(\phi) = \text{FreeVars}(\chi)$.
- If $\phi\in\text{Forms}$ and $\Box\in\{\land,\lor,\to,\leftrightarrow\}$, and $\phi=\chi\Box\psi$, then $\text{FreeVars}(\phi) = \text{FreeVars}(\chi)\cup\text{FreeVars}(\psi)$.
- If $\phi\in\text{Forms}$ and $\Box\in\{\forall,\exists\}$, and $x\in\text{Vars}$, and $\phi=\Box x \psi$, then $\text{FreeVars}(\phi) = \text{FreeVars}(\psi)\smallsetminus \{x\}$.

Examples of the use of $\text{FreeVars}$ are

- $\text{FreeVars}(a)=\emptyset$
- $\text{FreeVars}(x)=\{x\}$
- $\text{FreeVars}(R(x,a))$ is equal to

$$
\begin{aligned}
\text{FreeVars}(R(x,a)) &= \text{FreeVars}(x)\cup\text{FreeVars}(a) \\&= \{x\}\cup\emptyset \\
 &=\{x\}
\end{aligned}
$$

- $\text{FreeVars}(\forall xR(x,a))$ is

$$
\begin{aligned}
 \text{FreeVars}&(\forall x(R(x,a)\leftrightarrow P(x))) = \text{FreeVars}(R(x,a)\leftrightarrow P(x)) \smallsetminus \{x\} \\
 &= (\text{FreeVars}(R(x,a))\cup \text{FreeVars}(P(x))) \smallsetminus \{x\}\\
 &= (\text{FreeVars}(x)\cup\text{FreeVars}(a)\cup \text{FreeVars}(x))\smallsetminus \{x\} \\
 &= (\{x\}\cup \emptyset \cup \{x\})\smallsetminus \{x\} \\
 &= \emptyset
\end{aligned}
$$

***Definition***

A formula, $\phi$, is called a **closed formula** if $\text{FreeVars}(\phi) = \emptyset$.

The formula $\forall x R(x,a)$ is a closed formula.  

Although $\text{FreeVars}(a)=\emptyset$, the expression *a* is not a free variable, simply because it is not a formula.

***Definition***

We then define the language, $L\subseteq \Sigma^*$, by 

$$
L = \{\phi\in\Sigma^*: \phi \text{ is a closed formula}\}
$$

*L* is called a **first-order language**.  

- Why “first-order”?
    
    You may be wondering why we call this a “first-order” language.  
    
    The reason is because our quantifiers are only over *elements* of the domain.  
    
    It turns out that there are such things as “second-order logic” and “third-order” and so on.  Here the quantifiers permit quantification over elements—but they also permit quantification over *subsets*, which is to say, they allow quantification over properties.  
    
    These languages are interesting, but are not strictly needed for the rest of our mathematical studies.  Therefore this course will not discuss such logics, but the reader is encouraged to refer to other texts which do.  
    

***Exercise***

Let $\text{Objs}=\{a,b,c,…,t\}$ and let $\text{Vars}=\{u,v,w,x,y,z\}$.  Assume that every capital letter is a predicate symbol.  Let $\text{Funcs}=\{+\}$.

Classify each of the following expressions as either a term, or formula, or neither.  In either case, determine its set of free variables.  

Assume that in each case, the function or predicate symbols are applied to the appropriate number of terms—that is to say, assume that the arity matches the number of terms. 

1. $\forall xP(y,z)$
2. $x+R(y)$
3. $(\neg Q(S)\to \forall xT(x))$
4. $\forall x\exists y(A(x,y,x+y)\lor B(a))$
5. $x+y$
6. $a+(a+a)$

# Quantifier Semantics

The semantics for a quantified formula now requires more than just an interpretation.  Somehow, we need to be able to take a closed formula like $\forall xP(x)$, give some kind of temporary denotation to *x*, and then assess whether the resulting $P(x)$ is true.

For this we use the notion of a “remapping”. We will use the interpretation, $\mathcal I$, but remap it so that it can temporarily interpret *x*.

***Definition***

Let *L* be a first-order language, $\mathcal U$ any nonempty set which we call the **universe**.  

To each $a\in\text{Objs}\cup\text{Vars}$ the function $\mathcal I$ assigns an element of the universe.  This is denoted 

$$
a^{\mathcal I}\in\mathcal U
$$

To each $P\in\text{Preds}$ the function $\mathcal I$ assigns a subset of the universe.  This is denoted 

$$
P^{\mathcal I}\subseteq \mathcal U
$$

For any variable, $x\in \text{Vars}$, and domain element $u\in\mathcal U$, we define the **remapping of $\mathcal I$**, denoted by $\mathcal I[x\mapsto u]$.  This remapping is a function with domain $\text{Objs}\cup\text{Vars}$, and codomain $\mathcal U$, defined by the following.

$$
a^{\mathcal I[x\mapsto u]} = a^{\mathcal I} \ \text{ if } a\ne x\\
a^{\mathcal I[x\mapsto u]} = u\text{ if } a=x
$$

To make up a random example, let $\text{Objs} = \{a,b\}, \text{Vars} = \{x, y\}$.  

Let $\mathcal U = \Bbb Z$ and define $\mathcal I$ by 

$$
\begin{aligned}
 a^{\mathcal I} &= 1 \\
 b^{\mathcal I} &= 2 \\
 x^{\mathcal I} &= 0 \\
 y^{\mathcal I} &= 1
\end{aligned}
$$

And again just for a random exercise, we’ll consider the remapping $\mathcal I[x\mapsto 3]$.  

Because $a\ne x$ then $a^{\mathcal I[x\mapsto 3]} = a^{\mathcal I} = 1$.  By the same logic, $b^{\mathcal I[x\mapsto 3]}=2$.

But because $x=x$ then $x^{\mathcal I[x\mapsto 3]} = 3$.  

On the other hand, $y\ne x$ and so $y^{\mathcal I[x\mapsto 3]} = y^{\mathcal I} = 1$.

***Definition***

If $t\in\text{Terms}$ then $t^{\mathcal I}$ is defined the same as before.  If $P\in\text{Preds}$ then $P^{\mathcal I}$ is defined the same as before.  

The pair $\mathcal M=(\mathcal U,\mathcal I)$ is called a **first-order model**.

Let $\phi\in\text{Forms}$.  We define $\phi^{\mathcal M}$ the same as before, but with this extension:

Suppose that $\phi  = \forall x \psi$ where $x\in \text{Vars}$ and $\psi \in\text{Forms}$.  Then $\phi^{\mathcal M}=T$ if for every $u\in\mathcal U$ we have $\psi^{(\mathcal U,\mathcal I[x\mapsto u])} = T$.  Otherwise $\phi^{\mathcal M} = F$.

Suppose that $\phi=\exists x\psi$ where $x\in \text{Vars}$ and $\psi\in\text{Forms}$.  Then $\phi^{\mathcal M} = T$ if for some $u\in\mathcal U$ we have $\psi^{(\mathcal U,\mathcal I[x\mapsto u])} = T$.  Otherwise $\phi^{\mathcal M} = F$.  

For any $\phi\in\text{Forms}$ we say that $\phi^{\mathcal M}$ is the **evaluation of $\phi$ in $\mathcal M$**.

For example, let’s suppose that $\text{Objs} = \{a\}$ and $\text{Vars} = \{x\}$, and $\text{Funcs} = \{f\}$, and $\text{Preds} = \{G\}$, where $\text{Arity}(f)=1$ and $\text{Arity}(G) = 2$.

Further suppose that 

$$
\begin{aligned}
 \mathcal U &= \Bbb N \\
 a^{\mathcal I} &= 1 \\
 x^{\mathcal I} &= 1 \\
 f^{\mathcal I} &= \text{the successor function}
\end{aligned}
$$