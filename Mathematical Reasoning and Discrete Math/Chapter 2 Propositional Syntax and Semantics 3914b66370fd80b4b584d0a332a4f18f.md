# Chapter 2: Propositional Syntax and Semantics

Now that we’ve seen an extended example of the use of logic and sets in order to reason about number theory, this gives us a lot of examples that we can appeal to as we describe the abstract study of sets and logic.  Sets and logic form not just the tools of number theory, but in fact they are the fundamental tools of nearly every subject in mathematics.  

What does “logic” study?  Take the following ([historically famous](https://en.wikipedia.org/wiki/Syllogism)) simple example of a logical argument.

> All men are mortal.
Socrates is a man.
Therefore Socrates is mortal.
> 

This argument is not *pure* logic, because it relies on first accepting the principle that “all men are mortal”.  It also requires accepting “Socrates is a man”.  

These may be true, but they are not *logical* principles.  Rather, they are accepted on the basis of empiricism or science.  

Logic is not concerned, fundamentally, with which propositions are true: Rather it is concerned with the question “Once we accept certain sentences as true, how can we work out their consequences, in order to determine other sentences which must also be true?”

To abstract the earlier argument into a purely logical expression, a logician would instead write 

> All *A* are *B*.
*x* is an *A*.
Therefore *x* is *B*.
> 

The above is an abstraction, which is accomplished by replacing non-logical ideas like “men” and “mortal”, with a mere symbol like *A* and *B*.  This gets close to what I mean by a “language of logic”.  This abstraction has its own symbols and its own acceptable ways of composing them into meaningful expressions.  

After abstracting the non-logical parts, what is left over are terms and ideas that are relevant to the study of logic.  These are words like “all”, and “are”, and “is”, and “therefore”.

# Syntax and Semantics

A significant theme in the study of logic, is the dual nature of “syntax” and “semantics”.  

To briefly acquaint yourself with these ideas, at a less technical level, you may want to read the introductory paragraphs here:

- [https://en.wikipedia.org/wiki/Syntax](https://en.wikipedia.org/wiki/Syntax)
- [https://en.wikipedia.org/wiki/Semantics](https://en.wikipedia.org/wiki/Semantics)

Put roughly, syntax is “how we write expressions”.  It is concerned with the symbols, and how they are structured to form expressions which we will regard as “meaningful”.

Semantics is “the meaning that we assign to the syntax”.

By an analogy to natural languages, English and Hindi syntax may use different symbols to write the word “puppy”.  However, we share the same semantic concept of “an adorable young dog”.

[https://share.google/buWyGwrBr2UASod3Q](https://share.google/buWyGwrBr2UASod3Q)

# Alphabet, Language, and Abstraction

In the study of logic, we will create a few different kinds of “languages of logic”.  These languages will increase in complexity, and their power to express kinds of logical inference.  

The starting place to describe the syntax of a language, is its alphabet.  A language’s alphabet is the collection of symbols which are used to express anything.  The English syntax includes the standard alphabet, 26 letters from ‘a’ to ‘z’.  But in fact, it includes much more than this, to fully describe all written expressions.  

It includes capitalization, spaces, punctuation, parentheses, and numerals.  

Just for contrast: the Hindi syntax includes a different set of letters, called [Devanagri](https://en.wikipedia.org/wiki/Devanagari).  But otherwise, we tend to share a lot of the same non-alphabetic symbols, like punctuation, spaces, and so on.  Our numerals are similar but not exactly the same.  

The point being is that languages can differ in the choice of fundamental symbols.  So when you describe a language, a natural starting place is to describe the alphabet.  And when we do so, we should take a very expansive view of what we mean by its “alphabet”—this should include every symbol that is commonly understood when a native speaker sees it on a page.

# Strings and Languages

We may take any nonempty set to serve as our alphabet.  

***Definition***

Let $\Sigma$ be any nonempty set.  We call $\Sigma$ an **alphabet**, and any element $x\in\Sigma$ is called a **character**.  

Any finite sequence of characters from $\Sigma$ is called a **string over** $\Sigma$.  The set of all possible strings is written as $\Sigma^\ast$.

A **language over** $\Sigma$ is any subset of $\Sigma^*$.  That is to say, if $L\subseteq \Sigma^*$ then we call *L* a language over $\Sigma$.  

If *L* is a language, and $m\in L$, we will call *m* a **signifier in *L***.

For short, we often call a string over $\Sigma$ just a **string**.  We call a language over $\Sigma$ just a **language**.  We call a signifier in *L* just a **signifier**.  When shortening our vocabulary like this, it’s because context usually makes it clear what these things are “over” or “in”.  

For example, if we use these definitions to describe English, then $\Sigma$ would contain at least the 26 standard letters, but then also spaces, upper-case letters, punctuation, and so on.  

Then a string would just be any finite sequence of these symbols (or characters).  For example “jhb88qtio weqirj]—…, ?” is a string.  It’s a nonsense string, but it still counts as a string.  

The sentence “Hello friend.” is another example of a string, but it is also a signifier in English because it is meaningful.  Also just the word “hello” is a signifier in English, because “hello” means something.  

Another language, like say Hindi, might have strings like “झैठृ ङौप्ष ञीक्थ लॄझ्फ टैंषो धृङ्चै भौट्ण”.  This is a string over Devanagri, although it is not a signifier in Hindi.  

***Exercise***

How many strings of length 2 are possible, if your only characters are ‘0’ and ‘1’?

How many strings of length 3 are possible, if your only characters are ‘0’, ‘1’, ‘2’, and ‘3’?

***Exercise***

Decide whether the following strings are signifiers in mathematics.

1. $x^2+1$
2. $+$
3. $1+$

# Recursive Definition

This chapter will build up the notion of “propositional logic”, which is a simple logical language.  It will also develop the idea of a “formula” which is a signifier in propositional logic.  

To do so, we will have to build up this idea “recursively”.  What that means is: 

- Tell you a few basic formulas.
- Tell you how to construct more complex formulas from other formulas.

Before we do that, it will be helpful to exercise the idea of recursion generally.

Here is an example: Let’s consider the very simple alphabet $\Sigma = \{0,1\}$.  That is to say, the only characters that we will consider are ‘0’ and ‘1’.  Examples of strings over $\Sigma$ are ‘010’ and ‘11011011’.  

- In fact, this character set is used very often in computer science.
    
    The word “bit” means either ‘0’ or ‘1’, so that the alphabet here is the set of bits.  We call a string over $\{0,1\}$ a “bit string”.
    
    This is a useful language for talking about computer hardware.
    

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

Because $10\in L$ we may this time take $x=1$ in the recursive case.  Therefore, from the second part of the recursive case, $101\in L$.

***Exercise***

Show that $110\in L$.

***Exercise***

Let $\Sigma=\{0,1\}$ still.

However, let’s define a new language, *M*.  Let *M* be the language of all strings which begin with 11.  So $11\in M$ and $110\in M$ but for example, $1\notin M$ and $10\notin M$.  

Give a recursive definition of *M*.

***Exercise***

Let $\Sigma = \{0,1\}$ and define *N* to be the language of strings that represent a binary number.  

A string represents a binary number if:

- It is 0 or,
- It begins with 1.

So for example, 0 is a binary number, and so is 1, and so is 10, and so is 11, and so on.

Effectively, *N* is just the same thing as *L* above, except that *N* contains one extra string, 0.  

Give a recursive definition of *N*.  

*Hint*: $1x$.

Here is another language, which will be relevant to things we do later on: Let $\Sigma = \{(,)\}$.  That is to say, $\Sigma$ contains two elements, the left- and right-parentheses.

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

Because $()\in L$ we can then take $x=()$ in the recursive case, and consider the first part of the recursive case.  That tells us $()()\in L$.

***Exercise*** 

Using the same *L* as immediately above, show that $((()()()))\in L$.

# Propositions

***Definition***

A **proposition** is any sentence that is either true or false.

We will often write *T* as a symbol for “true” and *F* as a symbol for “false”.

It is easy to think of propositions.  For example, “Japan is east of China” is a true proposition, while “3 is less than 2” is a false proposition.  You can have a proposition like “The ball is red” which is true when pointing to a red ball, and false when pointing to a white ball.  

There are immediate and interesting linguistic concepts here, like “[indexicals](https://en.wikipedia.org/wiki/Indexicality)” and “[counterfactuals](https://en.wikipedia.org/wiki/Counterfactual_thinking)” and lots of other kinds of propositions.  But our interest is mathematics, so let’s not get distracted.

It might even seem hard to think of sentences that are *not* propositions, until you see a few examples!

- Pick up milk when you go to the store.
- What time is it?
- Hooray!

None of the above sentences are either true or false, so these are sentences which are not propositions.

# Propositional Variables, Syntax and Semantics

In logic, as in mathematics, we strive for abstraction.  If we think of a proposition like “3 is less than 2”, this has a lot of mathematical (not logical) content.  So we would like to abstract away the non-logical content, so that we may focus only on the logical content.  

Therefore we will instead represent a proposition by a single letter, like *P*.  This is called a “propositional variable”.  Just like how a mathematical variable is allowed to take a bunch of different numeric values, a propositional variable is allowed to be or “take on” a bunch of different propositions.

Therefore when we write *P*, we don’t necessarily know which proposition it refers to.  For the purposes of logic, there are really just two interesting possibilities: *P* may be true or false.  

This is our first introduction to syntax and semantics: The symbol *P* is the syntax of an expression.  Its semantics is the truth-value (*T(rue)* or *F(alse)*) that we choose to give it.  When choosing to give *P* the value *T*, we are imagining that *P* is some true sentence.  If we choose to give *P* the value *F*, we are imagining that *P* is a false sentence.

Because it is valuable to keep straight, which things are syntax and which are semantics, it is helpful to write each in a distinctive script.  It is traditional to write syntax in standard italic letters, and it is sometimes common to write semantics in Fraktur font.  

We will use $\frak T$ (Fraktur ‘T’) for “true”, and $\frak F$ (Fraktur ‘F’) for “false”.

***Definition***

*Syntax*

A **propositional variable** is a variable (a symbol) which could denote any proposition. It is standard to use symbols like *P, Q,* or indexed symbols like $P_1,P_2,\dots$ for propositional variables.

Every propositional variable is a **propositional formula** (or just **formula** for short).

*Semantics*

If $P_1,P_2,\dots$ are propositional variables, then a **truth model** (or just **model** for short, also sometimes called a **truth-assignment** or a **truth-function**) is an assignment of truth-values to the variables.  The truth-values are **true** and **false**, represented by $\frak T$ and $\frak F$.

We will denote a truth model by the symbol $\frak M$ (Fraktur ‘M’).

If $\frak M$ assigns $\frak T$ to *P*, we write 

$$
P^{\frak M}= \frak T
$$

and if $\frak M$ assigns $\frak F$ to *P* we write 

$$
P^{\frak M}= \frak F
$$

- A model is a function.
    
    The above establishes that a model assigns truth-value to propositional variables.  We can pick any model that we want, depending on our intended interpretation of the propositional variables.  
    
    If we intend for the variable *P* to express “1 + 1 = 2” then we would pick a model, $\frak M$, in which $P^{\frak M}=\frak T$.  If we use *P* to stand for “1 + 1 = 0” then we would pick our model such that $P^{\frak M}=\frak F$.
    
    But one might reasonably wonder “Ok, I think I get that.  But like … what *is* a model?  Like, if I write $\mathfrak M = …$ what is the the “…”?  It’s obviously not a sentence, it’s not a number, it’s not a this and not a that.  What *is* it?
    
    Technically, a model is a function.  The inputs are the propositional variables and the outputs are truth-values.  
    
    We could — and I think some authors do — use standard function notation for models.  In their notation, instead of writing $P^{\frak M}=\frak T$ they write $\frak M(P) = \frak T$.  However, as we will see later, our propositions are going to involve a LOT of parentheses.  If we use standard function notation like that, we introduce *yet more* parentheses.  
    
    That is just one aesthetic, readability reason to not use standard function notation.  There are others: Putting $\frak M$ inline with the rest of the proposition is also visually confusing because you’re slightly tempted to read the model as part of the propositional expression.  
    
    Therefore I, along with many other authors of logic texts, prefer to write the model as a superscript.
    
    But really, the model is a function.
    

Let’s see an example.  Let *P* and *Q* be propositional variables.  

If $\frak M$ gives the value $\frak T$ to the variable *P*, then we will write $P^{\frak M}=\frak T$.  Likewise if $\frak M$ gives the value $\frak F$ **to the variable *Q*, we will write $Q^{\frak M} = \frak F$.  

Of course, one could also choose a model which made any other assignment of values to the variables—say, assigning $P^{\frak M}= \frak F$ and $Q^{\frak M}= \frak T$.  

If there is just one variable, then two models are possible: Either your model is $\frak M_1$ such that $P^{\frak M_1}=\frak T$ or it is $\frak M_2$ such that $P^{\frak M_2}=\frak F$.

If there are two variables, then four models are possible.  One of them is $\frak M_1$ such that $P^{\frak M_1}= \frak T$ and $Q^{\frak M_1}= \frak T$.  

***Exercise***

Find the other models for two variables, *P* and *Q*.  

***Exercise***

Suppose that you have three propositional variables, *P, Q*, and *R*.

How many models are possible?

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

***Definition***

Let $\phi$ and $\psi$ be propositional formulas.  

Then their **syntactic conjunction** (or just **conjunction**) is the formula $(\phi\land\psi)$.  The conjunction of two formulas is also a propositional formula.

Note that when the parentheses are not needed, we may omit them.  So for example, instead of writing $(P\land Q)$ we merely write $P\land Q$.  

On the other hand, in $P\land (Q\land R)$, the parentheses around $(Q\land R)$ tells us which order the formulas are conjoined.  If we dropped all parentheses and wrote $P\land Q\land R$, we would not know whether this means $(P\land Q)\land R$ or $P\land (Q\land R)$. 

So to write the formula $(P\land (Q\land R))$, we may drop the outer parentheses and just write $P\land (Q\land R)$.  This causes no ambiguity.  But we may not drop the inner parentheses since they are needed to specify the formula.   

---

Let’s see how the above definition implies that $P\land(Q\land R)$ is a propositional formula.  First we note that *Q* and *R* are each variables, and therefore they are formulas.  

Because *Q* and *R* are formulas, therefore $Q\land R$ is a formula.  

*P* is a formula because it is a variable.  Because *P* and $Q\land R$ are formulas, therefore $P\land(Q\land R)$ is a formula.  

***Exercise***

Show that $(P\land Q)\land (Q\land R)$ is a formula.

Explain why you cannot prove that $P\land$ is a formula.

Is $P\land\land P$ a formula?

Is $P\land P$ a formula?

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

***Exercise***

With $\Sigma, L$ the alphabet and language of propositional logic, show that 

$$
((P\land Q)\land (R\land S))\in L
$$

# Semantic Conjunction

Although the definition of conjunction above is correct, notice that it doesn’t actually tell you what conjunction is supposed to *represent* or what it’s supposed to *do*.  It tells us the syntax, but not the semantics, which is about truth-value.

***Definition***

We define the boolean algebra operation, **semantic conjunction**.  It is denoted by $\curlywedge$, and defined as an operation on truth-values, as follows.  

$$
\frak{T\curlywedge T = T}\\
\frak{T\curlywedge F = F}\\
\frak{F\curlywedge T = F}\\
\frak{F\curlywedge F = F}
$$

Let $\phi$ and $\psi$ be formulas, and let $\frak M$ be a model defined for $\phi$ and $\psi$.  

Then $(\phi\land \psi)^{\frak M}$ is defined to be equal to $\phi^{\frak M}\curlywedge \psi^{\frak M}$.  Whatever this value is, we call it **the (truth-)value of $\phi\land \psi$ in $\frak M$**.  We may also refer to this as the **evaluation of $\phi\land\psi$ in $\frak M$**.

The value of a formula is the bridge between the syntactic and semantic.  It works by first giving values to the propositional variables, because that is the definition of what $\frak M$ is.  But from there, we can then determine the value of a conjunction, by determining the values of its component formulas.  

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
4. Definition of $\curlywedge$ applied to *F* and *T*.
5. Definition of $\curlywedge$ applied to *F* and *T*.

***Exercise***

Let *P* represent a false proposition, *Q* and *R* represent true propositions.  

Find $((P\land Q)\land (Q\land R))^{\frak M}$.

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

***Definition***

We define the boolean operator, **semantic disjunction**, by

$$
\frak T\curlyvee\frak T =\frak T\\\frak
T\curlyvee\frak F =\frak T\\\frak
F\curlyvee\frak T =\frak T\\\frak
F\curlyvee\frak F =\frak F
$$

Let $\phi$ and $\psi$ be formulas.

Their **syntactic disjunction** is the formulas $\phi\lor\psi$.  Any disjunction of formulas is a formula.   

If $\frak M$ is a model defined for $\phi$ and $\psi$, then we define 

$$
(\phi\lor\psi)^{\frak M}= \phi^{\frak M}\curlyvee \psi^{\frak M}
$$

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

***Exercise***

Suppose that *P* and *Q* are true while *R* is false.

Find $(P\lor (Q\land R))^{\frak M}$.

# Negation

Recall the definition of a composite number: An integer $n\ge 2$ is composite if it is not prime.  

For example, “8 is not prime” is the *negation* of the proposition “8 is prime”.  

If we represent the proposition “8 is prime” by *P*, then its negation is represented by 

$$
\neg P
$$

***Definition***

We define the boolean operation of **semantic negation** by

$$
\sim \frak T =\frak F\\\sim\frak F =\frak T
$$

Let $\phi$ be a formula.

Its **syntactic negation** is the formula $\neg \phi$.  Any negation of a formula is a formula.

For a model $\frak M$ **defined for $\phi$, then we define 

$$
(\neg \phi)^{\mathcal M} = \ \ \sim \phi^{\mathcal M}
$$

The truth-table is 

$$
\begin{array}{|c||c|c|}\hline
  P & \neg & P \\\hline
 \color{red}\frak T & \color{red}\frak F & \\
\frak F &\frak T \\\hline
\end{array}
$$

Notice that since there is only one formula, which may only be true or false, it requires fewer rows.  

***Exercise***

Let $\frak M$ be a model defined for *P*.  

Find $(\neg(\neg P))^{\frak M}$.

# Conditional

Arguably, the conjunction, disjunction, and negation are boring but necessary.  

Also arguably, the conditional is perhaps the most interesting or important operator, because it plays a role in nearly every important mathematical theorem. 

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
\begin
{array}{|c|c||c|c|c|}\hline
 P&Q&P&\to &Q\\\hline
 \color{red}\frak T & \color{red}\frak T & & \color{red}\frak  T & \\
 \frak T & \frak F & & \frak F & \\
 \color{red} \frak F & \color{red} \frak T & & \color{red} \frak T & \\
\frak F & \frak F & & \frak T & \\\hline
\end{array}
$$

- Note: This is called the “material conditional”.
    
    The understanding of “if-then” presented above, is the one that is used throughout mathematics.  However, it is not a good model for how most English language uses the “if-then” construction.
    
    Often “if-then” sentences communicate something about correlation, causation, relevance, or some other ideas which simply cannot be captured with the idea of a truth-table. 
    
    The interested reader is welcome to research the topic of [the material conditional](https://en.wikipedia.org/wiki/Material_conditional), and related ideas.
    

***Definition***

We define the boolean operator **semantic conditional** by 

$$
\frak T \leadsto \frak T = \frak T\\
\frak T \leadsto \frak F = \frak F\\
\frak F \leadsto \frak T = \frak T\\
\frak F \leadsto \frak F = \frak T
$$

For formulas $\phi$ and $\psi$, we define the **syntactic conditional** to be the formula $\phi\to\psi$.  Any conditional of formulas is a formula.

If $\frak M$ is a model defined for $\phi$ and $\psi$ then we define 

$$
(\phi\to\psi)^{\frak M} = \phi^{\frak M}\leadsto \psi^{\frak M}
$$

Note that English has the ability to rearrange how sentence clauses occur, without changing the meaning of a sentence.  For example, “I throw the ball” or “The ball was thrown by me”.  For aesthetic reasons, English speakers prefer the first sentence to the second one — but English speakers will understand the second one, and the two sentences mean the same thing.  

Similarly, we can always rearrange an if-then sentence.  The sentence “If 8 is divisible by 4 then 8 is even” is equivalently stated “8 is even if 8 is divisible by 4”. 

And this generalizes: “if *P* then *Q*” is always equivalent to “*Q* if *P*”.  

Therefore what marks the antecedent in a conditional sentence is not merely the position in the sentence — the antecedent is not always the first part of the sentence.  Rather, the antecedent is *usually* marked by the word “if”.  Whatever comes after “if” is often the antecedent.

Why do I say “usually”?  Why not always?

Because of the “only if” sentence construction.  

Consider an obstacle course with a mote followed by a gate.  What does the sentence “You can complete the course only if you can cross the mote.”  Does it mean “If you cross the mote, then you complete the course”?  No, it means “If you complete the course, then you were able to cross the mote”.

The presence of the word “only” causes the direction of the conditional to reverse.  So in general, “*P* only if *Q*” means $P\to Q$.   

# Converse, Inverse, Biconditional

Consider the proposition “If a polygon has four sides then it is a square.”  This is a false proposition.  To see why, consider a rectangle, kite, rhombus, or a number of other four-sided polygons which are not squares.  

But if you flip it around to form “If a polygon is a square then it has four sides,” now you have a true proposition.  

***Definition***

Let $\phi$ and $\psi$ be any formulas.

The **converse** of the conditional formula $\phi\to\psi$ is the formula 

$$
\psi\to\phi
$$

The **inverse** of $\phi\to\psi$ is 

$$
(\neg\phi)\to(\neg \psi)
$$

We have already seen that it’s possible for “if *P* then *Q*” to be false, even when its converse “if *Q* then *P*” is true.  

But it can also happen that both are true.  Take for example, *P* denotes “This polygon has three sides,” and *Q* denotes “This polygon has three angles”.  It is clearly true that both “If *P* then *Q*” and “If *Q* then *P*”.

In this case *P* and *Q* are called equivalent: For any polygon, if either *P* or *Q* is true then the other must also be true. 

***Definition***

We define the **semantic biconditional** by 

$$
\frak T\leftrightsquigarrow \frak T = \frak T\\
\frak T\leftrightsquigarrow \frak F = \frak F\\
\frak F\leftrightsquigarrow \frak T = \frak F\\
\frak F\leftrightsquigarrow \frak F = \frak T
$$

Let $\phi$ and $\psi$ be propositional formulas.

Then $\phi\leftrightarrow\psi$ is called the **biconditional** of $\phi$ and $\psi$.  The biconditional of two formulas is a formula.  

If $\frak M$ is a model defined for $\phi$ and $\psi$ then we define

$$
(\phi\leftrightarrow\psi)^{\frak M} = \phi^{\frak M}\leftrightsquigarrow \psi^{\frak M}
$$

The biconditional is what is expressed, when one says that “*P* if and only if *Q*”.  This equivalently expresses “(*P* if *Q*) and (*P* only if *Q*)”.  

Symbolically, $P\leftrightarrow Q$ is equivalent to $(Q\to P) \land (P\to Q)$.

The truth-table for this is 

$$
\begin{array}{|c|c||c|c|c|}\hline
 P&Q&P&\leftrightarrow &Q\\\hline
 \color{red}\mathfrak{T} & \color{red}\mathfrak{T} & & \color{red}\mathfrak{T} & \\
 \mathfrak{T} & \mathfrak{F} & & \mathfrak{F} & \\
 \color{red}\mathfrak{F} & \color{red}\mathfrak{T} & & \color{red}\mathfrak{F} & \\
 \mathfrak{F} & \mathfrak{F} & & \mathfrak{T} & \\\hline
\end{array}
$$

***Exercise***

Suppose that *P, Q*, and *R* all represent false propositions.  

Find $((P\leftrightarrow Q)\leftrightarrow R)^{\frak M}$.

# Definition of Propositional Languages

Now that we’ve introduced everything piecemeal, and with exposition, let’s now formally present the entire idea of a propositional language.

It may be worth noting, in advance, that the following definition allows one to pick any nonempty set that they like for the variables. This means that your symbols for the variables may be a period and a numeral: $\text{PVars}=\{.,9\}$.  This would be a very odd choice of variable symbols, and cause a lot of confusion, but it is technically permitted—as long as the symbols don’t overlap with the set of connectives.  That wouldn’t just be strange, it would actually cause the language to become unreadable in principle.  

***Definition***

*Syntax*

Let $\text{PVars}$ be any nonempty set of symbols, which we call the **propositional variables**. Also let the **set of propositional connectives** be   

$$
\begin{aligned}
 \text{Conns} &= \{\land,\lor,\neg,\to,\leftrightarrow\}
\end{aligned}
$$

Then let $\Sigma=\text{PVars}\cup \text{Conns}\cup \{(,)\}$.  The set $\Sigma$ is called **an alphabet for a propositional language**.    

Then define $L\subseteq \Sigma^*$ recursively by 

1. $\text{PVars}\subseteq L$.
2. If $\phi,\psi\in L$ then $(\neg\phi), (\phi\land\psi),(\phi\lor\psi),(\phi\to\psi),(\phi\leftrightarrow\psi)\in L$.

The language *L* is then called **a propositional language**.

*Semantics*

Let $\frak M$ be a function assigning a truth-value to each element of $\text{PVars}$, which we call a **truth-value model**.  If $X\in\text{PVars}$ then we denote its assigned value by $X^{\frak M}$, and so

$$
X^{\frak M}\in \{\frak T,\frak F\}
$$

If $\phi,\chi,\psi\in L$ then we define $\phi^{\frak M}$ by 

1. If $\phi\in \text{Vars}$ then $\phi^{\frak M}$ is defined by $\frak M$.  
2. If $\phi= \neg\chi$ then $(\neg\chi)^{\frak M} =\ \sim (\chi^{\frak M})$.
3. If $\phi=\chi\land\psi$ then $(\chi\land\psi)^{\frak M}=\chi^{\frak M}\curlywedge \psi^{\frak M}$.
4. If $\phi = \chi\lor\psi$ then $(\chi\lor\psi)^{\frak M}=\chi^{\frak M}\curlyvee \psi^{\frak M}$.
5. If $\phi=\chi\to\psi$ then $(\chi\to\psi)^{\frak M} = \chi^{\frak M}\leadsto\psi^{\frak M}$.
6. If $\phi=\chi\leftrightarrow\psi$ then $(\chi\leftrightarrow\psi)^{\frak M} = \chi^{\frak M} \leftrightsquigarrow \psi^{\frak M}$.

# Syntax Trees and the Main Connective

A helpful visualization of a formula, to see its structure, is the syntax tree.  Let’s look at an example first and then explain what it means.

Here is a syntax tree for the formula $\neg(P\to \neg Q)$.

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image.png)

We metaphorically call a diagram like this a “[tree](https://en.wikipedia.org/wiki/Tree_(graph_theory))”, in computer science and mathematics.  We call the circled components “nodes” and the lines between them “edges”.  It is also traditional to call the top-most node the “root” of the tree.  

This makes the tree oddly upside-down.  The root is at the top, and the “leaves” are at the bottom: a node is called a leaf if there is no node below it.  

Each circle holds a character.  The root note represents the “main connective” of the formula.  In this case, it expresses that the formula $\neg(P\to \neg Q)$ is fundamentally “a negation”.  The formula which it negates is $P\to \neg Q$.

In the tree, the root negation node connects down to the $\to$ symbol.  The represents the fact that $\neg(P\to \neg Q)$ is the negation of $P\to \neg Q$, which is “a conditional”.  The “subtree” for $P\to\neg Q$ is rooted at the conditional symbol, and this explains why the top $\neg$ node connects to the $\to$ node. 

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image%201.png)

Let’s keep going down the tree.  Below the $\to$ symbol, we have a left and right “branch”.  The left is *P*, of course because this is the left side of $P\to \neg Q$.  The right side points to $\neg$.  Of course this is because $\neg$ is the main connective of the formula on the right: $\neg Q$.

From this $\neg$ symbol we may follow it down to *Q*, where the tree ends.  

The tree represents the structure of the formula.  In particular it emphasizes which connective is the main connective, since it is always located at the root of the tree.  

And the tree is recursive.  It has a base case, which is any propositional variable.  In the recursive case, more complicated trees are composed by joining together simpler sub-trees.  

The sub-tree highlighted in blue above is the syntax subtree for $P\to \neg Q$.  The syntax sub-tree for *P* is highlighted in purple.  The syntax sub-tree for $\neg Q$ is in green.  The syntax sub-tree for *Q* is in orange.  

***Exercise***

Find the syntax tree for each of the following.

1.  $\neg(\neg P)$
2. $P\lor (Q\lor (R\lor S))$
3. $((P\to Q)\to \neg R)\to S$

In each case, state the main connective of the formula.  

The following definition is adequate for our purposes.  It could be stated more rigorously, but then it would be more confusing.  

***Definition***

For a given formula $\phi$, the **main operator** of $\phi$ is the syntactic operator at the root of the syntax tree for $\phi$.  

Suppose that $\phi$ has syntax tree $\tau$*,* and formula $\psi$ has syntax tree $\upsilon$.  We say that $\upsilon$ is a **subtree** of $\tau$, if $\upsilon$ can be obtained from $\tau$ by selecting some node, and keeping only it and the nodes below it.

If $\upsilon$ is a subtree of $\tau$ then we say that $\psi$ is a **subformula** of $\phi$.

The definition above implies that $\neg Q$ is a subformula of $\neg(P\to \neg Q)$.  

That is because the syntax tree for $\neg Q$ is a subtree of the syntax tree for $\neg(P\to \neg Q)$.  

Let’s now see why the syntax tree for $\neg Q$ is a subtree of that for $\neg (P\to \neg Q)$.  Here is the syntax tree for $\neg(P\to\neg Q)$ again.

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image%201.png)

Select the green vertex containing $\neg$.  Keep it and the nodes below it.  Then you obtain the syntax tree for $\neg Q$.  Therefore the tree for $\neg Q$ is a subtree of that for $\neg(P\to\neg Q)$.

***Exercise***

Show that $P\to \neg Q$ is a subformula of $\neg(P\to \neg Q)$.

Also show that *P* is a subformula of $\neg (P\to \neg Q)$.

Also show that $\neg(P\to \neg Q)$ is a subformula of itself.

Also show that $P\land Q$ is a subformula of $(P\land Q)\land R$ but it is not a subformula of $P\land (Q\land R)$.

# Modeling Language

Let’s use what we’ve developed so far, to model propositions! 

For this we will need increasingly complex formulas.  For example, suppose that *P* denotes the proposition “Alfonso is a saint” and *Q* denotes “Alfonso feeds the needy”.

Then the formula $\neg (P\lor Q)$ means “It is not the case that Alfonso is either a saint or feeds the needy.”  

The formula $(\neg Q)\to (\neg P)$ expresses “If Alfonso does not feed the needy then he is not a saint.”

***Exercise***

Let *P* denote the proposition “I bought a lottery ticket” and *Q* denote “I won the lottery”.  

For each symbolic expression below, write the English sentence that it represents.

1. $\neg P$
2. $(\neg P)\to Q$
3. $\neg(P\land Q)$
4. $(\neg P)\land Q$

Let’s also make sure that it’s clear how to go the other way: From a sentence, to the symbolic expression.

For example, “2 is prime but even” would be expressed symbolically as 

$$
P\land Q
$$

where *P* denotes “2 is prime” and *Q* denotes “2 is even”.  

- Notice that both “and” and “but” are both represented by $\land$.
    
    This may seem odd since the two words seem to communicate something very different.  However, their strictly *logical* content is the same.
    
    The way that they differ is that “but” expresses some amount of surprise, or an unexpected conjunction.  
    
    For example, “I saw the lightning but didn’t hear the thunder.”  This logically is the same as “I saw the lightning and didn’t hear the thunder.”  The use of the word “but” only differs by communicating that the second part is unexpected, given the first part.
    

Or consider “If $a=b$ and $b=c$ then $a = c$.”  We could represent this by 

$$
(P\land Q)\to R
$$

where *P* represents “$a=b$”, and *Q* represents “$b=c$”, and *R* represents “$a=c$”.

***Exercise***

For each sentence below, write it symbolically using propositional variables and operators.  

1. The lights are one and the door is locked, but the alarm is not ringing.
2. If I am cold and going to bed, or if I am 2 years old, then I carry a blanket.
3. I’ll have a coffee if either Starbucks is open or my coffee maker is working.
4. For 5 to be prime, it is necessary that 5 is not divisible by 2.
5. If 2 does not divide *x* then 4 does not divide *x*.

# Composite Formula Truth-tables

The fun begins when we put these components together.  Consider the formula $(P\land Q)\lor \neg (P\to Q)$.  

Let’s start with a blank truth-table and build it up in increments.  

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image%202.png)

First we transcribe the values of the variables into every column that holds a variable.

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image%203.png)

---

Next we fill in the values underneath the operations, $\land, \lor, \neg$, and $\to$.  It doesn’t matter which we pick, so let’s start with $\land$.

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image%204.png)

To fill in the values of any operator, like $\land$, we use the corresponding rules for $\curlywedge$.  

For $\curlywedge$ there will be values to the left and right.  To the left are the values from *P* and to the right are values from *Q*.  We use these values to compute a new value for $\curlywedge$ at each row.  

For example, the first row holds $\frak T$ because this comes from $\frak T\curlywedge \frak T = \frak T$.  

The second row holds $\frak F$ because this comes from $\frak T\curlywedge \frak F = \frak F$.

The third row holds $\frak F$ because this comes from $\frak F\curlywedge\frak  T =\frak  F$.

The fourth row holds $\frak F$ because this comes from $\frak F\curlywedge\frak  F =\frak  F$.

---

Now let’s move on to another operator.  Let’s try $\lor$.  

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image%205.png)

We cannot yet fill in the values under $\lor$.  If we look to the left, we find the formula $(P \land Q)$, indicated in a red arrow above.  This is ok because the values for this formula are now present.  

But if we look to the right of $\lor$ we find the formula $\neg(P\to Q)$, indicated by an orange arrow above.  The values for this formula are under the $\neg$ symbol, and they’re not yet present.  

Therefore we must come back to $\lor$ later.  Let’s now move to the next operator, $\neg$.

---

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image%206.png)

