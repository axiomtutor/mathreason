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
> Any sequence of propositions, $\Gamma = (\phi_1,\phi_2,...,\phi_m)$, may be called **premises**, where each of the propositions $\phi_i$ is called a **premise** ($1\le i\le m$).  
> 
> Any proposition, $\psi$, may be called a **conclusion**.  
> 
> In that case, the pair $(\Gamma,\psi)$ is called an **argument**.  
> 
> We say that the argument is **valid** if 
> 
> $$ 
> (\phi_1 \land \phi_2 \land \cdots \land \phi_m) \to \psi 
> $$ 
> 
> is a tautology.  Otherwise the argument is called **invalid**.
> 
> If the argument $(\Gamma,\psi)$ is valid, then we write 
> 
> $$\Gamma \vDash \psi$$
> 
> which is pronounced $\Gamma$ **semantically entails** $\psi$.
> 
> If $(\Gamma,\psi)$ is not valid then we write 
> 
> $$\Gamma\not\vDash \psi$$
> 
> and we say that $\Gamma$ does not semantically entail $\psi$.

> [!exercise] ***Exercise***
> 
> Consider the argument at the beginning of this section, 
> 
> > If you committed the murder then you must have been in the room with Mr. Higginswaddle when it happened.  If you were in the room when it happened, then you could not be in Guadalajara that day.  You were in Guadalajara that day.  Therefore you could not have committed the murder.
> 
> Let us symbolize the premises as 
> * $P\to Q$
> * $Q\to \neg R$
> * $R$
> 
> The conclusion of the argument is then $\neg P$.
> 
> Show that $((P\to Q)\land (Q\to \neg R) \land R)\to \neg P$ is a tautology.  
> 
> Infer that the given argument is valid.  

> [!exercise] ***Exercise***
> Intuitvely, if you assume $P$ then it is valid to infer $P\lor Q$.  I mean, if *P* is true then $P\lor Q$ will have to be true, no matter what *Q* is.  (Put formally, I am claiming that if $P^म = ट$ then $(P\lor Q)^म = ट$.  This is true whether $Q^म=ट$ or $Q^म=फ$.)
> 
> Also intuitively, if you assume *P* then it is invalid to infer $P\land Q$.  Since we don't assume the truth of *Q* then it is possible for *Q* to be false, and in that case $P\land Q$ will be false.  (Put formally, there is a model in which $P^म=ट$ and $(P\land Q)^म=फ$.)
> 
> Make a truth-table which demonstrates 
> 
> $$ (P) \vDash P\lor Q $$
> 
> and another which demonstrates 
> 
> $$ (P) \not\vDash P\land Q $$

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

* We accept $P\to Q$ and $Q\to \neg R$, and *R*.
* Because $Q\to \neg R$ and *R*, we therefore infer $\neg Q$.
* Because $\neg Q$ and $P\to Q$, we therefore infer $\neg P$.

The last two bullet points represent the use of an inference rule.  The collection of all three bullet points is the entire proof.  The first bullet point represents the premises of the proof, while the last line ends at the conclusion of the proof.

This proof demonstrates the validity claim,

$$ (P\to Q, Q\to \neg R, R)\vDash \neg P$$

Below we list several inference rules.  

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


Each of the above inference rules are justified by the fact that, when its assumptions are true, then its conclusion is guaranteed to also be true.  This can always be confirmed by a truth-table.  

Here is a demonstration for Conjunction Elimination:


$$
\begin{array}{|c|c||c|c|c||c|}
\hline
P & Q & P & \land & Q & P \\ \hline
\color{red} ट & \color{red}ट & & \color{red}ट & & \color{red}ट \\
ट & फ & & फ & & ट \\
\color{red}फ & \color{red}ट & & \color{red}फ & & \color{red}फ \\
फ & फ & & फ & & फ \\ \hline
\end{array}
$$



Here we have the truth-table for the premise $P\land Q$ and the conclusion *P*.  The first two columns show all possible combinations of truth-values for *P* and *Q*.  The next three columns show the truth-value of the premise, $P\land Q$, with the truth-value placed under its main connective, $\land$.  The final column shows the truth-value of the conclusion, *P*.

