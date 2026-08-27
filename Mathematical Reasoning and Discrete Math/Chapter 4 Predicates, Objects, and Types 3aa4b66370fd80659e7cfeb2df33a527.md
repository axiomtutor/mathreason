# Chapter 4: Predicates, Objects, and Types

# Predicates and Objects

As you consider many examples of propositions, you notice a pattern.  They are always made up of an “object” and a “predicate”.  

For example, in the sentence “The ball is red” the object is “the ball”.  The predicate is “is red”.  

The object is the *thing* that the sentence is about.  The predicate is the claim that we make about it.

***Exercise***

In the proposition “Anya is tall” there is only one good choice for which is the object and which is the predicate.

Which is which?

Also, choose a symbol for Anya, a symbol for the predicate “*x* is tall”, and then write the propositional atom which represents “Anya is tall”.

Now as you consider more propositions you may quickly recognize that many of them involve multiple objects at the same time.  For example, the proposition “1 is less than 2” uses the objects, 1 and 2.  

We can also find examples like “Ljubljana is in the middle of Zagreb, Graz, and Venice.”  In this sentence there are four objects: the four referenced cities. The relationship between them is the “is in the middle of” relation.  

***Definition***

An **object** or **constant** is a particle of a proposition, which refers to something.

A **predicate** is a particle of a proposition, which asserts a claim about objects.

If the predicate *P* asserts a claim about *n* objects, then *P* is said to have **arity** *n*.

When a predicate is asserted about an object, this is an **atomic formula**.

If the arity of a predicate is 1, then we call it a **property**.  

If the arity of a predicate is 2, then we call it a **binary relation**.

If the arity of a predicate is 3, then we call it a **ternary relation**.

***Exercise***

Consider the proposition “The average of 5, 6, and 7, is 6.”

Identify the objects, the predicate, and the arity of the predicate.

There is a helpful way to visualize a property.  Take for example, a party in which some people are math majors, some are philosophy majors, some are computer scientists.  “Being a philosophy major” is a property—likewise for all the other majors.  

Moreover, some people may have more than one of these majors, and some have none of these majors.  

![image.png](Chapter%204%20Predicates,%20Objects,%20and%20Types/image.png)

We can identify the property of “being a math major” with the set of people who are math majors:  It is a set of five people, according to the diagram above.  

Likewise we can think of the property of being a CS major as identified with the set of people who are CS majors. And so on for philosophy majors.

This Venn diagram also represents that two people are triple-majors: Math, philosophy, and computer science.  

And there is just one person who is a double-major in math and philosophy (who is not also majoring in computer science).

And there are two people who have none of these majors.  

***Exercise***

Suppose that the five people who are math majors are Adam, Brooke, Cecil, Devin, Eudoxus.  

Suppose that the five people who are philosophy majors are Cecil, Devin, Eudoxus, Florian, and Gal.

Suppose that the five people who are computer science majors are Adam, Devin, Eudoxus, Gal, and Hikari.

1. Who is double-majored in math and philosophy?
2. Who are the triple-majors?
3. So far we have listed eight people, from Adam to Hikari.  But there were supposed to be ten people at the party.  What gives?

***Exercise***

Explain the difference between saying that “3 is both not even and not prime” and “3 is not both even and prime”.  Assess the truth of each.  

Above, we just presented a visualization for properties.  Let’s next see how we can visualize a binary relation.

Consider, for example, the binary relation “is taller than”.  Perhaps this time we look only at Adam, Brooke, Cecil, and Devin.  

Let’s say that 

- Adam is taller than Brooke and Cecil but not Devin.
- Brooke is taller than Cecil.

The following diagram represents the relation.  

![image.png](Chapter%204%20Predicates,%20Objects,%20and%20Types/image%201.png)

We use the symbols *a* for Adam, *b* for Brooke, *c* for Cecil, and *d* for Devin.

An arrow runs from *a* to *b* because Adam is taller than Brooke.  Likewise for any other pair of “nodes” in the diagram.

Notice that there is no arrow between *a* and *d* in any direction.  This indicates that Adam is not taller than Devin and that Devin is not taller than Adam.  Hence, they must have the same height!

