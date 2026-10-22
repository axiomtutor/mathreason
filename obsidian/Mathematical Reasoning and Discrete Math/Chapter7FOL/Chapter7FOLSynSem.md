

# First-order Logic

Up to this point I’ve been pretty dogged in presenting the formal syntax and semantics of each logical system that we consider: First with propositional logic and then with predicate logic.

But now consider a formula like the following.

$$
{\tt \forall} {\tt x}{\tt \exists} {\tt y}({\tt R}({\tt x},{\tt y}) {\tt \to} {\tt S}({\tt y},{\tt y},{\tt a}))
$$

This has many-place relations, and nested quantifiers. This is a more general instance of a first-order formula.

As you can see below, the rigorous definition of the syntax and semantics for first-order logic is long and complex. I don’t recommend that you actually  read the following definition in detail—we will not use it through the rest of the course.

> [!definition] ***Definition***
>
> *Syntax*
>
> Note that we will use a bold comma: ${\tt \boldsymbol ,}$. This is a distinct symbol from our simple comma. We do so in order to tell the difference between a comma used in our regular language, and a comma used inside our first-order syntax.
>
> Let $\text{Un}=\{{\tt \neg}\}$, $\text{Bins} = \{{\tt \land},{\tt \lor},{\tt \to},{\tt \leftrightarrow}\}$, and $\text{Quants} = \{{\tt \forall}, {\tt \exists}\}$. These, respectively, are the sets of **unary connectives**, **binary** **connectives**, and **quantifier symbols**.
>
> Let $\text{Objs}, \text{Vars}, \text{Funcs}$, and $\text{Preds}$ be three nonempty sets such that each of the following sets are disjoint: $\text{Objs},\text{Vars},\text{Funcs},\text{Preds},\text{Un},\text{Bins},\text{Quants}$, and $\{{\tt (},{\tt )},{\tt \boldsymbol ,}\}$. The first four of these are, respectively, the set of **object symbols**, **variable symbols**, **function symbols**, **predicate symbols**.
>
> The set
>
> $$
> \begin{aligned}
> \Sigma=&\text{Objs}\cup\text{Vars}\\
> &\cup\text{Funcs}\cup\text{Preds}\\&\cup\text{Un}\cup\text{Bins}\\
> &\cup\text{Quants}\cup\{{\tt (},{\tt )},{\tt \boldsymbol,}\}
> \end{aligned}
> $$
>
> is an **alphabet of a first-order language**.
>
> Let $\text{Arity}: \text{Funcs}\cup \text{Preds}\to \{0,1,2,...\}$ be a function, called **the arity function**.
>
> Every element of $\text{Objs}\cup \text{Vars}$ is a **term**.
>
> Let ${\tt f}\in \text{Funcs}$ and $n = \text{Arity}({\tt f})$, and let ${\tt t_1},…,{\tt t_n}$ be terms. Then ${\tt f}({\tt t_1},…,{\tt t_n})$ is a **term**.
>
> We define $\text{Term}$ to be the **set of terms**,
>
> $$
> \text{Term} = \{{\tt t} \in \Sigma^*:{\tt t}\text{ is a term}\}
> $$
>
> Let ${\tt P}\in \text{Preds}$ and $n = \text{Arity}({\tt P})$, and let ${\tt t_1},...,{\tt t_n}$ be terms. Then ${\tt P}({\tt t_1}\boldsymbol ,{\tt t_2}\boldsymbol ,…\boldsymbol,{\tt t_n})$ is called an **atomic formula**. Every atomic formula is a **first-order formula**.
>
> If ${\tt \phi},{\tt \psi}$ are any two first-order formulas, and ${\tt \Box}\in\text{Bins}$, and ${\tt \Diamond}\in\text{Quants}$, and ${\tt x}\in \text{Vars}$, then the following are also **first-order formulas**.
>
> - $({\tt \neg} {\tt \phi})$
> - $({\tt \phi}{\tt \Box}{\tt \psi})$
> - $({\tt \Diamond} {\tt x} {\tt \phi})$
>
> We define $\text{Forms}$ to be the **set of first-order formulas**,
>
> $$
> \text{Forms} = \{{\tt \phi}\in\Sigma^*:{\tt \phi} \text{ is a first-order formula}\}
> $$
>
> We define a function $\text{Free}:\text{Term}\cup\text{Forms}\to \mathcal P(\text{Vars})$ recursively. Let ${\tt \Box}\in\text{Bins}$ and ${\tt \Diamond}\in\text{Quants}$ and ${\tt x}\in \text{Vars}$. Let ${\tt \phi},{\tt \psi}\in\text{Forms}$.
>
> - If ${\tt x}\in \text{Objs}$ then $\text{Free}({\tt x}) = \emptyset$.
> - If ${\tt x}\in \text{Vars}$ then $\text{Free}({\tt x}) = \{{\tt x}\}$.
> - If ${\tt f}\in \text{Funcs}$ and $n=\text{Arity}({\tt f})$ and if ${\tt t_1},…,{\tt t_n}\in\text{Terms}$, then
>
>     $$
>     \text{Free}({\tt f}({\tt t_1},...,{\tt t_n})) = \text{Free}({\tt t_1})\cup \dots \cup \text{Free}({\tt t_n})
>     $$
>
> - If ${\tt P}\in \text{Preds}$ and $n=\text{Arity}({\tt P})$, and if ${\tt t_1},…,{\tt t_n}\in\text{Terms}$, then
>
>     $$
>     \text{Free}({\tt P}({\tt t_1},...,{\tt t_n})) = \text{Free}({\tt t_1})\cup\cdots \cup \text{Free}({\tt t_n})
>     $$
>
> - $\text{Free}(({\tt \neg} {\tt \phi})) = \text{Free}({\tt \phi})$
> - $\text{Free}(({\tt \phi}{\tt \Box}{\tt \psi})) = \text{Free}({\tt \phi})\cup \text{Free}({\tt \psi})$
> - $\text{Free}(({\tt \Diamond} {\tt x}{\tt \phi})) = \text{Free}({\tt \phi})\smallsetminus \{{\tt x}\}$
>
> We call $\text{Free}({\tt \phi})$ the **set of free variables of ${\tt \phi}$**.
>
> If ${\tt \phi} \in \text{Forms}$ and $\text{Free}({\tt \phi})=\emptyset$, then we say that ${\tt \phi}$ is a **closed formula**.
>
> We denote the **set of closed formulas**,
>
> $$
> \text{Closeds} = \{{\tt \phi}\in\text{Forms}: \text{Free}({\tt \phi}) = \emptyset\}
> $$