Again we cannot fill in these values.  The $\neg$ operator acts on the formula $(P\to Q)$.  But this formula does not have its values filled in, as indicated by the red arrow above.  

So again we move on, now to $\to$.

---

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image%207.png)

This can be filled in!  If we look to the left of $\to$ we see the formula *P*, indicated in red.  To the right is *Q*, indicated in orange.  Both of these have their values filled in, so we may compute the values for $\leadsto$.

The first row comes from $\frak T\leadsto \frak T =\frak  T$.

The second row comes from $\frak T\leadsto\frak  F =\frak  F$.

The third comes from $\frak F\leadsto\frak  T =\frak  T$.

The fourth comes from $\frak F\leadsto\frak  F =\frak  T$.

Now that we’ve reached the end, we go back around trying to fill in anything that we missed the first time.  That would mean going back to $\lor$.

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image%208.png)

However, for $\lor$ we still need $\neg$.  Since $\neg$ is still not filled in, then we must skip it again.

On to $\neg$.  This time we can fill in its values!

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image%209.png)

Note that the first row comes from $\sim T = F$. This one may be harder to see than the earlier calculations.  Remember: The values that $\sim$ act on are from $P\to Q$.  These values are indicated in red.  

So in the second row, we calculate $\sim F = T$.  That is because *F* is in the column under $\to$.

