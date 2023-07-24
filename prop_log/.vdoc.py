# type: ignore
# flake8: noqa
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
import pyparsing

class Proposition:
    pass

class PropVariable(Proposition):
    def __init__(self, v):
        assert (type(v) == type("") and len(v) == 1) 
        self.v = v
    def __str__(self):
        return(self.v)
    def eval(self, prop_eval):
        return prop_eval(self.v)

class Negation(Proposition):
    def __init__(self, beta):
        assert issubclass(type(beta),Proposition)
        self.neg = beta
    def __str__(self):
        return("(not " + str(self.neg) + ")")
    def eval(self, prop_eval):
        return(1 - self.neg.eval(prop_eval))

class Disjunction(Proposition):
    def __init__(self, beta, gamma):
        assert issubclass(type(beta),Proposition) \
            and issubclass(type(gamma),Proposition)
        self.left, self.right = beta, gamma
    def __str__(self):
        return("(" + str(self.left )+" or " + str(self.right) + ")")
    def eval(self, prop_eval):
        l, r = self.left.eval(prop_eval), self.right.eval(prop_eval)
        return( l + r - l*r )

def parseTree(p):
    if type(p) == type(""):
        return PropVariable(p)
    if len(p) == 1:
        return parseTree(p[0])
    if len(p) == 2:
        assert( p[0] == "not" )
        return Negation(parseTree(p[1]))
    
    if len(p) == 3:
        if p[1] == "or": return Disjunction(parseTree(p[0]), parseTree(p[2]))
        raise Exception("length 3 list but unrecognized middle token")
    raise Exception("length of list unrecognized")

terms = pyparsing.Word(pyparsing.alphas) | "not" | "and" | "or" | "if" | "then" | "iff" 
nesting = pyparsing.nestedExpr( '(', ')', content=terms )

def shape(s): 
    p = nesting.parseString("("+s+")")[0]
    
    return parseTree(p)

def eval(prop_string, prop_eval):
    return bool((shape(prop_string)).eval(prop_eval))
#
#
#
#
#
def all_prop_vars(p):
    if type(p) == PropVariable:
        return set(p.v)
    if type(p) == Negation:
        return all_prop_vars(p.neg)
    if type(p) == Disjunction:
        return set(all_prop_vars(p.left)).union(set(all_prop_vars(p.right)))
#
#
#
#
#
import copy
def all_var_evals(var_set):
    # The bucket is an "accumulator" variable, into which I will place each evaluation as I 
    # construct them.  The bucket will then be returned at the end.
    bucket = []
    var_list = list(var_set) # Gives the variables an indexing (ordering)
    for row in range(2**(len(var_set))): # 2^n evaluations
        to_bin = row 
        func_list = []
        while to_bin != 0:
            func_list.insert(0, to_bin % 2)
            to_bin -= to_bin % 2
            to_bin //= 2
        while len(func_list) < len(var_list):
            func_list.insert(0,0)
        bucket.append(lambda x, fl=func_list: func_list[var_list.index(x)])

    return bucket

proposition = "P or Q"
evals = all_var_evals(all_prop_vars(shape(proposition)))
for e in evals:
    print(eval(proposition, e))
#
#
#
