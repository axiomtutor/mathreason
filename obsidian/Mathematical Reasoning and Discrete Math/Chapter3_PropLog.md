---
title: "Chapter 3: Propositional Logic"
---


# Propositions

> [!definition] ***Definition***
>
> A **proposition** is any sentence that is either true or false.

It is easy to think of example propositions.  For example, “Japan is east of China” is a true proposition, while “3 is less than 2” is a false proposition.  

You can have a proposition like “The ball is red” which is true when pointing to a red ball.  That same proposition is false when pointing to a white ball.  

It might even seem hard to think of sentences that are *not* propositions, until you see a few examples!

- Pick up milk when you go to the store.
- What time is it?
- Hooray!

None of the above sentences are either true or false, so these are sentences which are not propositions.



# Propositional Variables, Syntax and Semantics

Out of a desire for abstraction,  we will represent propositions by a single letter, like *P*.  This is called a “propositional variable”.  

This is just like how a mathematical variable is allowed to take a bunch of different numeric values.  A propositional variable is allowed to be or “take on” a bunch of different propositions.

Therefore when we write *P*, we don’t necessarily know which proposition it refers to.  For the purposes of logic, there are really just two interesting possibilities: *P* may be true or false.  

This is our first introduction to syntax and semantics: The symbol *P* is the syntax of an expression.  

The semantics are the truth-values assigned to variables.  When choosing to give *P* the value "true", we imagine that *P* is some true sentence.  If we choose to give *P* the value "false", then we imagine that *P* is some false sentence.

Because it is valuable to keep straight, which things are syntax and which are semantics, it is helpful to write each in a distinctive script.  It is traditional to write syntax in standard italic letters, and it is sometimes common to write semantics in Fraktur font.  

We will use $\frak T$ (this is a Fraktur ‘T’) for “true”, and $\frak F$ (Fraktur ‘F’) for “false”. 

> [!note]- The "signifiers" of propositional logic are called "propositional formulas", but we are not yet ready to define these.
> 
> In the definition below we establish *some but not all* of the syntax and semantics of propositional logic.  We have to introduce this slowly and piecemeal because the total structure of propositional logic is a bit complicated.
> 
> Therefore we are not yet ready to say exactly what the alphabet and signifiers are.  Still we want to present the basic idea of a propositional variable, and its relationship to truth-value.

> [!definition] ***Definition***
>
> *Syntax*
> 
> A **propositional variable** is a variable (a symbol) which could denote any proposition. 
> 
> *Semantics*
> 
> If $P_1,P_2,\dots$ are propositional variables, then a **truth model** (or just **model** for short, also sometimes called a **truth-assignment** or a **truth-function**) is an assignment of truth-values to the variables.  The truth-values are **true** and **false**, represented by $\frak T$ and $\frak F$.
> 
> We will denote a truth model by the symbol $\frak M$ (Fraktur ‘M’).
> 
> If $\frak M$ assigns $\frak T$ to *P*, we write 
> 
> $$
> P^{\frak M}= \frak T
> $$
> 
> and if $\frak M$ assigns $\frak F$ to *P* we write 
> 
> $$
> P^{\frak M}= \frak F
> $$

> [!note]- A model is a function.
    >
    >The above establishes that a model assigns truth-value to propositional variables.  We can pick any model that we want, depending on our intended interpretation of the propositional variables.  
    >
    >If we intend for the variable *P* to express “1 + 1 = 2” then we would pick a model, $\frak M$, in which $P^{\frak M}=\frak T$.  If we use *P* to stand for “1 + 1 = 0” then we would pick our model such that $P^{\frak M}=\frak F$.
    >
    >But one might reasonably wonder “Ok, I think I get that.  But like … what *is* a model?"
    >
    >Technically, a model is a function.  The inputs are the propositional variables and the outputs are truth-values.  

Let’s see an example.  Suppose that we begin from the propositions "This triangle is obtuse and isosceles".  We might use *P* to reprensent "this triangle is obtuse" and *Q* to represent "this triangle is isosceles".  

If the triangle that we are discussing is this one:

![[Pasted image 20260904203417.png]]

