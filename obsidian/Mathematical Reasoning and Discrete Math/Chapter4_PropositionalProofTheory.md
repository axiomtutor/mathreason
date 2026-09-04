---
title: "Chapter 3: Propositional Proof Theory"
---


# Simple Inference Rules

An important use of logic is to help us write good proofs.  

Here we’ll establish the basic formal system that we will use to expose the logic of a proof.  We begin with proofs in the propositional language, and in later chapters we will develop a more complex language with an augmented proof system.  

The fundamental component of a proof, is an “inference”.  Here is an example:  

If we have already accepted the truth of propositions denoted by *P* and *Q*, then we must accept the truth of the formula $P\land Q$.  In this case, we say that we *infer* $P\land Q$ from the formulas *P* and *Q*.  

The above was stated for propositional variables, but really, the same principle should be true even for complex formulas.  For example, if we have already accepted the formulas $P\to Q$ and $Q\to S$ then we must accept the formula $(P\to Q)\land (Q\to S)$. 

Then our inference rule is expressed by: “From formulas $\phi$ and $\psi$ we may infer $\phi\land\psi$.”

This tells us that, from two separate formulas, we may join them together into a conjunction.  We should also be able to pull them out of a conjunction.  

Therefore we should also use the inference rule “From $\phi\land\psi$ we may infer $\phi$.”  We should also be able to infer $\psi$.  

In a similar fashion one may be able to understand all of the following inference rules.

> [!definition] ***Definition***
>
> **Conjunction Introduction** is the inference rule “From $\phi$ and $\psi$ we may infer $\phi\land\psi$.”
>
> **Conjunction Elimination** is the inference rule “From $\phi\land\psi$ we may infer $\phi$, and we may infer $\psi$.”
>
> **Disjunction Introduction** is “From $\phi$ we may infer $\phi\lor\psi$, or we may infer $\psi\lor\phi$, for any formula $\psi$.”
>
> **Disjunction Elimination** is “From $\phi\lor\psi$ and $\neg \phi$ we may infer $\psi$.  From $\phi\lor\psi$ and $\neg \psi$ we may infer $\phi$.”
>
> **Conditional Elimination** is “From $\phi\to\psi$ and $\phi$ we may infer $\psi$.”
>
> **Biconditional Elimination** is “From $\phi\leftrightarrow \psi$ and $\phi$ we may infer $\psi$.  From $\phi\leftrightarrow \psi$ and $\psi$ we may infer $\phi$.”

It is noteworthy that we tend to have, for each logical connective, an introduction and an elimination rule.  But there are conspicuous exceptions: There is no rule at all for negation.  The conditional and biconditional are both missing an introduction rule. We will eventually fill each of these gaps.  

Each of the above inference rules are justified by the fact that, when its assumptions are true, then its conclusion is guaranteed to also be true.  Here is a demonstration for Conjunction Elimination:

$$
\begin{array}{|c|c||c|c|c||c|}\hline
 P & Q &
 P & \land & Q &
 P \\\hline
 \color{red}{\mathfrak{T}} & \color{red}{\mathfrak{T}} &
  & \color{red}{\mathfrak{T}} &  & \color{red}{\mathfrak{T}}
 \\\hline
 \mathfrak{T} & \mathfrak{F} &
  & \mathfrak{F} &  & \mathfrak{T}
 \\\hline
 \color{red}{\mathfrak{F}} & \color{red}{\mathfrak{T}} &
  & \color{red}{\mathfrak{F}} &  & \color{red}{\mathfrak{F}}
 \\\hline
 \mathfrak{F} & \mathfrak{F} &
  & \mathfrak{F} &  & \mathfrak{F}
 \\\hline
\end{array}
$$

Here we have the truth-table for $P\land Q$ and for *P*.  There is just one row where $P\land Q$ is true, on row number 1.  In this row, we also have that *P* is true.  

So this shows that “Whenever $P\land Q$ is true, we have *P* is true.”  This means that the inference rule is valid, because it will never take us from a true proposition to a false one.

Let’s check the Disjunction Elimination rule.  Here is the truth-table for $P\lor Q$ and $\neg P$ and *Q*.