> [!definition] ***Definition***
>
> *Semantics*
>
> We use the same sets as above for the syntax.
>
> Let $उ$ be any nonempty set, called the **universe**.
>
> Let $इ$ be a function such that, for each ${\tt a}\in \text{Obj}$, the expression ${\tt a}^{इ}$ is the **interpretation of ${\tt a}$**, which denotes the element of $उ$ to which ${\tt a}$ is mapped.
>
> $$
> {\tt a}^{इ} \in उ
> $$
>
> Moreover let ${\tt f}\in \text{Funcs}$ and $n=\text{Arity}({\tt f})$. The expression ${\tt f}^{इ}$ is the **interpretation of ${\tt f}$**, which denotes the function to which ${\tt f}$ is mapped.
>
> $$
> {\tt f}^{इ}:उ^n\toउ
> $$
>
> Moreover, let ${\tt P}\in \text{Preds}$ and $n=\text{Arity}({\tt P})$. The expression ${\tt P}^{इ}$ is the **interpretation of ${\tt P}$**, which denotes the subset of $उ^n$ to which ${\tt P}$ is mapped.
>
> $$
> {\tt P}^{इ} \subseteq उ^n
> $$
>
> Let $म = (उ,इ)$.
>
> Let $v: \text{Vars}\to उ$ be a function, which we call a **variable assignment**.
>
> We define the notation $v[{\tt x}\mapsto {\tt y}]$ to be the function
>
> $$
> v[{\tt x}\mapsto {\tt y}]({\tt z}) = \begin{cases}
> v({\tt z}) & \text{ if } {\tt z}\ne {\tt x}\\
> {\tt y} & \text{ if } {\tt z} = {\tt x}
> \end{cases}
> $$
>
> We call $v[{\tt x}\mapsto {\tt y}]$ the function ***v* remapping ${\tt x}$ to ${\tt y}$**.
>
> We now define the **extended variable mapping**, $\overline v$.
>
> - If ${\tt x}\in \text{Objs}$ then $\overline v({\tt x}) = {\tt x}$.
> - If ${\tt x}\in \text{Vars}$ then $\overline v({\tt x}) = v({\tt x})$.
> - If ${\tt f}\in\text{Funcs}$ and $n=\text{Arity}({\tt f})$, and ${\tt t_1},…,{\tt t_n}\in\text{Terms}$, then
>
> $$
> \overline v({\tt f}({\tt t_1},...,{\tt t_n})) = {\tt f}^{इ}(\overline v({\tt t_1}),...,\overline v({\tt t_n}))
> $$
>
> For a formula ${\tt \phi}\in\text{Forms}$, model $म$, and variable assignment *v*, we will define what it means for **the model and assignment to satisfy the formula**, denoted
>
> $$
> म,v\vDash {\tt \phi}
> $$
>
> We use $म,v\not\vDash{\tt \phi}$ to express that $म, v\vDash {\tt \phi}$ does not hold.
>
> - If ${\tt P}\in\text{Preds}$ and $n=\text{Arity}({\tt P})$ and ${\tt t_1},…,{\tt t_n}\in\text{Terms}$, and if we have
>
>     $$
>     (\overline v({\tt t_1}),...,\overline v({\tt t_n}))\in {\tt P}^{इ}
>     $$
>
>     then $म,v\vDash {\tt P}({\tt t_1},…,{\tt t_n})$.
>
> - If ${\tt \phi},{\tt \psi}\in\text{Form}$ then
>     - If $म,v\not\vDash {\tt \phi}$ then $म,v\vDash ({\tt \neg} {\tt \phi})$.
>     - If $म,v\vDash {\tt \phi}$ and $म,v\vDash {\tt \psi}$ then $म,v\vDash ({\tt \phi}{\tt \land}{\tt \psi})$.
>     - If $म,v\vDash {\tt \phi}$ or $म,v\vDash {\tt \psi}$ then $म,v\vDash ({\tt \phi}{\tt \lor}{\tt \psi})$.
>     - If $म,v\not\vDash {\tt \phi}$ or $म,v\vDash {\tt \psi}$ then $म,v\vDash ({\tt \phi}{\tt \to}{\tt \psi})$.
>     - If $म,v\vDash {\tt \phi} {\tt \to} {\tt \psi}$ and $म,v\vDash {\tt \psi}{\tt \to}{\tt \phi}$ then $म,v\vDash ({\tt \phi}{\tt \leftrightarrow}{\tt \psi})$.
>     - Suppose that ${\tt x}\in \text{Vars}$, and for every $u\inउ$ we have $म,v[{\tt x}\mapsto u]\vDash {\tt \phi}$. Then $म,v\vDash ({\tt \forall} {\tt x}{\tt \phi})$.
>     - Suppose that ${\tt x}\in \text{Vars}$ and for some $u\inउ$ we have $म,v[{\tt x}\mapsto u]\vDash {\tt \phi}$. Then $म,v\vDash ({\tt \exists} {\tt x}{\tt \phi})$.
>
> Finally we can define **truth in the model $म$**.
>
> Let ${\tt \phi}$ be a closed formula. Then we say that ${\tt \phi}$ is **true in the model $म$**, and write $म\vDash {\tt \phi}$, if for every variable assignment *v* we have $म,v\vDash {\tt \phi}$.