then this triangle is obtuse, therefore we should choose a model, $\mathfrak M_1$, such that $P^{\mathfrak M_1}=\mathfrak T$.

Since the triangle is also isosceles then we should also decide that our model assigns $Q^{\mathfrak M_1}=\mathfrak T$.

On the other hand, if the triangle were 

![[Pasted image 20260904203631.png]]

then this is not obtuse but it is isosceles. Therefore we should use the model 

$$\begin{aligned}
P^{\frak M_2} =\frak F\\
Q^{\frak M_2} = \frak T
\end{aligned}$$

> [!exercise] ***Exercise***
> Use the same *P* and *Q* above.  
> 
> What is the appropriate model for the following triangle?
> 
> ![[Pasted image 20260904204737.png]]

> [!exercise] ***Exercise***
>
> Consider two variables, *P* and *Q*, not necessarily as above.
> 
> List every possible model for these two variables.  
> 
> (Here is one: $\mathfrak M_1$ given by $P^{\mathfrak M_1} = \frak T$ and $Q^{\frak M_2}=\frak T$.)

> [!exercise] ***Exercise***
>
> Suppose that you have three propositional variables, *P, Q*, and *R*.
> 
> How many models are possible?

# Syntactic Conjunction
Consider the sentence 

> 2 is prime and even.

This is a "conjunction" of two propositions, 

- 2 is prime, and
- 2 is even.

We could represent the proposition “2 is prime” as the variable *P*.

We could represent “2 is even” as the variable *Q*.

Then we would represent the conjunction of *P* and *Q* as 

$$
P\land Q
$$

That is to say, we will use the “up wedge” symbol to represent conjunction.  

---

Every propositional variable is a signifier in propositional logic: It is an expression which has meaning.  

In propositional logic we will call the signifiers "formulas".  So each propositional variable is a formula. 

But moreover, every conjunction is also a formula, like $P\land Q$.  

But moreover still, we can also form conjunctions of conjunctions, like 

We are also able to form more complex conjunctions, like 

$$P\land (Q\land R)$$
or
$$(P\land Q)\land (R\land S)$$

> [!definition] ***Definition***
>
> Let $\phi$ and $\psi$ be propositional formulas.  
> 
> Then their **syntactic conjunction** (or just **conjunction**) is the formula $(\phi\land\psi)$.  The conjunction of two formulas is also a propositional formula.

Note that when the parentheses are not needed, we may omit them.  So for example, instead of writing $(P\land Q)$ we merely write $P\land Q$.  

On the other hand, in $P\land (Q\land R)$, the parentheses around $(Q\land R)$ tells us which order the formulas are conjoined.  If we dropped all parentheses and wrote $P\land Q\land R$, we would not know whether this means $(P\land Q)\land R$ or $P\land (Q\land R)$. 

So to write the formula $(P\land (Q\land R))$, we may drop the outer parentheses and just write $P\land (Q\land R)$.  This causes no ambiguity.  But we may not drop the inner parentheses since they are needed to specify the formula.   

---

Let’s see how the above definition implies that $P\land(Q\land R)$ is a propositional formula.  First we note that *Q* and *R* are each variables, and therefore they are formulas.  

Because *Q* and *R* are formulas, therefore $Q\land R$ is a formula.  

*P* is a formula because it is a variable.  Because *P* and $Q\land R$ are formulas, therefore $P\land(Q\land R)$ is a formula.  

> [!exercise] ***Exercise***
>
> Show that $(P\land Q)\land (Q\land R)$ is a formula.
> 
> Explain why you cannot prove that $P\land$ is a formula.
> 
> Is $P\land\land P$ a formula?
> 
> Is $P\land P$ a formula?

# Semantic Conjunction

Although the definition of conjunction above is correct, notice that it doesn’t actually tell you what conjunction is supposed to *represent* or what it’s supposed to *do*.  It tells us the syntax, but not the semantics.

Recall that the semantics of propositional logic is concerned with truth-value.

