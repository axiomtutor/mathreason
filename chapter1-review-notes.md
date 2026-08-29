# Suggested edits to Chapter 1

These are proposed editorial and mathematical edits for Chapter 1; they are intentionally kept separate from the chapter text so they can be reviewed before being applied.

## 1. Tighten the opening motivation

The opening is effective, but it repeats the idea that number theory is being used as a case study several times. Consider shortening the first six paragraphs to make the pedagogical purpose explicit more quickly:

> We begin with elementary number theory rather than logic or set theory. The purpose is deliberate: students often understand abstract methods more readily after seeing them used on a concrete mathematical problem. This chapter therefore serves as a case study. We will use sets and elementary logical reasoning informally now, then return to them later and make the underlying ideas precise.

## 2. Correct small grammatical errors

Examples in the current chapter include:

- “a rigorous methods of logic” → “rigorous methods of logic”
- “A set is mean to be” → “A set is meant to be”
- “you have to assess” → “we have to assess” where the surrounding exposition uses first-person plural
- “this now says that *x* is a variable, and it takes values in the natural numbers, and which are even” → “this says that *x* is a variable taking values in the natural numbers, and that *x* is even”
- “for it’s own sake” → “for its own sake”
- “this about proving it” → “think about proving it”

## 3. Make divisibility definitions uniform

The chapter initially defines divisibility only for natural numbers, but later uses $a|n$ with arbitrary integers. It would be clearer to introduce the standard integer definition once:

> For integers $a$ and $b$, we say that $a$ divides $b$, written $a\mid b$, if there exists an integer $k$ such that $b=ak$.

Then specialize to positive divisors when discussing factors of natural numbers. This avoids switching between natural and integer witnesses later in the chapter.

## 4. Fix the quotient/remainder terminology

The remainder is not usually called “the modulus of $x/d$.” It would be clearer to reserve “modulo” or “modulus” for congruences and say simply:

> We call $q$ the quotient and $r$ the remainder in the division of $x$ by $d$.

Also make the assumption $d>0$ explicit everywhere the theorem is invoked.

## 5. Simplify the proof of the division algorithm

The proof is pedagogically useful, but the set

$$S=\{x-qd:q\in\mathbb Z,\ x-qd\ge0\}
$$

can be introduced more directly as a nonempty subset of $\mathbb Z_{\ge0}$. The argument that $S$ is nonempty should then explicitly choose an integer $q$ with $q\le x/d$, rather than saying “take *q* sufficiently small.”

In the $r<d$ step, the inequality

$$x-qd>x-(q+1)d$$

follows immediately from $d>0$, so the intermediate chain involving $q<q+1$ can be shortened.

## 6. Clarify the GCD definition

The current definition writes

$$d=\max\{e\in\mathbb N:e\text{ is a common divisor of }a\text{ and }b\}.$$

Since the common divisors are defined as integers, it would help to say explicitly that the GCD is chosen to be the greatest **positive** common divisor. This also makes the later use of the maximum principle more transparent.

## 7. Correct the integer-combination terminology

The sentence

> “For any $x,y\in\mathbb Z$ we say that $ax+by$ is an integer combination of $x$ and $y$, for every $a,b\in\mathbb Z$.”

would read more naturally as:

> An integer of the form $ax+by$, where $a,b\in\mathbb Z$, is called an **integer linear combination** of $x$ and $y$.

The adjective “linear” is standard and helps distinguish this construction from arbitrary expressions involving $x$ and $y$.

## 8. Make the GCD proof logically explicit

In the proof that the minimum positive integer combination $d$ is the GCD, the line

> “Recall that *d* is the minimum positive linear combination of *x* and *y*”

should say **integer combination**, not “linear combination,” if the earlier definition is retained. More importantly, after proving $d\mid x$ and $d\mid y$, explicitly state that $d$ is a common divisor before proving maximality.

## 9. Avoid duplicating the prime-number definition

Prime numbers are defined once in the Divisibility section and then defined again under Prime Numbers. Consider removing the first definition or changing the later section into a reminder followed immediately by the prime-divisor theorem.

## 10. Strengthen the final prime theorem setup

The proof of Euclid's lemma relies on the fact that $(p,a)=1$ when $p$ is prime and $p\nmid a$. It would help to state explicitly why the only positive divisors common to $p$ and $a$ are then 1: any common divisor of $p$ and $a$ divides $p$, so it is either 1 or $p$; the latter is excluded by $p\nmid a$.

## 11. One mathematical wording issue

The exercise asking whether $123$ and $127$ are prime is useful, but the preceding definition should make clear that $1$ is neither prime nor composite. This prevents a common beginner ambiguity.

## 12. Pedagogical suggestion

The chapter is doing two jobs: introducing elementary set language and motivating proof techniques through number theory. A useful structural change would be to make that division explicit with occasional one-sentence signposts such as:

> **What this example is teaching us:** the mathematical content is elementary here; the important skill is learning how definitions constrain what can be proved.

That would reinforce the stated purpose of the chapter without requiring more technical material.