There is just one row where $P\land Q$ is true, on row number 1.  In this row, we also have that *P* is true.  

So this shows that “Whenever $P\land Q$ is true, we have *P* is true.”  This means that the inference rule is valid, because it will never take us from a true proposition to a false one.

Let’s check the Disjunction Elimination rule.  Here is the truth-table for $P\lor Q$ and $\neg P$ and *Q*.

$$
\begin{array}{|c|c||c|c|c||c|c||c|}\hline
 P & Q &
 P & \lor & Q &
 \neg & P &
 Q \\\hline
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

Here we have the truth-table for *P* and then $P\land Q$.  

For the inference "If *P* then $P\land Q$" to be valid, we should look at each model (row of the truth-table).  If there is a model where *P* is true, we check that in that model also $P\land Q$ is true.  

However, this time, that's not true!  There is an offending row!  

It is row 2, the model in which $P^म=ट$ and $Q^म=फ$.  In this model, *P* is true while $P\land Q$ is false.  

For this reason, the inference "If *P* then $P\land Q$" is invalid.

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
> We could (but will not) have an inference rule “From $\neg(\neg \phi)$ we may infer $\phi$.”
>
> Prove that this inference rule is valid.



# Proofs

In the section above we mostly focused on inference rules, but of course, inference rules exist so that we may combine them into a proof.  Again, a proof is just a sequence of inferences.  

For example, suppose that we accept the formulas 

- $\neg P$
- $P\lor Q$
- $Q\to R$.

Let’s write a "paragraph-style" proof, from these assumptions, to the conclusion *R*.

Because we accept $\neg P$ and $P\lor Q$, therefore we may use the Disjunction Elimination rule to infer *Q*.  Therefore we now accept *Q*.

Because we now accept *Q* and $Q\to R$, then we may use the Conditional Elimination rule to infer *R*.  

Because we now accept *R*, which is the intended conclusion of the proof, then this proof is complete.

---

Notice the way that the proof above works: 
1. We start by assuming the truth of some formulas.  
2. Using these assumptions, we apply the inference rules to infer new formulas.  When a new formula is inferred, it may then be used in further steps.
3. We continue this process until we eventually infer the conclusion of the proof.  

> [!exercise] ***Exercise***
>
> Assume the formulas $(P\land Q)\to (R\land S)$, and *P,* and *Q.*
>
> Prove the formula $R\lor T$.

# Substitution

In this section, we are going to discuss substitution, because it will help us to define more inference rules.

Let's start with an example.

Suppose that we already accept $(P\lor Q)\land R$.  Notice that the formula $P\lor Q$ is a subformula.

Moreover notice that $Q\lor P$ is equivalent to $P\lor Q$.  

Therefore if we substitute $P\lor Q$ with $Q\lor P$, it shouldn’t change the value of the formula.  That is to say, $(P\lor Q)\land R$ should be equivalent to $(Q\lor P)\land R$.

> [!exercise] ***Exercise***
>
> Draw a truth-table to prove that $(P\lor Q)\land R$ is equivalent to $(Q\lor P)\land R$.

More generally suppose that 
* $\phi$ is a formula, 
* $\chi$ is a subformula of $\phi$, 
* and $\psi$ is equivalent to $\chi$.  

Then it should be true that, if you substitute $\psi$ for $\chi$ then the result should be equivalent to $\phi$.  

> Substitution of a subformula with an equivalent subformula results in an equivalent formula.

In order to define an inference rule for substitution, we first have to define substitution.

> [!definition] ***Definition***
>
> Suppose that $\phi,\chi,\psi$ are all propositional formulas.  We define $[\phi]_{\chi := \psi}$ to mean “everywhere that $\chi$ is a subformula of $\phi$, replace it with $\psi$.”

We will mostly be interested in substituting equivalent subformulas, but in principle it is possible to substitute non-equivalent subformulas.  

For example, let’s calculate $[(P\land ((\neg Q)\lor R))]_{\neg Q := P\land S}$.