> [!definition] ***Definition***
>
> **Semantic conjunction** is the following operation, denoted by $\curlywedge$.
> 
> $$ \begin{aligned}
> \frak{T\curlywedge T = T}\\\\
> \frak{T\curlywedge F = F}\\\\
> \frak{F\curlywedge T = F}\\\\
> \frak{F\curlywedge F = F}
> \end{aligned}$$
> 
> Let $\phi$ and $\psi$ be formulas, and let $\frak M$ be a model defined for $\phi$ and $\psi$.  
> 
> Then $(\phi\land \psi)^{\frak M}$ is defined to be equal to $\phi^{\frak M}\curlywedge \psi^{\frak M}$.  Whatever this value is, we call it **the (truth-)value of $\phi\land \psi$ in $\frak M$**.  We may also refer to this as the **evaluation of $\phi\land\psi$ in $\frak M$**.

> [!note]- Semantic conjunction is an example of a "boolean algebra operation".
> The values $\frak T$ and $\frak F$ are often called "[boolean values](https://en.wikipedia.org/wiki/Boolean_data_type)".  
> 
> A function is then called a "boolean algebra operation" if its inputs and outputs are boolean values.  
> 
> Hence semantic conjunction, as well as several of the other operations below, are all boolean algebra operations.

The value of a formula is the bridge between syntax and semantics.  It works by first giving values to the propositional variables, because that is the definition of what $\frak M$ is.  But from there, we can then determine the value of a conjunction, by determining the values of its component formulas.  

---

Let’s see an example.  Assume that we have a model, $\mathcal M$, such that $P^{\frak M} = \frak T$ and $Q^{\frak M}= \frak T$.  Let’s see how the definition above assigns a value to $P\land Q$.

$$
\begin{aligned}
 (P\land Q)^{\frak M} &= P^{\frak M}\curlywedge Q^{\frak M} \\
&= \frak T\curlywedge \frak T\\
&= \frak T
\end{aligned}
$$

where the last equation comes from the definition of the semantic conjunction, $\curlywedge$.

Let’s do another.  Let’s show that if *P* is false, *Q* is true, and *R* is true, then $((P\land Q)\land R)^{\frak M}= \frak F$.  

$$
\begin{aligned}
 ((P\land Q)\land R)^{\frak M} &\stackrel{1}{=} (P\land Q)^{\frak M} \curlywedge R^{\frak M} \\
 &\stackrel2= (P^{\frak M}\curlywedge Q^{\frak M})\curlywedge \frak T \\
 &\stackrel3= (\frak F \curlywedge \frak T)\curlywedge \frak T \\
 &\stackrel4= \frak F \curlywedge \frak T\\
 &\stackrel5= \frak F
\end{aligned}
$$

Here is an explanation of each equation above.

1. Definition of evaluation, applied $P\land Q$ and *R*.
2. Definition of evaluation, applied to *P* and *Q*.  Also, the assumption that *R* is true.
3. The assumption that *P* is false and *Q* true.
4. The resulting value is $\mathfrak F$.
5. The resulting value is $\mathfrak F$.

> [!exercise] ***Exercise***
>
> Let *P* represent a false proposition, *Q* and *R* represent true propositions.  
> 
> Find $((P\land Q)\land (Q\land R))^{\frak M}$.

Note that the semantics here is *also defined recursively*.  Recursion isn’t just for languages, it’s also used in a wide range of other areas.

Here is the rule for evaluation, stated in our familiar recursive way.  For any formula $\phi\in L$, and model $\frak M$, we have the following definition of $\phi^{\frak M}$.

- Base case: If $\phi$ is a propositional variable, then $\phi^{\frak M}$ is defined by $\frak M$.  That is to say, the very definition of $\frak M$ will tell us what this value is.
- Recursive case: If $\phi$ is a conjunction of two other formulas, $\phi=(\chi\land\psi)$, then

$$
\begin{aligned}
 \phi^{\frak M} &= \chi^{\frak M}\curlywedge \psi^{\frak M}
\end{aligned}
$$

The recursive case, is “recursive” because it computes the value from simpler cases—namely, $\chi^{\frak M}$ and $\psi^{\frak M}$.

# Truth-table for Conjunction

It can help to display how the conjunction acts on truth-values, by putting this information into a table.  It’s just a nice, dense summary of all the same information that we discussed above.