Another reason why we will avoid actually using this rigorous definition: In my opinion, these ideas don’t significantly help your understanding of other mathematical topics like algebra and topology. Remember, we’re studying logic because it’s inherently interesting, yes—but also, so that we may apply it to understanding other mathematical subjects.

---

However, we will need a few ideas, even if we do not emphasize their rigorous definition. We will need to understand the idea of a formula, and free and bound variables. Rather than follow the formal definition, we just gesture at the idea with a few examples.

In the following expression, the variables ${\tt x}$ and ${\tt y}$ are free while ${\tt w}$ and ${\tt z}$ are not.

$$
{\tt \forall} {\tt x}({\tt P}({\tt x}){\tt \to} {\tt \exists} {\tt y}(({\tt \neg} {\tt R}({\tt x},{\tt y}){\tt \land} {\tt Q}({\tt f}({\tt y},{\tt z}))))
$$

# Functions

We are studying logic, to study math.  One of the most central things that we understand in mathematics, is how to solve an equation, like 

$$ \tt 2x+1=13 $$

How are we going to represent such a thing in logic?

We're not entirely ready to address this question in its entirety.  But certainly any answer is going to have to say something about functions.

In particular, the part of the expression $\tt 2x+1$ is a function.

Let's say that we use the symbols ${\tt o}$ for 1 and ${\tt t}$ for 2.  Let's now further agree that we use the symbol ${\tt f}$ for the "times two" function.  That is to say, we will use ${\tt f}$ to denote the function $g(x)=2x$. 

> [!note]- ${\tt f}$ is in the object language, not $g$.
 > Note that we are using the symbol ${\tt f}$ for a symbol in the logical language.  $g$ is not in the logical language (called the "object language").  $g$ is in the function itself, which we say is in the "metalanguage".  The metalanguage is the language that I am writing to you in: English, or a mathy version of English.  
> 
> If this is confusing, note that it is exactly the same distinction as having a symbol like '${\tt a}$' in the logical language, but the symbol refers to the person, Adam.  It is the distinction between syntax and semantics: ${\tt a}$ is in the syntax, the person to whom it refers, Adam, is in the semantics.
> 
> In the current context, ${\tt f}$ is the symbol in the syntax, $g$ is the actal function that it refers to, in the semantics.

Then suppose that we want to interpret the object referred to by ${\tt f}({\tt o})$.  Intuitively this should be the function, $g$, applied to the number 1.  That is 

$$ g(1) = 2(1) = 2 $$

This is what we will eventually ensure when we define the semantics of functions.

But now notice that we will also need to have a certain collection of symbols that are reserved for functions.  It is tradition to use ${\tt f}, {\tt g}, {\tt h}$ and perhaps more after that.  But here, the tradition is not especially clear: Is ${\tt i}$ a constant or function?

Well, luckly, we do not rely on tradition.  If there is ever ambiguity, we can always just resolve it by declaring explicitly our symbol sets for constants (recall, $\text{Consts}$), variables (from now on, $\text{Vars}$), functions ($\text{Funcs}$), and predicates ($\text{Preds}$).  

These sets of symbols are allowed to be literally any nonempty sets, with the caveat that they cannot overlap.  If any object were both a constant and a function symbol, it would introduce unnecessary and unpleasant ambiguity when trying to read a formula.

Similarly none of these sets are allowed to contain parentheses, since that would create readability issues.  For example if the left paren, ), were a constant symbol then we would have annoying difficulty reading "${\tt P}{\tt (}{\tt )}{\tt )}$".  For similar reasons, none of the sets may contain logical connectives, like ${\tt \neg}$ or ${\tt \forall}$, nor may they contain commas.

