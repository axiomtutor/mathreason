---
title: "Chapter 4: Propositional Proof Theory"
---

# Arguments, Inferences, and Proofs

A core reason why we study logic in mathematics, is to be able to prove mathematical theorems.  Of course logic is also used in other domains, to prove arguments.

Consider the intuitive example argument "If you committed the murder then you must have been in the room with Mr. Higginswaddle when it happened.  If you were in the room when it happened, then you could not be in Guadalajara that day.  You were in Guadalajara that day.  Therefore you could not have committed the murder."

Several of the statements here are not logical, they are merely "premises".  A premise is any proposition which we accept without further argument.  

In this example the premises of the argument are 

* If you committed the murder then you must have been in the room with Mr. Higginswaddle when it happened.  
* If you were in the room with Mr. Higginswaddle when it happened, then you could not be in Guadalajara that day.
* You were in Guadalajara that day.  

For each of these, we could argue their truth.  That is relevant to the question of who committed the murder, but that is the job of "establishing the basic facts".  This is not what logic is interested in.

Rather, logic comes in *after* we have established the basic facts.  Logic is interested in how we make *inferences* from the premises which we already accept.  

So what logic is interested in, for the purposes of the argument above, is the inference from all of the premises, to the conclusion 

| You could not have committed the murder.  

So logic is interested in *inferences*: the act of using established facts to infer other propositions which must be true because of the premises.  

> [!definition] ***Definition***
> Any sequence of propositions, $\tt \Gamma = (\phi_1,\phi_2,...,\phi_m)$, may be called **premises**, where each of the propositions $\phi_i$ is called a **premise** ($1\le i\le m$).  
> 
> Any proposition, $\tt \psi$, may be called a **conclusion**.  
> 
> In that case, the pair $(\tt \Gamma,\tt \psi)$ is called an **argument**.  
> 
> We say that the argument is **valid** if 
> 
> $$ 
> (\phi_1 \tt \land \phi_2 \tt \land \cdots \tt \land \phi_m) \tt \to \tt \psi 
> $$ 
> 
> is a tautology.  Otherwise the argument is called **invalid**.
> 
> If the argument $(\tt \Gamma,\tt \psi)$ is valid, then we write 
> 
> $$\tt \Gamma \tt \vDash \tt \psi$$
> 
> which is pronounced $\tt \Gamma$ **semantically entails** $\tt \psi$.
> 
> If $(\tt \Gamma,\tt \psi)$ is not valid then we write 
> 
> $$\tt \Gamma\not\tt \vDash \tt \psi$$
> 
> and we say that $\tt \Gamma$ does not semantically entail $\tt \psi$.

> [!exercise] ***Exercise***
> 
> Consider the argument at the beginning of this section, 
> 
> > If you committed the murder then you must have been in the room with Mr. Higginswaddle when it happened.  If you were in the room when it happened, then you could not be in Guadalajara that day.  You were in Guadalajara that day.  Therefore you could not have committed the murder.
> 
> Let us symbolize the premises as 
> * $\tt P\tt \to \tt Q$
> * $\tt Q\tt \to \tt \neg \tt R$
> * $\tt R$
> 
> The conclusion of the argument is then $\tt \neg \tt P$.
> 
> Show that $((\tt P\tt \to \tt Q)\tt \land (\tt Q\tt \to \tt \neg \tt R) \tt \land \tt R)\tt \to \tt \neg \tt P$ is a tautology.  
> 
> Infer that the given argument is valid.  

> [!exercise] ***Exercise***
> Intuitvely, if you assume $\tt P$ then it is valid to infer $\tt P\tt \lor \tt Q$.  I mean, if $\tt P$ is true then $\tt P\tt \lor \tt Q$ will have to be true, no matter what $\tt Q$ is.  (Put formally, I am claiming that if $\tt P^म = ट$ then $(\tt P\tt \lor \tt Q)^म = ट$.  This is true whether $\tt Q^म=ट$ or $\tt Q^म=फ$.)
> 
> Also intuitively, if you assume $\tt P$ then it is invalid to infer $\tt P\tt \land \tt Q$.  Since we don't assume the truth of $\tt Q$ then it is possible for $\tt Q$ to be false, and in that case $\tt P\tt \land \tt Q$ will be false.  (Put formally, there is a model in which $\tt P^म=ट$ and $(\tt P\tt \land \tt Q)^म=फ$.)
> 
> Make a truth-table which demonstrates 
> 
> $$ (\tt P) \tt \vDash \tt P\tt \lor \tt Q $$
> 
> and another which demonstrates 
> 
> $$ (\tt P) \not\tt \vDash \tt P\tt \land \tt Q $$

# Simple Inference Rules

Usually a proof is not given all at once, but in small and intelligible steps.  We call each step an "inference".  A sequence of inferences then builds up to a proof.  

Let's reuse the example from above, 

> If you committed the murder then you must have been in the room with Mr. Higginswaddle when it happened.  If you were in the room when it happened, then you could not be in Guadalajara that day.  You were in Guadalajara that day.  Therefore you could not have committed the murder.

We might provide a proof by first making the following inference: 

> If you were in the room when it happened, then you could not be in Guadalajara that day.  And you were in Guadalajara that day.

Therefore it is a relatively small and direct step, to infer that you were therefore not in the room when it happened.

We now accept 

> You were not in the room when it happened.  And if you committed the murder then you must have been in the room with Mr. Higginswaddle when it happened.

Therefore another small and direct step is to infer that you did not commit the murder.  

If we abstract the above proof into symbols, we would say:

* We accept $\tt P\tt \to \tt Q$ and $\tt Q\tt \to \tt \neg \tt R$, and $\tt R$.
* Because $\tt Q\tt \to \tt \neg \tt R$ and $\tt R$, we therefore infer $\tt \neg \tt Q$.
* Because $\tt \neg \tt Q$ and $\tt P\tt \to \tt Q$, we therefore infer $\tt \neg \tt P$.

The last two bullet points represent the use of an inference rule.  The collection of all three bullet points is the entire proof.  The first bullet point represents the premises of the proof, while the last line ends at the conclusion of the proof.

This proof demonstrates the validity claim,

$$ (\tt P\tt \to \tt Q, \tt Q\tt \to \tt \neg \tt R, \tt R)\tt \vDash \tt \neg \tt P$$

Below we list several inference rules.  

> [!definition] ***Definition***
>
> **Conjunction Introduction** is the inference rule “From $\tt \phi$ and $\tt \psi$ we may infer $\tt \phi\tt \land\tt \psi$.”
>
> **Conjunction Elimination** is the inference rule “From $\tt \phi\tt \land\tt \psi$ we may infer $\tt \phi$, and we may infer $\tt \psi$.”
>
> **Disjunction Introduction** is “From $\tt \phi$ we may infer $\tt \phi\tt \lor\tt \psi$, or we may infer $\tt \psi\tt \lor\tt \phi$, for any formula $\tt \psi$.”
>
> **Disjunction Elimination** is “From $\tt \phi\tt \lor\tt \psi$ and $\tt \neg \tt \phi$ we may infer $\tt \psi$.  From $\tt \phi\tt \lor\tt \psi$ and $\tt \neg \tt \psi$ we may infer $\tt \phi$.”
>
> **Conditional Elimination** is “From $\tt \phi\tt \to\tt \psi$ and $\tt \phi$ we may infer $\tt \psi$.”
>
> **Biconditional Elimination** is “From $\tt \phi\tt \leftrightarrow \tt \psi$ and $\tt \phi$ we may infer $\tt \psi$.  From $\tt \phi\tt \leftrightarrow \tt \psi$ and $\tt \psi$ we may infer $\tt \phi$.”