$$
\begin{array}{|c|c||c|c|c|}
 \hline
 P & Q & P & \land & Q \\\hline
 \color{red} \frak T & \color{red}\frak T & & \color{red}\frak T &  \\
\frak T &\frak F & &\frak F & \\
 \color{red}\frak F & \color{red}\frak T &  & \color{red}\frak F & \\
\frak F &\frak F &  &\frak F &  \\\hline
\end{array}
$$

The rows are in alternating colors just for readability—the colors don’t mean anything.

Each row corresponds to a model.  For example, if $\frak M$ is the model which assigns $P^{\frak M}=\frak F$ and $Q^{\frak M}=\frak F$, then this is represented on the last row of the table.  

In this last row, under $\land$, it holds the value of the proposition $P\land Q$.  This is the black $\frak F$.  This comes from computing 

$$
\begin{aligned}
 (P\land Q)^{\frak M} &= P^{\frak M}\curlywedge Q^{\frak M}\\
&=\frak F\curlywedge\frak F\\
&=\frak F
\end{aligned}
$$

# Disjunction

Recall the definition of a trivial divisor: A divisor of 15 is trivial if it is either 1 or 15.

Say that we consider 3, a divisor of 15.  We may form the sentence “3 is either 1 or 15”.  Since 3 is not 1 and 3 is not 15, therefore this sentence is false.  Hence 3 is not a trivial divisor of 15.

The proposition “3 is either 1 or 15” is the *disjunction* of the two propositions 

- 3 is 1, or
- 3 is 15.

If we denote “3 is 1” by the symbol *P*, and denote “3 is 15” by the symbol *Q*, then their disjunction is 

$$
P\lor Q
$$

> [!definition] ***Definition***
>
> We define the boolean operator, **semantic disjunction**, by
> 
> $$ \begin{aligned}
> \frak{T\curlyvee T = T}\\\\
> \frak{T\curlyvee F = T}\\\\
> \frak{F\curlyvee T = T}\\\\
> \frak{F\curlyvee F = F}
> \end{aligned}$$
> 
> Let $\phi$ and $\psi$ be formulas.
> 
> Their **syntactic disjunction** is the formulas $\phi\lor\psi$.  Any disjunction of formulas is a formula.   
> 
> If $\frak M$ is a model defined for $\phi$ and $\psi$, then we define 
> 
> $$
> (\phi\lor\psi)^{\frak M}= \phi^{\frak M}\curlyvee \psi^{\frak M}
> $$

Here is the truth-table for disjunction: 

$$
\begin{array}{|c|c||c|c|c|}
 \hline
 P & Q & P & \lor & Q \\\hline
 \color{red}\mathfrak{T} & \color{red}\mathfrak{T} & & \color{red}\mathfrak{T} & \\
 \mathfrak{T} & \mathfrak{F} & & \mathfrak{T} & \\
 \color{red}\mathfrak{F} & \color{red}\mathfrak{T} & & \color{red}\mathfrak{T} & \\
 \mathfrak{F} & \mathfrak{F} &  & \mathfrak{F} &  \\\hline
\end{array}
$$

> [!exercise] ***Exercise***
>
> Suppose that *P* and *Q* are true while *R* is false.
> 
> Find $(P\lor (Q\land R))^{\frak M}$.

# Negation

Recall the definition of a composite number: An integer $n\ge 2$ is composite if it is not prime.  

For example, “8 is not prime” is the *negation* of the proposition “8 is prime”.  

If we represent the proposition “8 is prime” by *P*, then its negation is represented by 

$$
\neg P
$$

> [!definition] ***Definition***
>
> We define the boolean operation of **semantic negation** by
> 
> $$\begin{aligned}
> \sim \frak T =\frak F\\\sim\frak F =\frak T
> \end{aligned}$$
> 
> Let $\phi$ be a formula.
> 
> Its **syntactic negation** is the formula $\neg \phi$.  Any negation of a formula is a formula.
> 
> For a model $\frak M$ defined for $\phi$, then we define 
> 
> $$
> (\neg \phi)^{\mathcal M} = \ \ \sim \phi^{\mathcal M}
> $$

The truth-table is 

