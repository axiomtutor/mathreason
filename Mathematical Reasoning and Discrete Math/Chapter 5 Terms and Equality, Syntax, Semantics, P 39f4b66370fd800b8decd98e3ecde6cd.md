# Chapter 5: Terms and Equality, Syntax, Semantics, Proofs

A central interest of algebra is solving equations. For example, 

$$
x^2-1=2
$$

If we want to represent things like this in formal logic, we need names for objects like 1 and 2.  We’ve already developed a way of naming specific objects, so that job is done.

But next we’re going to need a way of combining terms into more complex expressions.  In this example, we need to take a term like *x* and then produce a term like $x^2$, and then take that and produce $x^2-1$. 

We will accomplish this by defining the idea of a “term”.

Moreover we will need a way of representing equality. Equality is really just a special kind of relation, which we already know how to handle. So this past of the task will require less work. 

# Terms

In the definition below, we extend the notion of an object.  Objects can be named, just like before, with a symbol from $\text{Objs}$.  But we now include an additional set of function symbols.  

Just like predicate symbols, function symbols have an arity, which is the number of things to which they can apply.  When a function symbol is applied to the appropriate number of terms, then the result is a term.  

Once we have established that, we revise our definition of an atomic formula: An atomic formula no longer needs to apply only to object symbols.  It can now apply to terms.  

- The rest of the syntactic structure that we developed for predicate logic remains unchanged.
    
    Note that none of this is actually in contradiction with the syntax or semantics of predicate logic—everything here is an extension of what we said before, but nothing that we said previously needs to be retracted.  
    
    For example, if a predicate is applied to an appropriate number of object symbols, then according to the following definition that *still* counts as an atomic formula.  So nothing that we said previously about predicates and formulas needs to be retracted.
    

***Definition***

*Syntax*

Let $\text{Objs},\text{Preds},\text{Conns}$ be defined as before.

Let $\text{Funcs}$ be a set of symbols, disjoint from $\text{Objs},\text{Preds}$, and $\text{Conns}$.  We call $\text{Funcs}$ the **set of function symbols**.

The new alphabet is 

$$
\Sigma = \text{Objs}\cup\text{Preds}\cup \text{Funcs}\cup \text{Conns}\cup\{(,),\boldsymbol ,\}
$$

For each $f\in \text{Funcs}$, define $\text{Arity}(f)=n$ to be any positive integer.  This is the **arity** of *f*.  

We define a set $\text{Terms}\subseteq \Sigma^*$ recursively as follows.

- $\text{Objs}\subseteq \text{Terms}$.
- If $f\in \text{Funcs}$ and $n=\text{Arity}(f)$, and if $t_1,…,t_n\in \text{Terms}$, then $f(t_1,t_2,…,t_n)\in\text{Terms}$.

The set $\text{Terms}$ is called the **set of terms**.

If $P\in\text{Preds}$ is any predicate symbol, and $m=\text{Arity}(P)$, and if $t_1,…,t_n\in\text{Terms}$, then $P(t_1,t_2,…,t_n)$ is called an **atomic formula**.  This is denoted $\text{Atoms}$.

Then define $L\subseteq\Sigma^*$ by exactly the same recursion as before.  

*L* is then called **a predicate language with terms**.

For example, suppose that we want to represent an expression like $1+(2\cdot 3)$.  We will need a function symbol for addition, and one for multiplication.  Let’s be traditional, and use $\text{Funcs} = \{+,\cdot\}$.  Let $\text{Arity}(+)=2$ and $\text{Arity}(\cdot)=2$.

To represent 1, 2, and 3, we will use the symbols $\text{Objs}=\{o, t, e\}$.

Because $t,e$ are terms because they are in $\text{Objs}$.  

Because the arity of $\cdot$ is 2, then therefore $\cdot(t,e)$ is a term.  This is our logical notation for $2\cdot 3$.

- Note that our official notation for terms is “prefix” rather than “infix”.
    
    We’re all so used to writing $2\cdot 3$ instead of $\cdot (2,3)$!  However, when doing formal logic, we traditionally use the latter, which is called “prefix notation”.  It’s just simpler to do it that way because infix notation, like $2\cdot 3$, is generally only convenient when the arity is 2.  If we were to try to preserve infix notation, then we’d need a system for arity 1 and 3 or more, but a different system for arity 2.  
    
    We will not keep using prefix notation throughout this text—but at least for the time that we spend introducing and studying logic, we’ll use prefix.  
    

