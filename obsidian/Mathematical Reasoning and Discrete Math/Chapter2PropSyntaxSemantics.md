---
title: "Chapter 2: Propositional Syntax and Semantics"
---


What we have learned about number theory can now serve as a collection of examples while we study logic.

What does “logic” study?  Take the following ([historically famous](https://en.wikipedia.org/wiki/Syllogism)) simple example of a logical argument.

> All men are mortal.
> 
> Socrates is a man.
> 
> Therefore Socrates is mortal.

> [!note]- By "argument" we do not mean "a conflict".
> In logic, we use the word "argument" a bit unlike how it is commonly used.  Often we colloquially think of an argument as a kind of conflict.
> 
> For logicians an argument is really any explanation of how a set of assumed facts imply some conclusion.  
> 
> See [the Wikipedia article on arguments](https://en.wikipedia.org/wiki/Argument) for more details.  

This is an example of logic because it is an *inference*.  It concludes the proposition "Socrates is mortal" from other, already-accepted propositions.  

Notice that it is not pure logic, because the argument also depends on accepting "all men are mortal" and "Socrates is a man".  (Let's ignore any issues from the fact that Socrates no longer exists.)  

While these propositions are true, we don't accept them due to an inference.  Rather we accept them due to experience, or science, or other reasons. But because we do not accept them from inference, then we regard them as "non-logical".  

> [!note]- Distinction between "illogical" and "non-logical".
> You might find it strange, that a true statment like "all men are mortal" would be regarded as "non-logical".  Does that mean we regard it as false?
> 
> Not at all!  Certainly "all men are mortal" is a true proposition. It is simply "non-logical" because we accept it on the basis of something other than logical inference.
> 
> So a proposition like "all men are mortal" is an instance of a "non-logical truth".  Non-logical truths are necessary, because if everything that we accept had to be justified by an inference, we would obtain an [infinite regress](https://en.wikipedia.org/wiki/Infinite_regress)! 

# Logical Abstraction

The argument 

> All men are mortal.
> 
> Socrates is a man.
> 
> Therefore Socrates is mortal.

has several non-logical concepts, like "men" and "Socrates".  These are specific concepts, while logic is interested in general principles of reasoning.  Therefore, in logic we would like to "abstract away" any of the non-logical concepts.

The following is the abstraction of the argument.

> All *A* are *B*.
> 
> *x* is an *A*.
> 
> Therefore *x* is *B*.

This replaces the non-logical components with symbols like *A* and *B*.  These symbols act as place-holders for any non-logical content that you might like to use.

For example, consider the argument 

> All cats are mammals.
> 
> Tabby is a cat.
> 
> Therefore Tabby is a mammal.

This argument has exactly the same structure as the argument regarding Socrates' mortality.  They only differ by the non-logical content.

From the abstract form, 

> All *A* are *B*.
> 
> *x* is an *A*.
> 
> Therefore *x* is *B*.

we can obtain either the argument about Socrates or the argument about Tabby, by an appropriate substitution of the symbols *A*, *B*, and *x*.  

> [!exercise] ***Exercise***
> Consider the argument "James Brown was a funk singer, and a dancer.  Every funk singer is a musician.  Therefore James Brown was a musician and a dancer."
> 1. Identify the premises and conclusion of the argument.
> 2. Form the logical abstraction of this argument.  

# Syntax and Semantics

A significant theme in the study of logic is the dual nature of “syntax” and “semantics”.  

To briefly acquaint yourself with these ideas, at a less technical level, you may want to read the introductory paragraphs here:

- [https://en.wikipedia.org/wiki/Syntax](https://en.wikipedia.org/wiki/Syntax)
- [https://en.wikipedia.org/wiki/Semantics](https://en.wikipedia.org/wiki/Semantics)

Put roughly, syntax is “how we write expressions”.  It is concerned with the symbols, and how they are structured to form expressions which we will regard as “meaningful”.

Semantics is “the meaning that we assign to the syntax”.

By an analogy to natural languages, English and Hindi syntax may use different symbols to write the word “puppy”.  However, we share the same semantic concept of “an adorable young dog”.

# Languages and Alphabets

In the study of logic, we will create a few different kinds of “languages of logic”.  The first language will be the language of "propositional logic", to be defined soon.  Later we will define an expansion of this to "predicate logic" and then "first-order logic".  

Each next language has greater expressive power than the one before it.  That is to say, predicate logic is able to represent more precise meaning than propositional logic, and first-order logic can express even more than that.

Because we will study languages, we should first discuss some ideas that are relevant to languages generally.  

First: every language has an alphabet.  A language’s alphabet is the collection of symbols which are used to express anything.  The English language syntax includes the standard alphabet, 26 letters from ‘a’ to ‘z’.  

But in fact, it includes much more than this.  It includes capitalization, spaces, punctuation, parentheses, and numerals.  

Just for contrast: the Hindi syntax includes a different set of letters, called [Devanagari](https://en.wikipedia.org/wiki/Devanagari).  Hindi also has punctuation and numerals, which are mostly similar to English punctuation and numerals.  

The point is that languages can differ in the choice of fundamental symbols.  So when you describe a language, a natural starting place is to describe the alphabet.  And when we do so, we should take a very expansive view of what we mean by its “alphabet”—this should include every symbol that is commonly understood when a native speaker sees it on a page.

# Strings and Signifiers

We may take any nonempty set to serve as our alphabet.  

> [!definition] ***Definition***
>
> Let $\Sigma$ be any nonempty set.  We call $\Sigma$ an **alphabet**, and any element $x\in\Sigma$ is called a **character**.  
> 
> Any finite sequence of characters from $\Sigma$ is called a **string over** $\Sigma$.  The set of all possible strings is written as $\Sigma^\ast$.
> 
> A **language over** $\Sigma$ is any subset of $\Sigma^*$.  That is to say, if $L\subseteq \Sigma^*$ then we call *L* a language over $\Sigma$.  
> 
> If *L* is a language, and $m\in L$, we will call *m* a **signifier in *L***.
> 
> For short, we often call a string over $\Sigma$ just a **string**.  We call a language over $\Sigma$ just a **language**.  We call a signifier in *L* just a **signifier**.  Context usually makes it clear what the alphabet is.

For example, if we use these definitions to describe English, then $\Sigma$ would contain at least the 26 standard letters, but then also spaces, upper-case letters, punctuation, and so on.  

Then a string would just be any finite sequence of these symbols (or characters).  For example “jhb88qtio weqir?j]—…, ” is a string.  It’s a nonsense string, but it still counts as a string.  

The sentence “Hello friend.” is another example of a string, but it is also a signifier in English because it is meaningful.  Also just the word “hello” is a signifier in English, because “hello” means something.  

Another language, like say Hindi, might have strings like “झैठृ ङौप्ष ञीक्थ लॄझ्फ टैंषो धृङ्चै भौट्ण”.  This is a string over Devanagari, although it is not a signifier in Hindi because it is a meaningless sequence of characters.  

> [!exercise] ***Exercise***
>
> How many strings of length 2 are possible, if your only characters are ‘0’ and ‘1’?
> 
> How many strings of length 3 are possible, if your only characters are ‘0’, ‘1’, ‘2’, and ‘3’?

> [!exercise] ***Exercise***
>
> Decide whether the following strings are signifiers in mathematics.
> 
> 1. $x^2+1$
> 2. $+$
> 3. $1+$

# Recursive Definition

In order to define many of the languages that we will study, we'll need to define them "recursively".

To define a set recursively means to:

1. Define a few elements of the set. This is the "base case".
2. Show how to construct new elements, using elements which already exist in the set. This is the "recursive case".

Here is a simple example: we can define the set of even positive integers, *S*, recursively.  To define it, we begin by defining $2\in S$.  This is the base case.

Next, if $x\in S$ is any element of the set, then also $x+2\in S$.  That is to say, we may construct a new element of *S* by taking any existing element and adding 2.  This is the "recursive case".

Therefore $2\in S$ because of the base case.  But also $2+2\in S$ if we apply the recursive case, where $x=2$.  This shows that $4\in S$.

But now that we have $4\in S$ it follows that $4+2 = 6\in S$, by another application of the recursive case.  And then because $6\in S$ it follows that $6+2=8\in S$, and so on.  

Here is an example more obviously relevant to languages: Let’s consider the very simple alphabet $\Sigma = \{0,1\}$.  That is to say, the only characters that we will consider are ‘0’ and ‘1’.  Examples of strings over $\Sigma$ are ‘010’ and ‘11011011’.  

- In fact, this character set is used very often in computer science.
  
  Any language with alphabet $\{0,1\}$ is called a "binary language".  This is often a good model for the low-level language of computer code.  

Consider the language of all strings which begin with a 1.  

$$
L = \{1, 10, 11, 100, 101, 110, ...\}
$$

Let’s practice how we could express this language recursively.  We could say:

- Base case: $1\in L$.
- Recursive case: For any $x\in L$, we have $x0\in L$ and $x1\in L$.

Let me demonstrate, from the recursive definition, that $101\in L$.

We know that $1\in L$ from the base-case.  

Because $1\in L$ we may take $x=1$ in the recursive case.  Therefore, from the first part of the recursive case, $10\in L$.

Because $10\in L$ we may this time take $x=10$ in the recursive case.  Therefore, from the second part of the recursive case, $101\in L$.

> [!exercise] ***Exercise***
>
> Show that $110\in L$.

> [!exercise] ***Exercise***
>
> Let $\Sigma=\{0,1\}$ still.
> 
> However, let’s define a new language, *M*.  Let *M* be the language of all strings which begin with 11.  So $11\in M$ and $110\in M$ but for example, $1\notin M$ and $10\notin M$.  
> 
> Give a recursive definition of *M*.

> [!exercise] ***Exercise***
>
> Let $\Sigma = \{0,1\}$ and define *N* to be the language of strings that represent a binary number.  
> 
> A string represents a binary number if:
> 
> - It is 0 or,
> - It begins with 1.
> 
> So for example, 0 is a binary number, and so is 1, and so is 10, and so is 11, and so on.
> 
> Effectively, *N* is just the same thing as *L* above, except that *N* contains one extra string, 0.  
> 
> Give a recursive definition of *N*.  
> 
> *Hint*: $1x$.

Here is another language that will be relevant to things we do later on: Let $\Sigma = \{(,)\}$.  That is to say, the alphabet contains two elements, the left- and right-parentheses.

$$
\begin{aligned}
 (\ \ &\in\Sigma \\
 )\ \ &\in \Sigma
\end{aligned}
$$

Let’s define the language, *L*, of “balanced parentheses”.

- Base case: $()\in L$.
- Recursive case: If $x\in L$ then also $()x\in L$ and $(x)\in L$, and $x()\in L$.

So this means that ‘()’ is a signifier in the language of balanced parentheses.  

Also ‘()()’ is a signifier.  Why?  Well we can explain it like before.  

We know from the base case that $()\in L$.

Because $()\in L$ we can then take $x=()$ in the recursive case, and consider the first part of the recursive case.  That tells us $()x=()()\in L$.

> [!exercise] ***Exercise*** 
>
> Using the same *L* as immediately above, show that $((()()()))\in L$.

# Propositions

> [!definition] ***Definition***
>
> A **proposition** is any sentence that is either true or false.

We will often write *T* as a symbol for “true” and *F* as a symbol for “false”.

It is easy to think of propositions.  For example, “Japan is east of China” is a true proposition, while “3 is less than 2” is a false proposition.  

You can have a proposition like “The ball is red” which is true when pointing to a red ball.  That same proposition is false when pointing to a white ball.  

It might even seem hard to think of sentences that are *not* propositions, until you see a few examples!

- Pick up milk when you go to the store.
- What time is it?
- Hooray!

None of the above sentences are either true or false, so these are sentences which are not propositions.

# Propositional Variables, Syntax and Semantics

Out of a desire for abstraction,  we will instead represent a proposition by a single letter, like *P*.  This is called a “propositional variable”.  Just like how a mathematical variable is allowed to take a bunch of different numeric values, a propositional variable is allowed to be or “take on” a bunch of different propositions.

Therefore when we write *P*, we don’t necessarily know which proposition it refers to.  For the purposes of logic, there are really just two interesting possibilities: *P* may be true or false.  

This is our first introduction to syntax and semantics: The symbol *P* is the syntax of an expression.  Its semantics is the truth-value (*T(rue)* or *F(alse)*) that we choose to give it.  When choosing to give *P* the value *T*, we are imagining that *P* is some true sentence.  If we choose to give *P* the value *F*, we are imagining that *P* is a false sentence.

Because it is valuable to keep straight, which things are syntax and which are semantics, it is helpful to write each in a distinctive script.  It is traditional to write syntax in standard italic letters, and it is sometimes common to write semantics in Fraktur font.  

We will use $\frak T$ (Fraktur ‘T’) for “true”, and $\frak F$ (Fraktur ‘F’) for “false”.

> [!definition] ***Definition***
>
> *Syntax*
> 
> A **propositional variable** is a variable (a symbol) which could denote any proposition. It is standard to use symbols like *P, Q,* or indexed symbols like $P_1,P_2,\dots$ for propositional variables.
> 
> Every propositional variable is a **propositional formula** (or just **formula** for short).
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
    >But one might reasonably wonder “Ok, I think I get that.  But like … what *is* a model?  Like, if I write $\mathfrak M = …$ what is the the “…”?  It’s obviously not a sentence, it’s not a number, it’s not a this and not a that.  What *is* it?
    >
    >Technically, a model is a function.  The inputs are the propositional variables and the outputs are truth-values.  
    >
    >We could — and I think some authors do — use standard function notation for models.  In their notation, instead of writing $P^{\frak M}=\frak T$ they write $\frak M(P) = \frak T$.  However, as we will see later, our propositions are going to involve a LOT of parentheses.  If we use standard function notation like that, we introduce *yet more* parentheses.  
    >
    >That is just one aesthetic, readability reason to not use standard function notation.  There are others: Putting $\frak M$ inline with the rest of the proposition is also visually confusing because you’re slightly tempted to read the model as part of the propositional expression.  
    >
    >Therefore I, along with many other authors of logic texts, prefer to write the model as a superscript.
    >
    >But really, the model is a function.
    

Let’s see an example.  Let *P* and *Q* be propositional variables.  

If $\frak M$ gives the value $\frak T$ to the variable *P*, then we will write $P^{\frak M}=\frak T$.  Likewise if $\frak M$ gives the value $\frak F$ to the variable *Q*, we will write $Q^{\frak M} = \frak F$.  

Of course, one could also choose a model which made any other assignment of values to the variables—say, assigning $P^{\frak M}= \frak F$ and $Q^{\frak M}= \frak T$.  

If there is just one variable, then two models are possible: Either your model is $\frak M_1$ such that $P^{\frak M_1}=\frak T$ or it is $\frak M_2$ such that $P^{\frak M_2}=\frak F$.

If there are two variables, then four models are possible.  One of them is $\frak M_1$ such that $P^{\frak M_1}= \frak T$ and $Q^{\frak M_1}= \frak T$.  

> [!exercise] ***Exercise***
>
> Find the other models for two variables, *P* and *Q*.  

> [!exercise] ***Exercise***
>
> Suppose that you have three propositional variables, *P, Q*, and *R*.
> 
> How many models are possible?

Note that, as we proceed, we are hoping to develop both a syntax and semantics for propositional logic.  

We have said that syntax starts from an alphabet, $\Sigma$, for this language.

The definition above indicates that the alphabet will include the symbols  

$$
A, B, C, ..., Z\in \Sigma
$$

and also, in case we need more, the indexed symbols

$$
A_1, A_2, \dots, B_1, B_2,\dots Z_1,Z_2,... \in \Sigma
$$

We will prefer *P*, *Q*, and so on, out of tradition.  But technically, we will recognize any capital italics Latin letter, with or without numeric indices, as a symbol in the language.  

Moreover, these symbols will be meaningful.  They represent a proposition, which we regard as a meaningful component in propositional logic.  It is because they are meaningful, that we are able to give them a semantics (in this case, that means giving them a truth-value by way of a model).  

The meaningful expressions in this language are the propositional formulas.  That is to say, the language *L* is the set of propositional formulas.  The set of formulas contains all the variables.

$$
A,B,C,..., Z, A_1, A_2, \dots,B_1,B_2, ... Z_1,Z_2,...\in L
$$

*L* will eventually contain more than just these variables—but this is our “base case”.

# Syntactic Conjunction

Consider the set $A=\{1,2,3,4\}$ and the minimum $\min A = 1$.

The minimum is 1 because 

- 1 is a lower bound of *A*, and
- $1\in A$.

This is a *conjunction* of the two propositions, because both are required for 1 to be the minimum of *A*.  (Conjunction is formally defined below. For now I am describing this at a relatively intuitive level.)

We could represent the proposition “1 is a lower bound of *A*” as the variable *P*.

We could represent “$1\in A$” as the variable *Q*.

Then we would represent the conjunction of *P* and *Q* as 

$$
P\land Q
$$

That is to say, we will use the “up wedge” to represent conjunction.  

---

We are also able to form more complex conjunctions, like 

$$
(P\land Q)\land (R\land S)
$$

Even though $(P\land Q)$ is not a propositional *variable*, it still represents a proposition.  Likewise for $(R\land S)$.  Therefore it makes sense if we form the conjunction of these two.

So we don’t just form the conjunction of variables, we can also form the conjunction of “formulas”.  Formulas are any combination of variables and propositional symbols, which represent propositions.  

Propositional formulas (more general than propositional variables) will traditionally be denoted by lowercase italics Greek letters.

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

---

Let $\Sigma$ be the alphabet for propositional logic.  Let *L* be the language (again, this is the same as the set of formulas)

We now have 

$$
A, B,...,Z,A_1,A_2,...,B_1,B_2,...,Z_1,Z_2,... \in \Sigma
$$

and now also there are parentheses and the $\land$ symbol,

$$
(,),\land \in \Sigma
$$

The definitions above give us the recursive rules:

- Base case: $A,B,…,Z,A_1,A_2,…,B_1,B_2,…,Z_1,Z_2,…\in L$.
- Recursive case: If $\phi,\psi\in L$ then $(\phi\land\psi)\in L$.

For example, these rules imply $(P\land (Q\land R))\in L$, which we can prove in the following way.  

$Q,R\in L$ by the base case.  

Because $Q,R\in L$ then we take $\phi=Q$ and $\psi=R$ in the recursive case.  Therefore this rule tells us that $(Q\land R)\in L$.  

$P\in L$ by the base case.

Because $P\in L$ and $(Q\land R)\in L$, then we may take $\phi=P$ and $\psi=(Q\land R)$ in the recursive case.  Therefore this rule tells us that $(P\land (Q\land R))\in L$.  

> [!exercise] ***Exercise***
>
> With $\Sigma, L$ the alphabet and language of propositional logic, show that 
> 
> $$
> ((P\land Q)\land (R\land S))\in L
> $$

# Semantic Conjunction

Although the definition of conjunction above is correct, notice that it doesn’t actually tell you what conjunction is supposed to *represent* or what it’s supposed to *do*.  It tells us the syntax, but not the semantics, which is about truth-value.

> [!definition] ***Definition***
>
> We define the boolean algebra operation, **semantic conjunction**.  It is denoted by $\curlywedge$, and defined as an operation on truth-values, as follows.  
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

