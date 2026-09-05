---
title: "Chapter 2: Syntax and Semantics of Languages"
---

# A Precise on Logic and Abstraction

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

> [!note]- This is an example of a "binary language". 
> 
> Any language with alphabet $\{0,1\}$ is called a "binary language".  This is often a good model for the low-level language of computer code.  
> 
> Therefore binary languages are often studied in computer science.

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