***Exercise***

Consider the numbers 1, 2, 3, 4, 5.  

Consider the relation on these numbers, “divides”.  So for example, 2 is in the relation with 4, but 3 is not in the relation with 5.  

Make a node-and-arrow diagram for this relation.

# Functions and Terms

If our interest is in mathematics, then we want a way to manage expressions like $2^2+1$. 

This is fundamentally an object (in this example, it is equivalent to the number 5), but it is an object that we refer to *by way of* functions. 

First we use the “exponent” function applied to the numbers 2 and 2, to obtain $2^2$.

Then on top of that we apply the “addition” function to the numbers $2^2$ and 1 to obtain the result $2^2+1$.

***Exercise***

Consider the expression 

$$
e^2\sin(4-\pi)
$$

Explain how this is constructed from numbers and functions, in the same way that I explained above how $2^2+1$ is. 

Anything that refers to an object is called a “term”.

The simplest term is just a constant symbol, which directly refers to an object. 

A more complex term is the result of applying a function to one or more objects.  An example is $2^2$, which results from applying the exponentiation function to the objects 2 and 2.   

And of course terms can become more and more complicated by involving more and more function applications. 

Just like relations, also functions have an arity, which is the number of terms to which it applies. The arity of $\sin x$ is 1, because the $\sin$ function applies only to the term *x*.

Addition is a function with arity 2, since $x+y$ applies to the terms *x* and *y*.

In general, for any natural number *n*, a function may have arity *n*.

Here we've discussed mathematical functions, but there's no reason why they have to be mathematical. Every person has a mom, so there is a function with input any person, and outputs that person's mom. If we call this function *f*, then in usual function notation, 

$$
f(\text{Jen})=\text{Evalyn}
$$

Every animal has a species name, so there is a function which takes input any animal and outputs is species name.  If we call this function *f* then 

$$
f(🦎)=\text{Anolis carolinensis}
$$

***Definition***

Every object is a **term**. 

If *f* is any function with arity *n,* then *f* applied to any *n* terms, is a **term**.

***Exercise***

Suppose that the mother of Jen’s mom is Mary.  

Use function notation to express this, where *f* is the function which maps a person to their mom.  

# Terms, Syntax and Semantics

## Symbols

We will often use lower-case italics Latin letters, *a* through *z*, as symbols for objects, and for functions.  

We will use upper-case italics Latin letters, *A, B, …, Z* as symbols for predicates.

Therefore a lower case letter will be ambiguous: Is it an object or a function symbol? The only way to be sure is to say so in advance. 

