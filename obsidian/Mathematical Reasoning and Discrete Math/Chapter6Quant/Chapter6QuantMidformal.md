---
title: "Chapter 6: Quantification, Informally and Medium-formally"
---

We have developed propositional logic, and expanded it to predicate logic.  We now continue the project.  This time we expand predicate logic to what is called first-order logic.

This chapter introduces the intuitions and ideas.  In the next chapter we will study the formal syntax and semantics.

# Keep $\Bbb R$ in Your Heart

Throughout this chapter it will help to keep in mind how you would develop a language to talk about the real numbers. 

Recall that the real numbers can be thought of, roughly, as “every possible decimal expansion”. The decimal expansion, for example, of 3/2 is 1.5. And the decimal expansion of 1/3 is the infinite expansion 0.333…

Later we’ll have more to say about decimal expansions and the formal construction of real numbers. But at least for now, this is a simple start to thinking about the real numbers.

Some examples: Every integer and rational number is a real number. But then there are some real numbers, like $\sqrt 2$ and $\pi$, which are real numbers but not rational. Later in this course we will actually *prove* that $\sqrt 2$ is real but not rational, whereas proving this for $\pi$ is beyond the scope of this course.

Note that $\sqrt 2$ doesn’t look like a “decimal expansion”. But there is a sequence of decimal numerals which is equivalent to $\sqrt 2$.

$$
\sqrt 2 = 1.4142...
$$

Now what does this have to do with logic?

First of all notice that the “number of real numbers” is enormous. It is clearly infinite.  But even more than being infinite, there's just no good way to list all of the real numbers.  

> [!note]- Reals cannot be listed.
> We will have more to say about the fact that the real numbers cannot be listed.  The more professional way to say this is that the real numbers are "uncountable".

Therefore a language cannot, in any practical sense, name every single real number.  Therefore we must have some way to manage the fact that our names run out, before we run out of objects that we want to talk about.

In the chapter on predicate logic we had names for objects that we wanted to talk about.  In this chapter we discuss the idea of "variables" and "quantifiers" which allow us to speak about infinite sets, since the variables are able to "vary over the infinite set".

# “All” and “Some”

Consider a sentence like “every dog deserves pets”.

![[Pasted image 20261004205111.png]]

If we were to express this in predicate syntax, first we would need a name for every dog. That would be a lot of names, like

$$
{\tt d_1},{\tt d_2},{\tt d_3},...,{\tt d_{10^{9}}}
$$

for each of about a billion doggies.  Then we need a predicate, like ${\tt D}({\tt x})$, to represent "${\tt x}$ deserves pets".

Then we need to form the very long conjunction

$$
{\tt D}({\tt d_1}){\tt \land} {\tt D}({\tt d_2}){\tt \land}\cdots{\tt \land} {\tt D}({\tt d_{10^9}})
$$

But in English, the sentence is much simpler and shorter—we just use a phrase like “all”.  

> "All doggies deserve pets."

Much simpler!

Of course there is a parallel idea for disjunction: Consider the sentence “Some chimpanzee deserves pets.”  This one might deserve pets:

![[Pasted image 20261004211041.png]]

This one gives me "no pets" vibes.

![[Pasted image 20261004211251.png]]

To express “some chimps deserve pets” we’ll need to name every chimp,

$$
{\tt c_1},...,{\tt c_{10^6}}
$$

and then assert

$$
{\tt D}({\tt c_1}){\tt \lor}\cdots{\tt \lor} {\tt D}({\tt c_{10^6}})
$$

The point being that “all” indicates a long conjunction of a predicate, over every individual in the domain. “Some” indicates a long disjunction of a predicate, over every individual in the domain.

---

The above only considers a finite domain, like the set of all doggies or the set of all chimps.

But in math we’ll often need to discuss an infinite domain, like in the sentence “Every number divisible by 4 is divisible by 2.” The natural domain for this statement is the set of integers, and so we are claiming 

> “If 0 is divisible by 4 then 0 is divisible by 2, and if 1 is divisible by 4 then 1 is divisible by 2, and if -1 …”

This is like an “infinitely long conjunction”, although an *actual* infinitely long sentence is not possible.  Therefore we need a system of finite expressions, which is able to make claims about an infinite domain.

Of course we could repeat much of this for disjunction. In the sentence “there is an integer larger than $\pi^{100}$” we are essentially saying “either 0 is larger than $\pi^{100}$, or 1 is larger than $\pi^{100}$, or -1 is larger than $\pi^{100}$, or …”

---

Whenever we want to make a claim about all objects within the domain, we call this “universal quantification”. This is indicated by words like “all”, “every”, “each”, and so on.

Whenever we want to make a claim that there is some object within the domain, we call this “existential quantification”. This is indicated by words like “there is”, “there exists”, “some”, and so on.