Finally let's notice that not all functions have just one input.  Consider the function $h(x,y)=2x + \pi y$.  

We have already discused the concept of "arity" with regard to predicates, and the same idea applies to functions.  The function above has arity 2.  If it is represented by the symbol $\tt h$, then we also say that $\tt h$ has arity 2.

# Function Composition

Just as propositions can be "put together" using the connectives, also functions can be "put together".  The fundamental way that we put functions together is by "composition".

Consider for example the functions $f(x)=2\sqrt{x}$ and $g(x)=x+3$.  You may be familiar with composition from earlier math courses.  For example, you may already know that that the composition of $f$ with $g$ is written $f\circ g$, and its definition is given by 

$$ (f\circ g)(x) = f(g(x)) $$

In this particular example, this means 

$$\begin{aligned}
 (f\circ g)(x) &= f(g(x)) \\
 & = f(x+3) \\
 & = 2\sqrt{x+3}
\end{aligned}$$

This means that if we wanted to evaluate the function $f\circ g$ at input $x=2$ then we may calculate 

$$ \begin{aligned}
 (f\circ g)(2) &= 2\sqrt{2+3}\\
 &= 2\sqrt 5
\end{aligned}$$

It may be gratifying to know that function composition is, in fact, *substitution*!  You already learned about substitution for the purposes of an inference rule in an earlier chapter.  Well, happily, your understanding of substitution will now start paying dividends.  

