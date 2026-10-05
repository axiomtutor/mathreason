---
title: "Chapter 3: Propositional Logic"
---

> [!note]- TODO
> * Make a summary page which the reader can use as reference, so that they don't only have this pedagogical page.
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

Out of a desire for abstraction,  we will represent propositions by a single letter, like $\tt P$.  This is called a “propositional variable”.  

This is just like how a mathematical variable is allowed to take a bunch of different numeric values.  A propositional variable is allowed to be or “take on” a bunch of different propositions.

Therefore when we write $\tt P$, we don’t necessarily know which proposition it refers to.  For the purposes of logic, there are really just two interesting possibilities: $\tt P$ may be true or false.  

This is our first introduction to syntax and semantics: The symbol $\tt P$ is the syntax of an expression.  

The semantics are the truth-values assigned to variables.  When choosing to give $\tt P$ the value "true", we imagine that $\tt P$ is some true sentence.  If we choose to give $\tt P$ the value "false", then we imagine that $\tt P$ is some false sentence.

Because it is valuable to keep straight, which things are syntax and which are semantics, it is helpful to write each in a distinctive script.  It is traditional to write syntax in standard italic letters.  There is less standardization for the symbols used for semantics.  To make them very visibly different from syntax, I'm going to write them in Devanagari.

We will use $ट$ for “true”, which is a Devanagari letter, pronounced similar to an English 'T'.  So when you think of this, imagine the letter 'T' for "true".  

We will use फ for "false", which is a Devanagari letter, pronounced like an English 'F'.  So when you think of फ, imagine the letter 'F' for "false".  

> [!note]- Notes on the use of Devanagari.
> 
> 1. Placing a dot below the letter फ, to make फ, produces a sound in Devanagari which is closer to the English 'F' sound.  But I figure, why bother? For our purposes I just want a distinct symbol, which somehow gestures at the idea of "false".  The simpler letter फ is good enough!
> 2. I know that many English-speaking readers may be intimidated by letters from a language as different as Hindi.  However, I promise that the number of Devanagari letters will be kept small.  You will, in fact, learn many more new symbols which are standard logical symbols, than you will learn Devanagari letters.
> 3. In the definition below, we will write a sentence like $\tt P^म=ट$.  I recommend pronouncing this as "$\tt P$ in *M* is true."

> [!definition] ***Definition***
>
> *Syntatic*
> 
> A **propositional variable** is a variable (a symbol) which could denote any proposition. 
> 
> *Semantic*
> 
> If $\tt P_1,\tt P_2,\dots$ are propositional variables, then a **truth model** (or just **model** for short, also sometimes called a **truth-assignment** or a **truth-function**) is an assignment of truth-values to the variables.  The truth-values are **true** and **false**, represented by ट and फ.
> 
> We will denote a truth model by the symbol म (A Devanagari letter similar to 'M'.).
> 
> If म assigns ट to $\tt P$, we write 
> 
> $$
> \tt P^{म}= ट
> $$
> 
> and if म assigns फ to $\tt P$ we write 
> 
> $$
> \tt P^{म} = फ
> $$

> [!note]- A model is a function.
    >
    >The above establishes that a model assigns truth-value to propositional variables.  Picking a model is basically just deciding which propositions get interpreted as true or false.
    >
    >If we intend for the variable $\tt P$ to express “1 + 1 = 2” then we would pick a model, $म$, in which $\tt P^{म}=ट$.  If we use $\tt P$ to stand for “1 + 1 = 0” then we would pick our model such that $\tt P^{म}=फ$.
    >
    >But one might reasonably wonder “Ok, I think I get that.  But like … what *is* a model?"
    >
    >Technically, a model is a function.  The inputs are the propositional variables and the outputs are truth-values.  

Let’s see an example.  Suppose that we begin from the proposition "This triangle is obtuse and isosceles".  We might use $\tt P$ to reprensent "this triangle is obtuse" and $\tt Q$ to represent "this triangle is isosceles".  