Each of the above inference rules are justified by the fact that, when its assumptions are true, then its conclusion is guaranteed to also be true.  This can always be confirmed by a truth-table.  

Here is a demonstration for Conjunction Elimination:


$$
\begin{array}{|c|c||c|c|c||c|}
\hline
\tt P & \tt Q & \tt P & \tt \land & \tt Q & \tt P \\ \hline
\color{red} ट & \color{red}ट & & \color{red}ट & & \color{red}ट \\
ट & फ & & फ & & ट \\
\color{red}फ & \color{red}ट & & \color{red}फ & & \color{red}फ \\
फ & फ & & फ & & फ \\ \hline
\end{array}
$$



Here we have the truth-table for the premise $\tt P\tt \land \tt Q$ and the conclusion $\tt P$.  The first two columns show all possible combinations of truth-values for $\tt P$ and $\tt Q$.  The next three columns show the truth-value of the premise, $\tt P\tt \land \tt Q$, with the truth-value placed under its main connective, $\tt \land$.  The final column shows the truth-value of the conclusion, $\tt P$.

There is just one row where $\tt P\tt \land \tt Q$ is true, on row number 1.  In this row, we also have that $\tt P$ is true.  

So this shows that “Whenever $\tt P\tt \land \tt Q$ is true, we have $\tt P$ is true.”  This means that the inference rule is valid, because it will never take us from a true proposition to a false one.

Let’s check the Disjunction Elimination rule.  Here is the truth-table for $\tt P\tt \lor \tt Q$ and $\tt \neg \tt P$ and $\tt Q$.

$$
\begin{array}{|c|c||c|c|c||c|c||c|}\hline
 \tt P & \tt Q &
 \tt P & \tt \lor & \tt Q &
 \tt \neg & \tt P &
 \tt Q \\\hline
 \color{red}{ट} & \color{red}{ट} &
  & \color{red}{ट} & &
 \color{red}{फ} & &
 \color{red}{ट}
 \\\hline
 ट & फ &
  & ट & &
 फ & & फ
 \\\hline
 \color{red}{फ} & \color{red}{ट} &
  & \color{red}{ट} & &
 \color{red}{ट} & &
 \color{red}{ट}
 \\\hline
 फ & फ &
  & फ & &
 ट & & फ
 \\\hline
\end{array}
$$

Let’s look only at the rows in which the assumptions of the inference rule are true.  These would be the rows where both $\tt P\tt \lor \tt Q$ and $\tt \neg \tt P$ are true.  This happens only at one row, which is row number 3.

In this row, the value of $\tt Q$ is true.  So yet again, the inference rule is valid.

---

It can be helpful to see an example of an inference rule that is *not* valid.  This would require a rule in which the premises can be true but the inferred proposition false.

An example would be "From $\tt P$ we can infer $\tt P\tt \land \tt Q$".  Let's see a truth-table which demonstrates why this is invalid.

$$
\begin{array}{|c|c||c||c|c|c|}\hline
\tt P & \tt Q &
\tt P &
\tt P & \tt \land & \tt Q \\\hline
\color{red}{ट} & \color{red}{ट} &
\color{red}{ट} &
& \color{red}{ट} &
\\\hline
ट & फ &
ट &
& फ &
\\\hline
\color{red}{फ} & \color{red}{ट} &
\color{red}{फ} &
& \color{red}{फ} &
\\\hline
फ & फ &
फ &
& फ &
\\\hline
\end{array}
$$

Here we have the truth-table for $\tt P$ and then $\tt P\tt \land \tt Q$.  

For the inference "If $\tt P$ then $\tt P\tt \land \tt Q$" to be valid, we should look at each model (row of the truth-table).  If there is a model where $\tt P$ is true, we check that in that model also $\tt P\tt \land \tt Q$ is true.  

However, this time, that's not true!  There is an offending row!  

It is row 2, the model in which $\tt P^म=ट$ and $\tt Q^म=फ$.  In this model, $\tt P$ is true while $\tt P\tt \land \tt Q$ is false.  

For this reason, the inference "If $\tt P$ then $\tt P\tt \land \tt Q$" is invalid.

> [!note]- It just takes one model.
> 
> Note that just one "offending" model is all it takes to demonstrate that an inference is invalid.  (By "offending" model I mean a model in which the premise(s) is(are) true while the conclusion is false.)
> 
> If there are many such offending models, then the argument is invalid.  But even if there is just one, then that still means the inference is invalid.

> [!exercise] ***Exercise***
>
> Show that all of the other inference rules are valid.

> [!exercise] ***Exercise***
>
> We could (but will not) have an inference rule “From $\tt \neg(\tt \neg \tt \phi)$ we may infer $\tt \phi$.”
>
> Prove that this inference rule is valid.



# Proofs

In the section above we mostly focused on inference rules, but of course, inference rules exist so that we may combine them into a proof.  Again, a proof is just a sequence of inferences.  

For example, suppose that we accept the formulas 

- $\tt \neg \tt P$
- $\tt P\tt \lor \tt Q$
- $\tt Q\tt \to \tt R$.

Let’s write a "paragraph-style" proof, from these assumptions, to the conclusion $\tt R$.

Because we accept $\tt \neg \tt P$ and $\tt P\tt \lor \tt Q$, therefore we may use the Disjunction Elimination rule to infer $\tt Q$.  Therefore we now accept $\tt Q$.

Because we now accept $\tt Q$ and $\tt Q\tt \to \tt R$, then we may use the Conditional Elimination rule to infer $\tt R$.  

Because we now accept $\tt R$, which is the intended conclusion of the proof, then this proof is complete.

---

Notice the way that the proof above works: 
1. We start by assuming the truth of some formulas.  
2. Using these assumptions, we apply the inference rules to infer new formulas.  When a new formula is inferred, it may then be used in further steps.
3. We continue this process until we eventually infer the conclusion of the proof.  

> [!exercise] ***Exercise***
>
> Assume the formulas $(\tt P\tt \land \tt Q)\tt \to (\tt R\tt \land \tt S)$, and *P,* and *Q.*
>
> Prove the formula $\tt R\tt \lor \tt T$.

# Substitution

In this section, we are going to discuss substitution, because it will help us to define more inference rules.

Let's start with an example.

Suppose that we already accept $(\tt P\tt \lor \tt Q)\tt \land \tt R$.  Notice that the formula $\tt P\tt \lor \tt Q$ is a subformula.

