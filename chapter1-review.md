# Recommended edits to Chapter 1

These are proposed editorial and mathematical changes to the Chapter 1 text on the `chapter1` branch.

## 1. Tighten the opening
The first several paragraphs repeat the point that number theory is being used as a case study. Consider reducing them to make the pedagogical purpose explicit sooner:

> We begin with elementary number theory rather than logic or set theory. The purpose is deliberate: students often understand abstract methods more readily after seeing them used on a concrete mathematical problem. This chapter therefore serves as a case study. We will use sets and elementary logical reasoning informally now, then return to them later and make the underlying ideas precise.

## 2. Correct obvious grammatical errors
- “a rigorous methods of logic” → “rigorous methods of logic”
- “A set is mean to be” → “A set is meant to be”
- “you have to assess” → “we have to assess” where the surrounding exposition uses first-person plural
- “this now says that *x* is a variable, and it takes values in the natural numbers, and which are even” → “this says that *x* is a variable taking values in the natural numbers, and that *x* is even”
- “for it’s own sake” → “for its own sake”
- “this about proving it” → “think about proving it”
- “we will always have some positive value” → consider “we will always have at least one nonnegative value” for consistency with the later definition of `S`.

## 3. Make divisibility uniform
The chapter initially defines divisibility using natural-number witnesses but later uses divisibility for arbitrary integers. Introduce the standard definition once:

> For integers $a$ and $b$, we say that $a$ divides $b$, written $a\mid b$, if there exists an integer $k$ such that $b=ak$.

Then distinguish positive divisors/factors when discussing natural numbers.

## 4. Fix quotient/remainder terminology
The remainder is not normally called “the modulus of $x/d$.” Replace that wording with “quotient” and “remainder,” and reserve “modulo” for congruence/modular arithmetic.

## 5. Strengthen the division-algorithm proof
In the proof using

$$S=\{x-qd:q\in\mathbb Z,\ x-qd\ge0\},$$

explicitly prove that $S$ is nonempty by choosing an integer $q$ with $q\le x/d$. This is more precise than “take $q$ sufficiently small.”

For the $r<d$ step, the key comparison is immediately

$$x-(q+1)d < x-qd,$$

because $d>0$.

## 6. Clarify the GCD definition
State explicitly that the GCD is the greatest **positive** common divisor. This makes the subsequent use of the maximum principle precise.

## 7. Use standard terminology for integer combinations
Replace the sentence defining an integer combination with:

> An integer of the form $ax+by$, where $a,b\in\mathbb Z$, is called an **integer linear combination** of $x$ and $y$.

## 8. Make the GCD proof more explicit
After proving $d\mid x$ and $d\mid y$, explicitly state “Thus $d$ is a common divisor of $x$ and $y$.” Then prove maximality separately by showing every common divisor divides $d$.

## 9. Remove the duplicate prime-number definition
Prime numbers are defined once in the divisibility section and again under “Prime Numbers.” Keep one full definition and make the later section a reminder followed by the main theorem.

## 10. Clarify the final prime theorem
In the proof of the prime-divisor theorem, spell out why $p\nmid a$ implies $(p,a)=1$: every positive common divisor of $p$ and $a$ divides the prime $p$, so it is either $1$ or $p$, and $p$ is excluded by $p\nmid a$.

## 11. State explicitly that 1 is neither prime nor composite
This avoids a common beginner ambiguity before the exercise asking whether 123 and 127 are prime.

## 12. Add occasional pedagogical signposts
The chapter is simultaneously introducing elementary set language and motivating proof techniques. A short recurring signpost could make that structure clearer, e.g.:

> **What this example is teaching:** the mathematical content is elementary here; the important skill is learning how definitions constrain what can be proved.

## 13. Check a subtle wording issue in the division theorem
The definition says $r$ is “the modulus of $x/d$.” Since $x/d$ need not itself be an integer and “modulus” has several established meanings in mathematics, this terminology is especially likely to confuse students. “Remainder upon division of $x$ by $d$” is preferable.