If the triangle that we are discussing is this one:

![[obtuseiso.png]]

then this triangle is obtuse, therefore we should choose a model, $म_1$, such that $\tt P^{म_1}=ट$.

Since the triangle is also isosceles, then we should also decide that our model assigns $\tt Q^{म_1}=ट$.

On the other hand, if the triangle were 

![[notobtuseiso.png]]

then this is not obtuse but it is isosceles. Therefore we should use the model 

$$\begin{aligned}
\tt P^{म_2} =फ\\
\tt Q^{म_2} = ट
\end{aligned}$$

> [!exercise] ***Exercise***
> Use the same $\tt P$ and $\tt Q$ above.  That is to say, $\tt P$ is our symbol for "This triangle is obtuse," and $\tt Q$ is our symbol for "This triangle is isosceles."
> 
> What is the appropriate model for the following triangle?
> 
> ![[obtusenotiso.png]]

> [!exercise] ***Exercise***
>
> Consider two variables, $\tt P$ and $\tt Q$, not necessarily as above.
> 
> List every possible model for these two variables.  
> 
> (Here is one: $म_1$ is the model given by $\tt P^{म_1} = ट$ and $\tt Q^{म_2}=ट$.)

> [!exercise] ***Exercise***
>
> Suppose that you have three propositional variables, $\tt P, \tt Q$, and $\tt R$.
> 
> How many models are possible?

# Syntactic Conjunction
Consider the sentence 

> 2 is prime and even.

This is a "conjunction" of two propositions, 

- 2 is prime, and
- 2 is even.

We could represent the proposition “2 is prime” as the variable $\tt P$.

We could represent “2 is even” as the variable $\tt Q$.

Then we would represent the conjunction of $\tt P$ and $\tt Q$ as 

$$
\tt P\tt \land \tt Q
$$

That is to say, we will use the “up wedge” symbol to represent conjunction.  

---

Recall that we are trying to develop the language of propositional logic, which is a set of "signifiers".  The signifiers are the meaningful sequences of symbols.  We've already see that an individual propositional variable is a signifier, because we gave it a semantic interpretation (in this context, that means that we assign it truth-value).

In propositional logic we will call the signifiers "formulas".  So each propositional variable is a formula. 

But moreover, every conjunction is also a formula, like $\tt P\tt \land \tt Q$.  

But moreover still, we can also form conjunctions of conjunctions, like 

$$ (\tt P\tt \land \tt Q)\tt \land \tt R$$

We are also able to form more complex conjunctions, like 
$$(\tt P\tt \land \tt Q)\tt \land (\tt R\tt \land \tt S)$$

> [!definition] ***Definition***
>
> Let $\tt \phi$ and $\tt \psi$ be propositional formulas.  
> 
> Then their **syntactic conjunction** (or just **conjunction**) is the formula $(\tt \phi\tt \land\tt \psi)$.  The conjunction of two formulas is also a propositional formula.

Note that when the parentheses are not needed, we may omit them.  So for example, instead of writing $(\tt P\tt \land \tt Q)$ we merely write $\tt P\tt \land \tt Q$.  

On the other hand, in $\tt P\tt \land (\tt Q\tt \land \tt R)$, the parentheses around $(\tt Q\tt \land \tt R)$ tells us which order the formulas are conjoined.  If we dropped all parentheses and wrote $\tt P\tt \land \tt Q\tt \land \tt R$, we would not know whether this means $(\tt P\tt \land \tt Q)\tt \land \tt R$ or $\tt P\tt \land (\tt Q\tt \land \tt R)$. 

Therefore we are free to drop the outer-most parentheses for convenience, but only the outer-most.

---

Let’s see how the above definition implies that $\tt P\tt \land(\tt Q\tt \land \tt R)$ is a propositional formula.  First we note that $\tt Q$ and $\tt R$ are each variables, and therefore they are formulas.  