Moreover notice that $\tt Q\tt \lor \tt P$ is equivalent to $\tt P\tt \lor \tt Q$.  

Therefore if we substitute $\tt P\tt \lor \tt Q$ with $\tt Q\tt \lor \tt P$, it shouldn’t change the value of the formula.  That is to say, $(\tt P\tt \lor \tt Q)\tt \land \tt R$ should be equivalent to $(\tt Q\tt \lor \tt P)\tt \land \tt R$.

> [!exercise] ***Exercise***
>
> Draw a truth-table to prove that $(\tt P\tt \lor \tt Q)\tt \land \tt R$ is equivalent to $(\tt Q\tt \lor \tt P)\tt \land \tt R$.

More generally suppose that 
* $\tt \phi$ is a formula, 
* $\tt \chi$ is a subformula of $\tt \phi$, 
* and $\tt \psi$ is equivalent to $\tt \chi$.  

Then it should be true that, if you substitute $\tt \psi$ for $\tt \chi$ then the result should be equivalent to $\tt \phi$.  

> Substitution of a subformula with an equivalent subformula results in an equivalent formula.

In order to define an inference rule for substitution, we first have to define substitution.

> [!definition] ***Definition***
>
> Suppose that $\tt \phi,\tt \chi,\tt \psi$ are all propositional formulas.  We define $[\tt \phi]_{\tt \chi := \tt \psi}$ to mean “everywhere that $\tt \chi$ is a subformula of $\tt \phi$, replace it with $\tt \psi$.”

We will mostly be interested in substituting equivalent subformulas, but in principle it is possible to substitute non-equivalent subformulas.  

For example, let’s calculate $[(\tt P\tt \land ((\tt \neg \tt Q)\tt \lor \tt R))]_{\tt \neg \tt Q := \tt P\tt \land \tt S}$.

First we take the formula $\tt P\tt \land ((\tt \neg \tt Q)\tt \lor \tt R)$ and identify where it has the subformula $\tt \neg \tt Q$.  We see that it has the subformula here:

$$
\tt P\tt \land (\colorbox{yellow}{$(\tt \neg \tt Q)$}\tt \lor \tt R)
$$

We then replace this subformula with the subformula $\tt P\tt \land \tt S$, to obtain the result, 

$$
\tt P\tt \land ((\tt P\tt \land \tt S)\tt \lor \tt R)
$$

There ya go, that's how do you do substitution in general!

> [!exercise] ***Exercise***
>
> Show that $[\tt P\tt \land (\tt Q\tt \to \tt P)]_{\tt P:= \tt \neg \tt P}$ is equal to $(\tt \neg \tt P)\tt \land (\tt Q\tt \to\tt \neg \tt P)$.
>
> Show that $[\tt P\tt \land \tt Q]_{\tt R:= \tt S}$ is equal to $\tt P\tt \land \tt Q$.

> [!exercise]
> Suppose that $\tt \phi$ is a propositional formula such that $\tt \chi$ does not occur as a subformula of $\tt \phi$.  Let $\tt \psi$ be any formula.
>
> Explain why $\phi_{\tt \chi:= \tt \psi}=\tt \phi$.

Now that we understand substitution, we can state the following inference rules.

> [!definition] ***Definition***
>
> Let $\tt \phi,\tt \chi,\tt \psi,\tt \omega$ be propositional formulas.  
>
> **Double negation** is the inference rule that, from $\tt \phi$, one can infer either $[\tt \phi]_{\tt \chi:= \tt \neg(\tt \neg\tt \chi)}$ or $[\tt \phi]_{\tt \neg(\tt \neg\tt \chi):= \tt \chi}$. 
> > [!note]- What double negation says.
> > What does "$[\tt \phi]_{\tt \chi := \tt \neg(\tt \neg \tt \chi)}$" mean?  
> > 
> > It means "In any formula ($\tt \phi$), you can always replace any part ($\tt \chi$) with its double-negation ($\tt \neg(\tt \neg \tt \chi)$)."
>
> **Conjunction commutativity** is the inference rule that, from $\tt \phi$ one can infer $\phi_{\tt \chi\tt \land\tt \psi := \tt \psi\tt \land\tt \chi}$.
>
> **Conjunction associativity** is the inference rule that, from $\tt \phi$ one can infer either $\phi_{\tt \chi\tt \land(\tt \psi\tt \land\tt \omega) := (\tt \chi\tt \land\tt \psi)\tt \land\tt \omega}$ or $\phi_{(\tt \chi\tt \land\tt \psi)\tt \land\tt \omega:= \tt \chi\tt \land(\tt \psi\tt \land\tt \omega)}$.
>
> **Disjunction commutativity** is the inference rule that, from $\tt \phi$ one can infer $\phi_{\tt \chi\tt \lor\tt \psi:=\tt \psi\tt \lor\tt \chi}$.
>
> **Disjunction associativity** is the inference rule that, from $\tt \phi$ one can infer either $\phi_{\tt \chi\tt \lor(\tt \psi\tt \lor\tt \omega) := (\tt \chi\tt \lor\tt \psi)\tt \lor\tt \omega}$ or $\phi_{(\tt \chi\tt \lor\tt \psi)\tt \lor\tt \omega:= \tt \chi\tt \lor(\tt \psi\tt \lor\tt \omega)}$.
>
> **De Morgan’s** is the inference rule that, from $\tt \phi$ one can infer either $\phi_{\tt \neg(\tt \chi\tt \lor\tt \psi):=(\tt \neg\tt \chi)\tt \land(\tt \neg\tt \psi)}$ or $\phi_{(\tt \neg\tt \chi)\tt \land(\tt \neg\tt \psi):=\tt \neg(\tt \chi\tt \lor\tt \psi)}$ or $\phi_{\tt \neg(\tt \chi\tt \land\tt \psi):= (\tt \neg\tt \chi)\tt \lor(\tt \neg\tt \psi)}$ or $\phi_{(\tt \neg \tt \chi)\tt \lor(\tt \neg\tt \psi):=\tt \neg(\tt \chi\tt \land\tt \psi)}$.
>
> **Distribution** is the inference rule that, from $\tt \phi$ one can infer either $\phi_{\tt \chi\tt \land(\tt \psi\tt \lor\tt \omega) := (\tt \chi\tt \land\tt \psi)\tt \lor(\tt \chi\tt \land \tt \omega)}$ or $\phi_{\tt \chi\tt \lor(\tt \psi\tt \land\tt \omega):= (\tt \chi\tt \lor\tt \psi)\tt \land(\tt \chi\tt \lor\tt \omega)}$.
>
> **Factorization** is the inference rule that, from $\tt \phi$ one can infer either $\phi_{(\tt \chi\tt \land\tt \psi)\tt \lor(\tt \chi\tt \land\tt \omega):=\tt \chi\tt \land(\tt \psi\tt \lor\tt \omega)}$ or $\phi_{(\tt \chi\tt \lor\tt \psi)\tt \land(\tt \chi\tt \lor\tt \omega):=\tt \chi\tt \lor(\tt \psi\tt \land\tt \omega)}$.
>
> **Material implication** is the inference rule that, from $\tt \phi$ one can infer $\tt \phi_{\tt \chi\tt \to\tt \psi:= (\tt \neg \tt \chi)\tt \lor\tt \psi}$ or $\tt \phi_{(\tt \neg\tt \chi)\tt \lor\tt \psi:=\tt \chi\tt \to\tt \psi}$.
>
> **Biconditional commutativity** is the inference rule that, from $\tt \phi$ one can infer $\phi_{\tt \chi\tt \leftrightarrow\tt \psi := \tt \psi\tt \leftrightarrow\tt \chi}$.
>
> **Reiteration** is the inference rule that, if $\tt \phi$ has been proved before, then it can be used later in a proof, at any time.