In the third row we calculate $\sim T = F$ and in the fourth, $\sim T = F$.

Finally we move on to $\lor$.

![image.png](Chapter%202%20Propositional%20Syntax%20and%20Semantics/image%2010.png)

This finally completes the truth-table.  

The first row comes from $T\curlyvee F=T$.  (Remember: The formula to the left of $\lor$ is $(P\land Q)$ and so you must look *there* for the truth-values.  The formula to the right is $\neg(P\to Q)$, so you must look under the $\neg$ symbol for the truth-values.)

The second row comes from $F\curlyvee T = T$.

The third from $F\curlyvee F=F$ and the fourth from $F\curlyvee F = F$.

Note that, in the end, the only values that truly matter are in the final column that we calculate (the main connective).  Therefore, if we erase all the calculation “scratch-work” the truth-table is just 

$$
\begin
{array}{|c|c||c|c|c|c|c|c|c|c|}\hline
 P&Q&(P&\land &Q)&\lor &\neg &(P&\to &Q)\\\hline
 \color{red}T & \color{red}T & & \color{red}  & & \color{red}T \\
 T & F & &  & & T\\
 \color{red} F & \color{red} T & & \color{red}  & &\color{red}F\\
F & F & &  & & F \\\hline
\end{array}
$$

This table tells us, for example, that if *P* is false and *Q* is false, then the formula $(P\land Q)\lor\neg(P\to Q)$ is false.