Because $\tt Q$ and $\tt R$ are formulas, therefore $\tt Q\tt \land \tt R$ is a formula.  

$\tt P$ is a formula because it is a variable.  Because $\tt P$ and $\tt Q\tt \land \tt R$ are formulas, therefore $\tt P\tt \land(\tt Q\tt \land \tt R)$ is a formula.  

> [!exercise] ***Exercise***
>
> The section above demonstrated how to show that $\tt P\tt \land (\tt Q\tt \land \tt R)$ is a formula.  In a similar style, show that $(\tt P\tt \land \tt Q)\tt \land (\tt Q\tt \land \tt R)$ is a formula.
> 
> Explain why you cannot prove that $\tt P\tt \land$ is a formula.
> 
> Is $\tt P\tt \land\tt \land \tt P$ a formula?
> 
> Is $\tt P\tt \land \tt P$ a formula?

# Semantic Conjunction

Although the definition of conjunction above is correct, notice that it doesn’t actually tell you what conjunction is supposed to *represent* or what it’s supposed to *do*.  It tells us the syntax, but not the semantics.

Recall that the semantics of propositional logic is concerned with truth-value.

In the following definition, we will state the rule that "true and true is true".  For example, the sentence "3 is more than 2 and 3 is odd" is true, because it conjoins two true propositions.  This rule is formally expressed by the equation 

$$ट \tt \land ट = ट $$

> [!definition] ***Definition***
>
> **Semantic conjunction** is the following operation, denoted by $\curlywedge$.
> 
> $$ \begin{aligned}
> ट\curlywedge ट = ट\\\\
> ट\curlywedge फ = फ\\\\
> फ\curlywedge ट = फ\\\\
> फ\curlywedge फ = फ
> \end{aligned}$$
> 
> Let $\tt \phi$ and $\tt \psi$ be formulas, and let $म$ be a model defined for $\tt \phi$ and $\tt \psi$.  
> 
> Then $(\tt \phi\tt \land \tt \psi)^{म}$ is defined to be equal to $\tt \phi^{म}\curlywedge \tt \psi^{म}$.  Whatever this value is, we call it **the (truth-)value of $\tt \phi\tt \land \tt \psi$ in $म$**.  We may also refer to this as the **evaluation of $\tt \phi\tt \land\tt \psi$ in $म$**.

> [!exercise] ***Exercise***
> In the same way that one can read "$ट\curlywedge ट = ट$" as saying 
> 
> > True and true is true.
> 
> likewise interpret the other equations that define $\curlywedge$.

> [!note]- Semantic conjunction is an example of a "boolean algebra operation".
> The values $ट$ and $फ$ are often called "[boolean values](https://en.wikipedia.org/wiki/Boolean_data_type)".  
> 
> A function is then called a "boolean algebra operation" if its inputs and outputs are boolean values.  
> 
> Hence semantic conjunction, as well as several of the other operations below, are all boolean algebra operations.

Let’s see an example.  Assume that we have a model, $म$, such that $\tt P^{म} = ट$ and $\tt Q^{म}= ट$.  Let’s see how the definition above assigns a value to $\tt P\tt \land \tt Q$.

$$
\begin{aligned}
 (\tt P\tt \land \tt Q)^{म} &= \tt P^{म}\curlywedge \tt Q^{म} \\
&= ट\curlywedge ट\\
&= ट
\end{aligned}
$$

The above calculation demonstrates that, in this model, we have $(\tt P\tt \land \tt Q)^म = ट$.

---

Let’s do another.  Let’s show that if $\tt P$ is false, $\tt Q$ is true, and $\tt R$ is true, then $((\tt P\tt \land \tt Q)\tt \land \tt R)^{म}= फ$.  The equations are numbered so that I can refer to and explain each of them later.