Using notation like we previously have for substitution, $f(g(x))$ means the same thing as $[f(x)]_{x:=g(x)}$.  That is to say, the composition $f(g(x))$ means 

> Take $f(x)$ and replace every instance of *x* with $g(x)$.  

Therefore 
$$\begin{aligned}
 f(g(x)) &= [f(x)]_{x:= g(x)} \\
 &= [2\sqrt x]_{x:=x+3} \\
 &= 2\sqrt{\colorbox{yellow}{$x+3$}}
\end{aligned}$$

I have highlighted where *x* has been substituted for $x+3$ above.

Let's see another and more complex example.  For instance, let $h(x)=x^2+2x-1$ and $i(x)=2^x-\frac 1 x$.  We will find an equivalent expression for $h\circ i$.  Again, the idea is that every instance of *x* in *h* is replaced by *i*.

$$\begin{aligned}
 (h\circ i)(x) &= [h(x)]_{x:= i(x)} \\
 &= [x^2+2x-1]_{x:= 2^x - \frac 1 x} \\
 &= \colorbox{yellow}{$\left(2^x-\frac 1 x \right)$} ^2 + 2 \colorbox{yellow}{$\left(2^x-\frac 1 x\right)$} - 1
\end{aligned}$$

We will not bother with so-called "simplifcation", and leave this as our representation of $(h\circ i)(x)$.  

> [!exercise] ***Exercise***
> Using *h* and *i* as above, find the formula for the composition $i\circ h$.
>
> Using *f* and *g* above, find $g\circ f$.

# Terms 

"Terms" are a generalization of objects.  We have already established that constants are objects.  Also variables are objects.  Although variables do not name a particular element in the domain, they do refer to various elements in the domain.  

Anything that refers to an object, we call a term.  So constants and variables are all instances of terms.

But also, functions refer to elements in the domain. For example, suppose we use the domain of natural numbers, and the function $f(x,y) = x+y$.  Then $f(2,1) = 2+1$ refers to the element 3.

If $\tt f$ is a function symbol of arity *n*, and $\tt x_1,x_2,...,x_n$ are *n* object symbols, then 

$$ \tt f(x_1,x_2,...,x_n)$$

is a term.  

Moreover, if $\tt g$ and $\tt h$ are function symbols with arity 1, and $\tt x$ an object symbol (either constant or variable), then $\tt f(g(x))$ is also a term.  

> [!definition] ***Definition***
> 
> *Syntax*
> 
> Suppose that we have sets of symbols, $\text{Consts}, \text{Vars, Funcs}$, which respectively denote the sets of constant symbols, variable symbols, and function symbols.  We assume that none of these overlap, and none of them contains parentheses, logical connectives, or commas.  Let $\text{Arity}$ be an arity function.
> 
> Any ${\tt a}\in \text{Consts}\cup\text{Vars}$ is called an **object symbol** and is a **term**.
> 
> Let ${\tt f}\in\text{Funcs}$ and assume $\text{Arity}(\mathtt f) = n$.  Let ${\tt t_1,t_2,...,t_n}$ be a collection of terms.  
> 
> Then $\tt f(t_1,t_2,...,t_n)$ is a **term**. 

Suppose that we have
* $\text{Consts} = \{{\tt a,b,c}\}$,
* $\text{Vars}=\{{\tt x,y,z}\}$,
* $\text{Funcs} = \{{\tt f,g,h}\}$.
* $\text{Arity}(\mathtt f)=1, \text{Arity}(\mathtt g) = 2,\text{Arity}(\mathtt h) = 3$

Then $\tt a$ is a term, because it is an object symbol.

Likewise $\tt x$ is a term.

$\tt f$ is not a term.  However, since its arity is 1, and since $\tt a$ is a term, then 
$$\tt f(a) $$