# Quantifiers 

We are now going to add quantifiers to our predicate logic. The resulting language is called first-order logic, which we officially define later.

To express “every dog deserves pets” in first-order logic, we will write

$$
{\tt \forall} {\tt x} {\tt D}({\tt x})
$$

The upside-down ‘A’ is read as “for all”. So the literal reading of this expression is

> For all ${\tt x}$ in the domain, ${\tt x}$ deserves pets.

This expresses that all dogs deserve pets, so long as the "domain of discourse" is the set of all dogs.  If the domain were all chimps, then ${\tt \forall} {\tt x} {\tt D}({\tt x})$ would express that all chimps deserve pets.

To express “some chimp deserves pets”, if the domain is all chimps then we would write 

$$
{\tt \exists} {\tt x} {\tt D}({\tt x})
$$

The backwards 'E' is read as "there exists".  So the literal reading of this expression is 

> There exists an ${\tt x}$ in the domain, ${\tt x}$ deserves pets.

The symbols ${\tt \forall}$ and ${\tt \exists}$ are called "quantifiers".

Notice that the syntax uses a variable, like ${\tt x}$ above. However, we still want to have constant symbols, as we did with predicate logic.  Variables and constants mean very different things!  A variable "varies", i.e. takes on the value of several different domain elements.  A constant has its meaning fixed to one specified domain element.  

For example, suppose that the domain is all integers, ${\tt o}$ denotes the number 1, and the predicate ${\tt D}({\tt x},{\tt y})$ denotes the relation "${\tt x}$ is divisible by ${\tt y}$".  

We can continue to use the semantic notation from the previous chapter, and write 

$$\begin{aligned}
 म &= \Bbb Z\\
 {\tt o}^इ &= 1\\
 {\tt D}^इ &= \{(x,y)\in\Bbb Z^2: x \text{ is divisible by } y\} 
\end{aligned}$$

Then to express that every number is divisible by 1, we write 

$$ {\tt \forall} {\tt x} {\tt D}({\tt x},{\tt o}) $$

Both variables and constants will be represented by lower-case letters, as you see above.  And yet our logical language will need two kinds of object symbols, one for variables and one for constants, and we don't want them to get confused for each other.  

Traditionally we will use the letters ${\tt a}$ through ${\tt t}$ for constants, and the letters ${\tt u}$ through ${\tt z}$ for variables.  Of course we also allow indices, so that ${\tt a_{101}}$ and ${\tt t_0}$ may be constants, and ${\tt u_{123}}$ could be a variable. 

> [!exercise] ***Exercise***
> Establish a reasonable domain and symbols to express the proposition 
> > There is some integer greater than $\pi$.



Note that we can also quantify over formulas.  For example, suppose that the domain is all integers, ${\tt t}$ denotes 2, ${\tt f}$ denotes 4, and ${\tt D}({\tt x},{\tt y})$ denotes "${\tt x}$ is divisible by ${\tt y}$".  Then consider the expression 

$$ {\tt \forall} {\tt x}({\tt D}({\tt x},{\tt f}) {\tt \to} {\tt D}({\tt x},{\tt t})) $$

This expresses that "for every integer ${\tt x}$, if ${\tt x}$ is divisible by 4, then ${\tt x}$ is divisible by 2".  

If ${\tt E}$ expresses "is even" and ${\tt P}$ expresses "is prime" then 

$$ {\tt \exists} {\tt x} ({\tt E}({\tt x}){\tt \land} {\tt P}({\tt x})) $$

expresses that there exists an even prime integer.  

> [!exercise] ***Exercise***
> Choose a reasonable domain and symbols to express that "every differentiable function of a real variable is continuous".  
> 
> Choose another reasonable domain and symbols to express that "every cat is a mammal".

Not only can we quantify over formulas, but in fact, we can make formulas out of quantified expressions.  For example, if the domain is integers, ${\tt E}$ denotes "is even", ${\tt O}$ denotes "is odd", then the expression 

$$
\tt (\exists x E(x)) \land (\exists x O(x))
$$ 


expresses that "there is some number which is even, and there is some number which is odd".  This is a true proposition, since there does exist an even integer, 2, and there does exist an odd integer, 3.  

Note how different this expression is from the seemingly similar expression 

$$
{\tt \exists} {\tt x}({\tt E}({\tt x}){\tt \land} {\tt O}({\tt x}))
$$

This says that there exists an integer, ${\tt x}$, which is *both even and odd*.  That is not true, of course, since any number which is even cannot also be odd.  

> [!exercise] ***Exercise***
> Choose a domain and symbols to express "All cats are mammals but not all mammals are cats."