---

Not every complex formula has two variables.  Here is a complex formula with just one: $\neg(\neg P)$.  Its truth-table is 

$$
\begin{array}{|c||c|c|c|}\hline
 P & \neg & (\neg & P) \\\hline
 \color{red} T & \color{red} T & \color{pink}F & \color{pink}T \\\hline
 F & F & \color{gray}T & \color{gray}F \\\hline
\end{array}
$$

Here I have included the “scratch-work” calculations in a faded color.  

This table demonstrates something common-sense, which is that *P* is equivalent to $\neg(\neg P)$!  

This is not a surprising fact: Negation merely toggles the truth-value from one to the other.  Of course if you do it twice, you’re back to where you started.  

But it’s nice to see that our methods confirm a common-sense observation.  

***Exercise***

Draw the truth-table for the formulas:

1. $P \land P$
2. $P\land (\neg P)$
3. $(\neg P)\lor Q$
4. $\neg(P\lor Q)$
5. $(\neg Q)\to(\neg P)$

It’s also possible to have a formula with more than two variables.  For example, $P\to (Q\to R)$.

$$
\begin{array}{|c|c|c||c|c|c|c|c|}\hline
 P & Q & R & P & \to & (Q & \to & R) \\\hline
 \color{red}T & \color{red}T & \color{red}T &
 \color{pink}T & \color{red}T & \color{pink}T & \color{pink}T & \color{pink}T \\\hline
 T & T & F &
 \color{gray}T & F & \color{gray}T & \color{gray}F & \color{gray}F \\\hline
 \color{red}T & \color{red}F & \color{red}T &
 \color{pink}T & \color{red}T & \color{pink}F & \color{pink}T & \color{pink}T \\\hline
 T & F & F &
 \color{gray}T & F & \color{gray}F & \color{gray}T & \color{gray}F \\\hline
 \color{red}F & \color{red}T & \color{red}T &
 \color{pink}F & \color{red}T & \color{pink}T & \color{pink}T & \color{pink}T \\\hline
 F & T & F &
 \color{gray}F & T & \color{gray}T & \color{gray}F & \color{gray}F \\\hline
 \color{red}F & \color{red}F & \color{red}T &
 \color{pink}F & \color{red}T & \color{pink}F & \color{pink}T & \color{pink}T \\\hline
 F & F & F &
 \color{gray}F & T & \color{gray}F & \color{gray}T & \color{gray}F \\\hline