$$
\begin{aligned}
 ((\tt P\tt \land \tt Q)\tt \land \tt R)^{म} &\stackrel{1}{=} (\tt P\tt \land \tt Q)^{म} \curlywedge \tt R^{म} \\
 &\stackrel2= (\tt P^{म}\curlywedge \tt Q^{म})\curlywedge ट \\
 &\stackrel3= (फ \curlywedge ट)\curlywedge ट \\
 &\stackrel4= फ \curlywedge ट\\
 &\stackrel5= फ
\end{aligned}
$$

Here is an explanation of each equation above.

1. Definition of evaluation, applied $\tt P\tt \land \tt Q$ and $\tt R$.
2. Definition of evaluation, applied to $\tt P$ and $\tt Q$.  Also, the assumption that $\tt R$ is true.
3. The assumption that $\tt P$ is false and $\tt Q$ true.
4. The resulting value is $फ$.
5. The resulting value is $फ$.

> [!exercise] ***Exercise***
>
> Let $\tt P$ represent a false proposition, $\tt Q$ and $\tt R$ represent true propositions.  
> 
> Find $((\tt P\tt \land \tt Q)\tt \land (\tt Q\tt \land \tt R))^{म}$.

Note that the semantics here are defined recursively.

- Base case: If $\tt \phi$ is a propositional variable, then $\tt \phi^{म}$ is defined by $म$.  That is to say, the very definition of $म$ will tell us what $\tt \phi^{म}$ is.
- Recursive case: If $\tt \phi$ is a conjunction of two other formulas, $\tt \phi=(\tt \chi\tt \land\tt \psi)$, then

$$
\begin{aligned}
 \tt \phi^{म} &= \tt \chi^{म}\curlywedge \tt \psi^{म}
\end{aligned}
$$

The recursive case, is “recursive” because it computes the value from simpler cases.  Those simpler values are the values $\tt \chi^{म}$ and $\tt \psi^{म}$.

# Truth-table for Conjunction

It can help to display how the conjunction acts on truth-values, by putting this information into a table.  It’s just a nice, dense summary of all the same information that we discussed above.

$$
\begin{array}{|c|c||c|c|c|}
 \hline
 \tt P & \tt Q & \tt P & \tt \land & \tt Q \\\hline
 \color{red} ट & \color{red}ट & & \color{red}ट &  \\
ट &फ & &फ & \\
 \color{red}फ & \color{red}ट &  & \color{red}फ & \\
फ &फ &  &फ &  \\\hline
\end{array}
$$

The rows are in alternating colors just for readability—the colors don’t mean anything.

Each row corresponds to a model.  For example, if $म$ is the model which assigns $\tt P^{म}=फ$ and $\tt Q^{म}=फ$, then this is represented in the last row of the table.  

In this last row, under $\tt \land$, it holds the value of the proposition $\tt P\tt \land \tt Q$.  This is the black $फ$.  This comes from computing 

$$
\begin{aligned}
 (\tt P\tt \land \tt Q)^{म} &= \tt P^{म}\curlywedge \tt Q^{म}\\
&=फ\curlywedgeफ\\
&=फ
\end{aligned}
$$

# Disjunction

Consider the proposition "3 is even or prime".  This is called a "disjunction" of the propositions 
- 3 is even.
- 3 is prime.
If we represent "3 is even" by the variable $\tt P$, and "3 is prime" by the variable $\tt Q$, then we will represent their disjunction "3 is even or prime" by 

$$
\tt P\tt \lor \tt Q
$$
All of this is very similar to the conversation for conjunction.