First we take the formula $P\land ((\neg Q)\lor R)$ and identify where it has the subformula $\neg Q$.  We see that it has the subformula here:

$$
P\land (\colorbox{yellow}{$(\neg Q)$}\lor R)
$$

We then replace this subformula with the subformula $P\land S$, to obtain the result, 

$$
P\land ((P\land S)\lor R)
$$

There ya go, that's how do you do substitution in general!

> [!exercise] ***Exercise***
>
> Show that $[P\land (Q\to P)]_{P:= \neg P}$ is equal to $(\neg P)\land (Q\to\neg P)$.
>
> Show that $[P\land Q]_{R:= S}$ is equal to $P\land Q$.

> [!exercise]
> Suppose that $\phi$ is a propositional formula such that $\chi$ does not occur as a subformula of $\phi$.  Let $\psi$ be any formula.
>
> Explain why $\phi_{\chi:= \psi}=\phi$.

Now that we understand substitution, we can state the following inference rules.

> [!definition] ***Definition***
>
> Let $\phi,\chi,\psi,\omega$ be propositional formulas.  
>
> **Double negation** is the inference rule that, from $\phi$, one can infer either $[\phi]_{\chi:= \neg(\neg\chi)}$ or $[\phi]_{\neg(\neg\chi):= \chi}$. 
> > [!note]- What double negation says.
> > What does "$[\phi]_{\chi := \neg(\neg \chi)}$" mean?  
> > 
> > It means "In any formula ($\phi$), you can always replace any part ($\chi$) with its double-negation ($\neg(\neg \chi)$)."
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

Let's see how we can use these rules to show that from *P* we can infer $\neg(\neg P)$.  To do so we'll use the double negation rule.  

In this example, $\phi=P$ and $\chi = P$.

We are using the version of double negation, in which we infer $\phi_{\chi:=\neg(\neg\chi)}$.  In this case, that means we are inferring $P_{P:=\neg(\neg P)}$.  

Let's calculate that

$$
P_{P:=\neg(\neg P)} = \neg(\neg P)
$$

The double negation rule therefore says that from *P* we may infer $\neg(\neg P)$.  

---

Here is another worked example, again using double negation but this time in the other direction.  

From $P\lor \neg(\neg Q)$ we can infer $P\lor Q$.  

In this example, we use $\phi=P\lor \neg(\neg Q)$ and $\chi = Q$.  We use the version of double negation which lets us infer $\phi_{\neg(\neg \chi):=\chi}$.

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

# Fitch-style Proofs

We will now develop a formal system of writing proofs.  

Let's begin from an example.  From the assumption $P\land (Q\land R)$ we will prove *R*.

Here is a presentation of the proof in a "Fitch-style" sequence of lines.  Each line carries an index (numbering), the formula, and the inference rule which allows us to infer it together with the previously accepted formula indices which are used in the inference rule.

I've colored assumptions in red and the conclusion in green.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\land (Q\land R)$ | Assumption |
| 2. | $Q\land R$ | Conjunction Elimination from 1 |
| 3. | *R* | Conjunction Elimination from 2. |

---


Let’s see another example.  From the assumptions $\neg Q$ and $P\to Q$, we prove $\neg P$.  

| **Index** | **Formula**      | **Reason**                        |
| --------- | ---------------- | --------------------------------- |
| 1.        | $\neg Q$         | Assumption                        |
| 2.        | $P\to Q$         | Assumption                        |
| 3.        | $(\neg P)\lor Q$ | Material Implication from 2       |
| 4.        | $\neg P$         | Disjunction Elimination from 1, 3. |

---

The table is a nice way to display the proof, but it is just a visual aid.  