$$
\begin{array}{|c|c||c|c|c||c|c||c|}\hline
 P & Q &
 P & \lor & Q &
 \neg & P &
 Q \\\hline
 \color{red}{\mathfrak{T}} & \color{red}{\mathfrak{T}} &
  & \color{red}{\mathfrak{T}} & &
 \color{red}{\mathfrak{F}} & &
 \color{red}{\mathfrak{T}}
 \\\hline
 \mathfrak{T} & \mathfrak{F} &
  & \mathfrak{T} & &
 \mathfrak{F} & & \mathfrak{F}
 \\\hline
 \color{red}{\mathfrak{F}} & \color{red}{\mathfrak{T}} &
  & \color{red}{\mathfrak{T}} & &
 \color{red}{\mathfrak{T}} & &
 \color{red}{\mathfrak{T}}
 \\\hline
 \mathfrak{F} & \mathfrak{F} &
  & \mathfrak{F} & &
 \mathfrak{T} & & \mathfrak{F}
 \\\hline
\end{array}
$$

Let’s look only at the rows in which the assumptions of the inference rule are true.  These would be the rows where both $P\lor Q$ and $\neg P$ are true.  This happens only at one row, which is row number 3.

In this row, the value of *Q* is true.  So yet again, the inference rule is valid.

> [!exercise] ***Exercise***
>
> Show that all of the other inference rules are valid.

> [!exercise] ***Exercise***
>
> We could (but will not) have an inference rule “From $\neg(\neg \phi)$ we may infer $\phi$.”
>
> Prove that this inference rule is valid.

> [!exercise] ***Exercise***
>
> Here is an invalid inference rule: “From $\phi\lor\psi$ we may infer $\phi$.”  
>
> Prove that this inference rule is invalid.

Now let’s look at proofs, which are just a sequence of inferences.  Suppose that we accept the formulas 

- $\neg P$
- $P\lor Q$
- $Q\to R$.

Let’s write a proof, from these assumptions, to the conclusion *R*.

Disjunction Elimination: by combining $P\lor Q$ with $\neg P$ we may infer *Q*.

Conditional Elimination: by combining $Q\to R$ together with *Q*, we may infer *R*. 

This concludes the proof.

---

Notice the way that a proof works: We start by assuming the truth of some formulas.  Using these assumptions, we apply the inference rules to infer new formulas.  When a new formula is inferred, it may then be used in further steps.

We continue this process until we eventually infer the conclusion of the proof.  

> [!exercise] ***Exercise***
>
> Assume the formulas $(P\land Q)\to (R\land S)$, and *P,* and *Q.*
>
> Prove the formula $R\lor T$.

# Substitution

In this section, we are going to discuss substitution, because it will help us to define an inference rule in the next section.  

Consider the assumption $(P\lor Q)\land R$.  Notice that the formula $P\lor Q$ is a subformula.

Moreover notice that $Q\lor P$ is equivalent to $P\lor Q$.  

Therefore if we substitute $P\lor Q$ with $Q\lor P$, it shouldn’t change the value of the formula.  That is to say, $(P\lor Q)\land R$ should be equivalent to $(Q\lor P)\land R$.

> [!exercise] ***Exercise***
>
> Draw a truth-table to prove that $(P\lor Q)\land R$ is equivalent to $(Q\lor P)\land R$.

In order to talk about a formal rule for substitution, we first have to define substitution.

> [!definition] ***Definition***
>
> Suppose that $\phi,\chi,\psi$ are all propositional formulas.  We define $[\phi]_{\chi := \psi}$ to mean “everywhere that $\chi$ is a subformula of $\phi$, replace it with $\psi$.”

We will mostly be interested in substituting equivalent subformulas, but we can still make sense of substituting non-equivalent subformulas.  

For example, let’s calculate $[(P\land ((\neg Q)\lor R))]_{\neg Q := P\land S}$.

First we take the formula $P\land ((\neg Q)\lor R)$ and identify where it has the subformula $\neg Q$.  We see that it has the subformula here:

$$
P\land (\colorbox{yellow}{$(\neg Q)$}\lor R)
$$

We then replace this subformula with the subformula $P\land S$, to obtain the result, 

$$
P\land ((P\land S)\lor R)
$$

This was just an exercise in performing substitution, with no real interesting consequence.  But now that we understand substitution, we can state the following inference rules.

> [!exercise] ***Exercise***
>
> Show that $[P\land (Q\to P)]_{P:= \neg P}$ is equal to $(\neg P)\land (Q\to\neg P)$.
>
> Show that $[P\land Q]_{R:= S}$ is equal to $P\land Q$.
>
> Suppose that $\phi$ is a propositional formula such that $\chi$ does not occur as a subformula of $\phi$.  Let $\psi$ be any formula.
>
> Explain why $\phi_{\chi:= \psi}=\phi$.