is a term.  

$\tt g(a)$ is not a term, because the arity of $\tt g$ is 2.  But 
$$\tt g(b,f(x)) $$

is a term.  

> [!exercise]  ***Exercise***
> Decide which of the following are terms and which are not.
> 
> 1. $\tt ax$
> 2. $\tt fa$
> 3. $\tt g(f(x), g(a,b))$
> 4. $\tt h(h,h,h)$

# 


# First-order Syntax

> [!definition] ***Definition***
>
> *Syntax*
>
> We assume that we have sets of symbols for
>
> - Constants, $\text{Consts}$,
> - Variables, $\text{Vars}$,
> - Functions, $\text{Funcs}$,
> - Predicates, $\text{Preds}$
>
> None of these sets overlap, and none of them contain parentheses, logical connectives, or commas.
>
> Let ${\tt P}\in\text{Preds}$ be a property symbol, and ${\tt x}$ a variable symbol.
>
> The expression ${\tt \forall} {\tt x} {\tt P}({\tt x})$ is called the **universal quantification of ${\tt P}$ over ${\tt x}$**.
>
> The expression ${\tt \exists} {\tt x} {\tt P}({\tt x})$ is called the **existential quantification of ${\tt P}$ over ${\tt x}$**.
>
> Any proposition that is formed as a predicate formula, or a predicate formula with universal or existential quantification over all of its variables, is called a **first-order formula** (or just **formula** for short). #TODO

 > [!note]- Note, this only defines a narrowly restricted case.
 > The above definition does not define quantification over general predicates. It only defines quantification over properties.

All of these are examples of first-order propositions.

$$
{\tt \exists} {\tt x} {\tt D}({\tt x})\\
{\tt \forall} {\tt x} {\tt P}({\tt a},{\tt x}){\tt \leftrightarrow} {\tt \neg}{\tt \exists} {\tt z}({\tt Q}({\tt z}){\tt \lor} {\tt Z}({\tt z},{\tt b}))\\
{\tt R}({\tt a},{\tt b},{\tt c})
$$

The following are not first-order propositions.

$$
{\tt \exists} {\tt D}({\tt x})\\
{\tt \forall} xP({\tt y},{\tt x}) {\tt \leftrightarrow} {\tt \neg} {\tt \exists} {\tt z} ({\tt Q}({\tt z}){\tt \lor} {\tt Z}({\tt z},{\tt b})) \\
{\tt R}({\tt x},{\tt b},{\tt c})\\
{\tt \forall} {\tt a} {\tt S}({\tt a})
$$

The first is not because it is simply malformed: the existential quantifier requires a variable.

The second is not because the variable ${\tt y}$ is not bounded by a quantifier. All variables must be bounded.

The third is not for the same reason, although this time ${\tt x}$ is the unbounded quantifier.

The fourth is not because it uses a constant symbol ${\tt a}$ in quantification. Quantification requires the use of a variable.

> [!exercise] ***Exercise***
>
> Classify each of the following as first-order formulas or not.
>
> 1. ${\tt \forall} {\tt x}{\tt \forall} {\tt y}{\tt T}({\tt x},{\tt y},{\tt y},{\tt x})$
> 2. ${\tt \exists} {\tt a}{\tt A}({\tt a},{\tt a})$
> 3. ${\tt \neg} {\tt \exists} {\tt v} {\tt Q}({\tt v})$
> 4. ${\tt \exists} {\tt v} {\tt \neg} {\tt Q}({\tt v})$
> 5. ${\tt \forall} {\tt x} {\tt P}$

> [!definition] ***Definition***
>
> *Semantics*
>
> Let $उ$ be the domain of discourse and $म$ a model.
>
> We assign $({\tt \forall} {\tt x} {\tt P}({\tt x}))^{म}=ट$ if for every choice of $u\in उ$ we have $u\in {\tt P}^{म}$. Otherwise $({\tt \forall} {\tt x}{\tt P}({\tt x}))^{म}=फ$.
>
> We assign $({\tt \exists} {\tt x}{\tt P}({\tt x}))^{म} = ट$ if there is some choice of $u\in उ$ such that $u\in {\tt P}^{म}$. Otherwise $({\tt \exists} xP({\tt x}))^{म} = फ$.