\end{array}
$$

Notice that a truth-table of one variable has two rows: One for `T` and one for `F`.

A truth-table of two variables has four rows.  A truth-table of three variables has eight rows.

And of course the pattern continues.  The number of rows needed keeps doubling for each extra variable.  Therefore, a truth-table of *n* variables has $2^n$ rows.

***Exercise***

Make a truth-table for each of the following.  

1. $P \land (Q\lor R)$
2. $(P\land Q)\lor (P\land R)$
3. $(P\land Q)\to R$

# Tautology, Contingency, Contradiction

***Definition***

A propositional formula is called a **tautology** if its truth-table is all *T*.

It is called a **contradiction** if its truth-table is all *F*.

It is called a **contingency** if its truth-table contains at least one *T* and at least one *F*.

***Exercise***

Show that $P\lor \neg P$ is a tautology.

Show that $P\land \neg P$ is a contradiction.

Show that *P* is a contingency.  

***Exercise***

For each formula below, decide whether its a tautology, contradiction, or contingency.

1. $P\lor (Q\lor R)$
2. $P \to P$
3. $\neg (P\to Q)\land \neg P$

***Exercise***

Prove that the negation of a tautology is a contradiction, and the negation of a contradiction is a tautology.

Prove that the negation of a contingency is a contingency.  