> [!definition] ***Definition***
>
> Let $\phi,\chi,\psi,\omega$ be propositional formulas.  
>
> **Double negation** is the inference rule that, from $\phi$, one can infer either $\phi_{\chi:= \neg(\neg\chi)}$ or $\phi_{\neg(\neg\chi):= \chi}$.
>
> **Conjunction commutativity** is the inference rule that, from $\phi$ one can infer $\phi_{\chi\land\psi := \psi\land\chi}$.
>
> **Conjunction associativity** is the inference rule that, from $\phi$ one can infer either $\phi_{\chi\land(\psi\land\omega) := (\chi\land\psi)\land\omega}$ or $\phi_{(\chi\land\psi)\land\omega:= \chi\land(\psi\land\omega)}$.
>
> **Disjunction commutativity** is the inference rule that, from $\phi$ one can infer $\phi_{\chi\lor\psi:=\psi\lor\chi}$.
>
> **Disjunction associativity** is the inference rule that, from $\phi$ one can infer either $\phi_{\chi\lor(\psi\lor\omega) := (\chi\lor\psi)\lor\omega}$ or $\phi_{(\chi\lor\psi)\lor\omega:= \chi\lor(\psi\lor\omega)}$.
>
> **De Morgan’s** is the inference rule that, from $\phi$ one can infer either $\phi_{\neg(\chi\lor\psi):=(\neg\chi)\land(\neg\psi)}$ or $\phi_{(\neg\chi)\land(\neg\psi):=\neg(\chi\lor\psi)}$ or $\phi_{\neg(\chi\land\psi):= (\neg\chi)\lor(\neg\psi)}$ or $\phi_{(\neg \chi)\lor(\neg\psi):=\neg(\chi\land\psi)}$.
>
> **Distribution** is the inference rule that, from $\phi$ one can infer either $\phi_{\chi\land(\psi\lor\omega) := (\chi\land\psi)\lor(\chi\land \omega)}$ or $\phi_{\chi\lor(\psi\land\omega):= (\chi\lor\psi)\land(\chi\lor\omega)}$.
>
> **Factorization** is the inference rule that, from $\phi$ one can infer either $\phi_{(\chi\land\psi)\lor(\chi\land\omega):=\chi\land(\psi\lor\omega)}$ or $\phi_{(\chi\lor\psi)\land(\chi\lor\omega):=\chi\lor(\psi\land\omega)}$.
>
> **Material implication** is the inference rule that, from $\phi$ one can infer $\phi_{\chi\to\psi:= (\neg \chi)\lor\psi}$ or $\phi_{(\neg\chi)\lor\psi:=\chi\to\psi}$.
>
> **Biconditional commutativity** is the inference rule that, from $\phi$ one can infer $\phi_{\chi\leftrightarrow\psi := \psi\leftrightarrow\chi}$.
>
> **Reiteration** is the inference rule that, if $\phi$ has been proved before, then it can be used later in a proof, at any time.

A very simple demonstration of one of these inference rules: From *P* we can infer $\neg(\neg P)$ by double negation.  In this example, $\phi=P$ and $\chi = P$.

We are using the version of double negation, in which we infer $\phi_{\chi:=\neg(\neg\chi)}$.  In this case, that means we are inferring $P_{P:=\neg(\neg P)}$.  Since 

$$
P_{P:=\neg(\neg P)} = \neg(\neg P)
$$

then this explains how the rule allows us to infer $\neg(\neg P)$.

---

Another example is that, from $P\lor \neg(\neg Q)$ we can infer $P\lor Q$.  In this example, we use $\phi=P\lor \neg(\neg Q)$ and $\chi = \neg(\neg Q)$.  We use the version of double negation which lets us infer $\phi_{\neg(\neg \chi):=\chi}$.

Since 

$$
P\lor\neg(\neg Q)_{\neg(\neg Q):= Q} = P\lor Q
$$

this explains how the rule allows us to infer $P\lor Q$.

> [!exercise] ***Exercise***
>
> Use conjunction commutativity to infer, from $P\land(Q\lor R)$, that $(Q\lor R)\land P$.
>
> Identify $\phi,\chi,\psi$ as you apply the rule.