$$
\begin{array}{|c||c|c|}\hline
  P & \neg & P \\\hline
 \color{red}\frak T & \color{red}\frak F & \\
\frak F &\frak T & \\\hline
\end{array}
$$

Notice that since there is only one formula, which may only be true or false, it requires fewer rows.  

> [!exercise] ***Exercise***
>
> Let $\frak M$ be a model defined for *P*.  
> 
> Find $(\neg(\neg P))^{\frak M}$.

# Conditional

Arguably, the conditional is perhaps the most interesting or important operator, because it plays a role in nearly every important mathematical theorem.  

We could really point to any theorem already discussed.  But let’s take for example 

> If $X\subseteq \Bbb Z$ is a set of integers which is bounded below, then *X* has a minimum.
> 

“If” usually indicates the “antecedent”. This is the part of the conditional proposition, which you are meant to imagine or assume is true.  

Given that the antecedent is true, the conditional proposition “then” claims that the next part must be true. This is the “consequent”.

In this example, the antecedent is “$X\subseteq \Bbb Z$ is a set of integers which is bounded below”.

The consequent is “*X* has a minimum”.

The truth conditions of the other operations were relatively sensible: “*P* and *Q*” is true if both are true.  “*P* or *Q*” is true if one or the other (or both) is true.  “Not *P*” is true if *P* is false.

Some of the truth conditions of the conditional are sensible. Most people would guess that “If *P* then *Q*” is true when both *P* and *Q* are true.  Since I think you’ll probably accept this idea, I won’t argue for it.

Hence we have the first row of the truth-table. 

$$
\begin{array}{|c|c||c|c|c|}\hline
 P&Q&P&\to &Q\\\hline
 \color{red}\frak T & \color{red}\frak T & & \color{red}\frak  T & \\
\end{array}
$$

Now what if *P* is true and *Q* false?  For example what if we state “If 2 is prime then 2 is odd”?  Here *P* is “2 is prime” and *Q* is “2 is odd”.  I think we easily understand that this statement is false.  

Hence the next row of the truth-table.

$$
\begin{array}{|c|c||c|c|c|}\hline
 P&Q&P&\to &Q\\\hline
 \color{red}\frak T & \color{red}\frak T & & \color{red}\frak  T & \\
 \frak T & \frak F & & \frak F & \\
\end{array}
$$

But although I think those arguments make natural sense, here comes the trouble:

What are we supposed to say, when *P* is false?  Consider some example “if-then” propositions, in which the antecedent is false.  

- If 2 is bigger than 3, then 3 is bigger than 2.
- If 2 is bigger than 3, then triangles are round.

In the first example, *P* is false, and *Q* is true.  

It is traditional for mathematicians to regard both of these as true statements.  Here is an argument for why that’s a good idea:  

It is clearly a true principle that “if *x* is a natural number divisible by 4, then *x* is even”.  As such, if we “plug in” any natural number *x*, we should get a true proposition.  

Therefore if we plug in $x=5$, the result must be a true proposition.  When we do, we have the proposition “if 5 is a natural number divisible by 4, then 5 is even”.  The antecedent is false, and the consequent is false. 

Therefore when the antecedent and consequent are false, the conditional must be true.  One can find a similar argument for the case when the antecedent is false and the consequent true.  We have now explained why the conditional truth-table is 

$$
\begin{array}{|c|c||c|c|c|}\hline
 P&Q&P&\to &Q\\\hline
 \color{red}\frak T & \color{red}\frak T & & \color{red}\frak  T & \\
 \frak T & \frak F & & \frak F & \\
 \color{red} \frak F & \color{red} \frak T & & \color{red} \frak T & \\
\frak F & \frak F & & \frak T & \\\hline
\end{array}
$$

> [!note]- Note: This is called the “material conditional”.
    >
    >The understanding of “if-then” presented above, is the one that is used throughout mathematics.  However, it is not a good model for how most English language uses the “if-then” construction.
    >
    >Often “if-then” sentences communicate something about correlation, causation, relevance, or some other ideas which simply cannot be captured with the idea of a truth-table. 
    >
    >The interested reader is welcome to research the topic of [the material conditional](https://en.wikipedia.org/wiki/Material_conditional), and related ideas.