The proof *itself* is just the sequence of propositions.  Consider the first table proof that I presented above.  It is a sequence of assumptions, $P\land (Q\land R)$, and then a sequence of inferences, $Q\land R, R$.  

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
> Let $\Gamma = (\phi_1, \phi_2,...,\phi_m)$ be a finite sequence of formulas, which we will call the **(sequence of) assumptions**.  
> 
> Let $\Psi = (\psi_1,\psi_2,...,\psi_n)$ be a finite sequence of formulas.  We say that $\Psi$ is a **proof of $\psi_n$ from $\Gamma$** if the following conditions hold.  
> 
> For every $1\le i\le n$, 
> * Either $\psi_i \in\Gamma$, or 
> * there is an inference rule such that the formulas $\phi_1,\phi_2,...,\phi_m, \psi_1,\psi_2,...,\psi_{i-1}$ allow one to infer $\psi_i$.
> 
> We call $\psi_n$ the **conclusion** of the proof. 
> 
> Let $\Gamma$ be a sequence or formulas, and $\psi$ a formula. If there exists a proof of $\psi$ from $\Gamma$, then we write
> $$\Gamma \vdash \psi$$
> which is pronounced, $\Gamma$ **syntactically entails** (or **proves**) $\psi$.
> 


 > [!note]- The definition put simply.  
 > 
 > The simple version of what this definition says, is that a proof is a sequence (the sequence is made up of both $\Gamma$ and $\Psi$) of formulas, each with a justification.  A formula may be justified by being an assumption.  (If there are any assumptions, we traditionally place these at the beginning of the proof, but it's not technically required.) 
 > 
 > If a formula is not an assumption, then it must be justified by an inference rule.  An inference rule must refer only to propositions which have already been accepted earlier in the proof.  
 > 
 > And a proof must always end on with the concluding formula.  

Notice the difference between semantic and syntactic entailment. Let $\Gamma$ be a finite sequence of formulas, and $\psi$ a formula. 

The expression

$$\Gamma \vDash \psi$$
is a semantic notion. It is stated in terms of truth values. 

The expression

$$\Gamma \vdash \psi$$

is a syntactic notion. It is stated entirely in terms of the existence of certain formulas.

The point of a proof, is to demonstrate that an argument is valid. That is to say, we hope that $\Gamma\vdash\psi$ will ensure that $\Gamma\vDash\psi$. We will have more to say about this later. 

---

Based on the formal definition of a proof above, the following is a proof: 

$$ \Gamma = (P, Q), \Psi = (P\land Q, (P\land Q)\land P) $$

Notice that $\Gamma$ is allowed to be any finite sequence of propositions.  

The propositions of $\Psi$, however, must be inferrable. That is to say, for each proposition in $\Psi$, there must be an inference rule which can infer that proposition from $\Gamma$ or the earlier propositions. 

For example, $\psi_1 = P\land Q$ is justified by Conjunction Introduction with reference to $\phi_1 = P \in \Gamma$ and $\phi_2=Q\in\Gamma$. 

Next $\psi_2 = (P\land Q)\land P$ is justified by Conjunction Introduction with reference to $\phi_1=P\in\Gamma$ and $\psi_1 = P\land Q$.  

The conclusion of a proof is always the last proposition, so the conclusion is $(P\land Q)\land P$.  

> [!exercise] ***Exercise***
> 
> Decide whether the following pairs of sequences of propositions is a proof or not.  If it is a proof, identify the conclusion of the proof.
> 
> 1. $\Gamma = (P,Q)$ and $\Psi = (R, S)$.
> 2. $\Gamma = (P,Q)$ and $\Psi = (P)$.
> 3. $\Gamma = (P,Q)$ and $\Psi = (Q,P,P\land Q,P)$.

We now know the formal definition of a proof. From now on, we mostly ignore the formalism—we will only use tabular proofs.

For emphasis, I will color the assumptions with red and the conclusion with green.

---


Below is a long and challenging proof.  Don’t worry if it seems like something you couldn’t do yourself—working out these proofs is a skill that grows with exercise and time.

From the assumptions $P\to Q$ and $R\to Q$ and $P\lor R$, we will prove *Q*. That is to say, the proof below demonstrates

$$ (P\to Q, R\to Q, P\lor R) \vdash Q $$

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
| 12. | *Q* | Disjunction Elimination from 10, 11. |

> [!exercise] ***Exercise***
>
> From the assumptions *P* and $P\to Q$ and $Q\to R$, prove *R*. That is to say, show that
> $$(P, P\to Q, Q\to R)\vdash R$$
>
> From the assumption $(P\land Q)\lor (P\land R)$ prove *P*. That is to say, show
> $$((P\land Q)\lor (P\land R)) \vdash P$$
>
> From the assumptions $(\neg P)\lor Q$ and *P*, prove *Q*. That is to say, 
> $$((\neg P)\lor Q, P) \vdash Q$$
>
> (The first proof requires six lines, and the others require significantly fewer.)


# Conditional Introduction

Consider the argument that, from $P\to Q$ and $Q\to R$ it should follow that $P\to R$.

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

That is exactly the structure of a Conditional Introduction proof.  If you want to prove the conditional $\phi\to\psi$ then 

- Assume $\phi$.
- Go through a few reasoning steps.
- Show $\psi$.

Let's demonstrate with an example.  We will now prove, from $P\to Q$ and $Q\to R$ the conclusion that $P\to R$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\to Q$ | Assumption |
| 2. | $Q\to R$ | Assumption |
| 3. | $P\to R$ | Conditional Introduction from sub-proof below. |

 3. conditional sub-proof
 
| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.1. | *P* | Assumption for Conditional Introduction |
| 3.2. | *Q* | Conditional Elimination from 1, 3.1 |
| 3.3. | R | Conditional Elimination from 2, 3.2. |

To explain how this works, notice line 3, which holds the proposition $P\to R$.  This line is justified by the subproof below it.   

The sub-proof mirrors what we said generally:

- It assumes the antecedent, *P* (line 3.1).
- It goes through some reasoning steps (lines 3.2 and 3.3).
- It shows the consequent, *R* (line 3.3).

As a comment about how we *write* sub-proofs in tabular form: 

- They are written with extra indentation.
- They use a sub-indexing system.  Since the conditional $P\to R$ was on line 3, then the indices of the sub-proof are 3.1, 3.2, and so on.

---

Here is another example.  From $P\to R$, and $P\to S$, and $(P\to (R\land S))\to Q$ we can prove that *Q*.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\to R$ | Assumption |
| 2. | $P\to S$ | Assumption |
| 3. | $(P\to (R\land S))\to Q$ | Assumption |
| 4. | $P\to (R\land S)$ | Conditional Introduction from subproof below |

4. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 4.1. | *P* | Assumption for Conditional Introduction |
| 4.2. | *R* | Conditional Elimination from 1, 4.1 |
| 4.3. | *S* | Conditional Elimination from 2, 4.1 |
| 4.4. | $R\land S$ | Conjunction Introduction from 4.2, 4.3. |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 5. | *Q* | Conditional Elimination from 3, 4. |

---

Let’s now see how a sub-proof can go wrong.

Consider the following invalid proof that, from *P*, we can infer *Q*.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | *P* | Assumption |
| 2. | $Q\to P$ | Conditional Introduction from subproof below |

2. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 2.1. | *Q* | Assumption for Conditional Introduction |
| 2.2. | *P* | Reiteration from 1. |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3. | *Q* | Reiteration from 2.1. |

This proof must be invalid—*P* does not imply *Q*.  It is intuitively true that, from a given proposition (*P*) one should not be able to infer some other random and unrelated proposition (*Q*).  

We can also demonstrate that the argument is invalid using a truth-table.  I will leave that to you to work out in detail, but I promise: In the truth-table, there is a row at which *P* is true while *Q* is false.  

Therefore something must have gone wrong.  But specifically, where?  It seems like we have only used inference rules at each step, which we previously accepted as valid.  

The error is on line (3).  

Why is this a mistake?  It seems like it is merely reiteration of a previous line, which is an inference rule that we've accepted and used before.  

The answer comes from thinking carefully about the logic of Conditional Introduction. When we prove a proposition by Conditional Introduction, we assume its antecedent, and the work from this assumption.  Anything that we prove, under this assumption, must always come with the caveat "this is true only provided that the antecedent is true".

In line 3, we exported a statement from a subproof, to a line which is outside of the subproof.  This removes the context.  It removes the assumption of the antecedent.  

Therefore when we formally define the Conditional Introduction inference rule, below, we should specify once a Conditional Introduction subproof is concluded, we may no longer use the propositions which occur inside of the Conditional Introduction.

> [!definition] ***Definition***
>
> Let $\phi,\psi$ be propositional formulas.
>
> **Conditional Introduction** is the following inference rule.
>
> > The following allows you to infer $\phi\to\psi$.
> > 
> > First, assume $\phi$.
> > 
> > Using $\phi$ and any other formulas already accepted, then prove $\psi$.
> > 
> > Once this is done, you must stop assuming $\phi$ and any of the formulas proved after assuming $\phi$.

We can also have sub-proofs within sub-proofs.  To demonstrate, here is a proof from $(P\land Q)\to R$ that $P\to (Q\to R)$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $(P\land Q)\to R$ | Assumption |
| 2. | $P\to(Q\to R)$ | Conditional Introduction from subproof below. |

2. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 2.1. | *P* | Assumption |
| 2.2.  | $Q\to R$ | Conditional Introduction from subproof below. |

2.2. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 2.2.1. | *Q* | Assumption |
| 2.2.2. | $P\land Q$ | Conjunction Introduction from 2.1, 2.2.1 |
| 2.2.3. | *R* | Conditional Elimination from 1, 2.2.2. |

---

In fact, we can now have proofs which use *no premises at all*!

In the example below, I give a proof, from no premises, to the conclusion that $P\to P$.  It makes sense that we should be able to prove tautologies like this: they are always true, regardless of your assumptions.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\to P$ | Conditional Introduction from subproof below. |

1. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1.1. | *P* | Assumption for Conditional Introduction |
| 1.2. | *P* | Reiteration from 1.1. |

> [!note]- Why proofs?
> Any proof which is 

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
> > 
> > Assume $\phi$.
> > 
> > Using $\phi$ and any formulas already proved, then prove $\psi$.  Then stop assuming $\phi$ and any of the formulas proved after it.
> > 
> > Now assume $\psi$.
> > 
> > Using $\psi$ and any formulas already proved, then prove $\phi$.
> > Then stop assuming $\psi$ and any of the formulas proved after it.

Here is a demonstration.  We prove, from no premises, that $P\leftrightarrow (P\land P)$.

Notice that we must effectively do two separate conditional introduction proofs, one going in each of the directions.  

The sub-indexing is designed to reflect each direction.  We use the notation 1.only.1 to indicate the sub-proof in the “only if” direction.  In this case, that means the $P\to (P\land P)$ direction.  

We use the notation 1.if.1 to indicate the “if” direction.  In this case, that means $(P\land P)\to P$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $P\leftrightarrow (P\land P)$ | Biconditional Introduction from subproof below. |

1. "Only" sub-proof

| **Index** | **Formula** | **Reason**                                        |
| --------- | ----------- | ------------------------------------------------- |
| 1.only.1  | *P*         | Assumption for Biconditional Introduction         |
| 1.only.2  | $P\land P$  | Conjunction Introduction from 1.only.1, 1.only.1. |


1. "If" sub-proof

| **Index** | **Formula** | **Reason**                                |
| --------- | ----------- | ----------------------------------------- |
| 1.if.1    | $P\land P$  | Assumption for Biconditional Introduction |
| 1.if.2    | *P*         | Conjunction Elimination from 1.if.1.      |

> [!exercise] ***Exercise***
>
> Prove $((P\to Q)\to R) \leftrightarrow ((P\land \neg Q)\lor R)$.

# Proof by Cases

Recall the proof that every number is even or odd, but not both.  This was a “proof by cases”.  

By a very brief summary, let the number be *n.*  Then if $n \mod 2 = 0$, we proved that *n* is even or odd, but not both.  However, if $n\mod 2 = 1$, we proved that *n* is even or odd, but not both.  

This generally is called a “proof by cases”.  The two “cases” are $n\mod 2=0$ or $n\mod 2 = 1$.

In propositional logic it is structured like so:  Let $\phi,\chi,\psi$ be formulas.  Suppose we have already accepted $\phi\lor\psi$, and we’ve accepted $\phi\to \chi$, and we’ve accepted $\psi\to\chi$.  Then we can infer $\chi$.

This is stated for two cases, when we have $\phi\lor\psi$. However, we can generalize this to a rule for longer disjunction. 

> [!definition] ***Definition***
>
> **Proof by cases** is the following inference rule.  Let $\phi_1,\phi_2,\dots,\phi_n,\psi$ be formulas.
>
> > From $\phi_1\lor\cdots\lor\phi_n$, and $\phi_1\to\psi$ and $\phi_2\to\psi$ and … and $\phi_n\to\psi$, you may infer $\psi$.

In the example below I show you how we'll draw a proof by cases in tabular form.  Let's prove that from $P\to Q$ and $R\to S$ we have $(P\lor R)\to (Q\lor S)$.

| **Index** | **Formula**              | **Reason**                                    |
| --------- | ------------------------ | --------------------------------------------- |
| 1.        | $P\to Q$                 | Assumption                                    |
| 2.        | $R\to S$                 | Assumption                                    |
| 3.        | $(P\lor R)\to (Q\lor S)$ | Conditional Introduction from subproof below |

3. conditional sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.1. | $P\lor R$ | Assumption for conditional introduction |
| 3.2. | $P\to (Q\lor S)$ | Conditional Introduction from subproof below. | 

3.2. conditional subproof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.2.1. | *P* | Assumption for Conditional Introduction |
| 3.2.2. | *Q* | Conditional Elimination from 1 and 3.2.1 |
| 3.2.3. | $Q\lor S$ | Disjunction Introduction from 3.2.2. |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.3. | $R\to (Q\lor S)$ | Conditional Introduction from subproof below |

3.3. conditional subproof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.3.1. | *R* | Assumption for Conditional Introduction |
| 3.3.2. | *S* | Conditional Elimination from 2 and 3.3.1 |
| 3.3.3. | $Q\lor S$ | Disjunction Introduction from 3.3.2. |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.4. | $Q\lor S$ | Proof by Cases from 3.1, 3.2, and 3.3. |

> [!exercise] ***Exercise***
>
> Use a proof by cases to prove, from $P\to Q$ and $R\to S$, and $T\to (Q\land U)$, the conclusion $(P\lor R\lor T)\to (Q\lor S)$.

# Proof by Contradiction

Here is a kind of every-day example of proof by contradiction: 

A brilliant detective is investigating a crime, and questions the butler, “Did you kill Mr. Hitchens?”  

The butler says “No, I was in the garden when Mr. Hitchens was killed in the kitchen, but I heard him scream.”

The detective’s eyes widen, “Oh?  If you were in the garden, then you couldn’t hear Mr. Hitchens scream. The gardnen is walled, and the kitchen too far away.  But you said that you did hear Mr. Hitchens scream!  This is a contradiction!”

Let’s describe the general structure of a proof by contradiction.  Suppose that you want to infer $\phi$.  Then to give a proof of $\phi$ by contradiction, 

- Assume $\neg\phi$ (only for the sake of argument).
- Take some reasoning steps.
- Prove a contradiction.

This justifies $\phi$.  

Why?  Well it shows that $\neg \phi$ leads to a contradiction.  Therefore $\neg\phi$ must be *false* and so $\phi$ must be *true*.

Let’s now see an example in practice.  From $P\to Q$ and $\neg Q$, we prove $\neg P$.

| **Index** | **Formula** | **Reason**                                  |
| --------- | ----------- | ------------------------------------------- |
| 1.        | $P\to Q$    | Assumption                                  |
| 2.        | $\neg Q$    | Assumption                                  |
| 3.        | $\neg P$    | Proof by Contradiction from subproof below. |

3. contradiction sub-proof

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3.1. | $\neg(\neg P)$ | Assumption for Proof by Contradiction |
| 3.2. | *P* | Double Negation from 3.1 |
| 3.3. | *Q* | Conditional Elimination from 1, 3.2 |
| 3.4. | $Q\land \neg Q$ | Conjunction Introduction from 2, 3.3. |

Look over this proof and see how it aligns with what we described earlier.  The sub-proof is structured by:

- We are trying to prove $\neg P$.
- Therefore we assume $\neg(\neg P)$.
- We go through some reasoning steps after that (lines 3.2 to 3.4).
- The last line of the sub-proof is the contradiction $Q\land \neg Q$.

---

Once a sub-proof is closed off, the remaining proof is never allowed to refer to lines inside a finished sub-proof.  We already saw how this can lead to invalid inferences in Conditional Introduction.  Let’s see an example of how breaking this rule can lead to invalid inferences using Proof by Contradiction.

Here we give an invalid proof that from *P* we can infer *Q*.  That is to say, we will give an incorrect "proof" that $(P)\vdash Q$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | *P* | Assumption |
| 2. | $\neg(Q\land \neg Q)$ | Proof by Contradiction from subproof below |

2. contradiction sub-proof

| **Index** | **Formula**                 | **Reason**                            |
| --------- | --------------------------- | ------------------------------------- |
| 2.1.      | $\neg(\neg(Q\land \neg Q))$ | Assumption for Proof by Contradiction |
| 2.2.      | $Q\land\neg Q$                | Double negation from 2.1              |
| 2.3.      | *Q*                         | Conjunction Elimination from 2.2      |
| 2.4.      | $Q\land \neg Q$             | Reiteration from 2.2                  |

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 3. | *Q* | Reiteration from 2.2 |

We have said before that $P\not\vDash Q$ and therefore our proof rules should not show $P\vdash Q$. (To reiterate, the entire point of a proof, like $P\vdash Q$, is to ensure that the argument is valid, i.e. $P\vDash Q$.) So something about the proof above must be wrong.

Here is what is wrong: It was possible to infer *Q* on line (3) because it made an invalid reference to line (2.3).  This reference is invalid because line (2.3) is inside of a subproof, while line (3) is outside of that subproof. 

We saw that the same sort of invalid reference when using Conditional Introduction as well. So there is a general phenomenon here: lines inside of any kind of subproof should never be referenced from a line outside the subproof. 

---

Yet again, as with Conditional Introduction, Proof by Contradiction allows us to prove things from no premises at all.

Here we prove from no premises, that $\neg(P\land \neg P)$.

| **Index** | **Formula** | **Reason** |
| --- | --- | --- |
| 1. | $\neg(P\land \neg P)$ | Proof by Contradiction from subproof below |

1. contradiction sub-proof

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

# The Principle of Explosion

As you presumably showed in the previous exercise, $(P\land \neg P) \vdash Q$. You should feel invited to also confirm that $(P\land \neg P) \vDash Q$, which only further confirms that our proof rules can prove valid arguments. 

This particular argument is interesting, though. It shows that, from $P\land \neg P$ it is possible to infer *any* propositions. We describe this as an "explosion", because the set of propositions that one can prove "explodes" to include every formula.

To be clear: this is a *bad* thing. You want to accept the premises which allow you to prove the true propositions and not the false ones. When you can prove all the true, and all the false propositions, you lose the ability to distinguish between the two. 

The following is a generalization of this fact.

> [!definition] ***Definition***
> Let $\phi$ be any contradiction, and $\psi$ any formula. Let $\Gamma$ be any sequence of formulas such that $\phi \in\Gamma$.
> 
>  The fact that $(\Gamma, \psi)$ is a valid argument, is called **the principle of explosion**.

> [!exercise] ***Exercise***
> Prove that the principle of explosion is true. That is to say, prove
> $$\Gamma \vDash \psi$$
> if $\Gamma$ contains a contradiction. 
> 
> Also prove that
> $$\Gamma \vdash \psi$$
> by exhibiting a proof. You you may find it more convenient to not represent this proof as a table, and instead merely represent it as a sequence of formulas meeting the conditions of a proof. 