Let's see how we can use these rules to show that from $\tt P$ we can infer $\tt \neg(\tt \neg \tt P)$.  To do so we'll use the double negation rule.  

In this example, $\tt \phi=\tt P$ and $\tt \chi = \tt P$.

We are using the version of double negation, in which we infer $\phi_{\tt \chi:=\tt \neg(\tt \neg\tt \chi)}$.  In this case, that means we are inferring $\tt P_{\tt P:=\tt \neg(\tt \neg \tt P)}$.  

Let's calculate that

$$
\tt P_{\tt P:=\tt \neg(\tt \neg \tt P)} = \tt \neg(\tt \neg \tt P)
$$

The double negation rule therefore says that from $\tt P$ we may infer $\tt \neg(\tt \neg \tt P)$.  

---

Here is another worked example, again using double negation but this time in the other direction.  

From $\tt P\tt \lor \tt \neg(\tt \neg \tt Q)$ we can infer $\tt P\tt \lor \tt Q$.  

In this example, we use $\tt \phi=\tt P\tt \lor \tt \neg(\tt \neg \tt Q)$ and $\tt \chi = \tt Q$.  We use the version of double negation which lets us infer $\phi_{\tt \neg(\tt \neg \tt \chi):=\tt \chi}$.

Since 

$$
\tt P\tt \lor\tt \neg(\tt \neg \tt Q)_{\tt \neg(\tt \neg \tt Q):= \tt Q} = \tt P\tt \lor \tt Q
$$

this explains how the rule allows us to infer $\tt P\tt \lor \tt Q$.

> [!exercise] ***Exercise***
>
> Use conjunction commutativity to infer, from $\tt P\tt \land(\tt Q\tt \lor \tt R)$, that $(\tt Q\tt \lor \tt R)\tt \land \tt P$.
>
> Identify $\tt \phi,\tt \chi,\tt \psi$ as you apply the rule.

> [!exercise] ***Exercise***
>
> Use disjunction commutativity to infer, from $\tt P\tt \land (\tt Q\tt \lor \tt R)$, that $\tt P\tt \land (\tt R\tt \lor \tt Q)$.

> [!exercise] ***Exercise***
>
> Use distribution to infer, from $\tt P\tt \land (\tt Q\tt \lor \tt R)$, that $(\tt P\tt \land \tt Q)\tt \lor(\tt P\tt \land \tt R)$.

> [!exercise] ***Exercise***
>
> Infer from $\tt P\tt \land (\tt Q\tt \lor \tt R)$ that $(\tt R\tt \lor \tt P)\tt \land (\tt Q\tt \lor \tt P)$.
>
> Note: This inference requires several steps.  One way to do it is to first use distribution, and then use commutativity three times.

# Fitch-style Proofs

We will now develop a formal system of writing proofs.  

Let's begin from an example.  From the assumption $\tt P\tt \land (\tt Q\tt \land \tt R)$ we will prove $\tt R$.

Here is a presentation of the proof in a "Fitch-style" sequence of lines.  Each line carries an index (numbering), the formula, and the inference rule which allows us to infer it together with the previously accepted formula indices which are used in the inference rule.

I've colored assumptions in red and the conclusion in green.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\tt P\tt \land (\tt Q\tt \land \tt R)$ | Assumption |
| 2. | $\tt Q\tt \land \tt R$ | Conjunction Elimination from 1 |
| 3. | $\tt R$ | Conjunction Elimination from 2. |

---


Let’s see another example.  From the assumptions $\tt \neg \tt Q$ and $\tt P\tt \to \tt Q$, we prove $\tt \neg \tt P$.  

| **Index** | **Formula**      | **Reason**                        |
| --------- | ---------------- | --------------------------------- |
| 1.        | $\tt \neg \tt Q$         | Assumption                        |
| 2.        | $\tt P\tt \to \tt Q$         | Assumption                        |
| 3.        | $(\tt \neg \tt P)\tt \lor \tt Q$ | Material Implication from 2       |
| 4.        | $\tt \neg \tt P$         | Disjunction Elimination from 1, 3. |

---

The table is a nice way to display the proof, but it is just a visual aid.  

The proof *itself* is just the sequence of propositions.  Consider the first table proof that I presented above.  It is a sequence of assumptions, $\tt P\tt \land (\tt Q\tt \land \tt R)$, and then a sequence of inferences, $\tt Q\tt \land \tt R, \tt R$.  

If we did not care about readability at all, we would write proofs as mere sequences.  This is, in fact, how we will formally define what a proof is.

But note that a proof is not just *any* two sequences of propositions.  There must be a sequence of assumptions, and a sequence of inferences.  Each formula in the sequence of inferences must be justified by an inference rule that uses earlier formulas.  

> [!note]- Alternate styles of proof systems.
>
> There are other ways of displaying a proof.  All of them are valid.
> 1. Before this section on Fitch-style proofs, we presented proofs in a "paragraph style". This writes proofs like they are just in natural language prose. 
> 2. There are also “Gentzen-style proofs” and “the sequent calculus”.  They all prove the same things, they just do so with different styles of notation.
>    
>    See this article from the SEP for more information on proof styles. https://plato.stanford.edu/archives/fall2025/entries/natural-deduction/