# Propositional Equivalence

The formulas *P* and $\neg (\neg P)$ are technically different, even though they are “equivalent”.  In this particular case it is easy to understand.

However, consider the formula $P\to Q$ and the formula $(\neg Q)\to (\neg P)$.  Are these equivalent?  It’s much less immediately obvious.  

Therefore we should have a formal definition of what it means for two formulas to be equivalent, and then a method for checking equivalence.

***Definition***

Let $\phi, \psi$ be two propositional formulas.  

We say that $\phi$ and $\psi$ are **propositionally equivalent** (or just **equivalent**) if $\phi\leftrightarrow \psi$ is a tautology.

If $\phi$ is equivalent to $\psi$ then we write 

$$
\phi\equiv \psi
$$

When they are not equivalent we write 

$$
\phi\not \equiv \psi
$$

Let’s now check whether $P\to Q$ and $(\neg Q)\to (\neg P)$ are equivalent.  To do so we have to check their truth-tables.  

Below I’ve made a combined truth-table for both formulas.  

$$
\begin{array}{|c|c||c|c|c||c|c|c|c|c|}\hline
 P & Q &
 P & \to & Q &
 (\neg & Q) & \to & (\neg & P) \\\hline
 \color{red}T & \color{red}T &
 \color{pink}T & \color{red}T & \color{pink}T &
 \color{pink}F & \color{pink}T & \color{red}T & \color{pink}F & \color{pink}T \\\hline
 T & F &
 \color{gray}T & F & \color{gray}F &
 \color{gray}T & \color{gray}F & F & \color{gray}F & \color{gray}T \\\hline
 \color{red}F & \color{red}T &
 \color{pink}F & \color{red}T & \color{pink}T &
 \color{pink}F & \color{pink}T & \color{red}T & \color{pink}T & \color{pink}F \\\hline
 F & F &
 \color{gray}F & T & \color{gray}F &
 \color{gray}T & \color{gray}T & T & \color{gray}T & \color{gray}F \\\hline