> [!exercise] ***Exercise***
>
> Use disjunction commutativity to infer, from $P\land (Q\lor R)$, that $P\land (R\lor Q)$.

> [!exercise] ***Exercise***
>
> Use distribution to infer, from $P\land (Q\lor R)$, that $(P\land Q)\lor(P\land R)$.

> [!exercise] ***Exercise***
>
> Infer from $P\land (Q\lor R)$ that $(R\lor P)\land (Q\lor P)$.
>
> Note: This inference requires several steps.  One way to do it is to first use distribution, and then use commutativity three times.

> [!exercise] ***Exercise***
>
> From $(P\to Q)\to R$ and *Q*, infer *R.*

# Fitch-style Proofs

We will now develop a formal system of writing proofs. 

For an example, from the assumption $P\land (Q\land R)$ we will prove *R*.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\land (Q\land R)$ | Assumption |
| 2. | $Q\land R$ | Conjunction Elimination from 1 |
| 3. | *R* | Conjunction Elimination from 2 |

> [!note]- This is called a “Fitch-style proof”.
>
> There are other ways of displaying a proof.  We did so in a more paragraph style in the previous section.  There are also “Gentzen-style proofs” and “the sequent calculus”.  They all prove the same things, they just do so with different styles of notation.

A proof is a sequence of formulas, each with a justification.  A formula may be justified by being an assumption.  If there are any assumptions, these come at the beginning of the proof.  

If a formula is not an assumption, then it must be justified by an inference rule, with a reference to previous formulas to which the rule is applied.  

And a proof must always end on with the concluding formula.  

For emphasis, I will color the assumptions with red and the conclusion with green.

---

Let’s see another example.  From the assumptions $\neg Q$ and $P\to Q$, we prove $\neg P$.  

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\neg Q$ | Assumption |
| 2. | $P\to Q$ | Assumption |
| 3. | $(\neg P)\lor Q$ | Material Implication from 2 |
| 4. | $\neg P$ | Disjunction Elimination from 1, 3 |

---

Here is a long and hard one.  Don’t worry if it seems like something you couldn’t do yourself—working out these proofs is a skill that grows with exercise and time.

From the assumptions $P\to Q$ and $R\to Q$ and $P\lor R$, we will prove *Q*.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\to Q$ | Assumption |
| 2. | $R\to Q$ | Assumption |
| 3.  | $P\lor R$ | Assumption |
| 4. | $(\neg P)\lor Q$ | Material Implication from 1 |
| 5. | $(\neg R)\lor Q$ | Material Implication from 2 |
| 6. | $Q\lor \neg P$ | Disjunction Commutativity from 4 |
| 7. | $Q\lor \neg R$ | Disjunction Commutativity from 5 |
| 8. | $(Q\lor \neg P)\land (Q\lor \neg R)$ | Conjunction Introduction from 6, 7 |
| 9. | $Q\lor ((\neg P)\land (\neg R))$ | Factorization from 8 |
| 10. | $Q\lor\neg(P\lor R)$ | De Morgan’s from 9 |
| 11. | $\neg(\neg(P\lor R))$ | Double Negation from 3 |
| 12. | *Q* | Disjunction Elimination from 10, 11 |

> [!exercise] ***Exercise***
>
> From the assumptions *P* and $P\to Q$ and $Q\to R$, prove *R*.
>
> From the assumption $(P\land Q)\lor (P\land R)$ prove *P*.
>
> From the assumptions $(\neg P)\lor Q$ and *P*, prove *Q*.
>
> (The first proof requires six lines, and the others require significantly fewer.)

# Conditional Introduction

Consider the argument that, from $P\to Q$ and $Q\to R$ we can prove $P\to R$.

In principle that is true.  We could demonstrate, via a truth-table, that the inference is valid.  However, using only the inference rules that we have established so far, it would not be possible.  

Therefore we need more inference rules, and here we introduce the Conditional Introduction rule.  This rule is distinct, in that it requires the idea of a “subproof”.

Before describing this rule, I want to point out that—although this rule might, at first, seem complicated—it is a very natural style of reasoning.  It is so natural, that we have been using it all along in the case study of number theory.

Recall the proof that, for natural numbers $a,n$, if we have $a|n$ then $\frac n a$ is a natural number.  

Without rehearsing the entire proof, the broad structure of the proof was: 

