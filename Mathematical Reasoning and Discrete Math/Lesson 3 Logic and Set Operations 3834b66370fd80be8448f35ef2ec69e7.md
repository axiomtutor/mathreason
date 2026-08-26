# Lesson 3. Logic and Set Operations

# Logic in Mathematics

The main tool for mathematicians is the proof of theorems. Therefore logic is fundamental to our studies.

It may be helpful to see an example proof right away.  Later as we discuss logic, you can observe how thing ideas from logic are used in mathematical proof.

***Theorem***:

Every integer divisible by 6, is divisible by both 2 and 3.

***Proof***:

Suppose that *n* is an integer divisible by 6, which means that $\frac n6 = k$ is an integer.

But then we have $\frac{n}{2\cdot 3} = k$ and therefore 

$$
\frac n 2 = 3k
$$

Since *k* is an integer, then also 3*k* is an integer.  

Therefore we have shown that $\frac n 2$ is an integer, which proves that *n* is divisible by 2.  

Also, from $\frac n{2\cdot 3} = k$ we could infer 

$$
\frac n 3 = 2k
$$

Again because *k* is an integer therefore 2*k* is an integer, which shows that $\frac n 3$ is an integer.  This proves that *n* is divisible by 3.

Therefore *n* is divisible by 2 and 3.

$\Box$

- For anyone who wants to complain about the definition of “divisibility”:
    
    Don’t worry, I will give the usual number theory definition of divisibility later.
    
    The definition I am using here is “*a* divides *b* means that $\frac b a$ is an integer”.  This definition is equivalent to the number theory definition, and is more familiar and intuitive for most students.  
    
    In order to not have a long explanation of divisibility, I have decided to use the definition that most people are used to.
    

# Propositions

A proposition is any sentence which is either true or false.  

Here are some propositions:

- The capitol of Slovakia is Lubljana.
- 1+1=3.
- There is a tallest person.

Here are some sentences which are not propositions:

- Hooray!
- Please get me some bread from the store.
- What time is it?

In logic our most essential object of study is propositions.  

# Conjunction and Intersection

Consider the sentence “The capitol of Slovakia is Lubljana, and 1+1=3.”  A strange sentence, I grant you that, but still a proposition which can be evaluated!

This sentence is false.