\end{array}
$$

Remember, the vividly colored values are the actual values of the propositions.  The faded colors are just showing “scratch work”.  

If we use the vivid colors, we can now write the truth-table for $(P\to Q)\leftrightarrow ((\neg Q)\to (\neg P))$.

$$
\begin{array}{|c|c||c|c|c|c|c|c|c|c|c|}\hline
P & Q &
(P & \to & Q) &
\leftrightarrow &
((\neg & Q) & \to & (\neg & P)) \\\hline
\color{red}T & \color{red}T &
 & & &
\color{red}T &
 & & & & \\\hline
T & F &
 & & &
T &
 & & & & \\\hline
\color{red}F & \color{red}T &
 & & &
\color{red}T &
 & & & & \\\hline
F & F &
 & & &
T &
 & & & & \\\hline
\end{array}
$$

For example, the first row comes from using the rule $T\leftrightsquigarrow T = T$.  The second row comes from $F\leftrightsquigarrow F=T$, and so on.  

The fact that every row holds *T* demonstrates that 

$$
(P\to Q)\equiv ((\neg Q)\to (\neg P))
$$

---

Let’s now see an example of formulas which are not equivalent.  The following example is instructive:  $\neg (P\land Q)$ and $(\neg P)\land Q$.

$$
\begin{array}{|c|c||c|c|c|c||c|c|c|c|}\hline
 P & Q &
 \neg & (P & \land & Q) &
 (\neg & P) & \land & Q \\\hline
 \color{red}T & \color{red}T &
 \color{red}F & \color{pink}T & \color{pink}T & \color{pink}T &
 \color{pink}F & \color{pink}T & \color{red}F & \color{pink}T \\\hline
 T & F &
 T & \color{gray}T & \color{gray}F & \color{gray}F &
 \color{gray}F & \color{gray}T & F & \color{gray}F \\\hline
 \color{red}F & \color{red}T &
 \color{red}T & \color{pink}F & \color{pink}F & \color{pink}T &
 \color{pink}T & \color{pink}F & \color{red}T & \color{pink}T \\\hline
 F & F &
 T & \color{gray}F & \color{gray}F & \color{gray}F &
 \color{gray}T & \color{gray}F & F & \color{gray}F \\\hline
