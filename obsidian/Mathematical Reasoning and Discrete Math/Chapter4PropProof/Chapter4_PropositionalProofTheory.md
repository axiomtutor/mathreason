---
title: "Chapter 4: Propositional Proof Theory"
---


# Simple Inference Rules

An important use of logic is to help us write good proofs.  Here we’ll establish the basic formal system that we will use to expose the logic of a proof.  

The fundamental component of a proof, is an “inference”.  Here is an example:  

If we have already accepted the truth of propositions denoted by *P* and *Q*, then we must accept the truth of the formula $P\land Q$.  In this case, we say that we *infer* $P\land Q$ from the formulas *P* and *Q*.  

The same principle should be true even for complex formulas, not just basic variables.  For example, if we have already accepted the formulas $P\to Q$ and $Q\to S$ then we must accept the formula $(P\to Q)\land (Q\to S)$. 

Then our inference rule is expressed by: “From formulas $\phi$ and $\psi$ we may infer $\phi\land\psi$.”

Here is another example.  Suppose that we already accept $\phi\land\psi$.  Then we must also accept just $\phi$.  

Therefore we should have the inference rule “From $\phi\land\psi$ we may infer $\phi$.”  

In a similar fashion one can understand all of the following inference rules.

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


Each of the above inference rules are justified by the fact that, when its assumptions are true, then its conclusion is guaranteed to also be true.  

Here is a demonstration for Conjunction Elimination:



Here we have the truth-table for *P*, and then also $P\\land Q$.  The first two columns show all possible combinations of truth-values for *P* and *Q*.  The next column shows the truth-value of the premise, *P*.  The final three columns show the truth-value of the conclusion, $P\\land Q$, with the truth-values placed under the main connective, $\\land$.

There is just one row where $P\\land Q$ is true, on row number 1.  In this row, we also have that *P* is true.  

So this shows that “Whenever $P\\land Q$ is true, we have *P* is true.”  This means that the inference rule is valid, because it will never take us from a true proposition to a false one.

Let’s check the Disjunction Elimination rule.  Here is the truth-table for $P\lor Q$ and $\neg P$ and *Q*.

$$
\begin{array}{|c|c||c|c|c||c|}\hline
P & Q &
P & \land & Q &
P \\\hline
\color{red}{ट} & \color{red}{ट} &
\color{red}{ट} & & \color{red}{ट} &
\color{red}{ट}
\\\hline
ट & फ &
ट & & फ &
ट
\\\hline
फ & ट &
फ & & ट &
फ
\\\hline
फ & फ &
फ & & फ &
फ
\\\hline
\end{array}
$$

Let’s look only at the rows in which the assumptions of the inference rule are true.  These would be the rows where both $P\lor Q$ and $\neg P$ are true.  This happens only at one row, which is row number 3.

In this row, the value of *Q* is true.  So yet again, the inference rule is valid.

---

It can be helpful to see an example of an inference rule that is *not* valid.  This would require a rule in which the premises can be true but the inferred proposition false.

An example would be "From $P$ we can infer $P\land Q$".  Let's see a truth-table which demonstrates why this is invalid.

$$
\begin{array}{|c|c||c||c|c|c|}\hline
P & Q &
P &
P & \land & Q \\\hline
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

Here we have the truth-table for the premise $P\land Q$ and the conclusion *P*.  The first two columns show all possible combinations of truth-values for *P* and *Q*.  The next three columns show the truth-value of the premise, $P\land Q$, with the truth-values placed under its main connective, $\land$.  The final column shows the truth-value of the conclusion, *P*.