> [!definition] ***Definition***
> 
> Let $\tt \Gamma = (\phi_1, \phi_2,...,\phi_m)$ be a finite sequence of formulas, which we will call the **(sequence of) assumptions**.  
> 
> Let $\tt \Psi = (\psi_1,\psi_2,...,\psi_n)$ be a finite sequence of formulas.  We say that $\tt \Psi$ is a **proof of $\psi_n$ from $\tt \Gamma$** if the following conditions hold.  
> 
> For every $1\le i\le n$, 
> * Either $\psi_i \in\tt \Gamma$, or 
> * there is an inference rule such that the formulas $\phi_1,\phi_2,...,\phi_m, \psi_1,\psi_2,...,\psi_{i-1}$ allow one to infer $\psi_i$.
> 
> We call $\psi_n$ the **conclusion** of the proof. 
> 
> Let $\tt \Gamma$ be a sequence or formulas, and $\tt \psi$ a formula. If there exists a proof of $\tt \psi$ from $\tt \Gamma$, then we write
> $$\tt \Gamma \tt \vdash \tt \psi$$
> which is pronounced, $\tt \Gamma$ **syntactically entails** (or **proves**) $\tt \psi$.
> 


 > [!note]- The definition put simply.  
 > 
 > The simple version of what this definition says, is that a proof is a sequence (the sequence is made up of both $\tt \Gamma$ and $\tt \Psi$) of formulas, each with a justification.  A formula may be justified by being an assumption.  (If there are any assumptions, we traditionally place these at the beginning of the proof, but it's not technically required.) 
 > 
 > If a formula is not an assumption, then it must be justified by an inference rule.  An inference rule must refer only to propositions which have already been accepted earlier in the proof.  
 > 
 > And a proof must always end on with the concluding formula.  

Notice the difference between semantic and syntactic entailment. Let $\tt \Gamma$ be a finite sequence of formulas, and $\tt \psi$ a formula. 

The expression

$$\tt \Gamma \tt \vDash \tt \psi$$
is a semantic notion. It is stated in terms of truth values. 

The expression

$$\tt \Gamma \tt \vdash \tt \psi$$

is a syntactic notion. It is stated entirely in terms of the existence of certain formulas.

The point of a proof, is to demonstrate that an argument is valid. That is to say, we hope that $\tt \Gamma\tt \vdash\tt \psi$ will ensure that $\tt \Gamma\tt \vDash\tt \psi$. We will have more to say about this later. 

---

Based on the formal definition of a proof above, the following is a proof: 

$$ \tt \Gamma = (\tt P, \tt Q), \tt \Psi = (\tt P\tt \land \tt Q, (\tt P\tt \land \tt Q)\tt \land \tt P) $$

Notice that $\tt \Gamma$ is allowed to be any finite sequence of propositions.  

The propositions of $\tt \Psi$, however, must be inferrable. That is to say, for each proposition in $\tt \Psi$, there must be an inference rule which can infer that proposition from $\tt \Gamma$ or the earlier propositions. 

For example, $\psi_1 = \tt P\tt \land \tt Q$ is justified by Conjunction Introduction with reference to $\phi_1 = \tt P \in \tt \Gamma$ and $\phi_2=\tt Q\in\tt \Gamma$. 

Next $\psi_2 = (\tt P\tt \land \tt Q)\tt \land \tt P$ is justified by Conjunction Introduction with reference to $\phi_1=\tt P\in\tt \Gamma$ and $\psi_1 = \tt P\tt \land \tt Q$.  

The conclusion of a proof is always the last proposition, so the conclusion is $(\tt P\tt \land \tt Q)\tt \land \tt P$.  

> [!exercise] ***Exercise***
> 
> Decide whether the following pairs of sequences of propositions is a proof or not.  If it is a proof, identify the conclusion of the proof.
> 
> 1. $\tt \Gamma = (\tt P,\tt Q)$ and $\tt \Psi = (\tt R, \tt S)$.
> 2. $\tt \Gamma = (\tt P,\tt Q)$ and $\tt \Psi = (\tt P)$.
> 3. $\tt \Gamma = (\tt P,\tt Q)$ and $\tt \Psi = (\tt Q,\tt P,\tt P\tt \land \tt Q,\tt P)$.

We now know the formal definition of a proof. From now on, we mostly ignore the formalism—we will only use tabular proofs.

For emphasis, I will color the assumptions with red and the conclusion with green.

---


Below is a long and challenging proof.  Don’t worry if it seems like something you couldn’t do yourself—working out these proofs is a skill that grows with exercise and time.

From the assumptions $\tt P\tt \to \tt Q$ and $\tt R\tt \to \tt Q$ and $\tt P\tt \lor \tt R$, we will prove $\tt Q$. That is to say, the proof below demonstrates

$$ (\tt P\tt \to \tt Q, \tt R\tt \to \tt Q, \tt P\tt \lor \tt R) \tt \vdash \tt Q $$

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\tt P\tt \to \tt Q$ | Assumption |
| 2. | $\tt R\tt \to \tt Q$ | Assumption |
| 3.  | $\tt P\tt \lor \tt R$ | Assumption |
| 4. | $(\tt \neg \tt P)\tt \lor \tt Q$ | Material Implication from 1 |
| 5. | $(\tt \neg \tt R)\tt \lor \tt Q$ | Material Implication from 2 |
| 6. | $\tt Q\tt \lor \tt \neg \tt P$ | Disjunction Commutativity from 4 |
| 7. | $\tt Q\tt \lor \tt \neg \tt R$ | Disjunction Commutativity from 5 |
| 8. | $(\tt Q\tt \lor \tt \neg \tt P)\tt \land (\tt Q\tt \lor \tt \neg \tt R)$ | Conjunction Introduction from 6, 7 |
| 9. | $\tt Q\tt \lor ((\tt \neg \tt P)\tt \land (\tt \neg \tt R))$ | Factorization from 8 |
| 10. | $\tt Q\tt \lor\tt \neg(\tt P\tt \lor \tt R)$ | De Morgan’s from 9 |
| 11. | $\tt \neg(\tt \neg(\tt P\tt \lor \tt R))$ | Double Negation from 3 |
| 12. | $\tt Q$ | Disjunction Elimination from 10, 11. |

> [!exercise] ***Exercise***
>
> From the assumptions $\tt P$ and $\tt P\tt \to \tt Q$ and $\tt Q\tt \to \tt R$, prove $\tt R$. That is to say, show that
> $$(\tt P, \tt P\tt \to \tt Q, \tt Q\tt \to \tt R)\tt \vdash \tt R$$
>
> From the assumption $(\tt P\tt \land \tt Q)\tt \lor (\tt P\tt \land \tt R)$ prove $\tt P$. That is to say, show
> $$((\tt P\tt \land \tt Q)\tt \lor (\tt P\tt \land \tt R)) \tt \vdash \tt P$$
>
> From the assumptions $(\tt \neg \tt P)\tt \lor \tt Q$ and $\tt P$, prove $\tt Q$. That is to say, 
> $$((\tt \neg \tt P)\tt \lor \tt Q, \tt P) \tt \vdash \tt Q$$
>
> (The first proof requires six lines, and the others require significantly fewer.)


# Conditional Introduction

Consider the argument that, from $\tt P\tt \to \tt Q$ and $\tt Q\tt \to \tt R$ it should follow that $\tt P\tt \to \tt R$.

This is a valid argument, because whenever the assumptions are true, you will find that the conclusion is true.  We could demonstrate this fact using a truth-table.  

However, it is not possible (or at least, not easy) to prove this using the inference rules that we have defined up to this point.  Therefore we need more inference rules, and here we introduce the Conditional Introduction rule.  This rule is distinct from the others, in that it requires the idea of a “subproof”.  

Before describing this rule, I want to point out that—although this rule might, at first, seem complicated—it is a very natural style of reasoning.  It is so natural, that we have been used it repeatedly in the earlier case study on number theory.

Recall the proof that, for natural numbers $a,n$, 

| If we have $a|n$ then $\frac n a$ is a natural number.  

This is an "if-then" proposition, and we used a "conditional introduction" proof.

Without rehearsing the entire proof, the broad structure of the proof was: 

- Assume $a|n$.  (I.e. assume the antecedent.)
- Go through a few reasoning steps. 
- We were able to show that $\frac n a$ was a natural number. (I.e. prove the consequent.)

That is exactly the structure of a Conditional Introduction proof.  If you want to prove the conditional $\tt \phi\tt \to\tt \psi$ then 

- Assume $\tt \phi$.
- Go through a few reasoning steps.
- Show $\tt \psi$.

Let's demonstrate with an example.  We will now prove, from $\tt P\tt \to \tt Q$ and $\tt Q\tt \to \tt R$ the conclusion that $\tt P\tt \to \tt R$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\tt P\tt \to \tt Q$ | Assumption |
| 2. | $\tt Q\tt \to \tt R$ | Assumption |
| 3. | $\tt P\tt \to \tt R$ | Conditional Introduction from sub-proof below. |

 3. conditional sub-proof
 
| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.1. | $\tt P$ | Assumption for Conditional Introduction |
| 3.2. | $\tt Q$ | Conditional Elimination from 1, 3.1 |
| 3.3. | R | Conditional Elimination from 2, 3.2. |

To explain how this works, notice line 3, which holds the proposition $\tt P\tt \to \tt R$.  This line is justified by the subproof below it.   

The sub-proof mirrors what we said generally:

- It assumes the antecedent, $\tt P$ (line 3.1).
- It goes through some reasoning steps (lines 3.2 and 3.3).
- It shows the consequent, $\tt R$ (line 3.3).

As a comment about how we *write* sub-proofs in tabular form: 

- They are written with extra indentation.
- They use a sub-indexing system.  Since the conditional $\tt P\tt \to \tt R$ was on line 3, then the indices of the sub-proof are 3.1, 3.2, and so on.

---

Here is another example.  From $\tt P\tt \to \tt R$, and $\tt P\tt \to \tt S$, and $(\tt P\tt \to (\tt R\tt \land \tt S))\tt \to \tt Q$ we can prove that $\tt Q$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\tt P\tt \to \tt R$ | Assumption |
| 2. | $\tt P\tt \to \tt S$ | Assumption |
| 3. | $(\tt P\tt \to (\tt R\tt \land \tt S))\tt \to \tt Q$ | Assumption |
| 4. | $\tt P\tt \to (\tt R\tt \land \tt S)$ | Conditional Introduction from subproof below |

4. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 4.1. | $\tt P$ | Assumption for Conditional Introduction |
| 4.2. | $\tt R$ | Conditional Elimination from 1, 4.1 |
| 4.3. | $\tt S$ | Conditional Elimination from 2, 4.1 |
| 4.4. | $\tt R\tt \land \tt S$ | Conjunction Introduction from 4.2, 4.3. |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 5. | $\tt Q$ | Conditional Elimination from 3, 4. |

---

Let’s now see how a sub-proof can go wrong.

Consider the following invalid proof that, from $\tt P$, we can infer $\tt Q$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\tt P$ | Assumption |
| 2. | $\tt Q\tt \to \tt P$ | Conditional Introduction from subproof below |

2. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 2.1. | $\tt Q$ | Assumption for Conditional Introduction |
| 2.2. | $\tt P$ | Reiteration from 1. |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3. | $\tt Q$ | Reiteration from 2.1. |

This proof must be invalid—$\tt P$ does not imply $\tt Q$.  It is intuitively true that, from a given proposition ($\tt P$) one should not be able to infer some other random and unrelated proposition ($\tt Q$).  

We can also demonstrate that the argument is invalid using a truth-table.  I will leave that to you to work out in detail, but I promise: In the truth-table, there is a row at which $\tt P$ is true while $\tt Q$ is false.  

Therefore something must have gone wrong.  But specifically, where?  It seems like we have only used inference rules at each step, which we previously accepted as valid.  

The error is on line (3).  

Why is this a mistake?  It seems like it is merely reiteration of a previous line, which is an inference rule that we've accepted and used before.  

The answer comes from thinking carefully about the logic of Conditional Introduction. When we prove a proposition by Conditional Introduction, we assume its antecedent, and the work from this assumption.  Anything that we prove, under this assumption, must always come with the caveat "this is true only provided that the antecedent is true".

In line 3, we exported a statement from a subproof, to a line which is outside of the subproof.  This removes the context.  It removes the assumption of the antecedent.  

Therefore when we formally define the Conditional Introduction inference rule, below, we should specify once a Conditional Introduction subproof is concluded, we may no longer use the propositions which occur inside of the Conditional Introduction.

> [!definition] ***Definition***
>
> Let $\tt \phi,\tt \psi$ be propositional formulas.
>
> **Conditional Introduction** is the following inference rule.
>
> > The following allows you to infer $\tt \phi\tt \to\tt \psi$.
> > 
> > First, assume $\tt \phi$.
> > 
> > Using $\tt \phi$ and any other formulas already accepted, then prove $\tt \psi$.
> > 
> > Once this is done, you must stop assuming $\tt \phi$ and any of the formulas proved after assuming $\tt \phi$.

We can also have sub-proofs within sub-proofs.  To demonstrate, here is a proof from $(\tt P\tt \land \tt Q)\tt \to \tt R$ that $\tt P\tt \to (\tt Q\tt \to \tt R)$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $(\tt P\tt \land \tt Q)\tt \to \tt R$ | Assumption |
| 2. | $\tt P\tt \to(\tt Q\tt \to \tt R)$ | Conditional Introduction from subproof below. |

2. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 2.1. | $\tt P$ | Assumption |
| 2.2.  | $\tt Q\tt \to \tt R$ | Conditional Introduction from subproof below. |

2.2. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 2.2.1. | $\tt Q$ | Assumption |
| 2.2.2. | $\tt P\tt \land \tt Q$ | Conjunction Introduction from 2.1, 2.2.1 |
| 2.2.3. | $\tt R$ | Conditional Elimination from 1, 2.2.2. |

---

In fact, we can now have proofs which use *no premises at all*!

In the example below, I give a proof, from no premises, to the conclusion that $\tt P\tt \to \tt P$.  It makes sense that we should be able to prove tautologies like this: they are always true, regardless of your assumptions.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\tt P\tt \to \tt P$ | Conditional Introduction from subproof below. |

1. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1.1. | $\tt P$ | Assumption for Conditional Introduction |
| 1.2. | $\tt P$ | Reiteration from 1.1. |

> [!note]- Why proofs?
> Any proof which is 

> [!exercise] ***Exercise***
>
> 1. Prove, from no premises, that $\tt P\tt \to (\tt Q\tt \to \tt P)$.
> 2. Prove, from $\tt P$ and $\tt Q$ and $(\tt P\tt \leftrightarrow \tt Q) \tt \to (\tt R\tt \land \tt S)$, that $\tt R$.

> [!exercise] ***Exercise***
>
> There are times in mathematics when one wants to prove an “or” statement.  This can be difficult if we approach it directly.  In the most interesting cases, one cannot prove $\tt P\tt \lor \tt Q$ simply by proving each of $\tt P$ and $\tt Q$.  If you could that, then you could prove the stronger claim $\tt P\tt \land \tt Q$!  So why bother even stating the weaker claim, $\tt P\tt \lor \tt Q$?
>
> In these interesting cases, you need a more sophisticated strategy.  In order to prove $\tt P\tt \lor \tt Q$ it is typical to prove the logically equivalent proposition $(\tt \neg \tt P)\tt \to \tt Q$.
>
> Prove, from $\tt R \tt \to \tt S$, and $\tt T\tt \to \tt U$, and $\tt R\tt \lor \tt T$, that $\tt S\tt \lor \tt U$.  
>
> Hint: Since what you want to prove is $\tt S\tt \lor \tt U$ then I recommend instead proving $(\tt \neg \tt S)\tt \to \tt U$.  Once you have this, then use the Material Implication inference rule.

# Biconditional Introduction

> [!definition] ***Definition***
>
> **Biconditional Introduction** is the following inference rule.
>
> > The following allows you to infer $\tt \phi\tt \leftrightarrow \tt \psi$.
> > 
> > Assume $\tt \phi$.
> > 
> > Using $\tt \phi$ and any formulas already proved, then prove $\tt \psi$.  Then stop assuming $\tt \phi$ and any of the formulas proved after it.
> > 
> > Now assume $\tt \psi$.
> > 
> > Using $\tt \psi$ and any formulas already proved, then prove $\tt \phi$.
> > Then stop assuming $\tt \psi$ and any of the formulas proved after it.

Here is a demonstration.  We prove, from no premises, that $\tt P\tt \leftrightarrow (\tt P\tt \land \tt P)$.

Notice that we must effectively do two separate conditional introduction proofs, one going in each of the directions.  

The sub-indexing is designed to reflect each direction.  We use the notation 1.only.1 to indicate the sub-proof in the “only if” direction.  In this case, that means the $\tt P\tt \to (\tt P\tt \land \tt P)$ direction.  

We use the notation 1.if.1 to indicate the “if” direction.  In this case, that means $(\tt P\tt \land \tt P)\tt \to \tt P$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\tt P\tt \leftrightarrow (\tt P\tt \land \tt P)$ | Biconditional Introduction from subproof below. |

1. "Only" sub-proof

| **Index** | **Formula** | **Reason**                                        |
| --------- | ----------- | ------------------------------------------------- |
| 1.only.1  | $\tt P$         | Assumption for Biconditional Introduction         |
| 1.only.2  | $\tt P\tt \land \tt P$  | Conjunction Introduction from 1.only.1, 1.only.1. |


1. "If" sub-proof

| **Index** | **Formula** | **Reason**                                |
| --------- | ----------- | ----------------------------------------- |
| 1.if.1    | $\tt P\tt \land \tt P$  | Assumption for Biconditional Introduction |
| 1.if.2    | $\tt P$         | Conjunction Elimination from 1.if.1.      |

> [!exercise] ***Exercise***
>
> Prove $((\tt P\tt \to \tt Q)\tt \to \tt R) \tt \leftrightarrow ((\tt P\tt \land \tt \neg \tt Q)\tt \lor \tt R)$.

# Proof by Cases

Recall the proof that every number is even or odd, but not both.  This was a “proof by cases”.  

By a very brief summary, let the number be *n.*  Then if $n \mod 2 = 0$, we proved that *n* is even or odd, but not both.  However, if $n\mod 2 = 1$, we proved that *n* is even or odd, but not both.  

This generally is called a “proof by cases”.  The two “cases” are $n\mod 2=0$ or $n\mod 2 = 1$.

In propositional logic it is structured like so:  Let $\tt \phi,\tt \chi,\tt \psi$ be formulas.  Suppose we have already accepted $\tt \phi\tt \lor\tt \psi$, and we’ve accepted $\tt \phi\tt \to \tt \chi$, and we’ve accepted $\tt \psi\tt \to\tt \chi$.  Then we can infer $\tt \chi$.

This is stated for two cases, when we have $\tt \phi\tt \lor\tt \psi$. However, we can generalize this to a rule for longer disjunction. 

> [!definition] ***Definition***
>
> **Proof by cases** is the following inference rule.  Let $\phi_1,\phi_2,\dots,\phi_n,\tt \psi$ be formulas.
>
> > From $\phi_1\tt \lor\cdots\tt \lor\phi_n$, and $\phi_1\tt \to\tt \psi$ and $\phi_2\tt \to\tt \psi$ and … and $\phi_n\tt \to\tt \psi$, you may infer $\tt \psi$.

In the example below I show you how we'll draw a proof by cases in tabular form.  Let's prove that from $\tt P\tt \to \tt Q$ and $\tt R\tt \to \tt S$ we have $(\tt P\tt \lor \tt R)\tt \to (\tt Q\tt \lor \tt S)$.

| **Index** | **Formula**              | **Reason**                                    |
| --------- | ------------------------ | --------------------------------------------- |
| 1.        | $\tt P\tt \to \tt Q$                 | Assumption                                    |
| 2.        | $\tt R\tt \to \tt S$                 | Assumption                                    |
| 3.        | $(\tt P\tt \lor \tt R)\tt \to (\tt Q\tt \lor \tt S)$ | Conditional Introduction from subproof below |

3. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.1. | $\tt P\tt \lor \tt R$ | Assumption for conditional introduction |
| 3.2. | $\tt P\tt \to (\tt Q\tt \lor \tt S)$ | Conditional Introduction from subproof below. | 

3.2. conditional subproof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.2.1. | $\tt P$ | Assumption for Conditional Introduction |
| 3.2.2. | $\tt Q$ | Conditional Elimination from 1 and 3.2.1 |
| 3.2.3. | $\tt Q\tt \lor \tt S$ | Disjunction Introduction from 3.2.2. |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.3. | $\tt R\tt \to (\tt Q\tt \lor \tt S)$ | Conditional Introduction from subproof below |

3.3. conditional subproof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.3.1. | $\tt R$ | Assumption for Conditional Introduction |
| 3.3.2. | $\tt S$ | Conditional Elimination from 2 and 3.3.1 |
| 3.3.3. | $\tt Q\tt \lor \tt S$ | Disjunction Introduction from 3.3.2. |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.4. | $\tt Q\tt \lor \tt S$ | Proof by Cases from 3.1, 3.2, and 3.3. |

> [!exercise] ***Exercise***
>
> Use a proof by cases to prove, from $\tt P\tt \to \tt Q$ and $\tt R\tt \to \tt S$, and $\tt T\tt \to (\tt Q\tt \land \tt U)$, the conclusion $(\tt P\tt \lor \tt R\tt \lor \tt T)\tt \to (\tt Q\tt \lor \tt S)$.

# Proof by Contradiction

Here is a kind of every-day example of proof by contradiction: 

A brilliant detective is investigating a crime, and questions the butler, “Did you kill Mr. Hitchens?”  

The butler says “No, I was in the garden when Mr. Hitchens was killed in the kitchen, but I heard him scream.”

The detective’s eyes widen, “Oh?  If you were in the garden, then you couldn’t hear Mr. Hitchens scream. The gardnen is walled, and the kitchen too far away.  But you said that you did hear Mr. Hitchens scream!  This is a contradiction!”

Let’s describe the general structure of a proof by contradiction.  Suppose that you want to infer $\tt \phi$.  Then to give a proof of $\tt \phi$ by contradiction, 

- Assume $\tt \neg\tt \phi$ (only for the sake of argument).
- Take some reasoning steps.
- Prove a contradiction.

This justifies $\tt \phi$.  

Why?  Well it shows that $\tt \neg \tt \phi$ leads to a contradiction.  Therefore $\tt \neg\tt \phi$ must be *false* and so $\tt \phi$ must be *true*.

Let’s now see an example in practice.  From $\tt P\tt \to \tt Q$ and $\tt \neg \tt Q$, we prove $\tt \neg \tt P$.

| **Index** | **Formula** | **Reason**                                  |
| --------- | ----------- | ------------------------------------------- |
| 1.        | $\tt P\tt \to \tt Q$    | Assumption                                  |
| 2.        | $\tt \neg \tt Q$    | Assumption                                  |
| 3.        | $\tt \neg \tt P$    | Proof by Contradiction from subproof below. |

3. contradiction sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.1. | $\tt \neg(\tt \neg \tt P)$ | Assumption for Proof by Contradiction |
| 3.2. | $\tt P$ | Double Negation from 3.1 |
| 3.3. | $\tt Q$ | Conditional Elimination from 1, 3.2 |
| 3.4. | $\tt Q\tt \land \tt \neg \tt Q$ | Conjunction Introduction from 2, 3.3. |

Look over this proof and see how it aligns with what we described earlier.  The sub-proof is structured by:

- We are trying to prove $\tt \neg \tt P$.
- Therefore we assume $\tt \neg(\tt \neg \tt P)$.
- We go through some reasoning steps after that (lines 3.2 to 3.4).
- The last line of the sub-proof is the contradiction $\tt Q\tt \land \tt \neg \tt Q$.

---

Once a sub-proof is closed off, the remaining proof is never allowed to refer to lines inside a finished sub-proof.  We already saw how this can lead to invalid inferences in Conditional Introduction.  Let’s see an example of how breaking this rule can lead to invalid inferences using Proof by Contradiction.

Here we give an invalid proof that from $\tt P$ we can infer $\tt Q$.  That is to say, we will give an incorrect "proof" that $(\tt P)\tt \vdash \tt Q$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\tt P$ | Assumption |
| 2. | $\tt \neg(\tt Q\tt \land \tt \neg \tt Q)$ | Proof by Contradiction from subproof below |

2. contradiction sub-proof

| **Index** | **Formula**                 | **Reason**                            |
| --------- | --------------------------- | ------------------------------------- |
| 2.1.      | $\tt \neg(\tt \neg(\tt Q\tt \land \tt \neg \tt Q))$ | Assumption for Proof by Contradiction |
| 2.2.      | $\tt Q\tt \land\tt \neg \tt Q$                | Double negation from 2.1              |
| 2.3.      | $\tt Q$                         | Conjunction Elimination from 2.2      |
| 2.4.      | $\tt Q\tt \land \tt \neg \tt Q$             | Reiteration from 2.2                  |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3. | $\tt Q$ | Reiteration from 2.2 |

We have said before that $\tt P\not\tt \vDash \tt Q$ and therefore our proof rules should not show $\tt P\tt \vdash \tt Q$. (To reiterate, the entire point of a proof, like $\tt P\tt \vdash \tt Q$, is to ensure that the argument is valid, i.e. $\tt P\tt \vDash \tt Q$.) So something about the proof above must be wrong.

Here is what is wrong: It was possible to infer $\tt Q$ on line (3) because it made an invalid reference to line (2.3).  This reference is invalid because line (2.3) is inside of a subproof, while line (3) is outside of that subproof. 

We saw that the same sort of invalid reference when using Conditional Introduction as well. So there is a general phenomenon here: lines inside of any kind of subproof should never be referenced from a line outside the subproof. 

---

Yet again, as with Conditional Introduction, Proof by Contradiction allows us to prove things from no premises at all.

Here we prove from no premises, that $\tt \neg(\tt P\tt \land \tt \neg \tt P)$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\tt \neg(\tt P\tt \land \tt \neg \tt P)$ | Proof by Contradiction from subproof below |

1. contradiction sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1.1. | $\tt \neg(\tt \neg(\tt P\tt \land\tt \neg \tt P))$ | Assumption for Proof by Contradiction |
| 1.2. | $\tt P\tt \land \tt \neg \tt P$ | Double Negation from 1.1 |

> [!definition] ***Definition***
>
> **Proof by Contradiction** is the following inference rule.
>
> > The following allows you to infer $\tt \phi$.
> > Assume $\tt \neg \tt \phi$.
> > Infer other formulas, from $\tt \neg \tt \phi$ and any other formulas already inferred.
> > Prove any contradiction.
> > Stop assuming $\tt \neg \tt \phi$ and any of the formulas which followed from it.

> [!exercise] ***Exercise***
>
> Use Proof by Contradiction to prove, from $\tt P\tt \leftrightarrow \tt Q$ and $\tt \neg \tt P$, that $\tt Q$.
>
> Also prove, from no premises, that $(\tt P\tt \land \tt \neg \tt P)\tt \to \tt Q$.
>
> Also prove, from $\tt P\tt \land \tt \neg \tt P$, that $\tt Q$.

# The Principle of Explosion

As you presumably showed in the previous exercise, $(\tt P\tt \land \tt \neg \tt P) \tt \vdash \tt Q$. You should feel invited to also confirm that $(\tt P\tt \land \tt \neg \tt P) \tt \vDash \tt Q$, which only further confirms that our proof rules can prove valid arguments. 

This particular argument is interesting, though. It shows that, from $\tt P\tt \land \tt \neg \tt P$ it is possible to infer *any* propositions. We describe this as an "explosion", because the set of propositions that one can prove "explodes" to include every formula.

To be clear: this is a *bad* thing. You want to accept the premises which allow you to prove the true propositions and not the false ones. When you can prove all the true, and all the false propositions, you lose the ability to distinguish between the two. 

The following is a generalization of this fact.

> [!definition] ***Definition***
> Let $\tt \phi$ be any contradiction, and $\tt \psi$ any formula. Let $\tt \Gamma$ be any sequence of formulas such that $\tt \phi \in\tt \Gamma$.
> 
>  The fact that $(\tt \Gamma, \tt \psi)$ is a valid argument, is called **the principle of explosion**.

> [!exercise] ***Exercise***
> Prove that the principle of explosion is true. That is to say, prove
> $$\tt \Gamma \tt \vDash \tt \psi$$
> if $\tt \Gamma$ contains a contradiction. 
> 
> Also prove that
> $$\tt \Gamma \tt \vdash \tt \psi$$
> by exhibiting a proof. You you may find it more convenient to not represent this proof as a table, and instead merely represent it as a sequence of formulas meeting the conditions of a proof. 