> [!definition] ***Definition***
> 
> Let $\tt \phi$ and $\tt \psi$ be propositional formulas. 
> 
> We define their **syntactic disjunction to be the expression 
> 
> $$ (\tt \phi\tt \lor\tt \psi) $$
>
> We define the boolean operator, **semantic disjunction**, by
> 
> $$ \begin{aligned}
> ट\curlyvee ट = ट\\\\
> ट\curlyvee फ = ट\\\\
> फ\curlyvee ट = ट\\\\
> फ\curlyvee फ = फ
> \end{aligned}$$
> 
> If $म$ is a model defined for $\tt \phi$ and $\tt \psi$, then we define 
> 
> $$
> (\tt \phi\tt \lor\tt \psi)^{म}= \tt \phi^{म}\curlyvee \tt \psi^{म}
> $$

Here is the truth-table for disjunction: 

$$
\begin{array}{|c|c||c|c|c|}
 \hline
 \tt P & \tt Q & \tt P & \tt \lor & \tt Q \\\hline
 \color{red}ट & \color{red}ट & & \color{red}ट & \\
 ट & फ & & ट & \\
 \color{red}फ & \color{red}ट & & \color{red}ट & \\
 फ & फ &  & फ &  \\\hline
\end{array}
$$

> [!exercise] ***Exercise***
> In the same way that $ट\curlyvee ट = ट$ means 
> > True or true is true.
> 
> likewise explain the other equations which define $\curlyvee$.

> [!exercise] ***Exercise***
>
> Suppose that $\tt P$ and $\tt Q$ are true while $\tt R$ is false.
> 
> Find $(\tt P\tt \lor (\tt Q\tt \land \tt R))^{म}$.

# Negation

Recall the definition of a composite number: An integer $n\ge 2$ is composite if it is not prime.  

We say that the definition of "composite" is the *negation* of the definition of *prime*.  

If we represent the proposition “8 is prime” by $\tt P$, then its negation is represented by 

$$
\tt \neg \tt P
$$

> [!definition] ***Definition***
> 
> Let $\tt \phi$ be a propositional formula.  
> 
> Its **syntactic negation** is the formula $\tt \neg \tt \phi$.  Any negation of a formula is a formula.
>
> We define the boolean operation of **semantic negation** by
> 
> $$\begin{aligned}
> \sim ट =फ\\\simफ =ट
> \end{aligned}$$
> 
> For a model $म$ defined for $\tt \phi$, we define 
> 
> $$
> (\tt \neg \tt \phi)^{म} = \ \ \sim \tt \phi^{म}
> $$

The truth-table for negation is 

$$
\begin{array}{|c||c|c|}\hline
  \tt P & \tt \neg & \tt P \\\hline
 \color{red}ट & \color{red}फ & \\
फ &ट & \\\hline
\end{array}
$$

Notice that since the table has only two rows.  This is due to the fact that negation only operates on a single proposition.  That proposition has only two possible values, true or false, and therefore requires only two rows of a table.

> [!exercise] ***Exercise***
> 
> Show that $\sim(\sim ट) = ट$ and $\sim(\sim फ) = फ$.
> 
> After you have done this, we now know that $\sim(\sim x) = x$ for each $x\in \{ट,फ\}$.  
>
> Let $म$ be a model defined for $\tt P$.  
> 
> Explain why $(\tt \neg(\tt \neg \tt P))^{म} = \tt P^{म}$, no matter which model is used.

# Conditional

Arguably, the conditional the most important operator, because it plays a role in nearly every mathematical theorem.  

Let’s take for example the conditional sentence,

> If $\tt X\subseteq \Bbb Z$ is a set of integers which is bounded below, then $\tt X$ has a minimum.

“If” usually indicates which part of the conditional we call the “antecedent”. This is the part which you are meant to "imagine" or "assume" is true.  So for this theorem you are supposed to assume that $\tt X$ is a set of integers bounded below.

"Then" indicates the "consequent" of the conditional.  This is the part of the sentence which is claimed to be true, as long as we assume the antecedent.  The consequent of the example sentence is "$\tt X$ has a minimum".

If $\tt P$ and $\tt Q$ are propositional variables, then $\tt P\tt \to \tt Q$ represents "if $\tt P$ then $\tt Q$".