Continuing, we also have that *o* is a term.  Because the arity of + is 2, and since we’ve already established that $\cdot(t,e)$ is a term, then therefore $+(1,\cdot(2,3))$ is a term.  

***Exercise***

Make up a language and a set of function symbols to represent $x^2-1$.

For the new syntax, we give it the following semantics.  

Just as our new syntax did not contradict any of the old syntax, also our new semantics does not contradict any of the old semantics: We still have a universe which is nonempty, an interpretation which assigns elements to the object symbols and the predicate symbols.  

We only grow the semantics by adding an interpretation of function symbols and terms.  The interpretation of a function symbol is, big surprise, a function!  The interpretation of a term is the function applied to each element in it.

***Definition***

*Semantics*

For each $f\in\text{Funcs}$, let $n=\text{Arity}(f)$. Then the interpretation, $\mathcal I$, assigns *f* to a function with domain $\mathcal U^n$ and range $\mathcal U$.  This is denoted $f^{\mathcal I}: \mathcal U^n\to \mathcal U$.

We define the interpretation of a term $t\in\text{Terms}$, denoted $t^{\mathcal I}$, recursively.

- If $t\in \text{Objs}$ then $t^{\mathcal I}$ is defined by $\mathcal I$.
- If $t = f(t_1,…,t_n)$ where $f\in\text{Funcs}$ and $n=\text{Arity}$, and $t_1,…,t_n\in\text{Terms}$, then
    
    $$
    (f(t_1,...,t_n))^{\mathcal I} = f^{\mathcal I}(t_1^{\mathcal I},...,t_n^{\mathcal I})
    $$
    

The semantics of formulas is exactly as before.  

Let’s see an example, and let’s keep it small. Suppose $\text{Objs} = \{a,b\}$, and $\text{Funcs} = \{+\}$, and $\text{Preds}=\{G\}$.  We will set $\text{Arity}(+) = 2$ and $\text{Arity}(G)=2$.

For the semantics, let $\mathcal U = \Bbb N$, and

$$
\begin{aligned}
 a^{\mathcal I} &= 1\\
 b^{\mathcal I} &= 2\\
 +^{\mathcal I} &= \text{the plus operation} \\
 G^{\mathcal I} &= \text{the greater-than relation}
\end{aligned}
$$

With $\mathcal M=(\mathcal U,\mathcal I)$, let’s now evaluate $(G(+(a,b),a))^{\mathcal M}$.  

Note that you should read the formula $G(+(a,b),a)$ as expressing “1+2 > 1”, and therefore we should expect $(G(+(a,b),a))^{\mathcal M}=T$.

To do so, according to the syntax, we must check whether $((+(a,b))^{\mathcal I},a^{\mathcal I})\in G^{\mathcal I}$.

Let us simplify each part as much as possible.  First let’s simplify $(+(a,b))^{\mathcal I}$.

$$
\begin{aligned}
 (+(a,b))^{\mathcal I} &\stackrel 1= +^{\mathcal I}(a^{\mathcal I},b^{\mathcal I}) \\
 &\stackrel 2= +^{\mathcal I} (1,2) \\
 &\stackrel 3= 3
\end{aligned}
$$

The first equation above follows by the semantics of a function symbol.  

The second equation follow from that, because the definition of $\mathcal I$ earlier.

The third equation follows because $+^{\mathcal I}$ is the plus operation, and we are giving it inputs 1 and 2.  We know that this evaluates to 3.

Therefore, the pair $((+(a,b))^{\mathcal I},a^{\mathcal I})$ is actually the same as $(3,1)$.

Therefore we must judge whether 

$$
(3,1) \in G^{\mathcal I}
$$

But since $G^{\mathcal I}$ is the “greater than” relation, and since 3 is greater than 1, therefore we have that $(3,1)\in G^{\mathcal I}$.  

Therefore we finally arrive at the conclusion: $(G(+(a,b),a))^{\mathcal M}=T$.

***Exercise***

Using the same language and semantics above, find $(G(+(a,+(a,a)),+(a,b)))^{\mathcal M}$.

# Syntactic Sugar

As you can see above, sticking to the simple rules of notation makes things get difficult kind of fast.  In the exercise that ended the previous section, I recommended that you find $(G(+(a,+(a,a)),+(a,b)))^{\mathcal M}$.

But this is just “long-hand” for the expression $(a+(a+a) > a+b)^{\mathcal M}$.

The prefix notation is nice for simplicity, when we’re trying to define things and be rigorous and official.  But the infix notation sure reads a lot better when doing examples and exercises.  

So from now on, when showing exercises and examples, we will revert back to the infix notation.  Just be aware that it’s really just “[syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)” for the official prefix notation.

