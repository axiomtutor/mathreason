---
title: "Chapter 2: Syntax and Semantics of Languages"
---

# A Preview of Logic and Abstraction

What we have learned about number theory can now serve as a collection of examples while we study logic.

What does “logic” study? Take the following ([historically famous](https://en.wikipedia.org/wiki/Syllogism)) simple example of a logical argument.

> All men are mortal.
>
> Socrates is a man.
>
> Therefore Socrates is mortal.

> [!note]- By "argument" we do not mean "a conflict".
> In logic, we use the word "argument" a bit unlike how it is commonly used. Often we colloquially think of an argument as a kind of conflict.
>
> For logicians, an argument is a collection of premises together with a conclusion that is claimed to follow from those premises.
>
> See [the Wikipedia article on arguments](https://en.wikipedia.org/wiki/Argument) for more details.

This is an example of logic because it is an *inference*: it concludes the proposition "Socrates is mortal" from other propositions. Logic is concerned with whether a conclusion follows from premises, independently of whether those premises or the conclusion happen to be true.

In this example, the particular subject matter—men, mortality, and Socrates—is not the part that makes the inference logical. We can replace that subject matter while preserving the same pattern of inference.

> [!note]- Validity and truth
> An argument can have a valid logical form even when one or more of its premises are false. Conversely, an argument can have a true conclusion without the conclusion following from its premises.
>
> When an argument is valid and its premises are all true, the argument is called **sound**. We will return to these distinctions when we study the formal semantics of logic.

# Logical Abstraction

The argument

> All men are mortal.
>
> Socrates is a man.
>
> Therefore Socrates is mortal.

has particular subject matter, like "men" and "Socrates". Logic is interested in general principles of reasoning, so we would like to "abstract away" this subject matter.

The following is an abstraction of the argument.

> All *A* are *B*.
>
> *x* is an *A*.
>
> Therefore *x* is *B*.

This replaces the particular content with symbols like *A*, *B*, and *x*. These symbols act as placeholders for content that can be substituted while preserving the structure of the argument.

This is an informal abstraction rather than a formula in one of the formal languages we will define later. In particular, propositional logic will not be able to express the internal structure of statements such as “*x* is an *A*”; later, predicate logic will give us the formal machinery to do so.

For example, consider the argument

> All cats are mammals.
>
> Tabby is a cat.
>
> Therefore Tabby is a mammal.

This argument has the same logical structure as the argument regarding Socrates' mortality. They differ in their subject matter.

From the abstract form,

> All *A* are *B*.
>
> *x* is an *A*.
>
> Therefore *x* is *B*.

we can obtain either the argument about Socrates or the argument about Tabby by an appropriate substitution of the symbols *A*, *B*, and *x*.

> [!exercise] ***Exercise***
> Consider the argument "James Brown was a funk singer, and a dancer. Every funk singer is a musician. Therefore James Brown was a musician and a dancer."
> 1. Identify the premises and conclusion of the argument.
> 2. Form the logical abstraction of this argument.

# Syntax and Semantics

A significant theme in the study of logic is the distinction between “syntax” and “semantics”.

Syntax concerns the symbols of a formal language and the rules for combining them into well-formed expressions. Semantics assigns meanings or interpretations to those expressions.

By analogy with natural languages, the syntax of two languages may use different symbols to express related concepts. The important point for formal logic is that we will first specify which expressions are well-formed and then specify what those expressions mean.

# Languages and Alphabets

In the study of logic, we will create a few different kinds of formal languages. The first will be the language of propositional logic, which we will define soon. Later we will define predicate logic and then first-order logic.

Each later language has greater expressive power than the one before it. That is, predicate logic can represent distinctions that propositional logic cannot, and first-order logic can express still more structure.

Because we will study formal languages, we should first discuss some ideas that apply to languages generally.

Every formal language has an alphabet: a collection of symbols from which its strings are formed. For a formal language, we can specify this alphabet precisely rather than trying to enumerate all the symbols that occur in an informal language such as English.

# Strings and Signifiers

We may take any nonempty set to serve as our alphabet.

> [!definition] ***Definition***
>
> Let $\Sigma$ be any nonempty set. We call $\Sigma$ an **alphabet**, and any element $x\in\Sigma$ is called a **character**.
>
> Any finite sequence of characters from $\Sigma$ is called a **string over** $\Sigma$. The set of all possible strings is written as $\Sigma^\ast$.
>
> A **language over** $\Sigma$ is any subset of $\Sigma^*$. That is to say, if $L\subseteq \Sigma^*$ then we call *L* a language over $\Sigma$.
>
> If *L* is a language, and $m\in L$, we will call *m* a **signifier in *L***.
>
> For short, we often call a string over $\Sigma$ just a **string**. We call a language over $\Sigma$ just a **language**. We call a signifier in *L* just a **signifier**. Context usually makes it clear what the alphabet is.

For example, if we use these definitions to describe English, then $\Sigma$ would contain letters, spaces, punctuation, and other symbols used by the language. Then a string would be any finite sequence of these symbols. For example, “jhb88qtio weqir?j]—…, ” is a string. It is a nonsense string, but it still counts as a string.

A meaningful expression in a language is more selective than an arbitrary string. For example, “Hello friend.” may be a signifier in an informal model of English, while a random sequence of symbols is not.

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

In order to define many of the languages that we will study, we'll need to define them recursively.

A recursive definition gives rules for generating a set. It has two essential parts:

1. **Base cases:** specify some elements that belong to the set.
2. **Recursive cases:** specify how to construct new elements from elements already known to belong to the set.

The intended set is the **smallest set** containing the base cases and closed under the recursive cases. This smallest-set condition matters: without it, any larger set containing the generated elements would also satisfy the same rules.

Here is a simple example: we can define the set of even positive integers, *S*, recursively. We begin with $2\in S$ as the base case. Then, if $x\in S$, we also have $x+2\in S$.

The smallest set satisfying these rules is exactly the set of even positive integers. For example, $2\in S$ by the base case; then $4\in S$ because $2\in S$ and the recursive case gives $2+2=4$; then $6\in S$ because $4\in S$, and so on.

Here is an example more obviously relevant to languages: let’s consider the very simple alphabet $\Sigma = \{0,1\}$. That is to say, the only characters that we will consider are ‘0’ and ‘1’. Examples of strings over $\Sigma$ are ‘010’ and ‘11011011’.

> [!note]- This is an example of a "binary language".
> Any language with alphabet $\{0,1\}$ is called a "binary language". Binary languages are common objects of study in computer science.

Consider the language of all strings which begin with a 1.

$$
L = \{1, 10, 11, 100, 101, 110, ...\}
$$

Let’s practice how we could express this language recursively. We could say:

- Base case: $1\in L$.
- Recursive case: For any $x\in L$, we have $x0\in L$ and $x1\in L$.

Let’s demonstrate from the recursive definition that $101\in L$.

We know that $1\in L$ from the base case.

Because $1\in L$, we may take $x=1$ in the recursive case. Therefore, from the first part of the recursive case, $10\in L$.

Because $10\in L$, we may this time take $x=10$ in the recursive case. Therefore, from the second part of the recursive case, $101\in L$.

> [!exercise] ***Exercise***
>
> Show that $110\in L$.

> [!exercise] ***Exercise***
>
> Let $\Sigma=\{0,1\}$ still.
>
> However, let’s define a new language, *M*. Let *M* be the language of all strings which begin with 11. So $11\in M$ and $110\in M$ but, for example, $1\notin M$ and $10\notin M$.
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
> So, for example, 0 is a binary number, and so is 1, and so is 10, and so is 11, and so on.
>
> Effectively, *N* is just the same thing as *L* above, except that *N* contains one extra string, 0.
>
> Give a recursive definition of *N*.
>
> *Hint*: $1x$.

Here is another language that will be relevant to things we do later on: let $\Sigma = \{(,)\}$. That is to say, the alphabet contains two elements, the left- and right-parentheses.

$$
\begin{aligned}
(\ \ &\in\Sigma \\
)\ \ &\in \Sigma
\end{aligned}
$$

Let’s define the language, *L*, of “balanced parentheses”.

- Base case: $()\in L$.
- Recursive case: If $x\in L$ then also $()x\in L$, $(x)\in L$, and $x()\in L$.

So this means that ‘()’ is a signifier in the language of balanced parentheses.

Also ‘()()’ is a signifier. Why? We can explain it as before.

We know from the base case that $()\in L$.

Because $()\in L$, we can then take $x=()$ in the recursive case and consider the first part of the recursive case. That tells us $()x=()()\in L$.

> [!exercise] ***Exercise***
>
> Using the same *L* as immediately above, show that $((()()()))\in L$.