> [!exercise] ***Exercise***
> Suppose that the domain is all polygons in a two dimensional plane.  Just for example, this means that one of the elements in the domain is a triangle with vertices at (0,0), and (1,0), and (0,1).  The domain also contains many other triangles, quadrilaterals, pentagons, and so on.  
> 
> Suppose that ${\tt E}$ denotes the equilateral polygons, ${\tt R}$ the rectangles.
> 
> ***Part 1.***
> 
> Interpret the meaning of the expression 
> $$ {\tt \forall} {\tt x}({\tt \neg}({\tt E}({\tt x}){\tt \land} {\tt R}({\tt x}))) $$
> and decide whether it's a true proposition.  
> 
> ***Part 2.***
> 
> Contrast this with the meaning of 
> $$ {\tt \neg} {\tt \forall} {\tt x}({\tt E}({\tt x}){\tt \land} {\tt R}({\tt x})) $$ 
> and decide wehther this is a true proposition.  
> 
> ***Part 3.***
> 
> Come up with symbols that express the proposition: 
> 
> > Every equilateral rectangle is a square.
> 
> (This is, of course, a true proposition.)


# Nested Quantifiers

Things get more interesting still when we consider multiple quantifiers.

Consider the domain of all humans on the planet, and the relation ${\tt L}({\tt x},{\tt y})$ which represents “${\tt x}$ loves ${\tt y}$”.

Now consider the different meanings of each of the following propositions.

- ${\tt \forall} {\tt x}{\tt \forall} {\tt y} {\tt L}({\tt x},{\tt y})$
  "Everybody loves everybody" like a utopia.