- Assume $a|n$.
- Go through a few reasoning steps.
- We were able to show that $\frac n a$ was a natural number.

That is exactly the structure of a Conditional Introduction proof.  If you want to prove the conditional $\phi\to\psi$ then 

- Assume $\phi$.
- Go through a few reasoning steps.
- Show $\psi$.

It may be easier to see an example first, and then describe how it works.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\to Q$ | Assumption |
| 2. | $Q\to R$ | Assumption |
| 3. | $P\to R$ | Conditional Introduction from sub-proof below |

Sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.1. | *P* | Assumption for Conditional Introduction |
| 3.2. | *Q* | Conditional Elimination from 1, 3.1 |
| 3.3. | R | Conditional Elimination from 2, 3.2 |

The sub-proof is the justification for line 3, which holds $P\to R$.  In order to justify this conditional, the sub-proof mirrors what we said generally:

- It assumes the antecedent, *P*.
- It goes through some reasoning steps (3.2 and 3.3).
- It shows the consequent, *R*.

So there is a demonstration of the logic of conditional sub-proof.  

As a comment about how we *write* sub-proofs: 

- They are written with extra indentation.
- They use a sub-indexing system.  Since the conditional $P\to R$ was on line 3, then the indices of the sub-proof are 3.1, 3.2, and so on.

---

Here is another example.  From $P\to R$, and $P\to S$, and $(P\to (R\land S))\to Q$ we can prove that *Q*.

The following shows that you can have a proof that continues after the subproof has ended.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\to R$ | Assumption |
| 2. | $P\to S$ | Assumption |
| 3. | $(P\to (R\land S))\to Q$ | Assumption |
| 4. | $P\to (R\land S)$ | Conditional Introduction from subproof below |

Sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 4.1. | *P* | Assumption for Conditional Introduction |
| 4.2. | *R* | Conditional Elimination from 1, 4.1 |
| 4.3. | *S* | Conditional Elimination from 2, 4.1 |
| 4.4. | $R\land S$ | Conjunction Introduction from 4.2, 4.3 |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 5. | *Q* | Conditional Elimination from 3, 4 |

---

Let’s now see how a sub-proof can go wrong.

Consider the following invalid proof that, from *P*, we can infer *Q*.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | *P* | Assumption |
| 2. | $Q\to P$ | Conditional Introduction from subproof below |

Sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 2.1. | *Q* | Assumption for Conditional Introduction |
| 2.2. | *P* | Reiteration from 1 |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3. | *Q* | Reiteration from 2.1 |

This should not be possible—*P* does not imply *Q*.  

Therefore something must have gone wrong.  The error is on line 3.  

Why is this a mistake?  Well, consider the idea which motivates Conditional Introduction sub-proof: It starts from “imagining” that the antecedent is true.

But this is just an assumption, something which we imagine to be true in order to work out what *would* follow from it, *if* it were true.  The statements that occur inside a sub-proof should not be regarded as true in the way that statements outside the sub-proof are.

On line 3, we made exactly that mistake: We took a line that was inside a sub-proof, and exported it to a line outside the sub-proof.  This is not valid.

> [!definition] ***Definition***
>
> Let $\phi,\psi$ be propositional formulas.
>
> **Conditional Introduction** is the following inference rule.
>
> > The following allows you to infer $\phi\to\psi$.
> > First, assume $\phi$.
> > Using $\phi$ and any other formulas already accepted, then prove $\psi$.
> > Once this is done, you must stop assuming $\phi$ and any of the formulas proved after assuming $\phi$.

We can also have sub-proofs within sub-proofs.  To demonstrate, here is a proof from $(P\land Q)\to R$ that $P\to (Q\to R)$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $(P\land Q)\to R$ | Assumption |
| 2. | $P\to(Q\to R)$ | Conditional Introduction from subproof below |

Sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 2.1. | *P* | Assumption |
| 2.2.  | $Q\to R$ | Conditional Introduction from subproof below |

Sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 2.2.1. | *Q* | Assumption |
| 2.2.2. | $P\land Q$ | Conjunction Introduction from 2.1, 2.2.1 |
| 2.2.3. | *R* | Conditional Elimination from 1, 2.2.2 |

---

In fact, we can now have proofs which use *no premises at all*!

In the example below, I give a proof, from no premises, to the conclusion that $P\to P$.  It makes sense that we should be able to prove tautologies like this: they are always true, regardless of your assumptions.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\to P$ | Conditional Introduction from subproof below |

Sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1.1. | *P* | Assumption for Conditional Introduction |
| 1.2. | *P* | Reiteration from 1.1 |

> [!exercise] ***Exercise***
>
> 1. Prove, from no premises, that $P\to (Q\to P)$.
> 2. Prove, from *P* and *Q* and $(P\leftrightarrow Q) \to (R\land S)$, that *R*.

> [!exercise] ***Exercise***
>
> There are times in mathematics when one wants to prove an “or” statement.  This can be difficult if we approach it directly.  In the most interesting cases, one cannot prove $P\lor Q$ simply by proving each of *P* and *Q*.  If you could that, then you could prove the stronger claim $P\land Q$!  So why bother even stating the weaker claim, $P\lor Q$?
>
> In these interesting cases, you need a more sophisticated strategy.  In order to prove $P\lor Q$ it is typical to prove the logically equivalent proposition $(\neg P)\to Q$.
>
> Prove, from $R \to S$, and $T\to U$, and $R\lor T$, that $S\lor U$.  
>
> Hint: Since what you want to prove is $S\lor U$ then I recommend instead proving $(\neg S)\to U$.  Once you have this, then use the Material Implication inference rule.

# Biconditional Introduction

> [!definition] ***Definition***
>
> **Biconditional Introduction** is the following inference rule.
>
> > The following allows you to infer $\phi\leftrightarrow \psi$.
> > Assume $\phi$.
> > Using $\phi$ and any formulas already proved, then prove $\psi$.
> > Then stop assuming $\phi$ and any of the formulas proved after it.
> > Now assume $\psi$.
> > Using $\psi$ and any formulas already proved, then prove $\phi$.
> > Then stop assuming $\psi$ and any of the formulas proved after it.

Here is a demonstration.  We prove, from no premises, that $P\leftrightarrow (P\land P)$.

Notice that we must effectively do two separate conditional introduction proofs, one going in each of the directions.  

The sub-indexing is designed to reflect each direction.  We use the notation 1.only1 to indicate the sub-proof in the “only if” direction.  In this case, that means the $P\to (P\land P)$ direction.  

We use the notation 1.if1 to indicate the “if” direction.  In this case, that means $(P\land P)\to P$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\leftrightarrow (P\land P)$ | Biconditional Introduction from subproof below |

Sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1.only1 | *P* | Assumption for Biconditional Introduction |
| 1.2.only1 | $P\land P$ | Conjunction Introduction from 1.only1, 1.only1 |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1.if1 | $P\land P$ | Assumption for Biconditional Introduction |
| 1.if2 | *P* | Conjunction Elimination from 1.if1 |

> [!exercise] ***Exercise***
>
> Prove $((P\to Q)\to R) \leftrightarrow ((P\land \neg Q)\lor R)$.

# Proof by Cases

Recall the proof that every number is even or odd, but not both.  This was a “proof by cases”.  

By a very brief summary, let the number be *n.*  Then if $n \mod 2 = 0$, we proved that *n* is even or odd, but not both.  Then if $n\mod 2 = 1$, we proved that *n* is even or odd, but not both.  

This generally is called a “proof by cases”.  The two “cases” are $n\mod 2=0$ or $n \mod 2 = 1$.

In propositional logic it is structured like so:  Let $\phi,\chi,\psi$ be formulas.  If we have already accepted $\phi\lor\psi$, and we’ve accepted $\phi\to \chi$, and we’ve accepted $\psi\to\chi$.  Then we can infer $\chi$.

Of course, we can generalize this to many cases. 

> [!definition] ***Definition***
>
> **Proof by cases** is the following inference rule.  Let $\phi_1,\phi_2,\dots,\phi_n,\psi$ be formulas.
>
> > From $\phi_1\lor\cdots\lor\phi_n$, and $\phi_1\to\psi$ and $\phi_2\to\psi$ and … and $\phi_n\to\psi$, you may infer $\psi$.

Here is a demonstration, proving from $P\to Q$ and $(\neg P)\to Q$, that *Q*.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\to Q$ | Assumption |
| 2. | $(\neg P)\to Q$ | Assumption |
| 3.  | $P\lor \neg P$ | Proof by Contradiction from subproof below |

Subproof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.1. | $\neg(P\lor\neg P)$ | Assumption for Proof by Contradiction |
| 3.2. | $(\neg P)\land \neg(\neg P)$ | De Morgan’s from 3.1 |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 4. | Q | Proof by Cases from 1, 2, 3 |