\end{array}
$$

This helps us to draw the truth-table for $(\neg (P\land Q))\leftrightarrow ((\neg P)\land Q)$.

$$
\begin{array}{|c|c||c|c|c|c|c|c|c|c|c|}\hline
P & Q &
(\neg & (P & \land & Q)) &
\leftrightarrow &
((\neg & P) & \land & Q) \\\hline
\color{red}T & \color{red}T &
 & & & &
\color{red}T &
 & & & \\\hline
T & F &
 & & & &
\color{red}F &
 & & & \\\hline
\color{red}F & \color{red}T &
 & & & &
\color{red}T &
 & & & \\\hline
F & F &
 & & & &
F &
 & & & \\\hline
\end{array}
$$

Notice the rows at which *F* occurs.  This means the two propositions are not equivalent.  

$$
\neg (P\land Q)\not\equiv ((\neg P)\land Q)
$$

***Exercise***

Determine whether the following pairs of formulas are equivalent.

1. *P* and $\neg (\neg P)$
2. *P* and *Q*
3. $P\to Q$ and $Q\to P$
4. $P\land Q$ and $Q\land P$
5. $P\lor (Q\lor R)$ and $(P\lor Q)\lor R$
6. $P\to (Q\to R)$ and $(P\to Q)\to R$
7. $P\land (Q\lor R)$ and $(P\land Q)\lor R$

As you can probably tell, the formulas $P\lor (Q\lor R)$ and $(P\lor Q)\lor R$ are equivalent, and so are $P\land (Q\land R)$ and $(P\land Q)\land R$.  

So when all of the connectives are $\lor$, any way of placing parentheses is equivalent.  The same is true for $\land$.  We call this property “associativity”.  

Because $\lor$ is associative, we therefore do not care where the parentheses go.  Hence, instead of writing $P\lor (Q\lor R)$ or $(P\lor Q)\lor R$, we instead just write 

$$
P\lor Q\lor R
$$

Which formula this denotes (i.e. which parenthesization is intended) is unimportant: Pick one and you’ll get the same result for most of the questions that we’re interested in.  

Of course all the same is true for conjunction, so we could write 

$$
P\land Q\land R\land S
$$

and not care which parenthesization is intended, because they’re all equivalent.  

On the other hand, as you likely showed above, this is *not* true for $P\to Q$.  Because the different parenthesizations mean significantly different things, we must always include parentheses when writing a formula of several conditionals.  

Likewise, we see that parentheses matter when there is a mixture of symbols.  $P\lor (Q\land R)$ is not equivalent to $(P\lor Q)\land R$.  Therefore in this case we should never remove the parentheses either.  

- There is a tradition of assuming that $P\lor Q\land R$ means $P\lor(Q\land R)$.
    
    In mathematics we have an “order of operations”.  Each country expresses this differently, but in the United States it’s often expressed as “PEMDAS”, which is an acronym for “Parentheses Exponents Multiplication Division Addition Subtraction”.
    
    For example $2\verb|^| (3+4\cdot 5)-6/7$ would first evaluate the portion inside the parentheses, $3+4\cdot 5$.  Here multiplication takes priority, so we first compute $4\cdot 5$ which is 20.  Then $3+20=23$ and so the express becomes equivalent to 
    
    $$
    2\verb|^|23-6/7
    $$
    
    Exponentiation comes next, which is a massive number, then division, then subtraction.  
    
    By the same principle, we have a kind of “order of operations” for logical connectives too.  We tend to regard negation as having the highest priority, then conjunction, then disjunction, then conditionals.  
    
    By this tradition, we would read 
    
    $$
    \neg P \land Q \to R \lor S
    $$
    
    as 
    
    $$
    ((\neg P)\land Q)\to ( R \lor S)
    $$
    
    I will try to write expressions with parentheses in most cases, except in cases like 
    
    $$
    P\lor \neg Q
    $$
    
    If one were a stickler for parentheses you might insist that it should be written as $P\lor (\neg Q)$.  But since there’s no alternate way to read the expression, I choose to omit the parens.  
    

***Exercise***

Find all ways of placing parentheses into the following expression, so that one obtains nonequivalent formulas.

$$
\neg P\land Q\land R
$$