Most people would guess that $\tt P\tt \to \tt Q$ is true when both $\tt P$ and $\tt Q$ are true.  Hence we have the first row of the truth-table. 

$$
\begin{array}{|c|c||c|c|c|}\hline
 \tt P&\tt Q&\tt P&\tt \to &\tt Q\\\hline
 \color{red}ट & \color{red}ट & & \color{red}ट & \\
\end{array}
$$

Now what if $\tt P$ is true and $\tt Q$ false?  For example what if we state “If 2 is prime then 2 is odd”?  Here $\tt P$ is “2 is prime” and $\tt Q$ is “2 is odd”.  I think we easily understand that this statement is false because 2 is prime, but 2 is not odd.  

Therefore the next row of the table is:

$$
\begin{array}{|c|c||c|c|c|}\hline
 \tt P&\tt Q&\tt P&\tt \to &\tt Q\\\hline
 \color{red}ट & \color{red}ट & & \color{red}ट & \\
 ट & फ & & फ & \\
\end{array}
$$

The part that many people struggle to understand comes next.  

What are we supposed to say, when $\tt P$ is false?  Consider some example “if-then” propositions, in which the antecedent is false.  

- If 2 is bigger than 3, then triangles have three sides.
- If 2 is bigger than 3, then triangles are round.

In the first example, $\tt P$ is false, and $\tt Q$ is true.  In the second example, $\tt P$ is false and $\tt Q$ is false.  What should the truth-table contain for these rows?

> [!note]- It is traditional for mathematicians to regard both of these as true statements.  
> 
> Here is an argument for why that’s a good idea:  
> 
> It is clearly a true principle that “if $\tt x$ is a natural number divisible by 4, then $\tt x$ is even”.  As such, if we “plug in” any natural number $\tt x$, we should get a true proposition.  
> 
> Therefore if we plug in $x=5$, the result must be a true proposition.  When we do, we have the proposition “if 5 is a natural number divisible by 4, then 5 is even”.  The antecedent is false, and the consequent is false. 
> 
> Therefore when the antecedent and consequent are false, the conditional must be true.  One can find a similar argument for the case when the antecedent is false and the consequent true.  

The conditional truth-table is 

$$
\begin{array}{|c|c||c|c|c|}\hline
 \tt P&\tt Q&\tt P&\tt \to &\tt Q\\\hline
 \color{red}ट & \color{red}ट & & \color{red}ट & \\
 ट & फ & & फ & \\
 \color{red} फ & \color{red} ट & & \color{red} ट & \\
फ & फ & & ट & \\\hline
\end{array}
$$

> [!note]- Note: This is called the “material conditional”.
    >
    >The understanding of “if-then” presented above, is the one that is used throughout mathematics.  
    >
    >However, it is not a good model for how most English language uses the “if-then” construction.  
    >
    > Consider "if you had stood two inches to the left then you would have been crushed". 
    > 
    > ![[busterkeaton.png]]
    > 
    > We cannot analyze this with propositional logic, because the antecedent "you had stood two inches to the left" does not have truth-value!  If we say this about [Buster Keaton](https://en.wikipedia.org/wiki/Buster_Keaton) (pictured above) then he was not two inches to the left. So what does "you had stood two inches to the left" even mean here?  Said outside the context of the if-then structure, this is just grammatically ill-formed.
    > 
    > But the entire idea of propositional logic, is to determine the meaning of the whole sentence (here, the conditional) by understanding each component in isolation, and then composing those components.  This simply does not work with [counter-factual conditionals](https://en.wikipedia.org/wiki/Counterfactual_conditional) like the one above.
    > 
    > Just as the material conditional is inadequate for analyzing counterfactuals, it is also unable to adequately express [causal conditionals](https://plato.stanford.edu/entries/causal-models/).  
    >
    >The interested reader is welcome to research the topic of [the material conditional](https://en.wikipedia.org/wiki/Material_conditional), and related ideas.