- ${\tt \forall} {\tt x}{\tt \exists} {\tt y} {\tt L}({\tt x},{\tt y})$
  "Everybody loves somebody" like the [Dean Martin](https://youtu.be/z-2_OstpR5c?si=clF5yupNWFhjfujf) song.
- ${\tt \exists} {\tt x}{\tt \forall} {\tt y} {\tt L}({\tt x},{\tt y})$
  "Somebody loves everybody" like a Jesus figure.
- ${\tt \exists} {\tt x}{\tt \exists} {\tt y} {\tt L}({\tt x},{\tt y})$
  "Somebody loves somebody", a statement that love is not dead.

I hope that the above gives you an intuition for what the quantifiers mean and how their order can impact the meaning of an expression.

But now let's take an example which is more computational.  Suppose that our domain contains just four people, {Axel, Benicio, Cici, Dakota}.  Moreover suppose that Axel loves Axel, Benicio, Cici, and Dakota.  Benicio loves Cici and Dakota.  Nobody else loves anyone else.

Then which of the expressions, $\tt \forall x\forall y L(x,y), \forall x\exists y L(x,y), \exists x\forall y L(x,y), \exists x\exists y L(x,y)$ are true?

## $\tt\forall x\forall y L(x,y)$

Here is how we check $\tt \forall x\forall y L(x,y)$: First, run through every choice of assignment to the variable $\tt x$. 
* If $\tt x$ is assigned Axel: Now run through every choice of assignment to $\tt y$.
	* If $\tt y$ is assigned Axel: To evaluate $\tt L(x,y)$ we must decide if Axel loves Axel.  Because he does, then this is a true proposition.
	* If $\tt y$ is assigned Benicio: Because Axel loves Benicio then $\tt L(x,y)$ is true.
	* If $\tt y$ is Cici: Axel loves Cici so $\tt L(x,y)$ is true.
	* If $\tt y$ is Dakota: Axel loves Dakota so $\tt L(x,y)$ is true.
  Because $\tt L(x,y)$ is true for every choice of $\tt y$, therefore $\tt \forall y L(x,y)$ is true in the case where $\tt x$ is Axel.  
* If $\tt x$ is Benicio: Now run through every choice of assignment to $\tt y$.
	* If $\tt y$ is Axel: To evaluate $\tt L(x,y)$ we decide if Benicio loves Axel.  Because he does not, therefore $\tt L(x,y)$ is false.

  Because $\tt L(x,y)$ is false for some choice of $\tt y$ then $\tt \forall y L(x,y)$ is false.

Because $\tt\forall y L(x,y)$ is false for some $\tt x$, then $\tt\forall x\forall y L(x,y)$ is false.

It will help if we have some notation for the idea of a variable being assigned to some individual.  It is common in mathematical logic to write, for example, $s({\tt x}) = \text{Axel}$ if the variable $\tt x$ is assigned to Axel.  

Therefore we can summarize what we saw above: $\tt \forall x\forall y L(x,y)$ was false because, when $s({\tt x}) = \text{Benicio}$ and $s({\tt y}) = \text{Axel}$ the proposition $\tt L(x,y)$ was false.

Notice that, when variables are involved, the truth of a proposition can 

## $\tt \exists x\forall y L(x,y)$

Next let's assess the truth of $\tt \exists x\forall y L(x,y)$. We iterate through all assignments to $\tt x$.

I won't continue to iterate through all bullet points, since we've seen the process a couple times by now. But you should feel invited to do the explicit iteration on your own paper. 

In summary, you should find that when $\tt x$ is assigned Axel, then when $\tt y$ is Axel $\tt L(x,y)$ is true, and then when $\tt y$ is Benicio $\tt L(x,y)$ is true, and when $\tt y$ is Cici $\tt L(x,y)$ is true, and when $\tt y$ is Dakota  $\tt L(x,y)$ is true. 

Therefore when $\tt x$ denotes Axel, the proposition $\tt \forall L(x,y)$ is true. 

Since $\tt \forall L(x,y)$ is true for some assignment to $\tt x$, therefore $\tt \exists x\forall yL(x,y)$ is true. 

> [!exercise] Exercise
> Complete the last evaluation by showing that $\tt\exists x\exists y L(x,y)$ is true. 

> [!exercise] Exercise
> Using the same $\tt L$ as above, with the same meaning, decide the truth of the propositions $\tt \neg \forall x\forall y L(x,y)$ and $\tt \forall x\forall y \neg L(x,y)$, and $\tt \exists x \exists y \neg L(x,y)$.

> [!exercise] Exercise
> Consider a domain $उ =\{a,b\}$ of just two elements. Let $\tt c,d$ be constant symbols such that $\tt c$ denotes $a$ and $\tt d$ denotes $b$. Let $\tt P$ be a property.
>
> 1. Explain why $\tt \forall x P(x)$ is equivalent to $\tt P(c) \land P(d)$, regardless of the meaning of $\tt P$. Also explain why $\tt \exists x P(x)$ is equivalent to $\tt P(c)\lor P(d)$.
>
> 2. Now let $\tt Q$ be another property. Then explain why $\tt \forall x \forall y (P(x) \lor Q(y))$ is equivalent to $\tt (\forall y (P(c)\lor Q(y)) \land (\forall y (P(c) \lor Q(y))$, which is also equivalent to $\tt ( (P(c)\lor P(c)) \land (P(c)\lor P(d))) \land ((P(d)\lor P(c)) \land (P(d)\lor P(d))$.
>
> 3. We could regard the equivalences above as a kind of "expansion" of the propositions. Find the expansion of $\tt \exists x \forall y (P(x)\to Q(y))$, and $\tt \forall x\forall y \forall z ((P(x)\lor Q(y))\to \neg P(z))$.
> 
> 4. What changes if the number of domain elements increases to 3, and we have 3 constant symbols that refer to each domain element?
> 
> 5. Explain why $\tt\forall xP(x)$ always implies $\tt\exists x P(x)$.


Now we check $\tt\forall x\exists y L(x,y)$.  Just as before, we iterate through every assignment of $\tt x$.
* If $\tt x$ is Axel: We now run through every choice of $\tt y$.
	* If $\tt y$ is Axel: We've seen that in this case $\tt L(x,y)$ is true.  
	But already we can conclude that $\tt \exists y L(x,y)$ is true when $\tt x$ is Axel.
* If $\tt x$ is Benicio: Run through every choice of assignment to $\tt y$.
	* If $\tt y$ is Axel: Here $\tt L(x,y)$ is false.
	* If $\tt y$ is Benicio: Here $\tt L(x,y)$ is false.
	* If $\tt y$ is Cici: Here $\tt L(x,y)$ is true.
	We can conclude that $\tt \exists y L(x,y)$ is true when $\tt x$ is Benicio.
* If $\tt x$ is Cici: Run through every choice of assignment to $\tt y$.
	* If $\tt y$ is Axel: Here $\tt L(x,y)$ is false.
	* If $\tt y$ is Benicio: Here $\tt L(x,y)$ is false.
	* If $\tt y$ is Cici: Here $\tt L(x,y)$ is false.
	* If $\tt y$ is Dakota: Here $\tt L(x,y)$ is false.
	Since $\tt L(x,y)$ is false for every choice of $\tt y$, then $\tt \exists y L(x,y)$ is false when $\tt x$ is Cici.

Because $\tt \exists y L(x,y)$ is false for some $s({\tt x})$, then $\tt \forall x\exists y L(x,y)$ is false.

## $\tt \exists x\forall y L(x,y)$

Let’s use ${\tt L}({\tt x},{\tt y})$ to mean “${\tt x}$ is linked to ${\tt y}$ by a road”. So for example ${\tt L}({\tt a},{\tt b})$ is true while ${\tt L}({\tt a},{\tt d})$ is not.

Let’s also use ${\tt N}({\tt x},{\tt y})$ to mean “${\tt x}$ is lexically next after ${\tt y}$”. Note that ${\tt N}({\tt b},{\tt a})$ is true because ${\tt b}$ is lexically next after ${\tt a}$. However, ${\tt N}({\tt c},{\tt a})$ is not true.

Here is a sentence that should be true: For any two cities, ${\tt x}$ and ${\tt y}$, if ${\tt x}$ is lexically next after ${\tt y}$ then ${\tt x}$ is linked to ${\tt y}$. In a formula, this is

$$
{\tt \forall} {\tt x}{\tt \forall} {\tt y}({\tt N}({\tt x},{\tt y}) {\tt \to} {\tt L}({\tt x},{\tt y}))
$$

Intuitively this is true because we see four pairs where one city is lexically next: A and B, B and C, C and D, and D and E. In every case, the pair of cities are linked, as you can see in the graph.

To evaluate $({\tt \forall} {\tt x}{\tt \forall} {\tt y}({\tt N}({\tt x},{\tt y}){\tt \to} {\tt L}({\tt x},{\tt y})))^{म}$ formally, we need to consider five total possible assignments to ${\tt x}$.

- ${\tt x}\mapsto {\tt a}$
- ${\tt x}\mapsto {\tt b}$
- ${\tt x}\mapsto {\tt c}$
- ${\tt x}\mapsto {\tt d}$
- ${\tt x}\mapsto {\tt e}$

Let’s consider these each in turn.

- ${\tt x}\mapsto {\tt a}$

With this assignment we now have to evaluate $({\tt \forall} {\tt y} ({\tt N}({\tt a},{\tt y}){\tt \to} {\tt L}({\tt a},{\tt y})))^{म}$. To do this we again need to consider five possible assignments to ${\tt y}$.

  - ${\tt y}\mapsto {\tt a}$

    With this assignment we now have to evaluate $({\tt N}({\tt a},{\tt a}){\tt \to} {\tt L}({\tt a},{\tt a}))^{म}$. Noting that ${\tt N}({\tt a},{\tt a})^{म}=फ$ and ${\tt L}({\tt a},{\tt a})^{म}=ट$, then

    $$
    \begin{aligned}
     ({\tt N}({\tt a},{\tt a}){\tt \to} {\tt L}({\tt a},{\tt a}))^{म} &= {\tt N}({\tt a},{\tt a})^{म} \leadsto {\tt L}({\tt a},{\tt a})^{म} \\
     &= फ\leadsto ट \\
     &= ट
    \end{aligned}
    $$

  - ${\tt y}\mapsto {\tt b}$

    With this assignment

    $$
    \begin{aligned}
     ({\tt N}({\tt a},{\tt b}){\tt \to} {\tt L}({\tt a},{\tt b}))^{म} &= {\tt N}({\tt a},{\tt b})^{म} \leadsto {\tt L}({\tt a},{\tt b})^{म} \\
     &= फ\leadsto ट \\
     &= ट
    \end{aligned}
    $$

  - ${\tt y}\mapsto {\tt c}$

    $$
    \begin{aligned}
     ({\tt N}({\tt a},{\tt c}){\tt \to} {\tt L}({\tt a},{\tt c}))^{म} &= {\tt N}({\tt a},{\tt c})^{म} \leadsto {\tt L}({\tt a},{\tt c})^{म} \\
     &= फ\leadsto ट \\
     &= ट
    \end{aligned}
    $$

  - ${\tt y}\mapsto {\tt d}$

    $$
    \begin{aligned}
     ({\tt N}({\tt a},{\tt d}){\tt \to} {\tt L}({\tt a},{\tt d}))^{म} &= {\tt N}({\tt a},{\tt d})^{म} \leadsto {\tt L}({\tt a},{\tt d})^{म} \\
     &= फ\leadsto फ \\
     &= ट
    \end{aligned}
    $$

  - ${\tt y}\mapsto {\tt e}$

    $$
    \begin{aligned}
     ({\tt N}({\tt a},{\tt e}){\tt \to} {\tt L}({\tt a},{\tt e}))^{म} &= {\tt N}({\tt a},{\tt e})^{म} \leadsto {\tt L}({\tt a},{\tt e})^{म} \\
     &= फ\leadsto फ \\
     &= ट
    \end{aligned}
    $$

    As we see, when ${\tt x}$ is assigned to $a$, then for every possible mapping of ${\tt y}$, we get a true proposition.

    Therefore $({\tt \forall} {\tt y}({\tt N}({\tt a},{\tt y}){\tt \to} {\tt L}({\tt a},{\tt y})))^{म} = ट$.

- ${\tt x}\mapsto {\tt b}$

  > [!exercise] ***Exercise***
  >
  > Perform this assignment and evaluate $({\tt \forall} {\tt y}({\tt N}({\tt b},{\tt y}){\tt \to} {\tt L}({\tt b},{\tt y})))^{म}$.

- ${\tt x}\mapsto {\tt c}$

  > [!exercise] ***Exercise***
  >
  > Perform this assignment and evaluate the relevant proposition.

- ${\tt x}\mapsto {\tt d}$

  - ${\tt y}\mapsto {\tt a}$

    $$
    \begin{aligned}
     ({\tt N}({\tt d},{\tt a}){\tt \to} {\tt L}({\tt d},{\tt a}))^{म} &= {\tt N}({\tt d},{\tt a})^{म} \leadsto {\tt L}({\tt d},{\tt a})^{म} \\
     &= फ\leadsto फ \\
     &= ट
    \end{aligned}
    $$

  - ${\tt y}\mapsto {\tt b}$

    With this assignment

    $$
    \begin{aligned}
      ({\tt N}({\tt d},{\tt b}){\tt \to} {\tt L}({\tt d},{\tt b}))^{म} &= {\tt N}({\tt d},{\tt b})^{म} \leadsto {\tt L}({\tt d},{\tt b})^{म} \\
     &= फ\leadsto ट \\
     &= ट
    \end{aligned}
    $$

  - ${\tt y}\mapsto {\tt c}$

    $$
    \begin{aligned}
     ({\tt N}({\tt d},{\tt c}){\tt \to} {\tt L}({\tt d},{\tt c}))^{म} &= {\tt N}({\tt d},{\tt c})^{म} \leadsto {\tt L}({\tt d},{\tt c})^{म} \\
     &= ट\leadsto ट \\
     &= ट
    \end{aligned}
    $$

  - ${\tt y}\mapsto {\tt d}$

    $$
    \begin{aligned}
     ({\tt N}({\tt d},{\tt d}){\tt \to} {\tt L}({\tt d},{\tt d}))^{म} &= {\tt N}({\tt d},{\tt d})^{म} \leadsto {\tt L}({\tt d},{\tt d})^{म} \\
     &= फ\leadsto फ \\
     &= ट
    \end{aligned}
    $$

  - ${\tt y}\mapsto {\tt e}$

    $$
    \begin{aligned}
     ({\tt N}({\tt d},{\tt e}){\tt \to} {\tt L}({\tt d},{\tt e}))^{म} &= {\tt N}({\tt d},{\tt e})^{म} \leadsto {\tt L}({\tt d},{\tt e})^{म} \\
     &= फ\leadsto ट \\
     &= ट
    \end{aligned}
    $$

    As we see, when ${\tt x}\mapsto {\tt d}$, then for every possible mapping of ${\tt y}$, we get a true proposition.

    Therefore $({\tt \forall} {\tt y}({\tt N}({\tt d},{\tt y}){\tt \to} {\tt L}({\tt d},{\tt y})))^{म} = ट$.

- ${\tt x}\mapsto {\tt e}$

We should check this case too, but I promise $({\tt \forall} {\tt y}({\tt N}({\tt e},{\tt y}){\tt \to} {\tt L}({\tt e},{\tt y})))^{म}=ट$. However, you are invited to check for yourself if you would like more exercise.

The above now confirms that, for every possible assignment to ${\tt x}$, the resulting proposition is true.

Therefore it demonstrates $({\tt \forall} {\tt x}{\tt \forall} {\tt y} ({\tt N}({\tt x},{\tt y}){\tt \to} {\tt L}({\tt x},{\tt y})))^{म}$.

> [!exercise] ***Exercise***
>
> Using the same city and road diagram, solve the following exercises.
>
> You don’t always have to make every single assignment. For example, to show ${\tt \forall} {\tt x}{\tt \exists} {\tt y} {\tt L}({\tt x},{\tt y})$ is true, you do need to show that it is true for every possible assignment to ${\tt x}$. So this means that you need to check *at least* five assignments to ${\tt x}$.
>
> Now if you were very flat-footed, you would then check five assignments to ${\tt y}$. If at least one of those assignments is true, then the existential proposition is true.
>
> But this is more effort than you really need to do. When it comes to an existential quantifier, you really just need to exhibit *one* instance of $ट$, not *every* instance of $ट$. So, for each assignment of ${\tt x}$, if you find one satisfying assignment of $ट$, you can stop early!
>
> 1. Show that
>
>     $$
>     {\tt \forall} {\tt x}{\tt \exists} {\tt y} {\tt L}({\tt x},{\tt y})
>     $$
>
>     is true. (Hint: With an appropriate choice of assignments, this only requires evaluating five propositions. Further hint: For any choice of ${\tt x}$, it is not linked to itself!)
>
> 2. Show that
>
>     $$
>     {\tt \exists} {\tt x}{\tt \forall} {\tt y} {\tt L}({\tt x},{\tt y})
>     $$
>
>     is true. (With an appropriate choice of assignments, this only requires evaluating five propositions.)
>
> 3. Show that
>
>     $$
>     {\tt \forall} {\tt x}{\tt \forall} {\tt y} {\tt L}({\tt x},{\tt y})
>     $$
>
>     is false. (With an appropriate choice of assignments, this only requires evaluating *one* proposition!)
>
> 4. Show that
>
>     $$
>     {\tt \forall} {\tt x}{\tt \forall} {\tt y}({\tt L}({\tt x},{\tt y}){\tt \to} {\tt N}({\tt x},{\tt y}))
>     $$
>
>     is false. (With an appropriate choice of assignments, this only requires evaluating one proposition.)
>
> 5. Show that
>
>     $$
>     {\tt \exists} {\tt x} {\tt \exists} {\tt y} ({\tt L}({\tt x},{\tt y}){\tt \land}{\tt \neg} {\tt N}({\tt x},{\tt y}))
>     $$
>
>     is true. (With an appropriate choice of assignments, this requires only evaluating one proposition.)
>
> 6. Show that ${\tt \exists} {\tt x} {\tt L}({\tt x},{\tt x})$ is false. This requires evaluating five propositions.

# Quantifiers and Tables

There is a nice way to display these evaluations in a tabular form. Consider the domain $उ = \{a,b,c,d\}$.  

Further suppose that $\tt P$ and $\tt Q$ are unary predicates, and the following table summarizes their truth-values.

| $\tt x$    | $a$ | $b$ | $c$ | $d$ |
| ---------- | --- | --- | --- | --- |
| $\tt P(x)$ | ट   | ट   | ट   | ट   |
| $\tt Q(x)$ | ट   | फ   | फ   | फ   |

This tells us that, for instance, $\tt P$ is true for $a$, and $\tt Q$ is false for $b$.

Moreover, suppose that $\tt R$ is a binary relation, and the following table summarizes its truth values.

| $\tt R(x,y)$ | $a$ | $b$ | $c$ | $d$ |
| ------------ | --- | --- | --- | --- |
| $a$          | फ   | ट   | फ   | ट   |
| $b$          | ट   | फ   | ट   | फ   |
| $c$          | फ   | फ   | फ   | ट   |
| $d$          | फ   | फ   | फ   | फ   |

This tells us that, for example, $\tt R$ is false for the pair $(a,a)$ but is true for the pair $(d,b)$.  We find the first one by looking at row *a* and column *a*, and the second we find in row *d* column *b*.  

> [!note]- These two tables are structured differently.
> 
> Note that the tables for $\tt P$ and $\tt Q$ are "one dimensional".  The columns indicate elements from the domain.  The row indicates the predicate.
> 
> However, the table for $\tt R$ is "two dimensional".  The columns indicate domain elements, yes, just like before.  But now also the rows indicate domain elements too.  
> 
> Where is the predicate indicated? Well, there's no room for it now that both rows and columns are taken up.  So the predicate is indicated by *the entire table* (not just one row of the table).
> 
> So the two tables are not meant to be read in exactly the same way.


Now let's evaluate the proposition $\tt \exists x P(x)$. The table makes this immediately obvious: The row for $\tt P$ has a ट and therefore $\tt \exists x P(x)$ is true.  

In fact, *every* cell of this row is ट and therefore we could even say that $\tt \forall x P(x)$ is true.

How about $\tt \exists x Q(x)$? There is some cell (under $a$) where $\tt Q$ is true, and therefore the existential claim is true.  How about $\tt\forall x Q(x)$? For that to be true we we need *every* cell to hold ट.  Since not every cell is ट, therefore the universal claim is false.

Now let's assess each possible way of stacking quantifiers on $\tt R(x,y)$.

* $\tt \forall x \forall y R(x,y)$: This requires every row and every column to hold ट.  Since there is some $फ$, then this proposition is false.
* $\tt \forall x \exists y R(x,y)$: This requires every row to contains *some* ट.  Since there is some row (*d*) which contains no ट, then this proposition is false.
* $\tt \exists x \forall y R(x,y)$: This requires some row to contain only ट.  There is no row like this, and therefore this proposition is false.
* $\tt \exists x \exists y R(x,y)$: This requires some row and some column to hold ट.  This is true, and therefore the proposition is true.

> [!exercise] Exercise
> Using the same predicates and meaning above, assess the truth of the following propositions.
> 
> 1. $\tt \forall x \neg P(x)$
> 2. $\tt \forall x (P(x)\lor Q(x))$
> 3. $\tt \forall x(P(x)\to Q(x))$
> 4. $\tt \forall x\forall y \neg R(x,y)$
> 5. $\tt \forall x \exists y \neg R(x,y)$
>    
> For more exercise, you can of course create more formulas like these and assess their truth.
> 




# Quantification over Infinite Domains

Now we've looked a lot at quantification over finite domains, because it's a good starting place.

However, one of the major motivations for having quantification is so that we can speak and reason about infinite domains.  

Let's set the domain to be $TODO = \Bbb Z$, and define some predicates.  

We could have $\tt P$ be the property that an integer, $x$, is greater than 10.  Then $\tt P$ is true for 11, 12, and so on.  

We could have $\tt Q$ be the property that an integer has no digit 0 (in its standard base-10 representation).  Then $\tt Q$ is true for 1, 2, and so on up to 9.  And it is true for 11, 12, and so on.  

> [!exercise] Exercise
> 1. Can you find a negative number for which $\tt P$ is true?  Can you find a negative number for which $\tt Q$ is true?  
> 
> 2. Can you find a multiple of 10 for which $\tt Q$ is true? Can you find a number which is true for $\tt Q$ which is not a multiple of 10?

Also let $\tt R$ be the binary relation on integers $x,y$ which is true when $x$ has an equal or greater number of 0 digits than $y$ in its standard base-10 representation.  So $\tt R$ is true for the ordered pair $(1,2)$ because 1 has an equal or greater number of 0 digits than 2.  Also $(2,1)$ is true for $\tt R$.

# All and Some with Two Predicates

In the history of the study of logic, there is a famous diagram (called the "Square of Opposition" TODO) due to Aristotle which represents the relationships between "contraries" and "subalterns".

TODO: Diagram

Let *A* and *B* be two predicates.  The corners of the square represent the propositions 

- "All *A*'s are *B*'s."
- "No *A*'s are *B*'s."
- "Some *A*'s are *B*'s."
- "Not all *A*'s are *B*'s."

## All

Consider the proposition 
> All cats are mammals.  

This is the same as saying "If anything is a cat then it is a mammal."  The direct translation of this into our logical symbols is therefore 

$$ \forall x(C(x)\to M(x)) $$

where the properties *C* and *M* respectively denote cats and mammals. We assume any reasonable domain (could be things, animals, any domain that holds all mammals will suffice).  

> [!exercise] Exercise
> Write the formal symbols for the following propositions. Assume each has some reasonable domain.
> 1. All mammals are cats.
> 2. All primes are not square.  (It is unimportant for this exercise, but the "square numbers" are 0, 1, 4, 9, 16, and so on.  These are square because they are the square of some integer.  0 is the square of 0, 1 is the square of 1, 4 is the square of 2, and so on.)
> 3. If anything is both triangular and equiangular, then it is equilateral.
> 4. Every animal with a heart has a kidney, and every animal with a kidney has a heart.

Note that this is merely the assertion of a subset!  The set of cats is a subset of the set of mammals.  The set of primes are a subset of the non-square numbers.  The proposition "all mammals are cats" is false because the set of mammals is *not* a subset of cats.

Therefore, if $A$ and $B$ are sets, then to state that $A\subseteq B$ is the same as the proposition

$$ \forall x(x\in A\to x\in B) $$

Of course, to say that any two sets are *equal* is simply the conjunction of two subset statements.  In symbols, $A=B$ if and only if $A\subseteq B$ and $B\subseteq A$.  In our logical formalism, $A=B$ is equivalent to 

$$\forall x(x\in A\to x\in B)\land \forall x(x\in B\to x\in A)$$

It is worth wondering: Is this equivalent to $\forall x(x\in A\leftrightarrow x\in B)$?  Intuitively the answer is "yes".  It says that "for all objects in the domain, if it is in $A$ then it is in $B$, and if it is in $B$ then it is in $A$".  We will see a rigorous proof of this fact later.

Here is another worthwhile observation: Suppose that we set the domain to be all cats, and then want to express "All cats are mammals.". Yes, we could continue to represent this as $\forall x(C(x)\to M(x))$.  However, with the domain being set to all cats, this now just means the same as $\forall x M(x)$.  For now this is an idle observation, although when we discuss the idea of "types" we will make more use of this idea.

## No

Let's turn our attention to a sentence like 

> No prime is square.

or 

> No polygon is cicular.  

This states, equivalently, that "every prime is not square", or in symbols,

$$ \forall x(P(x)\to \neg S(x)) $$

where the domain and meaning of the predicates are reasonable.



# Vacuous Quantification

We're now finally in a good position to review something that we discussed much earlier: vacuous quantification.  Recall that the empty set is a subset of every set.  In formalism, if $X$ is any set then $\emptyset \subseteq X$.  

Recall that, if we translate what "subset" means, it says that 

...

> [!exercise] Exercise
> Let *X* be a set and *S* a collection of properties.  Define N(S) as the number of elements which satisfy every property.  Show that if S = \emptyset then N(S)=|X|.