- Note: We will use the “[Fraktur](https://en.wikipedia.org/wiki/Fraktur)” font for the semantics.
    
    It can be important to keep clear: which things are in the syntax and which are in the semantics.  They are closely related but subtly different.
    
    Therefore when something is syntactic I will use the usual italics symbols which are familiar in mathematics.  
    
    To distinguish them, semantic objects will be written in Fraktur.  This can be a little off-putting, because the symbols are a bit alien to students.  However, it is a slightly common convention, and the best way that I know of to keep these distinct in the reader’s mind.  
    
    A Fraktur ‘f’ is written $\mathfrak f$.  A Fraktur ‘x’ is written $\mathfrak x$.  A Frakturn U is $\mathfrak U$, and I is $\mathfrak I$.  
    
    If in doubt, you can always see the Wikipedia page to reference other Fraktur symbols.  
    

So for example if *a* is used to denote the number $\mathfrak 0$ (Fraktur 0), and *f* is the symbol for the function $\mathfrak f(\mathfrak x) = \mathfrak x+1$, then

$$
f(a)
$$

is a term (which denotes the number $\mathfrak 1$, which is Fratur 1). 

On the other hand, $a(f)$ is just nonsense: it's not even a word in the language. We established that we use *a* as an object symbol, and therefore writing it in the place of a function symbol results in a string which is not a part of our language.  

Conversely if we decide that *f* denotes $\mathfrak{3.14}$ and *a* denotes the $\mathfrak{sin}$ function (so $a(x)$ is associated with $\mathfrak{sin(x)}$), then

$$
a(f)
$$

is a term which denotes the number $\mathfrak{sin(3.14)}$.  This time $f(a)$ is nonsense.

## Prefix and Infix

(Note: In this section, we will use all symbols to refer to syntax.  Therefore we will not see Fraktur font here.)

Our usual function notation does not agree with our usual notation for addition, subtraction, and many other familiar functions. 

The standard function notation is “prefix” notation, where the function symbol is written first, and the terms afterward. For example if *f* and *g* are function symbols each with arity 2, and *a,* *b,* and *c* are object symbols, then

$$
f(f(a,a),g(b,c))
$$

is a term written with prefix notation. 

On the other hand, addition has symbol +, and subtraction is -, and the expression

$$
3-(2+1)
$$

is a term written in “infix” notation. With infix notation, the function symbol is written *between* two terms. 

Infix notation is visually nice, and it is familiar. 

However, it is valid only for functions of arity 2. Therefore we will tend to write our functions with prefix notation, since we generally need to handle functions of any arity. 

Therefore instead of “1+2” we will write 

$$
+(1,2)
$$

Now I know what you’re thinking — you’re thinking, that’s terrible.  That’s ugly.  That’s confusing.

I agree. Because that is so unpleasant, we will still write 1+2. But the infix notation will be *unofficial*.  In the language of computer science, we will regard 1+2 as “[syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)” for the proper expression +(1,2).

***Exercise***

Consider the expression (1-2)+(3-4).  Do not simplify this expression.

Write this expression using prefix notation.  (Hint: The prefix notation for 1+2 is +(1,2).)

## Syntax

***Definition***

*Syntax*

Suppose that $\text{Objs}$ is any nonempty set of symbols, which we call the **object symbols**, or **constant symbols**.  Suppose that $\text{Funcs}$ is any nonempty set of symbols, disjoint from $\text{Objs}$, which we call the **function symbols**.  

We assume further that neither $\text{Objs}$ nor $\text{Funcs}$ contains any of the other symbols in our language: $\neg,\land,\lor,\to,\leftrightarrow$, and does not contain parentheses or commas.  

- Note: From now on, if we will call the symbols $\neg,\land,\lor,\to,\leftrightarrow$, parentheses, and commas, collectively “**reserved symbols**”.
    
    Saying that $\text{Objs}$ and $\text{Funcs}$ cannot include the reserved symbols, is a tedious thing to have to say.  Naturally, nobody would ever way to use these reserved symbols for objects or functions.
    
    However, if we didn’t make this requirement explicit, our expressions would become unreadable.  For example, if we allowed the use of the reserved symbols for functions and objects, the expression $\land(\neg)$ would become an acceptable string in our language.  But knowing that $\land$ is supposed to represent conjunction, this make our strings ambiguous and confusing.  
    

Let $\text{Arity}: \text{Funcs}\to \Bbb N$ be a function from the function symbols to the natural numbers, which we call an **arity function**.  

Every object symbol is a **term**.  

If $f\in \text{Funcs}$, and if $n=\text{Arity}(f)$, and then if $t_1, t_2, …, t_n$ is any collection of *n* terms, then $f(t_1,…,t_n)$ is a **term**.

- Note: Is *n* part of the syntax or the semantics?
    
    I have made a rule: Syntactic objects are written in italics, semantic objects are written in Fraktur.  
    
    I just wrote *n* in italics.  Does that imply that *n* is in the syntax?
    
    Not exactly.  It is actually part of what we call the “metalanguage”.  The metalanguage is not the language that we are studying.
    
    The language that we are studying is the language which has object symbols, function symbols, and more to come later on.  To distinguish it from the metalanguage, we often call this the “object language”.  
    
    The metalanguage is the language that we use to *talk about* the language that we are studying.  The metalanguage is the language that I am using right now as I write this sentence.  It is the language that I am using to communicate with you — it is natural English.
    
    That is where the number *n* lives.  It is just us (you and me) counting the number of terms which the symbol *f* may apply to.  
    
    Is anything else here in the metalanguage?  Technically, yeah — the symbols in $\text{Objs}$ are each in the object language.  Likewise for $\text{Funcs}$.  But although each individual symbol is in the object language, *the set itself* is not.  The set $\text{Objs}$ is in the metalanguage.  
    
    But please don’t worry too much about this distinction.  For most practical purposes, it will not be very important that you distinguish the metalanguage from the object language.  I only mention it here to satisfy anyone who was curious about the question.
    

To demonstrate the use of this definition, suppose that $\text{Objs} = \{a,b\}$ and $\text{Funcs} = \{f,g\}$, and $\text{Arity}(f) = 3$ and $\text{Arity}(g)=2$.

*a* is a term, and so is *b*, using the fact that all object symbols are terms.

Therefore $f(a,b,a)$ is a term, because the arity of *f* is 3, and it is applied to 3 terms.

Therefore $g(f(a,b,a),b)$ is a term, because its arity is 2, and it is applied to 2 terms.

***Exercise***

Decide which of the following are terms, using the same symbols as above.

1. $f$
2. $f(f,g,f)$
3. $a(b)$
4. $f(g(a,b), g(b,a), g(a,a))$

## Semantics

To discuss the semantics of a term, we have to start from the idea that an expression has some “domain”.  The domain is the set of all objects that one can refer to.  

Usually the domain is determined by context.  For example, if we are discussing number theory and I say that “every number divisible by 2 is even”, implicitly I am making a claim about the integers.  That is to say, the context determines that the domain is the integers.  

If we’re at a party and I say that “nobody here is in the NBA”, context suggests that the domain means “everyone in this house”.  It would be foolish to respond with “Well actually, Lebron James is here in the sense that he’s on the same planet that we’re on.”

But one way or another, expressions have some domain.  The job of object symbols is to refer to the elements of the domain — this is their semantics.  

The job of function symbols is to denote a function from the domain to the domain.  For example, recall the function which assigns to each person their mother, discussed earlier.  The domain is all people—the function takes inputs in that domain, and returns outputs in that domain.  

***Definition***

*Semantics*

Let $\mathfrak U$ be any nonempty set, which we call the **domain** or **universe**.

Let $\text{Objs}$, $\text{Funcs}$, and $\text{Arity}$ be the same syntactic objects, as before.  

Let $\frak I$ be an association of object symbols with elements of the domain, which we call an **interpretation**.  

- Note: Technically $\frak I$ is a function.
    
    An “association” is just a synonym for “function”.  So if you prefer to be technical, everywhere that you see “association” you can replace it with “function”.  
    
    However, we have not yet formally introduced the idea of a function.  We will in fact use the discussion of logic here, to help us to define what a function is in the most technical way possible.  
    
    Therefore, until we have the formal definition of a function, I encourage a somewhat more casual and heuristic way of thinking about what an “interpretation” is.  Just think: on the one hand is syntax, the symbol; on the other hand we have the semantics, the things the symbols are talking about.  The interpretation “glues a semantic object onto a symbol”: It associates them together.  
    
    - Note: Is all of this circular?
        
        You might read this and wonder, “Wait a minute.  If we define logic in terms of functions, and we define functions in terms of logic — does this expose the entire theory as a circular definition?
        
        No, the problem is not in the rigorous and formal definitions.  Those can be defined non-circularly.  
        
        You can find a strictly formal and well-defined presentation of all of these ideas in, say, Bourbaki or in Jech’s textbook, *Set Theory*.  However, most people who are new to this subject find any sufficiently rigorous presentation incomprehensible.  Not only that, but these texts are extremely long, and sometimes never fully present other mathematical subjects, like calculus or graph theory.  
        
        This course is intended to give you the basic ideas, vocabulary, and techniques of reasoning which allow you to move on to other mathematical subjects — it is not intended as a fully rigorous course in logic or set theory (where the theory of functions is most naturally developed).  
        
        This means that if you are interested in graph theory, you still get the foundations of logic that you need, without the excruciatingly confusing and long presentation of a fully rigorous theory of sets.  
        
        It also means that, if you are interested in logic or a fully rigorous theory of sets, then you will find those subjects much easier to understand after you have finished this course.
        

If $a\in \text{Objs}$ then we associate to *a* some element of the domain.  If that element is $\mathfrak u\in \mathfrak U$, then we write 

$$
a^{\mathfrak I}=\frak u
$$

We call $\frak u$ the **interpretation** of *a* in $\frak I$.  

If $f\in\text{Funcs}$ and $n=\text{Arity}$, then we associate with *f* some function of arity *n*.  If this function is $\frak f : \frak U^n \to \frak U$, then we write

$$
f^{\mathfrak I} = \frak f
$$

The function $f^{\mathfrak I}$ is the **interpretation** of *f*.

If $t_1,…,t_n$ are terms, then 

$$
f(t_1,...,t_n)^{\mathfrak I} = f^{\mathfrak I}(t_1^{\mathfrak I},...,t_n^{\mathfrak I})
$$

To demonstrate the use of this definition, suppose that we have the domain *U* which is the set of all people.  We have the object symbol *j*, and the 1-ary function symbol *m*.  This establishes the syntax that we will work with.

To establish the semantics, let’s use the interpretation, $\mathfrak I$, in which 

$$
j^{\mathfrak I} = \text{Jennifer}
$$

Moreover, suppose that $m^{\mathfrak I}:\frak U \to \frak U$ is the function which assigns to a person their own mother.  Let’s assume that Evelyn is the mother of Jennifer.  

It then follows, from all of this, that 

$$
\begin{aligned}
 m(j)^{\mathfrak I} &= m^{\mathfrak I}(j^{\mathfrak I}) \\
 &= m^{\mathfrak I}(\text{Jennifer}) \\
 &= \text{Evelyn}
\end{aligned}
$$

***Exercise***

What does $m(m(j))^{\mathfrak I}$ refer to?

***Exercise***

The point of this exercise is to reinforce the idea that a given syntax can have many different interpretations.  

Use *j* as an object symbol, *m* as a 1-ary function symbol — all of this is the same as before.  

But this time, interpret *j* as the number 1 and *m* as the function that maps every integer to the next larger integer.  Call this interpretation $\mathfrak J$ (Fraktur ‘J’).  

What is $j^{\mathfrak J}$?  What is $m(j)^{\mathfrak J}$?  What is $m(m(j))^{\mathfrak J}$?

# Predicates and Objects, Syntax and Semantics

Suppose that we want to represent the expression “The ball is red”. If we use *b* to represent the ball, and *R* to represent the “is red” property, then

$$
R(b)
$$

is how we express that “the ball is red”.

If we wish to represent a proposition formed by applying the property *P* to the term *t* then we will write this as 

$$
P(t)
$$

Things can get significantly more complicated by

- Using propositional connectives.
- Using complex terms.
- Using predicates with arity greater than 1.

For example, suppose that we want to express “the matrix *M* is not similar to matrix *N*, but it's similar to the transpose of *N*”.

With a reasonable interpretation of the following symbols, we can express this with

$$
\neg S(m,n) \land S(m,t(n))
$$

**Definition**

*Syntax*

We extend the syntax of terms, meaning that $\text{Objs},\text{Funcs}, \text{Arity}$ are as before.

We now assume, further, that there is a set of symbols, $\text{Preds}$, which does not overlap with $\text{Objs},\text{Funcs}$ or the reserved symbols.  We call this the set of **predicate symbols**.

We also extend $\text{Arity}$ to not just specify the arity of a function symbol, but also to specify the arity of a predicate symbol.  

If *P* is a predicate, then $\text{Arity}(P)$ is a natural number, call it *n.*  If $t_1,…,t_n$ is a collection of *n* terms, then **$P(t_1,…,t_n)$ is an **atomic proposition**.

A **predicate formula** is any proposition that results from applying the syntax of propositional logic, but this time to the atomic propositions rather than the propositional variables.

For example, $T(a,b)$ is an atomic proposition, assuming that *a* and *b* are object symbols and *T* is a predicate with arity 2.

The expression $Z(q, r, s)\leftrightarrow Y(p)$ is not atomic but it is a predicate formula, assuming that the lower case letters are object symbols and the upper case letters are predicates with appropriate arity.

 ***Exercise***

What arity must $Z$ and $Y$ have above, to ensure that the expression is a predicate formula?

***Exercise***

For the following expression, decide which symbols must be objects, predicates, or functions, in order for the expression to be a predicate formula. Also specify every arity of functions and predicates. 

$$
P(a(b(c,d)), t(c,c)) \to \neg Q(b(d,d))
$$

***Definition***

*Semantics*

We extend the semantics of terms.  This means that all of the symbols, $\text{Objs},\text{Funcs},\text{Arity},\frak U, \frak I$ are all defined as before. 

In this extension we now further give a semantics to expressions containing predicate symbols.

Let *P* be a predicate with arity *n*.  Then $\mathfrak I$ associates *P* with a subset of $\frak U^n$.  If $\frak P\subseteq \frak U^n$ is that subset, then we write 

$$
P^{\frak I} = \frak P
$$

The subset $P^{\mathfrak I}$ is called the **denotation (in** $\mathfrak I$**)** of the symbol *P*.  

So far our semantics has be concerned with interpreting the denotations of individual symbols.  

However, a semantics is not just supposed to determine meaning but also determine the truth-values of propositions.  Since this is a somewhat different job, then we have a somewhat different ma

The pair, $(\mathfrak U, \mathfrak I)= \mathfrak M$ is called the **model**.  The model assigns truth-values to predicate formulas.

If $(\frak a_1,\frak a_2,\dots,\frak a_n)\in P^{\mathfrak I}$ we say that predicate *P* is **satisfied** by $\frak a_1,…, \frak a_n$.  

If we have object symbols $c_1^{\mathfrak I}=\frak a_1, …,c_n^{\mathfrak I}= \frak a_n$, then 

$$
(P(c_1,...,c_n))^{\mathfrak M} = \frak T
$$

In this case we say that **the proposition $P(c_1,…,c_n)$ is true**.  

Otherwise *P* is **not satisfied** by $\frak a_1,…,\frak a_n$ and **the proposition $P(c_1,…,c_n)$ is false**.  In that case we may write 

$$
(P(c_1,...,c_n))^{\mathfrak M} = \frak F
$$

If $\phi$ is any predicate formula, then $\phi^{\mathfrak M}$ is true or false ($\frak T$ or $\frak F$), using exactly the same rules for propositional logic.  The only difference is that propositional variables are now replaced by atomic propositions.

For example suppose that the domain of discourse is $\mathcal U = \Bbb Z$ and the binary relation $L(x,y)$ represents “*x* is less than *y*”.  We could then express “1 is less than 2” by writing $L(o,t)$.  Implicitly I’m using *o* as the object symbol for 1, and *t* for 2.  

Because this sentence is true, therefore in this example, 

$$
L(o, t)^{\mathcal M} = T
$$

Now notice that we could keep exactly the same symbols, like *L, o, t*, and get a proposition with a different truth-value if we just change the model.  

Suppose that the model, $\mathcal M_2$, now has domain $\mathcal U_2=\{\text{Olga}, \text{Tina}\}$, let’s imagine these are two sisters, with Olga the older sister.  

We will use the denotation 

$$
o^{\mathcal M}=\text{Olga}\\
t^{\mathcal M} = \text{Tina}
$$

If *L* then represents “*x* is younger than *y*”, we then have 

$$
L^{\mathcal M_2} = \{(\text{Tina},\text{Olga})\}
$$

because Tina is assumed to be younger than Olga.  

In this example, therefore, 

$$
L(o,t)^{\mathcal M_2} = F
$$

The point that I’m emphasizing here is that the truth of an expression is primarily determined by the choice of the model.  In a sense, the job of the model is to decide which sentences are interpreted as true sentences, and which are false.  

In fact, that is precisely what a model does in propositional logic—now in predicate logic, it does so, but only *through* determining the denotations of object and predicate symbols.  

- Our definition of the syntax and semantics could be more formal and detailed.
    
    As I’ve mentioned at the beginning of this section, we are not giving a full and rigorous treatment of syntax and semantics because doing so would occupy several more chapters of study.  Being much faster and less formal will still allow us to use logic in order to study mathematics, so for our current purposes, not much is lost by skipping the deep formalism of syntax and semantics here.
    
    But for those interested, there are many books which cover the topic.  A famous one is *A Mathematical Introduction to Logic* by Enderton, and another is *A Friendly Introduction to Mathematical Logic* by Leary and Christensen.
    

***Exercise***

Using the symbols $L,o,t$ as before, and a model, $\frak M_3$, such that 

$$
o^{\frak M_3} = \frak 1\\
t^{\frak M_3}= \frak 2\\
L^{\frak M_3} = \{(\frak{1,1}),(\frak{1,2}),(\frak{2,2})\}
$$

Determine $L(t,o)^{\frak M_3}$ and $\neg L(o,o)^{\frak M_3}$ and $L(t,t)^{\frak M_3}$.

***Exercise***

Let $P(x),Q(x)$ be predicates, and $q,r,s$ be object symbols.  Let $\frak M$ be a model with domain $\frak U = \{\frak{a,b,c,d}\}$.  Suppose further that 

$$
q^{\frak M} = \frak a\\
r^{\frak M} = \frak a\\
s^{\frak M} = \frak b\\
P^{\frak M} = \{\frak{a,d}\}\\
Q^{\frak M}=\{\frak{a,b,c}\}
$$

Determine 

1. $P(q)^{\frak M}$
2. $P(r)^{\frak M}$
3. $((\neg Q(s))\to Q(q))^{\frak M}$
4. $(P(r)\land Q(r))^{\frak M}$

***Exercise***

Using the same symbols, $P,Q,q,r,s$ as in the previous exercise, create a new model.

Then in the model that you created, evaluate the same four propositions as in the previous exercise.

## Infix and Prefix Predicates

In the subsection above, we used *L* as the symbol for the “*x* is less than *y*” relation.

Of course we don’t like that! We’re so used to representing this by $x < y$.  

Just as with functions, also with binary relations, we often prefer to write them with infix notation.  Examples include less-than, equals, subset, member-of, and others.  Their symbols are 

$$
<, =, \subseteq, \in
$$

We like these symbols to be used as infix symbols!  

However, infix notation is only sensible for binary relations.  Since our interest is in more general relations of any arity, we will not officially adopt infix notation.  

That is to say, our official policy is to say that the proposition “1 equals 1” will be written 

$$
=(o,o)
$$

where *o* is a symbol for the number 1.  This is in prefix notation, where the = symbol is the symbol for the relation.  

But, of course, because we don’t like this — therefore we will often *unofficially* write $o=o$.  We just always keep in mind that the unofficial writing is syntactic sugar for the official expression, $=(o,o)$.

# Famous Mathematical Relations

## Equality

An obvious, useful example of a relation, is equality!  

Our usual relations are written with prefix notation, as we have been doing up to this point.  An expression like $R(x,y)$ is called “prefix notation” because the relation symbol is *R*, which is written before the objects.  

However, equality is typically written with infix notation.  So while we’re used to seeing and writing 

$$
x=1
$$

if we insisted on using prefix notation, this would be written as 

$$
=(x,1)
$$

But of course, for a relation as important as equality, we will give it special notation.  That is to say, we will persist in using the infix and familiar $x=1$.  But you should understand that this is not meaningfully different from the “relation notation” that we have been using up to this point.  

Note that if we have the domain $U = \{1,2,3,4\}$ then the diagram of this relation is 

![image.png](Chapter%204%20Predicates,%20Objects,%20and%20Types/image%202.png)

The diagram shows you that: Everything stands in this relation to itself, and not to anything else.  With a moment’s thought, that is obviously correct for the equality relation!

## Set Membership and Subset

Another important relation, which we already know about, is set membership.  We are used to using infix notation for this too.  Instead of $\in ( 1, \{1,2,3\})$ we prefer 

$$
1\in \{1,2,3\}
$$

Of course the subset relation is a relation between sets, again with infix notation.

## Number Relations

All of the ordering relations of “less than”, “less than or equal to”, “greater than”, and “greater than or equal to” are examples of relations between numbers.  

The “*x* divides *y*” relation is defined for integers where $x\ne 0$.  

# Types

#TODO