> [!exercise] ***Exercise***
>
> Use a proof by cases to prove, from $P\to Q$ and $R\to S$, that $(P\lor R)\to (Q\lor S)$.

# Proof by Contradiction

Here is another technique which requires a sub-proof, although structured differently.

Here is a kind of every-day example of proof by contradiction: A brilliant detective is investigating a crime, and questions the butler, “Did you kill Mr. Hitchens?”  The butler says “No, I was in the garden when Mr. Hitchens was killed in the kitchen, but I heard him scream.”

The detective’s eyes widen, “Oh?  If you were in the garden, then you couldn’t hear Mr. Hitchens scream.  But you said that you did hear Mr. Hitchens scream!  You are contradicting yourself!”

Let’s describe the general structure of a proof by contradiction.  Suppose that you want to infer $\phi$.

- Assume $\neg\phi$ (only for the sake of argument).
- Take some reasoning steps.
- Prove a contradiction.

This justifies $\phi$.  

Why?  Well it shows that $\neg \phi$ leads to a contradiction.  Since a contradiction is impossible, therefore $\neg \phi$ is false.  

Since $\neg\phi$ is false, then $\phi$ is true—which means that we can infer $\phi$.

Let’s now see an example in practice.  From $P\to Q$ and $\neg Q$, we prove $\neg P$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\to Q$ | Assumption |
| 2. | $\neg Q$ | Assumption |
| 3. | $\neg P$ | Proof by Contradiction from subproof below |

Sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.1. | $\neg(\neg P)$ | Assumption for Proof by Contradiction |
| 3.2. | *P* | Double Negation from 3.1 |
| 3.3. | *Q* | Conditional Elimination from 1, 3.2 |
| 3.4. | $Q\land \neg Q$ | Conjunction Introduction from 2, 3.3 |

Look over this proof and see how it aligns with what we described earlier.  The sub-proof:

- We are trying to prove $\neg P$.
- Therefore we assume $\neg(\neg P)$.
- We go through some reasoning steps after that (lines 3.2 to 3.4).
- The last line of the sub-proof is the contradiction $Q\land \neg Q$.

Just as before, a subproof is allowed to reference lines above it.  It can reference, for example, lines 1 and 2.

---

However, once the sub-proof is closed off, the remaining proof is never allowed to refer to lines inside a finished sub-proof.  We already saw how this can lead to invalid inferences in Conditional Introduction.  Let’s see an example of how breaking this rule can lead to invalid inference using Proof by Contradiction.

Here we give an invalid proof that from *P* we can infer *Q*.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | *P* | Assumption |
| 2. | $\neg(Q\land \neg Q)$ | Proof by Contradiction from subproof below |

Sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 2.1. | $Q\land \neg Q$ | Assumption for Proof by Contradiction |
| 2.2. | *Q* | Conjunction Elimination from 2.1 |
| 2.3. | $Q\land \neg Q$ | Reiteration from 2.1 |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3. | *Q* | Reiteration from 2.2 |

As we saw before, it is invalid to infer from *P* that *Q*.  

It was possible here because of the invalid reference, in line 3, to the line 2.2.  Since line 2.2 came from a sub-proof which had ended, this reference is not permitted.

---

Yet again, as with Conditional Introduction, Proof by Contradiction allows us to prove things from no premises at all.

Here we prove from no premises, that $\neg(P\land \neg P)$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\neg(P\land \neg P)$ | Proof by Contradiction from subproof below |

Sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1.1. | $\neg(\neg(P\land\neg P))$ | Assumption for Proof by Contradiction |
| 1.2. | $P\land \neg P$ | Double Negation from 1.1 |

> [!definition] ***Definition***
>
> **Proof by Contradiction** is the following inference rule.
>
> > The following allows you to infer $\phi$.
> > Assume $\neg \phi$.
> > Infer other formulas, from $\neg \phi$ and any other formulas already inferred.
> > Prove any contradiction.
> > Stop assuming $\neg \phi$ and any of the formulas which followed from it.

> [!exercise] ***Exercise***
>
> Use Proof by Contradiction to prove, from $P\leftrightarrow Q$ and $\neg P$, that *Q*.
>
> Also prove, from no premises, that $(P\land \neg P)\to Q$.
>
> Also prove, from $P\land \neg P$, that *Q*.