# Equality Syntax and Semantics

We want equations!  I mean, the whole time we’re studying logic, we have one eye looking out for how this stuff helps us to do math—so we better have equations somewhere.  

Well equality is really just a special type of binary relation.  Remember binary relations?  

If our universe were $\mathcal U = \{a,b,c,d\}$, then this would be the diagram for the relation of equality.

![image.png](Chapter%205%20Terms%20and%20Equality,%20Syntax,%20Semantics,%20P/image.png)

Note that no two distinct things in the universe should ever be in the equality relation!

Which initially makes the equality relation kinda … funny.  I mean, if two things are equal, then there aren’t really two things.  So how can two things be equal?

The resolution of this paradox is that *different names can denote the same element of the universe*.  By analogy, the name “[Mohammad Ali](https://en.wikipedia.org/wiki/Muhammad_Ali)” and the name “Cassius Clay” denote the same person.  So equality actually holds when there’s just one thing, but it has two different symbols denoting it.  

***Definition***

*Syntax*

We reserve a special symbol, =, to denote the equality relation. 

Let $\text{Objs}$ and $\text{Funcs}$ be as before, and let $\text{Preds}$ be a set which does not include any of the symbols in $\text{Objs}$ or $\text{Preds}$, but does include =.  Let $\text{Arity}$ be an arity function for $\text{Preds}$, and set $\text{Arity}(=)=2$.

The set 

$$
\Sigma = \text{Objs}\cup\text{Funcs}\cup \text{Preds}\cup \text{Conns}\cup \{(,),=,\boldsymbol ,\}
$$

is an **alphabet of predicate logic with equality.**  

Terms, atomic formulas, and formulas, are defined exactly as before.

*Semantics*

The semantics are defined exactly as before, with the exception that we additionally require 

$$
=^{\mathcal I} = \text{the equality relation}
$$

That is to say, $=^{\mathcal I}$  equals $\{(x,x):x\in\mathcal U\}$.

For a brief example, let $\text{Objs}=\{a\}$ and we will not bother with any other symbols. 

Let $\mathcal U = \{0\}$ and $a^{\mathcal I}=0$, and $\mathcal M = (\mathcal U,\mathcal I)$.

Then we will evaluate $(a=a)^{\mathcal M}$.  

By definition, this is *T* if $(a^{\mathcal I},a^{\mathcal I})\in =^{\mathcal I}$.

But $(a^{\mathcal I},a^{\mathcal I})= (0,0)$.  Since $=^{\mathcal I}$ is the equality relation, and 0 = 0, then therefore 

$$
(0,0)\in =^{\mathcal I}
$$

This demonstrates that $(a=a)^{\mathcal M}=T$.

***Exercise***

Define constants and terms appropriately to represent $1+1=2$.  Then define a model such that $(1+1=2)^{\mathcal M}=T$.

# Equality Proof Theory

The new inference rule that we get from having equality is pretty sensible: you can substitute equals. 

For example, if $x=5$ then we can perform substitute into any expression with *x* in it. If we then had the term $x^2+1$ we should be able to infer that $x^2+1=5^2+1$.

Similarly, if we had the proposition $x\in A$ then we should be able to infer $5\in A$.

Because we are talking about substitution, naturally we may reuse the notation and concepts from before:  $[s]_{t:=u}$ denotes the string *s*, but with every instance of *t* replaced by *u*.

***Definition***

**Substitution** is the following inference rule.

> Suppose that $t_1,t_2$ are terms and one has accepted the proposition $t_1=t_2$.  Let $\phi$ be any formula that one has also accepted.  
One may infer $[\phi]_{t_1 := t_2}$ or $[\phi]_{t_2:=t_1}$.
> 

**Identity** is the inference rule that, for any term *t*, one may always infer $t=t$.

Let’s see an example, in which we prove from $x=a$ and $P(x)$ that therefore $P(a)$.

| **Index** | **Proposition** | **Reason** |
| --- | --- | --- |
| 1. | $x=a$ | Assumption |
| 2. | $P(x)$ | Assumption |
| 3.  | $P(a)$ | Substitution from 1, 2 |

Note how the Substitution rule is applied here.  $t_1=x$ and $t_2=a$, and $\phi=P(x)$.  The rule says that we can infer $[P(x)]_{x:=a}$.  But notice that $[P(x)]_{x:=a}=P(a)$, so therefore the rule says that we are allowed to infer $P(a)$, which is what we did at line 3.

***Exercise***

From $a=b$ and $b=c$ prove that $a=c$.