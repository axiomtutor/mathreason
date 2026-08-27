# Lesson 2: Data Types

The basic idea of types is pretty simple.  It will, however, prove to be a surprisingly helpful idea later on.  

## Natural Numbers

One of the simplest data types is the `natural numbers`, which we’ve already seen.  (I will write all types using the format `type`.)  

This is the set 

$$
\Bbb N = \{1,2,3,\dots\}
$$

From the set theory perspective, the natural numbers are a set.

From the type theory perspective, we think that the type of the object 1, is “`natural number`”. And the type of 2 is also “`natural number`” and so on.  

These are not contrary perspectives, they’re complementary.  They say the same thing but with different language, and sometimes one language is more useful than the other.  

## Integers

The next more complicated data type is the `integers`.  

$$
\Bbb Z = \{\dots,-2,-1,0,1,2,\dots\}
$$

One can think of this as the “set of naturals and their negatives, and zero”.

Already it’s somewhat worth thinking about how the idea and language of types is useful.  Consider the numbers 1 and 2.  These both have type `natural` but they also both have type `integer`.  So which one are they?

Well, both.  There’s no reason why an object has to have a single type.

But now consider: If we treat 1 and 2 like natural numbers, what will we say is the value $1-2$?  

As `naturals`, we prefer that the operations on `naturals` result in `naturals`.  But $1-2=-1$ is not a `natural`, it’s an `integer`.

So if we regard 1 and 2 as `naturals` we will actually say that $1-2$ is simply *undefined*!  

However, if we regard 1 and 2 as `integers`, now it’s completely fine to regard $1-2 = -1$, since the operation on `integers` results in an `integer`.

## Rationals

The next more complicated data type is the `rational numbers`.  

$$
\Bbb Q = \left\{ \frac p q : p,q\in\Bbb Z, \text{ and } q\ne 0 \right\}
$$

Put briefly, these are the numbers which are a ratio of two integers.  

Since the set builder notation can be a bit confusing, let’s list a few example `rationals`. 

$$
\frac 1 2, \frac 2 4, \frac {-6}{3}, \frac 6{-3}, \frac 0 1, \frac 0 2 \in \Bbb Q
$$

Note that some of these numbers are in fact the same number.  For example $\frac 1 2 = \frac 2 4$.  Also $\frac {-6}3 = -2 = \frac{6}{-3}$, and $\frac 0 1 = 0 =\frac 0 2$.

It’s probably worth thinking about a few numbers which are not `rational`.  We will discuss this idea at greater length later, but you may already be familiar with the fact that 

$$
\sqrt 2, e, \pi \notin \Bbb Q
$$

There are more data types, like the `reals`, `imaginary`, `quaternions`, and `octonions`.  We will introduce other data types as well, as the need arises.  But at least for now, the `naturals`, `integers`, and `rationals` will already give us quite a lot to talk about.

## Composite Data Types

The data types discussed already, are in some sense “primitive”.  They are not made up of smaller and simpler components—at least, not in an obvious way.

- If you know a lot about set theory, and want to argue with me about this, please shut up.
    
    I know, I know: the numbers can be constructed from sets.  I don’t want to confuse students with this fact right now.
    

But then what about a set like $X = \{1,2,3\}$? Certainly the *elements* of *X* can be regarded as `naturals` (or `integers`, or `rationals`, but for now let’s just say `naturals`).  But what about *X* itself?  

What is the type of *X*?

The type of *X* is `set of naturals`.  

This is a data type built from other data types, and so in that sense, it is “composite”.  It is composed from simpler components.

Here’s a fun one: What is the type of $Y=\{\{1,2\}, \{2,3\}, \{0\}\}$?

Well, first let’s type-check each element.  $\{1,2\}$ has type `set of naturals`, and so does $\{2,3\}$.  But then $\{0\}$ has type `set of integers`.  

Well, then we must say that *Y* is a set, and each element is itself a `set of integers`. Therefore *Y* has type `set of set of integers`. 

Of course, we couldn’t say that *Y* has type `set of set of naturals` because this would be incorrect.  It would imply that every element is itself a `set of naturals`, which would mean $\{0\}$ has type `set of naturals`.  But that would imply that 0 has type `natural`, which it doesn’t.

I think that’s very clear—but couldn’t we also say that *Y* has type `set of set of rationals`?  I mean, technically we could say that $\{1,2\}$ is a `set of rationals` because both 1 and 2 can be regarded as `rationals`.

Yes, but we tend to prefer the narrowest type that is still accurate.  Since `integer` is narrower than `rational`, then we prefer to regard these numbers as `integers`.