To give an example, suppose the domain is the set of these objects:

![image.png](Chapter%205%20First-order%20Logic/image%203.png)

Let the predicate ${\tt R}$ denote a red object, ${\tt B}$ blue, ${\tt W}$ white, ${\tt K}$ black, ${\tt C}$ cone, ${\tt S}$ sphere, ${\tt U}$ cube, ${\tt Y}$ cylinder, ${\tt T}$ tetrahedron, and ${\tt P}$ a rectangular prism.

Then $({\tt \forall} {\tt x} {\tt R}({\tt x}))^{म}=फ$ because not all of the objects in the domain are red.

However $({\tt \exists} {\tt x}{\tt R}({\tt x}))^{म}=ट$ because some object in the domain is red.

> [!exercise] ***Exercise***
>
> Let $उ = \Bbb N$. Let ${\tt P}({\tt x})$ be the predicate “${\tt x}$ is positive”, and ${\tt Q}({\tt x})$ is the predicate “${\tt x}$ is negative”, and ${\tt R}({\tt x})$ the predicate “${\tt x}$ is equal to 1”.
>
> Decide which of the following is true.
>
> 1. ${\tt \forall} {\tt x}{\tt P}({\tt x})$
> 2. ${\tt \exists} {\tt x} {\tt P}({\tt x})$
> 3. ${\tt \forall} {\tt x} {\tt Q}({\tt x})$
> 4. ${\tt \exists} {\tt x} {\tt Q}({\tt x})$
> 5. ${\tt \forall} {\tt x} {\tt R}({\tt x})$
> 6. ${\tt \exists} {\tt x} {\tt R}({\tt x})$

> [!exercise] ***Exercise***
>
> Let ${\tt P}({\tt x})$ be the predicate “${\tt x}$ is even”.
>
> For each choice of universe, decide whether ${\tt \forall} {\tt x}{\tt P}({\tt x})$ and ${\tt \exists} {\tt x} {\tt P}({\tt x})$ are true.
>
> 1. $उ = \Bbb Z$.
> 2. $उ = \Bbb N$.
> 3. $उ = \{{\tt x}\in\Bbb N: {\tt x} \text{ is prime}\}$.
> 4. $उ = \{2\}$.

Of course we don’t have to live with only simple predicates—we can join them into more complex expressions, using the propositional logic from before.

If we refer back to the colorful shapes in the image above, here are some true quantified statements about them:

${\tt \forall} {\tt x}({\tt B}({\tt x}){\tt \to} {\tt \neg} {\tt C}({\tt x}))$

${\tt \exists} {\tt x}({\tt W}({\tt x}){\tt \land} {\tt S}({\tt x}))$

${\tt \forall} {\tt x}({\tt K}({\tt x}){\tt \to} {\tt W}({\tt x}))$

${\tt \neg} {\tt \exists} {\tt x} {\tt K}({\tt x})$

${\tt \exists} {\tt x} {\tt \neg} {\tt R}({\tt x})$

Respectively, these say

1. Every blue object is not a cone.
2. There is a white sphere.
3. Every black object is white.
4. There does not exist a black object.
5. There exists an object which is not red.

Notice that (3) above is kind of funny—but technically true!

Don’t believe me? Test it out using the official semantics!

Pick any object, like say, the red cube. Let’s call it *u*. Now let’s evaluate $({\tt K}(u){\tt \to} {\tt W}(u))^{म}$. By the semantics of the conditional, this is $({\tt K}(u))^{म} \leadsto ({\tt W}(u))^{म}$. Because *u* is not black, ${\tt K}(u)^{म}=फ$. Because *u* is not white, ${\tt W}(u)^{म}=फ$. Therefore

$$
\begin{aligned}
 ({\tt K}(u){\tt \to} {\tt W}(u))^{म} &= {\tt K}(u)^{म}\leadsto {\tt W}(u)^{म} \\
 &= फ\leadsto फ \\
 &= ट
\end{aligned}
$$

So it’s true for the red cube!

> [!exercise] ***Exercise***
>
> Now let *u* be the white cylinder. Evaluate $({\tt K}(u){\tt \to} {\tt W}(u))^{म}$.
>
> Next, explain why $({\tt \forall} {\tt x} ({\tt K}({\tt x}){\tt \to} {\tt W}({\tt x})))^{म} = ट$.

> [!exercise] ***Exercise***
>
> Let’s consider a property, *P,* and a model, $म$, such that ${\tt P}(u)^{म} = ट$ for every choice of *u* in the domain.
>
> Certain it follows that ${\tt \forall} {\tt x} {\tt P}({\tt x})^{म}=ट$.
>
> Now prove that ${\tt \forall} {\tt x}({\tt P}({\tt x}){\tt \lor} {\tt Q}({\tt x}))^{म}=ट$.
>
> Also prove that $({\tt \forall} {\tt x} {\tt P}({\tt x}){\tt \lor} {\tt \forall} {\tt x} {\tt Q}({\tt x}))^{म}=ट$.

> [!exercise] ***Exercise***
>
> Consider a property, ${\tt P}$, and model, $म$, such that $({\tt P}(u){\tt \lor} {\tt Q}(u))^{म} = ट$ for every *u* in the domain.
>
> It follows immediately by definition that ${\tt \forall} {\tt x}({\tt P}({\tt x}){\tt \lor} {\tt Q}({\tt x}))^{म}=ट$.
>
> Is it necessarily true that ${\tt \forall} xP({\tt x}){\tt \lor}{\tt \forall} {\tt x} {\tt Q}({\tt x})$?
>
> Hint: What if the model has domain elements ${\tt a}$ and ${\tt b}$, such that
>
> $$\begin{aligned}
> {\tt P}({\tt a})^{म}=ट\\
> {\tt P}({\tt b})^{म}=फ\\
> {\tt Q}({\tt a})^{म}=फ\\
> {\tt Q}({\tt b})^{म}=ट
> \end{aligned}$$

# Set Properties, Operations, and Relations

There is a direct connection between the familiar set operations, on the one hand, and the logical constructs that we’ve developed so far.

Consider for example the set of all even natural numbers, $X = \{2,4,…\}$, which in set-builder notation is

$$
X=\{x\in \Bbb N:x \text{ is even}\}
$$

Notice that this set is defined by the “is even” property. If we use the symbol ${\tt E}$ for the “is even” property, then the following proposition is true (in a model with universe $\Bbb N$).

$$
{\tt \forall} {\tt x}({\tt x}\in {\tt X}{\tt \leftrightarrow} {\tt E}({\tt x}))
$$

The above expression says that “${\tt x}$ is an element of ${\tt X}$ if and only if ${\tt x}$ is even”. This is more than just true, it is in fact the definition of the set $X$!

We have previously said that any set, *Y*, can be defined some property, call it $\varphi(x)$. Specifically, if the universe is *U*, then *Y* can be defined as

$$
Y = \{x\in U: {\tt \varphi}(x)\}
$$

Well, this is just the same thing as saying

$$
{\tt \forall} {\tt x}({\tt x}\in {\tt Y}{\tt \leftrightarrow} {\tt \varphi}({\tt x}))
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

Then the union, $A\cup B$, is the set of all elements in ${\tt A}$ or ${\tt B}$. Put into a logical expression,

$$
{\tt A}\cup {\tt B} = \{{\tt x}\in {\tt U}: {\tt x}\in {\tt A}{\tt \lor} {\tt x}\in {\tt B}\}
$$

Notice the use of the logical operator, ${\tt \lor}$.

In fact, we could even state the definition of the union with quantifier logic *instead* of set-builder notation:

$$
{\tt \forall} {\tt x}({\tt x}\in {\tt A}\cup {\tt B}{\tt \leftrightarrow} ({\tt x}\in {\tt A}{\tt \lor} {\tt x}\in {\tt B}))
$$

This expression “says” that ${\tt x}$ is an element of $A\cup B$, if and only if ${\tt x}$ is either in $A$ or $B$.

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
> {\tt \forall} {\tt x}({\tt x}\in {\tt A}{\tt \leftrightarrow} {\tt x}\in {\tt B})
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

