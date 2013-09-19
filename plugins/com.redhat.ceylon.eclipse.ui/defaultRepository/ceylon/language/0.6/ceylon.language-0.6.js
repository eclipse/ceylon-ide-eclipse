(function(define) {
define(function(require, exports, module) {
//the Ceylon language module
var $$METAMODEL$$={"ceylon.language.impl":{"rethrow":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Exception"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Rethrows an exception without declaring it. This is used as a cheap replacement for\nUnsafe.throwException() in our Java Util class, used by the metamodel."],"by":["Stephane Epardaud"]},"$nm":"rethrow"}},"$mod-name":"ceylon.language","ceylon.language.meta.declaration":{"Import":{"satisfies":[{"$pk":"ceylon.language","$nm":"Identifiable"},{"$pk":"ceylon.language","$nm":"Annotated"}],"$mt":"ifc","$an":{"shared":[],"doc":["Model of an `import` declaration \nwithin a module declaration."]},"$at":{"shared":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this imported module is shared."]},"$nm":"shared"},"container":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"Module"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The containing module."]},"$nm":"container"},"optional":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this imported module is optional."]},"$nm":"optional"},"name":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The name of the imported module."]},"$nm":"name"},"version":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The compile-time version of the imported module."]},"$nm":"version"}},"$nm":"Import"},"Variance":{"of":[{"$pk":"ceylon.language.meta.declaration","$nm":"invariant"},{"$pk":"ceylon.language.meta.declaration","$nm":"covariant"},{"$pk":"ceylon.language.meta.declaration","$nm":"contravariant"}],"$mt":"ifc","$an":{"shared":[],"doc":["Variance information."]},"$nm":"Variance"},"AnnotatedDeclaration":{"of":[{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"Module"},{"$pk":"ceylon.language.meta.declaration","$nm":"Package"}],"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"Declaration"},{"$pk":"ceylon.language","$nm":"Annotated"}],"$mt":"ifc","$an":{"shared":[],"doc":["Declaration which can be annotated, such as:\n\n- [[NestableDeclaration]]\n- [[Module]]\n- [[Package]]\n\nYou can query annotations that are placed on a given annotated declaration with:\n\n"]},"$m":{"annotations":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Annotation"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Annotation"}],"$pk":"ceylon.language","$nm":"Annotation"}],"variance":"out","$nm":"Annotation"}],"$an":{"shared":[],"formal":[],"doc":["The annotation instances of the given \nannotation type on this declaration.\n\nFor example, you can list all the [[See|ceylon.language::See]] \nannotations on [[List|ceylon.language::List]]\nwith the following code:\n\n    for(annot in `interface List`.annotations<See>()){\n        for(elems in annot.programElements){\n            print(\"See: ``elems``\");\n        }\n    }\n\nAlternatively, you can use the [[ceylon.language.meta::annotations]] \nfunction.\n"]},"$nm":"annotations"}},"$nm":"AnnotatedDeclaration"},"OpenTypeVariable":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}],"$mt":"ifc","$an":{"shared":[],"doc":["An open type variable."]},"$at":{"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"TypeParameter"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This type variable's type parameter declaration."]},"$nm":"declaration"}},"$nm":"OpenTypeVariable"},"OpenIntersection":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}],"$mt":"ifc","$an":{"shared":[],"doc":["An open intersection type."]},"$at":{"satisfiedTypes":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This intersection's list of satisfied open types."]},"$nm":"satisfiedTypes"}},"$nm":"OpenIntersection"},"OpenType":{"of":[{"$pk":"ceylon.language.meta.declaration","$nm":"nothingType"},{"$pk":"ceylon.language.meta.declaration","$nm":"OpenClassOrInterfaceType"},{"$pk":"ceylon.language.meta.declaration","$nm":"OpenTypeVariable"},{"$pk":"ceylon.language.meta.declaration","$nm":"OpenUnion"},{"$pk":"ceylon.language.meta.declaration","$nm":"OpenIntersection"}],"$mt":"ifc","$an":{"shared":[],"doc":["An open type.\n\nAn open type is a type which may contain unbound type variables, such as `List<T>`."]},"$nm":"OpenType"},"SetterDeclaration":{"satisfies":[{"$pk":"ceylon.language","$nm":"Annotated"}],"$mt":"ifc","$an":{"shared":[],"doc":["A setter declaration for a `VariableDeclaration`."]},"$at":{"variable":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"VariableDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The variable this setter is for."]},"$nm":"variable"}},"$nm":"SetterDeclaration"},"Module":{"satisfies":[{"$pk":"ceylon.language","$nm":"Identifiable"},{"$pk":"ceylon.language.meta.declaration","$nm":"AnnotatedDeclaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["A `module` declaration\nfrom a `module.ceylon` compilation unit"]},"$m":{"findImportedPackage":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"Package"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Finds a package by name in this module or in its dependencies. Note that all transitive `shared`\ndependencies are searched. Returns `null` if not found."]},"$nm":"findImportedPackage"},"findPackage":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"Package"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Finds a package by name. Returns `null` if not found."]},"$nm":"findPackage"}},"$at":{"dependencies":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"Import"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The modules this module depends on."]},"$nm":"dependencies"},"members":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"Package"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The package members of the module."]},"$nm":"members"},"version":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The module version."]},"$nm":"version"}},"$nm":"Module"},"InterfaceDeclaration":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"ClassOrInterfaceDeclaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["An interface declaration.\n\n<a name=\"toplevel-sample\"><\/a>\n### Usage sample for toplevel interfaces\n\nBecause some interfaces have type parameters, getting a model requires applying type arguments to the\ninterface declaration with [[interfaceApply]] in order to be able to get a closed type. For example, here is how you would\nobtain an interface model from a toplevel interface declaration:\n\n    interface Foo<T> satisfies List<T> {\n    }\n    \n    void test(){\n        \/\/ We need to apply the Integer closed type to the Foo declaration in order to get the Foo<Integer> closed type\n        Interface<Foo<Integer>> interfaceModel = `interface Foo`.interfaceApply<Foo<Integer>>(`Integer`);\n        \/\/ This will print: ceylon.language::List<ceylon.language::Integer>\n        for(satisfiedType in interfaceModel.satisfiedTypes){\n            print(satisfiedType);\n        }\n    }\n\n<a name=\"member-sample\"><\/a>\n### Usage sample for member interfaces\n\nFor member interfaces it is a bit longer, because member interfaces need to be applied not only their type arguments but also\nthe containing type, so you should use [[memberInterfaceApply]] and start by giving the containing closed type:\n\n    class Outer(){\n        shared interface Inner<T> satisfies List<T> {\n        }\n    }\n\n    void test(){\n        \/\/ apply the containing closed type `Outer` to the member class declaration `Outer.Inner`\n        MemberInterface<Outer,Outer.Inner<Integer>> memberInterfaceModel = `interface Outer.Inner`.memberInterfaceApply<Outer,Outer.Inner<Integer>>(`Outer`, `Integer`);\n        \/\/ This will print: ceylon.language::List<ceylon.language::Integer>\n        for(satisfiedType in memberInterfaceModel.satisfiedTypes){\n            print(satisfiedType);\n        }\n    }\n"]},"$m":{"interfaceApply":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Interface"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"typeArguments"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"}],"$an":{"shared":[],"formal":[],"throws":["TypeApplicationException","If the specified closed type argument values are not compatible with the actual result's type parameters."],"doc":["Applies the given closed type arguments to this toplevel interface declaration in order to obtain an interface model. \nSee [this code sample](#toplevel-sample) for an example on how to use this."]},"$nm":"interfaceApply"},"memberInterfaceApply":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"MemberInterface"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Container"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"containerType"},{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"typeArguments"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language.meta.declaration","$nm":"Nothing"},"$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"}],"$an":{"shared":[],"formal":[],"throws":["TypeApplicationException","If the specified closed container type or type argument values are not compatible with the actual result's container type or type parameters."],"doc":["Applies the given closed container type and type arguments to this member interface declaration in order to obtain a member interface model. \nSee [this code sample](#member-sample) for an example on how to use this."]},"$nm":"memberInterfaceApply"}},"$nm":"InterfaceDeclaration"},"TypeParameter":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"Declaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["A type parameter declaration."]},"$at":{"caseTypes":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The `of` enumerated bounds for this type parameter."]},"$nm":"caseTypes"},"defaultTypeArgument":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This type parameter's default type argument, if it has one."]},"$nm":"defaultTypeArgument"},"container":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The declaration that declared this type parameter. This is either a [[ClassOrInterfaceDeclaration]] or a\n[[FunctionDeclaration]]."]},"$nm":"container"},"variance":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"Variance"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This type parameter's variance, as defined by `in` or `out` keywords."]},"$nm":"variance"},"satisfiedTypes":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The `satisfies` upper bounds for this type parameter."]},"$nm":"satisfiedTypes"},"defaulted":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this type parameter has a default type argument and can be omitted."]},"$nm":"defaulted"}},"$nm":"TypeParameter"},"FunctionalDeclaration":{"$mt":"ifc","$an":{"shared":[],"doc":["Declaration which can be invoked, and may have parameters. Classes\nand functions are functional declarations.\n\nNote that multiple-parameter lists are not reified at runtime, so if you\nhave a function declaration like this:\n\n    Integer add(Integer a)(Integer b) => a + b;\n\nIt will only have a single parameter list at runtime (the first), and its return\ntype will be `Callable<Integer,[Integer]>`.\n"]},"$m":{"getParameterDeclaration":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionOrValueDeclaration"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Gets a parameter declaration by name. Returns `null` if no such parameter exists."]},"$nm":"getParameterDeclaration"}},"$at":{"annotation":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if the current declaration is an annotation class or function."]},"$nm":"annotation"},"parameterDeclarations":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"FunctionOrValueDeclaration"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The list of parameter declarations for this functional declaration."]},"$nm":"parameterDeclarations"}},"$nm":"FunctionalDeclaration"},"$pkg-shared":"1","GenericDeclaration":{"$mt":"ifc","$an":{"shared":[],"doc":["A declaration that can have type parameters."]},"$m":{"getTypeParameterDeclaration":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"TypeParameter"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Finds a type parameter by name. Returns `null` if not found."]},"$nm":"getTypeParameterDeclaration"}},"$at":{"typeParameterDeclarations":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"TypeParameter"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The list of type parameters declared on this generic declaration."]},"$nm":"typeParameterDeclarations"}},"$nm":"GenericDeclaration"},"invariant":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"Variance"}],"$mt":"obj","$an":{"shared":[],"doc":["Invariant means that neither subtype nor supertype can be accepted, the\ntype has to be exactly that which is declared."]},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"invariant"},"VariableDeclaration":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"ValueDeclaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["Declaration of an attribute that is `variable` or has an `assign` block."]},"$m":{"apply":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Variable"},"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"}],"$an":{"shared":[],"formal":[],"see":["ValueDeclaration.apply"],"actual":[]},"$nm":"apply"},"memberApply":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"VariableAttribute"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Container"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"containerType"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language.meta.declaration","$nm":"Nothing"},"$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"}],"$an":{"shared":[],"formal":[],"see":["ValueDeclaration.memberApply"],"actual":[]},"$nm":"memberApply"}},"$at":{"setter":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"SetterDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns the setter declaration for this variable.\n\nFor modelling purposes `variable` reference \nvalues have a SetterDeclaration even though there is no \nsuch setter explicit in the source code."]},"$nm":"setter"},"variable":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["True."],"actual":[]},"$nm":"variable"}},"$nm":"VariableDeclaration"},"OpenInterfaceType":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"OpenClassOrInterfaceType"}],"$mt":"ifc","$an":{"shared":[],"doc":["An open interface type."]},"$at":{"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"InterfaceDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This declaration's package container."],"actual":[]},"$nm":"declaration"}},"$nm":"OpenInterfaceType"},"Package":{"satisfies":[{"$pk":"ceylon.language","$nm":"Identifiable"},{"$pk":"ceylon.language.meta.declaration","$nm":"AnnotatedDeclaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["Model of a `package` declaration \nfrom a `package.ceylon` compilation unit"]},"$m":{"getValue":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"ValueDeclaration"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["The value with the given name. Returns `null` if not found."]},"$nm":"getValue"},"getAlias":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"AliasDeclaration"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["The type alias with the given name. Returns `null` if not found."]},"$nm":"getAlias"},"getMember":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Kind"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"}],"$nm":"Kind"}],"$an":{"shared":[],"formal":[],"doc":["Looks up a member declaration by name, provided it satisfies the given `Kind` type\nargument. Returns `null` if no such member matches."]},"$nm":"getMember"},"getFunction":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["The function with the given name. Returns `null` if not found."]},"$nm":"getFunction"},"annotatedMembers":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Kind"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"}],"$nm":"Kind"},{"$nm":"Annotation"}],"$an":{"shared":[],"formal":[],"doc":["Returns the list of member declarations that satisfy the given `Kind` type argument and\nthat are annotated with the given `Annotation` type argument"]},"$nm":"annotatedMembers"},"getClassOrInterface":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"ClassOrInterfaceDeclaration"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["The class or interface with the given name. Returns `null` if not found."]},"$nm":"getClassOrInterface"},"members":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Kind"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"}],"$nm":"Kind"}],"$an":{"shared":[],"formal":[],"doc":["Returns the list of member declarations that satisfy the given `Kind` type argument."]},"$nm":"members"}},"$at":{"shared":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this package is shared."]},"$nm":"shared"},"container":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"Module"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The module this package belongs to."]},"$nm":"container"}},"$nm":"Package"},"OpenClassType":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"OpenClassOrInterfaceType"}],"$mt":"ifc","$an":{"shared":[],"doc":["An open class type."]},"$at":{"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This class declaration."],"actual":[]},"$nm":"declaration"}},"$nm":"OpenClassType"},"TypedDeclaration":{"$mt":"ifc","$an":{"shared":[],"doc":["Declaration which has an open type."]},"$at":{"openType":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"OpenType"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The open type for this declaration. For example, the open type for `List<T> f<T>()` is `List<T>`."]},"$nm":"openType"}},"$nm":"TypedDeclaration"},"OpenUnion":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}],"$mt":"ifc","$an":{"shared":[],"doc":["An open union type."]},"$at":{"caseTypes":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The list of case types for this open union type."]},"$nm":"caseTypes"}},"$nm":"OpenUnion"},"FunctionDeclaration":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionOrValueDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"GenericDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionalDeclaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["A function declaration.\n\n<a name=\"toplevel-sample\"><\/a>\n### Usage sample for toplevel function\n\nBecause some functions have type parameters, getting a model requires applying type arguments to the\nfunction declaration with [[apply]] in order to be able to invoke that function. For example, here is how you would\nobtain a function model that you can invoke from a toplevel function declaration:\n\n    String foo<T>(){\n        return \"Hello, our T is: ``typeLiteral<T>()``\";\n    }\n    \n    void test(){\n        \/\/ We need to apply the Integer closed type to the foo declaration in order to get the foo<Integer> function model\n        Function<String,[]> functionModel = `function foo`.apply<String,[]>(`Integer`);\n        \/\/ This will print: Hello, our T is: ceylon.language::Integer\n        print(functionModel());\n    }\n\n<a name=\"member-sample\"><\/a>\n### Usage sample for methods\n\nFor methods it is a bit longer, because methods need to be applied not only their type arguments but also\nthe containing type, so you should use [[memberApply]] and start by giving the containing closed type:\n\n    class Outer(){\n        shared String hello() => \"Hello\";\n    }\n\n    void test(){\n        \/\/ apply the containing closed type `Outer` to the method declaration `Outer.hello`\n        Method<Outer,String,[]> methodModel = `function Outer.hello`.memberApply<Outer,String,[]>(`Outer`);\n        \/\/ We now have a Method, which needs to be applied to a containing instance in order to become an\n        \/\/ invokable function:\n        Function<String,[]> boundMethodModel = methodModel(Outer());\n        \/\/ This will print: Hello\n        print(boundMethodModel());\n    }\n"]},"$m":{"apply":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Return"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language.meta.model","$nm":"Function"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"typeArguments"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Return"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language.meta.declaration","$nm":"Nothing"},"$nm":"Arguments"}],"$an":{"shared":[],"formal":[],"throws":["TypeApplicationException","If the specified closed type argument values are not compatible with the actual result's type parameters."],"doc":["Applies the given closed type arguments to this function declaration in order to obtain a function model. \nSee [this code sample](#toplevel-sample) for an example on how to use this."]},"$nm":"apply"},"memberApply":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$nm":"Return"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language.meta.model","$nm":"Method"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Container"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"containerType"},{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"typeArguments"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language.meta.declaration","$nm":"Nothing"},"$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Return"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language.meta.declaration","$nm":"Nothing"},"$nm":"Arguments"}],"$an":{"shared":[],"formal":[],"throws":["TypeApplicationException","If the specified closed container type or type argument values are not compatible with the actual result's container type or type parameters."],"doc":["Applies the given closed container type and type arguments to this method declaration in order to obtain a method model. \nSee [this code sample](#member-sample) for an example on how to use this."]},"$nm":"memberApply"}},"$nm":"FunctionDeclaration"},"NestableDeclaration":{"of":[{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionOrValueDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"ClassOrInterfaceDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"AliasDeclaration"}],"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"AnnotatedDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"TypedDeclaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["A declaration which can be contained in a [[Package]] or in another [[NestableDeclaration]].\n\nFunctions, values, classes, interfaes and aliases are such declarations."]},"$at":{"shared":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this declaration is annotated with [[shared|ceylon.language::shared]]."]},"$nm":"shared"},"containingModule":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"Module"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This declaration's module container."]},"$nm":"containingModule"},"toplevel":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this declaration is a toplevel declaration."]},"$nm":"toplevel"},"formal":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this declaration is annotated with [[formal|ceylon.language::formal]]."]},"$nm":"formal"},"default":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this declaration is annotated with [[default|ceylon.language::default]]."]},"$nm":"default"},"container":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"Package"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This declaration's immediate container, which can be either a [[NestableDeclaration]]\nor a [[Package]]."]},"$nm":"container"},"containingPackage":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"Package"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This declaration's package container."]},"$nm":"containingPackage"},"actual":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this declaration is annotated with [[actual|ceylon.language::actual]]."]},"$nm":"actual"}},"$nm":"NestableDeclaration"},"Declaration":{"of":[{"$pk":"ceylon.language.meta.declaration","$nm":"AnnotatedDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"TypeParameter"}],"$mt":"ifc","$an":{"shared":[],"doc":["A declaration.\n\nThere are only two types of declarations:\n\n- [[AnnotatedDeclaration]]s such as modules, packages, classes or functions, and\n- [[TypeParameter]] declarations."]},"$at":{"qualifiedName":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The qualified name of this declaration. This includes the container qualified name. For\nexample, the [[Declaration]] class' qualified name is \"ceylon.language.meta.declaration::Declaration\"."]},"$nm":"qualifiedName"},"name":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The name of this declaration. For example, the [[Declaration]] class is named \"Declaration\"."]},"$nm":"name"}},"$nm":"Declaration"},"ClassOrInterfaceDeclaration":{"of":[{"$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"InterfaceDeclaration"}],"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"GenericDeclaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["A class or interface declaration.\n\n<a name=\"toplevel-sample\"><\/a>\n### Usage sample for toplevel classes\n\nBecause some classes have type parameters, getting a model requires applying type arguments to the\nclass declaration with [[classApply]] in order to be able to instantiate that class. For example, here is how you would\nobtain a class or interface model that you can instantiate from a toplevel class declaration:\n\n    class Foo<T>() {\n        string => \"Hello, our T is: ``typeLiteral<T>()``\";\n    }\n    \n    void test(){\n        \/\/ We need to apply the Integer closed type to the Foo declaration in order to get the Foo<Integer> closed type\n        ClassOrInterface<Foo<Integer>> classOrInterfaceModel = `class Foo`.apply<Foo<Integer>>(`Integer`);\n        assert(is Class<Foo<Integer>,[]> classOrInterfaceModel);\n        \/\/ This will print: Hello, our T is: ceylon.language::Integer\n        print(classOrInterfaceModel());\n    }\n\nNote that there are more specialised versions of [[apply]] in [[ClassDeclaration.classApply]] and \n[[InterfaceDeclaration.interfaceApply]].\n\n<a name=\"member-sample\"><\/a>\n### Usage sample for member classes\n\nFor member classes or interfaces it is a bit longer, because member types need to be applied not only their type arguments but also\nthe containing type, so you should use [[memberApply]] and start by giving the containing closed type:\n\n    class Outer(){\n        shared class Inner(){\n            string => \"Hello\";\n        }\n    }\n\n    void test(){\n        \/\/ apply the containing closed type `Outer` to the member class declaration `Outer.Inner`\n        value memberClassModel = `class Outer.Inner`.memberApply<Outer,Outer.Inner>(`Outer`);\n        assert(is MemberClass<Outer,Outer.Inner,[]> memberClassModel);\n        \/\/ We now have a MemberClass, which needs to be applied to a containing instance in order to become an\n        \/\/ invokable class model:\n        Class<Outer.Inner,[]> boundMemberClassModel = memberClassModel(Outer());\n        \/\/ This will print: Hello\n        print(boundMemberClassModel());\n    }\n\nNote that there are more specialised versions of [[memberApply]] in [[ClassDeclaration.memberClassApply]] and \n[[InterfaceDeclaration.memberInterfaceApply]].\n"]},"$m":{"memberDeclarations":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Kind"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"}],"$nm":"Kind"}],"$an":{"shared":[],"formal":[],"doc":["Returns the list of member declarations that satisfy the given `Kind` type argument."]},"$nm":"memberDeclarations"},"apply":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"ClassOrInterface"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"typeArguments"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"}],"$an":{"shared":[],"formal":[],"throws":["TypeApplicationException","If the specified closed type argument values are not compatible with the actual result's type parameters."],"doc":["Applies the given closed type arguments to this toplevel class or interface declaration in order to obtain a class or interface model. \nSee [this code sample](#toplevel-sample) for an example on how to use this."]},"$nm":"apply"},"memberApply":{"$t":{"comp":"i","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"ClassOrInterface"}],"$pk":"ceylon.language.meta.model","$nm":"Member"},{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"ClassOrInterface"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Container"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"containerType"},{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"typeArguments"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language.meta.declaration","$nm":"Nothing"},"$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"}],"$an":{"shared":[],"formal":[],"throws":["TypeApplicationException","If the specified closed container type or type argument values are not compatible with the actual result's container type or type parameters."],"doc":["Applies the given closed container type and type arguments to this member class or interface declaration in order to obtain a \nmember class or interface model. See [this code sample](#member-sample) for an example on how to use this."]},"$nm":"memberApply"},"annotatedMemberDeclarations":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Kind"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"}],"$nm":"Kind"},{"$nm":"Annotation"}],"$an":{"shared":[],"formal":[],"doc":["Returns the list of member declarations that satisfy the given `Kind` type argument and\nthat are annotated with the given `Annotation` type argument"]},"$nm":"annotatedMemberDeclarations"},"getMemberDeclaration":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Kind"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"}],"$nm":"Kind"}],"$an":{"shared":[],"formal":[],"doc":["Looks up a member declaration by name, provided it satisfies the given `Kind` type\nargument. Returns `null` if no such member matches."]},"$nm":"getMemberDeclaration"}},"$at":{"extendedType":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"OpenClassType"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This type's extended type, unless this is the class for [[Anything|ceylon.language::Anything]], which\nis the root of the type hierarchy and thus does not have any extended type."]},"$nm":"extendedType"},"caseTypes":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["If this type has an `of` clause, this is the list of case types for the current type."]},"$nm":"caseTypes"},"satisfiedTypes":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"OpenInterfaceType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The list of types satisfied by this type."]},"$nm":"satisfiedTypes"},"isAlias":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this type is an alias type, in which case the [[extendedType]] will \ncontain the substituted type."]},"$nm":"isAlias"}},"$nm":"ClassOrInterfaceDeclaration"},"OpenClassOrInterfaceType":{"of":[{"$pk":"ceylon.language.meta.declaration","$nm":"OpenClassType"},{"$pk":"ceylon.language.meta.declaration","$nm":"OpenInterfaceType"}],"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}],"$mt":"ifc","$an":{"shared":[],"doc":["An open class or interface, with open type arguments.\n\nFor example, `List<T>` is an open interface type, with a type argument which is the\n[[OpenTypeVariable]] `T`."]},"$at":{"extendedType":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"OpenClassType"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The extended type of this open type."]},"$nm":"extendedType"},"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"ClassOrInterfaceDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The class or interface declaration for this open type."]},"$nm":"declaration"},"typeArguments":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"TypeParameter"},{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The set of open type arguments."]},"$nm":"typeArguments"},"satisfiedTypes":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"OpenInterfaceType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The satisfied types of this open type."]},"$nm":"satisfiedTypes"}},"$nm":"OpenClassOrInterfaceType"},"covariant":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"Variance"}],"$mt":"obj","$an":{"shared":[],"doc":["Covariant means that subtypes of the given type may be returned."]},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"covariant"},"nothingType":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"OpenType"}],"$mt":"obj","$an":{"shared":[],"doc":["The singleton open type for [[Nothing|ceylon.language::nothing]]."]},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"nothingType"},"ValueDeclaration":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionOrValueDeclaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["A value declaration.\n\n<a name=\"toplevel-sample\"><\/a>\n### Usage sample for toplevel value\n\nGetting a model requires applying type arguments to the\nvalue declaration with [[apply]] in order to be able to read that value. For example, here is how you would\nobtain a value model that you can read from a toplevel attribute declaration:\n\n    String foo = \"Hello\";\n    \n    void test(){\n        \/\/ We need to apply the the foo declaration in order to get the foo value model\n        Value<String> valueModel = `value foo`.apply<String>();\n        \/\/ This will print: Hello\n        print(valueModel.get());\n    }\n\n<a name=\"member-sample\"><\/a>\n### Usage sample for attributes\n\nFor attributes it is a bit longer, because attributes need to be applied the containing type, so you should \nuse [[memberApply]] and start by giving the containing closed type:\n\n    class Outer(){\n        shared String foo => \"Hello\";\n    }\n\n    void test(){\n        \/\/ Apply the containing closed type `Outer` to the attribute declaration `Outer.foo`\n        Attribute<Outer,String> valueModel = `value Outer.foo`.memberApply<Outer,String>(`Outer`);\n        \/\/ We now have an Attribute, which needs to be applied to a containing instance in order to become a\n        \/\/ readable value:\n        Value<String> boundValueModel = valueModel(Outer());\n        \/\/ This will print: Hello\n        print(boundValueModel.get());\n    }\n"]},"$m":{"apply":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Value"},"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"}],"$an":{"shared":[],"formal":[],"throws":["IncompatibleTypeException","If the specified `Type` type argument is not compatible with the actual result."],"doc":["Applies this value declaration in order to obtain a value model. \nSee [this code sample](#toplevel-sample) for an example on how to use this."]},"$nm":"apply"},"memberApply":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Attribute"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Container"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"containerType"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language.meta.declaration","$nm":"Nothing"},"$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"}],"$an":{"shared":[],"formal":[],"throws":["IncompatibleTypeException","If the specified `Container` or `Type` type arguments are not compatible with the actual result."],"doc":["Applies the given closed container type to this attribute declaration in order to obtain an attribute model. \nSee [this code sample](#member-sample) for an example on how to use this."]},"$nm":"memberApply"}},"$at":{"variable":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this declaration is annotated with [[variable|ceylon.language::variable]]."]},"$nm":"variable"}},"$nm":"ValueDeclaration"},"ClassDeclaration":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"ClassOrInterfaceDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionalDeclaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["Class declaration.\n\n<a name=\"toplevel-sample\"><\/a>\n### Usage sample for toplevel classes\n\nBecause some classes have type parameters, getting a model requires applying type arguments to the\nclass declaration with [[classApply]] in order to be able to instantiate that class. For example, here is how you would\nobtain a class model that you can instantiate from a toplevel class declaration:\n\n    class Foo<T>(){\n        string => \"Hello, our T is: ``typeLiteral<T>()``\";\n    }\n    \n    void test(){\n        \/\/ We need to apply the Integer closed type to the Foo declaration in order to get the Foo<Integer> closed type\n        Class<Foo<Integer>,[]> classModel = `class Foo`.classApply<Foo<Integer>,[]>(`Integer`);\n        \/\/ This will print: Hello, our T is: ceylon.language::Integer\n        print(classModel());\n    }\n\n<a name=\"member-sample\"><\/a>\n### Usage sample for member classes\n\nFor member classes it is a bit longer, because member classes need to be applied not only their type arguments but also\nthe containing type, so you should use [[memberClassApply]] and start by giving the containing closed type:\n\n    class Outer(){\n        shared class Inner(){\n            string => \"Hello\";\n        }\n    }\n\n    void test(){\n        \/\/ apply the containing closed type `Outer` to the member class declaration `Outer.Inner`\n        MemberClass<Outer,Outer.Inner,[]> memberClassModel = `class Outer.Inner`.memberClassApply<Outer,Outer.Inner,[]>(`Outer`);\n        \/\/ We now have a MemberClass, which needs to be applied to a containing instance in order to become an\n        \/\/ invokable class model:\n        Class<Outer.Inner,[]> boundMemberClassModel = memberClassModel(Outer());\n        \/\/ This will print: Hello\n        print(boundMemberClassModel());\n    }\n"]},"$m":{"memberClassApply":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language.meta.model","$nm":"MemberClass"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Container"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"containerType"},{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"typeArguments"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language.meta.declaration","$nm":"Nothing"},"$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language.meta.declaration","$nm":"Nothing"},"$nm":"Arguments"}],"$an":{"shared":[],"formal":[],"throws":["TypeApplicationException","If the specified closed container type or type argument values are not compatible with the actual result's container type or type parameters."],"doc":["Applies the given closed container type and type arguments to this member class declaration in order to obtain a member class model. \nSee [this code sample](#member-sample) for an example on how to use this."]},"$nm":"memberClassApply"},"classApply":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language.meta.model","$nm":"Class"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"typeArguments"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language.meta.declaration","$nm":"Nothing"},"$nm":"Arguments"}],"$an":{"shared":[],"formal":[],"throws":["TypeApplicationException","If the specified closed type argument values are not compatible with the actual result's type parameters."],"doc":["Applies the given closed type arguments to this toplevel class declaration in order to obtain a class model. \nSee [this code sample](#toplevel-sample) for an example on how to use this."]},"$nm":"classApply"}},"$at":{"anonymous":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if the class is an object class."]},"$nm":"anonymous"},"abstract":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if the class has an [[abstract|ceylon.language::abstract]] annotation."]},"$nm":"abstract"},"final":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if the class has a [[final|ceylon.language::final]] annotation."]},"$nm":"final"}},"$nm":"ClassDeclaration"},"contravariant":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"Variance"}],"$mt":"obj","$an":{"shared":[],"doc":["Contravariant means that supertypes of the given type may be accepted."]},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"contravariant"},"FunctionOrValueDeclaration":{"of":[{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"ValueDeclaration"}],"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["A function or value declaration."]},"$at":{"parameter":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this function or value is a parameter to a [[FunctionalDeclaration]]."]},"$nm":"parameter"},"variadic":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this function or value is a parameter and is variadic (accepts a list of values)."]},"$nm":"variadic"},"defaulted":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if this function or value is a parameter and has a default value."]},"$nm":"defaulted"}},"$nm":"FunctionOrValueDeclaration"},"AliasDeclaration":{"satisfies":[{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"GenericDeclaration"}],"$mt":"ifc","$an":{"shared":[],"doc":["Type alias declaration. While type aliases are erased (substituted for what they alias is a better term) from every \ndeclaration that uses them during compile-time, the declaration of the type alias is still visible at run-time."]},"$at":{"extendedType":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"OpenType"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The open type that is substituted by this type alias."]},"$nm":"extendedType"}},"$nm":"AliasDeclaration"}},"$mod-version":"0.6","ceylon.language.meta":{"$pkg-shared":"1","sequencedAnnotations":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"ProgramElement"}],"$pk":"ceylon.language","$nm":"SequencedAnnotation"},{"$mt":"tpm","$pk":"ceylon.language.meta.model","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"Class"},"$mt":"prm","$nm":"annotationType"},{"$t":{"$nm":"ProgramElement"},"$mt":"prm","$nm":"programElement"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"ProgramElement"}],"$pk":"ceylon.language","$nm":"SequencedAnnotation"}],"$nm":"Value"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Annotated"}],"variance":"in","$nm":"ProgramElement"}],"$an":{"shared":[],"doc":["The values of given sequenced annotation type on the given program element, \nor empty if the program element was not annotated with that annotation type.\nFor example:\n\n    \/\/ Does the sum declaration have any ThrownException annotations?\n    value throwsSomething = sequencedAnnotation(`ThrownException`, `function sum`) nonempty;\n\nThe annotations may be returned in any order.\n"]},"$nm":"sequencedAnnotations"},"optionalAnnotation":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Value"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"ProgramElement"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"},{"$mt":"tpm","$pk":"ceylon.language.meta.model","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"Class"},"$mt":"prm","$nm":"annotationType"},{"$t":{"$nm":"ProgramElement"},"$mt":"prm","$nm":"programElement"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"ProgramElement"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$nm":"Value"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Annotated"}],"variance":"in","$nm":"ProgramElement"}],"$an":{"shared":[],"doc":["The value of given optional annotation type on the given program element, \nor null if the program element was not annotated with that annotation type.\nFor example:\n\n    \/\/ Does the process declaration have the Shared annotation?\n    value isShared = optionalAnnotation(`Shared`, `value process`) exists;\n"]},"$nm":"optionalAnnotation"},"typeLiteral":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Anything"}],"variance":"out","$nm":"Type"}],"$an":{"shared":[],"native":[],"doc":["Functional equivalent to type literals. Allows you to get a closed type instance\nfor a given type argument.\n\nFor example:\n\n    assert(is Interface<List<Integer>> listOfIntegers = typeLiteral<List<Integer>>());\n"]},"$nm":"typeLiteral"},"annotations":{"$t":{"$nm":"Values"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Values"},{"$mt":"tpm","$nm":"ProgramElement"}],"$pk":"ceylon.language","$nm":"ConstrainedAnnotation"},{"$mt":"tpm","$pk":"ceylon.language.meta.model","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"Class"},"$mt":"prm","$nm":"annotationType"},{"$t":{"$nm":"ProgramElement"},"$mt":"prm","$nm":"programElement"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Values"},{"$mt":"tpm","$nm":"ProgramElement"}],"$pk":"ceylon.language","$nm":"ConstrainedAnnotation"}],"$nm":"Value"},{"$nm":"Values"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Annotated"}],"variance":"in","$nm":"ProgramElement"}],"$an":{"shared":[],"native":[],"doc":["The annotations of the given type on the given program element. For example:\n\n    \/\/ Does the process declaration have the Shared annotation?\n    value isShared = annotations(`Shared`, `value process`) exists;\n\nThe annotations may be returned in any order.\n"]},"$nm":"annotations"},"modules":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$mt":"obj","$an":{"shared":[],"native":[],"doc":["Represents the list of Ceylon modules currently loaded at runtime.\n\nNote that this contains all loaded modules, including those that are\nnot imported by your module.\n\nSince Ceylon supports module isolation at runtime, it is possible that\nthere are more than one version of a given module loaded at the same time.\n\n### Usage example\n\nHere's how you would iterate all the loaded modules and print their name and version:\n\n    import ceylon.language.meta { modules }\n\n    for(mod in modules.list){\n        print(\"Module: ``mod.name``\/``mod.version``\");\n    }\n"]},"$m":{"find":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"Module"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"version"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Finds a module by name and version, returns `null` if not found."]},"$nm":"find"}},"$at":{"default":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language.meta.declaration","$nm":"Module"}]},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Returns the default module, if there is one. This is only the case when\nyou are running the default module."]},"$nm":"default"},"list":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"Module"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Returns the list of all currently loaded modules. This may include modules that\nwere not imported directly but your module, and multiple versions of the same\nmodule."]},"$nm":"list"}},"$nm":"modules"},"type":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$pk":"ceylon.language.meta","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"ClassModel"},"$ps":[[{"$t":{"$nm":"Type"},"$mt":"prm","$nm":"instance"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Anything"}],"variance":"out","$nm":"Type"}],"$an":{"shared":[],"native":[],"doc":["Returns the closed type and model of a given instance. Since only classes\ncan be instantiated, this will always be a [[ClassModel]] model."]},"$nm":"type"}},"ceylon.language.meta.model":{"Member":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Kind"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$mt":"ifc","$tp":[{"variance":"in","$nm":"Container"},{"satisfies":[{"$pk":"ceylon.language.meta.model","$nm":"Model"}],"variance":"out","$nm":"Kind"}],"$an":{"shared":[],"doc":["Model for members that can be bound to a containing instance to turn them into toplevel models.\n\nYou can bind a member to an instance by invoking that member with the instance as parameter:\n\n    shared class Outer(String name){\n        shared class Inner(){\n            shared String hello => \"Hello \"+name;\n        }\n    }\n    \n    void test(){\n        Member<Outer,Class<Outer.Inner,[]>> memberClass = `Outer.Inner`;\n        Class<Outer.Inner,[]> c = memberClass(Outer(\"Stef\"));\n        \/\/ This will print: Hello Stef\n        print(c().hello);\n    }\n"]},"$at":{"declaringType":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The declaring closed type. This is the type that declared this member."]},"$nm":"declaringType"}},"$nm":"Member"},"Model":{"of":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"ClassOrInterface"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$mt":"tpm","$pk":"ceylon.language.meta.model","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"FunctionModel"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"ValueModel"}],"$mt":"ifc","$an":{"shared":[],"doc":["The root of all models. There are several types of models:\n\n- [[ClassOrInterface]]\n- [[FunctionModel]]\n- [[ValueModel]]\n"]},"$at":{"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"NestableDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The declaration for this model."]},"$nm":"declaration"},"container":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The container type of this model, or `null` if this is a toplevel model."]},"$nm":"container"}},"$nm":"Model"},"InterfaceModel":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"ClassOrInterface"}],"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"}],"$an":{"shared":[],"doc":["An interface model represents the model of a Ceylon interface that you can inspect.\n\nAn interface model can be either a toplevel [[Interface]] or a member [[MemberInterface]].\n"]},"$at":{"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"InterfaceDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"actual":[]},"$nm":"declaration"}},"$nm":"InterfaceModel"},"Method":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language.meta.model","$nm":"FunctionModel"},{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language.meta.model","$nm":"Function"}],"$pk":"ceylon.language.meta.model","$nm":"Member"}],"$mt":"ifc","$tp":[{"variance":"in","$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language.meta.model","$nm":"Nothing"},"variance":"in","$nm":"Arguments"}],"$an":{"shared":[],"doc":["A function model represents the model of a Ceylon function that you can invoke and inspect.\n\nA method is a member function: it is declared on classes or interfaces.\n\nThis is both a [[FunctionModel]] and a [[Member]]: you can invoke it with an instance value\nto bind it to that instance and obtain a [[Function]]:\n\n    class Outer(){\n        shared String foo(String name) => \"Hello \"+name;\n    }\n    \n    void test(){\n        Method<Outer,String,[String]> method = `Outer.foo`;\n        \/\/ Bind it to an instance value\n        Function<String,[String]> f = method(Outer());\n        \/\/ This will print: Hello Stef\n        print(f(\"Stef\"));\n    }\n"]},"$nm":"Method"},"Type":{"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"}],"$an":{"shared":[],"doc":["A closed type.\n\nA closed type is a type which is fully resolved and bound and contains no open type variables.\nAll instance types are closed at runtime.\n\nYou have only four sorts of types:\n\n- [[ClassOrInterface]]\n- [[UnionType]]\n- [[IntersectionType]]\n- [[nothingType]]"]},"$m":{"isSuperTypeOf":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"type"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["True if the given type is a supertype of this type."]},"$nm":"isSuperTypeOf"},"isExactly":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"type"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["True if the given type is a exactly this type."]},"$nm":"isExactly"},"isTypeOf":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"instance"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["True if the given instance is of this type, or is of a subtype of this type."]},"$nm":"isTypeOf"},"isSubTypeOf":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"type"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["True if the given type is a subtype of this type."]},"$nm":"isSubTypeOf"}},"$nm":"Type"},"IntersectionType":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Intersection"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Intersection"}],"$an":{"shared":[],"doc":["A closed intersection type."]},"$at":{"satisfiedTypes":{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The list of closed satisfied types of this intersection."]},"$nm":"satisfiedTypes"}},"$nm":"IntersectionType"},"UnionType":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Union"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Union"}],"$an":{"shared":[],"doc":["A closed union type."]},"$at":{"caseTypes":{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Union"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The list of closed case types of this union."]},"$nm":"caseTypes"}},"$nm":"UnionType"},"$pkg-shared":"1","FunctionModel":{"satisfies":[{"$pk":"ceylon.language.meta.model","$nm":"Model"},{"$pk":"ceylon.language.meta.model","$nm":"Generic"}],"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language.meta.model","$nm":"Nothing"},"variance":"in","$nm":"Arguments"}],"$an":{"shared":[],"doc":["A function model represents the model of a Ceylon function that you can inspect.\n\nA function model can be either a toplevel [[Function]] or a member [[Method]].\n"]},"$at":{"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This function's declaration."],"actual":[]},"$nm":"declaration"},"type":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This function's return closed type."]},"$nm":"type"}},"$nm":"FunctionModel"},"ValueModel":{"satisfies":[{"$pk":"ceylon.language.meta.model","$nm":"Model"}],"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"}],"$an":{"shared":[],"doc":["A value model represents the model of a Ceylon value that you can inspect.\n\nA value model can be either a toplevel [[Value]] or a member [[Attribute]].\n"]},"$at":{"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"ValueDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This value's declaration."],"actual":[]},"$nm":"declaration"},"type":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["This value's closed type."]},"$nm":"type"}},"$nm":"ValueModel"},"ClassModel":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"ClassOrInterface"}],"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language.meta.model","$nm":"Nothing"},"variance":"in","$nm":"Arguments"}],"$an":{"shared":[],"doc":["A class model represents the model of a Ceylon class that you can inspect.\n\nA class model can be either a toplevel [[Class]] or a member [[MemberClass]].\n"]},"$at":{"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"actual":[]},"$nm":"declaration"}},"$nm":"ClassModel"},"Attribute":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"ValueModel"},{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Value"}],"$pk":"ceylon.language.meta.model","$nm":"Member"}],"$mt":"ifc","$tp":[{"variance":"in","$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"}],"$an":{"shared":[],"doc":["An attribute model represents the model of a Ceylon attribute that you can read and inspect.\n\nAn attribute is a member value: it is declared on classes or interfaces.\n\nThis is both a [[ValueModel]] and a [[Member]]: you can invoke it with an instance value\nto bind it to that instance and obtain a [[Value]]:\n\n    class Outer(){\n        shared String foo = \"Hello\";\n    }\n    \n    void test(){\n        Attribute<Outer,String> attribute = `Outer.foo`;\n        Value<String> boundAttribute = attribute(Outer());\n        \/\/ This will print: Hello\n        print(boundAttribute.get());\n    }\n"]},"$nm":"Attribute"},"Value":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"ValueModel"}],"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"}],"$an":{"shared":[],"doc":["A value model represents the model of a Ceylon value that you can read and inspect.\n\nA value is a toplevel binding, declared on a package.\n\nThis is a [[ValueModel]] that you can query for a value declaration's current value:\n\n    shared String foo = \"Hello\";\n    \n    void test(){\n        Value<String> val = `foo`;\n        \/\/ This will print: Hello\n        print(val.get());\n    }\n"]},"$m":{"get":{"$t":{"$nm":"Type"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Reads the current value for this value binding. Note that in the case of getter\nvalues, this can throw if the getter throws."]},"$nm":"get"}},"$nm":"Value"},"Variable":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Value"}],"$mt":"ifc","$tp":[{"$nm":"Type"}],"$an":{"shared":[],"doc":["A variable model represents the model of a Ceylon variable that you can read, write and inspect.\n\nA variable is a mutable toplevel binding, declared on a package.\n\nThis is a [[Value]] that you can use to change a value declaration's current value:\n\n    shared variable String foo = \"Hello\";\n    \n    void test(){\n        Variable<String> val = `foo`;\n        \/\/ This will print: Hello\n        print(val.get());\n        val.set(\"Bonjour\");\n        \/\/ This will print: Bonjour\n        print(val.get());\n    }\n"]},"$m":{"set":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Type"},"$mt":"prm","$nm":"newValue"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Changes this variable's value to the given new value. Note that in the case of\nsetter attributes, this can throw if the setter throws."]},"$nm":"set"}},"$at":{"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"VariableDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The variable declaration for this variable."],"actual":[]},"$nm":"declaration"}},"$nm":"Variable"},"InvocationException":{"super":{"$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Thrown when attempting to invoke something which can't be invoked, like abstract class\ninitialisers."]},"$at":{"message":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"}},"$nm":"InvocationException"},"Function":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language.meta.model","$nm":"FunctionModel"},{"$tp":[{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language","$nm":"Callable"}],"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language.meta.model","$nm":"Nothing"},"variance":"in","$nm":"Arguments"}],"$an":{"shared":[],"doc":["A function model represents the model of a Ceylon function that you can invoke and inspect.\n\nA function is a toplevel binding, declared on a package.\n\nThis is a [[FunctionModel]] that you can also invoke:\n\n    shared String foo(String name) => \"Hello \"+name;\n    \n    void test(){\n        Function<String,[String]> f = `foo`;\n        \/\/ This will print: Hello Stef\n        print(f(\"Stef\"));\n    }\n"]},"$nm":"Function"},"TypeApplicationException":{"super":{"$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Thrown when declarations are applied with invalid or incompatible type arguments.\n\nFor example if you try to apply `Foo` with `String`, hoping to get a `Foo<String>`\nbut the type parameter for `Foo` only accepts types that satisfy `Numeric`.\n"]},"$at":{"message":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"}},"$nm":"TypeApplicationException"},"MemberClass":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language.meta.model","$nm":"ClassModel"},{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language.meta.model","$nm":"Class"}],"$pk":"ceylon.language.meta.model","$nm":"Member"}],"$mt":"ifc","$tp":[{"variance":"in","$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language.meta.model","$nm":"Nothing"},"variance":"in","$nm":"Arguments"}],"$an":{"shared":[],"doc":["A class model represents the model of a Ceylon class that you can instantiate and inspect.\n\nA member class is is declared on classes or interfaces.\n\nThis is both a [[ClassModel]] and a [[Member]]: you can invoke it with an instance value\nto bind it to that instance and obtain a [[Class]]:\n\n    shared class Outer(String name){\n        shared class Inner(){\n            shared String hello => \"Hello \"+name;\n        }\n    }\n    \n    void test(){\n        MemberClass<Outer,Outer.Inner,[]> memberClass = `Outer.Inner`;\n        Class<Outer.Inner,[]> c = memberClass(Outer(\"Stef\"));\n        \/\/ This will print: Hello Stef\n        print(c().hello);\n    }\n"]},"$nm":"MemberClass"},"VariableAttribute":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Variable"}],"$pk":"ceylon.language.meta.model","$nm":"Member"},{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Attribute"}],"$mt":"ifc","$tp":[{"variance":"in","$nm":"Container"},{"$nm":"Type"}],"$an":{"shared":[],"doc":["A variable attribute model represents the model of a Ceylon variable attribute that you \ncan read, write and inspect.\n\nA variable attribute is a member attribute, it is declared on classes or interfaces.\n\nThis is both an [[Attribute]] and a [[Member]]: you can invoke it with an instance value\nto bind it to that instance and obtain an [[Attribute]]:\n\n    class Outer(){\n        shared variable String foo = \"Hello\";\n    }\n    \n    void test(){\n        VariableAttribute<Outer,String> attribute = `Outer.foo`;\n        Variable<String> boundAttribute = attribute(Outer());\n        \/\/ This will print: Hello\n        print(boundAttribute.get());\n        boundAttribute.set(\"Bonjour\");\n        \/\/ This will print: Bonjour\n        print(boundAttribute.get());\n    }\n"]},"$at":{"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"VariableDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The variable declaration for this variable attribute."],"actual":[]},"$nm":"declaration"}},"$nm":"VariableAttribute"},"Interface":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"InterfaceModel"}],"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"}],"$an":{"shared":[],"doc":["An interface model that you can inspect."]},"$nm":"Interface"},"Class":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language.meta.model","$nm":"ClassModel"},{"$tp":[{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language","$nm":"Callable"}],"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language.meta.model","$nm":"Nothing"},"variance":"in","$nm":"Arguments"}],"$an":{"shared":[],"doc":["A class model represents the model of a Ceylon class that you can instantiate and inspect.\n\nA class is a toplevel type, declared on a package.\n\nThis is a [[ClassModel]] that you can also invoke to instantiate new instances of the class:\n\n    shared class Foo(String name){\n        shared String hello => \"Hello \"+name;\n    }\n    \n    void test(){\n        Class<Foo,[String]> c = `Foo`;\n        \/\/ This will print: Hello Stef\n        print(c(\"Stef\").hello);\n    }\n"]},"$nm":"Class"},"nothingType":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.model","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$mt":"obj","$an":{"shared":[],"doc":["The singleton closed type for [[Nothing|ceylon.language::nothing]]."]},"$m":{"isSuperTypeOf":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"type"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"isSuperTypeOf"},"isExactly":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"type"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"isExactly"},"isTypeOf":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"instance"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"isTypeOf"},"isSubTypeOf":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"},"$mt":"prm","$nm":"type"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"isSubTypeOf"}},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"nothingType"},"Generic":{"$mt":"ifc","$an":{"shared":[],"doc":["A generic model which has closed type arguments."]},"$at":{"typeArguments":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"TypeParameter"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The map of type parameter declaration to type arguments for this generic model."]},"$nm":"typeArguments"}},"$nm":"Generic"},"ClassOrInterface":{"of":[{"$tp":[{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$pk":"ceylon.language.meta.model","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"ClassModel"},{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"InterfaceModel"}],"satisfies":[{"$pk":"ceylon.language.meta.model","$nm":"Model"},{"$pk":"ceylon.language.meta.model","$nm":"Generic"},{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$mt":"ifc","$tp":[{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"}],"$an":{"shared":[],"doc":["Model of a class or interface that you can inspect.\n\nThe models of classes and interfaces are also closed types."]},"$m":{"getMethod":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$nm":"Type"},{"$mt":"tpm","$nm":"Arguments"}],"$pk":"ceylon.language.meta.model","$nm":"Method"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"types"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language.meta.model","$nm":"Nothing"},"$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language.meta.model","$nm":"Nothing"},"$nm":"Arguments"}],"$an":{"shared":[],"formal":[],"throws":["TypeApplicationException","If the specified closed type argument values are not compatible with the actual result's type parameters."],"doc":["Gets a method by name. Returns `null` if not found."]},"$nm":"getMethod"},"getAttribute":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Attribute"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language.meta.model","$nm":"Nothing"},"$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"$nm":"Type"}],"$an":{"shared":[],"formal":[],"throws":["IncompatibleTypeException","If the specified `Container` or `Type` type arguments are not compatible with the actual result."],"doc":["Gets an attribute by name. Returns `null` if not found."]},"$nm":"getAttribute"},"getClassOrInterface":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$nm":"Kind"}],"$pk":"ceylon.language.meta.model","$nm":"Member"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"Type"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"types"}]],"$mt":"mthd","$tp":[{"$def":{"$pk":"ceylon.language.meta.model","$nm":"Nothing"},"$nm":"Container"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"ClassOrInterface"}],"$def":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"ClassOrInterface"},"$nm":"Kind"}],"$an":{"shared":[],"formal":[],"throws":["TypeApplicationException","If the specified closed type argument values are not compatible with the actual result's type parameters."],"doc":["Gets a member class or interface by name. Returns `null` if not found."]},"$nm":"getClassOrInterface"}},"$at":{"extendedType":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$mt":"tpm","$pk":"ceylon.language.meta.model","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"ClassModel"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The extended closed type for this class or interface. Note that the [[Anything|ceylon.language::Anything]] type\nhas no extended type since it is the top of the type hierarchy."]},"$nm":"extendedType"},"declaration":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"ClassOrInterfaceDeclaration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The declaration for this class or interface."],"actual":[]},"$nm":"declaration"},"satisfiedTypes":{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language.meta.model","$nm":"InterfaceModel"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The list of closed types that this class or interface satisfies."]},"$nm":"satisfiedTypes"}},"$nm":"ClassOrInterface"},"IncompatibleTypeException":{"super":{"$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Thrown when you invoke metamodel methods with invalid or incompatible type arguments.\n\nFor example if you try to get an attribute from a class and expect an attribute of `String`\ntype but it is an attribute of `Integer` type.\n"]},"$at":{"message":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"}},"$nm":"IncompatibleTypeException"},"MemberInterface":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"InterfaceModel"},{"$tp":[{"$mt":"tpm","$nm":"Container"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Type"}],"$pk":"ceylon.language.meta.model","$nm":"Interface"}],"$pk":"ceylon.language.meta.model","$nm":"Member"}],"$mt":"ifc","$tp":[{"variance":"in","$nm":"Container"},{"$def":{"$pk":"ceylon.language","$nm":"Anything"},"variance":"out","$nm":"Type"}],"$an":{"shared":[],"doc":["A member interface model that you can inspect."]},"$nm":"MemberInterface"}},"ceylon.language":{"Iterator":{"$mt":"ifc","$tp":[{"variance":"out","$nm":"Element"}],"$an":{"shared":[],"see":["Iterable"],"doc":["Produces elements of an `Iterable` object. Classes that \nimplement this interface should be immutable."],"by":["Gavin"]},"$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["The next element, or `finished` if there are no \nmore elements to be iterated."]},"$nm":"next"}},"$nm":"Iterator"},"LateAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"LateAnnotation"},{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"ValueDeclaration"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[late]]."]},"$annot":"1","$nm":"LateAnnotation"},"Callable":{"$mt":"ifc","$tp":[{"variance":"out","$nm":"Return"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"variance":"in","$nm":"Arguments"}],"$an":{"shared":[],"see":["Tuple"],"doc":["A reference to a function. The type arguments encode \nthe function return type and parameter types. The \nparameter types are typically represented as a tuple\ntype. For example, the type of the function reference \n`plus<Float>` is:\n\n    Callable<Float,[Float,Float]>\n\nwhich we usually abbreviate `Float(Float,Float)`. Any\ninstance of `Callable` may be _invoked_ by supplying a \npositional argument list:\n\n    Float(Float,Float) add = plus<Float>;\n    value four = add(2.0, 2.0);\n\nor by supplying a tuple containing the arguments:\n\n    Float(Float,Float) add = plus<Float>;\n    [Float,Float] twoAndTwo = [2.0, 2.0];\n    value four = add(*twoAndTwo);\n\nThis interface may not be implemented by user code."]},"$nm":"Callable"},"ThrownExceptionAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"Declaration"},"$mt":"prm","$an":{"shared":[],"doc":["The [[Exception]] type that this thrown."]},"$nm":"type"},{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[],"doc":["A description, in Markdown syntax, of the circumstances that \ncause this exception to be thrown."]},"$nm":"when"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"ThrownExceptionAnnotation"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.language.meta.declaration","$nm":"ValueDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"}]}],"$pk":"ceylon.language","$nm":"SequencedAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[]},"$annot":"1","$at":{"when":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["A description, in Markdown syntax, of the circumstances that \ncause this exception to be thrown."]},"$nm":"when"},"type":{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"Declaration"},"$mt":"attr","$an":{"shared":[],"doc":["The [[Exception]] type that this thrown."]},"$nm":"type"}},"$nm":"ThrownExceptionAnnotation"},"Array":{"super":{"$pk":"ceylon.language","$nm":"Object"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Array"}],"$pk":"ceylon.language","$nm":"Cloneable"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Array"}],"$pk":"ceylon.language","$nm":"Ranged"}],"$mt":"cls","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"final":[],"native":[],"doc":["A fixed-size array of elements. An array may have zero\nsize (an empty array). Arrays are mutable. Any element\nof an array may be set to a new value.\n\nThis class is provided primarily to support interoperation \nwith Java, and for some performance-critical low-level \nprogramming tasks."]},"$m":{"copyTo":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$an":{"doc":["The array into which to copy the elements."]},"$nm":"other"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$an":{"doc":["The index of the first element in this array to copy."]},"$nm":"sourcePosition"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$an":{"doc":["The index in the given array into which to \ncopy the first element."]},"$nm":"destinationPosition"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$an":{"doc":["The number of elements to copy."]},"$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Efficiently copy the elements in the segment \n`sourcePosition:length` of this array to the segment \n`destinationPosition:length` of the given array."]},"$nm":"copyTo"},"set":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$an":{"doc":["The index of the element to replace."]},"$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$an":{"doc":["The new element."]},"$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Replace the existing element at the specified index \nwith the given element. Does nothing if the specified \nindex is negative or larger than the index of the \nlast element in the array."]},"$nm":"set"}},"$at":{"rest":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The rest of the array, without the first element."],"actual":[]},"$nm":"rest"},"reversed":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Reverse this array, returning a new array."],"actual":[]},"$nm":"reversed"}},"$nm":"Array"},"ArraySequence":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"}],"$mt":"cls","$tp":[{"variance":"out","$nm":"Element"}],"$an":{"shared":[],"native":[],"see":["SequenceBuilder","SequenceAppender"],"doc":["An immutable `Sequence` implemented using the platform's \nnative array type. Where possible copying of the underlying \narray is avoided."]},"$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"native":[],"actual":[]},"$nm":"iterator"},"defines":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"actual":[]},"$nm":"defines"},"get":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"actual":[]},"$nm":"get"},"count":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"actual":[]},"$nm":"count"},"spanTo":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"actual":[]},"$nm":"spanTo"},"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"segment":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"actual":[]},"$nm":"segment"},"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"actual":[]},"$nm":"contains"},"spanFrom":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"actual":[]},"$nm":"spanFrom"},"span":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"actual":[]},"$nm":"span"}},"$at":{"lastIndex":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"ArraySequence"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"last":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"native":[],"actual":[]},"$nm":"last"},"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"reversed":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"ArraySequence"},"$mt":"attr","$an":{"shared":[],"native":[],"actual":[]},"$nm":"reversed"},"rest":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"native":[],"actual":[]},"$nm":"rest"},"first":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"native":[],"actual":[]},"$nm":"first"},"elements":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"elements"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"actual":[]},"$nm":"size"}},"$nm":"ArraySequence"},"Singleton":{"super":{"$pk":"ceylon.language","$nm":"Object"},"$ps":[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"}],"$mt":"cls","$tp":[{"variance":"out","$nm":"Element"}],"$an":{"shared":[],"doc":["A sequence with exactly one element, which may be null."]},"$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$c":{"SingletonIterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"cls","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"done":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"done"}},"$nm":"SingletonIterator"}},"$nm":"iterator"},"sort":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Singleton"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"a"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"b"}]],"$mt":"prm","$pt":"f","$nm":"comparing"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"sort"},"get":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the contained element, if the specified \nindex is `0`."],"actual":[]},"$nm":"get"},"count":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns `1` if this `Singleton`'s element\nsatisfies the predicate, or `0` otherwise."],"actual":[]},"$nm":"count"},"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"doc":["A `Singleton` can be equal to another `List` if \nthat `List` has only one element which is equal to \nthis `Singleton`'s element."],"actual":[]},"$nm":"equals"},"segment":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Empty"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Singleton"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a `Singleton` if the given starting index \nis `0` and the given `length` is greater than `0`.\nOtherwise, returns an instance of `Empty`."],"actual":[]},"$nm":"segment"},"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns `true` if the specified element is this \n`Singleton`'s element."],"actual":[]},"$nm":"contains"},"every":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"every"},"fold":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$mt":"prm","$nm":"initial"},{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$mt":"prm","$nm":"partial"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"prm","$pt":"f","$nm":"accumulating"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"fold"},"taking":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Singleton"},{"$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"take"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"taking"},"spanTo":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Empty"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Singleton"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"any":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"any"},"map":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"}],"$pk":"ceylon.language","$nm":"Sequence"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"map"},"findLast":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"findLast"},"spanFrom":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Empty"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Singleton"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"skipping":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Singleton"},{"$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"skip"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"skipping"},"find":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"find"},"filter":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Singleton"},{"$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"filter"},"span":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Empty"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Singleton"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a `Singleton` if the given starting index \nis `0`. Otherwise, returns an instance of `Empty`."],"actual":[]},"$nm":"span"}},"$at":{"lastIndex":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `0`."],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Singleton"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a `Singleton` with the same element."],"actual":[]},"$nm":"clone"},"element":{"$t":{"$nm":"Element"},"$mt":"attr","$nm":"element"},"last":{"$t":{"$nm":"Element"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the element contained in this `Singleton`."],"actual":[]},"$nm":"last"},"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"coalesced":{"$t":{"$tp":[{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Object"}]},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Singleton itself, or empty"],"actual":[]},"$nm":"coalesced"},"reversed":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Singleton"},"$mt":"gttr","$an":{"shared":[],"doc":["Return this singleton."],"actual":[]},"$nm":"reversed"},"rest":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `Empty`."],"actual":[]},"$nm":"rest"},"first":{"$t":{"$nm":"Element"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the element contained in this `Singleton`."],"actual":[]},"$nm":"first"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `1`."],"actual":[]},"$nm":"size"}},"$nm":"Singleton"},"byKey":{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"y"}]],"$mt":"prm","$pt":"f","$nm":"comparing"}],[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"x"},{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"}],"$an":{"shared":[],"see":["byItem"],"doc":["A comparator for `Entry`s which compares their keys \naccording to the given `comparing()` function."]},"$nm":"byKey"},"Comparable":{"of":[{"$nm":"Other"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Comparable"}],"variance":"in","$nm":"Other"}],"$an":{"shared":[],"doc":["The general contract for values whose magnitude can be \ncompared. `Comparable` imposes a total ordering upon\ninstances of any type that satisfies the interface.\nIf a type `T` satisfies `Comparable<T>`, then instances\nof `T` may be compared using the comparison operators\n`<`, `>`, `<=`, >=`, and `<=>`.\n\nThe total order of a type must be consistent with the \ndefinition of equality for the type. That is, there\nare three mutually exclusive possibilities:\n\n- `x<y`,\n- `x>y`, or\n- `x==y`"],"by":["Gavin"]},"$m":{"compare":{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"see":["equals"],"doc":["Compares this value with the given value. \nImplementations must respect the constraints that: \n\n- `x==y` if and only if `x<=>y == equal` \n   (consistency with `equals()`), \n- if `x>y` then `y<x` (symmetry), and \n- if `x>y` and `y>z` then `x>z` (transitivity)."]},"$nm":"compare"}},"$nm":"Comparable","$st":"Other"},"AbstractAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"AbstractAnnotation"},{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[abstract]]."]},"$annot":"1","$nm":"AbstractAnnotation"},"Comparison":{"abstract":"1","super":{"$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.language","$nm":"larger"},{"$pk":"ceylon.language","$nm":"smaller"},{"$pk":"ceylon.language","$nm":"equal"}],"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"string"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"see":["Comparable"],"doc":["The result of a comparison between two `Comparable` \nobjects."],"by":["Gavin"]},"$m":{"largerThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"deprecated":[]},"$nm":"largerThan"},"equal":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"deprecated":[]},"$nm":"equal"},"asSmallAs":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"deprecated":[]},"$nm":"asSmallAs"},"asLargeAs":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"deprecated":[]},"$nm":"asLargeAs"},"smallerThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"deprecated":[]},"$nm":"smallerThan"},"unequal":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"deprecated":[]},"$nm":"unequal"}},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"Comparison"},"annotation":{"$t":{"$pk":"ceylon.language","$nm":"AnnotationAnnotation"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"see":["Annotation"],"doc":["Annotation to mark a class as an *annotation class*, or a \ntop-level function as an *annotation constructor*."]},"$annot":"1","$nm":"annotation"},"Empty":{"of":[{"$pk":"ceylon.language","$nm":"empty"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Sequential"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Ranged"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"ifc","$an":{"shared":[],"see":["Sequence"],"doc":["A sequence with no elements. The type `Empty` may be\nabbreviated `[]`, and an instance is produced by the \nexpression `[]`. That is, in the following expression,\n`e` has type `[]` and refers to the value `[]`:\n\n    [] none = [];\n\n(Whether the syntax `[]` refers to the type or the \nvalue depends upon how it occurs grammatically.)"]},"$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns an iterator that is already exhausted."],"actual":[]},"$nm":"iterator"},"sort":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"a"},{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"b"}]],"$mt":"prm","$pt":"f","$nm":"comparing"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"sort"},"get":{"$t":{"$pk":"ceylon.language","$nm":"Null"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns `null` for any given index."],"actual":[]},"$nm":"get"},"count":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns 0 for any given predicate."],"actual":[]},"$nm":"count"},"select":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"select"},"segment":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns an `Empty` for any given segment."],"actual":[]},"$nm":"segment"},"by":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"by"},"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns `false` for any given element."],"actual":[]},"$nm":"contains"},"every":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"every"},"fold":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$mt":"prm","$nm":"initial"},{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$mt":"prm","$nm":"partial"},{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"accumulating"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"fold"},"taking":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"take"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"taking"},"following":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"head"}]],"$mt":"mthd","$tp":[{"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"following"},"withTrailing":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"actual":[]},"$nm":"withTrailing"},"defines":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"defines"},"spanTo":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns an `Empty` for any given span."],"actual":[]},"$nm":"spanTo"},"chain":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"},{"$mt":"tpm","$nm":"OtherAbsent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"},{"$mt":"tpm","$nm":"OtherAbsent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$tp":[{"$nm":"Other"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Null"}],"$nm":"OtherAbsent"}],"$an":{"shared":[],"doc":["Returns `other`."],"actual":[]},"$nm":"chain"},"any":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"any"},"map":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"collecting"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"map"},"withLeading":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"actual":[]},"$nm":"withLeading"},"spanFrom":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns an `Empty` for any given span."],"actual":[]},"$nm":"spanFrom"},"skipping":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"skip"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"skipping"},"find":{"$t":{"$pk":"ceylon.language","$nm":"Null"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"find"},"filter":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"filter"},"collect":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"collecting"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"collect"},"span":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns an `Empty` for any given span."],"actual":[]},"$nm":"span"}},"$at":{"lastIndex":{"$t":{"$pk":"ceylon.language","$nm":"Null"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `null`."],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns an `Empty`."],"actual":[]},"$nm":"clone"},"last":{"$t":{"$pk":"ceylon.language","$nm":"Null"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `null`."],"actual":[]},"$nm":"last"},"indexed":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns an `Empty`."],"actual":[]},"$nm":"indexed"},"sequence":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns an `Empty`."],"actual":[]},"$nm":"sequence"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a string description of the empty sequence: \n`{}`."],"actual":[]},"$nm":"string"},"coalesced":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns an `Empty`."],"actual":[]},"$nm":"coalesced"},"empty":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `true`."],"actual":[]},"$nm":"empty"},"rest":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns an `Empty`."],"actual":[]},"$nm":"rest"},"reversed":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns an `Empty`."],"actual":[]},"$nm":"reversed"},"first":{"$t":{"$pk":"ceylon.language","$nm":"Null"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `null`."],"actual":[]},"$nm":"first"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns 0."],"actual":[]},"$nm":"size"}},"$nm":"Empty"},"ActualAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"ActualAnnotation"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.language.meta.declaration","$nm":"ValueDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"ClassOrInterfaceDeclaration"}]}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[actual]]."]},"$annot":"1","$nm":"ActualAnnotation"},"SeeAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"Declaration"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$an":{"shared":[],"doc":["The program elements being referred to."]},"$nm":"programElements"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"SeeAnnotation"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Annotated"}],"$pk":"ceylon.language","$nm":"SequencedAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[]},"$annot":"1","$at":{"programElements":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"Declaration"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"doc":["The program elements being referred to."]},"$nm":"programElements"}},"$nm":"SeeAnnotation"},"Enumerable":{"of":[{"$nm":"Other"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Enumerable"}],"variance":"out","$nm":"Other"}],"$an":{"shared":[],"doc":["Abstraction of ordinal types whose instances can be \nmapped to the integers or to a range of integers."]},"$at":{"integerValue":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The corresponding integer. The implementation must\nsatisfy these constraints:\n\n    (x.successor).integerValue = x.integerValue+1\n    (x.predecessor).integerValue = x.integerValue-1\n\nfor every instance `x` of the enumerable type."]},"$nm":"integerValue"}},"$nm":"Enumerable","$st":"Other"},"combine":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$nm":"OtherElement"},"$mt":"prm","$nm":"otherElement"}]],"$mt":"prm","$pt":"f","$nm":"combination"},{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"},{"$t":{"$tp":[{"$mt":"tpm","$nm":"OtherElement"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"otherElements"}]],"$mt":"mthd","$tp":[{"$nm":"Result"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Null"}],"$nm":"Absent"},{"$nm":"Element"},{"$nm":"OtherElement"}],"$an":{"shared":[],"doc":["Applies a function to each element of two `Iterable`s\nand returns an `Iterable` with the results."],"by":["Gavin","Enrique Zamudio","Tako"]},"$m":{"combination":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$nm":"OtherElement"},"$mt":"prm","$nm":"otherElement"}]],"$mt":"mthd","$nm":"combination"}},"$nm":"combine","$o":{"iterable":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"obj","$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Result"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Result"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"otherIter":{"$t":{"$tp":[{"$mt":"tpm","$nm":"OtherElement"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"attr","$nm":"otherIter"},"iter":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"attr","$nm":"iter"}},"$nm":"iterator"}}}},"$nm":"iterable"}}},"empty":{"super":{"$pk":"ceylon.language","$nm":"Object"},"satisfies":[{"$pk":"ceylon.language","$nm":"Empty"}],"$mt":"obj","$an":{"shared":[],"doc":["A sequence with no elements, abbreviated `[]`. The \nunique instance of the type `[]`."]},"$nm":"empty"},"DeprecationAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[],"doc":["A description, in Markdown syntax, of why the element is deprecated, \nand what replacements are available."]},"$nm":"description"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"DeprecationAnnotation"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Annotated"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[deprecated]]."]},"$annot":"1","$at":{"reason":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"String"}]},"$mt":"gttr","$an":{"shared":[],"doc":["A description, in Markdown syntax, of why the element is deprecated, \nand what replacements are available, or null."]},"$nm":"reason"},"description":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["A description, in Markdown syntax, of why the element is deprecated, \nand what replacements are available."]},"$nm":"description"}},"$nm":"DeprecationAnnotation"},"false":{"super":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"obj","$an":{"shared":[],"doc":["A value representing falsity in Boolean logic."]},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"false"},"compose":{"$t":{"$tp":[{"$mt":"tpm","$nm":"X"},{"$mt":"tpm","$nm":"Args"}],"$pk":"ceylon.language","$nm":"Callable"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"X"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Y"},{"$mt":"tpm","$nm":"Y"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"x"},{"$t":{"$tp":[{"$mt":"tpm","$nm":"Y"},{"$mt":"tpm","$nm":"Args"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$tp":[{"$nm":"X"},{"$nm":"Y"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Args"}],"$an":{"shared":[],"see":["curry","uncurry"],"doc":["Composes two functions, returning a function equivalent to \ninvoking `x(y(args))`."]},"$nm":"compose"},"Sequential":{"of":[{"$pk":"ceylon.language","$nm":"Empty"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Ranged"},{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"ifc","$tp":[{"variance":"out","$nm":"Element"}],"$an":{"shared":[],"see":["Tuple"],"doc":["A possibly-empty, immutable sequence of values. The \ntype `Sequential<Element>` may be abbreviated \n`[Element*]` or `Element[]`. \n\n`Sequential` has two enumerated subtypes:\n\n- `Empty`, abbreviated `[]`, represents an empty \n   sequence, and\n- `Sequence<Element>`, abbreviated `[Element+]` \n   represents a non-empty sequence, and has the very\n   important subclass `Tuple`."]},"$m":{"terminal":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"terminal"},"trimTrailing":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"trimming"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"trimTrailing"},"initial":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"initial"},"trimLeading":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"trimming"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"trimLeading"},"repeat":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"times"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Returns a sequence formed by repeating the elements of \nthis sequence the given number of times, or an empty \nsequence if `times<=0`."],"actual":[]},"$nm":"repeat"},"trim":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"trimming"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"trim"}},"$at":{"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"clone"},"sequence":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["This sequence."],"actual":[]},"$nm":"sequence"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["A string of form `\"[ x, y, z ]\"` where `x`, `y`, \nand `z` are the `string` representations of the \nelements of this collection, as produced by the\niterator of the collection, or the string `\"{}\"` \nif this collection is empty. If the collection \niterator produces the value `null`, the string\nrepresentation contains the string `\"null\"`."],"actual":[]},"$nm":"string"},"rest":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The rest of the sequence, without the first \nelement."],"actual":[]},"$nm":"rest"},"reversed":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Reverse this sequence, returning a new sequence."],"actual":[]},"$nm":"reversed"}},"$nm":"Sequential"},"minIntegerValue":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The minimum `Integer` value that can be represented\nby the backend"]},"$nm":"minIntegerValue"},"Finished":{"abstract":"1","super":{"$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.language","$nm":"finished"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"see":["Iterator"],"doc":["The type of the value that indicates that \nan `Iterator` is exhausted and has no more \nvalues to return."]},"$nm":"Finished"},"plus":{"$t":{"$nm":"Value"},"$ps":[[{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Summable"}],"$nm":"Value"}],"$an":{"shared":[],"see":["times","sum"],"doc":["Add the given `Summable` values."]},"$nm":"plus"},"final":{"$t":{"$pk":"ceylon.language","$nm":"FinalAnnotation"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to mark a class as final. A `final` class may \nnot be extended. Marking a class as final affects disjoint\ntype analysis."]},"$annot":"1","$nm":"final"},"coalesce":{"$t":{"$tp":[{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Object"}]},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$an":{"doc":["The values, some of which may be null."]},"$nm":"values"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"doc":["Return a sequence containing the given values which are\nnot null. If there are no values which are not null,\nreturn an empty sequence."]},"$nm":"coalesce"},"Entry":{"super":{"$pk":"ceylon.language","$nm":"Object"},"$ps":[{"$t":{"$nm":"Key"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The key used to access the entry."]},"$nm":"key"},{"$t":{"$nm":"Item"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The value associated with the key."]},"$nm":"item"}],"$mt":"cls","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"variance":"out","$nm":"Key"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"variance":"out","$nm":"Item"}],"$an":{"shared":[],"final":[],"doc":["A pair containing a _key_ and an associated value called \nthe _item_. Used primarily to represent the elements of \na `Map`. The type `Entry<Key,Item>` may be abbreviated \n`Key->Item`. An instance of `Entry` may be constructed \nusing the `->` operator:\n\n    String->Person entry = person.name->person;\n"],"by":["Gavin"]},"$m":{"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Determines if this entry is equal to the given\nentry. Two entries are equal if they have the same\nkey and the same value."],"actual":[]},"$nm":"equals"}},"$at":{"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a description of the entry in the form \n`key->item`."],"actual":[]},"$nm":"string"},"item":{"$t":{"$nm":"Item"},"$mt":"attr","$an":{"shared":[],"doc":["The value associated with the key."]},"$nm":"item"},"key":{"$t":{"$nm":"Key"},"$mt":"attr","$an":{"shared":[],"doc":["The key used to access the entry."]},"$nm":"key"}},"$nm":"Entry"},"aInt":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"aInt"},"Invertable":{"of":[{"$nm":"Inverse"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Inverse"}],"$pk":"ceylon.language","$nm":"Invertable"}],"variance":"out","$nm":"Inverse"}],"$an":{"shared":[],"see":["Integer","Float"],"doc":["Abstraction of types which support a unary additive inversion\noperation. For a numeric type, this should return the \nnegative of the argument value. Note that the type \nparameter of this interface is not restricted to be a \nself type, in order to accommodate the possibility of \ntypes whose additive inverse can only be expressed in terms of \na wider type."],"by":["Gavin"]},"$at":{"positiveValue":{"$t":{"$nm":"Inverse"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The value itself, expressed as an instance of the\nwider type."]},"$nm":"positiveValue"},"negativeValue":{"$t":{"$nm":"Inverse"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The additive inverse of the value, which may be expressed\nas an instance of a wider type."]},"$nm":"negativeValue"}},"$nm":"Invertable","$st":"Inverse"},"Cloneable":{"of":[{"$nm":"Clone"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Clone"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"variance":"out","$nm":"Clone"}],"$an":{"shared":[],"doc":["Abstract supertype of objects whose value can be \ncloned."]},"$at":{"clone":{"$t":{"$nm":"Clone"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Obtain a clone of this object. For a mutable \nobject, this should return a copy of the object. \nFor an immutable object, it is acceptable to return\nthe object itself."]},"$nm":"clone"}},"$nm":"Cloneable","$st":"Clone"},"Ordinal":{"of":[{"$nm":"Other"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"variance":"out","$nm":"Other"}],"$an":{"shared":[],"see":["Character","Integer","Integral","Range"],"doc":["Abstraction of ordinal types, that is, types with \nsuccessor and predecessor operations, including\n`Integer` and other `Integral` numeric types.\n`Character` is also considered an ordinal type. \n`Ordinal` types may be used to generate a `Range`."],"by":["Gavin"]},"$at":{"predecessor":{"$t":{"$nm":"Other"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The predecessor of this value."]},"$nm":"predecessor"},"successor":{"$t":{"$nm":"Other"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The successor of this value."]},"$nm":"successor"}},"$nm":"Ordinal","$st":"Other"},"maxIntegerValue":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The maximum `Integer` value that can be represented\nby the backend"]},"$nm":"maxIntegerValue"},"largest":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Element"}],"$an":{"shared":[],"see":["Comparable","smallest","max"],"doc":["Given two `Comparable` values, return largest of the\ntwo."]},"$nm":"largest"},"native":{"$t":{"$pk":"ceylon.language","$nm":"NativeAnnotation"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to mark a member whose implementation is defined \nin platform-native code."]},"$annot":"1","$nm":"native"},"unflatten":{"$t":{"$nm":"Return"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Return"},{"$mt":"tpm","$nm":"Args"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"flatFunction"}],[{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$tp":[{"$nm":"Return"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Args"}],"$an":{"shared":[],"native":[],"see":["flatten"],"doc":["Given an arbitrary `Callable` with parameter types \n`P1`, `P2`, ..., `Pn` returns an equivalent `Callable` which \ntakes a single tuple argument of type `[P1, P2, ..., Pn]`."]},"$nm":"unflatten"},"formatInteger":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"integer"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"radix"}]],"$mt":"mthd","$an":{"shared":[],"throws":["AssertionException","if `radix` is not between `minRadix` and `maxRadix`"],"doc":["The string representation of `integer` in the `radix` base.\n`radix` must be between `minRadix` and `maxRadix` included.\n\nIf `integer` is negative, returned string will start by character `-`"]},"$nm":"formatInteger"},"greaterThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}],[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Returns a partial function that will compare an element\nto any other element and returns true if the compared\nelement is greater than its element.\nThis is useful in conjunction with methods that receive\na predicate function."]},"$nm":"greaterThan"},"Identifiable":{"$mt":"ifc","$an":{"shared":[],"doc":["The abstract supertype of all types with a well-defined\nnotion of identity. Values of type `Identifiable` may \nbe compared using the `===` operator to determine if \nthey are references to the same object instance. For\nthe sake of convenience, this interface defines a\ndefault implementation of value equality equivalent\nto identity. Of course, subtypes are encouraged to\nrefine this implementation."],"by":["Gavin"]},"$m":{"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Identity equality comparing the identity of the two \nvalues. May be refined by subtypes for which value \nequality is more appropriate. Implementations must\nrespect the constraint that if `x===y` then `x==y` \n(equality is consistent with identity)."],"actual":[]},"$nm":"equals"}},"$at":{"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"default":[],"see":["identityHash"],"doc":["The system-defined identity hash value of the \ninstance. Subtypes which refine `equals()` must \nalso refine `hash`, according to the general \ncontract defined by `Object`."],"actual":[]},"$nm":"hash"}},"$nm":"Identifiable"},"language":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$mt":"obj","$an":{"shared":[],"native":[],"doc":["Contains information about the language"]},"$at":{"majorVersion":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The Ceylon language major version."]},"$nm":"majorVersion"},"majorVersionBinary":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The major version of the code generated for the underlying runtime."]},"$nm":"majorVersionBinary"},"minorVersion":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The Ceylon language minor version."]},"$nm":"minorVersion"},"versionName":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The Ceylon language release name."]},"$nm":"versionName"},"releaseVersion":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The Ceylon language release version."]},"$nm":"releaseVersion"},"minorVersionBinary":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The minor version of the code generated for the underlying runtime."]},"$nm":"minorVersionBinary"},"version":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The Ceylon language version."]},"$nm":"version"}},"$nm":"language"},"emptySet":{"super":{"$pk":"ceylon.language","$nm":"Object"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Set"}],"$mt":"obj","$an":{"shared":[],"doc":["A [[Set]] with no elements."]},"$m":{"intersection":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"intersection"},"iterator":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"containsAny":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"containsAny"},"superset":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"superset"},"count":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"count"},"select":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"select"},"by":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"by"},"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"every":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"every"},"fold":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$mt":"prm","$nm":"initial"},{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$mt":"prm","$nm":"partial"},{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"accumulating"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"fold"},"taking":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"take"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"taking"},"complement":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"complement"},"subset":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"subset"},"exclusiveUnion":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"exclusiveUnion"},"any":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"any"},"union":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"union"},"map":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"collecting"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"map"},"skipping":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"skip"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"skipping"},"find":{"$t":{"$pk":"ceylon.language","$nm":"Null"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"find"},"filter":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"filter"},"collect":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"collecting"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"collect"},"containsEvery":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"containsEvery"}},"$at":{"clone":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"empty":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"empty"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"emptySet"},"Null":{"abstract":"1","super":{"$pk":"ceylon.language","$nm":"Anything"},"of":[{"$pk":"ceylon.language","$nm":"null"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"see":["null"],"doc":["The type of the `null` value. Any union type of form \n`Null|T` is considered an _optional_ type, whose values\ninclude `null`. Any type of this form may be written as\n`T?` for convenience.\n\nThe `if (exists ... )` construct, or, alternatively,\nthe `assert (exists ...)` construct, may be used to\nnarrow an optional type to a _definite_ type, that is,\na subtype of `Object`:\n\n    String? firstArg = process.arguments.first;\n    if (exists firstArg) {\n        print(\"hello \" + firstArg);\n    }\n\nThe `else` operator evaluates its second operand if \nand only if its first operand is `null`:\n\n    String name = process.arguments.first else \"world\";\n\nThe `then` operator evaluates its second operand when\nits first operand evaluates to `true`, and to `null` \notherwise:\n\n    Float? diff = x>=y then x-y;"],"by":["Gavin"]},"$nm":"Null"},"array":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"native":[],"doc":["Create an array containing the given elements. If no\nelements are provided, create an empty array of the\ngiven element type."]},"$nm":"array"},"stringify":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"stringify"},"sort":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Element"}],"$an":{"shared":[],"see":["Comparable"],"doc":["Sort the given elements, returning a new sequence."]},"$nm":"sort"},"equalTo":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}],[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Returns a partial function that will compare an element\nto any other element and returns true if they're equal.\nThis is useful in conjunction with methods that receive\na predicate function."]},"$nm":"equalTo"},"AssertionException":{"super":{"$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["An exception that occurs when an assertion fails, that\nis, when a condition in an `assert` statement evaluates\nto false at runtime."]},"$at":{"message":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"}},"$nm":"AssertionException"},"suppressedExceptions":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Exception"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Exception"},"$mt":"prm","$nm":"exception"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Returns the exceptions that were suppressed (if any) during the handling of the given exception."]},"$nm":"suppressedExceptions"},"Ranged":{"of":[{"$nm":"Span"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Index"}],"$pk":"ceylon.language","$nm":"Comparable"}],"variance":"in","$nm":"Index"},{"variance":"out","$nm":"Span"}],"$an":{"shared":[],"see":["List","Sequence","String"],"doc":["Abstract supertype of ranged objects which map a range\nof `Comparable` keys to ranges of values. The type\nparameter `Span` abstracts the type of the resulting\nrange.\n\nA span may be obtained from an instance of `Ranged`\nusing the span operator:\n\n    print(\"hello world\"[0..5])\n"]},"$m":{"spanTo":{"$t":{"$nm":"Span"},"$ps":[[{"$t":{"$nm":"Index"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Obtain a span containing the mapped values between\nthe start of the receiver and the end index."]},"$nm":"spanTo"},"segment":{"$t":{"$nm":"Span"},"$ps":[[{"$t":{"$nm":"Index"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Obtain a segment containing the mapped values\nstarting from the given index, with the given \nlength."]},"$nm":"segment"},"spanFrom":{"$t":{"$nm":"Span"},"$ps":[[{"$t":{"$nm":"Index"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Obtain a span containing the mapped values between\nthe starting index and the end of the receiver."]},"$nm":"spanFrom"},"span":{"$t":{"$nm":"Span"},"$ps":[[{"$t":{"$nm":"Index"},"$mt":"prm","$nm":"from"},{"$t":{"$nm":"Index"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Obtain a span containing the mapped values between \nthe two given indices."]},"$nm":"span"}},"$nm":"Ranged","$st":"Span"},"arrayOfSize":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$an":{"doc":["The size of the resulting array. If the size\nis non-positive, an empty array will be \ncreated."]},"$nm":"size"},{"$t":{"$nm":"Element"},"$mt":"prm","$an":{"doc":["The element value with which to populate the\narray. All elements of the resulting array \nwill have the same value."]},"$nm":"element"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"native":[],"doc":["Create an array of the specified size, populating every \nindex with the given element. If the specified size is\nsmaller than `1`, return an empty array of the given\nelement type."]},"$nm":"arrayOfSize"},"OptionalImportAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"OptionalImportAnnotation"},{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"Import"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[optional]]."]},"$annot":"1","$nm":"OptionalImportAnnotation"},"times":{"$t":{"$nm":"Value"},"$ps":[[{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Numeric"}],"$nm":"Value"}],"$an":{"shared":[],"see":["plus","product"],"doc":["Multiply the given `Numeric` values."]},"$nm":"times"},"entries":{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Object"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"doc":["Produces a sequence of each index to element `Entry` \nfor the given sequence of values."]},"$nm":"entries"},"license":{"$t":{"$pk":"ceylon.language","$nm":"LicenseAnnotation"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"doc":["The URL of the license."]},"$nm":"url"}]],"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to specify the URL of the license of a module or \npackage."]},"$annot":"1","$nm":"license"},"FormalAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"FormalAnnotation"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.language.meta.declaration","$nm":"ValueDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"ClassOrInterfaceDeclaration"}]}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[formal]]."]},"$annot":"1","$nm":"FormalAnnotation"},"Object":{"abstract":"1","super":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"cls","$an":{"abstract":[],"shared":[],"see":["Basic","Null"],"doc":["The abstract supertype of all types representing \ndefinite values. Any two `Object`s may be compared\nfor value equality using the `==` and `!=` operators:\n\n    true==false\n    1==\"hello world\"\n    \"hello\"+\" \"+\"world\"==\"hello world\"\n    Singleton(\"hello world\")=={ \"hello world\" }\n\nHowever, since `Null` is not a subtype of `Object`, the\nvalue `null` cannot be compared to any other value\nusing `==`. Thus, value equality is not defined for\noptional types. This neatly voids the problem of\ndeciding the value of the expression `null==null`,\nwhich is simply illegal."],"by":["Gavin"]},"$m":{"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Determine if two values are equal. Implementations\nshould respect the constraints that:\n\n- if `x===y` then `x==y` (reflexivity), \n- if `x==y` then `y==x` (symmetry), \n- if `x==y` and `y==z` then `x==z` (transitivity).\n\nFurthermore it is recommended that implementations\nensure that if `x==y` then `x` and `y` have the\nsame concrete class."]},"$nm":"equals"}},"$at":{"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The hash value of the value, which allows the value\nto be an element of a hash-based set or key of a\nhash-based map. Implementations must respect the\nconstraint that if `x==y` then `x.hash==y.hash`."]},"$nm":"hash"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["A developer-friendly string representing the \ninstance. Concatenates the name of the concrete \nclass of the instance with the `hash` of the \ninstance. Subclasses are encouraged to refine this \nimplementation to produce a more meaningful \nrepresentation."]},"$nm":"string"}},"$nm":"Object"},"null":{"super":{"$pk":"ceylon.language","$nm":"Null"},"$mt":"obj","$an":{"shared":[],"doc":["The null value."],"by":["Gavin"]},"$nm":"null"},"LicenseAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[],"doc":["The URL of the license."]},"$nm":"url"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"LicenseAnnotation"},{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"Module"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[license]]."]},"$annot":"1","$at":{"url":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The URL of the license."]},"$nm":"url"}},"$nm":"LicenseAnnotation"},"min":{"$t":{"comp":"u","$ts":[{"$nm":"Absent"},{"$nm":"Value"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Value"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Null"}],"$nm":"Absent"}],"$an":{"shared":[],"see":["Comparable","max","smallest"],"doc":["Given a nonempty stream of `Comparable` values, \nreturn the smallest value in the stream."]},"$nm":"min"},"LazySet":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elems"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Set"}],"$mt":"cls","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"variance":"out","$nm":"Element"}],"$an":{"shared":[],"doc":["An implementation of `Set` that wraps an `Iterable` of\nelements. All operations on this `Set` are performed\non the `Iterable`."],"by":["Enrique Zamudio"]},"$m":{"complement":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"complement"},"intersection":{"$t":{"$tp":[{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"intersection"},"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"sorted":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"attr","$nm":"sorted"},"ready":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"ready"}},"$nm":"iterator"}}},"exclusiveUnion":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"exclusiveUnion"},"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"equals"},"union":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"union"}},"$at":{"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"LazySet"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"hash"},"elems":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"elems"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"LazySet"},"Float":{"super":{"$pk":"ceylon.language","$nm":"Object"},"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$nm":"float"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Float"}],"$pk":"ceylon.language","$nm":"Scalar"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Float"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Float"}],"$pk":"ceylon.language","$nm":"Exponentiable"}],"$mt":"cls","$an":{"shared":[],"final":[],"native":[],"doc":["An IEEE 754 64-bit [floating point number][]. A `Float` \nis capable of approximately representing numeric values \nbetween 2<sup>-1022<\/sup> and \n(2-2<sup>-52<\/sup>)×2<sup>1023<\/sup>, along with \nthe special values `infinity` and `-infinity`, and \nundefined values (Not a Number). Zero is represented by \ndistinct instances `+0`, `-0`, but these instances are \nequal. An undefined value is not equal to any other\nvalue, not even to itself.\n\n[floating point number]: http:\/\/www.validlab.com\/goldberg\/paper.pdf"]},"$at":{"strictlyNegative":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Determines if this value is a negative number, `-0`, \nor `-infinity`. Produces `false` for a positive \nnumber, `+0`, or undefined."]},"$nm":"strictlyNegative"},"sign":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The sign of this value. Produces `1` for a positive \nnumber or `infinity`. Produces `-1` for a negative\nnumber or `-infinity`. Produces `0` for `+0`, `-0`, \nor undefined."],"actual":[]},"$nm":"sign"},"infinite":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"see":["infinity","finite"],"doc":["Determines whether this value is infinite in \nmagnitude. Produces `true` for `infinity` and \n`-infinity`. Produces `false` for a finite number, \n`+0`, `-0`, or undefined."]},"$nm":"infinite"},"undefined":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Determines whether this value is undefined (that is, \nNot a Number or NaN). The undefined value has the \nproperty that it is not equal (`==`) to itself, as \na consequence the undefined value cannot sensibly \nbe used in most collections."]},"$nm":"undefined"},"strictlyPositive":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Determines if this value is a positive number, `+0`, \nor `infinity`. Produces `false` for a negative \nnumber, `-0`, or undefined."]},"$nm":"strictlyPositive"},"negative":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Determines if this value is a negative number or\n`-infinity`. Produces `false` for a positive number, \n`+0`, `-0`, or undefined."],"actual":[]},"$nm":"negative"},"positive":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Determines if this value is a positive number or\n`infinity`. Produces `false` for a negative number, \n`+0`, `-0`, or undefined."],"actual":[]},"$nm":"positive"},"float":{"$t":{"$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$nm":"float"},"finite":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"see":["infinite","infinity"],"doc":["Determines whether this value is finite. Produces\n`false` for `infinity`, `-infinity`, and undefined."]},"$nm":"finite"}},"$nm":"Float"},"deprecated":{"$t":{"$pk":"ceylon.language","$nm":"DeprecationAnnotation"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"doc":["A description, in Markdown syntax, of why the element is deprecated, \nand what replacements are available."]},"$nm":"reason"}]],"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to mark program elements which should not be \nused anymore."]},"$annot":"1","$nm":"deprecated"},"Collection":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Collection"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"ifc","$tp":[{"variance":"out","$nm":"Element"}],"$an":{"shared":[],"see":["List","Map","Set"],"doc":["Represents an iterable collection of elements of finite \nsize. `Collection` is the abstract supertype of `List`,\n`Map`, and `Set`.\n\nA `Collection` forms a `Category` of its elements.\n\nAll `Collection`s are `Cloneable`. If a collection is\nimmutable, it is acceptable that `clone` produce a\nreference to the collection itself. If a collection is\nmutable, `clone` should produce an immutable collection\ncontaining references to the same elements, with the\nsame structure as the original collection&mdash;that \nis, it should produce an immutable shallow copy of the\ncollection."]},"$m":{"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Return `true` if the given object is an element of\nthis collection. In this default implementation,\nand in most refining implementations, return `false`\notherwise. An acceptable refining implementation\nmay return `true` for objects which are not \nelements of the collection, but this is not \nrecommended. (For example, the `contains()` method \nof `String` returns `true` for any substring of the\nstring.)"],"actual":[]},"$nm":"contains"}},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["A string of form `\"{ x, y, z }\"` where `x`, `y`, \nand `z` are the `string` representations of the \nelements of this collection, as produced by the\niterator of the collection, or the string `\"{}\"` \nif this collection is empty. If the collection \niterator produces the value `null`, the string\nrepresentation contains the string `\"null\"`."],"actual":[]},"$nm":"string"},"empty":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Determine if the collection is empty, that is, if \nit has no elements."],"actual":[]},"$nm":"empty"}},"$nm":"Collection"},"Range":{"super":{"$pk":"ceylon.language","$nm":"Object"},"$ps":[{"$t":{"$nm":"Element"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The start of the range."],"actual":[]},"$nm":"first"},{"$t":{"$nm":"Element"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The end of the range."],"actual":[]},"$nm":"last"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"cls","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Element"}],"$an":{"shared":[],"final":[],"doc":["Represents the range of totally ordered, ordinal values \ngenerated by two endpoints of type `Ordinal` and \n`Comparable`. If the first value is smaller than the\nlast value, the range is increasing. If the first value\nis larger than the last value, the range is decreasing.\nIf the two values are equal, the range contains exactly\none element. The range is always nonempty, containing \nat least one value.\n\nA range may be produced using the `..` operator:\n\n    for (i in min..max) { ... }\n    if (char in 'A'..'Z') { ... }\n"],"by":["Gavin"]},"$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"doc":["An iterator for the elements of the range."],"actual":[]},"$c":{"RangeIterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"cls","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"current":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"current"}},"$nm":"RangeIterator"}},"$nm":"iterator"},"get":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"n"}]],"$mt":"mthd","$an":{"shared":[],"doc":["The element of the range that occurs `n` values after\nthe start of the range. Note that this operation \nis inefficient for large ranges."],"actual":[]},"$nm":"get"},"count":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Determines if two ranges are the same by comparing\ntheir endpoints."],"actual":[]},"$nm":"equals"},"segment":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"},{"$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"next":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$nm":"next"},"by":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"by"},"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Determines if the range includes the given object."],"actual":[]},"$nm":"contains"},"includes":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"prm","$nm":"sublist"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"includes"},"taking":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"},{"$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"take"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"taking"},"occurs":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"occurs"},"spanTo":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"},{"$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"containsElement":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Determines if the range includes the given value."]},"$nm":"containsElement"},"spanFrom":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"},{"$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"skipping":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"},{"$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"skip"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"skipping"},"span":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"},{"$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"lastIndex":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The index of the end of the range."],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the range itself, since ranges are \nimmutable."],"actual":[]},"$nm":"clone"},"decreasing":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Determines if the range is decreasing."]},"$nm":"decreasing"},"last":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"doc":["The end of the range."],"actual":[]},"$nm":"last"},"sequence":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns this range."],"actual":[]},"$nm":"sequence"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"coalesced":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the range itself, since a Range cannot\ncontain nulls."],"actual":[]},"$nm":"coalesced"},"reversed":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"},"$mt":"gttr","$an":{"shared":[],"doc":["Reverse this range, returning a new range."],"actual":[]},"$nm":"reversed"},"rest":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"gttr","$an":{"shared":[],"doc":["The rest of the range, without the start of the\nrange."],"actual":[]},"$nm":"rest"},"first":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"doc":["The start of the range."],"actual":[]},"$nm":"first"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The nonzero number of elements in the range."],"actual":[]},"$nm":"size"}},"$nm":"Range"},"max":{"$t":{"comp":"u","$ts":[{"$nm":"Absent"},{"$nm":"Value"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Value"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Null"}],"$nm":"Absent"}],"$an":{"shared":[],"see":["Comparable","min","largest"],"doc":["Given a nonempty stream of `Comparable` values, \nreturn the largest value in the stream."]},"$nm":"max"},"Integral":{"of":[{"$nm":"Other"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Numeric"},{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Enumerable"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Integral"}],"$nm":"Other"}],"$an":{"shared":[],"see":["Integer"],"doc":["Abstraction of integral numeric types. That is, types \nwith no fractional part, including `Integer`. The \ndivision operation for integral numeric types results \nin a remainder. Therefore, integral numeric types have \nan operation to determine the remainder of any division \noperation."],"by":["Gavin"]},"$m":{"remainder":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"see":["Numeric.divided"],"doc":["The remainder, after dividing this number by the \ngiven number."]},"$nm":"remainder"},"divides":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Determine if this number is a factor of the given \nnumber."]},"$nm":"divides"}},"$at":{"unit":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Determine if the number is one."]},"$nm":"unit"},"zero":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Determine if the number is zero."]},"$nm":"zero"}},"$nm":"Integral","$st":"Other"},"SequenceAppender":{"super":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$ps":[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","$nm":"elements"}],"$mt":"cls","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"native":[],"see":["SequenceBuilder"],"doc":["This class is used for constructing a new nonempty \nsequence by incrementally appending elements to an\nexisting nonempty sequence. The existing sequence is\nnot modified, since `Sequence`s are immutable. This \nclass is mutable but threadsafe."]},"$at":{"sequence":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The resulting nonempty sequence. If no elements \nhave been appended, the original nonempty \nsequence."],"actual":[]},"$nm":"sequence"},"elements":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"attr","$nm":"elements"}},"$nm":"SequenceAppender"},"smallest":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Element"}],"$an":{"shared":[],"see":["Comparable","largest","min"],"doc":["Given two `Comparable` values, return smallest of the\ntwo."]},"$nm":"smallest"},"NativeAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"NativeAnnotation"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Annotated"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[native]]."]},"$annot":"1","$nm":"NativeAnnotation"},"byIncreasing":{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$nm":"Value"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"prm","$pt":"f","$nm":"comparable"}],[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$tp":[{"$nm":"Element"},{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Value"}],"$an":{"shared":[],"see":["byDecreasing"],"doc":["A comparator which orders elements in increasing order \naccording to the `Comparable` returned by the given \n`comparable()` function."]},"$nm":"byIncreasing"},"larger":{"super":{"$pk":"ceylon.language","$nm":"Comparison"},"$mt":"obj","$an":{"shared":[],"doc":["The value is larger than the given value."]},"$nm":"larger"},"true":{"super":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"obj","$an":{"shared":[],"doc":["A value representing truth in Boolean logic."]},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"true"},"Exponentiable":{"of":[{"$nm":"This"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"This"}],"$pk":"ceylon.language","$nm":"Numeric"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"This"},{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Exponentiable"}],"$nm":"This"},{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Numeric"}],"$nm":"Other"}],"$an":{"shared":[],"see":["Integer","Float"],"doc":["Abstraction of numeric types that may be raised to a\npower. Note that the type of the exponent may be\ndifferent to the numeric type which can be \nexponentiated."]},"$m":{"power":{"$t":{"$nm":"This"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["The result of raising this number to the given\npower."]},"$nm":"power"}},"$nm":"Exponentiable","$st":"This"},"Keys":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Correspondence"},"$mt":"prm","$nm":"correspondence"}],"satisfies":[{"$pk":"ceylon.language","$nm":"Category"}],"$mt":"cls","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"variance":"in","$nm":"Key"},{"variance":"out","$nm":"Item"}],"$m":{"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"}},"$at":{"correspondence":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Correspondence"},"$mt":"attr","$nm":"correspondence"}},"$nm":"Keys"},"forKey":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"}]],"$mt":"prm","$pt":"f","$nm":"resulting"}],[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"entry"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"$nm":"Result"}],"$an":{"shared":[],"see":["forItem"],"doc":["A function that returns the result of the given `resulting()` function \non the key of a given `Entry`."]},"$nm":"forKey"},"Character":{"super":{"$pk":"ceylon.language","$nm":"Object"},"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"character"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Character"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Character"}],"$pk":"ceylon.language","$nm":"Enumerable"}],"$mt":"cls","$an":{"shared":[],"final":[],"native":[],"see":["String"],"doc":["A 32-bit Unicode character."],"by":["Gavin"]},"$at":{"control":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Determine if this character is an ISO control \ncharacter."]},"$nm":"control"},"integer":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The code point of the character."]},"$nm":"integer"},"lowercased":{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The lowercase representation of this character."]},"$nm":"lowercased"},"letter":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Determine if this character is a letter. That is,\nif its Unicode general category is *Lu*, *Ll*, \n*Lt*, *Lm*, or *Lo*."]},"$nm":"letter"},"uppercased":{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The uppercase representation of this character."]},"$nm":"uppercased"},"whitespace":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Determine if this character is a whitespace character. \nThe following characters are whitespace characters:\n\n* *LINE FEED*, `\\n` or `\\{#000A}`,\n* *FORM FEED*, `\\f` or `\\{#000C}`,\n* *CARRIAGE RETURN*, `\\r` or `\\{#000D}`,\n* *HORIZONTAL TABULATION*, `\\t` or `\\{#0009}`,\n* *VERTICAL TABULATION*, `\\{#000B}`,\n* *FILE SEPARATOR*, `\\{#001C}`,\n* *GROUP SEPARATOR*, `\\{#001D}`,\n* *RECORD SEPARATOR*, `\\{#001E}`,\n* *UNIT SEPARATOR*, `\\{#001F}`, and\n* any Unicode character in the general category \n  *Zs*, *Zl*, or *Zp* that is not a non-breaking \n  space."]},"$nm":"whitespace"},"titlecased":{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The title case representation of this character."]},"$nm":"titlecased"},"character":{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"attr","$nm":"character"},"uppercase":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Determine if this is an uppercase representation of\nthe character. That is, if its Unicode general \ncategory is *Lu*."]},"$nm":"uppercase"},"digit":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Determine if this character is a numeric digit.\nThat is, if its Unicode general category is *Nd*."]},"$nm":"digit"},"lowercase":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Determine if this is a lowercase representation of\nthe character. That is, if its Unicode general \ncategory is *Ll*."]},"$nm":"lowercase"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["A string containg just this character."],"actual":[]},"$nm":"string"},"titlecase":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Determine if this is a title case representation of\nthe character. That is, if its Unicode general \ncategory is *Lt*."]},"$nm":"titlecase"}},"$nm":"Character"},"curry":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Return"},{"$mt":"tpm","$nm":"Rest"}],"$pk":"ceylon.language","$nm":"Callable"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Return"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Argument"},{"$mt":"tpm","$nm":"First"},{"$mt":"tpm","$nm":"Rest"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"f"}],[{"$t":{"$nm":"First"},"$mt":"prm","$nm":"first"}]],"$mt":"mthd","$tp":[{"$nm":"Return"},{"$nm":"Argument"},{"satisfies":[{"$nm":"Argument"}],"$nm":"First"},{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Argument"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Rest"}],"$an":{"shared":[],"see":["uncurry","compose"],"doc":["Curries a function, returning a function of multiple parameter lists,\ngiven a function of multiple parameters."]},"$nm":"curry"},"product":{"$t":{"$nm":"Value"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Numeric"}],"$nm":"Value"}],"$an":{"shared":[],"see":["sum"],"doc":["Given a nonempty stream of `Numeric` values, return \nthe product of the values."]},"$nm":"product"},"process":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$mt":"obj","$an":{"shared":[],"native":[],"doc":["Represents the current process (instance of the virtual\nmachine)."],"by":["Gavin","Tako"]},"$m":{"readLine":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Read a line of input text from the standard input \nof the virtual machine process."]},"$nm":"readLine"},"writeErrorLine":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Print a line to the standard error of the \nvirtual machine process."]},"$nm":"writeErrorLine"},"writeError":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Print a string to the standard error of the \nvirtual machine process."]},"$nm":"writeError"},"propertyValue":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"String"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["The value of the given system property of the virtual\nmachine, if any."]},"$nm":"propertyValue"},"namedArgumentValue":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"String"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["The value of the first argument of form `-name=value`, \n`--name=value`, or `-name value` specified among the \ncommand line arguments to the virtual machine, if\nany."]},"$nm":"namedArgumentValue"},"write":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Print a string to the standard output of the \nvirtual machine process."]},"$nm":"write"},"namedArgumentPresent":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Determine if an argument of form `-name` or `--name` \nwas specified among the command line arguments to \nthe virtual machine."]},"$nm":"namedArgumentPresent"},"writeLine":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[],"see":["print"],"doc":["Print a line to the standard output of the \nvirtual machine process."]},"$nm":"writeLine"},"exit":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"code"}]],"$mt":"mthd","$an":{"shared":[],"native":[]},"$nm":"exit"}},"$at":{"os":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Returns the name of the operating system this \nprocess is running on."]},"$nm":"os"},"vmVersion":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Returns the version of the virtual machine this \nprocess is running on."]},"$nm":"vmVersion"},"vm":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Returns the name of the virtual machine this \nprocess is running on."]},"$nm":"vm"},"osVersion":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Returns the version of the operating system this \nprocess is running on."]},"$nm":"osVersion"},"newline":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The line ending character sequence on this platform."]},"$nm":"newline"},"arguments":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The command line arguments to the virtual machine."]},"$nm":"arguments"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"locale":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Returns the IETF language tag representing the\ndefault locale for this virtual machine."]},"$nm":"locale"},"nanoseconds":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The elapsed time in nanoseconds since an arbitrary\nstarting point."]},"$nm":"nanoseconds"},"timezoneOffset":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Returns the offset from UTC, in milliseconds, of\nthe default timezone for this virtual machine."]},"$nm":"timezoneOffset"},"milliseconds":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The elapsed time in milliseconds since midnight, \n1 January 1970."]},"$nm":"milliseconds"}},"$nm":"process"},"forItem":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"prm","$pt":"f","$nm":"resulting"}],[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"entry"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"},{"$nm":"Result"}],"$an":{"shared":[],"see":["forKey"],"doc":["A function that returns the result of the given `resulting()` function \non the item of a given `Entry`."]},"$nm":"forItem"},"shuffle":{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"FirstArgs"}],"$pk":"ceylon.language","$nm":"Callable"},{"$mt":"tpm","$nm":"SecondArgs"}],"$pk":"ceylon.language","$nm":"Callable"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"SecondArgs"}],"$pk":"ceylon.language","$nm":"Callable"},{"$mt":"tpm","$nm":"FirstArgs"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"f"}]],"$mt":"mthd","$tp":[{"$nm":"Result"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"FirstArgs"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"SecondArgs"}],"$an":{"shared":[]},"$nm":"shuffle"},"Annotation":{"of":[{"$nm":"Value"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Annotation"}],"variance":"out","$nm":"Value"}],"$an":{"shared":[],"see":["OptionalAnnotation","SequencedAnnotation","annotations","optionalAnnotation","sequencedAnnotations"],"doc":["The supertype of all *annotation classes*. \n\n### Annotation classes\n\nAn *annotation class* must satisfy `Annotation`,\n[[OptionalAnnotation]] or [[SequencedAnnotation]]\nand must be declared with the `final` and `annotation` annotations. \nFor example:\n\n    \"An annotation class.\"\n    final annotation class Example(shared String description) \n          satisfies Annotation {}\n\nAnnotation classes which satisfy `Annotation` \ndirectly may be applied to any program element that supports \nannotations (see [[Annotated]]). In practice, annotation classes often \nsatisfy [[OptionalAnnotation]] or [[SequencedAnnotation]] in order \nto prevent annotations being applied to inappropriate program elements.\n\nEach initializer parameter of an annotation class must have one of the \nfollowing types:\n\n* `Integer`, `Float`, `Character`, or `String`,\n* an enumerated type whose cases are all anonymous classes, \n  such as `Boolean`,\n* a subtype of [[ceylon.language.meta.declaration::Declaration]]\n* an annotation class,\n* `{T*}` or `[T*]` where `T` is a legal annotation parameter type, or\n* any tuple type whose element types are legal annotation parameter types.\n\nAn initializer parameter of an annotation class may be variadic \nor defaulted.\n\n### Annotation constructors\n\nAn *annotation constructor* is simply a top level function, annotated with \n`annotation` whose return type is an annotation class type. For example:\n\n    \"An annotation constructor.\"\n    annotation Example example(String description=\"\") \n        => Example(description);\n\nEach parameter of an annotation constructor must have one of the \nfollowing types:\n\n* `Integer`, `Float`, `Character`, or `String`,\n* an enumerated type whose cases are all anonymous classes, \n  such as `Boolean`,\n* a subtype of [[ceylon.language.meta.declaration::Declaration]],\n* an annotation type,\n* `{T*}` or `[T*]` where `T` is a legal annotation constructor parameter \n  type, or\n* any tuple type whose element types are legal annotation constructor \n  parameter types.\n\nA parameter of an annotation constructor may be variadic or defaulted.\n\nThe constructor must simply instantiate and return the annotation class, \nand there are strict rules about the arguments to the instantiation.\n\nAn annotation class can have multiple annotation constructors.\n"]},"$nm":"Annotation","$st":"Value"},"ConstrainedAnnotation":{"of":[{"$nm":"Value"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Annotation"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Annotation"}],"variance":"out","$nm":"Value"},{"variance":"out","$nm":"Values"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Annotated"}],"variance":"in","$nm":"ProgramElement"}],"$an":{"shared":[],"see":["Annotation"],"doc":["An annotation constrained to appear only on certain \nprogram elements, and only with certain values. \n\nThis interface should not be satisfied directly. \nInstead either [[OptionalAnnotation]] or [[SequencedAnnotation]] \nshould be satisfied."]},"$m":{"occurs":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Annotated"},"$mt":"prm","$nm":"programElement"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Can this annotation can occur on the given program \nelement?"]},"$nm":"occurs"}},"$nm":"ConstrainedAnnotation","$st":"Value"},"nothing":{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"gttr","$an":{"shared":[],"doc":["A value that is assignable to any type, but that \nresults in an exception when evaluated. This is most \nuseful for generating members in an IDE."]},"$nm":"nothing"},"doc":{"$t":{"$pk":"ceylon.language","$nm":"DocAnnotation"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"doc":["Documentation, in Markdown syntax, about the annotated element"]},"$nm":"description"}]],"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to specify API documentation of a program\nelement."]},"$annot":"1","$nm":"doc"},"emptyMap":{"super":{"$pk":"ceylon.language","$nm":"Object"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Map"}],"$mt":"obj","$an":{"shared":[],"doc":["A [[Map]] with no entries."]},"$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"containsAny":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"containsAny"},"get":{"$t":{"$pk":"ceylon.language","$nm":"Null"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"count":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"count"},"select":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"select"},"by":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Map"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"by"},"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"every":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"every"},"mapItems":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Map"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"key"},{"$t":{"$pk":"ceylon.language","$nm":"Nothing"},"$mt":"prm","$nm":"item"}]],"$mt":"prm","$pt":"f","$nm":"mapping"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"mapItems"},"fold":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$mt":"prm","$nm":"initial"},{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$mt":"prm","$nm":"partial"},{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"accumulating"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"fold"},"taking":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Map"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"take"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"taking"},"defines":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"defines"},"any":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"any"},"map":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"collecting"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"map"},"skipping":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Map"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"skip"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"skipping"},"filter":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Map"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"filter"},"find":{"$t":{"$pk":"ceylon.language","$nm":"Null"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"find"},"collect":{"$t":{"$pk":"ceylon.language","$nm":"Empty"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"collecting"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"actual":[]},"$nm":"collect"},"containsEvery":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"containsEvery"}},"$at":{"clone":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Collection"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"values"},"inverse":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"inverse"},"keys":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"keys"},"empty":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"empty"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"emptyMap"},"Scalar":{"of":[{"$nm":"Other"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Numeric"},{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$pk":"ceylon.language","$nm":"Number"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Scalar"}],"$nm":"Other"}],"$an":{"shared":[],"see":["Integer","Float"],"doc":["Abstraction of numeric types representing scalar\nvalues, including `Integer` and `Float`."],"by":["Gavin"]},"$at":{"magnitude":{"$t":{"$nm":"Other"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The magnitude of this number."],"actual":[]},"$nm":"magnitude"},"wholePart":{"$t":{"$nm":"Other"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The integral value of the number after truncation \nof the fractional part. For integral numeric types,\nthe integral value of a number is the number \nitself."],"actual":[]},"$nm":"wholePart"},"fractionalPart":{"$t":{"$nm":"Other"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The fractional part of the number, after truncation \nof the integral part. For integral numeric types,\nthe fractional part is always zero."],"actual":[]},"$nm":"fractionalPart"}},"$nm":"Scalar","$st":"Other"},"AuthorsAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$an":{"shared":[],"doc":["The authors, in Markdown syntax, of the annotated element"]},"$nm":"authors"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"AuthorsAnnotation"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Annotated"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[by]]."]},"$annot":"1","$at":{"authors":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"doc":["The authors, in Markdown syntax, of the annotated element"]},"$nm":"authors"}},"$nm":"AuthorsAnnotation"},"SequenceBuilder":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"native":[],"see":["SequenceAppender","concatenate","Singleton"],"doc":["Since sequences are immutable, this class is used for\nconstructing a new sequence by incrementally appending \nelements to the empty sequence. This class is mutable\nbut threadsafe."]},"$m":{"append":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Append an element to the sequence and return this \n`SequenceBuilder`"]},"$nm":"append"},"appendAll":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Append multiple elements to the sequence and return \nthis `SequenceBuilder`"]},"$nm":"appendAll"}},"$at":{"sequence":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"default":[],"native":[],"doc":["The resulting sequence. If no elements have been\nappended, the empty sequence."]},"$nm":"sequence"},"empty":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Determine if the resulting sequence is empty."]},"$nm":"empty"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The size of the resulting sequence."]},"$nm":"size"}},"$nm":"SequenceBuilder"},"printAll":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"},{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"doc":["A character sequence to use to separate the values"]},"$nm":"separator"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Print multiple values to the standard output of the virtual \nmachine process as a single line of text, separated by a\ngiven character sequence."],"by":["Gavin"]},"$nm":"printAll"},"ifExists":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"predicate"}],[{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$m":{"predicate":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"predicate"}},"$nm":"ifExists"},"tagged":{"$t":{"$pk":"ceylon.language","$nm":"TagsAnnotation"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$an":{"doc":["The tags, in plain text."]},"$nm":"tags"}]],"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to categorize the API by tag."]},"$annot":"1","$nm":"tagged"},"variable":{"$t":{"$pk":"ceylon.language","$nm":"VariableAnnotation"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to mark an value as variable. A `variable` value \nmay be assigned multiple times."]},"$annot":"1","$nm":"variable"},"Correspondence":{"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"variance":"in","$nm":"Key"},{"variance":"out","$nm":"Item"}],"$an":{"shared":[],"see":["Map","List","Category"],"doc":["Abstract supertype of objects which associate values \nwith keys. `Correspondence` does not satisfy `Category`,\nsince in some cases&mdash;`List`, for example&mdash;it is \nconvenient to consider the subtype a `Category` of its\nvalues, and in other cases&mdash;`Map`, for example&mdash;it \nis convenient to treat the subtype as a `Category` of its\nentries.\n\nThe item corresponding to a given key may be obtained \nfrom a `Correspondence` using the item operator:\n\n    value bg = settings[\"backgroundColor\"] else white;\n\nThe `get()` operation and item operator result in an\noptional type, to reflect the possibility that there is\nno item for the given key."],"by":["Gavin"]},"$m":{"definesAny":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"keys"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["Correspondence.defines"],"doc":["Determines if this `Correspondence` defines a value\nfor any one of the given keys."]},"$nm":"definesAny"},"defines":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["Correspondence.definesAny","Correspondence.definesEvery","Correspondence.keys"],"doc":["Determines if there is a value defined for the \ngiven key."]},"$nm":"defines"},"get":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"see":["Correspondence.items"],"doc":["Returns the value defined for the given key, or \n`null` if there is no value defined for the given \nkey."]},"$nm":"get"},"items":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"keys"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["Correspondence.get"],"doc":["Returns the items defined for the given keys, in\nthe same order as the corresponding keys."]},"$nm":"items"},"definesEvery":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"keys"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["Correspondence.defines"],"doc":["Determines if this `Correspondence` defines a value\nfor every one of the given keys."]},"$nm":"definesEvery"}},"$at":{"keys":{"$t":{"$pk":"ceylon.language","$nm":"Category"},"$mt":"gttr","$an":{"shared":[],"default":[],"see":["Correspondence.defines"],"doc":["The `Category` of all keys for which a value is \ndefined by this `Correspondence`."]},"$nm":"keys"}},"$nm":"Correspondence"},"apply":{"$t":{"$nm":"Return"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Return"},{"$mt":"tpm","$nm":"Args"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"f"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$tp":[{"$nm":"Return"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Args"}],"$an":{"shared":[],"see":["unflatten"],"doc":["Applies an arbitrary `Callable` to the specified arguments. The arguments\nare taken packaged in a tuple whose type is compatible with the `Callable`\narguments tuple.\n\nIn practice, this behaves as if the `Callable` were called with the elements\nof the tuple used as its arguments."]},"$nm":"apply"},"NonemptyContainer":{"$mt":"ifc","$tp":[{"variance":"out","$nm":"Element"}],"$an":{"shared":[],"deprecated":["Will be removed in Ceylon 1.0."],"doc":["A nonempty container."]},"$alias":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Container"},"$nm":"NonemptyContainer"},"count":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"doc":["A count of the number of `true` items in the given values."]},"$nm":"count"},"byItem":{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"y"}]],"$mt":"prm","$pt":"f","$nm":"comparing"}],[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"x"},{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"see":["byKey"],"doc":["A comparator for `Entry`s which compares their items \naccording to the given `comparing()` function."]},"$nm":"byItem"},"FinalAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"FinalAnnotation"},{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[final]]."]},"$annot":"1","$nm":"FinalAnnotation"},"by":{"$t":{"$pk":"ceylon.language","$nm":"AuthorsAnnotation"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$an":{"doc":["The authors, in Markdown syntax, of the annotated element"]},"$nm":"authors"}]],"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to specify API authors."]},"$annot":"1","$nm":"by"},"every":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"see":["any"],"doc":["Determines if every one of the given boolean values \n(usually a comprehension) is `true`."]},"$nm":"every"},"concatenate":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$an":{"doc":["The iterable objects to concatenate."]},"$nm":"iterables"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"see":["SequenceBuilder"],"doc":["Given a list of iterable objects, return a new sequence \nof all elements of the all given objects. If there are\nno arguments, or if none of the arguments contains any\nelements, return the empty sequence."]},"$nm":"concatenate"},"$pkg-shared":"1","Tuple":{"super":{"$pk":"ceylon.language","$nm":"Object"},"$ps":[{"$t":{"$nm":"First"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"first"},{"$t":{"$nm":"Rest"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"rest"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"First"},{"$mt":"tpm","$nm":"Rest"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"cls","$tp":[{"variance":"out","$nm":"Element"},{"satisfies":[{"$nm":"Element"}],"variance":"out","$nm":"First"},{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$def":{"$pk":"ceylon.language","$nm":"Empty"},"variance":"out","$nm":"Rest"}],"$an":{"shared":[],"final":[],"doc":["A _tuple_ is a typed linked list. Each instance of \n`Tuple` represents the value and type of a single link.\nThe attributes `first` and `rest` allow us to retrieve\na value form the list without losing its static type \ninformation.\n\n    value point = Tuple(0.0, Tuple(0.0, Tuple(\"origin\")));\n    Float x = point.first;\n    Float y = point.rest.first;\n    String label = point.rest.rest.first;\n\nUsually, we abbreviate code involving tuples.\n\n    [Float,Float,String] point = [0.0, 0.0, \"origin\"];\n    Float x = point[0];\n    Float y = point[1];\n    String label = point[2];\n\nA list of types enclosed in brackets is an abbreviated \ntuple type. An instance of `Tuple` may be constructed \nby surrounding a value list in brackets:\n\n    [String,String] words = [\"hello\", \"world\"];\n\nThe index operator with a literal integer argument is a \nshortcut for a chain of evaluations of `rest` and \n`first`. For example, `point[1]` means `point.rest.first`.\n\nA _terminated_ tuple type is a tuple where the type of\nthe last link in the chain is `Empty`. An _unterminated_ \ntuple type is a tuple where the type of the last link\nin the chain is `Sequence` or `Sequential`. Thus, a \nterminated tuple type has a length that is known\nstatically. For an unterminated tuple type only a lower\nbound on its length is known statically.\n\nHere, `point` is an unterminated tuple:\n\n    String[] labels = ... ;\n    [Float,Float,String*] point = [0.0, 0.0, *labels];\n    Float x = point[0];\n    Float y = point[1];\n    String? firstLabel = point[2];\n    String[] allLabels = point[2...];"],"by":["Gavin"]},"$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"current":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"current"}},"$nm":"iterator"}}},"get":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"spanTo":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"segment":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"withLeading":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]},{"$mt":"tpm","$nm":"Other"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"First"},{"$mt":"tpm","$nm":"Rest"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$an":{"doc":["The first element of the resulting tuple."]},"$nm":"element"}]],"$mt":"mthd","$tp":[{"$nm":"Other"}],"$an":{"shared":[],"doc":["Returns a new tuple that starts with the specified\nelement, followed by the elements of this tuple."],"actual":[]},"$nm":"withLeading"},"spanFrom":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"span":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"lastIndex":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"First"},{"$mt":"tpm","$nm":"Rest"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"last":{"$t":{"$nm":"Element"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"last"},"reversed":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"reversed"},"rest":{"$t":{"$nm":"Rest"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"rest"},"first":{"$t":{"$nm":"First"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"first"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"Tuple"},"lessThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}],[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Returns a partial function that will compare an element\nto any other element and returns true if the compared\nelement is less than its element.\nThis is useful in conjunction with methods that receive\na predicate function."]},"$nm":"lessThan"},"maxRadix":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"maxRadix"},"identityHash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Identifiable"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"see":["identical"],"doc":["Return the system-defined identity hash value of the \ngiven value. This hash value is consistent with \nidentity equality."]},"$nm":"identityHash"},"uncurry":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Return"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Argument"},{"$mt":"tpm","$nm":"First"},{"$mt":"tpm","$nm":"Rest"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Return"},{"$mt":"tpm","$nm":"Rest"}],"$pk":"ceylon.language","$nm":"Callable"},"$ps":[[{"$t":{"$nm":"First"},"$mt":"prm","$nm":"first"}]],"$mt":"prm","$pt":"f","$nm":"f"}]],"$mt":"mthd","$tp":[{"$nm":"Return"},{"$nm":"Argument"},{"satisfies":[{"$nm":"Argument"}],"$nm":"First"},{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Argument"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Rest"}],"$an":{"shared":[],"see":["curry","compose"],"doc":["Uncurries a function, returning a function with multiple parameters, \ngiven a function with multiple parameter lists."]},"$nm":"uncurry"},"any":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"see":["every"],"doc":["Determines if any one of the given boolean values \n(usually a comprehension) is `true`."]},"$nm":"any"},"optional":{"$t":{"$pk":"ceylon.language","$nm":"OptionalImportAnnotation"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to specify that a module can be executed even if \nthe annotated dependency is not available."]},"$annot":"1","$nm":"optional"},"Summable":{"of":[{"$nm":"Other"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Summable"}],"$nm":"Other"}],"$an":{"shared":[],"see":["String","Numeric"],"doc":["Abstraction of types which support a binary addition\noperator. For numeric types, this is just familiar \nnumeric addition. For strings, it is string \nconcatenation. In general, the addition operation \nshould be a binary associative operation."],"by":["Gavin"]},"$m":{"plus":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["The result of adding the given value to this value. \nThis operation should never perform any kind of \nmutation upon either the receiving value or the \nargument value."]},"$nm":"plus"}},"$nm":"Summable","$st":"Other"},"EmptyContainer":{"$mt":"ifc","$an":{"shared":[],"deprecated":["Will be removed in Ceylon 1.0."],"doc":["An empty container."]},"$alias":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Container"},"$nm":"EmptyContainer"},"Set":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Collection"},{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Set"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"variance":"out","$nm":"Element"}],"$an":{"shared":[],"doc":["A collection of unique elements.\n\nA `Set` is a `Collection` of its elements.\n\nSets may be the subject of the binary union, \nintersection, and complement operators `|`, `&`, and \n`~`."]},"$m":{"complement":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"formal":[],"doc":["Returns a new `Set` containing all the elements in \nthis `Set` that are not contained in the given\n`Set`."]},"$nm":"complement"},"subset":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Determines if this `Set` is a subset of the given \n`Set`, that is, if the given set contains all of \nthe elements in this set."]},"$nm":"subset"},"intersection":{"$t":{"$tp":[{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"formal":[],"doc":["Returns a new `Set` containing only the elements \nthat are present in both this `Set` and the given \n`Set`."]},"$nm":"intersection"},"exclusiveUnion":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"formal":[],"doc":["Returns a new `Set` containing only the elements \ncontained in either this `Set` or the given `Set`, \nbut no element contained in both sets."]},"$nm":"exclusiveUnion"},"superset":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Determines if this `Set` is a superset of the \nspecified Set, that is, if this `Set` contains all \nof the elements in the specified `Set`."]},"$nm":"superset"},"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Two `Set`s are considered equal if they have the \nsame size and if every element of the first set is\nalso an element of the second set, as determined\nby `contains()`."],"actual":[]},"$nm":"equals"},"union":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Set"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"formal":[],"doc":["Returns a new `Set` containing all the elements of \nthis `Set` and all the elements of the given `Set`."]},"$nm":"union"}},"$at":{"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"hash"}},"$nm":"Set"},"Sequence":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"},{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"ifc","$tp":[{"variance":"out","$nm":"Element"}],"$an":{"shared":[],"see":["Empty"],"doc":["A nonempty, immutable sequence of values. The type \n`Sequence<Element>`, may be abbreviated `[Element+]`.\n\nGiven a possibly-empty sequence of type `[Element*]`, \nthe `if (nonempty ...)` construct, or, alternatively,\nthe `assert (nonempty ...)` construct, may be used to \nnarrow to a nonempty sequence type:\n\n    [Integer*] nums = ... ;\n    if (nonempty nums) {\n        Integer first = nums.first;\n        Integer max = max(nums);\n        [Integer+] squares = nums.collect((Integer i) => i**2));\n        [Integer+] sorted = nums.sort(byIncreasing((Integer i) => i));\n    }\n\nOperations like `first`, `max()`, `collect()`, and \n`sort()`, which polymorphically produce a nonempty or \nnon-null output when given a nonempty input are called \n_emptiness-preserving_."],"by":["Gavin"]},"$m":{"sort":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"y"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The function comparing pairs of elements."]},"$nm":"comparing"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["A nonempty sequence containing the elements of this\ncontainer, sorted according to a function \nimposing a partial order upon the elements."],"actual":[]},"$m":{"comparing":{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"doc":["The function comparing pairs of elements."]},"$nm":"comparing"}},"$nm":"sort"},"shorterThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"shorterThan"},"longerThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"longerThan"},"repeat":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"times"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"repeat"},"findLast":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"findLast"},"collect":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"}],"$pk":"ceylon.language","$nm":"Sequence"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The transformation applied to the elements."]},"$nm":"collecting"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"default":[],"doc":["A nonempty sequence containing the results of \napplying the given mapping to the elements of this\nsequence."],"actual":[]},"$m":{"collecting":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"doc":["The transformation applied to the elements."]},"$nm":"collecting"}},"$nm":"collect"}},"$at":{"lastIndex":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"see":["Sequence.size"],"doc":["The index of the last element of the sequence."],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"clone"},"last":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The last element of the sequence, that is, the\n    element with index `sequence.lastIndex`."],"actual":[]},"$nm":"last"},"sequence":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["This sequence."],"actual":[]},"$nm":"sequence"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"string"},"empty":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `false`, since every `Sequence` contains at\n    least one element."],"actual":[]},"$nm":"empty"},"rest":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The rest of the sequence, without the first \n    element."],"actual":[]},"$nm":"rest"},"reversed":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Reverse this sequence, returning a new nonempty\n    sequence."],"actual":[]},"$nm":"reversed"},"first":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The first element of the sequence, that is, the\n    element with index `0`."],"actual":[]},"$nm":"first"}},"$nm":"Sequence"},"Scalable":{"of":[{"$nm":"Value"}],"$mt":"ifc","$tp":[{"variance":"in","$nm":"Scale"},{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Scale"},{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Scalable"}],"variance":"out","$nm":"Value"}],"$an":{"shared":[],"doc":["Abstract supertype of types that support scaling by\na numeric factor. Implementations should generally\nrespect the following constraints, where relevant:\n\n- `x == 1**x`\n- `-x == -1**x`\n- `x-x == 0**x`\n- `x+x == 2**x`"]},"$m":{"scale":{"$t":{"$nm":"Value"},"$ps":[[{"$t":{"$nm":"Scale"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"scale"}},"$nm":"Scalable","$st":"Value"},"InitializationException":{"super":{"$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"description"}],"$mt":"cls","$an":{"shared":[],"see":["late"],"doc":["Thrown when a problem was detected with value initialization.\n\nPossible problems include:\n\n* when a value could not be initialized due to recursive access during initialization, \n* an attempt to use a `late` value before it was initialized, \n* an attempt to assign to a `late` but non-`variable` value after it was initialized."]},"$at":{"description":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"description"}},"$nm":"InitializationException"},"Annotated":{"$mt":"ifc","$an":{"shared":[],"see":["Annotation"],"doc":["A program element that can\nbe annotated."]},"$nm":"Annotated"},"StringBuilder":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[],"native":[],"doc":["Since strings are immutable, this class is used for\nconstructing a string by incrementally appending \ncharacters to the empty string. This class is mutable \nbut threadsafe."]},"$m":{"append":{"$t":{"$pk":"ceylon.language","$nm":"StringBuilder"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Append the characters in the given string."]},"$nm":"append"},"appendSpace":{"$t":{"$pk":"ceylon.language","$nm":"StringBuilder"},"$mt":"mthd","$an":{"shared":[],"doc":["Append a space character."]},"$nm":"appendSpace"},"delete":{"$t":{"$pk":"ceylon.language","$nm":"StringBuilder"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Deletes the specified number of characters from the\ncurrent content, starting at the specified position.\nIf the position is beyond the end of the current \ncontent, nothing is deleted. If the number of \ncharacters to delete is greater than the available \ncharacters from the given position, the content is \ntruncated at the given position."]},"$nm":"delete"},"reset":{"$t":{"$pk":"ceylon.language","$nm":"StringBuilder"},"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Remove all content and return to initial state."]},"$nm":"reset"},"insertCharacter":{"$t":{"$pk":"ceylon.language","$nm":"StringBuilder"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"character"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Insert a `Character` at the specified position. If \nthe position is beyond the end of the current string, \nthe new content is simply appended to the current \ncontent. If the position is a negative number, the \nnew content is inserted at index 0."]},"$nm":"insertCharacter"},"appendAll":{"$t":{"$pk":"ceylon.language","$nm":"StringBuilder"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"strings"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Append the characters in the given strings."]},"$nm":"appendAll"},"insert":{"$t":{"$pk":"ceylon.language","$nm":"StringBuilder"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Insert a `String` at the specified position. If the \nposition is beyond the end of the current string, \n    the new content is simply appended to the current \n    content. If the position is a negative number, the \n    new content is inserted at index 0."]},"$nm":"insert"},"appendNewline":{"$t":{"$pk":"ceylon.language","$nm":"StringBuilder"},"$mt":"mthd","$an":{"shared":[],"doc":["Append a newline character."]},"$nm":"appendNewline"},"appendCharacter":{"$t":{"$pk":"ceylon.language","$nm":"StringBuilder"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"character"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Append the given character."]},"$nm":"appendCharacter"}},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The resulting string. If no characters have been\nappended, the empty string."],"actual":[]},"$nm":"string"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["Returns the size of the current content."]},"$nm":"size"}},"$nm":"StringBuilder"},"emptyOrSingleton":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"see":["Singleton","Empty"],"doc":["A `Singleton` if the given element is non-null, otherwise `Empty`."]},"$nm":"emptyOrSingleton"},"shared":{"$t":{"$pk":"ceylon.language","$nm":"SharedAnnotation"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to mark a type or member as shared. A `shared` \nmember is visible outside the block of code in which it is \ndeclared."]},"$annot":"1","$nm":"shared"},"TagsAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$an":{"shared":[],"doc":["The tags, in plain text."]},"$nm":"tags"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"TagsAnnotation"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Annotated"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[tagged]]."]},"$annot":"1","$at":{"tags":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"doc":["The tags, in plain text."]},"$nm":"tags"}},"$nm":"TagsAnnotation"},"Binary":{"of":[{"$nm":"Other"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Binary"}],"$nm":"Other"}],"$an":{"shared":[],"see":["Integer"],"doc":["Abstraction of numeric types like `Integer` that may be \nrepresented as a sequence of bits, and may be the subject\nof bitwise operations."],"by":["Stef"]},"$m":{"clear":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Returns a new number with the given bit set to 0.\nBits are indexed from right to left."]},"$nm":"clear"},"xor":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Performs a logical exclusive OR operation."]},"$nm":"xor"},"get":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Retrieves a given bit from this bit sequence. Bits are indexed from\nright to left."]},"$nm":"get"},"leftLogicalShift":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"shift"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Performs a left logical shift. Sign is not preserved. Padded with zeros."]},"$nm":"leftLogicalShift"},"set":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"bit"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a new number with the given bit set to the given value.\nBits are indexed from right to left."]},"$nm":"set"},"or":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Performs a logical inclusive OR operation."]},"$nm":"or"},"rightArithmeticShift":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"shift"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Performs a right arithmetic shift. Sign is preserved. Padded with zeros."]},"$nm":"rightArithmeticShift"},"rightLogicalShift":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"shift"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Performs a right logical shift. Sign is not preserved. Padded with zeros."]},"$nm":"rightLogicalShift"},"flip":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a new number with the given bit flipped to its opposite value.\nBits are indexed from right to left."]},"$nm":"flip"},"and":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Performs a logical AND operation."]},"$nm":"and"}},"$at":{"not":{"$t":{"$nm":"Other"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The binary complement of this sequence of bits."]},"$nm":"not"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of bits (0 or 1) that this sequence of bits can hold."]},"$nm":"size"}},"$nm":"Binary","$st":"Other"},"commaList":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$nm":"commaList"},"Number":{"$mt":"ifc","$an":{"shared":[],"see":["Numeric"],"doc":["Abstraction of numbers. Numeric operations are provided\nby the subtype `Numeric`. This type defines operations\nwhich can be expressed without reference to the self\ntype `Other` of `Numeric`."],"by":["Gavin"]},"$at":{"sign":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The sign of this number. Returns `1` if the number \nis positive, `-1` if it is negative, or `0` if it \nis zero."]},"$nm":"sign"},"integer":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"throws":["OverflowException","if the number is too large to be represented \nas an `Integer`"],"doc":["The number, represented as an `Integer`, after \ntruncation of any fractional part."]},"$nm":"integer"},"magnitude":{"$t":{"$pk":"ceylon.language","$nm":"Number"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The magnitude of the number."]},"$nm":"magnitude"},"wholePart":{"$t":{"$pk":"ceylon.language","$nm":"Number"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The integral value of the number after truncation \nof the fractional part."]},"$nm":"wholePart"},"negative":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Determine if the number is negative."]},"$nm":"negative"},"positive":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Determine if the number is positive."]},"$nm":"positive"},"fractionalPart":{"$t":{"$pk":"ceylon.language","$nm":"Number"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The fractional part of the number, after truncation \nof the integral part."]},"$nm":"fractionalPart"},"float":{"$t":{"$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$an":{"shared":[],"formal":[],"throws":["OverflowException","if the number is too large to be represented \nas a `Float`"],"doc":["The number, represented as a `Float`."]},"$nm":"float"}},"$nm":"Number"},"Map":{"satisfies":[{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Collection"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Correspondence"},{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"variance":"out","$nm":"Key"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"variance":"out","$nm":"Item"}],"$an":{"shared":[],"see":["Entry","forKey","forItem","byItem","byKey"],"doc":["Represents a collection which maps _keys_ to _items_,\nwhere a key can map to at most one item. Each such \nmapping may be represented by an `Entry`.\n\nA `Map` is a `Collection` of its `Entry`s, and a \n`Correspondence` from keys to items.\n\nThe presence of an entry in a map may be tested\nusing the `in` operator:\n\n    if (\"lang\"->\"en_AU\" in settings) { ... }\n\nThe entries of the map may be iterated using `for`:\n\n    for (key->item in settings) { ... }\n\nThe item for a key may be obtained using the item\noperator:\n\n    String lang = settings[\"lang\"] else \"en_US\";"]},"$m":{"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Two `Map`s are considered equal iff they have the \nsame _entry sets_. The entry set of a `Map` is the\nset of `Entry`s belonging to the map. Therefore, the\nmaps are equal iff they have same set of `keys`, and \nfor every key in the key set, the maps have equal\nitems."],"actual":[]},"$nm":"equals"},"mapItems":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Result"}],"$pk":"ceylon.language","$nm":"Map"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The function that transforms a key\/item\npair, producing the item of the resulting\nmap."]},"$nm":"mapping"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Result"}],"$an":{"shared":[],"default":[],"doc":["Returns a `Map` with the same keys as this map. For\nevery key, the item is the result of applying the\ngiven transformation function."]},"$nm":"mapItems"}},"$at":{"values":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Collection"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Returns all the values stored in this `Map`. An \nelement can be stored under more than one key in \nthe map, and so it can be contained more than once \nin the resulting collection."]},"$nm":"values"},"inverse":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Item"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Returns a `Map` in which every key is an `Item` in \nthis map, and every value is the set of keys that \nstored the `Item` in this map."]},"$nm":"inverse"},"keys":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Returns the set of keys contained in this `Map`."],"actual":[]},"$nm":"keys"},"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"hash"}},"$nm":"Map"},"LazyMap":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"}],"$mt":"cls","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"variance":"out","$nm":"Key"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"variance":"out","$nm":"Item"}],"$an":{"shared":[],"doc":["A `Map` implementation that wraps an `Iterable` of \nentries. All operations, such as lookups, size, etc. \nare performed on the `Iterable`."],"by":["Enrique Zamudio"]},"$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"get":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"equals"}},"$at":{"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"LazyMap"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"last":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"last"},"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"hash"},"entries":{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"entries"},"first":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"first"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"LazyMap"},"Numeric":{"of":[{"$nm":"Other"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Summable"},{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Invertable"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Numeric"}],"$nm":"Other"}],"$an":{"shared":[],"see":["Integer","Float","Comparable"],"doc":["Abstraction of numeric types supporting addition,\nsubtraction, multiplication, and division, including\n`Integer` and `Float`. Additionally, a numeric type \nis expected to define a total order via an \nimplementation of `Comparable`."],"by":["Gavin"]},"$m":{"minus":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["The difference between this number and the given \nnumber."]},"$nm":"minus"},"times":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["The product of this number and the given number."]},"$nm":"times"},"divided":{"$t":{"$nm":"Other"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"see":["Integral"],"doc":["The quotient obtained by dividing this number by \nthe given number. For integral numeric types, this \noperation results in a remainder."]},"$nm":"divided"}},"$nm":"Numeric","$st":"Other"},"throws":{"$t":{"$pk":"ceylon.language","$nm":"ThrownExceptionAnnotation"},"$ps":[[{"$t":{"$pk":"ceylon.language.meta.declaration","$nm":"Declaration"},"$mt":"prm","$an":{"doc":["The [[Exception]] type that this thrown."]},"$nm":"type"},{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"doc":["A description, in Markdown syntax, of the circumstances that \ncause this exception to be thrown."]},"$nm":"when"}]],"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to mark a program element that throws an \nexception."]},"$annot":"1","$nm":"throws"},"Closeable":{"$mt":"ifc","$an":{"shared":[],"doc":["Abstract supertype of types which may appear\nas the expression type of a resource expression\nin a `try` statement."]},"$m":{"open":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Called before entry to a `try` block."]},"$nm":"open"},"close":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Exception"}]},"$mt":"prm","$nm":"exception"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Called after completion of a `try` block."]},"$nm":"close"}},"$nm":"Closeable"},"parseDigit":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"digit"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"radix"}]],"$mt":"mthd","$nm":"parseDigit"},"formal":{"$t":{"$pk":"ceylon.language","$nm":"FormalAnnotation"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to mark a member whose implementation must be \nprovided by subtypes."]},"$annot":"1","$nm":"formal"},"byDecreasing":{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$nm":"Value"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"prm","$pt":"f","$nm":"comparable"}],[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$tp":[{"$nm":"Element"},{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Value"}],"$an":{"shared":[],"see":["byIncreasing"],"doc":["A comparator which orders elements in decreasing order \naccording to the `Comparable` returned by the given \n`comparable()` function."]},"$nm":"byDecreasing"},"default":{"$t":{"$pk":"ceylon.language","$nm":"DefaultAnnotation"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to mark a member whose implementation may be \nrefined by subtypes. Non-`default` declarations may not be \nrefined."]},"$annot":"1","$nm":"default"},"SequencedAnnotation":{"of":[{"$nm":"Value"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Sequential"},{"$mt":"tpm","$nm":"ProgramElement"}],"$pk":"ceylon.language","$nm":"ConstrainedAnnotation"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Annotation"}],"variance":"out","$nm":"Value"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Annotated"}],"$def":{"$pk":"ceylon.language","$nm":"Annotated"},"variance":"in","$nm":"ProgramElement"}],"$an":{"shared":[],"see":["Annotation"],"doc":["An annotation that may occur multiple times at a single program element, \nand only on certain program elemenets.\n\nA sequenced annotation is declared simply by having the annotation class\nsatisfy SequencedAnnotation instead of [[Annotation]]. For example \nthe following would only be allowed on `class` declarations, \nfunctions or methods:\n\n    alias ExecutableDeclaration \n           => ClassOrInterfaceDeclaration|FunctionDeclaration\n    \"Documents a pattern that the annotated element is particpating in\"\n    final annotation class Pattern(String name) \n            satisfies SequencedAnnotation<Pattern, ExecutableDeclaration> {\n    }\n\nAt runtime a [[ceylon.language.meta.declaration::Declaration]] instance \ncan be queried for its `SequencedAnnotation`s of a certain type using \n[[ceylon.language.meta::annotations]] or [[ceylon.language.meta::sequencedAnnotations]].\n"]},"$nm":"SequencedAnnotation","$st":"Value"},"AnnotationAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"AnnotationAnnotation"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"}]}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[annotation]]."]},"$annot":"1","$nm":"AnnotationAnnotation"},"minRadix":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"minRadix"},"String":{"super":{"$pk":"ceylon.language","$nm":"Object"},"$ps":[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Character"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$an":{"shared":[]},"$nm":"characters"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Character"}],"$pk":"ceylon.language","$nm":"List"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Summable"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Ranged"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"cls","$an":{"shared":[],"final":[],"native":[],"doc":["A string of characters. Each character in the string is\na 32-bit Unicode character. The internal UTF-16 encoding \nis hidden from clients.\n\nA string is a `Category` of its `Character`s, and of its \nsubstrings:\n\n    'w' in greeting \n    \"hello\" in greeting\n\nStrings are summable:\n\n    String greeting = \"hello\" + \" \" + \"world\";\n\nThey are efficiently iterable:\n\n  for (char in \"hello world\") { ... }\n\nThey are `List`s of `Character`s:\n\n    value char = \"hello world\"[5];\n\nThey are ranged:\n\n    String who = \"hello world\"[6...];\n\nNote that since `string[index]` evaluates to the\noptional type `Character?`, it is often more convenient\nto write `string[index..index]`, which evaluates to a\n`String` containing a single character, or to the empty\nstring `\"\"` if `index` refers to a position outside the\nstring.\n\nIt is easy to use comprehensions to transform strings:\n\n    String { for (s in \"hello world\") if (s.letter) s.uppercased }\n\nSince a `String` has an underlying UTF-16 encoding, \ncertain operations are expensive, requiring iteration of \nthe characters of the string. In particular, `size`\nrequires iteration of the whole string, and `get()`,\n`span()`, and `segment()` require iteration from the \nbeginning of the string to the given index."],"by":["Gavin"]},"$m":{"plus":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Returns the concatenation of this string with the\ngiven string."],"actual":[]},"$nm":"plus"},"iterator":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Character"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["An iterator for the characters of the string."],"actual":[]},"$nm":"iterator"},"get":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Character"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Returns the character at the given index in the \nstring, or `null` if the index is past the end of\nstring. The first character in the string occurs at\nindex zero. The last character in the string occurs\nat index `string.size-1`."],"actual":[]},"$nm":"get"},"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Determines if the given object is a string, and if\nso, if this string has the same length, and the \nsame characters, in the same order, as the given \nstring."],"actual":[]},"$nm":"equals"},"segment":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Select the characters of this string beginning at \nthe given index, returning a string no longer than \nthe given length. If the portion of this string\nstarting at the given index is shorter than \nthe given length, return the portion of this string\nfrom the given index until the end of this string. \nOtherwise return a string of the given length. If \nthe start index is larger than the last index of the \nstring, return the empty string."],"actual":[]},"$nm":"segment"},"compare":{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Compare this string with the given string \nlexicographically, according to the Unicode values\nof the characters."],"actual":[]},"$nm":"compare"},"longerThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"see":["size"],"doc":["Determines if this string is longer than the given\nlength. This is a more efficient operation than\n`string.size>length`."],"actual":[]},"$nm":"longerThan"},"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Determines if the given object is a `String` and, \nif so, if it occurs as a substring of this string,\nor if the object is a `Character` that occurs in\nthis string. That is to say, a string is considered \na `Category` of its substrings and of its \ncharacters."],"actual":[]},"$nm":"contains"},"trimLeading":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"trimming"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["This string, after discarding the given \ncharacters from the beginning of the string"],"actual":[]},"$nm":"trimLeading"},"repeat":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"times"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Returns a string formed by repeating this string\nthe given number of times, or the empty string if\n`times<=0`."],"actual":[]},"$nm":"repeat"},"join":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"strings"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Join the given strings, using this string as a \nseparator."]},"$nm":"join"},"replace":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"substring"},{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"replacement"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Returns a string formed by replacing every \noccurrence in this string of the given substring\nwith the given replacement string, working from \nthe start of this string to the end."]},"$nm":"replace"},"terminal":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Select the last characters of the string, \nreturning a string no longer than the given \nlength. If this string is shorter than the given\nlength, return this string. Otherwise return a\nstring of the given length."],"actual":[]},"$nm":"terminal"},"shorterThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"see":["size"],"doc":["Determines if this string is shorter than the given\nlength. This is a more efficient operation than\n`string.size>length`."],"actual":[]},"$nm":"shorterThan"},"spanTo":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"trimTrailing":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"trimming"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["This string, after discarding the given \ncharacters from the end of the string"],"actual":[]},"$nm":"trimTrailing"},"initial":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Select the first characters of this string, \nreturning a string no longer than the given \nlength. If this string is shorter than the given\nlength, return this string. Otherwise return a\nstring of the given length."],"actual":[]},"$nm":"initial"},"split":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"ch"}]],"$mt":"prm","$pt":"f","$def":"1","$an":{"doc":["A predicate that determines if a character\nis a separator characters at which to split.\nDefault to split at any \n[[whitespace|Character.whitespace]] character."]},"$nm":"splitting"},{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"doc":["Specifies that the separator characters\noccurring in the string should be discarded.\nIf `false`, they will be included in the\nresulting iterator."]},"$nm":"discardSeparators"},{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"doc":["Specifies that the separator tokens should \nbe grouped eagerly and not be treated as \nsingle-character tokens. If `false` each \nseparator token will be of size `1`."]},"$nm":"groupSeparators"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Split the string into tokens, using the given\npredicate to determine which characters are \nseparator characters."]},"$nm":"split"},"trim":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"trimming"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["This string, after discarding the given \ncharacters from the beginning and end \nof the string"],"actual":[]},"$nm":"trim"},"spanFrom":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"span":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Select the characters between the given indexes.\nIf the start index is the same as the end index,\nreturn a string with a single character.\nIf the start index is larger than the end index, \nreturn the characters in the reverse order from\nthe order in which they appear in this string.\nIf both the start index and the end index are \nlarger than the last index in the string, return \nthe empty string. Otherwise, if the last index is \nlarger than the last index in the sequence, return\nall characters from the start index to last \ncharacter of the string."],"actual":[]},"$nm":"span"}},"$at":{"normalized":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["This string, after collapsing strings of \n[[whitespace|Character.whitespace]]\ninto single space characters and discarding whitespace \nfrom the beginning and end of the string."]},"$nm":"normalized"},"lowercased":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["This string, with all characters in lowercase."]},"$nm":"lowercased"},"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"actual":[]},"$nm":"hash"},"uppercased":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["This string, with all characters in uppercase."]},"$nm":"uppercased"},"coalesced":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns this string."],"actual":[]},"$nm":"coalesced"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"native":[],"see":["longerThan","shorterThan"],"doc":["The length of the string (the number of characters\nit contains). In the case of the empty string, the\nstring has length zero. Note that this operation is\npotentially costly for long strings, since the\nunderlying representation of the characters uses a\nUTF-16 encoding."],"actual":[]},"$nm":"size"},"lastIndex":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"gttr","$an":{"shared":[],"doc":["The index of the last character in the string, or\n`null` if the string has no characters. Note that \nthis operation is potentially costly for long \nstrings, since the underlying representation of the \ncharacters uses a UTF-16 encoding."],"actual":[]},"$nm":"lastIndex"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the string itself."],"actual":[]},"$nm":"string"},"empty":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"native":[],"see":["size"],"doc":["Determines if this string has no characters, that\nis, if it has zero `size`. This is a more efficient \noperation than `string.size==0`."],"actual":[]},"$nm":"empty"},"lines":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"native":[],"doc":["Split the string into lines of text."]},"$nm":"lines"},"rest":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The rest of the string, without the first element."],"actual":[]},"$nm":"rest"},"trimmed":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"native":[],"doc":["This string, after discarding \n[[whitespace|Character.whitespace]] from the \nbeginning and end of the string."]},"$nm":"trimmed"},"reversed":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["This string, with the characters in reverse order."],"actual":[]},"$nm":"reversed"},"characters":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Character"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$an":{"shared":[]},"$nm":"characters"}},"$nm":"String"},"identical":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Identifiable"},"$mt":"prm","$an":{"doc":["An object with well-defined identity."]},"$nm":"x"},{"$t":{"$pk":"ceylon.language","$nm":"Identifiable"},"$mt":"prm","$an":{"doc":["A second object with well-defined identity."]},"$nm":"y"}]],"$mt":"mthd","$an":{"shared":[],"see":["identityHash"],"doc":["Determine if the arguments are identical. Equivalent to\n`x===y`. Only instances of `Identifiable` have \nwell-defined identity."]},"$nm":"identical"},"late":{"$t":{"$pk":"ceylon.language","$nm":"LateAnnotation"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to disable definite initialization analysis for \na reference."]},"$annot":"1","$nm":"late"},"integerRangeByIterable":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Range"},"$mt":"prm","$nm":"range"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Element"}],"$an":{"native":[],"doc":["Provides an optimized implementation of `Range<Integer>.iterator`. \nThis is necessary because we need reified generics in order to write \nthe optimized version in pure Ceylon."]},"$nm":"integerRangeByIterable"},"emptyIterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$an":{"shared":[],"doc":["An iterator that returns no elements."]},"$m":{"next":{"$t":{"$pk":"ceylon.language","$nm":"Finished"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$nm":"emptyIterator"},"parseFloat":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Float"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["The `Float` value of the given string representation of \na decimal number or `null` if the string does not \nrepresent a decimal number.\n\nThe syntax accepted by this method is the same as the \nsyntax for a `Float` literal in the Ceylon language \nexcept that it may optionally begin with a sign \ncharacter (`+` or `-`)."]},"$nm":"parseFloat"},"Anything":{"abstract":"1","of":[{"$pk":"ceylon.language","$nm":"Object"},{"$pk":"ceylon.language","$nm":"Null"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["The abstract supertype of all types. A value of type \n`Anything` may be a definite value of type `Object`, or \nit may be the `null` value. A method declared `void` is \nconsidered to have the return type `Anything`.\n\nNote that the type `Nothing`, representing the \nintersection of all types, is a subtype of all types."],"by":["Gavin"]},"$nm":"Anything"},"VariableAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"VariableAnnotation"},{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"ValueDeclaration"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[variable]]."]},"$annot":"1","$nm":"VariableAnnotation"},"Exception":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"String"}]},"$hdn":"1","$mt":"prm","$def":"1","$an":{"doc":["A description of the problem."]},"$nm":"description"},{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Exception"}]},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The underlying cause of this exception."]},"$nm":"cause"}],"$mt":"cls","$an":{"shared":[],"native":[],"doc":["The supertype of all exceptions. A subclass represents\na more specific kind of problem, and may define \nadditional attributes which propagate information about\nproblems of that kind."],"by":["Gavin","Tom"]},"$m":{"printStackTrace":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Print the stack trace to the standard error of\nthe virtual machine process."]},"$nm":"printStackTrace"}},"$at":{"message":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"default":[],"see":["cause"],"doc":["A message describing the problem. This default \nimplementation returns the description, if any, or \notherwise the message of the cause, if any."]},"$nm":"message"},"cause":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Exception"}]},"$mt":"attr","$an":{"shared":[],"doc":["The underlying cause of this exception."]},"$nm":"cause"},"description":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"doc":["A description of the problem."]},"$nm":"description"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"string"}},"$nm":"Exception"},"internalSort":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"y"}]],"$mt":"prm","$pt":"f","$nm":"comparing"},{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$an":{"native":[]},"$nm":"internalSort"},"OverflowException":{"super":{"$pk":"ceylon.language","$nm":"Exception"},"$mt":"cls","$an":{"shared":[],"doc":["Thrown when a mathematical operation caused a number to \noverflow from its bounds."]},"$nm":"OverflowException"},"parseInteger":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"radix"}]],"$mt":"mthd","$an":{"shared":[],"throws":["AssertionException","if `radix` is not between `minRadix` and `maxRadix`"],"doc":["The `Integer` value of the given string representation \nof an integer, or `null` if the string does not represent \nan integer or if the mathematical integer it represents \nis too large in magnitude to be represented by an \n`Integer`.\n\nThe syntax accepted by this function is the same as the \nsyntax for an `Integer` literal in the Ceylon language \nexcept that it may optionally begin with a sign \ncharacter (`+` or `-`).\n\nA radix can be given in input to specify what is the base\nto take in consideration for the parsing. radix has to be\nbetween `minRadix` and `maxRadix` included.\nThe list of available digits starts from `0` to `9` followed\nby `a` to `z`.\nWhen parsing in a specific base, the first `radix` digits\nfrom the available digits list can be used.\nThis function is not case sensitive; `a` and `A` both\ncorrespond to the `a` digit which decimal value is `10`.\n \n`_` character can be used to separate groups of digits\nfor bases 2, 10 and 16 as for `Integer` literal in the\nCeylon language. For any other bases, no grouping is\nsupported."]},"$nm":"parseInteger"},"sum":{"$t":{"$nm":"Value"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Summable"}],"$nm":"Value"}],"$an":{"shared":[],"see":["product"],"doc":["Given a nonempty stream of `Summable` values, return \nthe sum of the values."]},"$nm":"sum"},"infinity":{"$t":{"$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$an":{"shared":[],"doc":["An instance of `Float` representing positive infinity \n∞."]},"$nm":"infinity"},"smaller":{"super":{"$pk":"ceylon.language","$nm":"Comparison"},"$mt":"obj","$an":{"shared":[],"doc":["The value is smaller than the given value."]},"$nm":"smaller"},"computeDigitGroupingSize":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"radix"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"digitIndex"},{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"ii"}]],"$mt":"mthd","$nm":"computeDigitGroupingSize"},"DefaultAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"DefaultAnnotation"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.language.meta.declaration","$nm":"ValueDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"ClassOrInterfaceDeclaration"}]}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[default]]."]},"$annot":"1","$nm":"DefaultAnnotation"},"Iterable":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Container"}],"$mt":"ifc","$tp":[{"variance":"out","$nm":"Element"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Null"}],"$def":{"$pk":"ceylon.language","$nm":"Null"},"variance":"out","$nm":"Absent"}],"$an":{"shared":[],"see":["Collection"],"doc":["Abstract supertype of containers whose elements may be \niterated. An iterable container need not be finite, but\nits elements must at least be countable. There may not\nbe a well-defined iteration order, and so the order of\niterated elements may not be stable.\n\nThe type `Iterable<Element,Null>`, usually abbreviated\n`{Element*}` represents a possibly-empty iterable \ncontainer. The type `Iterable<Element,Nothing>`, \nusually abbreviated `{Element+}` represents a nonempty \niterable container.\n\nAn instance of `Iterable` may be constructed by \nsurrounding a value list in braces:\n\n    {String+} words = { \"hello\", \"world\" };\n\nAn instance of `Iterable` may be iterated using a `for`\nloop:\n\n    for (c in \"hello world\") { ... }\n\n`Iterable` and its subtypes define various operations\nthat return other iterable objects. Such operations \ncome in two flavors:\n\n- _Lazy_ operations return a *view* of the receiving\n  iterable object. If the underlying iterable object is\n  mutable, then changes to the underlying object will\n  be reflected in the resulting view. Lazy operations\n  are usually efficient, avoiding memory allocation or\n  iteration of the receiving iterable object.\n- _Eager_ operations return an immutable object. If the\n  receiving iterable object is mutable, changes to this\n  object will not be reflected in the resulting \n  immutable object. Eager operations are often \n  expensive, involving memory allocation and iteration\n  of the receiving iterable object.\n\nLazy operations are preferred, because they can be \nefficiently chained. For example:\n\n    string.filter((Character c) => c.letter)\n          .map((Character c) => c.uppercased)\n\nis much less expensive than:\n\n    string.select((Character c) => c.letter)\n          .collect((Character c) => c.uppercased)\n\nFurthermore, it is always easy to produce a new \nimmutable iterable object given the view produced by a\nlazy operation. For example:\n\n    [ *string.filter((Character c) => c.letter)\n          .map((Character c) => c.uppercased) ]\n\nLazy operations normally return an instance of \n`Iterable` or `Map`.\n\nHowever, there are certain scenarios where an eager \noperation is more useful, more convenient, or no more \nexpensive than a lazy operation, including:\n\n- sorting operations, which are eager by nature,\n- operations which preserve emptiness\/nonemptiness of\n  the receiving iterable object.\n\nEager operations normally return a sequence."],"by":["Gavin"]},"$m":{"cycle":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"times"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["cycled","repeat"],"doc":["A finite iterable object that produces the elements of \nthis iterable object, repeatedly, the given number of\ntimes."]},"$nm":"cycle","$o":{"iterable":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"obj","$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"count":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"count"},"iter":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"iter"}},"$nm":"iterator"}}}},"$at":{"orig":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$nm":"orig"}},"$nm":"iterable"}}},"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["An iterator for the elements belonging to this \ncontainer."]},"$nm":"iterator"},"sort":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"x"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"y"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The function comparing pairs of elements."]},"$nm":"comparing"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["byIncreasing","byDecreasing"],"doc":["A sequence containing the elements of this\ncontainer, sorted according to a function \nimposing a partial order upon the elements.\n\nFor convenience, the functions `byIncreasing()` \nand `byDecreasing()` produce a suitable \ncomparison function:\n\n    \"Hello World!\".sort(byIncreasing((Character c) => c.lowercased))\n\nThis operation is eager by nature."]},"$nm":"sort"},"count":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The predicate satisfied by the elements to\nbe counted."]},"$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Return the number of elements in this `Iterable` \nthat satisfy the predicate function."]},"$m":{"selecting":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"doc":["The predicate satisfied by the elements to\nbe counted."]},"$nm":"selecting"}},"$nm":"count"},"takingWhile":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"take"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$m":{"take":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$nm":"take"}},"$nm":"takingWhile","$o":{"iterable":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"obj","$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"alive":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"alive"}},"$nm":"iterator"}}}},"$nm":"iterable"}}},"select":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The predicate the elements must satisfy."]},"$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["filter"],"doc":["A sequence containing the elements of this \ncontainer that satisfy the given predicate. An \neager counterpart to `filter()`."]},"$nm":"select"},"longerThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["size"],"doc":["Determines if this iterable object has more elements\nthan the given length. This is an efficient operation \nfor iterable objects with many elements."]},"$nm":"longerThan"},"by":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"throws":["AssertionException","if the given step size is nonpositive, \ni.e. `step<1`"],"doc":["Produce an `Iterable` containing every `step`th \nelement of this iterable object. If the step size \nis `1`, the `Iterable` contains the same elements \nas this iterable object. The step size must be \ngreater than zero. The expression\n\n    (0..10).by(3)\n\nresults in an iterable object with the elements\n`0`, `3`, `6`, and `9` in that order."]},"$nm":"by","$o":{"iterable":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"obj","$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$nm":"iterator"}}}},"$nm":"iterable"}}},"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"contains"},"repeat":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"times"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["cycle"],"doc":["Returns a list formed by repeating the elements of this\niterable object the given number of times, or an empty \nlist if `times<=0`. An eager counterpart to `cycle()`."]},"$nm":"repeat"},"every":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The predicate that all elements must \nsatisfy."]},"$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Return `true` if all elements satisfy the predicate\nfunction."]},"$m":{"selecting":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"mthd","$an":{"doc":["The predicate that all elements must \nsatisfy."]},"$nm":"selecting"}},"$nm":"every"},"fold":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$mt":"prm","$nm":"initial"},{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$mt":"prm","$nm":"partial"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The accumulating function that accepts an\nintermediate result, and the next element."]},"$nm":"accumulating"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"default":[],"doc":["The result of applying the accumulating function to \neach element of this container in turn."]},"$m":{"accumulating":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Result"},"$mt":"prm","$nm":"partial"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$an":{"doc":["The accumulating function that accepts an\nintermediate result, and the next element."]},"$nm":"accumulating"}},"$nm":"fold"},"defaultNullElements":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"comp":"i","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Object"}]},{"$nm":"Default"}]},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$nm":"Default"},"$mt":"prm","$an":{"doc":["A default value that replaces `null` elements."]},"$nm":"defaultValue"}]],"$mt":"mthd","$tp":[{"$nm":"Default"}],"$an":{"shared":[],"default":[],"doc":["An `Iterable` that produces the elements of this \niterable object, replacing every `null` element \nwith the given default value. The resulting iterable\nobject does not produce the value `null`."]},"$nm":"defaultNullElements"},"taking":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"take"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Produce an `Iterable` containing the first `take`\nelements of this iterable object. If the specified \nnumber of elements is larger than the number of \nelements of this iterable object, the `Iterable` \ncontains the same elements as this iterable object."]},"$nm":"taking","$o":{"iterable":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"obj","$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"i":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"i"}},"$nm":"iterator"}}}},"$at":{"first":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"first"}},"$nm":"iterable"}}},"following":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$nm":"head"}]],"$mt":"mthd","$tp":[{"$nm":"Other"}],"$an":{"shared":[],"default":[],"doc":["An `Iterable` with the given inital element followed \nby the elements of this iterable object."]},"$nm":"following","$o":{"cons":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"obj","$m":{"iterator":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$nm":"Other"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"first":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"first"}},"$nm":"iterator"}}}},"$nm":"cons"}}},"chain":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]},{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Absent"},{"$nm":"OtherAbsent"}]}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"},{"$mt":"tpm","$nm":"OtherAbsent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$tp":[{"$nm":"Other"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Null"}],"$nm":"OtherAbsent"}],"$an":{"shared":[],"default":[],"doc":["The elements of this iterable object, in their\noriginal order, followed by the elements of the \ngiven iterable object also in their original order."]},"$nm":"chain","$o":{"chained":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]},{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Absent"},{"$nm":"OtherAbsent"}]}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"obj","$m":{"iterator":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"}},"$nm":"chained"}}},"shorterThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["size"],"doc":["Determines if this iterable object has fewer elements\nthan the given length. This is an efficient operation \nfor iterable objects with many elements."]},"$nm":"shorterThan"},"skippingWhile":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"skip"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$m":{"skip":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$nm":"skip"}},"$nm":"skippingWhile","$o":{"iterable":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"obj","$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"first":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"first"}},"$nm":"iterator"}}}},"$nm":"iterable"}}},"any":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The predicate that at least one element \nmust satisfy."]},"$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Return `true` if at least one element satisfies the\npredicate function."]},"$m":{"selecting":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"e"}]],"$mt":"mthd","$an":{"doc":["The predicate that at least one element \nmust satisfy."]},"$nm":"selecting"}},"$nm":"any"},"map":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The mapping to apply to the elements."]},"$nm":"collecting"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"default":[],"see":["collect"],"doc":["An `Iterable` containing the results of applying\nthe given mapping to the elements of to this \ncontainer."]},"$nm":"map"},"findLast":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The predicate the element must satisfy."]},"$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["The last element which satisfies the given\npredicate, if any, or `null` otherwise."]},"$m":{"selecting":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$an":{"doc":["The predicate the element must satisfy."]},"$nm":"selecting"}},"$nm":"findLast"},"skipping":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"skip"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Produce an `Iterable` containing the elements of\nthis iterable object, after skipping the first \n`skip` elements. If this iterable object does not \ncontain more elements than the specified number of \nelements, the `Iterable` contains no elements."]},"$nm":"skipping","$o":{"iterable":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"obj","$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"}},"$nm":"iterable"}}},"filter":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The predicate the elements must satisfy."]},"$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["select"],"doc":["An `Iterable` containing the elements of this \ncontainer that satisfy the given predicate."]},"$nm":"filter"},"find":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The predicate the element must satisfy."]},"$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["The first element which satisfies the given \npredicate, if any, or `null` otherwise."]},"$m":{"selecting":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$an":{"doc":["The predicate the element must satisfy."]},"$nm":"selecting"}},"$nm":"find"},"collect":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The transformation applied to the elements."]},"$nm":"collecting"}]],"$mt":"mthd","$tp":[{"$nm":"Result"}],"$an":{"shared":[],"default":[],"see":["map"],"doc":["A sequence containing the results of applying the\ngiven mapping to the elements of this container. An \neager counterpart to `map()`."]},"$nm":"collect"}},"$at":{"cycled":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"default":[],"see":["cycle"],"doc":["A non-finite iterable object that produces the elements \nof this iterable object, repeatedly."]},"$nm":"cycled","$o":{"iterable":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"obj","$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"iter":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"iter"}},"$nm":"iterator"}}}},"$at":{"orig":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$nm":"orig"}},"$nm":"iterable"}}},"last":{"$t":{"comp":"u","$ts":[{"$nm":"Absent"},{"$nm":"Element"}]},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["The last element returned by the iterator, if any.\nIterables are potentially infinite, so calling this\nmight never return; also, this implementation will\niterate through all the elements, which might be\nvery time-consuming."],"actual":[]},"$nm":"last"},"indexed":{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Object"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["All entries of form `index->element` where `index` \nis the position at which `element` occurs, for every\nnon-null element of this `Iterable`, ordered by\nincreasing `index`. For a null element at a given\nposition in the original `Iterable`, there is no \nentry with the corresponding index in the resulting \niterable object. The expression \n\n    { \"hello\", null, \"world\" }.indexed\n    \nresults in an iterable object with the entries\n`0->\"hello\"` and `2->\"world\"`."]},"$nm":"indexed","$o":{"indexes":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Object"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"obj","$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Object"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Object"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Object"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"iter":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"attr","$nm":"iter"},"i":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"i"}},"$nm":"iterator"}}}},"$at":{"orig":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$nm":"orig"}},"$nm":"indexes"}}},"sequence":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["A sequence containing the elements returned by the\niterator."]},"$nm":"sequence"},"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["A string of form `\"{ x, y, z }\"` where `x`, `y`, \nand `z` are the `string` representations of the \nelements of this collection, as produced by the\niterator of the collection, or the string `\"{}\"` \nif this iterable is empty. If the number of items\nis very large only a certain amount of them might\nbe shown followed by \"...\"."],"actual":[]},"$nm":"string"},"coalesced":{"$t":{"$tp":[{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Object"}]},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["The non-null elements of this `Iterable`, in their\noriginal order. For null elements of the original \n`Iterable`, there is no entry in the resulting \niterable object."]},"$nm":"coalesced"},"empty":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Determines if the iterable object is empty, that is\nto say, if the iterator returns no elements."],"actual":[]},"$nm":"empty"},"rest":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Returns an iterable object containing all but the \nfirst element of this container."]},"$nm":"rest"},"first":{"$t":{"comp":"u","$ts":[{"$nm":"Absent"},{"$nm":"Element"}]},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["The first element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`."],"actual":[]},"$nm":"first"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"default":[]},"$nm":"size"}},"$nm":"Iterable"},"flatten":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Return"},{"$mt":"tpm","$nm":"Args"}],"$pk":"ceylon.language","$nm":"Callable"},"$ps":[[{"$t":{"$nm":"Return"},"$ps":[[{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"tuple"}]],"$mt":"prm","$pt":"f","$nm":"tupleFunction"}]],"$mt":"mthd","$tp":[{"$nm":"Return"},{"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Args"}],"$an":{"shared":[],"native":[],"see":["unflatten"],"doc":["Given a `Callable` with a single tuple parameter of type `[P1, P2, ..., Pn]`\nreturns an equivalent `Callable` with the parameter types `P1`, `P2`, ..., `Pn`."]},"$nm":"flatten"},"OptionalAnnotation":{"of":[{"$nm":"Value"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Value"}]},{"$mt":"tpm","$nm":"ProgramElement"}],"$pk":"ceylon.language","$nm":"ConstrainedAnnotation"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Annotation"}],"variance":"out","$nm":"Value"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Annotated"}],"$def":{"$pk":"ceylon.language","$nm":"Annotated"},"variance":"in","$nm":"ProgramElement"}],"$an":{"shared":[],"see":["Annotation"],"doc":["An annotation that may occur at most once at a single program element and \nonly on certain program elements.\n\nAn optional annotation is declared simply by having the annotation class\nsatisfy OptionalAnnotation instead of [[Annotation]]. For example \nthe following would only be allowed on `class` declarations:\n\n    final annotation class ExampleClass() \n            satisfies OptionalAnnotation<Example, ClassDeclaration> {}\n\nAt runtime a [[ceylon.language.meta.declaration::Declaration]] instance \ncan be queried for its `OptionalAnnotation`s of a certain type using \n[[ceylon.language.meta::annotations]] or [[ceylon.language.meta::optionalAnnotation]].\n"]},"$nm":"OptionalAnnotation","$st":"Value"},"LazyList":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elems"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"}],"$mt":"cls","$tp":[{"variance":"out","$nm":"Element"}],"$an":{"shared":[],"doc":["An implementation of `List` that wraps an `Iterable` of\nelements. All operations on this `List` are performed on \nthe `Iterable`."],"by":["Enrique Zamudio"]},"$m":{"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"get":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"equals"},"spanTo":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"segment":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"findLast":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"findLast"},"spanFrom":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"span":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"lastIndex":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"last":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"last"},"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"hash"},"reversed":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a `List` with the elements of this `List` \nin reverse order. This operation will create copy \nthe elements to a new `List`, so changes to the \noriginal `Iterable` will no longer be reflected in \nthe new `List`."],"actual":[]},"$nm":"reversed"},"rest":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"rest"},"elems":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"elems"},"first":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"first"}},"$nm":"LazyList"},"className":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[],"native":[],"doc":["Return the name of the concrete class of the given \nobject, in a format native to the virtual machine."]},"$nm":"className"},"List":{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Collection"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Correspondence"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"}],"$pk":"ceylon.language","$nm":"Ranged"},{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"ifc","$tp":[{"variance":"out","$nm":"Element"}],"$an":{"shared":[],"see":["Sequence","Empty","Array"],"doc":["Represents a collection in which every element has a \nunique non-negative integer index.\n\nA `List` is a `Collection` of its elements, and a \n`Correspondence` from indices to elements.\n\nDirect access to a list element by index produces a\nvalue of optional type. The following idiom may be\nused instead of upfront bounds-checking, as long as \nthe list element type is a non-`null` type:\n\n    value char = \"hello world\"[index];\n    if (exists char) { \/*do something*\/ }\n    else { \/*out of bounds*\/ }\n\nTo iterate the indexes of a `List`, use the following\nidiom:\n\n    for (i->char in \"hello world\".indexed) { ... }"]},"$m":{"longerThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"longerThan"},"trimLeading":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"trimming"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$m":{"trimming":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$nm":"trimming"}},"$nm":"trimLeading"},"includes":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"prm","$nm":"sublist"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Determine if the given list occurs at some index in \nthis list."]},"$nm":"includes"},"firstInclusion":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"prm","$nm":"sublist"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["The first index in this list at which the given list \noccurs."]},"$nm":"firstInclusion"},"occurs":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"occurs"},"withTrailing":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Sequence"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$an":{"doc":["The last element of the resulting sequence."]},"$nm":"element"}]],"$mt":"mthd","$tp":[{"$nm":"Other"}],"$an":{"shared":[],"default":[],"doc":["Returns a new `List` that contains the specified\nelement appended to the end of the elements of this \n`List`."]},"$nm":"withTrailing"},"firstOccurrence":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["The first index in this list at which the given element \noccurs."]},"$nm":"firstOccurrence"},"terminal":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["List.initial"],"doc":["Select the last elements of the list, returning a list \nno longer than the given length. If this list is \nshorter than the given length, return this list. \nOtherwise return a list of the given length."]},"$nm":"terminal"},"initial":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["List.terminal"],"doc":["Select the first elements of this list, returning a \nlist no longer than the given length. If this list is \nshorter than the given length, return this list. \nOtherwise return a list of the given length."]},"$nm":"initial"},"inclusions":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"prm","$nm":"sublist"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["The indexes in this list at which the given list \noccurs."]},"$nm":"inclusions"},"occurrences":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["The indexes in this list at which the given element \noccurs."]},"$nm":"occurrences"},"trim":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"trimming"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$m":{"trimming":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$nm":"trimming"}},"$nm":"trim"},"startsWith":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"prm","$nm":"sublist"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Determine if the given list occurs at the start of this \nlist."]},"$nm":"startsWith"},"iterator":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"iterator","$o":{"listIterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"index":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"}},"$nm":"listIterator"}}},"get":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the element of this sequence with the given\n    index, or `null` if the given index is past the end\n    of the sequence, that is, if\n    `index>sequence.lastIndex`. The first element of\n    the sequence has index `0`."],"actual":[]},"$nm":"get"},"equals":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Two `List`s are considered equal iff they have the \nsame `size` and _entry sets_. The entry set of a \nlist `l` is the set of elements of `l.indexed`. \nThis definition is equivalent to the more intuitive \nnotion that two lists are equal iff they have the \nsame `size` and for every index either:\n\n- the lists both have the element `null`, or\n- the lists both have a non-null element, and the\n  two elements are equal."],"actual":[]},"$nm":"equals"},"indexes":{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$an":{"doc":["The predicate the indexed elements must satisfy"]},"$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["The indexes in this list for which the element \nsatisfies the given predicate."]},"$nm":"indexes"},"occursAt":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"occursAt"},"defines":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Determines if the given index refers to an element\n    of this sequence, that is, if\n    `index<=sequence.lastIndex`."],"actual":[]},"$nm":"defines"},"shorterThan":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$nm":"shorterThan"},"lastInclusion":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"prm","$nm":"sublist"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["The last index in this list at which the given list \noccurs."]},"$nm":"lastInclusion"},"trimTrailing":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"trimming"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$m":{"trimming":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$nm":"trimming"}},"$nm":"trimTrailing"},"includesAt":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$an":{"doc":["The index at which this list might occur"]},"$nm":"index"},{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"prm","$nm":"sublist"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Determine if the given list occurs at the given index \nof this list."]},"$nm":"includesAt"},"lastOccurrence":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["The last index in this list at which the given element \noccurs."]},"$nm":"lastOccurrence"},"endsWith":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"prm","$nm":"sublist"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Determine if the given list occurs at the end of this\nlist."]},"$nm":"endsWith"},"findLast":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"actual":[]},"$m":{"selecting":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"findLast"},"withLeading":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Sequence"},"$ps":[[{"$t":{"$nm":"Other"},"$mt":"prm","$an":{"doc":["The first element of the resulting sequence."]},"$nm":"element"}]],"$mt":"mthd","$tp":[{"$nm":"Other"}],"$an":{"shared":[],"default":[],"see":["following"],"doc":["Returns a new `List` that starts with the specified\nelement, followed by the elements of this `List`."]},"$nm":"withLeading"}},"$at":{"lastIndex":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"see":["List.size"],"doc":["The index of the last element of the list, or\nnull if the list is empty."]},"$nm":"lastIndex"},"last":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Returns the last element of this `List`, if any."],"actual":[]},"$nm":"last"},"hash":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"default":[],"actual":[]},"$nm":"hash"},"reversed":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Reverse this list, returning a new list."]},"$nm":"reversed"},"rest":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The rest of the list, without the first element."],"actual":[]},"$nm":"rest"},"first":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Returns the first element of this `List`, if any."],"actual":[]},"$nm":"first"},"size":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"default":[],"see":["List.lastIndex"],"doc":["The number of elements in this sequence, always\n`sequence.lastIndex+1`."],"actual":[]},"$nm":"size"}},"$nm":"List"},"Container":{"satisfies":[{"$pk":"ceylon.language","$nm":"Category"}],"$mt":"ifc","$tp":[{"variance":"out","$nm":"Element"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Null"}],"$def":{"$pk":"ceylon.language","$nm":"Null"},"variance":"out","$nm":"Absent"}],"$an":{"shared":[],"deprecated":["Will be removed in Ceylon 1.0."],"see":["Category"],"doc":["Abstract supertype of objects which may or may not\ncontain one of more other values, called *elements*,\nand provide an operation for accessing the first \nelement, if any. A container which may or may not be \nempty is a `Container<Element,Null>`. A container which \nis always empty is a `Container<Nothing,Null>`. A \ncontainer which is never empty is a \n`Container<Element,Nothing>`."],"by":["Gavin"]},"$at":{"last":{"$t":{"comp":"u","$ts":[{"$nm":"Absent"},{"$nm":"Element"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The last element. Should produce `null` if the\ncontainer is empty, that is, for any instance for\nwhich `empty` evaluates to `true`."]},"$nm":"last"},"empty":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Determine if the container is empty, that is, if\nit has no elements."]},"$nm":"empty"},"first":{"$t":{"comp":"u","$ts":[{"$nm":"Absent"},{"$nm":"Element"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The first element. Should produce `null` if the \ncontainer is empty, that is, for any instance for\n    which `empty` evaluates to `true`."]},"$nm":"first"}},"$nm":"Container"},"abstract":{"$t":{"$pk":"ceylon.language","$nm":"AbstractAnnotation"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to mark a class as abstract. An `abstract` class \nmay not be directly instantiated. An `abstract` class may \nhave enumerated cases."]},"$annot":"1","$nm":"abstract"},"zip":{"$t":{"$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"keys"},{"$t":{"$tp":[{"$mt":"tpm","$nm":"Item"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"items"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"doc":["Given two sequences, form a new sequence consisting of\nall entries where, for any given index in the resulting\nsequence, the key of the entry is the element occurring \nat the same index in the first sequence, and the item \nis the element occurring at the same index in the second \nsequence. The length of the resulting sequence is the \nlength of the shorter of the two given sequences. \n\nThus:\n\n    zip(xs,ys)[i]==xs[i]->ys[i]\n\nfor every `0<=i<min({xs.size,ys.size})`."]},"$nm":"zip"},"equal":{"super":{"$pk":"ceylon.language","$nm":"Comparison"},"$mt":"obj","$an":{"shared":[],"doc":["The value is exactly equal to the given value."]},"$nm":"equal"},"finished":{"super":{"$pk":"ceylon.language","$nm":"Finished"},"$mt":"obj","$an":{"shared":[],"see":["Iterator"],"doc":["A value that indicates that an `Iterator`\nis exhausted and has no more values to \nreturn."]},"$at":{"string":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"finished"},"Boolean":{"abstract":"1","super":{"$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.language","$nm":"true"},{"$pk":"ceylon.language","$nm":"false"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["A type capable of representing the values true and\nfalse of Boolean logic."],"by":["Gavin"]},"$nm":"Boolean"},"print":{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Print a line to the standard output of the virtual machine \nprocess, printing the given value's `string`, or `<null>` \nif the value is `null`.\n\nThis method is a shortcut for:\n\n    process.writeLine(line?.string else \"<null>\")\n\nand is intended mainly for debugging purposes."],"by":["Gavin"]},"$nm":"print"},"ChainedIterator":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"first"},{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"second"}],"satisfies":[{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"cls","$tp":[{"variance":"out","$nm":"Element"},{"variance":"out","$nm":"Other"}],"$an":{"see":["Iterable.chain"],"doc":["An `Iterator` that returns the elements of two\n`Iterable`s, as if they were chained together."],"by":["Enrique Zamudio"]},"$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$nm":"Other"},{"$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"more":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"more"},"second":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Other"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"second"},"iter":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.language","$nm":"Iterator"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"iter"},"first":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"first"}},"$nm":"ChainedIterator"},"Basic":{"abstract":"1","super":{"$pk":"ceylon.language","$nm":"Object"},"satisfies":[{"$pk":"ceylon.language","$nm":"Identifiable"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["The default superclass when no superclass is explicitly\nspecified using `extends`. For the sake of convenience, \nthis class inherits a default definition of value\nequality from `Identifiable`."],"by":["Gavin"]},"$nm":"Basic"},"DocAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[],"doc":["Documentation, in Markdown syntax, about the annotated element"]},"$nm":"description"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"DocAnnotation"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Annotated"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for the [[doc]] annotation."]},"$annot":"1","$at":{"description":{"$t":{"$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Documentation, in Markdown syntax, about the annotated element"]},"$nm":"description"}},"$nm":"DocAnnotation"},"Category":{"$mt":"ifc","$an":{"shared":[],"see":["Container"],"doc":["Abstract supertype of objects that contain other \nvalues, called *elements*, where it is possible to \nefficiently determine if a given value is an element. \n`Category` does not satisfy `Container`, because it is \nconceptually possible to have a `Category` whose \nemptiness cannot be computed.\n\nThe `in` operator may be used to determine if a value\nbelongs to a `Category`:\n\n    if (\"hello\" in \"hello world\") { ... }\n    if (69 in 0..100) { ... }\n    if (key->value in { for (n in 0..100) n.string->n**2 }) { ... }\n\nOrdinarily, `x==y` implies that `x in cat == y in cat`.\nBut this contract is not required since it is possible\nto form a meaningful `Category` using a different\nequivalence relation. For example, an `IdentitySet` is\na meaningful `Category`."],"by":["Gavin"]},"$m":{"containsAny":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["contains"],"doc":["Determines if any one of the given values belongs \nto this `Category`"]},"$nm":"containsAny"},"contains":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"see":["containsEvery","containsAny"],"doc":["Determines if the given value belongs to this\n`Category`, that is, if it is an element of this\n`Category`.\n\nFor most `Category`s, if `x==y`, then \n`category.contains(x)` evaluates to the same\nvalue as `category.contains(y)`. However, it is\npossible to form a `Category` consistent with some \nother equivalence relation, for example `===`. \nTherefore implementations of `contains()` which do \nnot satisfy this relationship are tolerated."]},"$nm":"contains"},"containsEvery":{"$t":{"$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Object"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"see":["contains"],"doc":["Determines if every one of the given values belongs\nto this `Category`."]},"$nm":"containsEvery"}},"$nm":"Category"},"see":{"$t":{"$pk":"ceylon.language","$nm":"SeeAnnotation"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"Declaration"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$an":{"doc":["The program elements being referred to."]},"$nm":"programElements"}]],"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to specify API references to other related \nprogram elements."]},"$annot":"1","$nm":"see"},"computeMagnitude":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"radix"},{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.language","$nm":"Character"}]},"$mt":"prm","$nm":"char"}]],"$mt":"mthd","$nm":"computeMagnitude"},"NegativeNumberException":{"super":{"$pk":"ceylon.language","$nm":"Exception"},"$mt":"cls","$an":{"shared":[],"doc":["Thrown when a negative number is not allowed."]},"$nm":"NegativeNumberException"},"SharedAnnotation":{"super":{"$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"SharedAnnotation"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.language.meta.declaration","$nm":"ValueDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"ClassOrInterfaceDeclaration"},{"$pk":"ceylon.language.meta.declaration","$nm":"Package"},{"$pk":"ceylon.language.meta.declaration","$nm":"Import"}]}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["The annotation class for [[shared]]."]},"$annot":"1","$nm":"SharedAnnotation"},"actual":{"$t":{"$pk":"ceylon.language","$nm":"ActualAnnotation"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Annotation to mark a member of a type as refining a member \nof a supertype."]},"$annot":"1","$nm":"actual"},"Integer":{"super":{"$pk":"ceylon.language","$nm":"Object"},"$ps":[{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"integer"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Scalar"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Integral"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Binary"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Exponentiable"}],"$mt":"cls","$an":{"shared":[],"final":[],"native":[],"doc":["A 64-bit integer, or the closest approximation to a \n64-bit integer provided by the underlying platform.\n\n- For the JVM runtime, integer values between\n  -2<sup>63<\/sup> and 2<sup>63<\/sup>-1 may be \n  represented without overflow.\n- For the JavaScript runtime, integer values with a\n  magnitude no greater than 2<sup>53<\/sup> may be\n  represented without loss of precision.\n\nOverflow or loss of precision occurs silently (with\nno exception raised)."]},"$at":{"integer":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"integer"},"character":{"$t":{"$pk":"ceylon.language","$nm":"Character"},"$mt":"attr","$an":{"shared":[],"native":[],"doc":["The UTF-32 character with this UCS code point."]},"$nm":"character"}},"$nm":"Integer"},"first":{"$t":{"comp":"u","$ts":[{"$nm":"Absent"},{"$nm":"Value"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Absent"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$tp":[{"$nm":"Value"},{"satisfies":[{"$pk":"ceylon.language","$nm":"Null"}],"$nm":"Absent"}],"$an":{"shared":[],"doc":["The first of the given values (usually a comprehension),\nif any."]},"$nm":"first"},"zeroInt":{"$t":{"$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"zeroInt"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
function getT$name() {return this.constructor.T$name;}
function getT$all() {return this.constructor.T$all;}
function initType(type, typeName) {
var cons = function() {}
type.$$ = cons;
cons.T$name = typeName;
cons.T$all = {}
cons.T$all[typeName] = type;
for (var i=2; i<arguments.length; ++i) {
var superTypes = arguments[i].$$.T$all;
for (var $ in superTypes) {cons.T$all[$] = superTypes[$]}
}
cons.prototype.getT$name = getT$name;
cons.prototype.getT$all = getT$all;
}
function initTypeProto(type, typeName) {
initType.apply(this, arguments);
var args = [].slice.call(arguments, 2);
args.unshift(type);
inheritProto.apply(this, args);
}
function initExistingType(type, cons, typeName) {
type.$$ = cons;
cons.T$name = typeName;
cons.T$all = {}
cons.T$all[typeName] = type;
for (var i=3; i<arguments.length; ++i) {
var superTypes = arguments[i].$$.T$all;
for (var $ in superTypes) {cons.T$all[$] = superTypes[$]}
}
var proto = cons.prototype;
if (proto !== undefined) {
try {
proto.getT$name = getT$name;
proto.getT$all = getT$all;
} catch (exc) {
// browser probably prevented access to the prototype
}
}
}
function initExistingTypeProto(type, cons, typeName) {
var args = [].slice.call(arguments, 0);
args.push($init$Basic());
initExistingType.apply(this, args);
var proto = cons.prototype;
if ((proto !== undefined) && (proto.getHash === undefined)) {
var origToString = proto.toString;
try {
inheritProto(type, Basic);
proto.toString = origToString;
} catch (exc) {
// browser probably prevented access to the prototype
}
}
}
function inheritProto(type) {
var proto = type.$$.prototype;
for (var i=1; i<arguments.length; ++i) {
var superProto = arguments[i].$$.prototype;
var names = Object.getOwnPropertyNames(superProto);
for (var j=0; j<names.length; ++j) {
var name = names[j];
var desc = Object.getOwnPropertyDescriptor(superProto, name);
// only copy own, enumerable properties
if (desc && desc.enumerable) {
if (desc.get) {
// defined through getter/setter, so copy the definition
Object.defineProperty(proto, name, desc);
} else {
proto[name] = desc.value;
}
}
}
}
}
// Define a property on the given object (which may be a prototype).
// "get" and "set" are getter/setter functions, and the latter is optional.
function defineAttr(obj, name, get, set, metamodel) {
Object.defineProperty(obj, name, {get: get, set: set, configurable: true, enumerable: true});
obj['$prop$get'+name[0].toUpperCase()+name.substring(1)] = {get:get, set:set, $$metamodel$$:metamodel};
}
// Create a copy of the given property. The name of the copied property is name+suffix.
// This is used in closure mode to provide access to inherited attribute implementations.
function copySuperAttr(obj, name, suffix) {
var desc;
var o = obj;
// It may be an inherited property, so check the prototype chain.
do {
if ((desc = Object.getOwnPropertyDescriptor(o, name))) {break;}
o = o.__proto__;
} while (o);
if (desc) {
Object.defineProperty(obj, name+suffix, desc);
}
}
// read/writeAttrib return the getter/setter for the given property as defined in the
// given type. This is used in prototype mode to access inherited attribute implementations.
function attrGetter(type, name) {
return Object.getOwnPropertyDescriptor(type.$$.prototype, name).get;
}
function attrSetter(type, name, value) {
return Object.getOwnPropertyDescriptor(type.$$.prototype, name).set;
}
exports.initType=initType;
exports.initTypeProto=initTypeProto;
exports.initExistingType=initExistingType;
exports.initExistingTypeProto=initExistingTypeProto;
exports.inheritProto=inheritProto;
exports.defineAttr=defineAttr;
exports.copySuperAttr=copySuperAttr;
exports.attrGetter=attrGetter;
exports.attrSetter=attrSetter;
function Anything(wat) {
return wat;
}
initType(Anything, 'ceylon.language::Anything');
Anything.$$metamodel$$={$an:function(){return[shared(),abstract()]},mod:$$METAMODEL$$,d:['ceylon.language','Anything']};
function Null(wat) {
return null;
}
initType(Null, 'ceylon.language::Null', Anything);
Null.$$metamodel$$={'super':{t:Anything},$an:function(){return[shared(),abstract()]},mod:$$METAMODEL$$,d:['ceylon.language','Null']};
function Nothing(wat) {
throw "Nothing";
}
initType(Nothing, 'ceylon.language::Nothing');
//This is quite a special case, since Nothing is not in the model, we need to insert it there
$$METAMODEL$$['ceylon.language'].Nothing={"$mt":"cls","$an":{"shared":[]},"$nm":"Nothing"};
Nothing.$$metamodel$$={$ps:[],$an:function(){return[shared()]},mod:$$METAMODEL$$,d:['ceylon.language','Nothing']};
function Object$(wat) {
return wat;
}
initTypeProto(Object$, 'ceylon.language::Object', Anything);
Object$.$$metamodel$$={'super':{t:Anything},$an:function(){return[shared(),abstract()]},mod:$$METAMODEL$$,d:['ceylon.language','Object']};
var Object$proto = Object$.$$.prototype;
defineAttr(Object$proto, 'string', function(){
return String$(className(this) + "@" + this.hash);
},undefined,{$an:function(){return[shared(),$default()]},mod:$$METAMODEL$$,d:['ceylon.language','Object','$at','string']});
Object$proto.toString=function() { return this.string.valueOf(); }
function $init$Object$() { return Object$; }
function $init$Object() { return Object$; }
var BasicID=1;
function $identityHash(x) {
var hash = x.BasicID;
return (hash !== undefined)
? hash : (x.BasicID = BasicID++);
}
function Identifiable(obj) {}
initType(Identifiable, "ceylon.language::Identifiable");
Identifiable.$$metamodel$$={$an:function(){return[shared()]},mod:$$METAMODEL$$,d:['ceylon.language','Identifiable']};
function $init$Identifiable() { return Identifiable; }
var Identifiable$proto = Identifiable.$$.prototype;
Identifiable$proto.equals = function(that) {
return isOfType(that, {t:Identifiable}) && (that===this);
}
defineAttr(Identifiable$proto, 'hash', function(){ return $identityHash(this); },
undefined,{$an:function(){return[shared(),$default()]},mod:$$METAMODEL$$,d:['ceylon.language','Identifiable','$at','hash']});
//INTERFACES
//Compiled from Ceylon sources
function Callable(wat) {
    return wat;
}
Callable.$$metamodel$$={mod:$$METAMODEL$$,$an:function(){return[shared()];},$tp:{Arguments:{'var':'out'},Return:{'var':'out'}},d:['ceylon.language','Callable']};
exports.Callable=Callable;
function $init$Callable() {
    if (Callable.$$===undefined) {
        initType(Callable, 'ceylon.language::Callable');
    }
    return Callable;
}
exports.$init$Callable=$init$Callable;
$init$Callable();

function $JsCallable(callable,parms,targs) {
    if (callable.getT$all === undefined) {
        callable.getT$all=Callable.getT$all;
    }
    var set_meta = callable.$$metamodel$$ === undefined;
    if (set_meta) {
        callable.$$metamodel$$={$ps:[],mod:$$METAMODEL$$,d:['ceylon.language','Callable']};
        if (parms !== undefined) {
            callable.$$metamodel$$['$ps']=parms;
        }
    }
    if (targs !== undefined && callable.$$targs$$ === undefined) {
        callable.$$targs$$=targs;
        if (set_meta) {
            callable.$$metamodel$$['$t']=targs['Return'];
        }
    }
    return callable;
}
initExistingTypeProto($JsCallable, Function, 'ceylon.language::JsCallable', Callable);

function noop() { return null; }

//This is used for plain method references
function JsCallable(o,f) {
    Callable(o);
    if (o === null) return noop;
    var f2 = function() { return f.apply(o, arguments); };
    f2.$$metamodel$$=f.$$metamodel$$===undefined?Callable.$$metamodel$$:f.$$metamodel$$;
    return f2;
}
JsCallable.$$metamodel$$={$tp:{Return:{'var':'out'}, Arguments:{'var':'in'}},$an:function(){return[shared()];},mod:$$METAMODEL$$,d:['ceylon.language','Callable']};

//This is used for spread method references
function JsCallableList(value) {
    return function() {
        var rval = Array(value.length);
        for (var i = 0; i < value.length; i++) {
            var c = value[i];
            rval[i] = c.f.apply(c.o, arguments);
        }
        return ArraySequence(rval);
    };
}
JsCallableList.$$metamodel$$={$tp:{Return:{'var':'out'}, Arguments:{'var':'in'}},$an:function(){return[shared()];},mod:$$METAMODEL$$,d:['ceylon.language','Callable']};

exports.JsCallableList=JsCallableList;
exports.JsCallable=JsCallable;
exports.$JsCallable=$JsCallable;
function Comprehension(makeNextFunc, $$targs$$, compr) {
    $init$Comprehension();
    if (compr===undefined) {compr = new Comprehension.$$;}
    Basic(compr);
    compr.makeNextFunc = makeNextFunc;
    compr.$$targs$$=$$targs$$;
    return compr;
}
Comprehension.$$metamodel$$={$nm:'Comprehension',$an:function(){return[shared()];},mod:$$METAMODEL$$,d:['ceylon.language','Iterable']};
function $init$Comprehension() {
    if (Comprehension.$$===undefined) {
        initTypeProto(Comprehension, 'ceylon.language::Comprehension', $init$Basic(), $init$Iterable());
    }
    return Comprehension;
}
$init$Comprehension();
var Comprehension$proto = Comprehension.$$.prototype;
Comprehension$proto.iterator = function() {
    return ComprehensionIterator(this.makeNextFunc(), this.$$targs$$);
}
defineAttr(Comprehension$proto, 'sequence', function() {
    var sb = SequenceBuilder(this.$$targs$$);
    sb.appendAll(this);
    return sb.sequence;
},undefined,{$an:function(){return[shared(),actual()]},mod:$$METAMODEL$$,d:['ceylon.language','Iterable','$at','sequence']});
exports.Comprehension=Comprehension;

function ComprehensionIterator(nextFunc, $$targs$$, it) {
    $init$ComprehensionIterator();
    if (it===undefined) {it = new ComprehensionIterator.$$;}
    it.$$targs$$=$$targs$$;
    Basic(it);
    it.next = nextFunc;
    return it;
}
ComprehensionIterator.$$metamodel$$={$nm:'ComprehensionIterator',$an:function(){return[shared()];},mod:$$METAMODEL$$,d:['ceylon.language','Iterator']};
function $init$ComprehensionIterator() {
    if (ComprehensionIterator.$$===undefined) {
        initTypeProto(ComprehensionIterator, 'ceylon.language::ComprehensionIterator',
                $init$Basic(), $init$Iterator());
    }
    return ComprehensionIterator;
}
$init$ComprehensionIterator();
function Basic($$basic){
    $init$Basic();
    if ($$basic===undefined)throwexc(InvocationException$meta$model(String$("Cannot instantiate abstract class")),'?','?')
    Object$($$basic);
    Identifiable($$basic);
    return $$basic;
}
Basic.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Object$},satisfies:[{t:Identifiable}],$an:function(){return[doc(String$("The default superclass when no superclass is explicitly\nspecified using `extends`. For the sake of convenience, \nthis class inherits a default definition of value\nequality from `Identifiable`.",192)),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared(),abstract()];},d:['ceylon.language','Basic']};};
exports.Basic=Basic;
function $init$Basic(){
    if (Basic.$$===undefined){
        initTypeProto(Basic,'ceylon.language::Basic',Object$,$init$Identifiable());
    }
    return Basic;
}
exports.$init$Basic=$init$Basic;
$init$Basic();
function Exception(description$1, cause, $$exception){
    $init$Exception();
    if ($$exception===undefined)$$exception=new Exception.$$;
    if(description$1===undefined){description$1=null;}
    if(cause===undefined){cause=null;}
    if (typeof($init$native$Exception$before)==='function')$init$native$Exception$before($$exception);
    $$exception.cause$2_=cause;
    $$exception.$prop$getCause={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Exception}]},$cont:Exception,$an:function(){return[doc(String$("The underlying cause of this exception.",39)),shared()];},d:['ceylon.language','Exception','$at','cause']};}};
    $$exception.$prop$getCause.get=function(){return cause};
    $$exception.description$1_=description$1;
    $$exception.$prop$getDescription$1={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:String$}]},$cont:Exception,$an:function(){return[doc(String$("A description of the problem.",29))];},d:['ceylon.language','Exception','$at','description']};}};
    $$exception.$prop$getDescription$1.get=function(){return description$1};
    $$exception.$prop$getMessage={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Exception,$an:function(){return[doc(String$("A message describing the problem. This default \nimplementation returns the description, if any, or \notherwise the message of the cause, if any.",143)),see([$init$OpenValue()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Exception.$$.prototype.$prop$getCause)].reifyCeylonType({Absent:{t:Null},Element:{t:ValueDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Exception','$at','message']};}};
    $$exception.$prop$getMessage.get=function(){return message};
    $$exception.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Exception,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Exception','$at','string']};}};
    $$exception.$prop$getString.get=function(){return string};
    if (typeof($init$native$Exception$after)==='function')$init$native$Exception$after($$exception);
    return $$exception;
}
Exception.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Basic},satisfies:[],$an:function(){return[doc(String$("The supertype of all exceptions. A subclass represents\na more specific kind of problem, and may define \nadditional attributes which propagate information about\nproblems of that kind.",182)),by([String$("Gavin",5),String$("Tom",3)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared(),$native()];},d:['ceylon.language','Exception']};};
exports.Exception=Exception;
function $init$Exception(){
    if (Exception.$$===undefined){
        initTypeProto(Exception,'ceylon.language::Exception',Basic);
        (function($$exception){
            defineAttr($$exception,'cause',function(){return this.cause$2_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Exception}]},$cont:Exception,$an:function(){return[doc(String$("The underlying cause of this exception.",39)),shared()];},d:['ceylon.language','Exception','$at','cause']};});
            defineAttr($$exception,'description$1',function(){return this.description$1_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:String$}]},$cont:Exception,$an:function(){return[doc(String$("A description of the problem.",29))];},d:['ceylon.language','Exception','$at','description']};});
            defineAttr($$exception,'message',function(){
                var $$exception=this;
                return (opt$3=(opt$4=$$exception.description$1,opt$4!==null?opt$4:(opt$5=$$exception.cause,opt$5!==null?opt$5.message:null)),opt$3!==null?opt$3:String$("",0));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Exception,$an:function(){return[doc(String$("A message describing the problem. This default \nimplementation returns the description, if any, or \notherwise the message of the cause, if any.",143)),see([$init$OpenValue()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Exception.$$.prototype.$prop$getCause)].reifyCeylonType({Absent:{t:Null},Element:{t:ValueDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Exception','$at','message']};});
            defineAttr($$exception,'string',function(){
                var $$exception=this;
                return className($$exception).plus(StringBuilder().appendAll([String$(" \"",2),$$exception.message.string,String$("\"",1)]).string);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Exception,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Exception','$at','string']};});
        })(Exception.$$.prototype);
    }
    return Exception;
}
exports.$init$Exception=$init$Exception;
$init$Exception();
var opt$3,opt$4,opt$5;
function $init$native$Exception$before(exc) {
  var _caller=arguments.callee.caller.caller;
  exc.stack_trace=[];
  while(_caller) {
    exc.stack_trace.push(_caller);
    _caller = _caller.caller;
  }
}
Exception.$$.prototype.printStackTrace = function() {
  var _c = className(this);
  if (this.message.size > 0) {
    _c += ' "' + this.message + '"';
  }
  print(_c);
  for (var i=0; i<this.stack_trace.length; i++) {
    var f = this.stack_trace[i];
    var mm = f.$$metamodel$$;
    if (typeof(mm)==='function') {
      mm = mm();
      f.$$metamodel$$=mm;
    }
    if (mm) {
      var _src = '';
      if (i==0) {
        if (this.$loc && this.$file) _src = ' (' + this.$file + " " + this.$loc + ')';
      }
      print("    at " + mm.d[0] + "::" + mm.d[mm.d.length-1] + _src);
    }
  }
}
function Iterable($$targs$$,$$iterable){
    Container($$iterable.$$targs$$===undefined?$$targs$$:{Absent:$$iterable.$$targs$$.Absent,Element:$$iterable.$$targs$$.Element},$$iterable);
    set_type_args($$iterable,$$targs$$);
    $$iterable.$prop$getEmpty={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Iterable,$an:function(){return[doc(String$("Determines if the iterable object is empty, that is\nto say, if the iterator returns no elements.",96)),shared(),actual(),$default()];},d:['ceylon.language','Iterable','$at','empty']};}};
    $$iterable.$prop$getEmpty.get=function(){return empty};
    $$iterable.$prop$getSize={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Iterable,$an:function(){return[shared(),$default()];},d:['ceylon.language','Iterable','$at','size']};}};
    $$iterable.$prop$getSize.get=function(){return size};
    $$iterable.$prop$getFirst={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Absent','Element']},$cont:Iterable,$an:function(){return[doc(String$("The first element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.",124)),shared(),actual(),$default()];},d:['ceylon.language','Iterable','$at','first']};}};
    $$iterable.$prop$getFirst.get=function(){return first};
    $$iterable.$prop$getRest={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$cont:Iterable,$an:function(){return[doc(String$("Returns an iterable object containing all but the \nfirst element of this container.",83)),shared(),$default()];},d:['ceylon.language','Iterable','$at','rest']};}};
    $$iterable.$prop$getRest.get=function(){return rest};
    $$iterable.$prop$getSequence={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:Iterable,$an:function(){return[doc(String$("A sequence containing the elements returned by the\niterator.",60)),shared(),$default()];},d:['ceylon.language','Iterable','$at','sequence']};}};
    $$iterable.$prop$getSequence.get=function(){return sequence};
    $$iterable.$prop$getCoalesced={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:{ t:'i', l:['Element',{t:Object$}]}}},$cont:Iterable,$an:function(){return[doc(String$("The non-null elements of this `Iterable`, in their\noriginal order. For null elements of the original \n`Iterable`, there is no entry in the resulting \niterable object.",166)),shared(),$default()];},d:['ceylon.language','Iterable','$at','coalesced']};}};
    $$iterable.$prop$getCoalesced.get=function(){return coalesced};
}
Iterable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'var':'out'},Absent:{'var':'out','satisfies':[{t:Null}],'def':{t:Null}}},satisfies:[{t:Container,a:{Absent:'Absent',Element:'Element'}}],$an:function(){return[doc(String$("Abstract supertype of containers whose elements may be \niterated. An iterable container need not be finite, but\nits elements must at least be countable. There may not\nbe a well-defined iteration order, and so the order of\niterated elements may not be stable.\n\nThe type `Iterable<Element,Null>`, usually abbreviated\n`{Element*}` represents a possibly-empty iterable \ncontainer. The type `Iterable<Element,Nothing>`, \nusually abbreviated `{Element+}` represents a nonempty \niterable container.\n\nAn instance of `Iterable` may be constructed by \nsurrounding a value list in braces:\n\n    {String+} words = { \"hello\", \"world\" };\n\nAn instance of `Iterable` may be iterated using a `for`\nloop:\n\n    for (c in \"hello world\") { ... }\n\n`Iterable` and its subtypes define various operations\nthat return other iterable objects. Such operations \ncome in two flavors:\n\n- _Lazy_ operations return a *view* of the receiving\n  iterable object. If the underlying iterable object is\n  mutable, then changes to the underlying object will\n  be reflected in the resulting view. Lazy operations\n  are usually efficient, avoiding memory allocation or\n  iteration of the receiving iterable object.\n- _Eager_ operations return an immutable object. If the\n  receiving iterable object is mutable, changes to this\n  object will not be reflected in the resulting \n  immutable object. Eager operations are often \n  expensive, involving memory allocation and iteration\n  of the receiving iterable object.\n\nLazy operations are preferred, because they can be \nefficiently chained. For example:\n\n    string.filter((Character c) => c.letter)\n          .map((Character c) => c.uppercased)\n\nis much less expensive than:\n\n    string.select((Character c) => c.letter)\n          .collect((Character c) => c.uppercased)\n\nFurthermore, it is always easy to produce a new \nimmutable iterable object given the view produced by a\nlazy operation. For example:\n\n    [ *string.filter((Character c) => c.letter)\n          .map((Character c) => c.uppercased) ]\n\nLazy operations normally return an instance of \n`Iterable` or `Map`.\n\nHowever, there are certain scenarios where an eager \noperation is more useful, more convenient, or no more \nexpensive than a lazy operation, including:\n\n- sorting operations, which are eager by nature,\n- operations which preserve emptiness/nonemptiness of\n  the receiving iterable object.\n\nEager operations normally return a sequence.",2413)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Collection)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Iterable']};};
exports.Iterable=Iterable;
function $init$Iterable(){
    if (Iterable.$$===undefined){
        initTypeProto(Iterable,'ceylon.language::Iterable',$init$Container());
        (function($$iterable){
            defineAttr($$iterable,'empty',function(){
                var $$iterable=this;
                return isOfType($$iterable.iterator().next(),{t:Finished});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Iterable,$an:function(){return[doc(String$("Determines if the iterable object is empty, that is\nto say, if the iterator returns no elements.",96)),shared(),actual(),$default()];},d:['ceylon.language','Iterable','$at','empty']};});
            defineAttr($$iterable,'size',function(){
                var $$iterable=this;
                return $$iterable.count($JsCallable(function (e$6){
                    var $$iterable=this;
                    return true;
                },[{$nm:'e',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$iterable.$$targs$$.Element,Element:$$iterable.$$targs$$.Element}},Return:{t:Boolean$}}));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Iterable,$an:function(){return[shared(),$default()];},d:['ceylon.language','Iterable','$at','size']};});
            $$iterable.longerThan=function longerThan(length$7){
                var $$iterable=this;
                if(length$7.compare((0)).equals(getSmaller())){
                    return true;
                }
                var count$8=(0);
                var setCount$8=function(count$9){return count$8=count$9;};
                $prop$getCount$8={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','longerThan','$at','count']};}};
                $prop$getCount$8.get=function(){return count$8};
                $prop$getCount$8.set=setCount$8;
                if (setCount$8.$$metamodel$$===undefined)setCount$8.$$metamodel$$=$prop$getCount$8.$$metamodel$$;
                var it$10 = $$iterable.iterator();
                var element$11;while ((element$11=it$10.next())!==getFinished()){
                    if((oldcount$12=count$8,count$8=oldcount$12.successor,oldcount$12).equals(length$7)){
                        return true;
                    }
                    var oldcount$12;
                }
                return false;
            };$$iterable.longerThan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Iterable,$an:function(){return[doc(String$("Determines if this iterable object has more elements\nthan the given length. This is an efficient operation \nfor iterable objects with many elements.",148)),see([$init$OpenValue()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.$prop$getSize)].reifyCeylonType({Absent:{t:Null},Element:{t:ValueDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Iterable','$m','longerThan']};};
            $$iterable.shorterThan=function shorterThan(length$13){
                var $$iterable=this;
                if((length$13.compare((0))!==getLarger())){
                    return false;
                }
                var count$14=(0);
                var setCount$14=function(count$15){return count$14=count$15;};
                $prop$getCount$14={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','shorterThan','$at','count']};}};
                $prop$getCount$14.get=function(){return count$14};
                $prop$getCount$14.set=setCount$14;
                if (setCount$14.$$metamodel$$===undefined)setCount$14.$$metamodel$$=$prop$getCount$14.$$metamodel$$;
                var it$16 = $$iterable.iterator();
                var element$17;while ((element$17=it$16.next())!==getFinished()){
                    if((count$14=count$14.successor).equals(length$13)){
                        return false;
                    }
                }
                return true;
            };$$iterable.shorterThan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Iterable,$an:function(){return[doc(String$("Determines if this iterable object has fewer elements\nthan the given length. This is an efficient operation \nfor iterable objects with many elements.",149)),see([$init$OpenValue()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.$prop$getSize)].reifyCeylonType({Absent:{t:Null},Element:{t:ValueDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Iterable','$m','shorterThan']};};
            $$iterable.contains=function (element$18){
                var $$iterable=this;
                return $$iterable.any($JsCallable(ifExists($JsCallable((opt$19=element$18,JsCallable(opt$19,opt$19!==null?opt$19.equals:null)),[{$nm:'that',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:{t:Object$},Element:{t:Object$}}},Return:{t:Boolean$}})),[{$nm:'p1',$mt:'prm',$t:{t:Anything}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:{t:Anything},Element:{t:Anything}}},Return:{t:Boolean$}}));
            };
            $$iterable.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'element',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Iterable,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Iterable','$m','contains']};};
            defineAttr($$iterable,'first',function(){
                var $$iterable=this;
                return first($$iterable,{Value:$$iterable.$$targs$$.Element,Absent:$$iterable.$$targs$$.Absent});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Absent','Element']},$cont:Iterable,$an:function(){return[doc(String$("The first element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.",124)),shared(),actual(),$default()];},d:['ceylon.language','Iterable','$at','first']};});
            defineAttr($$iterable,'last',function(){
                var $$iterable=this;
                var e$20=$$iterable.first;
                var setE$20=function(e$21){return e$20=e$21;};
                $prop$getE$20={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Absent','Element']},$an:function(){return[variable()];},d:['ceylon.language','Iterable','$at','last','$at','e']};}};
                $prop$getE$20.get=function(){return e$20};
                $prop$getE$20.set=setE$20;
                if (setE$20.$$metamodel$$===undefined)setE$20.$$metamodel$$=$prop$getE$20.$$metamodel$$;
                var it$22 = $$iterable.iterator();
                var x$23;while ((x$23=it$22.next())!==getFinished()){
                    e$20=x$23;
                }
                return e$20;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Absent','Element']},$cont:Iterable,$an:function(){return[doc(String$("The last element returned by the iterator, if any.\nIterables are potentially infinite, so calling this\nmight never return; also, this implementation will\niterate through all the elements, which might be\nvery time-consuming.",223)),shared(),actual(),$default()];},d:['ceylon.language','Iterable','$at','last']};});defineAttr($$iterable,'rest',function(){
                var $$iterable=this;
                return $$iterable.skipping((1));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$cont:Iterable,$an:function(){return[doc(String$("Returns an iterable object containing all but the \nfirst element of this container.",83)),shared(),$default()];},d:['ceylon.language','Iterable','$at','rest']};});
            defineAttr($$iterable,'sequence',function(){
                var $$iterable=this;
                return Comprehension(function(){
                    var it$24=$$iterable.iterator();
                    var x$25=getFinished();
                    var next$x$25=function(){return x$25=it$24.next();}
                    next$x$25();
                    return function(){
                        if(x$25!==getFinished()){
                            var x$25$26=x$25;
                            var tmpvar$27=x$25$26;
                            next$x$25();
                            return tmpvar$27;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:$$iterable.$$targs$$.Element}).sequence;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:Iterable,$an:function(){return[doc(String$("A sequence containing the elements returned by the\niterator.",60)),shared(),$default()];},d:['ceylon.language','Iterable','$at','sequence']};});
            $$iterable.$map=function (collecting$28,$$$mptypes){
                var $$iterable=this;
                return Comprehension(function(){
                    var it$29=$$iterable.iterator();
                    var elem$30=getFinished();
                    var next$elem$30=function(){return elem$30=it$29.next();}
                    next$elem$30();
                    return function(){
                        if(elem$30!==getFinished()){
                            var elem$30$31=elem$30;
                            var tmpvar$32=collecting$28(elem$30$31);
                            next$elem$30();
                            return tmpvar$32;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:$$$mptypes.Result});
            };
            $$iterable.$map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:'Result'}},$ps:[{$nm:'collecting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[doc("The mapping to apply to the elements.")];}}],$cont:Iterable,$tp:{Result:{}},$an:function(){return[doc(String$("An `Iterable` containing the results of applying\nthe given mapping to the elements of to this \ncontainer.",105)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.collect)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Iterable','$m','map']};};
            $$iterable.$filter=function (selecting$33){
                var $$iterable=this;
                return Comprehension(function(){
                    var it$34=$$iterable.iterator();
                    var elem$35=getFinished();
                    var next$elem$35=function(){
                        while((elem$35=it$34.next())!==getFinished()){
                            if(selecting$33(elem$35)){
                                return elem$35;
                            }
                        }
                        return getFinished();
                    }
                    next$elem$35();
                    return function(){
                        if(elem$35!==getFinished()){
                            var elem$35$36=elem$35;
                            var tmpvar$37=elem$35$36;
                            next$elem$35();
                            return tmpvar$37;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:$$iterable.$$targs$$.Element});
            };
            $$iterable.$filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[doc("The predicate the elements must satisfy.")];}}],$cont:Iterable,$an:function(){return[doc(String$("An `Iterable` containing the elements of this \ncontainer that satisfy the given predicate.",90)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.select)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Iterable','$m','filter']};};
            $$iterable.fold=function fold(initial$38,accumulating$39,$$$mptypes){
                var $$iterable=this;
                var r$40=initial$38;
                var setR$40=function(r$41){return r$40=r$41;};
                $prop$getR$40={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Result',$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','fold','$at','r']};}};
                $prop$getR$40.get=function(){return r$40};
                $prop$getR$40.set=setR$40;
                if (setR$40.$$metamodel$$===undefined)setR$40.$$metamodel$$=$prop$getR$40.$$metamodel$$;
                var it$42 = $$iterable.iterator();
                var e$43;while ((e$43=it$42.next())!==getFinished()){
                    r$40=accumulating$39(r$40,e$43);
                }
                return r$40;
            };$$iterable.fold.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'initial',$mt:'prm',$t:'Result',$an:function(){return[];}},{$nm:'accumulating',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[doc("The accumulating function that accepts an\nintermediate result, and the next element.")];}}],$cont:Iterable,$tp:{Result:{}},$an:function(){return[doc(String$("The result of applying the accumulating function to \neach element of this container in turn.",92)),shared(),$default()];},d:['ceylon.language','Iterable','$m','fold']};};
            $$iterable.find=function find(selecting$44){
                var $$iterable=this;
                var it$45 = $$iterable.iterator();
                var e$46;while ((e$46=it$45.next())!==getFinished()){
                    if(selecting$44(e$46)){
                        return e$46;
                    }
                }
                return null;
            };$$iterable.find.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[doc("The predicate the element must satisfy.")];}}],$cont:Iterable,$an:function(){return[doc(String$("The first element which satisfies the given \npredicate, if any, or `null` otherwise.",84)),shared(),$default()];},d:['ceylon.language','Iterable','$m','find']};};
            $$iterable.findLast=function findLast(selecting$47){
                var $$iterable=this;
                var last$48=null;
                var setLast$48=function(last$49){return last$48=last$49;};
                $prop$getLast$48={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','findLast','$at','last']};}};
                $prop$getLast$48.get=function(){return last$48};
                $prop$getLast$48.set=setLast$48;
                if (setLast$48.$$metamodel$$===undefined)setLast$48.$$metamodel$$=$prop$getLast$48.$$metamodel$$;
                var it$50 = $$iterable.iterator();
                var e$51;while ((e$51=it$50.next())!==getFinished()){
                    if(selecting$47(e$51)){
                        last$48=e$51;
                    }
                }
                return last$48;
            };$$iterable.findLast.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[doc("The predicate the element must satisfy.")];}}],$cont:Iterable,$an:function(){return[doc(String$("The last element which satisfies the given\npredicate, if any, or `null` otherwise.",82)),shared(),$default()];},d:['ceylon.language','Iterable','$m','findLast']};};
            $$iterable.$sort=function (comparing$52){
                var $$iterable=this;
                return internalSort($JsCallable(comparing$52,[{$nm:'x',$mt:'prm',$t:'Element',$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:{t:Empty},First:$$iterable.$$targs$$.Element,Element:$$iterable.$$targs$$.Element}},First:$$iterable.$$targs$$.Element,Element:$$iterable.$$targs$$.Element}},Return:{t:Comparison}}),$$iterable,{Element:$$iterable.$$targs$$.Element});
            };
            $$iterable.$sort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'comparing',$mt:'prm',$pt:'f',$t:{t:Comparison},$an:function(){return[doc("The function comparing pairs of elements.")];}}],$cont:Iterable,$an:function(){return[doc(String$("A sequence containing the elements of this\ncontainer, sorted according to a function \nimposing a partial order upon the elements.\n\nFor convenience, the functions `byIncreasing()` \nand `byDecreasing()` produce a suitable \ncomparison function:\n\n    \"Hello World!\".sort(byIncreasing((Character c) => c.lowercased))\n\nThis operation is eager by nature.",347)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),byIncreasing),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),byDecreasing)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Iterable','$m','sort']};};
            $$iterable.collect=function (collecting$53,$$$mptypes){
                var $$iterable=this;
                return $$iterable.$map($JsCallable(collecting$53,[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$iterable.$$targs$$.Element,Element:$$iterable.$$targs$$.Element}},Return:$$$mptypes.Result}),{Result:$$$mptypes.Result}).sequence;
            };
            $$iterable.collect.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Result'}},$ps:[{$nm:'collecting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[doc("The transformation applied to the elements.")];}}],$cont:Iterable,$tp:{Result:{}},$an:function(){return[doc(String$("A sequence containing the results of applying the\ngiven mapping to the elements of this container. An \neager counterpart to `map()`.",132)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.$map)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Iterable','$m','collect']};};
            $$iterable.select=function (selecting$54){
                var $$iterable=this;
                return $$iterable.$filter($JsCallable(selecting$54,[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$iterable.$$targs$$.Element,Element:$$iterable.$$targs$$.Element}},Return:{t:Boolean$}})).sequence;
            };
            $$iterable.select.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[doc("The predicate the elements must satisfy.")];}}],$cont:Iterable,$an:function(){return[doc(String$("A sequence containing the elements of this \ncontainer that satisfy the given predicate. An \neager counterpart to `filter()`.",124)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.$filter)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Iterable','$m','select']};};
            $$iterable.any=function any(selecting$55){
                var $$iterable=this;
                var it$56 = $$iterable.iterator();
                var e$57;while ((e$57=it$56.next())!==getFinished()){
                    if(selecting$55(e$57)){
                        return true;
                    }
                }
                return false;
            };$$iterable.any.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[doc("The predicate that at least one element \nmust satisfy.")];}}],$cont:Iterable,$an:function(){return[doc(String$("Return `true` if at least one element satisfies the\npredicate function.",71)),shared(),$default()];},d:['ceylon.language','Iterable','$m','any']};};
            $$iterable.$every=function $every(selecting$58){
                var $$iterable=this;
                var it$59 = $$iterable.iterator();
                var e$60;while ((e$60=it$59.next())!==getFinished()){
                    if((!selecting$58(e$60))){
                        return false;
                    }
                }
                return true;
            };$$iterable.$every.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[doc("The predicate that all elements must \nsatisfy.")];}}],$cont:Iterable,$an:function(){return[doc(String$("Return `true` if all elements satisfy the predicate\nfunction.",61)),shared(),$default()];},d:['ceylon.language','Iterable','$m','every']};};
            $$iterable.skipping=function skipping(skip$61){
                var $$iterable=this;
                if((skip$61.compare((0))!==getLarger())){
                    return $$iterable;
                }else {
                    var cntvar$62=false;
                    var brkvar$64=false;
                    var retvar$63=(function(){
                        function iterable$65($$targs$$){
                            var $$iterable$65=new iterable$65.$$;
                            $$iterable$65.$$targs$$=$$targs$$;
                            Iterable({Absent:{t:Null},Element:$$iterable.$$targs$$.Element},$$iterable$65);
                            add_type_arg($$iterable$65,'Absent',{t:Null});
                            return $$iterable$65;
                        }
                        function $init$iterable$65(){
                            if (iterable$65.$$===undefined){
                                initTypeProto(iterable$65,'ceylon.language::Iterable.skipping.iterable',Basic,$init$Iterable());
                            }
                            return iterable$65;
                        }
                        $init$iterable$65();
                        (function($$iterable$65){
                            $$iterable$65.iterator=function iterator(){
                                var $$iterable$65=this;
                                var iter$66=$$iterable.iterator();
                                $prop$getIter$66={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},d:['ceylon.language','Iterable','$m','skipping','$o','iterable','$m','iterator','$at','iter']};}};
                                $prop$getIter$66.get=function(){return iter$66};
                                var i$67=(0);
                                var setI$67=function(i$68){return i$67=i$68;};
                                $prop$getI$67={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','skipping','$o','iterable','$m','iterator','$at','i']};}};
                                $prop$getI$67.get=function(){return i$67};
                                $prop$getI$67.set=setI$67;
                                if (setI$67.$$metamodel$$===undefined)setI$67.$$metamodel$$=$prop$getI$67.$$metamodel$$;
                                while(((oldi$69=i$67,i$67=oldi$69.successor,oldi$69).compare(skip$61).equals(getSmaller())&&(!isOfType(iter$66.next(),{t:Finished})))){}
                                var oldi$69;
                                return iter$66;
                            };$$iterable$65.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:iterable$65,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','skipping','$o','iterable','$m','iterator']};};
                        })(iterable$65.$$.prototype);
                        var iterable$70=iterable$65({Absent:{t:Null},Element:$$iterable.$$targs$$.Element});
                        var getIterable$70=function(){
                            return iterable$70;
                        }
                        getIterable$70.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterable$65},d:['ceylon.language','Iterable','$m','skipping','$at','iterable']};};
                        $prop$getIterable$70={get:getIterable$70,$$metamodel$$:getIterable$70.$$metamodel$$};
                        return getIterable$70();
                    }());if(retvar$63!==undefined){return retvar$63;}
                }
            };$$iterable.skipping.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$ps:[{$nm:'skip',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Iterable,$an:function(){return[doc(String$("Produce an `Iterable` containing the elements of\nthis iterable object, after skipping the first \n`skip` elements. If this iterable object does not \ncontain more elements than the specified number of \nelements, the `Iterable` contains no elements.",246)),shared(),$default()];},d:['ceylon.language','Iterable','$m','skipping']};};
            $$iterable.taking=function taking(take$71){
                var $$iterable=this;
                if((take$71.compare((0))!==getLarger())){
                    return getEmpty();
                }else {
                    var cntvar$72=false;
                    var brkvar$74=false;
                    var retvar$73=(function(){
                        function iterable$75($$targs$$){
                            var $$iterable$75=new iterable$75.$$;
                            $$iterable$75.$$targs$$=$$targs$$;
                            Iterable({Absent:{t:Null},Element:$$iterable.$$targs$$.Element},$$iterable$75);
                            add_type_arg($$iterable$75,'Absent',{t:Null});
                            $$iterable$75.$prop$getFirst.get=function(){return first};
                            return $$iterable$75;
                        }
                        function $init$iterable$75(){
                            if (iterable$75.$$===undefined){
                                initTypeProto(iterable$75,'ceylon.language::Iterable.taking.iterable',Basic,$init$Iterable());
                            }
                            return iterable$75;
                        }
                        $init$iterable$75();
                        (function($$iterable$75){
                            $$iterable$75.iterator=function iterator(){
                                var $$iterable$75=this;
                                var iter$76=$$iterable.iterator();
                                $prop$getIter$76={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},d:['ceylon.language','Iterable','$m','taking','$o','iterable','$m','iterator','$at','iter']};}};
                                $prop$getIter$76.get=function(){return iter$76};
                                function iterator$77($$targs$$){
                                    var $$iterator$77=new iterator$77.$$;
                                    $$iterator$77.$$targs$$=$$targs$$;
                                    Iterator({Element:$$iterable.$$targs$$.Element},$$iterator$77);
                                    $$iterator$77.i$78_=(0);
                                    $$iterator$77.$prop$getI$78={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:iterator$77,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','taking','$o','iterable','$m','iterator','$o','iterator','$at','i']};}};
                                    $$iterator$77.$prop$getI$78.get=function(){return i$78};
                                    return $$iterator$77;
                                }
                                function $init$iterator$77(){
                                    if (iterator$77.$$===undefined){
                                        initTypeProto(iterator$77,'ceylon.language::Iterable.taking.iterable.iterator.iterator',Basic,$init$Iterator());
                                    }
                                    return iterator$77;
                                }
                                $init$iterator$77();
                                (function($$iterator$77){
                                    defineAttr($$iterator$77,'i$78',function(){return this.i$78_;},function(i$79){return this.i$78_=i$79;},function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:iterator$77,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','taking','$o','iterable','$m','iterator','$o','iterator','$at','i']};});
                                    $$iterator$77.next=function next(){
                                        var $$iterator$77=this;
                                        return (opt$80=(($$iterator$77.i$78=$$iterator$77.i$78.successor).compare(take$71).equals(getLarger())?getFinished():null),opt$80!==null?opt$80:iter$76.next());
                                        var opt$80;
                                    };$$iterator$77.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$ps:[],$cont:iterator$77,$an:function(){return[actual(),shared()];},d:['ceylon.language','Iterable','$m','taking','$o','iterable','$m','iterator','$o','iterator','$m','next']};};
                                })(iterator$77.$$.prototype);
                                var iterator$81=iterator$77({Element:$$iterable.$$targs$$.Element});
                                var getIterator$81=function(){
                                    return iterator$81;
                                }
                                getIterator$81.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterator$77},d:['ceylon.language','Iterable','$m','taking','$o','iterable','$m','iterator','$at','iterator']};};
                                $prop$getIterator$81={get:getIterator$81,$$metamodel$$:getIterator$81.$$metamodel$$};
                                return getIterator$81();
                            };$$iterable$75.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:iterable$75,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','taking','$o','iterable','$m','iterator']};};
                            defineAttr($$iterable$75,'first',function(){
                                var $$iterable$75=this;
                                return $$iterable.first;
                            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$cont:iterable$75,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','taking','$o','iterable','$at','first']};});
                        })(iterable$75.$$.prototype);
                        var iterable$82=iterable$75({Absent:{t:Null},Element:$$iterable.$$targs$$.Element});
                        var getIterable$82=function(){
                            return iterable$82;
                        }
                        getIterable$82.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterable$75},d:['ceylon.language','Iterable','$m','taking','$at','iterable']};};
                        $prop$getIterable$82={get:getIterable$82,$$metamodel$$:getIterable$82.$$metamodel$$};
                        return getIterable$82();
                    }());if(retvar$73!==undefined){return retvar$73;}
                }
            };$$iterable.taking.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$ps:[{$nm:'take',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Iterable,$an:function(){return[doc(String$("Produce an `Iterable` containing the first `take`\nelements of this iterable object. If the specified \nnumber of elements is larger than the number of \nelements of this iterable object, the `Iterable` \ncontains the same elements as this iterable object.",252)),shared(),$default()];},d:['ceylon.language','Iterable','$m','taking']};};
            $$iterable.skippingWhile=function skippingWhile(skip$83){
                var $$iterable=this;
                function iterable$84($$targs$$){
                    var $$iterable$84=new iterable$84.$$;
                    $$iterable$84.$$targs$$=$$targs$$;
                    Iterable({Absent:{t:Null},Element:$$iterable.$$targs$$.Element},$$iterable$84);
                    add_type_arg($$iterable$84,'Absent',{t:Null});
                    return $$iterable$84;
                }
                function $init$iterable$84(){
                    if (iterable$84.$$===undefined){
                        initTypeProto(iterable$84,'ceylon.language::Iterable.skippingWhile.iterable',Basic,$init$Iterable());
                    }
                    return iterable$84;
                }
                $init$iterable$84();
                (function($$iterable$84){
                    $$iterable$84.iterator=function iterator(){
                        var $$iterable$84=this;
                        var iter$85=$$iterable.iterator();
                        $prop$getIter$85={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},d:['ceylon.language','Iterable','$m','skippingWhile','$o','iterable','$m','iterator','$at','iter']};}};
                        $prop$getIter$85.get=function(){return iter$85};
                        var elem$86;
                        while(!isOfType((elem$86=iter$85.next()),{t:Finished})){
                            if((!skip$83(elem$86))){
                                var cntvar$87=false;
                                var brkvar$89=false;
                                var retvar$88=(function(){
                                    function iterator$90($$targs$$){
                                        var $$iterator$90=new iterator$90.$$;
                                        $$iterator$90.$$targs$$=$$targs$$;
                                        Iterator({Element:$$iterable.$$targs$$.Element},$$iterator$90);
                                        $$iterator$90.first$91_=true;
                                        $$iterator$90.$prop$getFirst$91={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:iterator$90,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','skippingWhile','$o','iterable','$m','iterator','$o','iterator','$at','first']};}};
                                        $$iterator$90.$prop$getFirst$91.get=function(){return first$91};
                                        return $$iterator$90;
                                    }
                                    function $init$iterator$90(){
                                        if (iterator$90.$$===undefined){
                                            initTypeProto(iterator$90,'ceylon.language::Iterable.skippingWhile.iterable.iterator.iterator',Basic,$init$Iterator());
                                        }
                                        return iterator$90;
                                    }
                                    $init$iterator$90();
                                    (function($$iterator$90){
                                        defineAttr($$iterator$90,'first$91',function(){return this.first$91_;},function(first$92){return this.first$91_=first$92;},function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:iterator$90,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','skippingWhile','$o','iterable','$m','iterator','$o','iterator','$at','first']};});
                                        $$iterator$90.next=function next(){
                                            var $$iterator$90=this;
                                            if($$iterator$90.first$91){
                                                $$iterator$90.first$91=false;
                                                return elem$86;
                                            }else {
                                                return iter$85.next();
                                            }
                                        };$$iterator$90.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$ps:[],$cont:iterator$90,$an:function(){return[actual(),shared()];},d:['ceylon.language','Iterable','$m','skippingWhile','$o','iterable','$m','iterator','$o','iterator','$m','next']};};
                                    })(iterator$90.$$.prototype);
                                    var iterator$93=iterator$90({Element:$$iterable.$$targs$$.Element});
                                    var getIterator$93=function(){
                                        return iterator$93;
                                    }
                                    getIterator$93.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterator$90},d:['ceylon.language','Iterable','$m','skippingWhile','$o','iterable','$m','iterator','$at','iterator']};};
                                    $prop$getIterator$93={get:getIterator$93,$$metamodel$$:getIterator$93.$$metamodel$$};
                                    return getIterator$93();
                                }());if(retvar$88!==undefined){return retvar$88;}
                            }
                        }
                        return getEmptyIterator();
                    };$$iterable$84.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:iterable$84,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','skippingWhile','$o','iterable','$m','iterator']};};
                })(iterable$84.$$.prototype);
                var iterable$94=iterable$84({Absent:{t:Null},Element:$$iterable.$$targs$$.Element});
                var getIterable$94=function(){
                    return iterable$94;
                }
                getIterable$94.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterable$84},d:['ceylon.language','Iterable','$m','skippingWhile','$at','iterable']};};
                $prop$getIterable$94={get:getIterable$94,$$metamodel$$:getIterable$94.$$metamodel$$};
                return getIterable$94();
            };$$iterable.skippingWhile.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$ps:[{$nm:'skip',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Iterable,$an:function(){return[shared(),$default()];},d:['ceylon.language','Iterable','$m','skippingWhile']};};
            $$iterable.takingWhile=function takingWhile(take$95){
                var $$iterable=this;
                function iterable$96($$targs$$){
                    var $$iterable$96=new iterable$96.$$;
                    $$iterable$96.$$targs$$=$$targs$$;
                    Iterable({Absent:{t:Null},Element:$$iterable.$$targs$$.Element},$$iterable$96);
                    add_type_arg($$iterable$96,'Absent',{t:Null});
                    return $$iterable$96;
                }
                function $init$iterable$96(){
                    if (iterable$96.$$===undefined){
                        initTypeProto(iterable$96,'ceylon.language::Iterable.takingWhile.iterable',Basic,$init$Iterable());
                    }
                    return iterable$96;
                }
                $init$iterable$96();
                (function($$iterable$96){
                    $$iterable$96.iterator=function iterator(){
                        var $$iterable$96=this;
                        var iter$97=$$iterable.iterator();
                        $prop$getIter$97={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},d:['ceylon.language','Iterable','$m','takingWhile','$o','iterable','$m','iterator','$at','iter']};}};
                        $prop$getIter$97.get=function(){return iter$97};
                        function iterator$98($$targs$$){
                            var $$iterator$98=new iterator$98.$$;
                            $$iterator$98.$$targs$$=$$targs$$;
                            Iterator({Element:$$iterable.$$targs$$.Element},$$iterator$98);
                            $$iterator$98.alive$99_=true;
                            $$iterator$98.$prop$getAlive$99={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:iterator$98,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','takingWhile','$o','iterable','$m','iterator','$o','iterator','$at','alive']};}};
                            $$iterator$98.$prop$getAlive$99.get=function(){return alive$99};
                            return $$iterator$98;
                        }
                        function $init$iterator$98(){
                            if (iterator$98.$$===undefined){
                                initTypeProto(iterator$98,'ceylon.language::Iterable.takingWhile.iterable.iterator.iterator',Basic,$init$Iterator());
                            }
                            return iterator$98;
                        }
                        $init$iterator$98();
                        (function($$iterator$98){
                            defineAttr($$iterator$98,'alive$99',function(){return this.alive$99_;},function(alive$100){return this.alive$99_=alive$100;},function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:iterator$98,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','takingWhile','$o','iterable','$m','iterator','$o','iterator','$at','alive']};});
                            $$iterator$98.next=function next(){
                                var $$iterator$98=this;
                                if($$iterator$98.alive$99){
                                    var next$101=iter$97.next();
                                    $prop$getNext$101={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},d:['ceylon.language','Iterable','$m','takingWhile','$o','iterable','$m','iterator','$o','iterator','$m','next','$at','next']};}};
                                    $prop$getNext$101.get=function(){return next$101};
                                    var next$102;
                                    if(!isOfType((next$102=next$101),{t:Finished})){
                                        if(take$95(next$102)){
                                            return next$102;
                                        }else {
                                            $$iterator$98.alive$99=false;
                                        }
                                    }
                                }
                                return getFinished();
                            };$$iterator$98.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$ps:[],$cont:iterator$98,$an:function(){return[actual(),shared()];},d:['ceylon.language','Iterable','$m','takingWhile','$o','iterable','$m','iterator','$o','iterator','$m','next']};};
                        })(iterator$98.$$.prototype);
                        var iterator$103=iterator$98({Element:$$iterable.$$targs$$.Element});
                        var getIterator$103=function(){
                            return iterator$103;
                        }
                        getIterator$103.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterator$98},d:['ceylon.language','Iterable','$m','takingWhile','$o','iterable','$m','iterator','$at','iterator']};};
                        $prop$getIterator$103={get:getIterator$103,$$metamodel$$:getIterator$103.$$metamodel$$};
                        return getIterator$103();
                    };$$iterable$96.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:iterable$96,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','takingWhile','$o','iterable','$m','iterator']};};
                })(iterable$96.$$.prototype);
                var iterable$104=iterable$96({Absent:{t:Null},Element:$$iterable.$$targs$$.Element});
                var getIterable$104=function(){
                    return iterable$104;
                }
                getIterable$104.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterable$96},d:['ceylon.language','Iterable','$m','takingWhile','$at','iterable']};};
                $prop$getIterable$104={get:getIterable$104,$$metamodel$$:getIterable$104.$$metamodel$$};
                return getIterable$104();
            };$$iterable.takingWhile.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$ps:[{$nm:'take',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Iterable,$an:function(){return[shared(),$default()];},d:['ceylon.language','Iterable','$m','takingWhile']};};
            $$iterable.by=function by(step$105){
                var $$iterable=this;
                //assert at Iterable.ceylon (397:8-398:25)
                if (!(step$105.compare((0)).equals(getLarger()))) {throw wrapexc(AssertionException("step size must be greater than zero: \'step > 0\' at Iterable.ceylon (398:15-398:24)"),'397:8-398:25','Iterable.ceylon'); }
                if(step$105.equals((1))){
                    return $$iterable;
                }else {
                    var cntvar$106=false;
                    var brkvar$108=false;
                    var retvar$107=(function(){
                        function iterable$109($$targs$$){
                            var $$iterable$109=new iterable$109.$$;
                            $$iterable$109.$$targs$$=$$targs$$;
                            Iterable({Absent:$$iterable.$$targs$$.Absent,Element:$$iterable.$$targs$$.Element},$$iterable$109);
                            return $$iterable$109;
                        }
                        function $init$iterable$109(){
                            if (iterable$109.$$===undefined){
                                initTypeProto(iterable$109,'ceylon.language::Iterable.by.iterable',Basic,$init$Iterable());
                            }
                            return iterable$109;
                        }
                        $init$iterable$109();
                        (function($$iterable$109){
                            $$iterable$109.iterator=function iterator(){
                                var $$iterable$109=this;
                                var iter$110=$$iterable.iterator();
                                $prop$getIter$110={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},d:['ceylon.language','Iterable','$m','by','$o','iterable','$m','iterator','$at','iter']};}};
                                $prop$getIter$110.get=function(){return iter$110};
                                function iterator$111($$targs$$){
                                    var $$iterator$111=new iterator$111.$$;
                                    $$iterator$111.$$targs$$=$$targs$$;
                                    Iterator({Element:$$iterable.$$targs$$.Element},$$iterator$111);
                                    return $$iterator$111;
                                }
                                function $init$iterator$111(){
                                    if (iterator$111.$$===undefined){
                                        initTypeProto(iterator$111,'ceylon.language::Iterable.by.iterable.iterator.iterator',Basic,$init$Iterator());
                                    }
                                    return iterator$111;
                                }
                                $init$iterator$111();
                                (function($$iterator$111){
                                    $$iterator$111.next=function next(){
                                        var $$iterator$111=this;
                                        var next$112=iter$110.next();
                                        $prop$getNext$112={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},d:['ceylon.language','Iterable','$m','by','$o','iterable','$m','iterator','$o','iterator','$m','next','$at','next']};}};
                                        $prop$getNext$112.get=function(){return next$112};
                                        var i$113=(0);
                                        var setI$113=function(i$114){return i$113=i$114;};
                                        $prop$getI$113={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','by','$o','iterable','$m','iterator','$o','iterator','$m','next','$at','i']};}};
                                        $prop$getI$113.get=function(){return i$113};
                                        $prop$getI$113.set=setI$113;
                                        if (setI$113.$$metamodel$$===undefined)setI$113.$$metamodel$$=$prop$getI$113.$$metamodel$$;
                                        while(((i$113=i$113.successor).compare(step$105).equals(getSmaller())&&(!isOfType(iter$110.next(),{t:Finished})))){}
                                        return next$112;
                                    };$$iterator$111.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$ps:[],$cont:iterator$111,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','by','$o','iterable','$m','iterator','$o','iterator','$m','next']};};
                                })(iterator$111.$$.prototype);
                                var iterator$115=iterator$111({Element:$$iterable.$$targs$$.Element});
                                var getIterator$115=function(){
                                    return iterator$115;
                                }
                                getIterator$115.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterator$111},d:['ceylon.language','Iterable','$m','by','$o','iterable','$m','iterator','$at','iterator']};};
                                $prop$getIterator$115={get:getIterator$115,$$metamodel$$:getIterator$115.$$metamodel$$};
                                return getIterator$115();
                            };$$iterable$109.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:iterable$109,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','by','$o','iterable','$m','iterator']};};
                        })(iterable$109.$$.prototype);
                        var iterable$116=iterable$109({Absent:$$iterable.$$targs$$.Absent,Element:$$iterable.$$targs$$.Element});
                        var getIterable$116=function(){
                            return iterable$116;
                        }
                        getIterable$116.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterable$109},d:['ceylon.language','Iterable','$m','by','$at','iterable']};};
                        $prop$getIterable$116={get:getIterable$116,$$metamodel$$:getIterable$116.$$metamodel$$};
                        return getIterable$116();
                    }());if(retvar$107!==undefined){return retvar$107;}
                }
            };$$iterable.by.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:'Element'}},$ps:[{$nm:'step',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Iterable,$an:function(){return[doc(String$("Produce an `Iterable` containing every `step`th \nelement of this iterable object. If the step size \nis `1`, the `Iterable` contains the same elements \nas this iterable object. The step size must be \ngreater than zero. The expression\n\n    (0..10).by(3)\n\nresults in an iterable object with the elements\n`0`, `3`, `6`, and `9` in that order.",338)),$throws($init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),AssertionException),String$("if the given step size is nonpositive, \ni.e. `step<1`",53)),shared(),$default()];},d:['ceylon.language','Iterable','$m','by']};};
            $$iterable.count=function count(selecting$117){
                var $$iterable=this;
                var count$118=(0);
                var setCount$118=function(count$119){return count$118=count$119;};
                $prop$getCount$118={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','count','$at','count']};}};
                $prop$getCount$118.get=function(){return count$118};
                $prop$getCount$118.set=setCount$118;
                if (setCount$118.$$metamodel$$===undefined)setCount$118.$$metamodel$$=$prop$getCount$118.$$metamodel$$;
                var it$120 = $$iterable.iterator();
                var elem$121;while ((elem$121=it$120.next())!==getFinished()){
                    var elem$122;
                    if((elem$122=elem$121)!==null){
                        if(selecting$117(elem$122)){
                            (oldcount$123=count$118,count$118=oldcount$123.successor,oldcount$123);
                            var oldcount$123;
                        }
                    }
                }
                return count$118;
            };$$iterable.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[doc("The predicate satisfied by the elements to\nbe counted.")];}}],$cont:Iterable,$an:function(){return[doc(String$("Return the number of elements in this `Iterable` \nthat satisfy the predicate function.",86)),shared(),$default()];},d:['ceylon.language','Iterable','$m','count']};};
            defineAttr($$iterable,'coalesced',function(){
                var $$iterable=this;
                return Comprehension(function(){
                    var e$126;
                    var it$124=$$iterable.iterator();
                    var e$125=getFinished();
                    var e$126;
                    var next$e$125=function(){
                        while((e$125=it$124.next())!==getFinished()){
                            if((e$126=e$125)!==null){
                                return e$125;
                            }
                        }
                        return getFinished();
                    }
                    next$e$125();
                    return function(){
                        if(e$125!==getFinished()){
                            var e$125$127=e$125;
                            var tmpvar$128=e$126;
                            next$e$125();
                            return tmpvar$128;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:{ t:'i', l:[$$iterable.$$targs$$.Element,{t:Object$}]}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:{ t:'i', l:['Element',{t:Object$}]}}},$cont:Iterable,$an:function(){return[doc(String$("The non-null elements of this `Iterable`, in their\noriginal order. For null elements of the original \n`Iterable`, there is no entry in the resulting \niterable object.",166)),shared(),$default()];},d:['ceylon.language','Iterable','$at','coalesced']};});
            defineAttr($$iterable,'indexed',function(){
                var $$iterable=this;
                function indexes$129($$targs$$){
                    var $$indexes$129=new indexes$129.$$;
                    $$indexes$129.$$targs$$=$$targs$$;
                    Iterable({Absent:{t:Null},Element:{t:Entry,a:{Key:{t:Integer},Item:{ t:'i', l:[$$iterable.$$targs$$.Element,{t:Object$}]}}}},$$indexes$129);
                    add_type_arg($$indexes$129,'Absent',{t:Null});
                    add_type_arg($$indexes$129,'Element',{t:Entry,a:{Key:{t:Integer},Item:{ t:'i', l:[$$iterable.$$targs$$.Element,{t:Object$}]}}});
                    $$indexes$129.$prop$getOrig$130={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:'Element'}},$cont:indexes$129,d:['ceylon.language','Iterable','$at','indexed','$o','indexes','$at','orig']};}};
                    $$indexes$129.$prop$getOrig$130.get=function(){return orig$130};
                    return $$indexes$129;
                }
                function $init$indexes$129(){
                    if (indexes$129.$$===undefined){
                        initTypeProto(indexes$129,'ceylon.language::Iterable.indexed.indexes',Basic,$init$Iterable());
                    }
                    return indexes$129;
                }
                $init$indexes$129();
                (function($$indexes$129){
                    defineAttr($$indexes$129,'orig$130',function(){
                        var $$indexes$129=this;
                        return $$iterable;
                    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:'Element'}},$cont:indexes$129,d:['ceylon.language','Iterable','$at','indexed','$o','indexes','$at','orig']};});
                    $$indexes$129.iterator=function iterator(){
                        var $$indexes$129=this;
                        function iterator$131($$targs$$){
                            var $$iterator$131=new iterator$131.$$;
                            $$iterator$131.$$targs$$=$$targs$$;
                            Iterator({Element:{t:Entry,a:{Key:{t:Integer},Item:{ t:'i', l:[$$iterable.$$targs$$.Element,{t:Object$}]}}}},$$iterator$131);
                            add_type_arg($$iterator$131,'Element',{t:Entry,a:{Key:{t:Integer},Item:{ t:'i', l:[$$iterable.$$targs$$.Element,{t:Object$}]}}});
                            $$iterator$131.iter$132_=$$indexes$129.orig$130.iterator();
                            $$iterator$131.$prop$getIter$132={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$cont:iterator$131,d:['ceylon.language','Iterable','$at','indexed','$o','indexes','$m','iterator','$o','iterator','$at','iter']};}};
                            $$iterator$131.$prop$getIter$132.get=function(){return iter$132};
                            $$iterator$131.i$133_=(0);
                            $$iterator$131.$prop$getI$133={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:iterator$131,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$at','indexed','$o','indexes','$m','iterator','$o','iterator','$at','i']};}};
                            $$iterator$131.$prop$getI$133.get=function(){return i$133};
                            return $$iterator$131;
                        }
                        function $init$iterator$131(){
                            if (iterator$131.$$===undefined){
                                initTypeProto(iterator$131,'ceylon.language::Iterable.indexed.indexes.iterator.iterator',Basic,$init$Iterator());
                            }
                            return iterator$131;
                        }
                        $init$iterator$131();
                        (function($$iterator$131){
                            defineAttr($$iterator$131,'iter$132',function(){return this.iter$132_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$cont:iterator$131,d:['ceylon.language','Iterable','$at','indexed','$o','indexes','$m','iterator','$o','iterator','$at','iter']};});
                            defineAttr($$iterator$131,'i$133',function(){return this.i$133_;},function(i$134){return this.i$133_=i$134;},function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:iterator$131,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$at','indexed','$o','indexes','$m','iterator','$o','iterator','$at','i']};});
                            $$iterator$131.next=function next(){
                                var $$iterator$131=this;
                                var next$135=$$iterator$131.iter$132.next();
                                var setNext$135=function(next$136){return next$135=next$136;};
                                $prop$getNext$135={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$an:function(){return[variable()];},d:['ceylon.language','Iterable','$at','indexed','$o','indexes','$m','iterator','$o','iterator','$m','next','$at','next']};}};
                                $prop$getNext$135.get=function(){return next$135};
                                $prop$getNext$135.set=setNext$135;
                                if (setNext$135.$$metamodel$$===undefined)setNext$135.$$metamodel$$=$prop$getNext$135.$$metamodel$$;
                                while((!exists(next$135))){
                                    (oldi$137=$$iterator$131.i$133,$$iterator$131.i$133=oldi$137.successor,oldi$137);
                                    var oldi$137;
                                    next$135=$$iterator$131.iter$132.next();
                                }
                                var n$138;
                                var n$139;
                                if(!isOfType((n$138=next$135),{t:Finished})&&(n$139=n$138)!==null){
                                    return Entry((oldi$140=$$iterator$131.i$133,$$iterator$131.i$133=oldi$140.successor,oldi$140),n$139,{Key:{t:Integer},Item:{ t:'i', l:[$$iterable.$$targs$$.Element,{t:Object$}]}});
                                    var oldi$140;
                                }else {
                                    return getFinished();
                                }
                            };$$iterator$131.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Entry,a:{Key:{t:Integer},Item:{ t:'i', l:['Element',{t:Object$}]}}},{t:Finished}]},$ps:[],$cont:iterator$131,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$at','indexed','$o','indexes','$m','iterator','$o','iterator','$m','next']};};
                        })(iterator$131.$$.prototype);
                        var iterator$141=iterator$131({Element:{t:Entry,a:{Key:{t:Integer},Item:{ t:'i', l:[$$iterable.$$targs$$.Element,{t:Object$}]}}}});
                        var getIterator$141=function(){
                            return iterator$141;
                        }
                        getIterator$141.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterator$131},d:['ceylon.language','Iterable','$at','indexed','$o','indexes','$m','iterator','$at','iterator']};};
                        $prop$getIterator$141={get:getIterator$141,$$metamodel$$:getIterator$141.$$metamodel$$};
                        return getIterator$141();
                    };$$indexes$129.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:{t:Entry,a:{Key:{t:Integer},Item:{ t:'i', l:['Element',{t:Object$}]}}}}},$ps:[],$cont:indexes$129,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$at','indexed','$o','indexes','$m','iterator']};};
                })(indexes$129.$$.prototype);
                var indexes$142=indexes$129({Absent:{t:Null},Element:{t:Entry,a:{Key:{t:Integer},Item:{ t:'i', l:[$$iterable.$$targs$$.Element,{t:Object$}]}}}});
                var getIndexes$142=function(){
                    return indexes$142;
                }
                getIndexes$142.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:indexes$129},d:['ceylon.language','Iterable','$at','indexed','$at','indexes']};};
                $prop$getIndexes$142={get:getIndexes$142,$$metamodel$$:getIndexes$142.$$metamodel$$};
                return getIndexes$142();
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Entry,a:{Key:{t:Integer},Item:{ t:'i', l:['Element',{t:Object$}]}}}}},$cont:Iterable,$an:function(){return[doc(String$("All entries of form `index->element` where `index` \nis the position at which `element` occurs, for every\nnon-null element of this `Iterable`, ordered by\nincreasing `index`. For a null element at a given\nposition in the original `Iterable`, there is no \nentry with the corresponding index in the resulting \niterable object. The expression \n\n    { \"hello\", null, \"world\" }.indexed\n    \nresults in an iterable object with the entries\n`0->\"hello\"` and `2->\"world\"`.",461)),shared(),$default()];},d:['ceylon.language','Iterable','$at','indexed']};});$$iterable.following=function following(head$143,$$$mptypes){
                var $$iterable=this;
                function cons$144($$targs$$){
                    var $$cons$144=new cons$144.$$;
                    $$cons$144.$$targs$$=$$targs$$;
                    Iterable({Absent:{t:Nothing},Element:{ t:'u', l:[$$iterable.$$targs$$.Element,$$$mptypes.Other]}},$$cons$144);
                    return $$cons$144;
                }
                function $init$cons$144(){
                    if (cons$144.$$===undefined){
                        initTypeProto(cons$144,'ceylon.language::Iterable.following.cons',Basic,$init$Iterable());
                    }
                    return cons$144;
                }
                $init$cons$144();
                (function($$cons$144){
                    $$cons$144.iterator=function iterator(){
                        var $$cons$144=this;
                        var iter$145=$$iterable.iterator();
                        $prop$getIter$145={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},d:['ceylon.language','Iterable','$m','following','$o','cons','$m','iterator','$at','iter']};}};
                        $prop$getIter$145.get=function(){return iter$145};
                        function iterator$146($$targs$$){
                            var $$iterator$146=new iterator$146.$$;
                            $$iterator$146.$$targs$$=$$targs$$;
                            Iterator({Element:{ t:'u', l:[$$iterable.$$targs$$.Element,$$$mptypes.Other]}},$$iterator$146);
                            $$iterator$146.first$147_=true;
                            $$iterator$146.$prop$getFirst$147={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:iterator$146,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','following','$o','cons','$m','iterator','$o','iterator','$at','first']};}};
                            $$iterator$146.$prop$getFirst$147.get=function(){return first$147};
                            return $$iterator$146;
                        }
                        function $init$iterator$146(){
                            if (iterator$146.$$===undefined){
                                initTypeProto(iterator$146,'ceylon.language::Iterable.following.cons.iterator.iterator',Basic,$init$Iterator());
                            }
                            return iterator$146;
                        }
                        $init$iterator$146();
                        (function($$iterator$146){
                            defineAttr($$iterator$146,'first$147',function(){return this.first$147_;},function(first$148){return this.first$147_=first$148;},function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:iterator$146,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','following','$o','cons','$m','iterator','$o','iterator','$at','first']};});
                            $$iterator$146.next=function next(){
                                var $$iterator$146=this;
                                if($$iterator$146.first$147){
                                    $$iterator$146.first$147=false;
                                    return head$143;
                                }else {
                                    return iter$145.next();
                                }
                            };$$iterator$146.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element','Other',{t:Finished}]},$ps:[],$cont:iterator$146,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','following','$o','cons','$m','iterator','$o','iterator','$m','next']};};
                        })(iterator$146.$$.prototype);
                        var iterator$149=iterator$146({Element:{ t:'u', l:[$$iterable.$$targs$$.Element,$$$mptypes.Other]}});
                        var getIterator$149=function(){
                            return iterator$149;
                        }
                        getIterator$149.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterator$146},d:['ceylon.language','Iterable','$m','following','$o','cons','$m','iterator','$at','iterator']};};
                        $prop$getIterator$149={get:getIterator$149,$$metamodel$$:getIterator$149.$$metamodel$$};
                        return getIterator$149();
                    };$$cons$144.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[],$cont:cons$144,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','following','$o','cons','$m','iterator']};};
                })(cons$144.$$.prototype);
                var cons$150=cons$144({Absent:{t:Nothing},Element:{ t:'u', l:[$$iterable.$$targs$$.Element,$$$mptypes.Other]}});
                var getCons$150=function(){
                    return cons$150;
                }
                getCons$150.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:cons$144},d:['ceylon.language','Iterable','$m','following','$at','cons']};};
                $prop$getCons$150={get:getCons$150,$$metamodel$$:getCons$150.$$metamodel$$};
                return getCons$150();
            };$$iterable.following.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Nothing},Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'head',$mt:'prm',$t:'Other',$an:function(){return[];}}],$cont:Iterable,$tp:{Other:{}},$an:function(){return[doc(String$("An `Iterable` with the given inital element followed \nby the elements of this iterable object.",94)),shared(),$default()];},d:['ceylon.language','Iterable','$m','following']};};
            $$iterable.chain=function chain(other$151,$$$mptypes){
                var $$iterable=this;
                function chained$152($$targs$$){
                    var $$chained$152=new chained$152.$$;
                    $$chained$152.$$targs$$=$$targs$$;
                    Iterable({Absent:{ t:'i', l:[$$iterable.$$targs$$.Absent,$$$mptypes.OtherAbsent]},Element:{ t:'u', l:[$$iterable.$$targs$$.Element,$$$mptypes.Other]}},$$chained$152);
                    return $$chained$152;
                }
                function $init$chained$152(){
                    if (chained$152.$$===undefined){
                        initTypeProto(chained$152,'ceylon.language::Iterable.chain.chained',Basic,$init$Iterable());
                    }
                    return chained$152;
                }
                $init$chained$152();
                (function($$chained$152){
                    $$chained$152.iterator=function (){
                        var $$chained$152=this;
                        return ChainedIterator($$iterable,other$151,{Other:$$$mptypes.Other,Element:$$iterable.$$targs$$.Element});
                    };
                    $$chained$152.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[],$cont:chained$152,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','chain','$o','chained','$m','iterator']};};
                })(chained$152.$$.prototype);
                var chained$153=chained$152({Absent:{ t:'i', l:[$$iterable.$$targs$$.Absent,$$$mptypes.OtherAbsent]},Element:{ t:'u', l:[$$iterable.$$targs$$.Element,$$$mptypes.Other]}});
                var getChained$153=function(){
                    return chained$153;
                }
                getChained$153.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:chained$152},d:['ceylon.language','Iterable','$m','chain','$at','chained']};};
                $prop$getChained$153={get:getChained$153,$$metamodel$$:getChained$153.$$metamodel$$};
                return getChained$153();
            };$$iterable.chain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{ t:'i', l:['Absent','OtherAbsent']},Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'other',$mt:'prm',$t:{t:Iterable,a:{Absent:'OtherAbsent',Element:'Other'}},$an:function(){return[];}}],$cont:Iterable,$tp:{Other:{},OtherAbsent:{'satisfies':[{t:Null}]}},$an:function(){return[doc(String$("The elements of this iterable object, in their\noriginal order, followed by the elements of the \ngiven iterable object also in their original order.",147)),shared(),$default()];},d:['ceylon.language','Iterable','$m','chain']};};
            $$iterable.defaultNullElements=function (defaultValue$154,$$$mptypes){
                var $$iterable=this;
                return Comprehension(function(){
                    var it$155=$$iterable.iterator();
                    var elem$156=getFinished();
                    var next$elem$156=function(){return elem$156=it$155.next();}
                    next$elem$156();
                    return function(){
                        if(elem$156!==getFinished()){
                            var elem$156$157=elem$156;
                            var tmpvar$158=(opt$159=elem$156$157,opt$159!==null?opt$159:defaultValue$154);
                            next$elem$156();
                            return tmpvar$158;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:{ t:'u', l:[$$$mptypes.Default,{ t:'i', l:[$$iterable.$$targs$$.Element,{t:Object$}]}]}});
            };
            $$iterable.defaultNullElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:{ t:'u', l:[{ t:'i', l:['Element',{t:Object$}]},'Default']}}},$ps:[{$nm:'defaultValue',$mt:'prm',$t:'Default',$an:function(){return[doc("A default value that replaces `null` elements.")];}}],$cont:Iterable,$tp:{Default:{}},$an:function(){return[doc(String$("An `Iterable` that produces the elements of this \niterable object, replacing every `null` element \nwith the given default value. The resulting iterable\nobject does not produce the value `null`.",193)),shared(),$default()];},d:['ceylon.language','Iterable','$m','defaultNullElements']};};
            defineAttr($$iterable,'string',function(){
                var $$iterable=this;
                if($$iterable.empty){
                    return String$("{}",2);
                }else {
                    var list$160=commaList($$iterable.taking((30)));
                    $prop$getList$160={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:String$},d:['ceylon.language','Iterable','$at','string','$at','list']};}};
                    $prop$getList$160.get=function(){return list$160};
                    return StringBuilder().appendAll([String$("{ ",2),(opt$161=($$iterable.longerThan((30))?list$160.plus(String$(", ...",5)):null),opt$161!==null?opt$161:list$160).string,String$(" }",2)]).string;
                    var opt$161;
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Iterable,$an:function(){return[doc(String$("A string of form `\"{ x, y, z }\"` where `x`, `y`, \nand `z` are the `string` representations of the \nelements of this collection, as produced by the\niterator of the collection, or the string `\"{}\"` \nif this iterable is empty. If the number of items\nis very large only a certain amount of them might\nbe shown followed by \"...\".",324)),shared(),actual(),$default()];},d:['ceylon.language','Iterable','$at','string']};});defineAttr($$iterable,'cycled',function(){
                var $$iterable=this;
                function iterable$162($$targs$$){
                    var $$iterable$162=new iterable$162.$$;
                    $$iterable$162.$$targs$$=$$targs$$;
                    Iterable({Absent:$$iterable.$$targs$$.Absent,Element:$$iterable.$$targs$$.Element},$$iterable$162);
                    $$iterable$162.$prop$getOrig$163={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:'Element'}},$cont:iterable$162,d:['ceylon.language','Iterable','$at','cycled','$o','iterable','$at','orig']};}};
                    $$iterable$162.$prop$getOrig$163.get=function(){return orig$163};
                    return $$iterable$162;
                }
                function $init$iterable$162(){
                    if (iterable$162.$$===undefined){
                        initTypeProto(iterable$162,'ceylon.language::Iterable.cycled.iterable',Basic,$init$Iterable());
                    }
                    return iterable$162;
                }
                $init$iterable$162();
                (function($$iterable$162){
                    defineAttr($$iterable$162,'orig$163',function(){
                        var $$iterable$162=this;
                        return $$iterable;
                    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:'Element'}},$cont:iterable$162,d:['ceylon.language','Iterable','$at','cycled','$o','iterable','$at','orig']};});
                    $$iterable$162.iterator=function iterator(){
                        var $$iterable$162=this;
                        function iterator$164($$targs$$){
                            var $$iterator$164=new iterator$164.$$;
                            $$iterator$164.$$targs$$=$$targs$$;
                            Iterator({Element:$$iterable.$$targs$$.Element},$$iterator$164);
                            $$iterator$164.iter$165_=getEmptyIterator();
                            $$iterator$164.$prop$getIter$165={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$cont:iterator$164,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$at','cycled','$o','iterable','$m','iterator','$o','iterator','$at','iter']};}};
                            $$iterator$164.$prop$getIter$165.get=function(){return iter$165};
                            return $$iterator$164;
                        }
                        function $init$iterator$164(){
                            if (iterator$164.$$===undefined){
                                initTypeProto(iterator$164,'ceylon.language::Iterable.cycled.iterable.iterator.iterator',Basic,$init$Iterator());
                            }
                            return iterator$164;
                        }
                        $init$iterator$164();
                        (function($$iterator$164){
                            defineAttr($$iterator$164,'iter$165',function(){return this.iter$165_;},function(iter$166){return this.iter$165_=iter$166;},function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$cont:iterator$164,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$at','cycled','$o','iterable','$m','iterator','$o','iterator','$at','iter']};});
                            $$iterator$164.next=function next(){
                                var $$iterator$164=this;
                                var next$167;
                                if(!isOfType((next$167=$$iterator$164.iter$165.next()),{t:Finished})){
                                    return next$167;
                                }else {
                                    $$iterator$164.iter$165=$$iterable$162.orig$163.iterator();
                                    return $$iterator$164.iter$165.next();
                                }
                            };$$iterator$164.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$ps:[],$cont:iterator$164,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$at','cycled','$o','iterable','$m','iterator','$o','iterator','$m','next']};};
                        })(iterator$164.$$.prototype);
                        var iterator$168=iterator$164({Element:$$iterable.$$targs$$.Element});
                        var getIterator$168=function(){
                            return iterator$168;
                        }
                        getIterator$168.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterator$164},d:['ceylon.language','Iterable','$at','cycled','$o','iterable','$m','iterator','$at','iterator']};};
                        $prop$getIterator$168={get:getIterator$168,$$metamodel$$:getIterator$168.$$metamodel$$};
                        return getIterator$168();
                    };$$iterable$162.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:iterable$162,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$at','cycled','$o','iterable','$m','iterator']};};
                })(iterable$162.$$.prototype);
                var iterable$169=iterable$162({Absent:$$iterable.$$targs$$.Absent,Element:$$iterable.$$targs$$.Element});
                var getIterable$169=function(){
                    return iterable$169;
                }
                getIterable$169.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterable$162},d:['ceylon.language','Iterable','$at','cycled','$at','iterable']};};
                $prop$getIterable$169={get:getIterable$169,$$metamodel$$:getIterable$169.$$metamodel$$};
                return getIterable$169();
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:'Element'}},$cont:Iterable,$an:function(){return[doc(String$("A non-finite iterable object that produces the elements \nof this iterable object, repeatedly.",93)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.cycle)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Iterable','$at','cycled']};});$$iterable.cycle=function cycle(times$170){
                var $$iterable=this;
                function iterable$171($$targs$$){
                    var $$iterable$171=new iterable$171.$$;
                    $$iterable$171.$$targs$$=$$targs$$;
                    Iterable({Absent:$$iterable.$$targs$$.Absent,Element:$$iterable.$$targs$$.Element},$$iterable$171);
                    $$iterable$171.$prop$getOrig$172={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:'Element'}},$cont:iterable$171,d:['ceylon.language','Iterable','$m','cycle','$o','iterable','$at','orig']};}};
                    $$iterable$171.$prop$getOrig$172.get=function(){return orig$172};
                    return $$iterable$171;
                }
                function $init$iterable$171(){
                    if (iterable$171.$$===undefined){
                        initTypeProto(iterable$171,'ceylon.language::Iterable.cycle.iterable',Basic,$init$Iterable());
                    }
                    return iterable$171;
                }
                $init$iterable$171();
                (function($$iterable$171){
                    defineAttr($$iterable$171,'orig$172',function(){
                        var $$iterable$171=this;
                        return $$iterable;
                    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:'Element'}},$cont:iterable$171,d:['ceylon.language','Iterable','$m','cycle','$o','iterable','$at','orig']};});
                    $$iterable$171.iterator=function iterator(){
                        var $$iterable$171=this;
                        function iterator$173($$targs$$){
                            var $$iterator$173=new iterator$173.$$;
                            $$iterator$173.$$targs$$=$$targs$$;
                            Iterator({Element:$$iterable.$$targs$$.Element},$$iterator$173);
                            $$iterator$173.iter$174_=getEmptyIterator();
                            $$iterator$173.$prop$getIter$174={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$cont:iterator$173,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','cycle','$o','iterable','$m','iterator','$o','iterator','$at','iter']};}};
                            $$iterator$173.$prop$getIter$174.get=function(){return iter$174};
                            $$iterator$173.count$175_=(0);
                            $$iterator$173.$prop$getCount$175={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:iterator$173,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','cycle','$o','iterable','$m','iterator','$o','iterator','$at','count']};}};
                            $$iterator$173.$prop$getCount$175.get=function(){return count$175};
                            return $$iterator$173;
                        }
                        function $init$iterator$173(){
                            if (iterator$173.$$===undefined){
                                initTypeProto(iterator$173,'ceylon.language::Iterable.cycle.iterable.iterator.iterator',Basic,$init$Iterator());
                            }
                            return iterator$173;
                        }
                        $init$iterator$173();
                        (function($$iterator$173){
                            defineAttr($$iterator$173,'iter$174',function(){return this.iter$174_;},function(iter$176){return this.iter$174_=iter$176;},function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$cont:iterator$173,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','cycle','$o','iterable','$m','iterator','$o','iterator','$at','iter']};});
                            defineAttr($$iterator$173,'count$175',function(){return this.count$175_;},function(count$177){return this.count$175_=count$177;},function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:iterator$173,$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','cycle','$o','iterable','$m','iterator','$o','iterator','$at','count']};});
                            $$iterator$173.next=function next(){
                                var $$iterator$173=this;
                                var next$178;
                                if(!isOfType((next$178=$$iterator$173.iter$174.next()),{t:Finished})){
                                    return next$178;
                                }else {
                                    if($$iterator$173.count$175.compare(times$170).equals(getSmaller())){
                                        (oldcount$179=$$iterator$173.count$175,$$iterator$173.count$175=oldcount$179.successor,oldcount$179);
                                        var oldcount$179;
                                        $$iterator$173.iter$174=$$iterable$171.orig$172.iterator();
                                    }else {
                                        $$iterator$173.iter$174=getEmptyIterator();
                                    }
                                    return $$iterator$173.iter$174.next();
                                }
                            };$$iterator$173.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$ps:[],$cont:iterator$173,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','cycle','$o','iterable','$m','iterator','$o','iterator','$m','next']};};
                        })(iterator$173.$$.prototype);
                        var iterator$180=iterator$173({Element:$$iterable.$$targs$$.Element});
                        var getIterator$180=function(){
                            return iterator$180;
                        }
                        getIterator$180.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterator$173},d:['ceylon.language','Iterable','$m','cycle','$o','iterable','$m','iterator','$at','iterator']};};
                        $prop$getIterator$180={get:getIterator$180,$$metamodel$$:getIterator$180.$$metamodel$$};
                        return getIterator$180();
                    };$$iterable$171.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:iterable$171,$an:function(){return[shared(),actual()];},d:['ceylon.language','Iterable','$m','cycle','$o','iterable','$m','iterator']};};
                })(iterable$171.$$.prototype);
                var iterable$181=iterable$171({Absent:$$iterable.$$targs$$.Absent,Element:$$iterable.$$targs$$.Element});
                var getIterable$181=function(){
                    return iterable$181;
                }
                getIterable$181.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterable$171},d:['ceylon.language','Iterable','$m','cycle','$at','iterable']};};
                $prop$getIterable$181={get:getIterable$181,$$metamodel$$:getIterable$181.$$metamodel$$};
                return getIterable$181();
            };$$iterable.cycle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:'Element'}},$ps:[{$nm:'times',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Iterable,$an:function(){return[doc(String$("A finite iterable object that produces the elements of \nthis iterable object, repeatedly, the given number of\ntimes.",116)),see([$init$OpenValue()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.$prop$getCycled),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.repeat)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:ValueDeclaration$meta$declaration},{t:FunctionDeclaration$meta$declaration}]}})),shared(),$default()];},d:['ceylon.language','Iterable','$m','cycle']};};
            $$iterable.repeat=function repeat(times$182){
                var $$iterable=this;
                var sb$183=SequenceBuilder({Element:$$iterable.$$targs$$.Element});
                $prop$getSb$183={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:SequenceBuilder,a:{Element:'Element'}},d:['ceylon.language','Iterable','$m','repeat','$at','sb']};}};
                $prop$getSb$183.get=function(){return sb$183};
                var count$184=(0);
                var setCount$184=function(count$185){return count$184=count$185;};
                $prop$getCount$184={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Iterable','$m','repeat','$at','count']};}};
                $prop$getCount$184.get=function(){return count$184};
                $prop$getCount$184.set=setCount$184;
                if (setCount$184.$$metamodel$$===undefined)setCount$184.$$metamodel$$=$prop$getCount$184.$$metamodel$$;
                while((oldcount$186=count$184,count$184=oldcount$186.successor,oldcount$186).compare(times$182).equals(getSmaller())){
                    sb$183.appendAll($$iterable);
                }
                var oldcount$186;
                return sb$183.sequence;
            };$$iterable.repeat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$ps:[{$nm:'times',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Iterable,$an:function(){return[doc(String$("Returns a list formed by repeating the elements of this\niterable object the given number of times, or an empty \nlist if `times<=0`. An eager counterpart to `cycle()`.",166)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.cycle)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Iterable','$m','repeat']};};
        })(Iterable.$$.prototype);
    }
    return Iterable;
}
exports.$init$Iterable=$init$Iterable;
$init$Iterable();
var opt$19,opt$159;
var commaList=function (elements$187){
    return (strings$188=/*NULL PARAM!*/Comprehension(function(){
        var it$189=elements$187.iterator();
        var element$190=getFinished();
        var next$element$190=function(){return element$190=it$189.next();}
        next$element$190();
        return function(){
            if(element$190!==getFinished()){
                var element$190$191=element$190;
                var tmpvar$192=(opt$193=(opt$194=element$190$191,opt$194!==null?opt$194.string:null),opt$193!==null?opt$193:String$("null",4));
                next$element$190();
                return tmpvar$192;
            }
            return getFinished();
        }
    },{Absent:{t:Null},Element:{t:String$}}),(opt$195=String$(", ",2),JsCallable(opt$195,opt$195!==null?opt$195.join:null))(strings$188));
};
commaList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:String$},$ps:[{$nm:'elements',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Anything}}},$an:function(){return[];}}],d:['ceylon.language','commaList']};};
var strings$188,opt$193,opt$194,opt$195;
function ifExists(predicate$196){
    return function(val$197){
        var val$198;
        if((val$198=val$197)!==null){
            return predicate$196(val$198);
        }else {
            return false;
        }
    }
};ifExists.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'predicate',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],d:['ceylon.language','ifExists']};};
function Sequential($$targs$$,$$sequential){
    List($$sequential.$$targs$$===undefined?$$targs$$:{Element:$$sequential.$$targs$$.Element},$$sequential);
    Ranged($$sequential.$$targs$$===undefined?$$targs$$:{Index:{t:Integer},Span:{t:Sequential,a:{Element:$$sequential.$$targs$$.Element}}},$$sequential);
    add_type_arg($$sequential,'Index',{t:Integer});
    add_type_arg($$sequential,'Span',{t:Sequential,a:{Element:$$sequential.$$targs$$.Element}});
    Cloneable($$sequential.$$targs$$===undefined?$$targs$$:{Clone:{t:Sequential,a:{Element:$$sequential.$$targs$$.Element}}},$$sequential);
    add_type_arg($$sequential,'Clone',{t:Sequential,a:{Element:$$sequential.$$targs$$.Element}});
    set_type_args($$sequential,$$targs$$);
    $$sequential.$prop$getSequence={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:Sequential,$an:function(){return[doc(String$("This sequence.",14)),shared(),actual(),$default()];},d:['ceylon.language','Sequential','$at','sequence']};}};
    $$sequential.$prop$getSequence.get=function(){return sequence};
    $$sequential.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:Sequential,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequential','$at','clone']};}};
    $$sequential.$prop$getClone.get=function(){return clone};
    $$sequential.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Sequential,$an:function(){return[doc(String$("A string of form `\"[ x, y, z ]\"` where `x`, `y`, \nand `z` are the `string` representations of the \nelements of this collection, as produced by the\niterator of the collection, or the string `\"{}\"` \nif this collection is empty. If the collection \niterator produces the value `null`, the string\nrepresentation contains the string `\"null\"`.",336)),shared(),actual(),$default()];},d:['ceylon.language','Sequential','$at','string']};}};
    $$sequential.$prop$getString.get=function(){return string};
}
Sequential.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'var':'out'}},satisfies:[{t:List,a:{Element:'Element'}},{t:Ranged,a:{Index:{t:Integer},Span:{t:Sequential,a:{Element:'Element'}}}},{t:Cloneable,a:{Clone:{t:Sequential,a:{Element:'Element'}}}}],$an:function(){return[doc(String$("A possibly-empty, immutable sequence of values. The \ntype `Sequential<Element>` may be abbreviated \n`[Element*]` or `Element[]`. \n\n`Sequential` has two enumerated subtypes:\n\n- `Empty`, abbreviated `[]`, represents an empty \n   sequence, and\n- `Sequence<Element>`, abbreviated `[Element+]` \n   represents a non-empty sequence, and has the very\n   important subclass `Tuple`.",373)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Tuple)].reifyCeylonType({Absent:{t:Null},Element:{t:ClassDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','Sequential']};};
exports.Sequential=Sequential;
function $init$Sequential(){
    if (Sequential.$$===undefined){
        initTypeProto(Sequential,'ceylon.language::Sequential',$init$List(),$init$Ranged(),$init$Cloneable());
        (function($$sequential){
            $$sequential.$prop$getReversed={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:Sequential,$an:function(){return[doc(String$("Reverse this sequence, returning a new sequence.",48)),shared(),actual(),formal()];},d:['ceylon.language','Sequential','$at','reversed']};}};
            defineAttr($$sequential,'sequence',function(){
                var $$sequential=this;
                return $$sequential;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:Sequential,$an:function(){return[doc(String$("This sequence.",14)),shared(),actual(),$default()];},d:['ceylon.language','Sequential','$at','sequence']};});
            $$sequential.$prop$getRest={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:Sequential,$an:function(){return[doc(String$("The rest of the sequence, without the first \nelement.",53)),shared(),actual(),formal()];},d:['ceylon.language','Sequential','$at','rest']};}};
            $$sequential.repeat=function (times$199){
                var $$sequential=this;
                return $$sequential.cycle(times$199).sequence;
            };
            $$sequential.repeat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'times',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Sequential,$an:function(){return[doc(String$("Returns a sequence formed by repeating the elements of \nthis sequence the given number of times, or an empty \nsequence if `times<=0`.",133)),shared(),actual(),$default()];},d:['ceylon.language','Sequential','$m','repeat']};};
            $$sequential.initial=function (length$200){
                var $$sequential=this;
                return $$sequential.segment((0),length$200);
            };
            $$sequential.initial.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Sequential,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequential','$m','initial']};};
            $$sequential.terminal=function terminal(length$201){
                var $$sequential=this;
                var l$202;
                if((l$202=$$sequential.lastIndex)!==null&&length$201.compare((0)).equals(getLarger())){
                    return $$sequential.span(l$202.minus(length$201).plus((1)),l$202);
                }else {
                    return getEmpty();
                }
            };$$sequential.terminal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Sequential,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequential','$m','terminal']};};
            $$sequential.trim=function (trimming$203){
                var $$sequential=this;
                return $$sequential.getT$all()['ceylon.language::List'].$$.prototype.trim.call(this,$JsCallable(trimming$203,[{$nm:'elem',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$sequential.$$targs$$.Element,Element:$$sequential.$$targs$$.Element}},Return:{t:Boolean$}})).sequence;
            };
            $$sequential.trim.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'trimming',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Sequential,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequential','$m','trim']};};
            $$sequential.trimLeading=function (trimming$204){
                var $$sequential=this;
                return $$sequential.getT$all()['ceylon.language::List'].$$.prototype.trimLeading.call(this,$JsCallable(trimming$204,[{$nm:'elem',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$sequential.$$targs$$.Element,Element:$$sequential.$$targs$$.Element}},Return:{t:Boolean$}})).sequence;
            };
            $$sequential.trimLeading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'trimming',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Sequential,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequential','$m','trimLeading']};};
            $$sequential.trimTrailing=function (trimming$205){
                var $$sequential=this;
                return $$sequential.getT$all()['ceylon.language::List'].$$.prototype.trimTrailing.call(this,$JsCallable(trimming$205,[{$nm:'elem',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$sequential.$$targs$$.Element,Element:$$sequential.$$targs$$.Element}},Return:{t:Boolean$}})).sequence;
            };
            $$sequential.trimTrailing.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'trimming',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Sequential,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequential','$m','trimTrailing']};};
            defineAttr($$sequential,'clone',function(){
                var $$sequential=this;
                return $$sequential;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:Sequential,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequential','$at','clone']};});
            defineAttr($$sequential,'string',function(){
                var $$sequential=this;
                return (opt$206=($$sequential.empty?String$("[]",2):null),opt$206!==null?opt$206:StringBuilder().appendAll([String$("[",1),commaList($$sequential).string,String$("]",1)]).string);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Sequential,$an:function(){return[doc(String$("A string of form `\"[ x, y, z ]\"` where `x`, `y`, \nand `z` are the `string` representations of the \nelements of this collection, as produced by the\niterator of the collection, or the string `\"{}\"` \nif this collection is empty. If the collection \niterator produces the value `null`, the string\nrepresentation contains the string `\"null\"`.",336)),shared(),actual(),$default()];},d:['ceylon.language','Sequential','$at','string']};});
        })(Sequential.$$.prototype);
    }
    return Sequential;
}
exports.$init$Sequential=$init$Sequential;
$init$Sequential();
var opt$206;
function Sequence($$targs$$,$$sequence){
    Sequential($$sequence.$$targs$$===undefined?$$targs$$:{Element:$$sequence.$$targs$$.Element},$$sequence);
    Iterable($$sequence.$$targs$$===undefined?$$targs$$:{Absent:{t:Nothing},Element:$$sequence.$$targs$$.Element},$$sequence);
    Cloneable($$sequence.$$targs$$===undefined?$$targs$$:{Clone:{t:Sequence,a:{Element:$$sequence.$$targs$$.Element}}},$$sequence);
    add_type_arg($$sequence,'Clone',{t:Sequence,a:{Element:$$sequence.$$targs$$.Element}});
    set_type_args($$sequence,$$targs$$);
    $$sequence.$prop$getEmpty={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Sequence,$an:function(){return[doc(String$("Returns `false`, since every `Sequence` contains at\n    least one element.",74)),shared(),actual()];},d:['ceylon.language','Sequence','$at','empty']};}};
    $$sequence.$prop$getEmpty.get=function(){return empty};
    $$sequence.$prop$getSequence={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:'Element'}},$cont:Sequence,$an:function(){return[doc(String$("This sequence.",14)),shared(),$default(),actual()];},d:['ceylon.language','Sequence','$at','sequence']};}};
    $$sequence.$prop$getSequence.get=function(){return sequence};
    $$sequence.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:'Element'}},$cont:Sequence,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequence','$at','clone']};}};
    $$sequence.$prop$getClone.get=function(){return clone};
    $$sequence.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Sequence,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequence','$at','string']};}};
    $$sequence.$prop$getString.get=function(){return string};
}
Sequence.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'var':'out'}},satisfies:[{t:Sequential,a:{Element:'Element'}},{t:Iterable,a:{Absent:{t:Nothing},Element:'Element'}},{t:Cloneable,a:{Clone:{t:Sequence,a:{Element:'Element'}}}}],$an:function(){return[doc(String$("A nonempty, immutable sequence of values. The type \n`Sequence<Element>`, may be abbreviated `[Element+]`.\n\nGiven a possibly-empty sequence of type `[Element*]`, \nthe `if (nonempty ...)` construct, or, alternatively,\nthe `assert (nonempty ...)` construct, may be used to \nnarrow to a nonempty sequence type:\n\n    [Integer*] nums = ... ;\n    if (nonempty nums) {\n        Integer first = nums.first;\n        Integer max = max(nums);\n        [Integer+] squares = nums.collect((Integer i) => i**2));\n        [Integer+] sorted = nums.sort(byIncreasing((Integer i) => i));\n    }\n\nOperations like `first`, `max()`, `collect()`, and \n`sort()`, which polymorphically produce a nonempty or \nnon-null output when given a nonempty input are called \n_emptiness-preserving_.",759)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Empty)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Sequence']};};
exports.Sequence=Sequence;
function $init$Sequence(){
    if (Sequence.$$===undefined){
        initTypeProto(Sequence,'ceylon.language::Sequence',$init$Sequential(),$init$Iterable(),$init$Cloneable());
        (function($$sequence){
            $$sequence.$prop$getLastIndex={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Sequence,$an:function(){return[doc(String$("The index of the last element of the sequence.",46)),see([$init$OpenValue()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.$prop$getSize)].reifyCeylonType({Absent:{t:Null},Element:{t:ValueDeclaration$meta$declaration}})),shared(),actual(),formal()];},d:['ceylon.language','Sequence','$at','lastIndex']};}};
            $$sequence.$prop$getFirst={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Sequence,$an:function(){return[doc(String$("The first element of the sequence, that is, the\n    element with index `0`.",75)),shared(),actual(),formal()];},d:['ceylon.language','Sequence','$at','first']};}};
            $$sequence.$prop$getLast={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Sequence,$an:function(){return[doc(String$("The last element of the sequence, that is, the\n    element with index `sequence.lastIndex`.",91)),shared(),actual(),formal()];},d:['ceylon.language','Sequence','$at','last']};}};
            defineAttr($$sequence,'empty',function(){
                var $$sequence=this;
                return false;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Sequence,$an:function(){return[doc(String$("Returns `false`, since every `Sequence` contains at\n    least one element.",74)),shared(),actual()];},d:['ceylon.language','Sequence','$at','empty']};});
            $$sequence.$prop$getReversed={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:'Element'}},$cont:Sequence,$an:function(){return[doc(String$("Reverse this sequence, returning a new nonempty\n    sequence.",61)),shared(),actual(),formal()];},d:['ceylon.language','Sequence','$at','reversed']};}};
            defineAttr($$sequence,'sequence',function(){
                var $$sequence=this;
                return $$sequence;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:'Element'}},$cont:Sequence,$an:function(){return[doc(String$("This sequence.",14)),shared(),$default(),actual()];},d:['ceylon.language','Sequence','$at','sequence']};});
            $$sequence.$prop$getRest={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:Sequence,$an:function(){return[doc(String$("The rest of the sequence, without the first \n    element.",57)),shared(),actual(),formal()];},d:['ceylon.language','Sequence','$at','rest']};}};
            $$sequence.$sort=function $sort(comparing$207){
                var $$sequence=this;
                var s$208=internalSort($JsCallable(comparing$207,[{$nm:'x',$mt:'prm',$t:'Element',$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:{t:Empty},First:$$sequence.$$targs$$.Element,Element:$$sequence.$$targs$$.Element}},First:$$sequence.$$targs$$.Element,Element:$$sequence.$$targs$$.Element}},Return:{t:Comparison}}),$$sequence,{Element:$$sequence.$$targs$$.Element});
                $prop$getS$208={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},d:['ceylon.language','Sequence','$m','sort','$at','s']};}};
                $prop$getS$208.get=function(){return s$208};
                //assert at Sequence.ceylon (63:8-63:27)
                var s$209;
                if (!(nonempty((s$209=s$208)))) {throw wrapexc(AssertionException("Assertion failed: \'nonempty s\' at Sequence.ceylon (63:15-63:26)"),'63:8-63:27','Sequence.ceylon'); }
                return s$209;
            };$$sequence.$sort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:'Element'}},$ps:[{$nm:'comparing',$mt:'prm',$pt:'f',$t:{t:Comparison},$an:function(){return[doc("The function comparing pairs of elements.")];}}],$cont:Sequence,$an:function(){return[doc(String$("A nonempty sequence containing the elements of this\ncontainer, sorted according to a function \nimposing a partial order upon the elements.",138)),shared(),$default(),actual()];},d:['ceylon.language','Sequence','$m','sort']};};
            $$sequence.collect=function collect(collecting$210,$$$mptypes){
                var $$sequence=this;
                var s$211=$$sequence.$map($JsCallable(collecting$210,[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$sequence.$$targs$$.Element,Element:$$sequence.$$targs$$.Element}},Return:$$$mptypes.Result}),{Result:$$$mptypes.Result}).sequence;
                $prop$getS$211={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Result'}},d:['ceylon.language','Sequence','$m','collect','$at','s']};}};
                $prop$getS$211.get=function(){return s$211};
                //assert at Sequence.ceylon (74:8-74:27)
                var s$212;
                if (!(nonempty((s$212=s$211)))) {throw wrapexc(AssertionException("Assertion failed: \'nonempty s\' at Sequence.ceylon (74:15-74:26)"),'74:8-74:27','Sequence.ceylon'); }
                return s$212;
            };$$sequence.collect.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:'Result'}},$ps:[{$nm:'collecting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[doc("The transformation applied to the elements.")];}}],$cont:Sequence,$tp:{Result:{}},$an:function(){return[doc(String$("A nonempty sequence containing the results of \napplying the given mapping to the elements of this\nsequence.",107)),shared(),$default(),actual()];},d:['ceylon.language','Sequence','$m','collect']};};
            defineAttr($$sequence,'clone',function(){
                var $$sequence=this;
                return $$sequence;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:'Element'}},$cont:Sequence,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequence','$at','clone']};});
            defineAttr($$sequence,'string',function(){
                var $$sequence=this;
                return attrGetter($$sequence.getT$all()['ceylon.language::Sequential'],'string').call(this);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Sequence,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequence','$at','string']};});
            $$sequence.shorterThan=function (length$213){
                var $$sequence=this;
                return $$sequence.getT$all()['ceylon.language::List'].$$.prototype.shorterThan.call(this,length$213);
            };
            $$sequence.shorterThan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Sequence,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequence','$m','shorterThan']};};
            $$sequence.longerThan=function (length$214){
                var $$sequence=this;
                return $$sequence.getT$all()['ceylon.language::List'].$$.prototype.longerThan.call(this,length$214);
            };
            $$sequence.longerThan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Sequence,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequence','$m','longerThan']};};
            $$sequence.findLast=function (selecting$215){
                var $$sequence=this;
                return $$sequence.getT$all()['ceylon.language::List'].$$.prototype.findLast.call(this,$JsCallable(selecting$215,[{$nm:'elem',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$sequence.$$targs$$.Element,Element:$$sequence.$$targs$$.Element}},Return:{t:Boolean$}}));
            };
            $$sequence.findLast.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Sequence,$an:function(){return[shared(),$default(),actual()];},d:['ceylon.language','Sequence','$m','findLast']};};
            $$sequence.repeat=function (times$216){
                var $$sequence=this;
                return $$sequence.getT$all()['ceylon.language::Sequential'].$$.prototype.repeat.call(this,times$216);
            };
            $$sequence.repeat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'times',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Sequence,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Sequence','$m','repeat']};};
        })(Sequence.$$.prototype);
    }
    return Sequence;
}
exports.$init$Sequence=$init$Sequence;
$init$Sequence();
function Empty($$empty){
    Sequential({Element:{t:Nothing}},$$empty);
    Ranged({Index:{t:Integer},Span:{t:Empty}},$$empty);
    add_type_arg($$empty,'Index',{t:Integer});
    add_type_arg($$empty,'Span',{t:Empty});
    Cloneable({Clone:{t:Empty}},$$empty);
    add_type_arg($$empty,'Clone',{t:Empty});
    $$empty.$prop$getEmpty={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Empty,$an:function(){return[doc(String$("Returns `true`.",15)),shared(),actual()];},d:['ceylon.language','Empty','$at','empty']};}};
    $$empty.$prop$getEmpty.get=function(){return empty};
    $$empty.$prop$getSize={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Empty,$an:function(){return[doc(String$("Returns 0.",10)),shared(),actual()];},d:['ceylon.language','Empty','$at','size']};}};
    $$empty.$prop$getSize.get=function(){return size};
    $$empty.$prop$getReversed={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','reversed']};}};
    $$empty.$prop$getReversed.get=function(){return reversed};
    $$empty.$prop$getSequence={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','sequence']};}};
    $$empty.$prop$getSequence.get=function(){return sequence};
    $$empty.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Empty,$an:function(){return[doc(String$("Returns a string description of the empty sequence: \n`{}`.",58)),shared(),actual()];},d:['ceylon.language','Empty','$at','string']};}};
    $$empty.$prop$getString.get=function(){return string};
    $$empty.$prop$getLastIndex={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Null},$cont:Empty,$an:function(){return[doc(String$("Returns `null`.",15)),shared(),actual()];},d:['ceylon.language','Empty','$at','lastIndex']};}};
    $$empty.$prop$getLastIndex.get=function(){return lastIndex};
    $$empty.$prop$getFirst={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Null},$cont:Empty,$an:function(){return[doc(String$("Returns `null`.",15)),shared(),actual()];},d:['ceylon.language','Empty','$at','first']};}};
    $$empty.$prop$getFirst.get=function(){return first};
    $$empty.$prop$getLast={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Null},$cont:Empty,$an:function(){return[doc(String$("Returns `null`.",15)),shared(),actual()];},d:['ceylon.language','Empty','$at','last']};}};
    $$empty.$prop$getLast.get=function(){return last};
    $$empty.$prop$getRest={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','rest']};}};
    $$empty.$prop$getRest.get=function(){return rest};
    $$empty.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','clone']};}};
    $$empty.$prop$getClone.get=function(){return clone};
    $$empty.$prop$getCoalesced={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','coalesced']};}};
    $$empty.$prop$getCoalesced.get=function(){return coalesced};
    $$empty.$prop$getIndexed={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','indexed']};}};
    $$empty.$prop$getIndexed.get=function(){return indexed};
}
Empty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Sequential,a:{Element:{t:Nothing}}},{t:Ranged,a:{Index:{t:Integer},Span:{t:Empty}}},{t:Cloneable,a:{Clone:{t:Empty}}}],$an:function(){return[doc(String$("A sequence with no elements. The type `Empty` may be\nabbreviated `[]`, and an instance is produced by the \nexpression `[]`. That is, in the following expression,\n`e` has type `[]` and refers to the value `[]`:\n\n    [] none = [];\n\n(Whether the syntax `[]` refers to the type or the \nvalue depends upon how it occurs grammatically.)",330)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Sequence)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','Empty']};};
exports.Empty=Empty;
function $init$Empty(){
    if (Empty.$$===undefined){
        initTypeProto(Empty,'ceylon.language::Empty',$init$Sequential(),$init$Ranged(),$init$Cloneable());
        (function($$empty){
            $$empty.iterator=function (){
                var $$empty=this;
                return getEmptyIterator();
            };
            $$empty.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:{t:Nothing}}},$ps:[],$cont:Empty,$an:function(){return[doc(String$("Returns an iterator that is already exhausted.",46)),shared(),actual()];},d:['ceylon.language','Empty','$m','iterator']};};
            $$empty.get=function (index$217){
                var $$empty=this;
                return null;
            };
            $$empty.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Null},$ps:[{$nm:'index',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Empty,$an:function(){return[doc(String$("Returns `null` for any given index.",35)),shared(),actual()];},d:['ceylon.language','Empty','$m','get']};};
            $$empty.segment=function (from$218,length$219){
                var $$empty=this;
                return $$empty;
            };
            $$empty.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty` for any given segment.",41)),shared(),actual()];},d:['ceylon.language','Empty','$m','segment']};};
            $$empty.span=function (from$220,to$221){
                var $$empty=this;
                return $$empty;
            };
            $$empty.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty` for any given span.",38)),shared(),actual()];},d:['ceylon.language','Empty','$m','span']};};
            $$empty.spanTo=function (to$222){
                var $$empty=this;
                return $$empty;
            };
            $$empty.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'to',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty` for any given span.",38)),shared(),actual()];},d:['ceylon.language','Empty','$m','spanTo']};};
            $$empty.spanFrom=function (from$223){
                var $$empty=this;
                return $$empty;
            };
            $$empty.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty` for any given span.",38)),shared(),actual()];},d:['ceylon.language','Empty','$m','spanFrom']};};
            defineAttr($$empty,'empty',function(){
                var $$empty=this;
                return true;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Empty,$an:function(){return[doc(String$("Returns `true`.",15)),shared(),actual()];},d:['ceylon.language','Empty','$at','empty']};});
            defineAttr($$empty,'size',function(){
                var $$empty=this;
                return (0);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Empty,$an:function(){return[doc(String$("Returns 0.",10)),shared(),actual()];},d:['ceylon.language','Empty','$at','size']};});
            defineAttr($$empty,'reversed',function(){
                var $$empty=this;
                return $$empty;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','reversed']};});
            defineAttr($$empty,'sequence',function(){
                var $$empty=this;
                return $$empty;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','sequence']};});
            defineAttr($$empty,'string',function(){
                var $$empty=this;
                return String$("{}",2);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Empty,$an:function(){return[doc(String$("Returns a string description of the empty sequence: \n`{}`.",58)),shared(),actual()];},d:['ceylon.language','Empty','$at','string']};});
            defineAttr($$empty,'lastIndex',function(){
                var $$empty=this;
                return null;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Null},$cont:Empty,$an:function(){return[doc(String$("Returns `null`.",15)),shared(),actual()];},d:['ceylon.language','Empty','$at','lastIndex']};});
            defineAttr($$empty,'first',function(){
                var $$empty=this;
                return null;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Null},$cont:Empty,$an:function(){return[doc(String$("Returns `null`.",15)),shared(),actual()];},d:['ceylon.language','Empty','$at','first']};});
            defineAttr($$empty,'last',function(){
                var $$empty=this;
                return null;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Null},$cont:Empty,$an:function(){return[doc(String$("Returns `null`.",15)),shared(),actual()];},d:['ceylon.language','Empty','$at','last']};});
            defineAttr($$empty,'rest',function(){
                var $$empty=this;
                return $$empty;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','rest']};});
            defineAttr($$empty,'clone',function(){
                var $$empty=this;
                return $$empty;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','clone']};});
            defineAttr($$empty,'coalesced',function(){
                var $$empty=this;
                return $$empty;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','coalesced']};});
            defineAttr($$empty,'indexed',function(){
                var $$empty=this;
                return $$empty;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Empty,$an:function(){return[doc(String$("Returns an `Empty`.",19)),shared(),actual()];},d:['ceylon.language','Empty','$at','indexed']};});
            $$empty.chain=function (other$224,$$$mptypes){
                var $$empty=this;
                return other$224;
            };
            $$empty.chain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'OtherAbsent',Element:'Other'}},$ps:[{$nm:'other',$mt:'prm',$t:{t:Iterable,a:{Absent:'OtherAbsent',Element:'Other'}},$an:function(){return[];}}],$cont:Empty,$tp:{Other:{},OtherAbsent:{'satisfies':[{t:Null}]}},$an:function(){return[doc(String$("Returns `other`.",16)),shared(),actual()];},d:['ceylon.language','Empty','$m','chain']};};
            $$empty.contains=function (element$225){
                var $$empty=this;
                return false;
            };
            $$empty.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'element',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Empty,$an:function(){return[doc(String$("Returns `false` for any given element.",38)),shared(),actual()];},d:['ceylon.language','Empty','$m','contains']};};
            $$empty.count=function (selecting$226){
                var $$empty=this;
                return (0);
            };
            $$empty.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Empty,$an:function(){return[doc(String$("Returns 0 for any given predicate.",34)),shared(),actual()];},d:['ceylon.language','Empty','$m','count']};};
            $$empty.defines=function (index$227){
                var $$empty=this;
                return false;
            };
            $$empty.defines.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'index',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Empty,$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','defines']};};
            $$empty.$map=function (collecting$228,$$$mptypes){
                var $$empty=this;
                return $$empty;
            };
            $$empty.$map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'collecting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:Empty,$tp:{Result:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','map']};};
            $$empty.$filter=function (selecting$229){
                var $$empty=this;
                return $$empty;
            };
            $$empty.$filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Empty,$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','filter']};};
            $$empty.fold=function (initial$230,accumulating$231,$$$mptypes){
                var $$empty=this;
                return initial$230;
            };
            $$empty.fold.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'initial',$mt:'prm',$t:'Result',$an:function(){return[];}},{$nm:'accumulating',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:Empty,$tp:{Result:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','fold']};};
            $$empty.find=function (selecting$232){
                var $$empty=this;
                return null;
            };
            $$empty.find.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Null},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Empty,$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','find']};};
            $$empty.$sort=function (comparing$233){
                var $$empty=this;
                return $$empty;
            };
            $$empty.$sort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'comparing',$mt:'prm',$pt:'f',$t:{t:Comparison},$an:function(){return[];}}],$cont:Empty,$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','sort']};};
            $$empty.collect=function (collecting$234,$$$mptypes){
                var $$empty=this;
                return $$empty;
            };
            $$empty.collect.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'collecting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:Empty,$tp:{Result:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','collect']};};
            $$empty.select=function (selecting$235){
                var $$empty=this;
                return $$empty;
            };
            $$empty.select.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Empty,$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','select']};};
            $$empty.any=function (selecting$236){
                var $$empty=this;
                return false;
            };
            $$empty.any.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Empty,$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','any']};};
            $$empty.$every=function (selecting$237){
                var $$empty=this;
                return false;
            };
            $$empty.$every.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Empty,$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','every']};};
            $$empty.skipping=function (skip$238){
                var $$empty=this;
                return $$empty;
            };
            $$empty.skipping.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'skip',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Empty,$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','skipping']};};
            $$empty.taking=function (take$239){
                var $$empty=this;
                return $$empty;
            };
            $$empty.taking.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'take',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Empty,$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','taking']};};
            $$empty.by=function (step$240){
                var $$empty=this;
                return $$empty;
            };
            $$empty.by.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'step',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Empty,$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','by']};};
            $$empty.withLeading=function (element$241,$$$mptypes){
                var $$empty=this;
                return Tuple(element$241,getEmpty(),{Rest:{t:Empty},First:$$$mptypes.Element,Element:$$$mptypes.Element});
            };
            $$empty.withLeading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Tuple,a:{Rest:{t:Empty},First:'Element',Element:'Element'}},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:Empty,$tp:{Element:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','withLeading']};};
            $$empty.withTrailing=function (element$242,$$$mptypes){
                var $$empty=this;
                return Tuple(element$242,getEmpty(),{Rest:{t:Empty},First:$$$mptypes.Element,Element:$$$mptypes.Element});
            };
            $$empty.withTrailing.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Tuple,a:{Rest:{t:Empty},First:'Element',Element:'Element'}},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:Empty,$tp:{Element:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','withTrailing']};};
            $$empty.following=function (head$243,$$$mptypes){
                var $$empty=this;
                return Singleton(head$243,{Element:$$$mptypes.Other});
            };
            $$empty.following.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Nothing},Element:'Other'}},$ps:[{$nm:'head',$mt:'prm',$t:'Other',$an:function(){return[];}}],$cont:Empty,$tp:{Other:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','Empty','$m','following']};};
        })(Empty.$$.prototype);
    }
    return Empty;
}
exports.$init$Empty=$init$Empty;
$init$Empty();
function empty$244(){
    var $$empty=new empty$244.$$;
    Object$($$empty);
    Empty($$empty);
    return $$empty;
}
function $init$empty$244(){
    if (empty$244.$$===undefined){
        initTypeProto(empty$244,'ceylon.language::empty',Object$,$init$Empty());
    }
    return empty$244;
}
exports.$init$empty$244=$init$empty$244;
$init$empty$244();
var empty$245=empty$244();
var getEmpty=function(){
    return empty$245;
}
exports.getEmpty=getEmpty;
getEmpty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:empty$244},$an:function(){return[doc(String$("A sequence with no elements, abbreviated `[]`. The \nunique instance of the type `[]`.",85)),shared()];},d:['ceylon.language','empty']};};
$prop$getEmpty={get:getEmpty,$$metamodel$$:getEmpty.$$metamodel$$};
exports.$prop$getEmpty=$prop$getEmpty;
function emptyIterator$246($$targs$$){
    var $$emptyIterator=new emptyIterator$246.$$;
    $$emptyIterator.$$targs$$=$$targs$$;
    Iterator({Element:{t:Nothing}},$$emptyIterator);
    return $$emptyIterator;
}
function $init$emptyIterator$246(){
    if (emptyIterator$246.$$===undefined){
        initTypeProto(emptyIterator$246,'ceylon.language::emptyIterator',Basic,$init$Iterator());
    }
    return emptyIterator$246;
}
exports.$init$emptyIterator$246=$init$emptyIterator$246;
$init$emptyIterator$246();
(function($$emptyIterator){
    $$emptyIterator.next=function (){
        var $$emptyIterator=this;
        return getFinished();
    };
})(emptyIterator$246.$$.prototype);
var emptyIterator$247=emptyIterator$246({Element:{t:Nothing}});
var getEmptyIterator=function(){
    return emptyIterator$247;
}
exports.getEmptyIterator=getEmptyIterator;
getEmptyIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:emptyIterator$246},$an:function(){return[doc(String$("An iterator that returns no elements.",37)),shared()];},d:['ceylon.language','emptyIterator']};};
$prop$getEmptyIterator={get:getEmptyIterator,$$metamodel$$:getEmptyIterator.$$metamodel$$};
exports.$prop$getEmptyIterator=$prop$getEmptyIterator;
function Keys(correspondence$248, $$targs$$,$$keys){
    $init$Keys();
    if ($$keys===undefined)$$keys=new Keys.$$;
    set_type_args($$keys,$$targs$$);
    $$keys.correspondence$248_=correspondence$248;
    Category($$keys);
    return $$keys;
}
Keys.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Basic},$tp:{Key:{'var':'in','satisfies':[{t:Object$}]},Item:{'var':'out'}},satisfies:[{t:Category}],d:['ceylon.language','Keys']};};
function $init$Keys(){
    if (Keys.$$===undefined){
        initTypeProto(Keys,'ceylon.language::Keys',Basic,$init$Category());
        (function($$keys){
            $$keys.contains=function contains(key$249){
                var $$keys=this;
                var key$250;
                if(isOfType((key$250=key$249),$$keys.$$targs$$.Key)){
                    return $$keys.correspondence$248.defines(key$250);
                }else {
                    return false;
                }
            };$$keys.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'key',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Keys,$an:function(){return[shared(),actual()];},d:['ceylon.language','Keys','$m','contains']};};
            defineAttr($$keys,'correspondence$248',function(){return this.correspondence$248_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Correspondence,a:{Key:'Key',Item:'Item'}},$cont:Keys,d:['ceylon.language','Keys','$at','correspondence']};});
        })(Keys.$$.prototype);
    }
    return Keys;
}
exports.$init$Keys=$init$Keys;
$init$Keys();
function Correspondence($$targs$$,$$correspondence){
    set_type_args($$correspondence,$$targs$$);
    $$correspondence.$prop$getKeys={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Category},$cont:Correspondence,$an:function(){return[doc(String$("The `Category` of all keys for which a value is \ndefined by this `Correspondence`.",82)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Correspondence.$$.prototype.defines)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Correspondence','$at','keys']};}};
    $$correspondence.$prop$getKeys.get=function(){return keys};
}
Correspondence.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Key:{'var':'in','satisfies':[{t:Object$}]},Item:{'var':'out'}},satisfies:[],$an:function(){return[doc(String$("Abstract supertype of objects which associate values \nwith keys. `Correspondence` does not satisfy `Category`,\nsince in some cases&mdash;`List`, for example&mdash;it is \nconvenient to consider the subtype a `Category` of its\nvalues, and in other cases&mdash;`Map`, for example&mdash;it \nis convenient to treat the subtype as a `Category` of its\nentries.\n\nThe item corresponding to a given key may be obtained \nfrom a `Correspondence` using the item operator:\n\n    value bg = settings[\"backgroundColor\"] else white;\n\nThe `get()` operation and item operator result in an\noptional type, to reflect the possibility that there is\nno item for the given key.",651)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Map),$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),List),$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Category)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Correspondence']};};
exports.Correspondence=Correspondence;
function $init$Correspondence(){
    if (Correspondence.$$===undefined){
        initTypeProto(Correspondence,'ceylon.language::Correspondence');
        (function($$correspondence){
            $$correspondence.defines=function (key$251){
                var $$correspondence=this;
                return exists($$correspondence.get(key$251));
            };
            $$correspondence.defines.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}}],$cont:Correspondence,$an:function(){return[doc(String$("Determines if there is a value defined for the \ngiven key.",58)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Correspondence.$$.prototype.definesAny),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Correspondence.$$.prototype.definesEvery),$init$OpenValue()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Correspondence.$$.prototype.$prop$getKeys)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:FunctionDeclaration$meta$declaration},{t:ValueDeclaration$meta$declaration}]}})),shared(),$default()];},d:['ceylon.language','Correspondence','$m','defines']};};
            defineAttr($$correspondence,'keys',function(){
                var $$correspondence=this;
                return Keys($$correspondence,{Key:$$correspondence.$$targs$$.Key,Item:$$correspondence.$$targs$$.Item});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Category},$cont:Correspondence,$an:function(){return[doc(String$("The `Category` of all keys for which a value is \ndefined by this `Correspondence`.",82)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Correspondence.$$.prototype.defines)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Correspondence','$at','keys']};});
            $$correspondence.definesEvery=function definesEvery(keys$252){
                var $$correspondence=this;
                var it$253 = keys$252.iterator();
                var key$254;while ((key$254=it$253.next())!==getFinished()){
                    if((!$$correspondence.defines(key$254))){
                        return false;
                    }
                }
                if (getFinished() === key$254){
                    return true;
                }
            };$$correspondence.definesEvery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'keys',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:'Key'}},$an:function(){return[];}}],$cont:Correspondence,$an:function(){return[doc(String$("Determines if this `Correspondence` defines a value\nfor every one of the given keys.",84)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Correspondence.$$.prototype.defines)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Correspondence','$m','definesEvery']};};
            $$correspondence.definesAny=function definesAny(keys$255){
                var $$correspondence=this;
                var it$256 = keys$255.iterator();
                var key$257;while ((key$257=it$256.next())!==getFinished()){
                    if($$correspondence.defines(key$257)){
                        return true;
                    }
                }
                if (getFinished() === key$257){
                    return false;
                }
            };$$correspondence.definesAny.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'keys',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:'Key'}},$an:function(){return[];}}],$cont:Correspondence,$an:function(){return[doc(String$("Determines if this `Correspondence` defines a value\nfor any one of the given keys.",82)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Correspondence.$$.prototype.defines)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Correspondence','$m','definesAny']};};
            $$correspondence.items=function (keys$258){
                var $$correspondence=this;
                return Comprehension(function(){
                    var it$259=keys$258.iterator();
                    var key$260=getFinished();
                    var next$key$260=function(){return key$260=it$259.next();}
                    next$key$260();
                    return function(){
                        if(key$260!==getFinished()){
                            var key$260$261=key$260;
                            var tmpvar$262=$$correspondence.get(key$260$261);
                            next$key$260();
                            return tmpvar$262;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:{ t:'u', l:[{t:Null},$$correspondence.$$targs$$.Item]}}).sequence;
            };
            $$correspondence.items.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:{ t:'u', l:[{t:Null},'Item']}}},$ps:[{$nm:'keys',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:'Key'}},$an:function(){return[];}}],$cont:Correspondence,$an:function(){return[doc(String$("Returns the items defined for the given keys, in\nthe same order as the corresponding keys.",90)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Correspondence.$$.prototype.get)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Correspondence','$m','items']};};
        })(Correspondence.$$.prototype);
    }
    return Correspondence;
}
exports.$init$Correspondence=$init$Correspondence;
$init$Correspondence();
function Finished($$finished){
    $init$Finished();
    if ($$finished===undefined)throwexc(InvocationException$meta$model(String$("Cannot instantiate abstract class")),'?','?')
    return $$finished;
}
Finished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Basic},satisfies:[],$an:function(){return[doc(String$("The type of the value that indicates that \nan `Iterator` is exhausted and has no more \nvalues to return.",104)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterator)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),shared(),abstract()];},d:['ceylon.language','Finished']};};
exports.Finished=Finished;
function $init$Finished(){
    if (Finished.$$===undefined){
        initTypeProto(Finished,'ceylon.language::Finished',Basic);
    }
    return Finished;
}
exports.$init$Finished=$init$Finished;
$init$Finished();
function finished$263(){
    var $$finished=new finished$263.$$;
    Finished($$finished);
    $$finished.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:finished$263,$an:function(){return[shared(),actual()];},d:['ceylon.language','finished','$at','string']};}};
    $$finished.$prop$getString.get=function(){return string};
    return $$finished;
}
function $init$finished$263(){
    if (finished$263.$$===undefined){
        initTypeProto(finished$263,'ceylon.language::finished',Finished);
    }
    return finished$263;
}
exports.$init$finished$263=$init$finished$263;
$init$finished$263();
(function($$finished){
    defineAttr($$finished,'string',function(){
        var $$finished=this;
        return String$("finished",8);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:finished$263,$an:function(){return[shared(),actual()];},d:['ceylon.language','finished','$at','string']};});
})(finished$263.$$.prototype);
var finished$264=finished$263();
var getFinished=function(){
    return finished$264;
}
exports.getFinished=getFinished;
getFinished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:finished$263},$an:function(){return[doc(String$("A value that indicates that an `Iterator`\nis exhausted and has no more values to \nreturn.",89)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterator)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','finished']};};
$prop$getFinished={get:getFinished,$$metamodel$$:getFinished.$$metamodel$$};
exports.$prop$getFinished=$prop$getFinished;
function Binary($$targs$$,$$binary){
    set_type_args($$binary,$$targs$$);
    $$binary.set$defs$bit=function(index$265,bit$266){return true;};
}
Binary.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Other:{'satisfies':[{t:Binary,a:{Other:'Other'}}]}},satisfies:[],$an:function(){return[doc(String$("Abstraction of numeric types like `Integer` that may be \nrepresented as a sequence of bits, and may be the subject\nof bitwise operations.",137)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Integer)].reifyCeylonType({Absent:{t:Null},Element:{t:ClassDeclaration$meta$declaration}})),by([String$("Stef",4)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Binary']};};
exports.Binary=Binary;
function $init$Binary(){
    if (Binary.$$===undefined){
        initTypeProto(Binary,'ceylon.language::Binary');
        (function($$binary){
            $$binary.$prop$getNot={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Other',$cont:Binary,$an:function(){return[doc(String$("The binary complement of this sequence of bits.",47)),shared(),formal()];},d:['ceylon.language','Binary','$at','not']};}};
            $$binary.$prop$getSize={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Binary,$an:function(){return[doc(String$("The number of bits (0 or 1) that this sequence of bits can hold.",64)),shared(),formal()];},d:['ceylon.language','Binary','$at','size']};}};
            $$binary.clear=function clear(index$267){
                var $$binary=this;
                return $$binary.set(index$267,false);
            };$$binary.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Other',$ps:[{$nm:'index',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Binary,$an:function(){return[doc(String$("Returns a new number with the given bit set to 0.\nBits are indexed from right to left.",86)),shared(),$default()];},d:['ceylon.language','Binary','$m','clear']};};
        })(Binary.$$.prototype);
    }
    return Binary;
}
exports.$init$Binary=$init$Binary;
$init$Binary();
function Cloneable($$targs$$,$$cloneable){
    set_type_args($$cloneable,$$targs$$);
}
Cloneable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Clone:{'var':'out','satisfies':[{t:Cloneable,a:{Clone:'Clone'}}]}},satisfies:[],$an:function(){return[doc(String$("Abstract supertype of objects whose value can be \ncloned.",57)),shared()];},d:['ceylon.language','Cloneable']};};
exports.Cloneable=Cloneable;
function $init$Cloneable(){
    if (Cloneable.$$===undefined){
        initTypeProto(Cloneable,'ceylon.language::Cloneable');
        (function($$cloneable){
            $$cloneable.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Clone',$cont:Cloneable,$an:function(){return[doc(String$("Obtain a clone of this object. For a mutable \nobject, this should return a copy of the object. \nFor an immutable object, it is acceptable to return\nthe object itself.",166)),shared(),formal()];},d:['ceylon.language','Cloneable','$at','clone']};}};
        })(Cloneable.$$.prototype);
    }
    return Cloneable;
}
exports.$init$Cloneable=$init$Cloneable;
$init$Cloneable();
function Closeable($$closeable){
}
Closeable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[doc(String$("Abstract supertype of types which may appear\nas the expression type of a resource expression\nin a `try` statement.",114)),shared()];},d:['ceylon.language','Closeable']};};
exports.Closeable=Closeable;
function $init$Closeable(){
    if (Closeable.$$===undefined){
        initTypeProto(Closeable,'ceylon.language::Closeable');
        (function($$closeable){
        })(Closeable.$$.prototype);
    }
    return Closeable;
}
exports.$init$Closeable=$init$Closeable;
$init$Closeable();
function Ranged($$targs$$,$$ranged){
    set_type_args($$ranged,$$targs$$);
}
Ranged.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Index:{'var':'in','satisfies':[{t:Comparable,a:{Other:'Index'}}]},Span:{'var':'out'}},satisfies:[],$an:function(){return[doc(String$("Abstract supertype of ranged objects which map a range\nof `Comparable` keys to ranges of values. The type\nparameter `Span` abstracts the type of the resulting\nrange.\n\nA span may be obtained from an instance of `Ranged`\nusing the span operator:\n\n    print(\"hello world\"[0..5])\n",276)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),List),$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Sequence),$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),String)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:InterfaceDeclaration$meta$declaration},{t:ClassDeclaration$meta$declaration}]}})),shared()];},d:['ceylon.language','Ranged']};};
exports.Ranged=Ranged;
function $init$Ranged(){
    if (Ranged.$$===undefined){
        initTypeProto(Ranged,'ceylon.language::Ranged');
        (function($$ranged){
        })(Ranged.$$.prototype);
    }
    return Ranged;
}
exports.$init$Ranged=$init$Ranged;
$init$Ranged();
function Container($$targs$$,$$container){
    Category($$container);
    set_type_args($$container,$$targs$$);
}
Container.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'var':'out'},Absent:{'var':'out','satisfies':[{t:Null}],'def':{t:Null}}},satisfies:[{t:Category}],$an:function(){return[doc(String$("Abstract supertype of objects which may or may not\ncontain one of more other values, called *elements*,\nand provide an operation for accessing the first \nelement, if any. A container which may or may not be \nempty is a `Container<Element,Null>`. A container which \nis always empty is a `Container<Nothing,Null>`. A \ncontainer which is never empty is a \n`Container<Element,Nothing>`.",382)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Category)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),deprecated(String$("Will be removed in Ceylon 1.0.",30)),shared()];},d:['ceylon.language','Container']};};
exports.Container=Container;
function $init$Container(){
    if (Container.$$===undefined){
        initTypeProto(Container,'ceylon.language::Container',$init$Category());
        (function($$container){
            $$container.$prop$getEmpty={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Container,$an:function(){return[doc(String$("Determine if the container is empty, that is, if\nit has no elements.",68)),shared(),formal()];},d:['ceylon.language','Container','$at','empty']};}};
            $$container.$prop$getFirst={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Absent','Element']},$cont:Container,$an:function(){return[doc(String$("The first element. Should produce `null` if the \ncontainer is empty, that is, for any instance for\n    which `empty` evaluates to `true`.",137)),shared(),formal()];},d:['ceylon.language','Container','$at','first']};}};
            $$container.$prop$getLast={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Absent','Element']},$cont:Container,$an:function(){return[doc(String$("The last element. Should produce `null` if the\ncontainer is empty, that is, for any instance for\nwhich `empty` evaluates to `true`.",131)),shared(),formal()];},d:['ceylon.language','Container','$at','last']};}};
        })(Container.$$.prototype);
    }
    return Container;
}
exports.$init$Container=$init$Container;
$init$Container();
function Iterator($$targs$$,$$iterator){
    set_type_args($$iterator,$$targs$$);
}
Iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'var':'out'}},satisfies:[],$an:function(){return[doc(String$("Produces elements of an `Iterable` object. Classes that \nimplement this interface should be immutable.",102)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Iterator']};};
exports.Iterator=Iterator;
function $init$Iterator(){
    if (Iterator.$$===undefined){
        initTypeProto(Iterator,'ceylon.language::Iterator');
        (function($$iterator){
        })(Iterator.$$.prototype);
    }
    return Iterator;
}
exports.$init$Iterator=$init$Iterator;
$init$Iterator();
function Collection($$targs$$,$$collection){
    Iterable($$collection.$$targs$$===undefined?$$targs$$:{Absent:{t:Null},Element:$$collection.$$targs$$.Element},$$collection);
    add_type_arg($$collection,'Absent',{t:Null});
    Cloneable($$collection.$$targs$$===undefined?$$targs$$:{Clone:{t:Collection,a:{Element:$$collection.$$targs$$.Element}}},$$collection);
    add_type_arg($$collection,'Clone',{t:Collection,a:{Element:$$collection.$$targs$$.Element}});
    set_type_args($$collection,$$targs$$);
    $$collection.$prop$getEmpty={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Collection,$an:function(){return[doc(String$("Determine if the collection is empty, that is, if \nit has no elements.",70)),shared(),actual(),$default()];},d:['ceylon.language','Collection','$at','empty']};}};
    $$collection.$prop$getEmpty.get=function(){return empty};
    $$collection.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Collection,$an:function(){return[doc(String$("A string of form `\"{ x, y, z }\"` where `x`, `y`, \nand `z` are the `string` representations of the \nelements of this collection, as produced by the\niterator of the collection, or the string `\"{}\"` \nif this collection is empty. If the collection \niterator produces the value `null`, the string\nrepresentation contains the string `\"null\"`.",336)),shared(),actual(),$default()];},d:['ceylon.language','Collection','$at','string']};}};
    $$collection.$prop$getString.get=function(){return string};
}
Collection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'var':'out'}},satisfies:[{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},{t:Cloneable,a:{Clone:{t:Collection,a:{Element:'Element'}}}}],$an:function(){return[doc(String$("Represents an iterable collection of elements of finite \nsize. `Collection` is the abstract supertype of `List`,\n`Map`, and `Set`.\n\nA `Collection` forms a `Category` of its elements.\n\nAll `Collection`s are `Cloneable`. If a collection is\nimmutable, it is acceptable that `clone` produce a\nreference to the collection itself. If a collection is\nmutable, `clone` should produce an immutable collection\ncontaining references to the same elements, with the\nsame structure as the original collection&mdash;that \nis, it should produce an immutable shallow copy of the\ncollection.",573)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),List),$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Map),$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Set)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','Collection']};};
exports.Collection=Collection;
function $init$Collection(){
    if (Collection.$$===undefined){
        initTypeProto(Collection,'ceylon.language::Collection',$init$Iterable(),$init$Cloneable());
        (function($$collection){
            defineAttr($$collection,'empty',function(){
                var $$collection=this;
                return $$collection.size.equals((0));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Collection,$an:function(){return[doc(String$("Determine if the collection is empty, that is, if \nit has no elements.",70)),shared(),actual(),$default()];},d:['ceylon.language','Collection','$at','empty']};});
            $$collection.contains=function contains(element$268){
                var $$collection=this;
                var it$269 = $$collection.iterator();
                var elem$270;while ((elem$270=it$269.next())!==getFinished()){
                    var elem$271;
                    if((elem$271=elem$270)!==null&&elem$271.equals(element$268)){
                        return true;
                    }
                }
                if (getFinished() === elem$270){
                    return false;
                }
            };$$collection.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'element',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Collection,$an:function(){return[doc(String$("Return `true` if the given object is an element of\nthis collection. In this default implementation,\nand in most refining implementations, return `false`\notherwise. An acceptable refining implementation\nmay return `true` for objects which are not \nelements of the collection, but this is not \nrecommended. (For example, the `contains()` method \nof `String` returns `true` for any substring of the\nstring.)",404)),shared(),actual(),$default()];},d:['ceylon.language','Collection','$m','contains']};};
            defineAttr($$collection,'string',function(){
                var $$collection=this;
                return (opt$272=($$collection.empty?String$("{}",2):null),opt$272!==null?opt$272:StringBuilder().appendAll([String$("{ ",2),commaList($$collection).string,String$(" }",2)]).string);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Collection,$an:function(){return[doc(String$("A string of form `\"{ x, y, z }\"` where `x`, `y`, \nand `z` are the `string` representations of the \nelements of this collection, as produced by the\niterator of the collection, or the string `\"{}\"` \nif this collection is empty. If the collection \niterator produces the value `null`, the string\nrepresentation contains the string `\"null\"`.",336)),shared(),actual(),$default()];},d:['ceylon.language','Collection','$at','string']};});
        })(Collection.$$.prototype);
    }
    return Collection;
}
exports.$init$Collection=$init$Collection;
$init$Collection();
var opt$272;
function Category($$category){
}
Category.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[doc(String$("Abstract supertype of objects that contain other \nvalues, called *elements*, where it is possible to \nefficiently determine if a given value is an element. \n`Category` does not satisfy `Container`, because it is \nconceptually possible to have a `Category` whose \nemptiness cannot be computed.\n\nThe `in` operator may be used to determine if a value\nbelongs to a `Category`:\n\n    if (\"hello\" in \"hello world\") { ... }\n    if (69 in 0..100) { ... }\n    if (key->value in { for (n in 0..100) n.string->n**2 }) { ... }\n\nOrdinarily, `x==y` implies that `x in cat == y in cat`.\nBut this contract is not required since it is possible\nto form a meaningful `Category` using a different\nequivalence relation. For example, an `IdentitySet` is\na meaningful `Category`.",755)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Container)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Category']};};
exports.Category=Category;
function $init$Category(){
    if (Category.$$===undefined){
        initTypeProto(Category,'ceylon.language::Category');
        (function($$category){
            $$category.containsEvery=function containsEvery(elements$273){
                var $$category=this;
                var it$274 = elements$273.iterator();
                var element$275;while ((element$275=it$274.next())!==getFinished()){
                    if((!$$category.contains(element$275))){
                        return false;
                    }
                }
                if (getFinished() === element$275){
                    return true;
                }
            };$$category.containsEvery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'elements',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Object$}}},$an:function(){return[];}}],$cont:Category,$an:function(){return[doc(String$("Determines if every one of the given values belongs\nto this `Category`.",71)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Category.$$.prototype.contains)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Category','$m','containsEvery']};};
            $$category.containsAny=function containsAny(elements$276){
                var $$category=this;
                var it$277 = elements$276.iterator();
                var element$278;while ((element$278=it$277.next())!==getFinished()){
                    if($$category.contains(element$278)){
                        return true;
                    }
                }
                if (getFinished() === element$278){
                    return false;
                }
            };$$category.containsAny.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'elements',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Object$}}},$an:function(){return[];}}],$cont:Category,$an:function(){return[doc(String$("Determines if any one of the given values belongs \nto this `Category`",69)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Category.$$.prototype.contains)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','Category','$m','containsAny']};};
        })(Category.$$.prototype);
    }
    return Category;
}
exports.$init$Category=$init$Category;
$init$Category();
function List($$targs$$,$$list){
    Collection($$list.$$targs$$===undefined?$$targs$$:{Element:$$list.$$targs$$.Element},$$list);
    Correspondence($$list.$$targs$$===undefined?$$targs$$:{Key:{t:Integer},Item:$$list.$$targs$$.Element},$$list);
    add_type_arg($$list,'Key',{t:Integer});
    Ranged($$list.$$targs$$===undefined?$$targs$$:{Index:{t:Integer},Span:{t:List,a:{Element:$$list.$$targs$$.Element}}},$$list);
    add_type_arg($$list,'Index',{t:Integer});
    add_type_arg($$list,'Span',{t:List,a:{Element:$$list.$$targs$$.Element}});
    Cloneable($$list.$$targs$$===undefined?$$targs$$:{Clone:{t:List,a:{Element:$$list.$$targs$$.Element}}},$$list);
    add_type_arg($$list,'Clone',{t:List,a:{Element:$$list.$$targs$$.Element}});
    set_type_args($$list,$$targs$$);
    $$list.$prop$getSize={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:List,$an:function(){return[doc(String$("The number of elements in this sequence, always\n`sequence.lastIndex+1`.",71)),see([$init$OpenValue()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),List.$$.prototype.$prop$getLastIndex)].reifyCeylonType({Absent:{t:Null},Element:{t:ValueDeclaration$meta$declaration}})),shared(),actual(),$default()];},d:['ceylon.language','List','$at','size']};}};
    $$list.$prop$getSize.get=function(){return size};
    $$list.$prop$getFirst={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$cont:List,$an:function(){return[doc(String$("Returns the first element of this `List`, if any.",49)),shared(),actual(),$default()];},d:['ceylon.language','List','$at','first']};}};
    $$list.$prop$getFirst.get=function(){return first};
}
List.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'var':'out'}},satisfies:[{t:Collection,a:{Element:'Element'}},{t:Correspondence,a:{Key:{t:Integer},Item:'Element'}},{t:Ranged,a:{Index:{t:Integer},Span:{t:List,a:{Element:'Element'}}}},{t:Cloneable,a:{Clone:{t:List,a:{Element:'Element'}}}}],$an:function(){return[doc(String$("Represents a collection in which every element has a \nunique non-negative integer index.\n\nA `List` is a `Collection` of its elements, and a \n`Correspondence` from indices to elements.\n\nDirect access to a list element by index produces a\nvalue of optional type. The following idiom may be\nused instead of upfront bounds-checking, as long as \nthe list element type is a non-`null` type:\n\n    value char = \"hello world\"[index];\n    if (exists char) { /*do something*/ }\n    else { /*out of bounds*/ }\n\nTo iterate the indexes of a `List`, use the following\nidiom:\n\n    for (i->char in \"hello world\".indexed) { ... }",611)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Sequence),$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Empty),$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Array)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:InterfaceDeclaration$meta$declaration},{t:ClassDeclaration$meta$declaration}]}})),shared()];},d:['ceylon.language','List']};};
exports.List=List;
function $init$List(){
    if (List.$$===undefined){
        initTypeProto(List,'ceylon.language::List',$init$Collection(),$init$Correspondence(),$init$Ranged(),$init$Cloneable());
        (function($$list){
            $$list.$prop$getLastIndex={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},$cont:List,$an:function(){return[doc(String$("The index of the last element of the list, or\nnull if the list is empty.",72)),see([$init$OpenValue()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),List.$$.prototype.$prop$getSize)].reifyCeylonType({Absent:{t:Null},Element:{t:ValueDeclaration$meta$declaration}})),shared(),formal()];},d:['ceylon.language','List','$at','lastIndex']};}};
            defineAttr($$list,'size',function(){
                var $$list=this;
                return (opt$279=$$list.lastIndex,opt$279!==null?opt$279:(-(1))).plus((1));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:List,$an:function(){return[doc(String$("The number of elements in this sequence, always\n`sequence.lastIndex+1`.",71)),see([$init$OpenValue()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),List.$$.prototype.$prop$getLastIndex)].reifyCeylonType({Absent:{t:Null},Element:{t:ValueDeclaration$meta$declaration}})),shared(),actual(),$default()];},d:['ceylon.language','List','$at','size']};});
            $$list.shorterThan=function (length$280){
                var $$list=this;
                return $$list.size.compare(length$280).equals(getSmaller());
            };
            $$list.shorterThan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:List,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','List','$m','shorterThan']};};
            $$list.longerThan=function (length$281){
                var $$list=this;
                return $$list.size.compare(length$281).equals(getLarger());
            };
            $$list.longerThan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:List,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','List','$m','longerThan']};};
            $$list.$prop$getRest={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$cont:List,$an:function(){return[doc(String$("The rest of the list, without the first element.",48)),shared(),actual(),formal()];},d:['ceylon.language','List','$at','rest']};}};
            $$list.defines=function (index$282){
                var $$list=this;
                return (index$282.compare((opt$283=$$list.lastIndex,opt$283!==null?opt$283:(-(1))))!==getLarger());
            };
            $$list.defines.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'index',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("Determines if the given index refers to an element\n    of this sequence, that is, if\n    `index<=sequence.lastIndex`.",117)),shared(),actual(),$default()];},d:['ceylon.language','List','$m','defines']};};
            $$list.iterator=function iterator(){
                var $$list=this;
                function listIterator$284($$targs$$){
                    var $$listIterator$284=new listIterator$284.$$;
                    $$listIterator$284.$$targs$$=$$targs$$;
                    Iterator({Element:$$list.$$targs$$.Element},$$listIterator$284);
                    $$listIterator$284.index$285_=(0);
                    $$listIterator$284.$prop$getIndex$285={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:listIterator$284,$an:function(){return[variable()];},d:['ceylon.language','List','$m','iterator','$o','listIterator','$at','index']};}};
                    $$listIterator$284.$prop$getIndex$285.get=function(){return index$285};
                    return $$listIterator$284;
                }
                function $init$listIterator$284(){
                    if (listIterator$284.$$===undefined){
                        initTypeProto(listIterator$284,'ceylon.language::List.iterator.listIterator',Basic,$init$Iterator());
                    }
                    return listIterator$284;
                }
                $init$listIterator$284();
                (function($$listIterator$284){
                    defineAttr($$listIterator$284,'index$285',function(){return this.index$285_;},function(index$286){return this.index$285_=index$286;},function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:listIterator$284,$an:function(){return[variable()];},d:['ceylon.language','List','$m','iterator','$o','listIterator','$at','index']};});
                    $$listIterator$284.next=function next(){
                        var $$listIterator$284=this;
                        if(($$listIterator$284.index$285.compare((opt$287=$$list.lastIndex,opt$287!==null?opt$287:(-(1))))!==getLarger())){
                            //assert at List.ceylon (67:20-67:65)
                            var elem$288;
                            if (!(isOfType((elem$288=$$list.get((oldindex$289=$$listIterator$284.index$285,$$listIterator$284.index$285=oldindex$289.successor,oldindex$289))),$$list.$$targs$$.Element))) {throw wrapexc(AssertionException("Assertion failed: \'is Element elem = outer.get(index++)\' at List.ceylon (67:27-67:64)"),'67:20-67:65','List.ceylon'); }
                            var oldindex$289;
                            return elem$288;
                        }else {
                            return getFinished();
                        }
                        var opt$287;
                    };$$listIterator$284.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$ps:[],$cont:listIterator$284,$an:function(){return[shared(),actual()];},d:['ceylon.language','List','$m','iterator','$o','listIterator','$m','next']};};
                })(listIterator$284.$$.prototype);
                var listIterator$290=listIterator$284({Element:$$list.$$targs$$.Element});
                var getListIterator$290=function(){
                    return listIterator$290;
                }
                getListIterator$290.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:listIterator$284},d:['ceylon.language','List','$m','iterator','$at','listIterator']};};
                $prop$getListIterator$290={get:getListIterator$290,$$metamodel$$:getListIterator$290.$$metamodel$$};
                return getListIterator$290();
            };$$list.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:List,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','List','$m','iterator']};};
            $$list.$prop$getReversed={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$cont:List,$an:function(){return[doc(String$("Reverse this list, returning a new list.",40)),shared(),formal()];},d:['ceylon.language','List','$at','reversed']};}};
            $$list.equals=function equals(that$291){
                var $$list=this;
                var that$292;
                if(isOfType((that$292=that$291),{t:List,a:{Element:{t:Anything}}})){
                    if(that$292.size.equals($$list.size)){
                        var it$293 = Range((0),$$list.size.minus((1)),{Element:{t:Integer}}).iterator();
                        var i$294;while ((i$294=it$293.next())!==getFinished()){
                            var x$295=$$list.get(i$294);
                            $prop$getX$295={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},d:['ceylon.language','List','$m','equals','$at','x']};}};
                            $prop$getX$295.get=function(){return x$295};
                            var y$296=that$292.get(i$294);
                            $prop$getY$296={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Anything},d:['ceylon.language','List','$m','equals','$at','y']};}};
                            $prop$getY$296.get=function(){return y$296};
                            var x$297;
                            if((x$297=x$295)!==null){
                                var y$298;
                                if((y$298=y$296)!==null){
                                    if((!x$297.equals(y$298))){
                                        return false;
                                    }
                                }else {
                                    return false;
                                }
                            }else {
                                var y$299;
                                if((y$299=y$296)!==null){
                                    return false;
                                }
                            }
                        }
                        if (getFinished() === i$294){
                            return true;
                        }
                    }
                }
                return false;
            };$$list.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'that',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("Two `List`s are considered equal iff they have the \nsame `size` and _entry sets_. The entry set of a \nlist `l` is the set of elements of `l.indexed`. \nThis definition is equivalent to the more intuitive \nnotion that two lists are equal iff they have the \nsame `size` and for every index either:\n\n- the lists both have the element `null`, or\n- the lists both have a non-null element, and the\n  two elements are equal.",416)),shared(),actual(),$default()];},d:['ceylon.language','List','$m','equals']};};
            defineAttr($$list,'hash',function(){
                var $$list=this;
                var hash$300=(1);
                var setHash$300=function(hash$301){return hash$300=hash$301;};
                $prop$getHash$300={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','List','$at','hash','$at','hash']};}};
                $prop$getHash$300.get=function(){return hash$300};
                $prop$getHash$300.set=setHash$300;
                if (setHash$300.$$metamodel$$===undefined)setHash$300.$$metamodel$$=$prop$getHash$300.$$metamodel$$;
                var it$302 = $$list.iterator();
                var elem$303;while ((elem$303=it$302.next())!==getFinished()){
                    (hash$300=hash$300.times((31)));
                    var elem$304;
                    if((elem$304=elem$303)!==null){
                        (hash$300=hash$300.plus(elem$304.hash));
                    }
                }
                return hash$300;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:List,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','List','$at','hash']};});$$list.findLast=function findLast(selecting$305){
                var $$list=this;
                var l$306;
                if((l$306=$$list.lastIndex)!==null){
                    var index$307=l$306;
                    var setIndex$307=function(index$308){return index$307=index$308;};
                    $prop$getIndex$307={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','List','$m','findLast','$at','index']};}};
                    $prop$getIndex$307.get=function(){return index$307};
                    $prop$getIndex$307.set=setIndex$307;
                    if (setIndex$307.$$metamodel$$===undefined)setIndex$307.$$metamodel$$=$prop$getIndex$307.$$metamodel$$;
                    while((index$307.compare((0))!==getSmaller())){
                        var elem$309;
                        if((elem$309=$$list.get((oldindex$310=index$307,index$307=oldindex$310.predecessor,oldindex$310)))!==null){
                            if(selecting$305(elem$309)){
                                return elem$309;
                            }
                        }
                        var oldindex$310;
                    }
                }
                return null;
            };$$list.findLast.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:List,$an:function(){return[shared(),$default(),actual()];},d:['ceylon.language','List','$m','findLast']};};
            defineAttr($$list,'first',function(){
                var $$list=this;
                return $$list.get((0));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$cont:List,$an:function(){return[doc(String$("Returns the first element of this `List`, if any.",49)),shared(),actual(),$default()];},d:['ceylon.language','List','$at','first']};});
            defineAttr($$list,'last',function(){
                var $$list=this;
                var i$311;
                if((i$311=$$list.lastIndex)!==null){
                    return $$list.get(i$311);
                }else {
                    return null;
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$cont:List,$an:function(){return[doc(String$("Returns the last element of this `List`, if any.",48)),shared(),actual(),$default()];},d:['ceylon.language','List','$at','last']};});$$list.withLeading=function withLeading(element$312,$$$mptypes){
                var $$list=this;
                var sb$313=SequenceBuilder({Element:{ t:'u', l:[$$list.$$targs$$.Element,$$$mptypes.Other]}});
                $prop$getSb$313={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:SequenceBuilder,a:{Element:{ t:'u', l:['Element','Other']}}},d:['ceylon.language','List','$m','withLeading','$at','sb']};}};
                $prop$getSb$313.get=function(){return sb$313};
                sb$313.append(element$312);
                if((!$$list.empty)){
                    sb$313.appendAll($$list);
                }
                //assert at List.ceylon (169:8-169:41)
                var seq$314;
                if (!(nonempty((seq$314=sb$313.sequence)))) {throw wrapexc(AssertionException("Assertion failed: \'nonempty seq=sb.sequence\' at List.ceylon (169:15-169:40)"),'169:8-169:41','List.ceylon'); }
                return seq$314;
            };$$list.withLeading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'element',$mt:'prm',$t:'Other',$an:function(){return[doc("The first element of the resulting sequence.")];}}],$cont:List,$tp:{Other:{}},$an:function(){return[doc(String$("Returns a new `List` that starts with the specified\nelement, followed by the elements of this `List`.",101)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.following)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','List','$m','withLeading']};};
            $$list.withTrailing=function withTrailing(element$315,$$$mptypes){
                var $$list=this;
                var sb$316=SequenceBuilder({Element:{ t:'u', l:[$$list.$$targs$$.Element,$$$mptypes.Other]}});
                $prop$getSb$316={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:SequenceBuilder,a:{Element:{ t:'u', l:['Element','Other']}}},d:['ceylon.language','List','$m','withTrailing','$at','sb']};}};
                $prop$getSb$316.get=function(){return sb$316};
                if((!$$list.empty)){
                    sb$316.appendAll($$list);
                }
                sb$316.append(element$315);
                //assert at List.ceylon (184:8-184:41)
                var seq$317;
                if (!(nonempty((seq$317=sb$316.sequence)))) {throw wrapexc(AssertionException("Assertion failed: \'nonempty seq=sb.sequence\' at List.ceylon (184:15-184:40)"),'184:8-184:41','List.ceylon'); }
                return seq$317;
            };$$list.withTrailing.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'element',$mt:'prm',$t:'Other',$an:function(){return[doc("The last element of the resulting sequence.")];}}],$cont:List,$tp:{Other:{}},$an:function(){return[doc(String$("Returns a new `List` that contains the specified\nelement appended to the end of the elements of this \n`List`.",109)),shared(),$default()];},d:['ceylon.language','List','$m','withTrailing']};};
            $$list.startsWith=function (sublist$318){
                var $$list=this;
                return $$list.includesAt((0),sublist$318);
            };
            $$list.startsWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'sublist',$mt:'prm',$t:{t:List,a:{Element:{t:Anything}}},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("Determine if the given list occurs at the start of this \nlist.",62)),shared(),$default()];},d:['ceylon.language','List','$m','startsWith']};};
            $$list.endsWith=function (sublist$319){
                var $$list=this;
                return $$list.includesAt($$list.size.minus(sublist$319.size),sublist$319);
            };
            $$list.endsWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'sublist',$mt:'prm',$t:{t:List,a:{Element:{t:Anything}}},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("Determine if the given list occurs at the end of this\nlist.",59)),shared(),$default()];},d:['ceylon.language','List','$m','endsWith']};};
            $$list.includesAt=function includesAt(index$320,sublist$321){
                var $$list=this;
                var it$322 = (function(){var tmpvar$324=sublist$321.size;
                if (tmpvar$324>0){
                var tmpvar$325=(0);
                var tmpvar$326=tmpvar$325;
                for (var i=1; i<tmpvar$324; i++){tmpvar$326=tmpvar$326.successor;}
                return Range(tmpvar$325,tmpvar$326,{Element:{t:Integer}})
                }else return getEmpty();}()).iterator();
                var i$323;while ((i$323=it$322.next())!==getFinished()){
                    var x$327=$$list.get(index$320.plus(i$323));
                    $prop$getX$327={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},d:['ceylon.language','List','$m','includesAt','$at','x']};}};
                    $prop$getX$327.get=function(){return x$327};
                    var y$328=sublist$321.get(i$323);
                    $prop$getY$328={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Anything},d:['ceylon.language','List','$m','includesAt','$at','y']};}};
                    $prop$getY$328.get=function(){return y$328};
                    var x$329;
                    if((x$329=x$327)!==null){
                        var y$330;
                        if((y$330=y$328)!==null){
                            if((!x$329.equals(y$330))){
                                return false;
                            }
                        }else {
                            return false;
                        }
                    }else {
                        var y$331;
                        if((y$331=y$328)!==null){
                            return false;
                        }
                    }
                }
                if (getFinished() === i$323){
                    return true;
                }
            };$$list.includesAt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'index',$mt:'prm',$t:{t:Integer},$an:function(){return[doc("The index at which this list might occur")];}},{$nm:'sublist',$mt:'prm',$t:{t:List,a:{Element:{t:Anything}}},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("Determine if the given list occurs at the given index \nof this list.",68)),shared(),$default()];},d:['ceylon.language','List','$m','includesAt']};};
            $$list.includes=function includes(sublist$332){
                var $$list=this;
                var it$333 = (function(){var tmpvar$335=$$list.size;
                if (tmpvar$335>0){
                var tmpvar$336=(0);
                var tmpvar$337=tmpvar$336;
                for (var i=1; i<tmpvar$335; i++){tmpvar$337=tmpvar$337.successor;}
                return Range(tmpvar$336,tmpvar$337,{Element:{t:Integer}})
                }else return getEmpty();}()).iterator();
                var index$334;while ((index$334=it$333.next())!==getFinished()){
                    if($$list.includesAt(index$334,sublist$332)){
                        return true;
                    }
                }
                return false;
            };$$list.includes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'sublist',$mt:'prm',$t:{t:List,a:{Element:{t:Anything}}},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("Determine if the given list occurs at some index in \nthis list.",63)),shared(),$default()];},d:['ceylon.language','List','$m','includes']};};
            $$list.inclusions=function (sublist$338){
                var $$list=this;
                return Comprehension(function(){
                    var it$339=(function(){var tmpvar$341=$$list.size;
                    if (tmpvar$341>0){
                    var tmpvar$342=(0);
                    var tmpvar$343=tmpvar$342;
                    for (var i=1; i<tmpvar$341; i++){tmpvar$343=tmpvar$343.successor;}
                    return Range(tmpvar$342,tmpvar$343,{Element:{t:Integer}})
                    }else return getEmpty();}()).iterator();
                    var index$340=getFinished();
                    var next$index$340=function(){
                        while((index$340=it$339.next())!==getFinished()){
                            if($$list.includesAt(index$340,sublist$338)){
                                return index$340;
                            }
                        }
                        return getFinished();
                    }
                    next$index$340();
                    return function(){
                        if(index$340!==getFinished()){
                            var index$340$344=index$340;
                            var tmpvar$345=index$340$344;
                            next$index$340();
                            return tmpvar$345;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:{t:Integer}});
            };
            $$list.inclusions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Integer}}},$ps:[{$nm:'sublist',$mt:'prm',$t:{t:List,a:{Element:{t:Anything}}},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("The indexes in this list at which the given list \noccurs.",57)),shared(),$default()];},d:['ceylon.language','List','$m','inclusions']};};
            $$list.firstInclusion=function firstInclusion(sublist$346){
                var $$list=this;
                var it$347 = (function(){var tmpvar$349=$$list.size;
                if (tmpvar$349>0){
                var tmpvar$350=(0);
                var tmpvar$351=tmpvar$350;
                for (var i=1; i<tmpvar$349; i++){tmpvar$351=tmpvar$351.successor;}
                return Range(tmpvar$350,tmpvar$351,{Element:{t:Integer}})
                }else return getEmpty();}()).iterator();
                var index$348;while ((index$348=it$347.next())!==getFinished()){
                    if($$list.includesAt(index$348,sublist$346)){
                        return index$348;
                    }
                }
                if (getFinished() === index$348){
                    return null;
                }
            };$$list.firstInclusion.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},$ps:[{$nm:'sublist',$mt:'prm',$t:{t:List,a:{Element:{t:Anything}}},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("The first index in this list at which the given list \noccurs.",61)),shared(),$default()];},d:['ceylon.language','List','$m','firstInclusion']};};
            $$list.lastInclusion=function lastInclusion(sublist$352){
                var $$list=this;
                var it$353 = (function(){var tmpvar$355=$$list.size;
                if (tmpvar$355>0){
                var tmpvar$356=(0);
                var tmpvar$357=tmpvar$356;
                for (var i=1; i<tmpvar$355; i++){tmpvar$357=tmpvar$357.successor;}
                return Range(tmpvar$356,tmpvar$357,{Element:{t:Integer}})
                }else return getEmpty();}()).reversed.iterator();
                var index$354;while ((index$354=it$353.next())!==getFinished()){
                    if($$list.includesAt(index$354,sublist$352)){
                        return index$354;
                    }
                }
                if (getFinished() === index$354){
                    return null;
                }
            };$$list.lastInclusion.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},$ps:[{$nm:'sublist',$mt:'prm',$t:{t:List,a:{Element:{t:Anything}}},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("The last index in this list at which the given list \noccurs.",60)),shared(),$default()];},d:['ceylon.language','List','$m','lastInclusion']};};
            $$list.occursAt=function occursAt(index$358,element$359){
                var $$list=this;
                var elem$360=$$list.get(index$358);
                $prop$getElem$360={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},d:['ceylon.language','List','$m','occursAt','$at','elem']};}};
                $prop$getElem$360.get=function(){return elem$360};
                var element$361;
                if((element$361=element$359)!==null){
                    var elem$362;
                    if((elem$362=elem$360)!==null){
                        return elem$362.equals(element$361);
                    }else {
                        return false;
                    }
                }else {
                    return exists(elem$360);
                }
            };$$list.occursAt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'index',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'element',$mt:'prm',$t:{t:Anything},$an:function(){return[];}}],$cont:List,$an:function(){return[shared(),$default()];},d:['ceylon.language','List','$m','occursAt']};};
            $$list.occurs=function occurs(element$363){
                var $$list=this;
                var it$364 = (function(){var tmpvar$366=$$list.size;
                if (tmpvar$366>0){
                var tmpvar$367=(0);
                var tmpvar$368=tmpvar$367;
                for (var i=1; i<tmpvar$366; i++){tmpvar$368=tmpvar$368.successor;}
                return Range(tmpvar$367,tmpvar$368,{Element:{t:Integer}})
                }else return getEmpty();}()).iterator();
                var index$365;while ((index$365=it$364.next())!==getFinished()){
                    if($$list.occursAt(index$365,element$363)){
                        return true;
                    }
                }
                return false;
            };$$list.occurs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'element',$mt:'prm',$t:{t:Anything},$an:function(){return[];}}],$cont:List,$an:function(){return[shared(),$default()];},d:['ceylon.language','List','$m','occurs']};};
            $$list.occurrences=function (element$369){
                var $$list=this;
                return Comprehension(function(){
                    var it$370=(function(){var tmpvar$372=$$list.size;
                    if (tmpvar$372>0){
                    var tmpvar$373=(0);
                    var tmpvar$374=tmpvar$373;
                    for (var i=1; i<tmpvar$372; i++){tmpvar$374=tmpvar$374.successor;}
                    return Range(tmpvar$373,tmpvar$374,{Element:{t:Integer}})
                    }else return getEmpty();}()).iterator();
                    var index$371=getFinished();
                    var next$index$371=function(){
                        while((index$371=it$370.next())!==getFinished()){
                            if($$list.occursAt(index$371,element$369)){
                                return index$371;
                            }
                        }
                        return getFinished();
                    }
                    next$index$371();
                    return function(){
                        if(index$371!==getFinished()){
                            var index$371$375=index$371;
                            var tmpvar$376=index$371$375;
                            next$index$371();
                            return tmpvar$376;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:{t:Integer}});
            };
            $$list.occurrences.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Integer}}},$ps:[{$nm:'element',$mt:'prm',$t:{t:Anything},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("The indexes in this list at which the given element \noccurs.",60)),shared(),$default()];},d:['ceylon.language','List','$m','occurrences']};};
            $$list.firstOccurrence=function firstOccurrence(element$377){
                var $$list=this;
                var it$378 = (function(){var tmpvar$380=$$list.size;
                if (tmpvar$380>0){
                var tmpvar$381=(0);
                var tmpvar$382=tmpvar$381;
                for (var i=1; i<tmpvar$380; i++){tmpvar$382=tmpvar$382.successor;}
                return Range(tmpvar$381,tmpvar$382,{Element:{t:Integer}})
                }else return getEmpty();}()).iterator();
                var index$379;while ((index$379=it$378.next())!==getFinished()){
                    if($$list.occursAt(index$379,element$377)){
                        return index$379;
                    }
                }
                if (getFinished() === index$379){
                    return null;
                }
            };$$list.firstOccurrence.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},$ps:[{$nm:'element',$mt:'prm',$t:{t:Anything},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("The first index in this list at which the given element \noccurs.",64)),shared(),$default()];},d:['ceylon.language','List','$m','firstOccurrence']};};
            $$list.lastOccurrence=function lastOccurrence(element$383){
                var $$list=this;
                var it$384 = (function(){var tmpvar$386=$$list.size;
                if (tmpvar$386>0){
                var tmpvar$387=(0);
                var tmpvar$388=tmpvar$387;
                for (var i=1; i<tmpvar$386; i++){tmpvar$388=tmpvar$388.successor;}
                return Range(tmpvar$387,tmpvar$388,{Element:{t:Integer}})
                }else return getEmpty();}()).reversed.iterator();
                var index$385;while ((index$385=it$384.next())!==getFinished()){
                    if($$list.occursAt(index$385,element$383)){
                        return index$385;
                    }
                }
                if (getFinished() === index$385){
                    return null;
                }
            };$$list.lastOccurrence.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},$ps:[{$nm:'element',$mt:'prm',$t:{t:Anything},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("The last index in this list at which the given element \noccurs.",63)),shared(),$default()];},d:['ceylon.language','List','$m','lastOccurrence']};};
            $$list.indexes=function (selecting$389){
                var $$list=this;
                return Comprehension(function(){
                    var it$390=(function(){var tmpvar$392=$$list.size;
                    if (tmpvar$392>0){
                    var tmpvar$393=(0);
                    var tmpvar$394=tmpvar$393;
                    for (var i=1; i<tmpvar$392; i++){tmpvar$394=tmpvar$394.successor;}
                    return Range(tmpvar$393,tmpvar$394,{Element:{t:Integer}})
                    }else return getEmpty();}()).iterator();
                    var index$391=getFinished();
                    var next$index$391=function(){
                        while((index$391=it$390.next())!==getFinished()){
                            if(selecting$389((opt$395=$$list.get(index$391),opt$395!==null?opt$395:getNothing()))){
                                return index$391;
                            }
                        }
                        return getFinished();
                    }
                    next$index$391();
                    return function(){
                        if(index$391!==getFinished()){
                            var index$391$396=index$391;
                            var tmpvar$397=index$391$396;
                            next$index$391();
                            return tmpvar$397;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:{t:Integer}});
            };
            $$list.indexes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Integer}}},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[doc("The predicate the indexed elements must satisfy")];}}],$cont:List,$an:function(){return[doc(String$("The indexes in this list for which the element \nsatisfies the given predicate.",78)),shared(),$default()];},d:['ceylon.language','List','$m','indexes']};};
            $$list.trim=function trim(trimming$398){
                var $$list=this;
                var l$399;
                if((l$399=$$list.lastIndex)!==null){
                    var from$400=(-(1));
                    var setFrom$400=function(from$401){return from$400=from$401;};
                    $prop$getFrom$400={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','List','$m','trim','$at','from']};}};
                    $prop$getFrom$400.get=function(){return from$400};
                    $prop$getFrom$400.set=setFrom$400;
                    if (setFrom$400.$$metamodel$$===undefined)setFrom$400.$$metamodel$$=$prop$getFrom$400.$$metamodel$$;
                    var to$402=(-(1));
                    var setTo$402=function(to$403){return to$402=to$403;};
                    $prop$getTo$402={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','List','$m','trim','$at','to']};}};
                    $prop$getTo$402.get=function(){return to$402};
                    $prop$getTo$402.set=setTo$402;
                    if (setTo$402.$$metamodel$$===undefined)setTo$402.$$metamodel$$=$prop$getTo$402.$$metamodel$$;
                    var it$404 = Range((0),l$399,{Element:{t:Integer}}).iterator();
                    var index$405;while ((index$405=it$404.next())!==getFinished()){
                        if((!trimming$398((opt$406=$$list.get(index$405),opt$406!==null?opt$406:getNothing())))){
                            from$400=index$405;
                            break;
                        }
                        var opt$406;
                    }
                    if (getFinished() === index$405){
                        return getEmpty();
                    }
                    var it$407 = Range(l$399,(0),{Element:{t:Integer}}).iterator();
                    var index$408;while ((index$408=it$407.next())!==getFinished()){
                        if((!trimming$398((opt$409=$$list.get(index$408),opt$409!==null?opt$409:getNothing())))){
                            to$402=index$408;
                            break;
                        }
                        var opt$409;
                    }
                    if (getFinished() === index$408){
                        return getEmpty();
                    }
                    return $$list.span(from$400,to$402);
                }else {
                    return getEmpty();
                }
            };$$list.trim.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$ps:[{$nm:'trimming',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:List,$an:function(){return[shared(),$default()];},d:['ceylon.language','List','$m','trim']};};
            $$list.trimLeading=function trimLeading(trimming$410){
                var $$list=this;
                var l$411;
                if((l$411=$$list.lastIndex)!==null){
                    var it$412 = Range((0),l$411,{Element:{t:Integer}}).iterator();
                    var index$413;while ((index$413=it$412.next())!==getFinished()){
                        if((!trimming$410((opt$414=$$list.get(index$413),opt$414!==null?opt$414:getNothing())))){
                            return $$list.span(index$413,l$411);
                        }
                        var opt$414;
                    }
                }
                return getEmpty();
            };$$list.trimLeading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$ps:[{$nm:'trimming',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:List,$an:function(){return[shared(),$default()];},d:['ceylon.language','List','$m','trimLeading']};};
            $$list.trimTrailing=function trimTrailing(trimming$415){
                var $$list=this;
                var l$416;
                if((l$416=$$list.lastIndex)!==null){
                    var it$417 = Range(l$416,(0),{Element:{t:Integer}}).iterator();
                    var index$418;while ((index$418=it$417.next())!==getFinished()){
                        if((!trimming$415((opt$419=$$list.get(index$418),opt$419!==null?opt$419:getNothing())))){
                            return $$list.span((0),index$418);
                        }
                        var opt$419;
                    }
                }
                return getEmpty();
            };$$list.trimTrailing.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$ps:[{$nm:'trimming',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:List,$an:function(){return[shared(),$default()];},d:['ceylon.language','List','$m','trimTrailing']};};
            $$list.initial=function (length$420){
                var $$list=this;
                return $$list.segment((0),length$420);
            };
            $$list.initial.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$ps:[{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("Select the first elements of this list, returning a \nlist no longer than the given length. If this list is \nshorter than the given length, return this list. \nOtherwise return a list of the given length.",202)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),List.$$.prototype.terminal)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','List','$m','initial']};};
            $$list.terminal=function terminal(length$421){
                var $$list=this;
                var l$422;
                if((l$422=$$list.lastIndex)!==null&&length$421.compare((0)).equals(getLarger())){
                    return $$list.span(l$422.minus(length$421).plus((1)),l$422);
                }else {
                    return getEmpty();
                }
            };$$list.terminal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$ps:[{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:List,$an:function(){return[doc(String$("Select the last elements of the list, returning a list \nno longer than the given length. If this list is \nshorter than the given length, return this list. \nOtherwise return a list of the given length.",200)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),List.$$.prototype.initial)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared(),$default()];},d:['ceylon.language','List','$m','terminal']};};
        })(List.$$.prototype);
    }
    return List;
}
exports.$init$List=$init$List;
$init$List();
var opt$279,opt$283,opt$395;
function Tuple(first, rest, $$targs$$,$$tuple){
    $init$Tuple();
    if ($$tuple===undefined)$$tuple=new Tuple.$$;
    set_type_args($$tuple,$$targs$$);
    Object$($$tuple);
    Sequence($$tuple.$$targs$$===undefined?$$targs$$:{Element:$$tuple.$$targs$$.Element},$$tuple);
    Cloneable($$tuple.$$targs$$===undefined?$$targs$$:{Clone:{t:Tuple,a:{Rest:$$tuple.$$targs$$.Rest,First:$$tuple.$$targs$$.First,Element:$$tuple.$$targs$$.Element}}},$$tuple);
    add_type_arg($$tuple,'Clone',{t:Tuple,a:{Rest:$$tuple.$$targs$$.Rest,First:$$tuple.$$targs$$.First,Element:$$tuple.$$targs$$.Element}});
    $$tuple.first$423_=first;
    $$tuple.$prop$getFirst={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'First',$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','first']};}};
    $$tuple.$prop$getFirst.get=function(){return first};
    $$tuple.rest$424_=rest;
    $$tuple.$prop$getRest={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Rest',$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','rest']};}};
    $$tuple.$prop$getRest.get=function(){return rest};
    $$tuple.$prop$getSize={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','size']};}};
    $$tuple.$prop$getSize.get=function(){return size};
    $$tuple.$prop$getReversed={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:'Element'}},$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','reversed']};}};
    $$tuple.$prop$getReversed.get=function(){return reversed};
    $$tuple.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Tuple,a:{Rest:'Rest',First:'First',Element:'Element'}},$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','clone']};}};
    $$tuple.$prop$getClone.get=function(){return clone};
    return $$tuple;
}
Tuple.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Object$},$tp:{Element:{'var':'out'},First:{'var':'out','satisfies':['Element']},Rest:{'var':'out','satisfies':[{t:Sequential,a:{Element:'Element'}}],'def':{t:Empty}}},satisfies:[{t:Sequence,a:{Element:'Element'}},{t:Cloneable,a:{Clone:{t:Tuple,a:{Rest:'Rest',First:'First',Element:'Element'}}}}],$an:function(){return[doc(String$("A _tuple_ is a typed linked list. Each instance of \n`Tuple` represents the value and type of a single link.\nThe attributes `first` and `rest` allow us to retrieve\na value form the list without losing its static type \ninformation.\n\n    value point = Tuple(0.0, Tuple(0.0, Tuple(\"origin\")));\n    Float x = point.first;\n    Float y = point.rest.first;\n    String label = point.rest.rest.first;\n\nUsually, we abbreviate code involving tuples.\n\n    [Float,Float,String] point = [0.0, 0.0, \"origin\"];\n    Float x = point[0];\n    Float y = point[1];\n    String label = point[2];\n\nA list of types enclosed in brackets is an abbreviated \ntuple type. An instance of `Tuple` may be constructed \nby surrounding a value list in brackets:\n\n    [String,String] words = [\"hello\", \"world\"];\n\nThe index operator with a literal integer argument is a \nshortcut for a chain of evaluations of `rest` and \n`first`. For example, `point[1]` means `point.rest.first`.\n\nA _terminated_ tuple type is a tuple where the type of\nthe last link in the chain is `Empty`. An _unterminated_ \ntuple type is a tuple where the type of the last link\nin the chain is `Sequence` or `Sequential`. Thus, a \nterminated tuple type has a length that is known\nstatically. For an unterminated tuple type only a lower\nbound on its length is known statically.\n\nHere, `point` is an unterminated tuple:\n\n    String[] labels = ... ;\n    [Float,Float,String*] point = [0.0, 0.0, *labels];\n    Float x = point[0];\n    Float y = point[1];\n    String? firstLabel = point[2];\n    String[] allLabels = point[2...];",1553)),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared(),$final()];},d:['ceylon.language','Tuple']};};
exports.Tuple=Tuple;
function $init$Tuple(){
    if (Tuple.$$===undefined){
        initTypeProto(Tuple,'ceylon.language::Tuple',Object$,$init$Sequence(),$init$Cloneable());
        (function($$tuple){
            defineAttr($$tuple,'first',function(){return this.first$423_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'First',$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','first']};});
            defineAttr($$tuple,'rest',function(){return this.rest$424_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'Rest',$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','rest']};});
            defineAttr($$tuple,'size',function(){
                var $$tuple=this;
                return (1).plus($$tuple.rest.size);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','size']};});
            $$tuple.get=function get(index$425){
                var $$tuple=this;
                
                var case$426=index$425.compare((0));
                if (case$426===getSmaller()) {
                    return null;
                }else if (case$426===getEqual()) {
                    return $$tuple.first;
                }else if (case$426===getLarger()) {
                    return $$tuple.rest.get(index$425.minus((1)));
                }
            };$$tuple.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$m','get']};};
            defineAttr($$tuple,'lastIndex',function(){
                var $$tuple=this;
                var restLastIndex$427;
                if((restLastIndex$427=$$tuple.rest.lastIndex)!==null){
                    return restLastIndex$427.plus((1));
                }else {
                    return (0);
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','lastIndex']};});defineAttr($$tuple,'last',function(){
                var $$tuple=this;
                var rest$428;
                if(nonempty((rest$428=$$tuple.rest))){
                    return rest$428.last;
                }else {
                    return $$tuple.first;
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','last']};});defineAttr($$tuple,'reversed',function(){
                var $$tuple=this;
                return $$tuple.rest.reversed.withTrailing($$tuple.first,{Other:$$tuple.$$targs$$.First});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:'Element'}},$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','reversed']};});
            $$tuple.segment=function segment(from$429,length$430){
                var $$tuple=this;
                if((length$430.compare((0))!==getLarger())){
                    return getEmpty();
                }
                var realFrom$431=(opt$432=(from$429.compare((0)).equals(getSmaller())?(0):null),opt$432!==null?opt$432:from$429);
                $prop$getRealFrom$431={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','Tuple','$m','segment','$at','realFrom']};}};
                $prop$getRealFrom$431.get=function(){return realFrom$431};
                var opt$432;
                if(realFrom$431.equals((0))){
                    return (opt$433=(length$430.equals((1))?Tuple($$tuple.first,getEmpty(),{Rest:{t:Empty},First:$$tuple.$$targs$$.First,Element:$$tuple.$$targs$$.First}):null),opt$433!==null?opt$433:$$tuple.rest.segment((0),length$430.plus(realFrom$431).minus((1))).withLeading($$tuple.first,{Other:$$tuple.$$targs$$.First}));
                    var opt$433;
                }
                return $$tuple.rest.segment(realFrom$431.minus((1)),length$430);
            };$$tuple.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$m','segment']};};
            $$tuple.span=function span(from$434,end$435){
                var $$tuple=this;
                if((from$434.compare((0)).equals(getSmaller())&&end$435.compare((0)).equals(getSmaller()))){
                    return getEmpty();
                }
                var realFrom$436=(opt$437=(from$434.compare((0)).equals(getSmaller())?(0):null),opt$437!==null?opt$437:from$434);
                $prop$getRealFrom$436={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','Tuple','$m','span','$at','realFrom']};}};
                $prop$getRealFrom$436.get=function(){return realFrom$436};
                var opt$437;
                var realEnd$438=(opt$439=(end$435.compare((0)).equals(getSmaller())?(0):null),opt$439!==null?opt$439:end$435);
                $prop$getRealEnd$438={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','Tuple','$m','span','$at','realEnd']};}};
                $prop$getRealEnd$438.get=function(){return realEnd$438};
                var opt$439;
                return (opt$440=((realFrom$436.compare(realEnd$438)!==getLarger())?$$tuple.segment(from$434,realEnd$438.minus(realFrom$436).plus((1))):null),opt$440!==null?opt$440:$$tuple.segment(realEnd$438,realFrom$436.minus(realEnd$438).plus((1))).reversed.sequence);
                var opt$440;
            };$$tuple.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'end',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$m','span']};};
            $$tuple.spanTo=function (to$441){
                var $$tuple=this;
                return (opt$442=(to$441.compare((0)).equals(getSmaller())?getEmpty():null),opt$442!==null?opt$442:$$tuple.span((0),to$441));
            };
            $$tuple.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'to',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$m','spanTo']};};
            $$tuple.spanFrom=function (from$443){
                var $$tuple=this;
                return $$tuple.span(from$443,$$tuple.size);
            };
            $$tuple.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$m','spanFrom']};};
            defineAttr($$tuple,'clone',function(){
                var $$tuple=this;
                return $$tuple;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Tuple,a:{Rest:'Rest',First:'First',Element:'Element'}},$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$at','clone']};});
            $$tuple.iterator=function iterator(){
                var $$tuple=this;
                function iterator$444($$targs$$){
                    var $$iterator$444=new iterator$444.$$;
                    $$iterator$444.$$targs$$=$$targs$$;
                    Iterator({Element:$$tuple.$$targs$$.Element},$$iterator$444);
                    $$iterator$444.current$445_=$$tuple;
                    $$iterator$444.$prop$getCurrent$445={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:iterator$444,$an:function(){return[variable()];},d:['ceylon.language','Tuple','$m','iterator','$o','iterator','$at','current']};}};
                    $$iterator$444.$prop$getCurrent$445.get=function(){return current$445};
                    return $$iterator$444;
                }
                function $init$iterator$444(){
                    if (iterator$444.$$===undefined){
                        initTypeProto(iterator$444,'ceylon.language::Tuple.iterator.iterator',Basic,$init$Iterator());
                    }
                    return iterator$444;
                }
                $init$iterator$444();
                (function($$iterator$444){
                    defineAttr($$iterator$444,'current$445',function(){return this.current$445_;},function(current$446){return this.current$445_=current$446;},function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:iterator$444,$an:function(){return[variable()];},d:['ceylon.language','Tuple','$m','iterator','$o','iterator','$at','current']};});
                    $$iterator$444.next=function next(){
                        var $$iterator$444=this;
                        var c$447;
                        if(nonempty((c$447=$$iterator$444.current$445))){
                            $$iterator$444.current$445=c$447.rest;
                            return c$447.first;
                        }else {
                            return getFinished();
                        }
                    };$$iterator$444.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$ps:[],$cont:iterator$444,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$m','iterator','$o','iterator','$m','next']};};
                })(iterator$444.$$.prototype);
                var iterator$448=iterator$444({Element:$$tuple.$$targs$$.Element});
                var getIterator$448=function(){
                    return iterator$448;
                }
                getIterator$448.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterator$444},d:['ceylon.language','Tuple','$m','iterator','$at','iterator']};};
                $prop$getIterator$448={get:getIterator$448,$$metamodel$$:getIterator$448.$$metamodel$$};
                return getIterator$448();
            };$$tuple.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$m','iterator']};};
            $$tuple.contains=function contains(element$449){
                var $$tuple=this;
                var first$450;
                if((first$450=$$tuple.first)!==null&&first$450.equals(element$449)){
                    return true;
                }else {
                    return $$tuple.rest.contains(element$449);
                }
            };$$tuple.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'element',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Tuple,$an:function(){return[shared(),actual()];},d:['ceylon.language','Tuple','$m','contains']};};
            $$tuple.withLeading=function (element$451,$$$mptypes){
                var $$tuple=this;
                return Tuple(element$451,$$tuple,{Rest:{t:Tuple,a:{Rest:$$tuple.$$targs$$.Rest,First:$$tuple.$$targs$$.First,Element:$$tuple.$$targs$$.Element}},First:$$$mptypes.Other,Element:{ t:'u', l:[$$$mptypes.Other,$$tuple.$$targs$$.Element]}});
            };
            $$tuple.withLeading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:'Rest',First:'First',Element:'Element'}},First:'Other',Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'element',$mt:'prm',$t:'Other',$an:function(){return[doc("The first element of the resulting tuple.")];}}],$cont:Tuple,$tp:{Other:{}},$an:function(){return[doc(String$("Returns a new tuple that starts with the specified\nelement, followed by the elements of this tuple.",99)),shared(),actual()];},d:['ceylon.language','Tuple','$m','withLeading']};};
        })(Tuple.$$.prototype);
    }
    return Tuple;
}
exports.$init$Tuple=$init$Tuple;
$init$Tuple();
var opt$442;
function ChainedIterator(first$452, second$453, $$targs$$,$$chainedIterator){
    $init$ChainedIterator();
    if ($$chainedIterator===undefined)$$chainedIterator=new ChainedIterator.$$;
    set_type_args($$chainedIterator,$$targs$$);
    $$chainedIterator.first$452_=first$452;
    $$chainedIterator.second$453_=second$453;
    Iterator($$chainedIterator.$$targs$$===undefined?$$targs$$:{Element:{ t:'u', l:[$$chainedIterator.$$targs$$.Element,$$chainedIterator.$$targs$$.Other]}},$$chainedIterator);
    $$chainedIterator.iter$454_=$$chainedIterator.first$452.iterator();
    $$chainedIterator.$prop$getIter$454={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:{ t:'u', l:['Element','Other']}}},$cont:ChainedIterator,$an:function(){return[variable()];},d:['ceylon.language','ChainedIterator','$at','iter']};}};
    $$chainedIterator.$prop$getIter$454.get=function(){return iter$454};
    $$chainedIterator.more$455_=true;
    $$chainedIterator.$prop$getMore$455={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:ChainedIterator,$an:function(){return[variable()];},d:['ceylon.language','ChainedIterator','$at','more']};}};
    $$chainedIterator.$prop$getMore$455.get=function(){return more$455};
    return $$chainedIterator;
}
ChainedIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Basic},$tp:{Element:{'var':'out'},Other:{'var':'out'}},satisfies:[{t:Iterator,a:{Element:{ t:'u', l:['Element','Other']}}}],$an:function(){return[doc(String$("An `Iterator` that returns the elements of two\n`Iterable`s, as if they were chained together.",93)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Iterable.$$.prototype.chain)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),by([String$("Enrique Zamudio",15)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}}))];},d:['ceylon.language','ChainedIterator']};};
function $init$ChainedIterator(){
    if (ChainedIterator.$$===undefined){
        initTypeProto(ChainedIterator,'ceylon.language::ChainedIterator',Basic,$init$Iterator());
        (function($$chainedIterator){
            defineAttr($$chainedIterator,'iter$454',function(){return this.iter$454_;},function(iter$456){return this.iter$454_=iter$456;},function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:{ t:'u', l:['Element','Other']}}},$cont:ChainedIterator,$an:function(){return[variable()];},d:['ceylon.language','ChainedIterator','$at','iter']};});
            defineAttr($$chainedIterator,'more$455',function(){return this.more$455_;},function(more$457){return this.more$455_=more$457;},function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:ChainedIterator,$an:function(){return[variable()];},d:['ceylon.language','ChainedIterator','$at','more']};});
            $$chainedIterator.next=function next(){
                var $$chainedIterator=this;
                var e$458=$$chainedIterator.iter$454.next();
                var setE$458=function(e$459){return e$458=e$459;};
                $prop$getE$458={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element','Other',{t:Finished}]},$an:function(){return[variable()];},d:['ceylon.language','ChainedIterator','$m','next','$at','e']};}};
                $prop$getE$458.get=function(){return e$458};
                $prop$getE$458.set=setE$458;
                if (setE$458.$$metamodel$$===undefined)setE$458.$$metamodel$$=$prop$getE$458.$$metamodel$$;
                var f$460;
                if(isOfType((f$460=e$458),{t:Finished})){
                    if($$chainedIterator.more$455){
                        $$chainedIterator.iter$454=$$chainedIterator.second$453.iterator();
                        $$chainedIterator.more$455=false;
                        e$458=$$chainedIterator.iter$454.next();
                    }
                }
                return e$458;
            };$$chainedIterator.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element','Other',{t:Finished}]},$ps:[],$cont:ChainedIterator,$an:function(){return[shared(),actual()];},d:['ceylon.language','ChainedIterator','$m','next']};};
            defineAttr($$chainedIterator,'first$452',function(){return this.first$452_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$cont:ChainedIterator,d:['ceylon.language','ChainedIterator','$at','first']};});
            defineAttr($$chainedIterator,'second$453',function(){return this.second$453_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Other'}},$cont:ChainedIterator,d:['ceylon.language','ChainedIterator','$at','second']};});
        })(ChainedIterator.$$.prototype);
    }
    return ChainedIterator;
}
exports.$init$ChainedIterator=$init$ChainedIterator;
$init$ChainedIterator();
function Entry(key, item, $$targs$$,$$entry){
    $init$Entry();
    if ($$entry===undefined)$$entry=new Entry.$$;
    set_type_args($$entry,$$targs$$);
    Object$($$entry);
    $$entry.key$461_=key;
    $$entry.$prop$getKey={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Key',$cont:Entry,$an:function(){return[doc(String$("The key used to access the entry.",33)),shared()];},d:['ceylon.language','Entry','$at','key']};}};
    $$entry.$prop$getKey.get=function(){return key};
    $$entry.item$462_=item;
    $$entry.$prop$getItem={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Item',$cont:Entry,$an:function(){return[doc(String$("The value associated with the key.",34)),shared()];},d:['ceylon.language','Entry','$at','item']};}};
    $$entry.$prop$getItem.get=function(){return item};
    $$entry.$prop$getHash={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Entry,$an:function(){return[shared(),actual()];},d:['ceylon.language','Entry','$at','hash']};}};
    $$entry.$prop$getHash.get=function(){return hash};
    $$entry.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Entry,$an:function(){return[doc(String$("Returns a description of the entry in the form \n`key->item`.",60)),shared(),actual()];},d:['ceylon.language','Entry','$at','string']};}};
    $$entry.$prop$getString.get=function(){return string};
    return $$entry;
}
Entry.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Object$},$tp:{Key:{'var':'out','satisfies':[{t:Object$}]},Item:{'var':'out','satisfies':[{t:Object$}]}},satisfies:[],$an:function(){return[doc(String$("A pair containing a _key_ and an associated value called \nthe _item_. Used primarily to represent the elements of \na `Map`. The type `Entry<Key,Item>` may be abbreviated \n`Key->Item`. An instance of `Entry` may be constructed \nusing the `->` operator:\n\n    String->Person entry = person.name->person;\n",301)),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared(),$final()];},d:['ceylon.language','Entry']};};
exports.Entry=Entry;
function $init$Entry(){
    if (Entry.$$===undefined){
        initTypeProto(Entry,'ceylon.language::Entry',Object$);
        (function($$entry){
            defineAttr($$entry,'key',function(){return this.key$461_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'Key',$cont:Entry,$an:function(){return[doc(String$("The key used to access the entry.",33)),shared()];},d:['ceylon.language','Entry','$at','key']};});
            defineAttr($$entry,'item',function(){return this.item$462_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'Item',$cont:Entry,$an:function(){return[doc(String$("The value associated with the key.",34)),shared()];},d:['ceylon.language','Entry','$at','item']};});
            $$entry.equals=function equals(that$463){
                var $$entry=this;
                var that$464;
                if(isOfType((that$464=that$463),{t:Entry,a:{Key:{t:Object$},Item:{t:Object$}}})){
                    return ($$entry.key.equals(that$464.key)&&$$entry.item.equals(that$464.item));
                }else {
                    return false;
                }
            };$$entry.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'that',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Entry,$an:function(){return[doc(String$("Determines if this entry is equal to the given\nentry. Two entries are equal if they have the same\nkey and the same value.",121)),shared(),actual()];},d:['ceylon.language','Entry','$m','equals']};};
            defineAttr($$entry,'hash',function(){
                var $$entry=this;
                return (31).plus($$entry.key.hash).times((31)).plus($$entry.item.hash);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Entry,$an:function(){return[shared(),actual()];},d:['ceylon.language','Entry','$at','hash']};});
            defineAttr($$entry,'string',function(){
                var $$entry=this;
                return StringBuilder().appendAll([$$entry.key.string,String$("->",2),$$entry.item.string]).string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Entry,$an:function(){return[doc(String$("Returns a description of the entry in the form \n`key->item`.",60)),shared(),actual()];},d:['ceylon.language','Entry','$at','string']};});
        })(Entry.$$.prototype);
    }
    return Entry;
}
exports.$init$Entry=$init$Entry;
$init$Entry();
function Comparable($$targs$$,$$comparable){
    set_type_args($$comparable,$$targs$$);
}
Comparable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Other:{'var':'in','satisfies':[{t:Comparable,a:{Other:'Other'}}]}},satisfies:[],$an:function(){return[doc(String$("The general contract for values whose magnitude can be \ncompared. `Comparable` imposes a total ordering upon\ninstances of any type that satisfies the interface.\nIf a type `T` satisfies `Comparable<T>`, then instances\nof `T` may be compared using the comparison operators\n`<`, `>`, `<=`, >=`, and `<=>`.\n\nThe total order of a type must be consistent with the \ndefinition of equality for the type. That is, there\nare three mutually exclusive possibilities:\n\n- `x<y`,\n- `x>y`, or\n- `x==y`",485)),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Comparable']};};
exports.Comparable=Comparable;
function $init$Comparable(){
    if (Comparable.$$===undefined){
        initTypeProto(Comparable,'ceylon.language::Comparable');
        (function($$comparable){
        })(Comparable.$$.prototype);
    }
    return Comparable;
}
exports.$init$Comparable=$init$Comparable;
$init$Comparable();
function Invertable($$targs$$,$$invertable){
    set_type_args($$invertable,$$targs$$);
}
Invertable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Inverse:{'var':'out','satisfies':[{t:Invertable,a:{Inverse:'Inverse'}}]}},satisfies:[],$an:function(){return[doc(String$("Abstraction of types which support a unary additive inversion\noperation. For a numeric type, this should return the \nnegative of the argument value. Note that the type \nparameter of this interface is not restricted to be a \nself type, in order to accommodate the possibility of \ntypes whose additive inverse can only be expressed in terms of \na wider type.",356)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Integer),$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Float)].reifyCeylonType({Absent:{t:Null},Element:{t:ClassDeclaration$meta$declaration}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Invertable']};};
exports.Invertable=Invertable;
function $init$Invertable(){
    if (Invertable.$$===undefined){
        initTypeProto(Invertable,'ceylon.language::Invertable');
        (function($$invertable){
            $$invertable.$prop$getNegativeValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Inverse',$cont:Invertable,$an:function(){return[doc(String$("The additive inverse of the value, which may be expressed\nas an instance of a wider type.",89)),shared(),formal()];},d:['ceylon.language','Invertable','$at','negativeValue']};}};
            $$invertable.$prop$getPositiveValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Inverse',$cont:Invertable,$an:function(){return[doc(String$("The value itself, expressed as an instance of the\nwider type.",61)),shared(),formal()];},d:['ceylon.language','Invertable','$at','positiveValue']};}};
        })(Invertable.$$.prototype);
    }
    return Invertable;
}
exports.$init$Invertable=$init$Invertable;
$init$Invertable();
function Summable($$targs$$,$$summable){
    set_type_args($$summable,$$targs$$);
}
Summable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Other:{'satisfies':[{t:Summable,a:{Other:'Other'}}]}},satisfies:[],$an:function(){return[doc(String$("Abstraction of types which support a binary addition\noperator. For numeric types, this is just familiar \nnumeric addition. For strings, it is string \nconcatenation. In general, the addition operation \nshould be a binary associative operation.",242)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),String),$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Numeric)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:ClassDeclaration$meta$declaration},{t:InterfaceDeclaration$meta$declaration}]}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Summable']};};
exports.Summable=Summable;
function $init$Summable(){
    if (Summable.$$===undefined){
        initTypeProto(Summable,'ceylon.language::Summable');
        (function($$summable){
        })(Summable.$$.prototype);
    }
    return Summable;
}
exports.$init$Summable=$init$Summable;
$init$Summable();
function Ordinal($$targs$$,$$ordinal){
    set_type_args($$ordinal,$$targs$$);
}
Ordinal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Other:{'var':'out','satisfies':[{t:Ordinal,a:{Other:'Other'}}]}},satisfies:[],$an:function(){return[doc(String$("Abstraction of ordinal types, that is, types with \nsuccessor and predecessor operations, including\n`Integer` and other `Integral` numeric types.\n`Character` is also considered an ordinal type. \n`Ordinal` types may be used to generate a `Range`.",244)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Character),$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Integer),$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Integral),$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Range)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:ClassDeclaration$meta$declaration},{t:InterfaceDeclaration$meta$declaration}]}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Ordinal']};};
exports.Ordinal=Ordinal;
function $init$Ordinal(){
    if (Ordinal.$$===undefined){
        initTypeProto(Ordinal,'ceylon.language::Ordinal');
        (function($$ordinal){
            $$ordinal.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Other',$cont:Ordinal,$an:function(){return[doc(String$("The successor of this value.",28)),shared(),formal()];},d:['ceylon.language','Ordinal','$at','successor']};}};
            $$ordinal.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Other',$cont:Ordinal,$an:function(){return[doc(String$("The predecessor of this value.",30)),shared(),formal()];},d:['ceylon.language','Ordinal','$at','predecessor']};}};
        })(Ordinal.$$.prototype);
    }
    return Ordinal;
}
exports.$init$Ordinal=$init$Ordinal;
$init$Ordinal();
function Enumerable($$targs$$,$$enumerable){
    Ordinal($$enumerable.$$targs$$===undefined?$$targs$$:{Other:$$enumerable.$$targs$$.Other},$$enumerable);
    set_type_args($$enumerable,$$targs$$);
}
Enumerable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Other:{'var':'out','satisfies':[{t:Enumerable,a:{Other:'Other'}}]}},satisfies:[{t:Ordinal,a:{Other:'Other'}}],$an:function(){return[doc(String$("Abstraction of ordinal types whose instances can be \nmapped to the integers or to a range of integers.",102)),shared()];},d:['ceylon.language','Enumerable']};};
exports.Enumerable=Enumerable;
function $init$Enumerable(){
    if (Enumerable.$$===undefined){
        initTypeProto(Enumerable,'ceylon.language::Enumerable',$init$Ordinal());
        (function($$enumerable){
            $$enumerable.$prop$getIntegerValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Enumerable,$an:function(){return[doc(String$("The corresponding integer. The implementation must\nsatisfy these constraints:\n\n    (x.successor).integerValue = x.integerValue+1\n    (x.predecessor).integerValue = x.integerValue-1\n\nfor every instance `x` of the enumerable type.",228)),shared(),formal()];},d:['ceylon.language','Enumerable','$at','integerValue']};}};
        })(Enumerable.$$.prototype);
    }
    return Enumerable;
}
exports.$init$Enumerable=$init$Enumerable;
$init$Enumerable();
function Numeric($$targs$$,$$numeric){
    Summable($$numeric.$$targs$$===undefined?$$targs$$:{Other:$$numeric.$$targs$$.Other},$$numeric);
    Invertable($$numeric.$$targs$$===undefined?$$targs$$:{Inverse:$$numeric.$$targs$$.Other},$$numeric);
    set_type_args($$numeric,$$targs$$);
}
Numeric.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Other:{'satisfies':[{t:Numeric,a:{Other:'Other'}}]}},satisfies:[{t:Summable,a:{Other:'Other'}},{t:Invertable,a:{Inverse:'Other'}}],$an:function(){return[doc(String$("Abstraction of numeric types supporting addition,\nsubtraction, multiplication, and division, including\n`Integer` and `Float`. Additionally, a numeric type \nis expected to define a total order via an \nimplementation of `Comparable`.",231)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Integer),$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Float),$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Comparable)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:ClassDeclaration$meta$declaration},{t:InterfaceDeclaration$meta$declaration}]}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Numeric']};};
exports.Numeric=Numeric;
function $init$Numeric(){
    if (Numeric.$$===undefined){
        initTypeProto(Numeric,'ceylon.language::Numeric',$init$Summable(),$init$Invertable());
        (function($$numeric){
        })(Numeric.$$.prototype);
    }
    return Numeric;
}
exports.$init$Numeric=$init$Numeric;
$init$Numeric();
function Scalar($$targs$$,$$scalar){
    Numeric($$scalar.$$targs$$===undefined?$$targs$$:{Other:$$scalar.$$targs$$.Other},$$scalar);
    Comparable($$scalar.$$targs$$===undefined?$$targs$$:{Other:$$scalar.$$targs$$.Other},$$scalar);
    Number($$scalar);
    set_type_args($$scalar,$$targs$$);
}
Scalar.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Other:{'satisfies':[{t:Scalar,a:{Other:'Other'}}]}},satisfies:[{t:Numeric,a:{Other:'Other'}},{t:Comparable,a:{Other:'Other'}},{t:Number$}],$an:function(){return[doc(String$("Abstraction of numeric types representing scalar\nvalues, including `Integer` and `Float`.",89)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Integer),$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Float)].reifyCeylonType({Absent:{t:Null},Element:{t:ClassDeclaration$meta$declaration}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Scalar']};};
exports.Scalar=Scalar;
function $init$Scalar(){
    if (Scalar.$$===undefined){
        initTypeProto(Scalar,'ceylon.language::Scalar',$init$Numeric(),$init$Comparable(),$init$Number$());
        (function($$scalar){
            $$scalar.$prop$getMagnitude={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Other',$cont:Scalar,$an:function(){return[doc(String$("The magnitude of this number.",29)),shared(),actual(),formal()];},d:['ceylon.language','Scalar','$at','magnitude']};}};
            $$scalar.$prop$getFractionalPart={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Other',$cont:Scalar,$an:function(){return[doc(String$("The fractional part of the number, after truncation \nof the integral part. For integral numeric types,\nthe fractional part is always zero.",138)),shared(),actual(),formal()];},d:['ceylon.language','Scalar','$at','fractionalPart']};}};
            $$scalar.$prop$getWholePart={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Other',$cont:Scalar,$an:function(){return[doc(String$("The integral value of the number after truncation \nof the fractional part. For integral numeric types,\nthe integral value of a number is the number \nitself.",156)),shared(),actual(),formal()];},d:['ceylon.language','Scalar','$at','wholePart']};}};
        })(Scalar.$$.prototype);
    }
    return Scalar;
}
exports.$init$Scalar=$init$Scalar;
$init$Scalar();
function Exponentiable($$targs$$,$$exponentiable){
    Numeric($$exponentiable.$$targs$$===undefined?$$targs$$:{Other:$$exponentiable.$$targs$$.This},$$exponentiable);
    set_type_args($$exponentiable,$$targs$$);
}
Exponentiable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{This:{'satisfies':[{t:Exponentiable,a:{Other:'Other',This:'This'}}]},Other:{'satisfies':[{t:Numeric,a:{Other:'Other'}}]}},satisfies:[{t:Numeric,a:{Other:'This'}}],$an:function(){return[doc(String$("Abstraction of numeric types that may be raised to a\npower. Note that the type of the exponent may be\ndifferent to the numeric type which can be \nexponentiated.",160)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Integer),$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Float)].reifyCeylonType({Absent:{t:Null},Element:{t:ClassDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','Exponentiable']};};
exports.Exponentiable=Exponentiable;
function $init$Exponentiable(){
    if (Exponentiable.$$===undefined){
        initTypeProto(Exponentiable,'ceylon.language::Exponentiable',$init$Numeric());
        (function($$exponentiable){
        })(Exponentiable.$$.prototype);
    }
    return Exponentiable;
}
exports.$init$Exponentiable=$init$Exponentiable;
$init$Exponentiable();
function Integral($$targs$$,$$integral){
    Numeric($$integral.$$targs$$===undefined?$$targs$$:{Other:$$integral.$$targs$$.Other},$$integral);
    Enumerable($$integral.$$targs$$===undefined?$$targs$$:{Other:$$integral.$$targs$$.Other},$$integral);
    set_type_args($$integral,$$targs$$);
}
Integral.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Other:{'satisfies':[{t:Integral,a:{Other:'Other'}}]}},satisfies:[{t:Numeric,a:{Other:'Other'}},{t:Enumerable,a:{Other:'Other'}}],$an:function(){return[doc(String$("Abstraction of integral numeric types. That is, types \nwith no fractional part, including `Integer`. The \ndivision operation for integral numeric types results \nin a remainder. Therefore, integral numeric types have \nan operation to determine the remainder of any division \noperation.",284)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Integer)].reifyCeylonType({Absent:{t:Null},Element:{t:ClassDeclaration$meta$declaration}})),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','Integral']};};
exports.Integral=Integral;
function $init$Integral(){
    if (Integral.$$===undefined){
        initTypeProto(Integral,'ceylon.language::Integral',$init$Numeric(),$init$Enumerable());
        (function($$integral){
            $$integral.$prop$getZero={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Integral,$an:function(){return[doc(String$("Determine if the number is zero.",32)),shared(),formal()];},d:['ceylon.language','Integral','$at','zero']};}};
            $$integral.$prop$getUnit={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Integral,$an:function(){return[doc(String$("Determine if the number is one.",31)),shared(),formal()];},d:['ceylon.language','Integral','$at','unit']};}};
            $$integral.divides=function (other$465){
                var $$integral=this;
                return other$465.remainder($$integral).zero;
            };
            $$integral.divides.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'other',$mt:'prm',$t:'Other',$an:function(){return[];}}],$cont:Integral,$an:function(){return[doc(String$("Determine if this number is a factor of the given \nnumber.",58)),shared()];},d:['ceylon.language','Integral','$m','divides']};};
        })(Integral.$$.prototype);
    }
    return Integral;
}
exports.$init$Integral=$init$Integral;
$init$Integral();
function Scalable($$targs$$,$$scalable){
    set_type_args($$scalable,$$targs$$);
}
Scalable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Scale:{'var':'in'},Value:{'var':'out','satisfies':[{t:Scalable,a:{Value:'Value',Scale:'Scale'}}]}},satisfies:[],$an:function(){return[doc(String$("Abstract supertype of types that support scaling by\na numeric factor. Implementations should generally\nrespect the following constraints, where relevant:\n\n- `x == 1**x`\n- `-x == -1**x`\n- `x-x == 0**x`\n- `x+x == 2**x`",216)),shared()];},d:['ceylon.language','Scalable']};};
exports.Scalable=Scalable;
function $init$Scalable(){
    if (Scalable.$$===undefined){
        initTypeProto(Scalable,'ceylon.language::Scalable');
        (function($$scalable){
        })(Scalable.$$.prototype);
    }
    return Scalable;
}
exports.$init$Scalable=$init$Scalable;
$init$Scalable();
function NegativeNumberException($$negativeNumberException){
    $init$NegativeNumberException();
    if ($$negativeNumberException===undefined)$$negativeNumberException=new NegativeNumberException.$$;
    Exception(String$("Negative number",15),null,$$negativeNumberException);
    return $$negativeNumberException;
}
NegativeNumberException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Exception},satisfies:[],$an:function(){return[doc(String$("Thrown when a negative number is not allowed.",45)),shared()];},d:['ceylon.language','NegativeNumberException']};};
exports.NegativeNumberException=NegativeNumberException;
function $init$NegativeNumberException(){
    if (NegativeNumberException.$$===undefined){
        initTypeProto(NegativeNumberException,'ceylon.language::NegativeNumberException',Exception);
    }
    return NegativeNumberException;
}
exports.$init$NegativeNumberException=$init$NegativeNumberException;
$init$NegativeNumberException();
function OverflowException($$overflowException){
    $init$OverflowException();
    if ($$overflowException===undefined)$$overflowException=new OverflowException.$$;
    Exception(String$("Numeric overflow",16),null,$$overflowException);
    return $$overflowException;
}
OverflowException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Exception},satisfies:[],$an:function(){return[doc(String$("Thrown when a mathematical operation caused a number to \noverflow from its bounds.",82)),shared()];},d:['ceylon.language','OverflowException']};};
exports.OverflowException=OverflowException;
function $init$OverflowException(){
    if (OverflowException.$$===undefined){
        initTypeProto(OverflowException,'ceylon.language::OverflowException',Exception);
    }
    return OverflowException;
}
exports.$init$OverflowException=$init$OverflowException;
$init$OverflowException();
function InitializationException(description$466, $$initializationException){
    $init$InitializationException();
    if ($$initializationException===undefined)$$initializationException=new InitializationException.$$;
    $$initializationException.description$466_=description$466;
    Exception($$initializationException.description$466,null,$$initializationException);
    return $$initializationException;
}
InitializationException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Exception},satisfies:[],$an:function(){return[doc(String$("Thrown when a problem was detected with value initialization.\n\nPossible problems include:\n\n* when a value could not be initialized due to recursive access during initialization, \n* an attempt to use a `late` value before it was initialized, \n* an attempt to assign to a `late` but non-`variable` value after it was initialized.",327)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),late)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','InitializationException']};};
exports.InitializationException=InitializationException;
function $init$InitializationException(){
    if (InitializationException.$$===undefined){
        initTypeProto(InitializationException,'ceylon.language::InitializationException',Exception);
        (function($$initializationException){
            defineAttr($$initializationException,'description$466',function(){return this.description$466_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:InitializationException,d:['ceylon.language','InitializationException','$at','description']};});
        })(InitializationException.$$.prototype);
    }
    return InitializationException;
}
exports.$init$InitializationException=$init$InitializationException;
$init$InitializationException();
function Set($$targs$$,$$set){
    Collection($$set.$$targs$$===undefined?$$targs$$:{Element:$$set.$$targs$$.Element},$$set);
    Cloneable($$set.$$targs$$===undefined?$$targs$$:{Clone:{t:Set,a:{Element:$$set.$$targs$$.Element}}},$$set);
    add_type_arg($$set,'Clone',{t:Set,a:{Element:$$set.$$targs$$.Element}});
    set_type_args($$set,$$targs$$);
}
Set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'var':'out','satisfies':[{t:Object$}]}},satisfies:[{t:Collection,a:{Element:'Element'}},{t:Cloneable,a:{Clone:{t:Set,a:{Element:'Element'}}}}],$an:function(){return[doc(String$("A collection of unique elements.\n\nA `Set` is a `Collection` of its elements.\n\nSets may be the subject of the binary union, \nintersection, and complement operators `|`, `&`, and \n`~`.",182)),shared()];},d:['ceylon.language','Set']};};
exports.Set=Set;
function $init$Set(){
    if (Set.$$===undefined){
        initTypeProto(Set,'ceylon.language::Set',$init$Collection(),$init$Cloneable());
        (function($$set){
            $$set.superset=function superset(set$467){
                var $$set=this;
                var it$468 = set$467.iterator();
                var element$469;while ((element$469=it$468.next())!==getFinished()){
                    if((!$$set.contains(element$469))){
                        return false;
                    }
                }
                if (getFinished() === element$469){
                    return true;
                }
            };$$set.superset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'set',$mt:'prm',$t:{t:Set,a:{Element:{t:Object$}}},$an:function(){return[];}}],$cont:Set,$an:function(){return[doc(String$("Determines if this `Set` is a superset of the \nspecified Set, that is, if this `Set` contains all \nof the elements in the specified `Set`.",138)),shared(),$default()];},d:['ceylon.language','Set','$m','superset']};};
            $$set.subset=function subset(set$470){
                var $$set=this;
                var it$471 = $$set.iterator();
                var element$472;while ((element$472=it$471.next())!==getFinished()){
                    if((!set$470.contains(element$472))){
                        return false;
                    }
                }
                if (getFinished() === element$472){
                    return true;
                }
            };$$set.subset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'set',$mt:'prm',$t:{t:Set,a:{Element:{t:Object$}}},$an:function(){return[];}}],$cont:Set,$an:function(){return[doc(String$("Determines if this `Set` is a subset of the given \n`Set`, that is, if the given set contains all of \nthe elements in this set.",126)),shared(),$default()];},d:['ceylon.language','Set','$m','subset']};};
            $$set.equals=function equals(that$473){
                var $$set=this;
                var that$474;
                if(isOfType((that$474=that$473),{t:Set,a:{Element:{t:Object$}}})&&that$474.size.equals($$set.size)){
                    var it$475 = $$set.iterator();
                    var element$476;while ((element$476=it$475.next())!==getFinished()){
                        if((!that$474.contains(element$476))){
                            return false;
                        }
                    }
                    if (getFinished() === element$476){
                        return true;
                    }
                }
                return false;
            };$$set.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'that',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Set,$an:function(){return[doc(String$("Two `Set`s are considered equal if they have the \nsame size and if every element of the first set is\nalso an element of the second set, as determined\nby `contains()`.",166)),shared(),actual(),$default()];},d:['ceylon.language','Set','$m','equals']};};
            defineAttr($$set,'hash',function(){
                var $$set=this;
                var hashCode$477=(1);
                var setHashCode$477=function(hashCode$478){return hashCode$477=hashCode$478;};
                $prop$getHashCode$477={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Set','$at','hash','$at','hashCode']};}};
                $prop$getHashCode$477.get=function(){return hashCode$477};
                $prop$getHashCode$477.set=setHashCode$477;
                if (setHashCode$477.$$metamodel$$===undefined)setHashCode$477.$$metamodel$$=$prop$getHashCode$477.$$metamodel$$;
                var it$479 = $$set.iterator();
                var elem$480;while ((elem$480=it$479.next())!==getFinished()){
                    (hashCode$477=hashCode$477.times((31)));
                    (hashCode$477=hashCode$477.plus(elem$480.hash));
                }
                return hashCode$477;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Set,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Set','$at','hash']};});
        })(Set.$$.prototype);
    }
    return Set;
}
exports.$init$Set=$init$Set;
$init$Set();
function emptySet$481($$targs$$){
    var $$emptySet=new emptySet$481.$$;
    $$emptySet.$$targs$$=$$targs$$;
    Object$($$emptySet);
    Set({Element:{t:Nothing}},$$emptySet);
    $$emptySet.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{t:Nothing}}},$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$at','clone']};}};
    $$emptySet.$prop$getClone.get=function(){return clone};
    $$emptySet.size$482_=(0);
    $$emptySet.$prop$getSize={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$at','size']};}};
    $$emptySet.$prop$getSize.get=function(){return size};
    $$emptySet.empty$483_=true;
    $$emptySet.$prop$getEmpty={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$at','empty']};}};
    $$emptySet.$prop$getEmpty.get=function(){return empty};
    return $$emptySet;
}
function $init$emptySet$481(){
    if (emptySet$481.$$===undefined){
        initTypeProto(emptySet$481,'ceylon.language::emptySet',Object$,$init$Set());
    }
    return emptySet$481;
}
exports.$init$emptySet$481=$init$emptySet$481;
$init$emptySet$481();
(function($$emptySet){
    $$emptySet.union=function (set$484,$$$mptypes){
        var $$emptySet=this;
        return set$484;
    };
    $$emptySet.union.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:'Other'}},$ps:[{$nm:'set',$mt:'prm',$t:{t:Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:emptySet$481,$tp:{Other:{'satisfies':[{t:Object$}]}},$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','union']};};
    $$emptySet.intersection=function (set$485,$$$mptypes){
        var $$emptySet=this;
        return getEmptySet();
    };
    $$emptySet.intersection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{t:Nothing}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:emptySet$481,$tp:{Other:{'satisfies':[{t:Object$}]}},$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','intersection']};};
    $$emptySet.exclusiveUnion=function (set$486,$$$mptypes){
        var $$emptySet=this;
        return set$486;
    };
    $$emptySet.exclusiveUnion.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:'Other'}},$ps:[{$nm:'set',$mt:'prm',$t:{t:Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:emptySet$481,$tp:{Other:{'satisfies':[{t:Object$}]}},$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','exclusiveUnion']};};
    $$emptySet.complement=function (set$487,$$$mptypes){
        var $$emptySet=this;
        return getEmptySet();
    };
    $$emptySet.complement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{t:Nothing}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:emptySet$481,$tp:{Other:{'satisfies':[{t:Object$}]}},$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','complement']};};
    defineAttr($$emptySet,'clone',function(){
        var $$emptySet=this;
        return getEmptySet();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{t:Nothing}}},$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$at','clone']};});
    $$emptySet.iterator=function (){
        var $$emptySet=this;
        return getEmptyIterator();
    };
    $$emptySet.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:{t:Nothing}}},$ps:[],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','iterator']};};
    $$emptySet.subset=function (set$488){
        var $$emptySet=this;
        return true;
    };
    $$emptySet.subset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'set',$mt:'prm',$t:{t:Set,a:{Element:{t:Object$}}},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','subset']};};
    $$emptySet.superset=function (set$489){
        var $$emptySet=this;
        return set$489.empty;
    };
    $$emptySet.superset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'set',$mt:'prm',$t:{t:Set,a:{Element:{t:Object$}}},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','superset']};};
    defineAttr($$emptySet,'size',function(){return this.size$482_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$at','size']};});
    defineAttr($$emptySet,'empty',function(){return this.empty$483_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$at','empty']};});
    $$emptySet.contains=function (element$490){
        var $$emptySet=this;
        return false;
    };
    $$emptySet.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'element',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','contains']};};
    $$emptySet.containsAny=function (elements$491){
        var $$emptySet=this;
        return false;
    };
    $$emptySet.containsAny.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'elements',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Object$}}},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','containsAny']};};
    $$emptySet.containsEvery=function (elements$492){
        var $$emptySet=this;
        return false;
    };
    $$emptySet.containsEvery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'elements',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Object$}}},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','containsEvery']};};
    $$emptySet.count=function (selecting$493){
        var $$emptySet=this;
        return (0);
    };
    $$emptySet.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','count']};};
    $$emptySet.$map=function (collecting$494,$$$mptypes){
        var $$emptySet=this;
        return getEmptySet();
    };
    $$emptySet.$map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{t:Nothing}}},$ps:[{$nm:'collecting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:emptySet$481,$tp:{Result:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','map']};};
    $$emptySet.$filter=function (selecting$495){
        var $$emptySet=this;
        return getEmptySet();
    };
    $$emptySet.$filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{t:Nothing}}},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','filter']};};
    $$emptySet.fold=function (initial$496,accumulating$497,$$$mptypes){
        var $$emptySet=this;
        return initial$496;
    };
    $$emptySet.fold.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'initial',$mt:'prm',$t:'Result',$an:function(){return[];}},{$nm:'accumulating',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:emptySet$481,$tp:{Result:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','fold']};};
    $$emptySet.find=function (selecting$498){
        var $$emptySet=this;
        return null;
    };
    $$emptySet.find.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Null},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','find']};};
    $$emptySet.collect=function (collecting$499,$$$mptypes){
        var $$emptySet=this;
        return getEmpty();
    };
    $$emptySet.collect.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'collecting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:emptySet$481,$tp:{Result:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','collect']};};
    $$emptySet.select=function (selecting$500){
        var $$emptySet=this;
        return getEmpty();
    };
    $$emptySet.select.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','select']};};
    $$emptySet.any=function (selecting$501){
        var $$emptySet=this;
        return false;
    };
    $$emptySet.any.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','any']};};
    $$emptySet.$every=function (selecting$502){
        var $$emptySet=this;
        return false;
    };
    $$emptySet.$every.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','every']};};
    $$emptySet.skipping=function (skip$503){
        var $$emptySet=this;
        return getEmptySet();
    };
    $$emptySet.skipping.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{t:Nothing}}},$ps:[{$nm:'skip',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','skipping']};};
    $$emptySet.taking=function (take$504){
        var $$emptySet=this;
        return getEmptySet();
    };
    $$emptySet.taking.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{t:Nothing}}},$ps:[{$nm:'take',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','taking']};};
    $$emptySet.by=function (step$505){
        var $$emptySet=this;
        return getEmptySet();
    };
    $$emptySet.by.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{t:Nothing}}},$ps:[{$nm:'step',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:emptySet$481,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptySet','$m','by']};};
})(emptySet$481.$$.prototype);
var emptySet$506=emptySet$481({Element:{t:Nothing}});
var getEmptySet=function(){
    return emptySet$506;
}
exports.getEmptySet=getEmptySet;
getEmptySet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:emptySet$481},$an:function(){return[doc(String$("A [[Set]] with no elements.",27)),shared()];},d:['ceylon.language','emptySet']};};
$prop$getEmptySet={get:getEmptySet,$$metamodel$$:getEmptySet.$$metamodel$$};
exports.$prop$getEmptySet=$prop$getEmptySet;
function Range(first, last, $$targs$$,$$range){
    $init$Range();
    if ($$range===undefined)$$range=new Range.$$;
    set_type_args($$range,$$targs$$);
    Object$($$range);
    Sequence($$range.$$targs$$===undefined?$$targs$$:{Element:$$range.$$targs$$.Element},$$range);
    Cloneable($$range.$$targs$$===undefined?$$targs$$:{Clone:{t:Range,a:{Element:$$range.$$targs$$.Element}}},$$range);
    add_type_arg($$range,'Clone',{t:Range,a:{Element:$$range.$$targs$$.Element}});
    $$range.first$507_=first;
    $$range.$prop$getFirst={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Range,$an:function(){return[doc(String$("The start of the range.",23)),shared(),actual()];},d:['ceylon.language','Range','$at','first']};}};
    $$range.$prop$getFirst.get=function(){return first};
    $$range.last$508_=last;
    $$range.$prop$getLast={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Range,$an:function(){return[doc(String$("The end of the range.",21)),shared(),actual()];},d:['ceylon.language','Range','$at','last']};}};
    $$range.$prop$getLast.get=function(){return last};
    $$range.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$at','string']};}};
    $$range.$prop$getString.get=function(){return string};
    $$range.$prop$getDecreasing={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Range,$an:function(){return[doc(String$("Determines if the range is decreasing.",38)),shared()];},d:['ceylon.language','Range','$at','decreasing']};}};
    $$range.$prop$getDecreasing.get=function(){return decreasing};
    $$range.$prop$getLastIndex={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Range,$an:function(){return[doc(String$("The index of the end of the range.",34)),shared(),actual()];},d:['ceylon.language','Range','$at','lastIndex']};}};
    $$range.$prop$getLastIndex.get=function(){return lastIndex};
    $$range.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Range,a:{Element:'Element'}},$cont:Range,$an:function(){return[doc(String$("Returns the range itself, since ranges are \nimmutable.",54)),shared(),actual()];},d:['ceylon.language','Range','$at','clone']};}};
    $$range.$prop$getClone.get=function(){return clone};
    $$range.$prop$getReversed={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Range,a:{Element:'Element'}},$cont:Range,$an:function(){return[doc(String$("Reverse this range, returning a new range.",42)),shared(),actual()];},d:['ceylon.language','Range','$at','reversed']};}};
    $$range.$prop$getReversed.get=function(){return reversed};
    $$range.$prop$getCoalesced={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Range,a:{Element:'Element'}},$cont:Range,$an:function(){return[doc(String$("Returns the range itself, since a Range cannot\ncontain nulls.",61)),shared(),actual()];},d:['ceylon.language','Range','$at','coalesced']};}};
    $$range.$prop$getCoalesced.get=function(){return coalesced};
    $$range.$prop$getSequence={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Range,a:{Element:'Element'}},$cont:Range,$an:function(){return[doc(String$("Returns this range.",19)),shared(),actual()];},d:['ceylon.language','Range','$at','sequence']};}};
    $$range.$prop$getSequence.get=function(){return sequence};
    return $$range;
}
Range.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Object$},$tp:{Element:{'satisfies':[{t:Ordinal,a:{Other:'Element'}},{t:Comparable,a:{Other:'Element'}}]}},satisfies:[{t:Sequence,a:{Element:'Element'}},{t:Cloneable,a:{Clone:{t:Range,a:{Element:'Element'}}}}],$an:function(){return[doc(String$("Represents the range of totally ordered, ordinal values \ngenerated by two endpoints of type `Ordinal` and \n`Comparable`. If the first value is smaller than the\nlast value, the range is increasing. If the first value\nis larger than the last value, the range is decreasing.\nIf the two values are equal, the range contains exactly\none element. The range is always nonempty, containing \nat least one value.\n\nA range may be produced using the `..` operator:\n\n    for (i in min..max) { ... }\n    if (char in \'A\'..\'Z\') { ... }\n",520)),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared(),$final()];},d:['ceylon.language','Range']};};
exports.Range=Range;
function $init$Range(){
    if (Range.$$===undefined){
        initTypeProto(Range,'ceylon.language::Range',Object$,$init$Sequence(),$init$Cloneable());
        (function($$range){
            defineAttr($$range,'first',function(){return this.first$507_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Range,$an:function(){return[doc(String$("The start of the range.",23)),shared(),actual()];},d:['ceylon.language','Range','$at','first']};});
            defineAttr($$range,'last',function(){return this.last$508_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Range,$an:function(){return[doc(String$("The end of the range.",21)),shared(),actual()];},d:['ceylon.language','Range','$at','last']};});
            defineAttr($$range,'string',function(){
                var $$range=this;
                return $$range.first.string.plus(String$("..",2)).plus($$range.last.string);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$at','string']};});
            defineAttr($$range,'decreasing',function(){
                var $$range=this;
                return $$range.last.compare($$range.first).equals(getSmaller());
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:Range,$an:function(){return[doc(String$("Determines if the range is decreasing.",38)),shared()];},d:['ceylon.language','Range','$at','decreasing']};});
            $$range.next$509=function (x$510){
                var $$range=this;
                return (opt$511=($$range.decreasing?x$510.predecessor:null),opt$511!==null?opt$511:x$510.successor);
            };
            $$range.next$509.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Element',$ps:[{$nm:'x',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:Range,d:['ceylon.language','Range','$m','next']};};
            defineAttr($$range,'size',function(){
                var $$range=this;
                var last$512;
                var first$513;
                if(isOfType((last$512=$$range.last),{t:Enumerable,a:{Other:{t:Anything}}})&&isOfType((first$513=$$range.first),{t:Enumerable,a:{Other:{t:Anything}}})){
                    return last$512.integerValue.minus(first$513.integerValue).magnitude.plus((1));
                }else {
                    var size$514=(1);
                    var setSize$514=function(size$515){return size$514=size$515;};
                    $prop$getSize$514={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Range','$at','size','$at','size']};}};
                    $prop$getSize$514.get=function(){return size$514};
                    $prop$getSize$514.set=setSize$514;
                    if (setSize$514.$$metamodel$$===undefined)setSize$514.$$metamodel$$=$prop$getSize$514.$$metamodel$$;
                    var current$516=$$range.first;
                    var setCurrent$516=function(current$517){return current$516=current$517;};
                    $prop$getCurrent$516={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$an:function(){return[variable()];},d:['ceylon.language','Range','$at','size','$at','current']};}};
                    $prop$getCurrent$516.get=function(){return current$516};
                    $prop$getCurrent$516.set=setCurrent$516;
                    if (setCurrent$516.$$metamodel$$===undefined)setCurrent$516.$$metamodel$$=$prop$getCurrent$516.$$metamodel$$;
                    while((!current$516.equals($$range.last))){
                        (oldsize$518=size$514,size$514=oldsize$518.successor,oldsize$518);
                        var oldsize$518;
                        current$516=$$range.next$509(current$516);
                    }
                    return size$514;
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Range,$an:function(){return[doc(String$("The nonzero number of elements in the range.",44)),shared(),actual()];},d:['ceylon.language','Range','$at','size']};});defineAttr($$range,'lastIndex',function(){
                var $$range=this;
                return $$range.size.minus((1));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Range,$an:function(){return[doc(String$("The index of the end of the range.",34)),shared(),actual()];},d:['ceylon.language','Range','$at','lastIndex']};});
            defineAttr($$range,'rest',function(){
                var $$range=this;
                if($$range.size.equals((1))){
                    return getEmpty();
                }
                var n$519=$$range.next$509($$range.first);
                $prop$getN$519={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',d:['ceylon.language','Range','$at','rest','$at','n']};}};
                $prop$getN$519.get=function(){return n$519};
                return (opt$520=(n$519.equals($$range.last)?getEmpty():null),opt$520!==null?opt$520:Range(n$519,$$range.last,{Element:$$range.$$targs$$.Element}));
                var opt$520;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$cont:Range,$an:function(){return[doc(String$("The rest of the range, without the start of the\nrange.",54)),shared(),actual()];},d:['ceylon.language','Range','$at','rest']};});$$range.get=function get(n$521){
                var $$range=this;
                var index$522=(0);
                var setIndex$522=function(index$523){return index$522=index$523;};
                $prop$getIndex$522={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Range','$m','get','$at','index']};}};
                $prop$getIndex$522.get=function(){return index$522};
                $prop$getIndex$522.set=setIndex$522;
                if (setIndex$522.$$metamodel$$===undefined)setIndex$522.$$metamodel$$=$prop$getIndex$522.$$metamodel$$;
                var x$524=$$range.first;
                var setX$524=function(x$525){return x$524=x$525;};
                $prop$getX$524={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$an:function(){return[variable()];},d:['ceylon.language','Range','$m','get','$at','x']};}};
                $prop$getX$524.get=function(){return x$524};
                $prop$getX$524.set=setX$524;
                if (setX$524.$$metamodel$$===undefined)setX$524.$$metamodel$$=$prop$getX$524.$$metamodel$$;
                while(index$522.compare(n$521).equals(getSmaller())){
                    if(x$524.equals($$range.last)){
                        return null;
                    }else {
                        (index$522=index$522.successor);
                        x$524=$$range.next$509(x$524);
                    }
                }
                return x$524;
            };$$range.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$ps:[{$nm:'n',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Range,$an:function(){return[doc(String$("The element of the range that occurs `n` values after\nthe start of the range. Note that this operation \nis inefficient for large ranges.",136)),shared(),actual()];},d:['ceylon.language','Range','$m','get']};};
            $$range.iterator=function iterator(){
                var $$range=this;
                function RangeIterator$526($$rangeIterator$526){
                    $init$RangeIterator$526();
                    if ($$rangeIterator$526===undefined)$$rangeIterator$526=new RangeIterator$526.$$;
                    $$rangeIterator$526.$$targs$$={Element:$$range.$$targs$$.Element};
                    Iterator({Element:$$range.$$targs$$.Element},$$rangeIterator$526);
                    $$rangeIterator$526.current$527_=$$range.first;
                    $$rangeIterator$526.$prop$getCurrent$527={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$cont:RangeIterator$526,$an:function(){return[variable()];},d:['ceylon.language','Range','$m','iterator','$c','RangeIterator','$at','current']};}};
                    $$rangeIterator$526.$prop$getCurrent$527.get=function(){return current$527};
                    return $$rangeIterator$526;
                }
                RangeIterator$526.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Basic},satisfies:[{t:Iterator,a:{Element:'Element'}}],d:['ceylon.language','Range','$m','iterator','$c','RangeIterator']};};
                function $init$RangeIterator$526(){
                    if (RangeIterator$526.$$===undefined){
                        initTypeProto(RangeIterator$526,'ceylon.language::Range.iterator.RangeIterator',Basic,$init$Iterator());
                        (function($$rangeIterator$526){
                            defineAttr($$rangeIterator$526,'current$527',function(){return this.current$527_;},function(current$528){return this.current$527_=current$528;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$cont:RangeIterator$526,$an:function(){return[variable()];},d:['ceylon.language','Range','$m','iterator','$c','RangeIterator','$at','current']};});
                            $$rangeIterator$526.next=function next(){
                                var $$rangeIterator$526=this;
                                var result$529=$$rangeIterator$526.current$527;
                                $prop$getResult$529={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},d:['ceylon.language','Range','$m','iterator','$c','RangeIterator','$m','next','$at','result']};}};
                                $prop$getResult$529.get=function(){return result$529};
                                var curr$530;
                                if(!isOfType((curr$530=$$rangeIterator$526.current$527),{t:Finished})){
                                    if((opt$531=($$range.decreasing?(curr$530.compare($$range.last)!==getLarger()):null),opt$531!==null?opt$531:(curr$530.compare($$range.last)!==getSmaller()))){
                                        $$rangeIterator$526.current$527=getFinished();
                                    }else {
                                        $$rangeIterator$526.current$527=$$range.next$509(curr$530);
                                    }
                                    var opt$531;
                                }
                                return result$529;
                            };$$rangeIterator$526.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$ps:[],$cont:RangeIterator$526,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','iterator','$c','RangeIterator','$m','next']};};
                            defineAttr($$rangeIterator$526,'string',function(){
                                var $$rangeIterator$526=this;
                                return String$("RangeIterator",13);
                            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:RangeIterator$526,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','iterator','$c','RangeIterator','$at','string']};});
                        })(RangeIterator$526.$$.prototype);
                    }
                    return RangeIterator$526;
                }
                $init$RangeIterator$526();
                return RangeIterator$526();
            };$$range.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:Range,$an:function(){return[doc(String$("An iterator for the elements of the range.",42)),shared(),actual()];},d:['ceylon.language','Range','$m','iterator']};};
            $$range.by=function by(step$532){
                var $$range=this;
                //assert at Range.ceylon (113:8-114:25)
                if (!(step$532.compare((0)).equals(getLarger()))) {throw wrapexc(AssertionException("step size must be greater than zero: \'step > 0\' at Range.ceylon (114:15-114:24)"),'113:8-114:25','Range.ceylon'); }
                if(step$532.equals((1))){
                    return $$range;
                }
                var first$533;
                var last$534;
                if(isOfType((first$533=$$range.first),{t:Integer})&&isOfType((last$534=$$range.last),{t:Integer})){
                    return integerRangeByIterable($$range,step$532,{Element:$$range.$$targs$$.Element});
                }
                return $$range.getT$all()['ceylon.language::Iterable'].$$.prototype.by.call(this,step$532);
            };$$range.by.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Nothing},Element:'Element'}},$ps:[{$nm:'step',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','by']};};
            $$range.contains=function contains(element$535){
                var $$range=this;
                var element$536;
                if(isOfType((element$536=element$535),$$range.$$targs$$.Element)){
                    return $$range.containsElement(element$536);
                }else {
                    return false;
                }
            };$$range.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'element',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Range,$an:function(){return[doc(String$("Determines if the range includes the given object.",50)),shared(),actual()];},d:['ceylon.language','Range','$m','contains']};};
            $$range.count=function count(selecting$537){
                var $$range=this;
                var e$538=$$range.first;
                var setE$538=function(e$539){return e$538=e$539;};
                $prop$getE$538={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$an:function(){return[variable()];},d:['ceylon.language','Range','$m','count','$at','e']};}};
                $prop$getE$538.get=function(){return e$538};
                $prop$getE$538.set=setE$538;
                if (setE$538.$$metamodel$$===undefined)setE$538.$$metamodel$$=$prop$getE$538.$$metamodel$$;
                var c$540=(0);
                var setC$540=function(c$541){return c$540=c$541;};
                $prop$getC$540={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Range','$m','count','$at','c']};}};
                $prop$getC$540.get=function(){return c$540};
                $prop$getC$540.set=setC$540;
                if (setC$540.$$metamodel$$===undefined)setC$540.$$metamodel$$=$prop$getC$540.$$metamodel$$;
                while($$range.containsElement(e$538)){
                    if(selecting$537(e$538)){
                        (oldc$542=c$540,c$540=oldc$542.successor,oldc$542);
                        var oldc$542;
                    }
                    e$538=$$range.next$509(e$538);
                }
                return c$540;
            };$$range.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','count']};};
            $$range.containsElement=function (x$543){
                var $$range=this;
                return (opt$544=($$range.decreasing?((x$543.compare($$range.first)!==getLarger())&&(x$543.compare($$range.last)!==getSmaller())):null),opt$544!==null?opt$544:((x$543.compare($$range.first)!==getSmaller())&&(x$543.compare($$range.last)!==getLarger())));
            };
            $$range.containsElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'x',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:Range,$an:function(){return[doc(String$("Determines if the range includes the given value.",49)),shared()];},d:['ceylon.language','Range','$m','containsElement']};};
            $$range.occurs=function occurs(element$545){
                var $$range=this;
                var element$546;
                if(isOfType((element$546=element$545),$$range.$$targs$$.Element)){
                    return $$range.containsElement(element$546);
                }else {
                    return false;
                }
            };$$range.occurs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'element',$mt:'prm',$t:{t:Anything},$an:function(){return[];}}],$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','occurs']};};
            $$range.includes=function includes(sublist$547){
                var $$range=this;
                var sublist$548;
                if(isOfType((sublist$548=sublist$547),{t:Range,a:{Element:$$range.$$targs$$.Element}})){
                    return ((tmpvar$549=sublist$548.first,tmpvar$549.compare($$range.first)!==getSmaller()&&tmpvar$549.compare($$range.last)!==getLarger())&&(tmpvar$550=sublist$548.last,tmpvar$550.compare($$range.first)!==getSmaller()&&tmpvar$550.compare($$range.last)!==getLarger()));
                }else {
                    return $$range.getT$all()['ceylon.language::List'].$$.prototype.includes.call(this,sublist$547);
                }
            };$$range.includes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'sublist',$mt:'prm',$t:{t:List,a:{Element:{t:Anything}}},$an:function(){return[];}}],$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','includes']};};
            $$range.equals=function equals(that$551){
                var $$range=this;
                var that$552;
                if(isOfType((that$552=that$551),{t:Range,a:{Element:{t:Object$}}})){
                    return (that$552.first.equals($$range.first)&&that$552.last.equals($$range.last));
                }else {
                    return $$range.getT$all()['ceylon.language::List'].$$.prototype.equals.call(this,that$551);
                }
            };$$range.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'that',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Range,$an:function(){return[doc(String$("Determines if two ranges are the same by comparing\ntheir endpoints.",67)),shared(),actual()];},d:['ceylon.language','Range','$m','equals']};};
            defineAttr($$range,'clone',function(){
                var $$range=this;
                return $$range;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Range,a:{Element:'Element'}},$cont:Range,$an:function(){return[doc(String$("Returns the range itself, since ranges are \nimmutable.",54)),shared(),actual()];},d:['ceylon.language','Range','$at','clone']};});
            $$range.segment=function segment(from$553,length$554){
                var $$range=this;
                if(((length$554.compare((0))!==getLarger())||from$553.compare($$range.lastIndex).equals(getLarger()))){
                    return getEmpty();
                }
                var x$555=$$range.first;
                var setX$555=function(x$556){return x$555=x$556;};
                $prop$getX$555={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$an:function(){return[variable()];},d:['ceylon.language','Range','$m','segment','$at','x']};}};
                $prop$getX$555.get=function(){return x$555};
                $prop$getX$555.set=setX$555;
                if (setX$555.$$metamodel$$===undefined)setX$555.$$metamodel$$=$prop$getX$555.$$metamodel$$;
                var i$557=(0);
                var setI$557=function(i$558){return i$557=i$558;};
                $prop$getI$557={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Range','$m','segment','$at','i']};}};
                $prop$getI$557.get=function(){return i$557};
                $prop$getI$557.set=setI$557;
                if (setI$557.$$metamodel$$===undefined)setI$557.$$metamodel$$=$prop$getI$557.$$metamodel$$;
                while((oldi$559=i$557,i$557=oldi$559.successor,oldi$559).compare(from$553).equals(getSmaller())){
                    x$555=$$range.next$509(x$555);
                }
                var oldi$559;
                var y$560=x$555;
                var setY$560=function(y$561){return y$560=y$561;};
                $prop$getY$560={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$an:function(){return[variable()];},d:['ceylon.language','Range','$m','segment','$at','y']};}};
                $prop$getY$560.get=function(){return y$560};
                $prop$getY$560.set=setY$560;
                if (setY$560.$$metamodel$$===undefined)setY$560.$$metamodel$$=$prop$getY$560.$$metamodel$$;
                var j$562=(1);
                var setJ$562=function(j$563){return j$562=j$563;};
                $prop$getJ$562={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Range','$m','segment','$at','j']};}};
                $prop$getJ$562.get=function(){return j$562};
                $prop$getJ$562.set=setJ$562;
                if (setJ$562.$$metamodel$$===undefined)setJ$562.$$metamodel$$=$prop$getJ$562.$$metamodel$$;
                while(((oldj$564=j$562,j$562=oldj$564.successor,oldj$564).compare(length$554).equals(getSmaller())&&y$560.compare($$range.last).equals(getSmaller()))){
                    y$560=$$range.next$509(y$560);
                }
                var oldj$564;
                return Range(x$555,y$560,{Element:$$range.$$targs$$.Element});
            };$$range.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Range,a:{Element:'Element'}},{t:Empty}]},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','segment']};};
            $$range.span=function span(from$565,to$566){
                var $$range=this;
                var toIndex$567=to$566;
                var setToIndex$567=function(toIndex$568){return toIndex$567=toIndex$568;};
                $prop$getToIndex$567={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Range','$m','span','$at','toIndex']};}};
                $prop$getToIndex$567.get=function(){return toIndex$567};
                $prop$getToIndex$567.set=setToIndex$567;
                if (setToIndex$567.$$metamodel$$===undefined)setToIndex$567.$$metamodel$$=$prop$getToIndex$567.$$metamodel$$;
                var fromIndex$569=from$565;
                var setFromIndex$569=function(fromIndex$570){return fromIndex$569=fromIndex$570;};
                $prop$getFromIndex$569={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Range','$m','span','$at','fromIndex']};}};
                $prop$getFromIndex$569.get=function(){return fromIndex$569};
                $prop$getFromIndex$569.set=setFromIndex$569;
                if (setFromIndex$569.$$metamodel$$===undefined)setFromIndex$569.$$metamodel$$=$prop$getFromIndex$569.$$metamodel$$;
                if(toIndex$567.compare((0)).equals(getSmaller())){
                    if(fromIndex$569.compare((0)).equals(getSmaller())){
                        return getEmpty();
                    }
                    toIndex$567=(0);
                }else {
                    if(toIndex$567.compare($$range.lastIndex).equals(getLarger())){
                        if(fromIndex$569.compare($$range.lastIndex).equals(getLarger())){
                            return getEmpty();
                        }
                        toIndex$567=$$range.lastIndex;
                    }
                }
                if(fromIndex$569.compare((0)).equals(getSmaller())){
                    fromIndex$569=(0);
                }else {
                    if(fromIndex$569.compare($$range.lastIndex).equals(getLarger())){
                        fromIndex$569=$$range.lastIndex;
                    }
                }
                var x$571=$$range.first;
                var setX$571=function(x$572){return x$571=x$572;};
                $prop$getX$571={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$an:function(){return[variable()];},d:['ceylon.language','Range','$m','span','$at','x']};}};
                $prop$getX$571.get=function(){return x$571};
                $prop$getX$571.set=setX$571;
                if (setX$571.$$metamodel$$===undefined)setX$571.$$metamodel$$=$prop$getX$571.$$metamodel$$;
                var i$573=(0);
                var setI$573=function(i$574){return i$573=i$574;};
                $prop$getI$573={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Range','$m','span','$at','i']};}};
                $prop$getI$573.get=function(){return i$573};
                $prop$getI$573.set=setI$573;
                if (setI$573.$$metamodel$$===undefined)setI$573.$$metamodel$$=$prop$getI$573.$$metamodel$$;
                while((oldi$575=i$573,i$573=oldi$575.successor,oldi$575).compare(fromIndex$569).equals(getSmaller())){
                    x$571=$$range.next$509(x$571);
                }
                var oldi$575;
                var y$576=$$range.first;
                var setY$576=function(y$577){return y$576=y$577;};
                $prop$getY$576={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$an:function(){return[variable()];},d:['ceylon.language','Range','$m','span','$at','y']};}};
                $prop$getY$576.get=function(){return y$576};
                $prop$getY$576.set=setY$576;
                if (setY$576.$$metamodel$$===undefined)setY$576.$$metamodel$$=$prop$getY$576.$$metamodel$$;
                var j$578=(0);
                var setJ$578=function(j$579){return j$578=j$579;};
                $prop$getJ$578={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Range','$m','span','$at','j']};}};
                $prop$getJ$578.get=function(){return j$578};
                $prop$getJ$578.set=setJ$578;
                if (setJ$578.$$metamodel$$===undefined)setJ$578.$$metamodel$$=$prop$getJ$578.$$metamodel$$;
                while((oldj$580=j$578,j$578=oldj$580.successor,oldj$580).compare(toIndex$567).equals(getSmaller())){
                    y$576=$$range.next$509(y$576);
                }
                var oldj$580;
                return Range(x$571,y$576,{Element:$$range.$$targs$$.Element});
            };$$range.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Range,a:{Element:'Element'}},{t:Empty}]},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','span']};};
            $$range.spanTo=function spanTo(to$581){
                var $$range=this;
                return (opt$582=(to$581.compare((0)).equals(getSmaller())?getEmpty():null),opt$582!==null?opt$582:$$range.span((0),to$581));
                var opt$582;
            };$$range.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Range,a:{Element:'Element'}},{t:Empty}]},$ps:[{$nm:'to',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','spanTo']};};
            $$range.spanFrom=function spanFrom(from$583){
                var $$range=this;
                return $$range.span(from$583,$$range.size);
            };$$range.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Range,a:{Element:'Element'}},{t:Empty}]},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','spanFrom']};};
            defineAttr($$range,'reversed',function(){
                var $$range=this;
                return Range($$range.last,$$range.first,{Element:$$range.$$targs$$.Element});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Range,a:{Element:'Element'}},$cont:Range,$an:function(){return[doc(String$("Reverse this range, returning a new range.",42)),shared(),actual()];},d:['ceylon.language','Range','$at','reversed']};});
            $$range.skipping=function skipping(skip$584){
                var $$range=this;
                var x$585=(0);
                var setX$585=function(x$586){return x$585=x$586;};
                $prop$getX$585={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Range','$m','skipping','$at','x']};}};
                $prop$getX$585.get=function(){return x$585};
                $prop$getX$585.set=setX$585;
                if (setX$585.$$metamodel$$===undefined)setX$585.$$metamodel$$=$prop$getX$585.$$metamodel$$;
                var e$587=$$range.first;
                var setE$587=function(e$588){return e$587=e$588;};
                $prop$getE$587={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$an:function(){return[variable()];},d:['ceylon.language','Range','$m','skipping','$at','e']};}};
                $prop$getE$587.get=function(){return e$587};
                $prop$getE$587.set=setE$587;
                if (setE$587.$$metamodel$$===undefined)setE$587.$$metamodel$$=$prop$getE$587.$$metamodel$$;
                while((oldx$589=x$585,x$585=oldx$589.successor,oldx$589).compare(skip$584).equals(getSmaller())){
                    e$587=$$range.next$509(e$587);
                }
                var oldx$589;
                return (opt$590=($$range.containsElement(e$587)?Range(e$587,$$range.last,{Element:$$range.$$targs$$.Element}):null),opt$590!==null?opt$590:getEmpty());
                var opt$590;
            };$$range.skipping.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Range,a:{Element:'Element'}},{t:Empty}]},$ps:[{$nm:'skip',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','skipping']};};
            $$range.taking=function taking(take$591){
                var $$range=this;
                if(take$591.equals((0))){
                    return getEmpty();
                }
                var x$592=(0);
                var setX$592=function(x$593){return x$592=x$593;};
                $prop$getX$592={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Range','$m','taking','$at','x']};}};
                $prop$getX$592.get=function(){return x$592};
                $prop$getX$592.set=setX$592;
                if (setX$592.$$metamodel$$===undefined)setX$592.$$metamodel$$=$prop$getX$592.$$metamodel$$;
                var e$594=$$range.first;
                var setE$594=function(e$595){return e$594=e$595;};
                $prop$getE$594={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$an:function(){return[variable()];},d:['ceylon.language','Range','$m','taking','$at','e']};}};
                $prop$getE$594.get=function(){return e$594};
                $prop$getE$594.set=setE$594;
                if (setE$594.$$metamodel$$===undefined)setE$594.$$metamodel$$=$prop$getE$594.$$metamodel$$;
                while((x$592=x$592.successor).compare(take$591).equals(getSmaller())){
                    e$594=$$range.next$509(e$594);
                }
                return (opt$596=($$range.containsElement(e$594)?Range($$range.first,e$594,{Element:$$range.$$targs$$.Element}):null),opt$596!==null?opt$596:$$range);
                var opt$596;
            };$$range.taking.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Range,a:{Element:'Element'}},{t:Empty}]},$ps:[{$nm:'take',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Range,$an:function(){return[shared(),actual()];},d:['ceylon.language','Range','$m','taking']};};
            defineAttr($$range,'coalesced',function(){
                var $$range=this;
                return $$range;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Range,a:{Element:'Element'}},$cont:Range,$an:function(){return[doc(String$("Returns the range itself, since a Range cannot\ncontain nulls.",61)),shared(),actual()];},d:['ceylon.language','Range','$at','coalesced']};});
            defineAttr($$range,'sequence',function(){
                var $$range=this;
                return $$range;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Range,a:{Element:'Element'}},$cont:Range,$an:function(){return[doc(String$("Returns this range.",19)),shared(),actual()];},d:['ceylon.language','Range','$at','sequence']};});
        })(Range.$$.prototype);
    }
    return Range;
}
exports.$init$Range=$init$Range;
$init$Range();
var opt$511,opt$544;
function Singleton(element$597, $$targs$$,$$singleton){
    $init$Singleton();
    if ($$singleton===undefined)$$singleton=new Singleton.$$;
    set_type_args($$singleton,$$targs$$);
    $$singleton.element$597_=element$597;
    Object$($$singleton);
    Sequence($$singleton.$$targs$$===undefined?$$targs$$:{Element:$$singleton.$$targs$$.Element},$$singleton);
    $$singleton.$prop$getLastIndex={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Singleton,$an:function(){return[doc(String$("Returns `0`.",12)),shared(),actual()];},d:['ceylon.language','Singleton','$at','lastIndex']};}};
    $$singleton.$prop$getLastIndex.get=function(){return lastIndex};
    $$singleton.$prop$getSize={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Singleton,$an:function(){return[doc(String$("Returns `1`.",12)),shared(),actual()];},d:['ceylon.language','Singleton','$at','size']};}};
    $$singleton.$prop$getSize.get=function(){return size};
    $$singleton.$prop$getFirst={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Singleton,$an:function(){return[doc(String$("Returns the element contained in this `Singleton`.",50)),shared(),actual()];},d:['ceylon.language','Singleton','$at','first']};}};
    $$singleton.$prop$getFirst.get=function(){return first};
    $$singleton.$prop$getLast={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Singleton,$an:function(){return[doc(String$("Returns the element contained in this `Singleton`.",50)),shared(),actual()];},d:['ceylon.language','Singleton','$at','last']};}};
    $$singleton.$prop$getLast.get=function(){return last};
    $$singleton.$prop$getRest={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Singleton,$an:function(){return[doc(String$("Returns `Empty`.",16)),shared(),actual()];},d:['ceylon.language','Singleton','$at','rest']};}};
    $$singleton.$prop$getRest.get=function(){return rest};
    $$singleton.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Singleton,a:{Element:'Element'}},$cont:Singleton,$an:function(){return[doc(String$("Returns a `Singleton` with the same element.",44)),shared(),actual()];},d:['ceylon.language','Singleton','$at','clone']};}};
    $$singleton.$prop$getClone.get=function(){return clone};
    $$singleton.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$at','string']};}};
    $$singleton.$prop$getString.get=function(){return string};
    $$singleton.$prop$getReversed={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Singleton,a:{Element:'Element'}},$cont:Singleton,$an:function(){return[doc(String$("Return this singleton.",22)),shared(),actual()];},d:['ceylon.language','Singleton','$at','reversed']};}};
    $$singleton.$prop$getReversed.get=function(){return reversed};
    $$singleton.$prop$getHash={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$at','hash']};}};
    $$singleton.$prop$getHash.get=function(){return hash};
    return $$singleton;
}
Singleton.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Object$},$tp:{Element:{'var':'out'}},satisfies:[{t:Sequence,a:{Element:'Element'}}],$an:function(){return[doc(String$("A sequence with exactly one element, which may be null.",55)),shared()];},d:['ceylon.language','Singleton']};};
exports.Singleton=Singleton;
function $init$Singleton(){
    if (Singleton.$$===undefined){
        initTypeProto(Singleton,'ceylon.language::Singleton',Object$,$init$Sequence());
        (function($$singleton){
            defineAttr($$singleton,'lastIndex',function(){
                var $$singleton=this;
                return (0);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Singleton,$an:function(){return[doc(String$("Returns `0`.",12)),shared(),actual()];},d:['ceylon.language','Singleton','$at','lastIndex']};});
            defineAttr($$singleton,'size',function(){
                var $$singleton=this;
                return (1);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Singleton,$an:function(){return[doc(String$("Returns `1`.",12)),shared(),actual()];},d:['ceylon.language','Singleton','$at','size']};});
            defineAttr($$singleton,'first',function(){
                var $$singleton=this;
                return $$singleton.element$597;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Singleton,$an:function(){return[doc(String$("Returns the element contained in this `Singleton`.",50)),shared(),actual()];},d:['ceylon.language','Singleton','$at','first']};});
            defineAttr($$singleton,'last',function(){
                var $$singleton=this;
                return $$singleton.element$597;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Singleton,$an:function(){return[doc(String$("Returns the element contained in this `Singleton`.",50)),shared(),actual()];},d:['ceylon.language','Singleton','$at','last']};});
            defineAttr($$singleton,'rest',function(){
                var $$singleton=this;
                return getEmpty();
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$cont:Singleton,$an:function(){return[doc(String$("Returns `Empty`.",16)),shared(),actual()];},d:['ceylon.language','Singleton','$at','rest']};});
            $$singleton.get=function get(index$598){
                var $$singleton=this;
                if(index$598.equals((0))){
                    return $$singleton.element$597;
                }else {
                    return null;
                }
            };$$singleton.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[doc(String$("Returns the contained element, if the specified \nindex is `0`.",62)),shared(),actual()];},d:['ceylon.language','Singleton','$m','get']};};
            defineAttr($$singleton,'clone',function(){
                var $$singleton=this;
                return $$singleton;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Singleton,a:{Element:'Element'}},$cont:Singleton,$an:function(){return[doc(String$("Returns a `Singleton` with the same element.",44)),shared(),actual()];},d:['ceylon.language','Singleton','$at','clone']};});
            $$singleton.iterator=function iterator(){
                var $$singleton=this;
                function SingletonIterator$599($$singletonIterator$599){
                    $init$SingletonIterator$599();
                    if ($$singletonIterator$599===undefined)$$singletonIterator$599=new SingletonIterator$599.$$;
                    $$singletonIterator$599.$$targs$$={Element:$$singleton.$$targs$$.Element};
                    Iterator({Element:$$singleton.$$targs$$.Element},$$singletonIterator$599);
                    $$singletonIterator$599.done$600_=false;
                    $$singletonIterator$599.$prop$getDone$600={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:SingletonIterator$599,$an:function(){return[variable()];},d:['ceylon.language','Singleton','$m','iterator','$c','SingletonIterator','$at','done']};}};
                    $$singletonIterator$599.$prop$getDone$600.get=function(){return done$600};
                    return $$singletonIterator$599;
                }
                SingletonIterator$599.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Basic},satisfies:[{t:Iterator,a:{Element:'Element'}}],d:['ceylon.language','Singleton','$m','iterator','$c','SingletonIterator']};};
                function $init$SingletonIterator$599(){
                    if (SingletonIterator$599.$$===undefined){
                        initTypeProto(SingletonIterator$599,'ceylon.language::Singleton.iterator.SingletonIterator',Basic,$init$Iterator());
                        (function($$singletonIterator$599){
                            defineAttr($$singletonIterator$599,'done$600',function(){return this.done$600_;},function(done$601){return this.done$600_=done$601;},function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:SingletonIterator$599,$an:function(){return[variable()];},d:['ceylon.language','Singleton','$m','iterator','$c','SingletonIterator','$at','done']};});
                            $$singletonIterator$599.next=function next(){
                                var $$singletonIterator$599=this;
                                if($$singletonIterator$599.done$600){
                                    return getFinished();
                                }else {
                                    $$singletonIterator$599.done$600=true;
                                    return $$singleton.element$597;
                                }
                            };$$singletonIterator$599.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$ps:[],$cont:SingletonIterator$599,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','iterator','$c','SingletonIterator','$m','next']};};
                            defineAttr($$singletonIterator$599,'string',function(){
                                var $$singletonIterator$599=this;
                                return String$("SingletonIterator",17);
                            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:SingletonIterator$599,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','iterator','$c','SingletonIterator','$at','string']};});
                        })(SingletonIterator$599.$$.prototype);
                    }
                    return SingletonIterator$599;
                }
                $init$SingletonIterator$599();
                return SingletonIterator$599();
            };$$singleton.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:Singleton,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Singleton','$m','iterator']};};
            defineAttr($$singleton,'string',function(){
                var $$singleton=this;
                return StringBuilder().appendAll([String$("[",1),(opt$602=(opt$603=$$singleton.element$597,opt$603!==null?opt$603.string:null),opt$602!==null?opt$602:String$("null",4)).string,String$("]",1)]).string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$at','string']};});
            $$singleton.segment=function (from$604,length$605){
                var $$singleton=this;
                return (opt$606=(((from$604.compare((0))!==getLarger())&&from$604.plus(length$605).compare((0)).equals(getLarger()))?$$singleton:null),opt$606!==null?opt$606:getEmpty());
            };
            $$singleton.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Empty},{t:Singleton,a:{Element:'Element'}}]},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[doc(String$("Returns a `Singleton` if the given starting index \nis `0` and the given `length` is greater than `0`.\nOtherwise, returns an instance of `Empty`.",144)),shared(),actual()];},d:['ceylon.language','Singleton','$m','segment']};};
            $$singleton.span=function (from$607,to$608){
                var $$singleton=this;
                return (opt$609=((((from$607.compare((0))!==getLarger())&&(to$608.compare((0))!==getSmaller()))||((from$607.compare((0))!==getSmaller())&&(to$608.compare((0))!==getLarger())))?$$singleton:null),opt$609!==null?opt$609:getEmpty());
            };
            $$singleton.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Empty},{t:Singleton,a:{Element:'Element'}}]},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[doc(String$("Returns a `Singleton` if the given starting index \nis `0`. Otherwise, returns an instance of `Empty`.",101)),shared(),actual()];},d:['ceylon.language','Singleton','$m','span']};};
            $$singleton.spanTo=function (to$610){
                var $$singleton=this;
                return (opt$611=(to$610.compare((0)).equals(getSmaller())?getEmpty():null),opt$611!==null?opt$611:$$singleton);
            };
            $$singleton.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Empty},{t:Singleton,a:{Element:'Element'}}]},$ps:[{$nm:'to',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','spanTo']};};
            $$singleton.spanFrom=function (from$612){
                var $$singleton=this;
                return (opt$613=(from$612.compare((0)).equals(getLarger())?getEmpty():null),opt$613!==null?opt$613:$$singleton);
            };
            $$singleton.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Empty},{t:Singleton,a:{Element:'Element'}}]},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','spanFrom']};};
            defineAttr($$singleton,'reversed',function(){
                var $$singleton=this;
                return $$singleton;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Singleton,a:{Element:'Element'}},$cont:Singleton,$an:function(){return[doc(String$("Return this singleton.",22)),shared(),actual()];},d:['ceylon.language','Singleton','$at','reversed']};});
            $$singleton.equals=function equals(that$614){
                var $$singleton=this;
                var element$615;
                if((element$615=$$singleton.element$597)!==null){
                    var that$616;
                    if(isOfType((that$616=that$614),{t:List,a:{Element:{t:Anything}}})){
                        if(that$616.size.equals((1))){
                            var elem$617;
                            if((elem$617=that$616.first)!==null){
                                return elem$617.equals(element$615);
                            }
                        }
                    }
                    return false;
                }
                return false;
            };$$singleton.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'that',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[doc(String$("A `Singleton` can be equal to another `List` if \nthat `List` has only one element which is equal to \nthis `Singleton`\'s element.",128)),shared(),actual()];},d:['ceylon.language','Singleton','$m','equals']};};
            defineAttr($$singleton,'hash',function(){
                var $$singleton=this;
                return (31).plus((opt$618=(opt$619=$$singleton.element$597,opt$619!==null?opt$619.hash:null),opt$618!==null?opt$618:(0)));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$at','hash']};});
            $$singleton.contains=function contains(element$620){
                var $$singleton=this;
                var e$621;
                if((e$621=$$singleton.element$597)!==null){
                    return e$621.equals(element$620);
                }
                return false;
            };$$singleton.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'element',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[doc(String$("Returns `true` if the specified element is this \n`Singleton`\'s element.",71)),shared(),actual()];},d:['ceylon.language','Singleton','$m','contains']};};
            $$singleton.count=function (selecting$622){
                var $$singleton=this;
                return (opt$623=(selecting$622($$singleton.element$597)?(1):null),opt$623!==null?opt$623:(0));
            };
            $$singleton.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[doc(String$("Returns `1` if this `Singleton`\'s element\nsatisfies the predicate, or `0` otherwise.",84)),shared(),actual()];},d:['ceylon.language','Singleton','$m','count']};};
            $$singleton.$map=function (selecting$624,$$$mptypes){
                var $$singleton=this;
                return Tuple(selecting$624($$singleton.element$597),getEmpty(),{Rest:{t:Empty},First:$$$mptypes.Result,Element:$$$mptypes.Result});
            };
            $$singleton.$map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequence,a:{Element:'Result'}},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:Singleton,$tp:{Result:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','map']};};
            $$singleton.$filter=function (selecting$625){
                var $$singleton=this;
                return (opt$626=(selecting$625($$singleton.element$597)?$$singleton:null),opt$626!==null?opt$626:getEmpty());
            };
            $$singleton.$filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Singleton,a:{Element:'Element'}},{t:Empty}]},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','filter']};};
            $$singleton.fold=function (initial$627,accumulating$628,$$$mptypes){
                var $$singleton=this;
                return accumulating$628(initial$627,$$singleton.element$597);
            };
            $$singleton.fold.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'initial',$mt:'prm',$t:'Result',$an:function(){return[];}},{$nm:'accumulating',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:Singleton,$tp:{Result:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','fold']};};
            $$singleton.find=function find(selecting$629){
                var $$singleton=this;
                if(selecting$629($$singleton.element$597)){
                    return $$singleton.element$597;
                }
                return null;
            };$$singleton.find.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','find']};};
            $$singleton.findLast=function (selecting$630){
                var $$singleton=this;
                return $$singleton.find($JsCallable(selecting$630,[{$nm:'elem',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$singleton.$$targs$$.Element,Element:$$singleton.$$targs$$.Element}},Return:{t:Boolean$}}));
            };
            $$singleton.findLast.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Singleton','$m','findLast']};};
            $$singleton.$sort=function (comparing$631){
                var $$singleton=this;
                return $$singleton;
            };
            $$singleton.$sort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Singleton,a:{Element:'Element'}},$ps:[{$nm:'comparing',$mt:'prm',$pt:'f',$t:{t:Comparison},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','sort']};};
            $$singleton.any=function (selecting$632){
                var $$singleton=this;
                return selecting$632($$singleton.element$597);
            };
            $$singleton.any.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','any']};};
            $$singleton.$every=function (selecting$633){
                var $$singleton=this;
                return selecting$633($$singleton.element$597);
            };
            $$singleton.$every.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','every']};};
            $$singleton.skipping=function (skip$634){
                var $$singleton=this;
                return (opt$635=(skip$634.compare((1)).equals(getSmaller())?$$singleton:null),opt$635!==null?opt$635:getEmpty());
            };
            $$singleton.skipping.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Singleton,a:{Element:'Element'}},{t:Empty}]},$ps:[{$nm:'skip',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','skipping']};};
            $$singleton.taking=function (take$636){
                var $$singleton=this;
                return (opt$637=(take$636.compare((0)).equals(getLarger())?$$singleton:null),opt$637!==null?opt$637:getEmpty());
            };
            $$singleton.taking.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Singleton,a:{Element:'Element'}},{t:Empty}]},$ps:[{$nm:'take',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:Singleton,$an:function(){return[shared(),actual()];},d:['ceylon.language','Singleton','$m','taking']};};
            defineAttr($$singleton,'coalesced',function(){
                var $$singleton=this;
                var self$638;
                if(isOfType((self$638=$$singleton),{t:Singleton,a:{Element:{t:Object$}}})){
                    return self$638;
                }
                return getEmpty();
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:{ t:'i', l:['Element',{t:Object$}]}}},$cont:Singleton,$an:function(){return[doc(String$("Returns the Singleton itself, or empty",38)),shared(),actual()];},d:['ceylon.language','Singleton','$at','coalesced']};});defineAttr($$singleton,'element$597',function(){return this.element$597_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Singleton,d:['ceylon.language','Singleton','$at','element']};});
        })(Singleton.$$.prototype);
    }
    return Singleton;
}
exports.$init$Singleton=$init$Singleton;
$init$Singleton();
var opt$602,opt$603,opt$606,opt$609,opt$611,opt$613,opt$618,opt$619,opt$623,opt$626,opt$635,opt$637;
function AssertionException(message$639, $$assertionException){
    $init$AssertionException();
    if ($$assertionException===undefined)$$assertionException=new AssertionException.$$;
    $$assertionException.message$639_=message$639;
    Exception($$assertionException.message$639,undefined,$$assertionException);
    return $$assertionException;
}
AssertionException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Exception},satisfies:[],$an:function(){return[doc(String$("An exception that occurs when an assertion fails, that\nis, when a condition in an `assert` statement evaluates\nto false at runtime.",131)),shared()];},d:['ceylon.language','AssertionException']};};
exports.AssertionException=AssertionException;
function $init$AssertionException(){
    if (AssertionException.$$===undefined){
        initTypeProto(AssertionException,'ceylon.language::AssertionException',Exception);
        (function($$assertionException){
            defineAttr($$assertionException,'message$639',function(){return this.message$639_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:String$},$cont:AssertionException,d:['ceylon.language','AssertionException','$at','message']};});
        })(AssertionException.$$.prototype);
    }
    return AssertionException;
}
exports.$init$AssertionException=$init$AssertionException;
$init$AssertionException();
function Map($$targs$$,$$map){
    Collection($$map.$$targs$$===undefined?$$targs$$:{Element:{t:Entry,a:{Key:$$map.$$targs$$.Key,Item:$$map.$$targs$$.Item}}},$$map);
    add_type_arg($$map,'Element',{t:Entry,a:{Key:$$map.$$targs$$.Key,Item:$$map.$$targs$$.Item}});
    Correspondence($$map.$$targs$$===undefined?$$targs$$:{Key:{t:Object$},Item:$$map.$$targs$$.Item},$$map);
    add_type_arg($$map,'Key',{t:Object$});
    Cloneable($$map.$$targs$$===undefined?$$targs$$:{Clone:{t:Map,a:{Key:$$map.$$targs$$.Key,Item:$$map.$$targs$$.Item}}},$$map);
    add_type_arg($$map,'Clone',{t:Map,a:{Key:$$map.$$targs$$.Key,Item:$$map.$$targs$$.Item}});
    set_type_args($$map,$$targs$$);
    $$map.$prop$getKeys={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:'Key'}},$cont:Map,$an:function(){return[doc(String$("Returns the set of keys contained in this `Map`.",48)),actual(),shared(),$default()];},d:['ceylon.language','Map','$at','keys']};}};
    $$map.$prop$getKeys.get=function(){return keys};
    $$map.$prop$getValues={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Collection,a:{Element:'Item'}},$cont:Map,$an:function(){return[doc(String$("Returns all the values stored in this `Map`. An \nelement can be stored under more than one key in \nthe map, and so it can be contained more than once \nin the resulting collection.",179)),shared(),$default()];},d:['ceylon.language','Map','$at','values']};}};
    $$map.$prop$getValues.get=function(){return values};
    $$map.$prop$getInverse={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Map,a:{Key:'Item',Item:{t:Set,a:{Element:'Key'}}}},$cont:Map,$an:function(){return[doc(String$("Returns a `Map` in which every key is an `Item` in \nthis map, and every value is the set of keys that \nstored the `Item` in this map.",133)),shared(),$default()];},d:['ceylon.language','Map','$at','inverse']};}};
    $$map.$prop$getInverse.get=function(){return inverse};
}
Map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Key:{'var':'out','satisfies':[{t:Object$}]},Item:{'var':'out','satisfies':[{t:Object$}]}},satisfies:[{t:Collection,a:{Element:{t:Entry,a:{Key:'Key',Item:'Item'}}}},{t:Correspondence,a:{Key:{t:Object$},Item:'Item'}},{t:Cloneable,a:{Clone:{t:Map,a:{Key:'Key',Item:'Item'}}}}],$an:function(){return[doc(String$("Represents a collection which maps _keys_ to _items_,\nwhere a key can map to at most one item. Each such \nmapping may be represented by an `Entry`.\n\nA `Map` is a `Collection` of its `Entry`s, and a \n`Correspondence` from keys to items.\n\nThe presence of an entry in a map may be tested\nusing the `in` operator:\n\n    if (\"lang\"->\"en_AU\" in settings) { ... }\n\nThe entries of the map may be iterated using `for`:\n\n    for (key->item in settings) { ... }\n\nThe item for a key may be obtained using the item\noperator:\n\n    String lang = settings[\"lang\"] else \"en_US\";",560)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Entry),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),forKey),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),forItem),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),byItem),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),byKey)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:ClassDeclaration$meta$declaration},{t:FunctionDeclaration$meta$declaration}]}})),shared()];},d:['ceylon.language','Map']};};
exports.Map=Map;
function $init$Map(){
    if (Map.$$===undefined){
        initTypeProto(Map,'ceylon.language::Map',$init$Collection(),$init$Correspondence(),$init$Cloneable());
        (function($$map){
            $$map.equals=function equals(that$640){
                var $$map=this;
                var that$641;
                if(isOfType((that$641=that$640),{t:Map,a:{Key:{t:Object$},Item:{t:Object$}}})&&that$641.size.equals($$map.size)){
                    var it$642 = $$map.iterator();
                    var entry$643;while ((entry$643=it$642.next())!==getFinished()){
                        var item$644;
                        if((item$644=that$641.get(entry$643.key))!==null&&item$644.equals(entry$643.item)){
                            continue;
                        }else {
                            return false;
                        }
                    }
                    if (getFinished() === entry$643){
                        return true;
                    }
                }else {
                    return false;
                }
            };$$map.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'that',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:Map,$an:function(){return[doc(String$("Two `Map`s are considered equal iff they have the \nsame _entry sets_. The entry set of a `Map` is the\nset of `Entry`s belonging to the map. Therefore, the\nmaps are equal iff they have same set of `keys`, and \nfor every key in the key set, the maps have equal\nitems.",265)),shared(),actual(),$default()];},d:['ceylon.language','Map','$m','equals']};};
            defineAttr($$map,'hash',function(){
                var $$map=this;
                var hashCode$645=(1);
                var setHashCode$645=function(hashCode$646){return hashCode$645=hashCode$646;};
                $prop$getHashCode$645={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','Map','$at','hash','$at','hashCode']};}};
                $prop$getHashCode$645.get=function(){return hashCode$645};
                $prop$getHashCode$645.set=setHashCode$645;
                if (setHashCode$645.$$metamodel$$===undefined)setHashCode$645.$$metamodel$$=$prop$getHashCode$645.$$metamodel$$;
                var it$647 = $$map.iterator();
                var elem$648;while ((elem$648=it$647.next())!==getFinished()){
                    (hashCode$645=hashCode$645.times((31)));
                    (hashCode$645=hashCode$645.plus(elem$648.hash));
                }
                return hashCode$645;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:Map,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','Map','$at','hash']};});defineAttr($$map,'keys',function(){
                var $$map=this;
                return LazySet(Comprehension(function(){
                    var it$649=$$map.iterator();
                    var k$650,v$651;
                    var next$v$651=function(){
                        var entry$652;
                        if((entry$652=it$649.next())!==getFinished()){
                            k$650=entry$652.key;
                            v$651=entry$652.item;
                            return entry$652;
                        }
                        v$651=undefined;
                        return getFinished();
                    }
                    next$v$651();
                    return function(){
                        if(v$651!==undefined){
                            var k$650$653=k$650;
                            var v$651$654=v$651;
                            var tmpvar$655=k$650$653;
                            next$v$651();
                            return tmpvar$655;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:$$map.$$targs$$.Key}),{Element:$$map.$$targs$$.Key});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:'Key'}},$cont:Map,$an:function(){return[doc(String$("Returns the set of keys contained in this `Map`.",48)),actual(),shared(),$default()];},d:['ceylon.language','Map','$at','keys']};});
            defineAttr($$map,'values',function(){
                var $$map=this;
                return LazyList(Comprehension(function(){
                    var it$656=$$map.iterator();
                    var k$657,v$658;
                    var next$v$658=function(){
                        var entry$659;
                        if((entry$659=it$656.next())!==getFinished()){
                            k$657=entry$659.key;
                            v$658=entry$659.item;
                            return entry$659;
                        }
                        v$658=undefined;
                        return getFinished();
                    }
                    next$v$658();
                    return function(){
                        if(v$658!==undefined){
                            var k$657$660=k$657;
                            var v$658$661=v$658;
                            var tmpvar$662=v$658$661;
                            next$v$658();
                            return tmpvar$662;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:$$map.$$targs$$.Item}),{Element:$$map.$$targs$$.Item});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Collection,a:{Element:'Item'}},$cont:Map,$an:function(){return[doc(String$("Returns all the values stored in this `Map`. An \nelement can be stored under more than one key in \nthe map, and so it can be contained more than once \nin the resulting collection.",179)),shared(),$default()];},d:['ceylon.language','Map','$at','values']};});
            defineAttr($$map,'inverse',function(){
                var $$map=this;
                return LazyMap(Comprehension(function(){
                    var it$663=$$map.iterator();
                    var key$664,item$665;
                    var next$item$665=function(){
                        var entry$666;
                        if((entry$666=it$663.next())!==getFinished()){
                            key$664=entry$666.key;
                            item$665=entry$666.item;
                            return entry$666;
                        }
                        item$665=undefined;
                        return getFinished();
                    }
                    next$item$665();
                    return function(){
                        if(item$665!==undefined){
                            var key$664$667=key$664;
                            var item$665$668=item$665;
                            var tmpvar$669=Entry(item$665$668,LazySet(Comprehension(function(){
                                var it$670=$$map.iterator();
                                var k$671,i$672;
                                var next$i$672=function(){
                                    var entry$673;
                                    while((entry$673=it$670.next())!==getFinished()){
                                        k$671=entry$673.key;
                                        i$672=entry$673.item;
                                        if(i$672.equals(item$665$668)){
                                            return entry$673;
                                        }
                                    }
                                    i$672=undefined;
                                    return getFinished();
                                }
                                next$i$672();
                                return function(){
                                    if(i$672!==undefined){
                                        var k$671$674=k$671;
                                        var i$672$675=i$672;
                                        var tmpvar$676=k$671$674;
                                        next$i$672();
                                        return tmpvar$676;
                                    }
                                    return getFinished();
                                }
                            },{Absent:{t:Null},Element:$$map.$$targs$$.Key}),{Element:$$map.$$targs$$.Key}),{Key:$$map.$$targs$$.Item,Item:{t:LazySet,a:{Element:$$map.$$targs$$.Key}}});
                            next$item$665();
                            return tmpvar$669;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:{t:Entry,a:{Key:$$map.$$targs$$.Item,Item:{t:LazySet,a:{Element:$$map.$$targs$$.Key}}}}}),{Key:$$map.$$targs$$.Item,Item:{t:LazySet,a:{Element:$$map.$$targs$$.Key}}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Map,a:{Key:'Item',Item:{t:Set,a:{Element:'Key'}}}},$cont:Map,$an:function(){return[doc(String$("Returns a `Map` in which every key is an `Item` in \nthis map, and every value is the set of keys that \nstored the `Item` in this map.",133)),shared(),$default()];},d:['ceylon.language','Map','$at','inverse']};});
            $$map.mapItems=function (mapping$677,$$$mptypes){
                var $$map=this;
                return LazyMap(Comprehension(function(){
                    var it$678=$$map.iterator();
                    var key$679,item$680;
                    var next$item$680=function(){
                        var entry$681;
                        if((entry$681=it$678.next())!==getFinished()){
                            key$679=entry$681.key;
                            item$680=entry$681.item;
                            return entry$681;
                        }
                        item$680=undefined;
                        return getFinished();
                    }
                    next$item$680();
                    return function(){
                        if(item$680!==undefined){
                            var key$679$682=key$679;
                            var item$680$683=item$680;
                            var tmpvar$684=Entry(key$679$682,mapping$677(key$679$682,item$680$683),{Key:$$map.$$targs$$.Key,Item:$$$mptypes.Result});
                            next$item$680();
                            return tmpvar$684;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:{t:Entry,a:{Key:$$map.$$targs$$.Key,Item:$$$mptypes.Result}}}),{Key:$$map.$$targs$$.Key,Item:$$$mptypes.Result});
            };
            $$map.mapItems.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Map,a:{Key:'Key',Item:'Result'}},$ps:[{$nm:'mapping',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[doc("The function that transforms a key/item\npair, producing the item of the resulting\nmap.")];}}],$cont:Map,$tp:{Result:{'satisfies':[{t:Object$}]}},$an:function(){return[doc(String$("Returns a `Map` with the same keys as this map. For\nevery key, the item is the result of applying the\ngiven transformation function.",132)),shared(),$default()];},d:['ceylon.language','Map','$m','mapItems']};};
        })(Map.$$.prototype);
    }
    return Map;
}
exports.$init$Map=$init$Map;
$init$Map();
function emptyMap$685($$targs$$){
    var $$emptyMap=new emptyMap$685.$$;
    $$emptyMap.$$targs$$=$$targs$$;
    Object$($$emptyMap);
    Map({Key:{t:Nothing},Item:{t:Nothing}},$$emptyMap);
    $$emptyMap.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Map,a:{Key:{t:Nothing},Item:{t:Nothing}}},$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$at','clone']};}};
    $$emptyMap.$prop$getClone.get=function(){return clone};
    $$emptyMap.$prop$getKeys.get=function(){return keys};
    $$emptyMap.$prop$getInverse.get=function(){return inverse};
    $$emptyMap.$prop$getValues.get=function(){return values};
    $$emptyMap.size$686_=(0);
    $$emptyMap.$prop$getSize={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$at','size']};}};
    $$emptyMap.$prop$getSize.get=function(){return size};
    $$emptyMap.empty$687_=true;
    $$emptyMap.$prop$getEmpty={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$at','empty']};}};
    $$emptyMap.$prop$getEmpty.get=function(){return empty};
    return $$emptyMap;
}
function $init$emptyMap$685(){
    if (emptyMap$685.$$===undefined){
        initTypeProto(emptyMap$685,'ceylon.language::emptyMap',Object$,$init$Map());
    }
    return emptyMap$685;
}
exports.$init$emptyMap$685=$init$emptyMap$685;
$init$emptyMap$685();
(function($$emptyMap){
    defineAttr($$emptyMap,'clone',function(){
        var $$emptyMap=this;
        return getEmptyMap();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Map,a:{Key:{t:Nothing},Item:{t:Nothing}}},$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$at','clone']};});
    $$emptyMap.iterator=function (){
        var $$emptyMap=this;
        return getEmptyIterator();
    };
    $$emptyMap.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:{t:Nothing}}},$ps:[],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','iterator']};};
    $$emptyMap.get=function (key$688){
        var $$emptyMap=this;
        return null;
    };
    $$emptyMap.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Null},$ps:[{$nm:'key',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','get']};};
    defineAttr($$emptyMap,'keys',function(){
        var $$emptyMap=this;
        return getEmptySet();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{t:Nothing}}},$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$at','keys']};});
    $$emptyMap.mapItems=function (mapping$689,$$$mptypes){
        var $$emptyMap=this;
        return getEmptyMap();
    };
    $$emptyMap.mapItems.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Map,a:{Key:{t:Nothing},Item:{t:Nothing}}},$ps:[{$nm:'mapping',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:emptyMap$685,$tp:{Result:{'satisfies':[{t:Object$}]}},$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','mapItems']};};
    defineAttr($$emptyMap,'inverse',function(){
        var $$emptyMap=this;
        return getEmptyMap();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Map,a:{Key:{t:Nothing},Item:{t:Nothing}}},$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$at','inverse']};});
    defineAttr($$emptyMap,'values',function(){
        var $$emptyMap=this;
        return getEmpty();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Collection,a:{Element:{t:Nothing}}},$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$at','values']};});
    defineAttr($$emptyMap,'size',function(){return this.size$686_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$at','size']};});
    defineAttr($$emptyMap,'empty',function(){return this.empty$687_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$at','empty']};});
    $$emptyMap.contains=function (element$690){
        var $$emptyMap=this;
        return false;
    };
    $$emptyMap.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'element',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','contains']};};
    $$emptyMap.containsAny=function (elements$691){
        var $$emptyMap=this;
        return false;
    };
    $$emptyMap.containsAny.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'elements',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Object$}}},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','containsAny']};};
    $$emptyMap.containsEvery=function (elements$692){
        var $$emptyMap=this;
        return false;
    };
    $$emptyMap.containsEvery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'elements',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Object$}}},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','containsEvery']};};
    $$emptyMap.count=function (selecting$693){
        var $$emptyMap=this;
        return (0);
    };
    $$emptyMap.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','count']};};
    $$emptyMap.defines=function (index$694){
        var $$emptyMap=this;
        return false;
    };
    $$emptyMap.defines.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'index',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','defines']};};
    $$emptyMap.$map=function (collecting$695,$$$mptypes){
        var $$emptyMap=this;
        return getEmpty();
    };
    $$emptyMap.$map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'collecting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:emptyMap$685,$tp:{Result:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','map']};};
    $$emptyMap.$filter=function (selecting$696){
        var $$emptyMap=this;
        return getEmptyMap();
    };
    $$emptyMap.$filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Map,a:{Key:{t:Nothing},Item:{t:Nothing}}},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','filter']};};
    $$emptyMap.fold=function (initial$697,accumulating$698,$$$mptypes){
        var $$emptyMap=this;
        return initial$697;
    };
    $$emptyMap.fold.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'initial',$mt:'prm',$t:'Result',$an:function(){return[];}},{$nm:'accumulating',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:emptyMap$685,$tp:{Result:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','fold']};};
    $$emptyMap.find=function (selecting$699){
        var $$emptyMap=this;
        return null;
    };
    $$emptyMap.find.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Null},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','find']};};
    $$emptyMap.collect=function (collecting$700,$$$mptypes){
        var $$emptyMap=this;
        return getEmpty();
    };
    $$emptyMap.collect.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'collecting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$cont:emptyMap$685,$tp:{Result:{}},$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','collect']};};
    $$emptyMap.select=function (selecting$701){
        var $$emptyMap=this;
        return getEmpty();
    };
    $$emptyMap.select.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Empty},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','select']};};
    $$emptyMap.any=function (selecting$702){
        var $$emptyMap=this;
        return false;
    };
    $$emptyMap.any.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','any']};};
    $$emptyMap.$every=function (selecting$703){
        var $$emptyMap=this;
        return false;
    };
    $$emptyMap.$every.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','every']};};
    $$emptyMap.skipping=function (skip$704){
        var $$emptyMap=this;
        return getEmptyMap();
    };
    $$emptyMap.skipping.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Map,a:{Key:{t:Nothing},Item:{t:Nothing}}},$ps:[{$nm:'skip',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','skipping']};};
    $$emptyMap.taking=function (take$705){
        var $$emptyMap=this;
        return getEmptyMap();
    };
    $$emptyMap.taking.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Map,a:{Key:{t:Nothing},Item:{t:Nothing}}},$ps:[{$nm:'take',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','taking']};};
    $$emptyMap.by=function (step$706){
        var $$emptyMap=this;
        return getEmptyMap();
    };
    $$emptyMap.by.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Map,a:{Key:{t:Nothing},Item:{t:Nothing}}},$ps:[{$nm:'step',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:emptyMap$685,$an:function(){return[shared(),actual()];},d:['ceylon.language','emptyMap','$m','by']};};
})(emptyMap$685.$$.prototype);
var emptyMap$707=emptyMap$685({Key:{t:Nothing},Item:{t:Nothing}});
var getEmptyMap=function(){
    return emptyMap$707;
}
exports.getEmptyMap=getEmptyMap;
getEmptyMap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:emptyMap$685},$an:function(){return[doc(String$("A [[Map]] with no entries.",26)),shared()];},d:['ceylon.language','emptyMap']};};
$prop$getEmptyMap={get:getEmptyMap,$$metamodel$$:getEmptyMap.$$metamodel$$};
exports.$prop$getEmptyMap=$prop$getEmptyMap;
function LazyMap(entries$708, $$targs$$,$$lazyMap){
    $init$LazyMap();
    if ($$lazyMap===undefined)$$lazyMap=new LazyMap.$$;
    set_type_args($$lazyMap,$$targs$$);
    $$lazyMap.entries$708_=entries$708;
    Map($$lazyMap.$$targs$$===undefined?$$targs$$:{Key:$$lazyMap.$$targs$$.Key,Item:$$lazyMap.$$targs$$.Item},$$lazyMap);
    $$lazyMap.$prop$getFirst={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Entry,a:{Key:'Key',Item:'Item'}}]},$cont:LazyMap,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyMap','$at','first']};}};
    $$lazyMap.$prop$getFirst.get=function(){return first};
    $$lazyMap.$prop$getLast={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Entry,a:{Key:'Key',Item:'Item'}}]},$cont:LazyMap,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyMap','$at','last']};}};
    $$lazyMap.$prop$getLast.get=function(){return last};
    $$lazyMap.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LazyMap,a:{Key:'Key',Item:'Item'}},$cont:LazyMap,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyMap','$at','clone']};}};
    $$lazyMap.$prop$getClone.get=function(){return clone};
    $$lazyMap.$prop$getSize={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:LazyMap,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyMap','$at','size']};}};
    $$lazyMap.$prop$getSize.get=function(){return size};
    return $$lazyMap;
}
LazyMap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Basic},$tp:{Key:{'var':'out','satisfies':[{t:Object$}]},Item:{'var':'out','satisfies':[{t:Object$}]}},satisfies:[{t:Map,a:{Key:'Key',Item:'Item'}}],$an:function(){return[doc(String$("A `Map` implementation that wraps an `Iterable` of \nentries. All operations, such as lookups, size, etc. \nare performed on the `Iterable`.",138)),by([String$("Enrique Zamudio",15)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','LazyMap']};};
exports.LazyMap=LazyMap;
function $init$LazyMap(){
    if (LazyMap.$$===undefined){
        initTypeProto(LazyMap,'ceylon.language::LazyMap',Basic,$init$Map());
        (function($$lazyMap){
            defineAttr($$lazyMap,'first',function(){
                var $$lazyMap=this;
                return $$lazyMap.entries$708.first;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Entry,a:{Key:'Key',Item:'Item'}}]},$cont:LazyMap,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyMap','$at','first']};});
            defineAttr($$lazyMap,'last',function(){
                var $$lazyMap=this;
                return $$lazyMap.entries$708.last;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Entry,a:{Key:'Key',Item:'Item'}}]},$cont:LazyMap,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyMap','$at','last']};});
            defineAttr($$lazyMap,'clone',function(){
                var $$lazyMap=this;
                return $$lazyMap;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:LazyMap,a:{Key:'Key',Item:'Item'}},$cont:LazyMap,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyMap','$at','clone']};});
            defineAttr($$lazyMap,'size',function(){
                var $$lazyMap=this;
                return $$lazyMap.entries$708.size;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:LazyMap,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyMap','$at','size']};});
            $$lazyMap.get=function (key$709){
                var $$lazyMap=this;
                return (opt$710=$$lazyMap.entries$708.find($JsCallable(function (e$711){
                    var $$lazyMap=this;
                    return e$711.key.equals(key$709);
                },[{$nm:'e',$mt:'prm',$t:{t:Entry,a:{Key:'Key',Item:'Item'}},$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:{t:Entry,a:{Key:$$lazyMap.$$targs$$.Key,Item:$$lazyMap.$$targs$$.Item}},Element:{t:Entry,a:{Key:$$lazyMap.$$targs$$.Key,Item:$$lazyMap.$$targs$$.Item}}}},Return:{t:Boolean$}})),opt$710!==null?opt$710.item:null);
            };
            $$lazyMap.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:LazyMap,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyMap','$m','get']};};
            $$lazyMap.iterator=function (){
                var $$lazyMap=this;
                return $$lazyMap.entries$708.iterator();
            };
            $$lazyMap.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:{t:Entry,a:{Key:'Key',Item:'Item'}}}},$ps:[],$cont:LazyMap,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyMap','$m','iterator']};};
            $$lazyMap.equals=function equals(that$712){
                var $$lazyMap=this;
                var that$713;
                if(isOfType((that$713=that$712),{t:Map,a:{Key:{t:Object$},Item:{t:Object$}}})){
                    if(that$713.size.equals($$lazyMap.size)){
                        var it$714 = $$lazyMap.iterator();
                        var entry$715;while ((entry$715=it$714.next())!==getFinished()){
                            var item$716;
                            if((item$716=that$713.get(entry$715.key))!==null){
                                if(item$716.equals(entry$715.item)){
                                    continue;
                                }
                            }
                            return false;
                        }
                        if (getFinished() === entry$715){
                            return true;
                        }
                    }
                }
                return false;
            };$$lazyMap.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'that',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:LazyMap,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','LazyMap','$m','equals']};};
            defineAttr($$lazyMap,'hash',function(){
                var $$lazyMap=this;
                var hashCode$717=(1);
                var setHashCode$717=function(hashCode$718){return hashCode$717=hashCode$718;};
                $prop$getHashCode$717={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','LazyMap','$at','hash','$at','hashCode']};}};
                $prop$getHashCode$717.get=function(){return hashCode$717};
                $prop$getHashCode$717.set=setHashCode$717;
                if (setHashCode$717.$$metamodel$$===undefined)setHashCode$717.$$metamodel$$=$prop$getHashCode$717.$$metamodel$$;
                var it$719 = $$lazyMap.entries$708.iterator();
                var elem$720;while ((elem$720=it$719.next())!==getFinished()){
                    (hashCode$717=hashCode$717.times((31)));
                    (hashCode$717=hashCode$717.plus(elem$720.hash));
                }
                return hashCode$717;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:LazyMap,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','LazyMap','$at','hash']};});defineAttr($$lazyMap,'entries$708',function(){return this.entries$708_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Entry,a:{Key:'Key',Item:'Item'}}}},$cont:LazyMap,d:['ceylon.language','LazyMap','$at','entries']};});
        })(LazyMap.$$.prototype);
    }
    return LazyMap;
}
exports.$init$LazyMap=$init$LazyMap;
$init$LazyMap();
var opt$710;
function LazyList(elems$721, $$targs$$,$$lazyList){
    $init$LazyList();
    if ($$lazyList===undefined)$$lazyList=new LazyList.$$;
    set_type_args($$lazyList,$$targs$$);
    $$lazyList.elems$721_=elems$721;
    List($$lazyList.$$targs$$===undefined?$$targs$$:{Element:$$lazyList.$$targs$$.Element},$$lazyList);
    $$lazyList.$prop$getRest={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$cont:LazyList,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyList','$at','rest']};}};
    $$lazyList.$prop$getRest.get=function(){return rest};
    $$lazyList.$prop$getReversed={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$cont:LazyList,$an:function(){return[doc(String$("Returns a `List` with the elements of this `List` \nin reverse order. This operation will create copy \nthe elements to a new `List`, so changes to the \noriginal `Iterable` will no longer be reflected in \nthe new `List`.",218)),shared(),actual()];},d:['ceylon.language','LazyList','$at','reversed']};}};
    $$lazyList.$prop$getReversed.get=function(){return reversed};
    $$lazyList.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$cont:LazyList,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyList','$at','clone']};}};
    $$lazyList.$prop$getClone.get=function(){return clone};
    $$lazyList.$prop$getFirst={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$cont:LazyList,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','LazyList','$at','first']};}};
    $$lazyList.$prop$getFirst.get=function(){return first};
    $$lazyList.$prop$getLast={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$cont:LazyList,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','LazyList','$at','last']};}};
    $$lazyList.$prop$getLast.get=function(){return last};
    return $$lazyList;
}
LazyList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Basic},$tp:{Element:{'var':'out'}},satisfies:[{t:List,a:{Element:'Element'}}],$an:function(){return[doc(String$("An implementation of `List` that wraps an `Iterable` of\nelements. All operations on this `List` are performed on \nthe `Iterable`.",129)),by([String$("Enrique Zamudio",15)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','LazyList']};};
exports.LazyList=LazyList;
function $init$LazyList(){
    if (LazyList.$$===undefined){
        initTypeProto(LazyList,'ceylon.language::LazyList',Basic,$init$List());
        (function($$lazyList){
            defineAttr($$lazyList,'lastIndex',function(){
                var $$lazyList=this;
                var size$722=$$lazyList.elems$721.size;
                $prop$getSize$722={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','LazyList','$at','lastIndex','$at','size']};}};
                $prop$getSize$722.get=function(){return size$722};
                return (opt$723=(size$722.compare((0)).equals(getLarger())?size$722.minus((1)):null),opt$723!==null?opt$723:null);
                var opt$723;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},$cont:LazyList,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyList','$at','lastIndex']};});$$lazyList.get=function get(index$724){
                var $$lazyList=this;
                if(index$724.equals((0))){
                    return $$lazyList.elems$721.first;
                }else {
                    return $$lazyList.elems$721.skipping(index$724).first;
                }
            };$$lazyList.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:LazyList,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyList','$m','get']};};
            defineAttr($$lazyList,'rest',function(){
                var $$lazyList=this;
                return LazyList($$lazyList.elems$721.rest,{Element:$$lazyList.$$targs$$.Element});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$cont:LazyList,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyList','$at','rest']};});
            $$lazyList.iterator=function (){
                var $$lazyList=this;
                return $$lazyList.elems$721.iterator();
            };
            $$lazyList.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:LazyList,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyList','$m','iterator']};};
            defineAttr($$lazyList,'reversed',function(){
                var $$lazyList=this;
                return $$lazyList.elems$721.sequence.reversed;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$cont:LazyList,$an:function(){return[doc(String$("Returns a `List` with the elements of this `List` \nin reverse order. This operation will create copy \nthe elements to a new `List`, so changes to the \noriginal `Iterable` will no longer be reflected in \nthe new `List`.",218)),shared(),actual()];},d:['ceylon.language','LazyList','$at','reversed']};});
            defineAttr($$lazyList,'clone',function(){
                var $$lazyList=this;
                return $$lazyList;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$cont:LazyList,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyList','$at','clone']};});
            $$lazyList.span=function span(from$725,to$726){
                var $$lazyList=this;
                if((to$726.compare((0)).equals(getSmaller())&&from$725.compare((0)).equals(getSmaller()))){
                    return getEmpty();
                }
                var toIndex$727=largest(to$726,(0),{Element:{t:Integer}});
                $prop$getToIndex$727={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','LazyList','$m','span','$at','toIndex']};}};
                $prop$getToIndex$727.get=function(){return toIndex$727};
                var fromIndex$728=largest(from$725,(0),{Element:{t:Integer}});
                $prop$getFromIndex$728={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','LazyList','$m','span','$at','fromIndex']};}};
                $prop$getFromIndex$728.get=function(){return fromIndex$728};
                if((toIndex$727.compare(fromIndex$728)!==getSmaller())){
                    var els$729=(opt$730=(fromIndex$728.compare((0)).equals(getLarger())?$$lazyList.elems$721.skipping(fromIndex$728):null),opt$730!==null?opt$730:$$lazyList.elems$721);
                    $prop$getEls$729={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},d:['ceylon.language','LazyList','$m','span','$at','els']};}};
                    $prop$getEls$729.get=function(){return els$729};
                    var opt$730;
                    return LazyList(els$729.taking(toIndex$727.minus(fromIndex$728).plus((1))),{Element:$$lazyList.$$targs$$.Element});
                }else {
                    var seq$731=(opt$732=(toIndex$727.compare((0)).equals(getLarger())?$$lazyList.elems$721.skipping(toIndex$727):null),opt$732!==null?opt$732:$$lazyList.elems$721);
                    $prop$getSeq$731={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},d:['ceylon.language','LazyList','$m','span','$at','seq']};}};
                    $prop$getSeq$731.get=function(){return seq$731};
                    var opt$732;
                    return seq$731.taking(fromIndex$728.minus(toIndex$727).plus((1))).sequence.reversed;
                }
            };$$lazyList.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:LazyList,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyList','$m','span']};};
            $$lazyList.spanTo=function (to$733){
                var $$lazyList=this;
                return (opt$734=(to$733.compare((0)).equals(getSmaller())?getEmpty():null),opt$734!==null?opt$734:LazyList($$lazyList.elems$721.taking(to$733.plus((1))),{Element:$$lazyList.$$targs$$.Element}));
            };
            $$lazyList.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$ps:[{$nm:'to',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:LazyList,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyList','$m','spanTo']};};
            $$lazyList.spanFrom=function (from$735){
                var $$lazyList=this;
                return (opt$736=(from$735.compare((0)).equals(getLarger())?LazyList($$lazyList.elems$721.skipping(from$735),{Element:$$lazyList.$$targs$$.Element}):null),opt$736!==null?opt$736:$$lazyList);
            };
            $$lazyList.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:LazyList,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyList','$m','spanFrom']};};
            $$lazyList.segment=function segment(from$737,length$738){
                var $$lazyList=this;
                if(length$738.compare((0)).equals(getLarger())){
                    var els$739=(opt$740=(from$737.compare((0)).equals(getLarger())?$$lazyList.elems$721.skipping(from$737):null),opt$740!==null?opt$740:$$lazyList.elems$721);
                    $prop$getEls$739={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},d:['ceylon.language','LazyList','$m','segment','$at','els']};}};
                    $prop$getEls$739.get=function(){return els$739};
                    var opt$740;
                    return LazyList(els$739.taking(length$738),{Element:$$lazyList.$$targs$$.Element});
                }else {
                    return getEmpty();
                }
            };$$lazyList.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],$cont:LazyList,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazyList','$m','segment']};};
            $$lazyList.equals=function equals(that$741){
                var $$lazyList=this;
                var that$742;
                if(isOfType((that$742=that$741),{t:List,a:{Element:{t:Anything}}})){
                    var size$743=$$lazyList.elems$721.size;
                    $prop$getSize$743={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','LazyList','$m','equals','$at','size']};}};
                    $prop$getSize$743.get=function(){return size$743};
                    if(that$742.size.equals(size$743)){
                        var it$744 = Range((0),size$743.minus((1)),{Element:{t:Integer}}).iterator();
                        var i$745;while ((i$745=it$744.next())!==getFinished()){
                            var x$746=$$lazyList.get(i$745);
                            $prop$getX$746={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},d:['ceylon.language','LazyList','$m','equals','$at','x']};}};
                            $prop$getX$746.get=function(){return x$746};
                            var y$747=that$742.get(i$745);
                            $prop$getY$747={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Anything},d:['ceylon.language','LazyList','$m','equals','$at','y']};}};
                            $prop$getY$747.get=function(){return y$747};
                            var x$748;
                            if((x$748=x$746)!==null){
                                var y$749;
                                if((y$749=y$747)!==null){
                                    if((!x$748.equals(y$749))){
                                        return false;
                                    }
                                }else {
                                    return false;
                                }
                            }else {
                                var y$750;
                                if((y$750=y$747)!==null){
                                    return false;
                                }
                            }
                        }
                        if (getFinished() === i$745){
                            return true;
                        }
                    }
                }
                return false;
            };$$lazyList.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'that',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:LazyList,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','LazyList','$m','equals']};};
            defineAttr($$lazyList,'hash',function(){
                var $$lazyList=this;
                var hash$751=(1);
                var setHash$751=function(hash$752){return hash$751=hash$752;};
                $prop$getHash$751={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','LazyList','$at','hash','$at','hash']};}};
                $prop$getHash$751.get=function(){return hash$751};
                $prop$getHash$751.set=setHash$751;
                if (setHash$751.$$metamodel$$===undefined)setHash$751.$$metamodel$$=$prop$getHash$751.$$metamodel$$;
                var it$753 = $$lazyList.elems$721.iterator();
                var elem$754;while ((elem$754=it$753.next())!==getFinished()){
                    (hash$751=hash$751.times((31)));
                    var elem$755;
                    if((elem$755=elem$754)!==null){
                        (hash$751=hash$751.plus(elem$755.hash));
                    }
                }
                return hash$751;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:LazyList,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','LazyList','$at','hash']};});$$lazyList.findLast=function (selecting$756){
                var $$lazyList=this;
                return $$lazyList.elems$721.findLast($JsCallable(selecting$756,[{$nm:'elem',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$lazyList.$$targs$$.Element,Element:$$lazyList.$$targs$$.Element}},Return:{t:Boolean$}}));
            };
            $$lazyList.findLast.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:Boolean$},$an:function(){return[];}}],$cont:LazyList,$an:function(){return[shared(),$default(),actual()];},d:['ceylon.language','LazyList','$m','findLast']};};
            defineAttr($$lazyList,'first',function(){
                var $$lazyList=this;
                return $$lazyList.elems$721.first;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$cont:LazyList,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','LazyList','$at','first']};});
            defineAttr($$lazyList,'last',function(){
                var $$lazyList=this;
                return $$lazyList.elems$721.last;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Element']},$cont:LazyList,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','LazyList','$at','last']};});
            defineAttr($$lazyList,'elems$721',function(){return this.elems$721_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$cont:LazyList,d:['ceylon.language','LazyList','$at','elems']};});
        })(LazyList.$$.prototype);
    }
    return LazyList;
}
exports.$init$LazyList=$init$LazyList;
$init$LazyList();
var opt$734,opt$736;
function LazySet(elems$757, $$targs$$,$$lazySet){
    $init$LazySet();
    if ($$lazySet===undefined)$$lazySet=new LazySet.$$;
    set_type_args($$lazySet,$$targs$$);
    $$lazySet.elems$757_=elems$757;
    Set($$lazySet.$$targs$$===undefined?$$targs$$:{Element:$$lazySet.$$targs$$.Element},$$lazySet);
    $$lazySet.$prop$getClone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LazySet,a:{Element:'Element'}},$cont:LazySet,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazySet','$at','clone']};}};
    $$lazySet.$prop$getClone.get=function(){return clone};
    return $$lazySet;
}
LazySet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Basic},$tp:{Element:{'var':'out','satisfies':[{t:Object$}]}},satisfies:[{t:Set,a:{Element:'Element'}}],$an:function(){return[doc(String$("An implementation of `Set` that wraps an `Iterable` of\nelements. All operations on this `Set` are performed\non the `Iterable`.",126)),by([String$("Enrique Zamudio",15)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','LazySet']};};
exports.LazySet=LazySet;
function $init$LazySet(){
    if (LazySet.$$===undefined){
        initTypeProto(LazySet,'ceylon.language::LazySet',Basic,$init$Set());
        (function($$lazySet){
            defineAttr($$lazySet,'clone',function(){
                var $$lazySet=this;
                return $$lazySet;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:LazySet,a:{Element:'Element'}},$cont:LazySet,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazySet','$at','clone']};});
            defineAttr($$lazySet,'size',function(){
                var $$lazySet=this;
                var c$758=(0);
                var setC$758=function(c$759){return c$758=c$759;};
                $prop$getC$758={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','LazySet','$at','size','$at','c']};}};
                $prop$getC$758.get=function(){return c$758};
                $prop$getC$758.set=setC$758;
                if (setC$758.$$metamodel$$===undefined)setC$758.$$metamodel$$=$prop$getC$758.$$metamodel$$;
                var sorted$760=$$lazySet.elems$757.$sort($JsCallable(byIncreasing($JsCallable(function (e$761){
                    var $$lazySet=this;
                    return e$761.hash;
                },[{$nm:'e',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$lazySet.$$targs$$.Element,Element:$$lazySet.$$targs$$.Element}},Return:{t:Integer}}),{Value:{t:Integer},Element:$$lazySet.$$targs$$.Element}),[{$nm:'p1',$mt:'prm',$t:'Element'},{$nm:'p2',$mt:'prm',$t:'Element'}],{Arguments:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:{t:Empty},First:$$lazySet.$$targs$$.Element,Element:$$lazySet.$$targs$$.Element}},First:$$lazySet.$$targs$$.Element,Element:$$lazySet.$$targs$$.Element}},Return:{t:Comparison}}));
                $prop$getSorted$760={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},d:['ceylon.language','LazySet','$at','size','$at','sorted']};}};
                $prop$getSorted$760.get=function(){return sorted$760};
                var l$762;
                if((l$762=sorted$760.first)!==null){
                    c$758=(1);
                    var last$763=l$762;
                    var setLast$763=function(last$764){return last$763=last$764;};
                    $prop$getLast$763={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$an:function(){return[variable()];},d:['ceylon.language','LazySet','$at','size','$at','last']};}};
                    $prop$getLast$763.get=function(){return last$763};
                    $prop$getLast$763.set=setLast$763;
                    if (setLast$763.$$metamodel$$===undefined)setLast$763.$$metamodel$$=$prop$getLast$763.$$metamodel$$;
                    var it$765 = sorted$760.rest.iterator();
                    var e$766;while ((e$766=it$765.next())!==getFinished()){
                        if((!e$766.equals(last$763))){
                            (oldc$767=c$758,c$758=oldc$767.successor,oldc$767);
                            var oldc$767;
                            last$763=e$766;
                        }
                    }
                }
                return c$758;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:LazySet,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazySet','$at','size']};});$$lazySet.iterator=function iterator(){
                var $$lazySet=this;
                function iterator$768($$targs$$){
                    var $$iterator$768=new iterator$768.$$;
                    $$iterator$768.$$targs$$=$$targs$$;
                    Iterator({Element:$$lazySet.$$targs$$.Element},$$iterator$768);
                    $$iterator$768.sorted$769_=$$lazySet.elems$757.$sort($JsCallable(byIncreasing($JsCallable(function (e$770){
                        var $$lazySet=this;
                        return e$770.hash;
                    },[{$nm:'e',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$lazySet.$$targs$$.Element,Element:$$lazySet.$$targs$$.Element}},Return:{t:Integer}}),{Value:{t:Integer},Element:$$lazySet.$$targs$$.Element}),[{$nm:'p1',$mt:'prm',$t:'Element'},{$nm:'p2',$mt:'prm',$t:'Element'}],{Arguments:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:{t:Empty},First:$$lazySet.$$targs$$.Element,Element:$$lazySet.$$targs$$.Element}},First:$$lazySet.$$targs$$.Element,Element:$$lazySet.$$targs$$.Element}},Return:{t:Comparison}})).iterator();
                    $$iterator$768.$prop$getSorted$769={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$cont:iterator$768,d:['ceylon.language','LazySet','$m','iterator','$o','iterator','$at','sorted']};}};
                    $$iterator$768.$prop$getSorted$769.get=function(){return sorted$769};
                    $$iterator$768.ready$771_=$$iterator$768.sorted$769.next();
                    $$iterator$768.$prop$getReady$771={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$cont:iterator$768,$an:function(){return[variable()];},d:['ceylon.language','LazySet','$m','iterator','$o','iterator','$at','ready']};}};
                    $$iterator$768.$prop$getReady$771.get=function(){return ready$771};
                    return $$iterator$768;
                }
                function $init$iterator$768(){
                    if (iterator$768.$$===undefined){
                        initTypeProto(iterator$768,'ceylon.language::LazySet.iterator.iterator',Basic,$init$Iterator());
                    }
                    return iterator$768;
                }
                $init$iterator$768();
                (function($$iterator$768){
                    defineAttr($$iterator$768,'sorted$769',function(){return this.sorted$769_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$cont:iterator$768,d:['ceylon.language','LazySet','$m','iterator','$o','iterator','$at','sorted']};});
                    defineAttr($$iterator$768,'ready$771',function(){return this.ready$771_;},function(ready$772){return this.ready$771_=ready$772;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$cont:iterator$768,$an:function(){return[variable()];},d:['ceylon.language','LazySet','$m','iterator','$o','iterator','$at','ready']};});
                    $$iterator$768.next=function next(){
                        var $$iterator$768=this;
                        var next$773=$$iterator$768.ready$771;
                        $prop$getNext$773={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},d:['ceylon.language','LazySet','$m','iterator','$o','iterator','$m','next','$at','next']};}};
                        $prop$getNext$773.get=function(){return next$773};
                        var next$774;
                        if(!isOfType((next$774=next$773),{t:Finished})){
                            while(next$774.equals($$iterator$768.ready$771)){
                                $$iterator$768.ready$771=$$iterator$768.sorted$769.next();
                            }
                        }
                        return next$773;
                    };$$iterator$768.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},$ps:[],$cont:iterator$768,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazySet','$m','iterator','$o','iterator','$m','next']};};
                })(iterator$768.$$.prototype);
                var iterator$775=iterator$768({Element:$$lazySet.$$targs$$.Element});
                var getIterator$775=function(){
                    return iterator$775;
                }
                getIterator$775.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterator$768},d:['ceylon.language','LazySet','$m','iterator','$at','iterator']};};
                $prop$getIterator$775={get:getIterator$775,$$metamodel$$:getIterator$775.$$metamodel$$};
                return getIterator$775();
            };$$lazySet.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$ps:[],$cont:LazySet,$an:function(){return[shared(),actual()];},d:['ceylon.language','LazySet','$m','iterator']};};
            $$lazySet.union=function (set$776,$$$mptypes){
                var $$lazySet=this;
                return LazySet($$lazySet.elems$757.chain(set$776,{Other:$$$mptypes.Other,OtherAbsent:{t:Null}}),{Element:{ t:'u', l:[$$lazySet.$$targs$$.Element,$$$mptypes.Other]}});
            };
            $$lazySet.union.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:LazySet,$tp:{Other:{'satisfies':[{t:Object$}]}},$an:function(){return[shared(),actual()];},d:['ceylon.language','LazySet','$m','union']};};
            $$lazySet.intersection=function (set$777,$$$mptypes){
                var $$lazySet=this;
                return LazySet(Comprehension(function(){
                    var e$780;
                    var it$778=set$777.iterator();
                    var e$779=getFinished();
                    var e$780;
                    var next$e$779=function(){
                        while((e$779=it$778.next())!==getFinished()){
                            if(isOfType((e$780=e$779),$$lazySet.$$targs$$.Element)&&$$lazySet.contains(e$780)){
                                return e$779;
                            }
                        }
                        return getFinished();
                    }
                    next$e$779();
                    return function(){
                        if(e$779!==getFinished()){
                            var e$779$781=e$779;
                            var tmpvar$782=e$780;
                            next$e$779();
                            return tmpvar$782;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:{ t:'i', l:[$$$mptypes.Other,$$lazySet.$$targs$$.Element]}}),{Element:{ t:'i', l:[$$$mptypes.Other,$$lazySet.$$targs$$.Element]}});
            };
            $$lazySet.intersection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{ t:'i', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:LazySet,$tp:{Other:{'satisfies':[{t:Object$}]}},$an:function(){return[shared(),actual()];},d:['ceylon.language','LazySet','$m','intersection']};};
            $$lazySet.exclusiveUnion=function exclusiveUnion(other$783,$$$mptypes){
                var $$lazySet=this;
                var hereNotThere$784=Comprehension(function(){
                    var it$785=$$lazySet.elems$757.iterator();
                    var e$786=getFinished();
                    var next$e$786=function(){
                        while((e$786=it$785.next())!==getFinished()){
                            if((!other$783.contains(e$786))){
                                return e$786;
                            }
                        }
                        return getFinished();
                    }
                    next$e$786();
                    return function(){
                        if(e$786!==getFinished()){
                            var e$786$787=e$786;
                            var tmpvar$788=e$786$787;
                            next$e$786();
                            return tmpvar$788;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:$$lazySet.$$targs$$.Element});
                $prop$getHereNotThere$784={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},d:['ceylon.language','LazySet','$m','exclusiveUnion','$at','hereNotThere']};}};
                $prop$getHereNotThere$784.get=function(){return hereNotThere$784};
                var thereNotHere$789=Comprehension(function(){
                    var it$790=other$783.iterator();
                    var e$791=getFinished();
                    var next$e$791=function(){
                        while((e$791=it$790.next())!==getFinished()){
                            if((!$$lazySet.contains(e$791))){
                                return e$791;
                            }
                        }
                        return getFinished();
                    }
                    next$e$791();
                    return function(){
                        if(e$791!==getFinished()){
                            var e$791$792=e$791;
                            var tmpvar$793=e$791$792;
                            next$e$791();
                            return tmpvar$793;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:$$$mptypes.Other});
                $prop$getThereNotHere$789={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Other'}},d:['ceylon.language','LazySet','$m','exclusiveUnion','$at','thereNotHere']};}};
                $prop$getThereNotHere$789.get=function(){return thereNotHere$789};
                return LazySet(hereNotThere$784.chain(thereNotHere$789,{Other:$$$mptypes.Other,OtherAbsent:{t:Null}}),{Element:{ t:'u', l:[$$lazySet.$$targs$$.Element,$$$mptypes.Other]}});
            };$$lazySet.exclusiveUnion.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'other',$mt:'prm',$t:{t:Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:LazySet,$tp:{Other:{'satisfies':[{t:Object$}]}},$an:function(){return[shared(),actual()];},d:['ceylon.language','LazySet','$m','exclusiveUnion']};};
            $$lazySet.complement=function (set$794,$$$mptypes){
                var $$lazySet=this;
                return LazySet(Comprehension(function(){
                    var it$795=$$lazySet.iterator();
                    var e$796=getFinished();
                    var next$e$796=function(){
                        while((e$796=it$795.next())!==getFinished()){
                            if((!set$794.contains(e$796))){
                                return e$796;
                            }
                        }
                        return getFinished();
                    }
                    next$e$796();
                    return function(){
                        if(e$796!==getFinished()){
                            var e$796$797=e$796;
                            var tmpvar$798=e$796$797;
                            next$e$796();
                            return tmpvar$798;
                        }
                        return getFinished();
                    }
                },{Absent:{t:Null},Element:$$lazySet.$$targs$$.Element}),{Element:$$lazySet.$$targs$$.Element});
            };
            $$lazySet.complement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Set,a:{Element:'Element'}},$ps:[{$nm:'set',$mt:'prm',$t:{t:Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:LazySet,$tp:{Other:{'satisfies':[{t:Object$}]}},$an:function(){return[shared(),actual()];},d:['ceylon.language','LazySet','$m','complement']};};
            $$lazySet.equals=function equals(that$799){
                var $$lazySet=this;
                var that$800;
                if(isOfType((that$800=that$799),{t:Set,a:{Element:{t:Object$}}})){
                    if(that$800.size.equals($$lazySet.size)){
                        var it$801 = $$lazySet.elems$757.iterator();
                        var element$802;while ((element$802=it$801.next())!==getFinished()){
                            if((!that$800.contains(element$802))){
                                return false;
                            }
                        }
                        if (getFinished() === element$802){
                            return true;
                        }
                    }
                }
                return false;
            };$$lazySet.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'that',$mt:'prm',$t:{t:Object$},$an:function(){return[];}}],$cont:LazySet,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','LazySet','$m','equals']};};
            defineAttr($$lazySet,'hash',function(){
                var $$lazySet=this;
                var hashCode$803=(1);
                var setHashCode$803=function(hashCode$804){return hashCode$803=hashCode$804;};
                $prop$getHashCode$803={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','LazySet','$at','hash','$at','hashCode']};}};
                $prop$getHashCode$803.get=function(){return hashCode$803};
                $prop$getHashCode$803.set=setHashCode$803;
                if (setHashCode$803.$$metamodel$$===undefined)setHashCode$803.$$metamodel$$=$prop$getHashCode$803.$$metamodel$$;
                var it$805 = $$lazySet.elems$757.iterator();
                var elem$806;while ((elem$806=it$805.next())!==getFinished()){
                    (hashCode$803=hashCode$803.times((31)));
                    (hashCode$803=hashCode$803.plus(elem$806.hash));
                }
                return hashCode$803;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$cont:LazySet,$an:function(){return[shared(),actual(),$default()];},d:['ceylon.language','LazySet','$at','hash']};});defineAttr($$lazySet,'elems$757',function(){return this.elems$757_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$cont:LazySet,d:['ceylon.language','LazySet','$at','elems']};});
        })(LazySet.$$.prototype);
    }
    return LazySet;
}
exports.$init$LazySet=$init$LazySet;
$init$LazySet();
function any(values$807){
    var it$808 = values$807.iterator();
    var val$809;while ((val$809=it$808.next())!==getFinished()){
        if(val$809){
            return true;
        }
    }
    return false;
}
exports.any=any;
any.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'values',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Boolean$}}},$an:function(){return[];}}],$an:function(){return[doc(String$("Determines if any one of the given boolean values \n(usually a comprehension) is `true`.",87)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),every)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','any']};};
var byDecreasing=function (comparable$810,$$$mptypes){
    return function(x$811,y$812){{
        return comparable$810(y$812).compare(comparable$810(x$811));
    }
}
}
;
byDecreasing.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Comparison},$ps:[{$nm:'comparable',$mt:'prm',$pt:'f',$t:'Value',$an:function(){return[];}}],$tp:{Element:{},Value:{'satisfies':[{t:Comparable,a:{Other:'Value'}}]}},$an:function(){return[doc(String$("A comparator which orders elements in decreasing order \naccording to the `Comparable` returned by the given \n`comparable()` function.",133)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),byIncreasing)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','byDecreasing']};};
exports.byDecreasing=byDecreasing;
var byIncreasing=function (comparable$813,$$$mptypes){
    return function(x$814,y$815){{
        return comparable$813(x$814).compare(comparable$813(y$815));
    }
}
}
;
byIncreasing.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Comparison},$ps:[{$nm:'comparable',$mt:'prm',$pt:'f',$t:'Value',$an:function(){return[];}}],$tp:{Element:{},Value:{'satisfies':[{t:Comparable,a:{Other:'Value'}}]}},$an:function(){return[doc(String$("A comparator which orders elements in increasing order \naccording to the `Comparable` returned by the given \n`comparable()` function.",133)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),byDecreasing)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','byIncreasing']};};
exports.byIncreasing=byIncreasing;
var byItem=function (comparing$816,$$$mptypes){
    return function(x$817,y$818){{
        return comparing$816(x$817.item,y$818.item);
    }
}
}
;
byItem.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Comparison},$ps:[{$nm:'comparing',$mt:'prm',$pt:'f',$t:{t:Comparison},$an:function(){return[];}}],$tp:{Item:{'satisfies':[{t:Object$}]}},$an:function(){return[doc(String$("A comparator for `Entry`s which compares their items \naccording to the given `comparing()` function.",100)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),byKey)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','byItem']};};
exports.byItem=byItem;
var byKey=function (comparing$819,$$$mptypes){
    return function(x$820,y$821){{
        return comparing$819(x$820.key,y$821.key);
    }
}
}
;
byKey.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Comparison},$ps:[{$nm:'comparing',$mt:'prm',$pt:'f',$t:{t:Comparison},$an:function(){return[];}}],$tp:{Key:{'satisfies':[{t:Object$}]}},$an:function(){return[doc(String$("A comparator for `Entry`s which compares their keys \naccording to the given `comparing()` function.",99)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),byItem)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','byKey']};};
exports.byKey=byKey;
var coalesce=function (values$822,$$$mptypes){
    return values$822.coalesced;
};
coalesce.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:{ t:'i', l:['Element',{t:Object$}]}}},$ps:[{$nm:'values',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$an:function(){return[doc("The values, some of which may be null.")];}}],$tp:{Element:{}},$an:function(){return[doc(String$("Return a sequence containing the given values which are\nnot null. If there are no values which are not null,\nreturn an empty sequence.",134)),shared()];},d:['ceylon.language','coalesce']};};
exports.coalesce=coalesce;
function count(values$823){
    var count$824=(0);
    var setCount$824=function(count$825){return count$824=count$825;};
    $prop$getCount$824={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','count','$at','count']};}};
    $prop$getCount$824.get=function(){return count$824};
    $prop$getCount$824.set=setCount$824;
    if (setCount$824.$$metamodel$$===undefined)setCount$824.$$metamodel$$=$prop$getCount$824.$$metamodel$$;
    var it$826 = values$823.iterator();
    var val$827;while ((val$827=it$826.next())!==getFinished()){
        if(val$827){
            (oldcount$828=count$824,count$824=oldcount$828.successor,oldcount$828);
            var oldcount$828;
        }
    }
    return count$824;
}
exports.count=count;
count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$ps:[{$nm:'values',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Boolean$}}},$an:function(){return[];}}],$an:function(){return[doc(String$("A count of the number of `true` items in the given values.",58)),shared()];},d:['ceylon.language','count']};};
function emptyOrSingleton(element$829,$$$mptypes){
    var element$830;
    if((element$830=element$829)!==null){
        return Singleton(element$830,{Element:$$$mptypes.Element});
    }else {
        return getEmpty();
    }
}
exports.emptyOrSingleton=emptyOrSingleton;
emptyOrSingleton.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'element',$mt:'prm',$t:{ t:'u', l:[{t:Null},'Element']},$an:function(){return[];}}],$tp:{Element:{'satisfies':[{t:Object$}]}},$an:function(){return[doc(String$("A `Singleton` if the given element is non-null, otherwise `Empty`.",66)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Singleton),$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Empty)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:ClassDeclaration$meta$declaration},{t:InterfaceDeclaration$meta$declaration}]}})),shared()];},d:['ceylon.language','emptyOrSingleton']};};
var curry=function (f$831,$$$mptypes){
    return function(first$832){{
        return flatten($JsCallable(function (args$833){
            return unflatten($JsCallable(f$831,[],{Arguments:{t:Tuple,a:{Rest:$$$mptypes.Rest,First:$$$mptypes.First,Element:$$$mptypes.Argument}},Return:$$$mptypes.Return}),{Args:{t:Tuple,a:{Rest:$$$mptypes.Rest,First:$$$mptypes.First,Element:$$$mptypes.Argument}},Return:$$$mptypes.Return})(Tuple(first$832,args$833,{Rest:$$$mptypes.Rest,First:$$$mptypes.First,Element:$$$mptypes.Argument}),{Args:{t:Tuple,a:{Rest:$$$mptypes.Rest,First:$$$mptypes.First,Element:$$$mptypes.Argument}},Return:$$$mptypes.Return});
        },[{$nm:'args',$mt:'prm',$t:'Rest',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$$mptypes.Rest,Element:$$$mptypes.Rest}},Return:$$$mptypes.Return}),{Args:$$$mptypes.Rest,Return:$$$mptypes.Return});
    }
}
}
;
curry.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callable,a:{Arguments:'Rest',Return:'Return'}},$ps:[{$nm:'f',$mt:'prm',$t:{t:Callable,a:{Arguments:{t:Tuple,a:{Rest:'Rest',First:'First',Element:'Argument'}},Return:'Return'}},$an:function(){return[];}}],$tp:{Return:{},Argument:{},First:{'satisfies':['Argument']},Rest:{'satisfies':[{t:Sequential,a:{Element:'Argument'}}]}},$an:function(){return[doc(String$("Curries a function, returning a function of multiple parameter lists,\ngiven a function of multiple parameters.",110)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),uncurry),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),compose)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','curry']};};
exports.curry=curry;
var uncurry=function (f$834,$$$mptypes){
return flatten($JsCallable(function (args$835){
    return unflatten($JsCallable(f$834(args$835.first),[],{Arguments:$$$mptypes.Rest,Return:$$$mptypes.Return}),{Args:$$$mptypes.Rest,Return:$$$mptypes.Return})(args$835.rest,{Args:$$$mptypes.Rest,Return:$$$mptypes.Return});
},[{$nm:'args',$mt:'prm',$t:{t:Tuple,a:{Rest:'Rest',First:'First',Element:'Argument'}},$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:{t:Tuple,a:{Rest:$$$mptypes.Rest,First:$$$mptypes.First,Element:$$$mptypes.Argument}},Element:{t:Tuple,a:{Rest:$$$mptypes.Rest,First:$$$mptypes.First,Element:$$$mptypes.Argument}}}},Return:$$$mptypes.Return}),{Args:{t:Tuple,a:{Rest:$$$mptypes.Rest,First:$$$mptypes.First,Element:$$$mptypes.Argument}},Return:$$$mptypes.Return});
};
uncurry.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callable,a:{Arguments:{t:Tuple,a:{Rest:'Rest',First:'First',Element:'Argument'}},Return:'Return'}},$ps:[{$nm:'f',$mt:'prm',$pt:'f',$t:{t:Callable,a:{Arguments:'Rest',Return:'Return'}},$an:function(){return[];}}],$tp:{Return:{},Argument:{},First:{'satisfies':['Argument']},Rest:{'satisfies':[{t:Sequential,a:{Element:'Argument'}}]}},$an:function(){return[doc(String$("Uncurries a function, returning a function with multiple parameters, \ngiven a function with multiple parameter lists.",117)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),curry),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),compose)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','uncurry']};};
exports.uncurry=uncurry;
var entries=function (elements$836,$$$mptypes){
    return elements$836.indexed;
};
entries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Entry,a:{Key:{t:Integer},Item:{ t:'i', l:['Element',{t:Object$}]}}}}},$ps:[{$nm:'elements',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$an:function(){return[];}}],$tp:{Element:{}},$an:function(){return[doc(String$("Produces a sequence of each index to element `Entry` \nfor the given sequence of values.",87)),shared()];},d:['ceylon.language','entries']};};
exports.entries=entries;
var equalTo=function (val$837,$$$mptypes){
    return function(element$838){{
        return element$838.equals(val$837);
    }
}
}
;
equalTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$tp:{Element:{'satisfies':[{t:Object$}]}},$an:function(){return[doc(String$("Returns a partial function that will compare an element\nto any other element and returns true if they\'re equal.\nThis is useful in conjunction with methods that receive\na predicate function.",189)),shared()];},d:['ceylon.language','equalTo']};};
exports.equalTo=equalTo;
var $apply=function (f$839,args$840,$$$mptypes){
    return unflatten($JsCallable(f$839,[],{Arguments:$$$mptypes.Args,Return:$$$mptypes.Return}),{Args:$$$mptypes.Args,Return:$$$mptypes.Return})(args$840,{Args:$$$mptypes.Args,Return:$$$mptypes.Return});
};
$apply.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Return',$ps:[{$nm:'f',$mt:'prm',$t:{t:Callable,a:{Arguments:'Args',Return:'Return'}},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:'Args',$an:function(){return[];}}],$tp:{Return:{},Args:{'satisfies':[{t:Sequential,a:{Element:{t:Anything}}}]}},$an:function(){return[doc(String$("Applies an arbitrary `Callable` to the specified arguments. The arguments\nare taken packaged in a tuple whose type is compatible with the `Callable`\narguments tuple.\n\nIn practice, this behaves as if the `Callable` were called with the elements\nof the tuple used as its arguments.",279)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),unflatten)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','apply']};};
exports.$apply=$apply;
function every(values$841){
    var it$842 = values$841.iterator();
    var val$843;while ((val$843=it$842.next())!==getFinished()){
        if((!val$843)){
            return false;
        }
    }
    return true;
}
exports.every=every;
every.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'values',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Boolean$}}},$an:function(){return[];}}],$an:function(){return[doc(String$("Determines if every one of the given boolean values \n(usually a comprehension) is `true`.",89)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),any)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','every']};};
function first(values$844,$$$mptypes){
    var first$845;
    $prop$getFirst$845={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Value']},d:['ceylon.language','first','$at','first']};}};
    $prop$getFirst$845.get=function(){return first$845};
    var next$846;
    if(!isOfType((next$846=values$844.iterator().next()),{t:Finished})){
        first$845=next$846;
    }else {
        first$845=null;
    }
    //assert at first.ceylon (12:4-12:34)
    var first$847;
    if (!(isOfType((first$847=first$845),{ t:'u', l:[$$$mptypes.Absent,$$$mptypes.Value]}))) {throw wrapexc(AssertionException("Assertion failed: \'is Absent|Value first\' at first.ceylon (12:11-12:33)"),'12:4-12:34','first.ceylon'); }
    return first$847;
}
exports.first=first;
first.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Absent','Value']},$ps:[{$nm:'values',$mt:'prm',$t:{t:Iterable,a:{Absent:'Absent',Element:'Value'}},$an:function(){return[];}}],$tp:{Value:{},Absent:{'satisfies':[{t:Null}]}},$an:function(){return[doc(String$("The first of the given values (usually a comprehension),\nif any.",64)),shared()];},d:['ceylon.language','first']};};
var forItem=function (resulting$848,$$$mptypes){
    return function(entry$849){{
        return resulting$848(entry$849.item);
    }
}
}
;
forItem.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'resulting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$tp:{Item:{'satisfies':[{t:Object$}]},Result:{}},$an:function(){return[doc(String$("A function that returns the result of the given `resulting()` function \non the item of a given `Entry`.",103)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),forKey)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','forItem']};};
exports.forItem=forItem;
var forKey=function (resulting$850,$$$mptypes){
    return function(entry$851){{
        return resulting$850(entry$851.key);
    }
}
}
;
forKey.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'resulting',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}}],$tp:{Key:{'satisfies':[{t:Object$}]},Result:{}},$an:function(){return[doc(String$("A function that returns the result of the given `resulting()` function \non the key of a given `Entry`.",102)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),forItem)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','forKey']};};
exports.forKey=forKey;
var greaterThan=function (val$852,$$$mptypes){
    return function(element$853){{
        return element$853.compare(val$852).equals(getLarger());
    }
}
}
;
greaterThan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$tp:{Element:{'satisfies':[{t:Comparable,a:{Other:'Element'}}]}},$an:function(){return[doc(String$("Returns a partial function that will compare an element\nto any other element and returns true if the compared\nelement is greater than its element.\nThis is useful in conjunction with methods that receive\na predicate function.",224)),shared()];},d:['ceylon.language','greaterThan']};};
exports.greaterThan=greaterThan;
var concatenate=function (iterables$854,$$$mptypes){
    if(iterables$854===undefined){iterables$854=getEmpty();}
    return Comprehension(function(){
        var it$855=iterables$854.iterator();
        var it$856=getFinished();
        var next$it$856=function(){
            if((it$856=it$855.next())!==getFinished()){
                it$857=it$856.iterator();
                next$val$858();
                return it$856;
            }
            return getFinished();
        }
        var it$857;
        var val$858=getFinished();
        var next$val$858=function(){return val$858=it$857.next();}
        next$it$856();
        return function(){
            do{
                if(val$858!==getFinished()){
                    var val$858$859=val$858;
                    var tmpvar$860=val$858$859;
                    next$val$858();
                    return tmpvar$860;
                }
            }while(next$it$856()!==getFinished());
            return getFinished();
        }
    },{Absent:{t:Null},Element:$$$mptypes.Element}).sequence;
};
concatenate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'iterables',$mt:'prm',seq:1,$t:{t:Sequential,a:{Element:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}}}},$an:function(){return[doc("The iterable objects to concatenate.")];}}],$tp:{Element:{}},$an:function(){return[doc(String$("Given a list of iterable objects, return a new sequence \nof all elements of the all given objects. If there are\nno arguments, or if none of the arguments contains any\nelements, return the empty sequence.",203)),see([$init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),SequenceBuilder)].reifyCeylonType({Absent:{t:Null},Element:{t:ClassDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','concatenate']};};
exports.concatenate=concatenate;
var largest=function (x$861,y$862,$$$mptypes){
    return (opt$863=(x$861.compare(y$862).equals(getLarger())?x$861:null),opt$863!==null?opt$863:y$862);
};
largest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Element',$ps:[{$nm:'x',$mt:'prm',$t:'Element',$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:'Element',$an:function(){return[];}}],$tp:{Element:{'satisfies':[{t:Comparable,a:{Other:'Element'}}]}},$an:function(){return[doc(String$("Given two `Comparable` values, return largest of the\ntwo.",57)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Comparable),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),smallest),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),max)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:InterfaceDeclaration$meta$declaration},{t:FunctionDeclaration$meta$declaration}]}})),shared()];},d:['ceylon.language','largest']};};
exports.largest=largest;
var opt$863;
var lessThan=function (val$864,$$$mptypes){
    return function(element$865){{
        return element$865.compare(val$864).equals(getSmaller());
    }
}
}
;
lessThan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$tp:{Element:{'satisfies':[{t:Comparable,a:{Other:'Element'}}]}},$an:function(){return[doc(String$("Returns a partial function that will compare an element\nto any other element and returns true if the compared\nelement is less than its element.\nThis is useful in conjunction with methods that receive\na predicate function.",221)),shared()];},d:['ceylon.language','lessThan']};};
exports.lessThan=lessThan;
function max(values$866,$$$mptypes){
    var first$867=values$866.first;
    $prop$getFirst$867={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Absent','Value']},d:['ceylon.language','max','$at','first']};}};
    $prop$getFirst$867.get=function(){return first$867};
    var first$868;
    if((first$868=first$867)!==null){
        var max$869=first$868;
        var setMax$869=function(max$870){return max$869=max$870;};
        $prop$getMax$869={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Value',$an:function(){return[variable()];},d:['ceylon.language','max','$at','max']};}};
        $prop$getMax$869.get=function(){return max$869};
        $prop$getMax$869.set=setMax$869;
        if (setMax$869.$$metamodel$$===undefined)setMax$869.$$metamodel$$=$prop$getMax$869.$$metamodel$$;
        var it$871 = values$866.rest.iterator();
        var val$872;while ((val$872=it$871.next())!==getFinished()){
            if(val$872.compare(max$869).equals(getLarger())){
                max$869=val$872;
            }
        }
        return max$869;
    }else {
        return first$867;
    }
}
exports.max=max;
max.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Absent','Value']},$ps:[{$nm:'values',$mt:'prm',$t:{t:Iterable,a:{Absent:'Absent',Element:'Value'}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:Comparable,a:{Other:'Value'}}]},Absent:{'satisfies':[{t:Null}]}},$an:function(){return[doc(String$("Given a nonempty stream of `Comparable` values, \nreturn the largest value in the stream.",88)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Comparable),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),min),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),largest)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:InterfaceDeclaration$meta$declaration},{t:FunctionDeclaration$meta$declaration}]}})),shared()];},d:['ceylon.language','max']};};
function min(values$873,$$$mptypes){
    var first$874=values$873.first;
    $prop$getFirst$874={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Absent','Value']},d:['ceylon.language','min','$at','first']};}};
    $prop$getFirst$874.get=function(){return first$874};
    var first$875;
    if((first$875=first$874)!==null){
        var min$876=first$875;
        var setMin$876=function(min$877){return min$876=min$877;};
        $prop$getMin$876={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Value',$an:function(){return[variable()];},d:['ceylon.language','min','$at','min']};}};
        $prop$getMin$876.get=function(){return min$876};
        $prop$getMin$876.set=setMin$876;
        if (setMin$876.$$metamodel$$===undefined)setMin$876.$$metamodel$$=$prop$getMin$876.$$metamodel$$;
        var it$878 = values$873.rest.iterator();
        var val$879;while ((val$879=it$878.next())!==getFinished()){
            if(val$879.compare(min$876).equals(getSmaller())){
                min$876=val$879;
            }
        }
        return min$876;
    }else {
        return first$874;
    }
}
exports.min=min;
min.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Absent','Value']},$ps:[{$nm:'values',$mt:'prm',$t:{t:Iterable,a:{Absent:'Absent',Element:'Value'}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:Comparable,a:{Other:'Value'}}]},Absent:{'satisfies':[{t:Null}]}},$an:function(){return[doc(String$("Given a nonempty stream of `Comparable` values, \nreturn the smallest value in the stream.",89)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Comparable),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),max),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),smallest)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:InterfaceDeclaration$meta$declaration},{t:FunctionDeclaration$meta$declaration}]}})),shared()];},d:['ceylon.language','min']};};
var smallest=function (x$880,y$881,$$$mptypes){
    return (opt$882=(x$880.compare(y$881).equals(getSmaller())?x$880:null),opt$882!==null?opt$882:y$881);
};
smallest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Element',$ps:[{$nm:'x',$mt:'prm',$t:'Element',$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:'Element',$an:function(){return[];}}],$tp:{Element:{'satisfies':[{t:Comparable,a:{Other:'Element'}}]}},$an:function(){return[doc(String$("Given two `Comparable` values, return smallest of the\ntwo.",58)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Comparable),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),largest),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),min)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:InterfaceDeclaration$meta$declaration},{t:FunctionDeclaration$meta$declaration}]}})),shared()];},d:['ceylon.language','smallest']};};
exports.smallest=smallest;
var opt$882;
function sum(values$883,$$$mptypes){
    var sum$884=values$883.first;
    var setSum$884=function(sum$885){return sum$884=sum$885;};
    $prop$getSum$884={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Value',$an:function(){return[variable()];},d:['ceylon.language','sum','$at','sum']};}};
    $prop$getSum$884.get=function(){return sum$884};
    $prop$getSum$884.set=setSum$884;
    if (setSum$884.$$metamodel$$===undefined)setSum$884.$$metamodel$$=$prop$getSum$884.$$metamodel$$;
    var it$886 = values$883.rest.iterator();
    var val$887;while ((val$887=it$886.next())!==getFinished()){
        (sum$884=sum$884.plus(val$887));
    }
    return sum$884;
}
exports.sum=sum;
sum.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[{$nm:'values',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Nothing},Element:'Value'}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:Summable,a:{Other:'Value'}}]}},$an:function(){return[doc(String$("Given a nonempty stream of `Summable` values, return \nthe sum of the values.",76)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),product)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','sum']};};
function product(values$888,$$$mptypes){
    var product$889=values$888.first;
    var setProduct$889=function(product$890){return product$889=product$890;};
    $prop$getProduct$889={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Value',$an:function(){return[variable()];},d:['ceylon.language','product','$at','product']};}};
    $prop$getProduct$889.get=function(){return product$889};
    $prop$getProduct$889.set=setProduct$889;
    if (setProduct$889.$$metamodel$$===undefined)setProduct$889.$$metamodel$$=$prop$getProduct$889.$$metamodel$$;
    var it$891 = values$888.rest.iterator();
    var val$892;while ((val$892=it$891.next())!==getFinished()){
        (product$889=product$889.times(val$892));
    }
    return product$889;
}
exports.product=product;
product.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[{$nm:'values',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Nothing},Element:'Value'}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:Numeric,a:{Other:'Value'}}]}},$an:function(){return[doc(String$("Given a nonempty stream of `Numeric` values, return \nthe product of the values.",79)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),sum)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','product']};};
function zip(keys$893,items$894,$$$mptypes){
    var iter$895=items$894.iterator();
    $prop$getIter$895={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Item'}},d:['ceylon.language','zip','$at','iter']};}};
    $prop$getIter$895.get=function(){return iter$895};
    return Comprehension(function(){
        var item$898;
        var it$896=keys$893.iterator();
        var key$897=getFinished();
        var item$898;
        var next$key$897=function(){
            while((key$897=it$896.next())!==getFinished()){
                if(!isOfType((item$898=iter$895.next()),{t:Finished})){
                    return key$897;
                }
            }
            return getFinished();
        }
        next$key$897();
        return function(){
            if(key$897!==getFinished()){
                var key$897$899=key$897;
                var tmpvar$900=Entry(key$897$899,item$898,{Key:$$$mptypes.Key,Item:$$$mptypes.Item});
                next$key$897();
                return tmpvar$900;
            }
            return getFinished();
        }
    },{Absent:{t:Null},Element:{t:Entry,a:{Key:$$$mptypes.Key,Item:$$$mptypes.Item}}}).sequence;
}
exports.zip=zip;
zip.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:{t:Entry,a:{Key:'Key',Item:'Item'}}}},$ps:[{$nm:'keys',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:'Key'}},$an:function(){return[];}},{$nm:'items',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:'Item'}},$an:function(){return[];}}],$tp:{Key:{'satisfies':[{t:Object$}]},Item:{'satisfies':[{t:Object$}]}},$an:function(){return[doc(String$("Given two sequences, form a new sequence consisting of\nall entries where, for any given index in the resulting\nsequence, the key of the entry is the element occurring \nat the same index in the first sequence, and the item \nis the element occurring at the same index in the second \nsequence. The length of the resulting sequence is the \nlength of the shorter of the two given sequences. \n\nThus:\n\n    zip(xs,ys)[i]==xs[i]->ys[i]\n\nfor every `0<=i<min({xs.size,ys.size})`.",468)),shared()];},d:['ceylon.language','zip']};};
var print=function (val$901){
    return getProcess().writeLine(stringify(val$901));
};
print.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Anything},$an:function(){return[];}}],$an:function(){return[doc(String$("Print a line to the standard output of the virtual machine \nprocess, printing the given value\'s `string`, or `<null>` \nif the value is `null`.\n\nThis method is a shortcut for:\n\n    process.writeLine(line?.string else \"<null>\")\n\nand is intended mainly for debugging purposes.",273)),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','print']};};
exports.print=print;
function printAll(values$902,separator$903){
    if(separator$903===undefined){separator$903=String$(", ",2);}
    var first$904;
    if((first$904=values$902.first)!==null){
        getProcess().write(stringify(first$904));
        var it$905 = values$902.rest.iterator();
        var val$906;while ((val$906=it$905.next())!==getFinished()){
            getProcess().write(separator$903);
            getProcess().write(stringify(val$906));
        }
    }
    getProcess().write(getProcess().newline);
}
exports.printAll=printAll;
printAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:{t:Anything}}},$an:function(){return[];}},{$nm:'separator',$mt:'prm',$def:1,$t:{t:String$},$an:function(){return[doc("A character sequence to use to separate the values")];}}],$an:function(){return[doc(String$("Print multiple values to the standard output of the virtual \nmachine process as a single line of text, separated by a\ngiven character sequence.",143)),by([String$("Gavin",5)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','printAll']};};
var stringify=function (val$907){
    return (opt$908=(opt$909=val$907,opt$909!==null?opt$909.string:null),opt$908!==null?opt$908:String$("<null>",6));
};
stringify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:String$},$ps:[{$nm:'val',$mt:'prm',$t:{t:Anything},$an:function(){return[];}}],d:['ceylon.language','stringify']};};
var opt$908,opt$909;
var getNothing=function(){
    throw wrapexc(Exception(),'4:25-4:30','ceylon/language/nothing.ceylon');
}
exports.getNothing=getNothing;
var $prop$getNothing={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Nothing},$an:function(){return[doc(String$("A value that is assignable to any type, but that \nresults in an exception when evaluated. This is most \nuseful for generating members in an IDE.",144)),shared()];},d:['ceylon.language','nothing']};}};
exports.$prop$getNothing=$prop$getNothing;
$prop$getNothing.get=getNothing;
getNothing.$$metamodel$$=$prop$getNothing.$$metamodel$$;
var identical=function (x$910,y$911){
    return (x$910===y$911);
};
identical.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'x',$mt:'prm',$t:{t:Identifiable},$an:function(){return[doc("An object with well-defined identity.")];}},{$nm:'y',$mt:'prm',$t:{t:Identifiable},$an:function(){return[doc("A second object with well-defined identity.")];}}],$an:function(){return[doc(String$("Determine if the arguments are identical. Equivalent to\n`x===y`. Only instances of `Identifiable` have \nwell-defined identity.",126)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),identityHash)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','identical']};};
exports.identical=identical;
var compose=function (x$912,y$913,$$$mptypes){
    return flatten($JsCallable(function (args$914){
        return x$912(unflatten($JsCallable(y$913,[],{Arguments:$$$mptypes.Args,Return:$$$mptypes.Y}),{Args:$$$mptypes.Args,Return:$$$mptypes.Y})(args$914,{Args:$$$mptypes.Args,Return:$$$mptypes.Y}));
    },[{$nm:'args',$mt:'prm',$t:'Args',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$$mptypes.Args,Element:$$$mptypes.Args}},Return:$$$mptypes.X}),{Args:$$$mptypes.Args,Return:$$$mptypes.X});
};
compose.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callable,a:{Arguments:'Args',Return:'X'}},$ps:[{$nm:'x',$mt:'prm',$t:{t:Callable,a:{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:'Y',Element:'Y'}},Return:'X'}},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:Callable,a:{Arguments:'Args',Return:'Y'}},$an:function(){return[];}}],$tp:{X:{},Y:{},Args:{'satisfies':[{t:Sequential,a:{Element:{t:Anything}}}]}},$an:function(){return[doc(String$("Composes two functions, returning a function equivalent to \ninvoking `x(y(args))`.",82)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),curry),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),uncurry)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','compose']};};
exports.compose=compose;
var shuffle=function (f$915,$$$mptypes){
    return flatten($JsCallable(function (secondArgs$916){
        return flatten($JsCallable(function (firstArgs$917){
            return unflatten($JsCallable(unflatten($JsCallable(f$915,[],{Arguments:$$$mptypes.FirstArgs,Return:{t:Callable,a:{Arguments:$$$mptypes.SecondArgs,Return:$$$mptypes.Result}}}),{Args:$$$mptypes.FirstArgs,Return:{t:Callable,a:{Arguments:$$$mptypes.SecondArgs,Return:$$$mptypes.Result}}})(firstArgs$917,{Args:$$$mptypes.FirstArgs,Return:{t:Callable,a:{Arguments:$$$mptypes.SecondArgs,Return:$$$mptypes.Result}}}),[],{Arguments:$$$mptypes.SecondArgs,Return:$$$mptypes.Result}),{Args:$$$mptypes.SecondArgs,Return:$$$mptypes.Result})(secondArgs$916,{Args:$$$mptypes.SecondArgs,Return:$$$mptypes.Result});
        },[{$nm:'firstArgs',$mt:'prm',$t:'FirstArgs',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$$mptypes.FirstArgs,Element:$$$mptypes.FirstArgs}},Return:$$$mptypes.Result}),{Args:$$$mptypes.FirstArgs,Return:$$$mptypes.Result});
    },[{$nm:'secondArgs',$mt:'prm',$t:'SecondArgs',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$$mptypes.SecondArgs,Element:$$$mptypes.SecondArgs}},Return:{t:Callable,a:{Arguments:$$$mptypes.FirstArgs,Return:$$$mptypes.Result}}}),{Args:$$$mptypes.SecondArgs,Return:{t:Callable,a:{Arguments:$$$mptypes.FirstArgs,Return:$$$mptypes.Result}}});
};
shuffle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callable,a:{Arguments:'SecondArgs',Return:{t:Callable,a:{Arguments:'FirstArgs',Return:'Result'}}}},$ps:[{$nm:'f',$mt:'prm',$t:{t:Callable,a:{Arguments:'FirstArgs',Return:{t:Callable,a:{Arguments:'SecondArgs',Return:'Result'}}}},$an:function(){return[];}}],$tp:{Result:{},FirstArgs:{'satisfies':[{t:Sequential,a:{Element:{t:Anything}}}]},SecondArgs:{'satisfies':[{t:Sequential,a:{Element:{t:Anything}}}]}},$an:function(){return[shared()];},d:['ceylon.language','shuffle']};};
exports.shuffle=shuffle;
var plus=function (x$918,y$919,$$$mptypes){
    return x$918.plus(y$919);
};
plus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[{$nm:'x',$mt:'prm',$t:'Value',$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:'Value',$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:Summable,a:{Other:'Value'}}]}},$an:function(){return[doc(String$("Add the given `Summable` values.",32)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),times),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),sum)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','plus']};};
exports.plus=plus;
var times=function (x$920,y$921,$$$mptypes){
    return x$920.times(y$921);
};
times.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[{$nm:'x',$mt:'prm',$t:'Value',$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:'Value',$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:Numeric,a:{Other:'Value'}}]}},$an:function(){return[doc(String$("Multiply the given `Numeric` values.",36)),see([$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),plus),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),product)].reifyCeylonType({Absent:{t:Null},Element:{t:FunctionDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','times']};};
exports.times=times;
function combine(combination$922,elements$923,otherElements$924,$$$mptypes){
    function iterable$925($$targs$$){
        var $$iterable$925=new iterable$925.$$;
        $$iterable$925.$$targs$$=$$targs$$;
        Iterable({Absent:$$$mptypes.Absent,Element:$$$mptypes.Result},$$iterable$925);
        return $$iterable$925;
    }
    function $init$iterable$925(){
        if (iterable$925.$$===undefined){
            initTypeProto(iterable$925,'ceylon.language::combine.iterable',Basic,$init$Iterable());
        }
        return iterable$925;
    }
    $init$iterable$925();
    (function($$iterable$925){
        $$iterable$925.iterator=function iterator(){
            var $$iterable$925=this;
            function iterator$926($$targs$$){
                var $$iterator$926=new iterator$926.$$;
                $$iterator$926.$$targs$$=$$targs$$;
                Iterator({Element:$$$mptypes.Result},$$iterator$926);
                $$iterator$926.iter$927_=elements$923.iterator();
                $$iterator$926.$prop$getIter$927={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$cont:iterator$926,d:['ceylon.language','combine','$o','iterable','$m','iterator','$o','iterator','$at','iter']};}};
                $$iterator$926.$prop$getIter$927.get=function(){return iter$927};
                $$iterator$926.otherIter$928_=otherElements$924.iterator();
                $$iterator$926.$prop$getOtherIter$928={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'OtherElement'}},$cont:iterator$926,d:['ceylon.language','combine','$o','iterable','$m','iterator','$o','iterator','$at','otherIter']};}};
                $$iterator$926.$prop$getOtherIter$928.get=function(){return otherIter$928};
                return $$iterator$926;
            }
            function $init$iterator$926(){
                if (iterator$926.$$===undefined){
                    initTypeProto(iterator$926,'ceylon.language::combine.iterable.iterator.iterator',Basic,$init$Iterator());
                }
                return iterator$926;
            }
            $init$iterator$926();
            (function($$iterator$926){
                defineAttr($$iterator$926,'iter$927',function(){return this.iter$927_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Element'}},$cont:iterator$926,d:['ceylon.language','combine','$o','iterable','$m','iterator','$o','iterator','$at','iter']};});
                defineAttr($$iterator$926,'otherIter$928',function(){return this.otherIter$928_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'OtherElement'}},$cont:iterator$926,d:['ceylon.language','combine','$o','iterable','$m','iterator','$o','iterator','$at','otherIter']};});
                $$iterator$926.next=function next(){
                    var $$iterator$926=this;
                    var elem$929=$$iterator$926.iter$927.next();
                    $prop$getElem$929={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:Finished}]},d:['ceylon.language','combine','$o','iterable','$m','iterator','$o','iterator','$m','next','$at','elem']};}};
                    $prop$getElem$929.get=function(){return elem$929};
                    var otherElem$930=$$iterator$926.otherIter$928.next();
                    $prop$getOtherElem$930={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['OtherElement',{t:Finished}]},d:['ceylon.language','combine','$o','iterable','$m','iterator','$o','iterator','$m','next','$at','otherElem']};}};
                    $prop$getOtherElem$930.get=function(){return otherElem$930};
                    var elem$931;
                    var otherElem$932;
                    if(!isOfType((elem$931=elem$929),{t:Finished})&&!isOfType((otherElem$932=otherElem$930),{t:Finished})){
                        return combination$922(elem$931,otherElem$932);
                    }else {
                        return getFinished();
                    }
                };$$iterator$926.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Result',{t:Finished}]},$ps:[],$cont:iterator$926,$an:function(){return[shared(),actual()];},d:['ceylon.language','combine','$o','iterable','$m','iterator','$o','iterator','$m','next']};};
            })(iterator$926.$$.prototype);
            var iterator$933=iterator$926({Element:$$$mptypes.Result});
            var getIterator$933=function(){
                return iterator$933;
            }
            getIterator$933.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterator$926},d:['ceylon.language','combine','$o','iterable','$m','iterator','$at','iterator']};};
            $prop$getIterator$933={get:getIterator$933,$$metamodel$$:getIterator$933.$$metamodel$$};
            return getIterator$933();
        };$$iterable$925.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterator,a:{Element:'Result'}},$ps:[],$cont:iterable$925,$an:function(){return[shared(),actual()];},d:['ceylon.language','combine','$o','iterable','$m','iterator']};};
    })(iterable$925.$$.prototype);
    var iterable$934=iterable$925({Absent:$$$mptypes.Absent,Element:$$$mptypes.Result});
    var getIterable$934=function(){
        return iterable$934;
    }
    getIterable$934.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iterable$925},d:['ceylon.language','combine','$at','iterable']};};
    $prop$getIterable$934={get:getIterable$934,$$metamodel$$:getIterable$934.$$metamodel$$};
    return getIterable$934();
}
exports.combine=combine;
combine.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Iterable,a:{Absent:'Absent',Element:'Result'}},$ps:[{$nm:'combination',$mt:'prm',$pt:'f',$t:'Result',$an:function(){return[];}},{$nm:'elements',$mt:'prm',$t:{t:Iterable,a:{Absent:'Absent',Element:'Element'}},$an:function(){return[];}},{$nm:'otherElements',$mt:'prm',$t:{t:Iterable,a:{Absent:'Absent',Element:'OtherElement'}},$an:function(){return[];}}],$tp:{Result:{},Absent:{'satisfies':[{t:Null}]},Element:{},OtherElement:{}},$an:function(){return[doc(String$("Applies a function to each element of two `Iterable`s\nand returns an `Iterable` with the results.",97)),by([String$("Gavin",5),String$("Enrique Zamudio",15),String$("Tako",4)].reifyCeylonType({Absent:{t:Null},Element:{t:String$}})),shared()];},d:['ceylon.language','combine']};};
var sort=function (elements$935,$$$mptypes){
    return internalSort($JsCallable(byIncreasing($JsCallable(function (e$936){
        return e$936;
    },[{$nm:'e',$mt:'prm',$t:'Element',$an:function(){return[];}}],{Arguments:{t:Tuple,a:{Rest:{t:Empty},First:$$$mptypes.Element,Element:$$$mptypes.Element}},Return:$$$mptypes.Element}),{Value:$$$mptypes.Element,Element:$$$mptypes.Element}),[{$nm:'p1',$mt:'prm',$t:'Element'},{$nm:'p2',$mt:'prm',$t:'Element'}],{Arguments:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:{t:Empty},First:$$$mptypes.Element,Element:$$$mptypes.Element}},First:$$$mptypes.Element,Element:$$$mptypes.Element}},Return:{t:Comparison}}),elements$935,{Element:$$$mptypes.Element});
};
sort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Element'}},$ps:[{$nm:'elements',$mt:'prm',$t:{t:Iterable,a:{Absent:{t:Null},Element:'Element'}},$an:function(){return[];}}],$tp:{Element:{'satisfies':[{t:Comparable,a:{Other:'Element'}}]}},$an:function(){return[doc(String$("Sort the given elements, returning a new sequence.",50)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Comparable)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','sort']};};
exports.sort=sort;
function Array$($$targs$$) {
    var that = new Array$.$$;
    List({Element:$$targs$$.Element}, that);
    return that;
}
Array$.$$metamodel$$={$ps:[],$an:function(){return[shared(),abstract(),native()];},mod:$$METAMODEL$$,d:['ceylon.language','Array']};

initExistingType(Array$, Array, 'ceylon.language::Array', Object$,
        Cloneable, Ranged, $init$List());
var Array$proto = Array.prototype;
var origArrToString = Array$proto.toString;
inheritProto(Array$, Object$, Cloneable, Ranged, $init$List());
Array$proto.toString = origArrToString;
Array$proto.reifyCeylonType = function(typeParameters) {
    this.$$targs$$ = typeParameters;
    return this;
}
exports.Array=Array$;

function EmptyArray() {
    return [];
}
initTypeProto(EmptyArray, 'ceylon.language::EmptyArray', Array$);
function ArrayList(items) {
    return items;
}
initTypeProto(ArrayList, 'ceylon.language::ArrayList', Array$, $init$List());
function ArraySequence(/* js array */value, $$targs$$) {
    value.$seq = true;
    value.$$targs$$=$$targs$$;
    this.$$targs$$=$$targs$$;
    return value;
}
initTypeProto(ArraySequence, 'ceylon.language::ArraySequence', $init$Basic(), $init$Sequence());
Array$proto.getT$name = function() {
    return (this.$seq ? ArraySequence : (this.length>0?ArrayList:EmptyArray)).$$.T$name;
}
Array$proto.getT$all = function() {
    return (this.$seq ? ArraySequence : (this.length>0?ArrayList:EmptyArray)).$$.T$all;
}

exports.EmptyArray=EmptyArray;

defineAttr(Array$proto, 'size', function(){ return this.length; });
defineAttr(Array$proto,'string',function(){
    return (opt$181=(this.empty?String$("[]",2):null),opt$181!==null?opt$181:StringBuilder().appendAll([String$("[",1),commaList(this).string,String$("]",1)]).string);
});
Array$proto.set = function(idx,elem) {
    if (idx >= 0 && idx < this.length) {
        this[idx] = elem;
    }
}
Array$proto.get = function(idx) {
    var result = this[idx];
    return result!==undefined ? result:null;
}
defineAttr(Array$proto, 'lastIndex', function() {
    return this.length>0 ? (this.length-1) : null;
});
defineAttr(Array$proto, 'reversed', function() {
    if (this.length === 0) { return this; }
    var arr = this.slice(0);
    arr.reverse();
    return this.$seq ? ArraySequence(arr,this.$$targs$$) : arr.reifyCeylonType(this.$$targs$$);
});
Array$proto.chain = function(other, $$$mptypes) {
    if (this.length === 0) { return other; }
    return Iterable.$$.prototype.chain.call(this, other, $$$mptypes);
}
defineAttr(Array$proto, 'first', function(){ return this.length>0 ? this[0] : null; });
defineAttr(Array$proto, 'last', function() { return this.length>0 ? this[this.length-1] : null; });
Array$proto.segment = function(from, len) {
    if (len <= 0) { return getEmpty(); }
    var stop = from + len;
    var seq = this.slice((from>=0)?from:0, (stop>=0)?stop:0);
    return (seq.length > 0) ? ArraySequence(seq,this.$$targs$$) : getEmpty();
}
Array$proto.span = function(from, to) {
    if (from > to) {
        var arr = this.segment(to, from-to+1);
        arr.reverse();
        return arr.reifyCeylonType(this.$$targs$$);
    }
    return this.segment(from, to-from+1);
}
Array$proto.spanTo = function(to) {
    return to < 0 ? getEmpty() : this.span(0, to);
}
Array$proto.spanFrom = function(from) {
    return this.span(from, 0x7fffffff);
}
defineAttr(Array$proto, 'rest', function() {
    return this.length<=1 ? getEmpty() : ArraySequence(this.slice(1),this.$$targs$$);
});
Array$proto.items = function(keys) {
    if (keys === undefined) return getEmpty();
    var seq = [];
    for (var i = 0; i < keys.size; i++) {
        var key = keys.get(i);
        seq.push(this.get(key));
    }
    return ArraySequence(seq,this.$$targs$$);
}
defineAttr(Array$proto, 'keys', function(){ return TypeCategory(this, {t:Integer}); });
Array$proto.contains = function(elem) {
    for (var i=0; i<this.length; i++) {
        if (elem.equals(this[i])) {
            return true;
        }
    }
    return false;
}
Array$proto.iterator = function() {
    var $$$index$$$ = 0;
    var $$$arr$$$ = this;
    return new ComprehensionIterator(function() {
        return ($$$index$$$ === $$$arr$$$.length) ? getFinished() : $$$arr$$$[$$$index$$$++];
    }, this.$$targs$$);
}
Array$proto.copyTo = function(other, srcpos, dstpos, length) {
    if (length === undefined) length = this.size;
    if (srcpos === undefined) srcpos = 0;
    if (dstpos === undefined) dstpos = 0;
    var endpos = srcpos+length;
    //TODO validate range?
    for (var i=srcpos; i<endpos; i++) {
        other[dstpos]=this[i];
        dstpos++;
    }
}
Array$proto.shorterThan = function(len) {
  return this.size < len;
}
Array$proto.shorterThan.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','Iterable','$m','shorterThan']};
Array$proto.longerThan = function(len) {
  return this.size > len;
}
Array$proto.longerThan.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','Iterable','$m','longerThan']};

exports.ArrayList=ArrayList;
exports.array=function(elems, $$$ptypes) {
    var e=[];
    if (!(elems === null || elems === undefined)) {
        var iter=elems.iterator();
        var item;while((item=iter.next())!==getFinished()) {
            e.push(item);
        }
    }
    e.$$targs$$=$$$ptypes;
    return e;
}
exports.array.$$metamodel$$={$an:function(){return[shared()];},mod:$$METAMODEL$$,d:['ceylon.language','array']};

exports.arrayOfSize=function(size, elem, $$$mptypes) {
    if (size > 0) {
        var elems = [];
        for (var i = 0; i < size; i++) {
            elems.push(elem);
        }
        elems.$$targs$$=$$$mptypes;
        return elems;
    } else return [];
}
exports.arrayOfSize.$$metamodel$$={$an:function(){return[shared()];},mod:$$METAMODEL$$,d:['ceylon.language','arrayOfSize']};

function TypeCategory(seq, type) {
    var that = new TypeCategory.$$;
    that.type = type;
    that.seq = seq;
    return that;
}
initTypeProto(TypeCategory, 'ceylon.language::TypeCategory', $init$Basic(), Category);
var TypeCategory$proto = TypeCategory.$$.prototype;
TypeCategory$proto.contains = function(k) {
    return isOfType(k, this.type) && this.seq.defines(k);
}

function SequenceBuilder($$targs$$) {
    var that = new SequenceBuilder.$$;
    that.seq = [];
    that.$$targs$$=$$targs$$;
    return that;
}
SequenceBuilder.$$metamodel$$={$ps:[],$an:function(){return[shared()];},mod:$$METAMODEL$$,d:['ceylon.language','SequenceBuilder']};

initTypeProto(SequenceBuilder, 'ceylon.language::SequenceBuilder', $init$Basic());
var SequenceBuilder$proto = SequenceBuilder.$$.prototype;
defineAttr(SequenceBuilder$proto, 'sequence', function() {
    return (this.seq.length > 0) ? ArraySequence(this.seq,this.$$targs$$) : getEmpty();
});
SequenceBuilder$proto.append = function(e) { this.seq.push(e); }
SequenceBuilder$proto.appendAll = function(/*Iterable*/arr) {
    if (arr === undefined) return;
    var iter = arr.iterator();
    var e; while ((e = iter.next()) !== getFinished()) {
        this.seq.push(e);
    }
}
defineAttr(SequenceBuilder$proto, 'size', function(){ return this.seq.length; });

function SequenceAppender(other, $$targs$$) {
    var that = new SequenceAppender.$$;
    that.seq = [];
    that.$$targs$$=$$targs$$;
    that.appendAll(other);
    return that;
}
SequenceAppender.$$metamodel$$={$ps:[],$an:function(){return[shared()];},mod:$$METAMODEL$$,d:['ceylon.language','SequenceAppender']};

initTypeProto(SequenceAppender, 'ceylon.language::SequenceAppender', SequenceBuilder);

exports.Sequence=Sequence;
exports.SequenceBuilder=SequenceBuilder;
exports.SequenceAppender=SequenceAppender;
exports.ArraySequence=ArraySequence;
function String$(/*{Character*}*/value,size) {
    if (value && value.getT$name && value.getT$name() == 'ceylon.language::String') {
        //if it's already a String just return it
        return value;
    }
    else if (typeof(value) === 'string') {
        var that = new String(value);
        that.codePoints = size;
        return that;
    }
    var _sb = StringBuilder();
    var _iter = value.iterator();
    var _c; while ((_c = _iter.next()) !== getFinished()) {
        _sb.appendCharacter(_c);
    }
    var that = _sb.string;
    if (size !== undefined) that.codePoints=size;
    return that;
}
String$.$$metamodel$$={'super':{t:Object$},
  'satisfies':[{t:List,a:{Element:{t:Character}}}, {t:Comparable,a:{Other:{t:String$}}},
    {t:Summable,a:{Other:{t:String$}}}, {t:Ranged,a:{Index:{t:Integer},Span:{t:String$}}},
    {t:Cloneable,a:{Clone:{t:String$}}}],
  $an:function(){return[shared(),native(),final()];},
  mod:$$METAMODEL$$,d:['ceylon.language','String']};

initExistingType(String$, String, 'ceylon.language::String', Object$, Sequential, Comparable,
        Ranged, Summable, Cloneable);
var origStrToString = String.prototype.toString;
inheritProto(String$, Object$, Sequential, Comparable, Ranged, Summable,
        Cloneable);
var String$proto = String$.$$.prototype;
String$proto.$$targs$$={Element:{t:Character}, Absent:{t:Null}};
String$proto.getT$name = function() {
    return String$.$$.T$name;
}
String$proto.getT$all = function() {
    return String$.$$.T$all;
}
String$proto.toString = origStrToString;
defineAttr(String$proto, 'string', function(){ return this; });
String$proto.plus = function(other) {
    var size = this.codePoints + other.codePoints;
    return String$(this+other, isNaN(size)?undefined:size);
}
String$proto.plus.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','plus']};
String$proto.equals = function(other) {
    if (other.constructor===String) {
        return other.valueOf()===this.valueOf();
    } else if (isOfType(other, {t:Iterable, a:{Element:{t:Character}}})) {
        if (other.size===this.size) {
            for (var i=0;i<this.size;i++) {
                if (!this.get(i).equals(other.get(i))) return false;
            }
            return true;
        }
    }
    return false;
}
String$proto.equals.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','equals']};
String$proto.compare = function(other) {
    var cmp = this.localeCompare(other);
    return cmp===0 ? equal : (cmp<0 ? smaller:larger);
}
String$proto.compare.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','compare']};
defineAttr(String$proto, 'uppercased', function(){ return String$(this.toUpperCase()); });
defineAttr(String$proto, 'lowercased', function(){ return String$(this.toLowerCase()); });
defineAttr(String$proto, 'size', function() {
    if (this.codePoints===undefined) {
        this.codePoints = countCodepoints(this);
    }
    return this.codePoints;
});
defineAttr(String$proto, 'lastIndex', function(){ return this.size.equals(0) ? null : this.size.predecessor; });
String$proto.span = function(from, to) {
    if (from > to) {
        return this.segment(to, from-to+1).reversed;
    }
    return this.segment(from, to-from+1);
}
String$proto.span.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','span']};
String$proto.spanFrom = function(from) {
    return this.span(from, 0x7fffffff);
}
String$proto.spanFrom.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','spanFrom']};
String$proto.spanTo = function(to) {
    return to < 0 ? String$('', 0) : this.span(0, to);
}
String$proto.spanTo.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','spanTo']};
String$proto.segment = function(from, len) {
    var fromIndex = from;
    var maxCount = len + fromIndex;
    if (fromIndex < 0) {fromIndex = 0;}
    var i1 = 0;
    var count = 0;
    for (; i1<this.length && count<fromIndex; ++i1, ++count) {
        if ((this.charCodeAt(i1)&0xfc00) === 0xd800) {++i1}
    }
    var i2 = i1;
    for (; i2<this.length && count<maxCount; ++i2, ++count) {
        if ((this.charCodeAt(i2)&0xfc00) === 0xd800) {++i2}
    }
    if (i2 >= this.length) {
        this.codePoints = count;
        if (fromIndex === 0) {return this;}
    }
    return String$(this.substring(i1, i2), count-fromIndex);
}
String$proto.segment.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','segment']};
defineAttr(String$proto, 'empty', function() {
    return this.length===0;
});
String$proto.longerThan = function(length) {
    if (this.codePoints!==undefined) {return this.codePoints>length}
    if (this.length <= length) {return false}
    if (this.length<<1 > length) {return true}
    this.codePoints = countCodepoints(this);
    return this.codePoints>length;
}
String$proto.longerThan.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','longerThan']};
String$proto.shorterThan = function(length) {
    if (this.codePoints!==undefined) {return this.codePoints<length}
    if (this.length < length) {return true}
    if (this.length<<1 >= length) {return false}
    this.codePoints = countCodepoints(this);
    return this.codePoints<length;
}
String$proto.shorterThan.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','shorterThan']};
String$proto.iterator= function() {
	return this.length === 0 ? getEmptyIterator() : StringIterator(this);
}
String$proto.iterator.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','iterator']};
String$proto.get = function(index) {
    if (index<0 || index>=this.length) {return null}
    var i = 0;
    for (var count=0; count<index; count++) {
        if ((this.charCodeAt(i)&0xfc00) === 0xd800) {++i}
        if (++i >= this.length) {return null}
    }
    return Character(codepointFromString(this, i));
}
String$proto.get.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','get']};
defineAttr(String$proto, 'trimmed', function() {
    // make use of the fact that all WS characters are single UTF-16 code units
    var from = 0;
    while (from<this.length && (this.charCodeAt(from) in $WS)) {++from}
    var to = this.length;
    if (from < to) {
        do {--to} while (from<to && (this.charCodeAt(to) in $WS));
        ++to;
    }
    if (from===0 && to===this.length) {return this;}
    var result = String$(this.substring(from, to));
    if (this.codePoints !== undefined) {
        result.codePoints = this.codePoints - from - this.length + to;
    }
    return result;
});
String$proto.trim = function(/*Category*/chars) {
    var from = 0;
    while (from<this.length && chars(this.get(from))) {++from}
    var to = this.length;
    if (from < to) {
        do {--to} while (from<to && chars(this.get(to)));
        ++to;
    }
    if (from===0 && to===this.length) {return this;}
    var result = String$(this.substring(from, to));
    if (this.codePoints !== undefined) {
        result.codePoints = this.codePoints - from - this.length + to;
    }
    return result;
}
String$proto.trim.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','trim']};
String$proto.trimLeading = function(/*Category*/chars) {
    var from = 0;
    while (from<this.length && chars(this.get(from))) {++from}
    if (from===0) {return this;}
    var result = String$(this.substring(from, this.length));
    if (this.codePoints !== undefined) {
        result.codePoints = this.codePoints - from;
    }
    return result;
}
String$proto.trimLeading.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','trimLeading']};
String$proto.trimTrailing = function(/*Category*/chars) {
    var to = this.length;
    if (to > 0) {
        do {--to} while (to>=0 && chars(this.get(to)));
        ++to;
    }
    if (to===this.length) {return this;}
    else if (to===0) { return String$("",0); }
    var result = String$(this.substring(0, to));
    if (this.codePoints !== undefined) {
        result.codePoints = this.codePoints - this.length + to;
    }
    return result;
}
String$proto.trimTrailing.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','trimTrailing']};

String$proto.initial = function(length) {
    if (length >= this.codePoints) {return this}
    var count = 0;
    var i = 0;
    for (; i<this.length && count<length; ++i, ++count) {
        if ((this.charCodeAt(i)&0xfc00) === 0xd800) {++i}
    }
    if (i >= this.length) {
        this.codePoints = count;
        return this;
    }
    return String$(this.substr(0, i), count);
}
String$proto.initial.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','initial']};
String$proto.terminal = function(length) {
    if (length >= this.codePoints) {return this}
    var count = 0;
    var i = this.length;
    for (; i>0 && count<length; ++count) {
        if ((this.charCodeAt(--i)&0xfc00) === 0xdc00) {--i}
    }
    if (i <= 0) {
        this.codePoints = count;
        return this;
    }
    return String$(this.substr(i), count);
}
String$proto.terminal.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','terminal']};
defineAttr(String$proto, 'hash', function() {
    if (this._hash === undefined) {
        for (var i = 0; i < this.length; i++) {
          var c = this.charCodeAt(i);
          this._hash += c + (this._hash << 10);
          this._hash ^= this._hash >> 6;
    }

    this._hash += this._hash << 3;
    this._hash ^= this._hash >> 11;
    this._hash += this._hash << 15;
    this._hash = this._hash & ((1 << 29) - 1);
  }
  return this._hash;
});

function cmpSubString(str, subStr, offset) {
    for (var i=0; i<subStr.length; ++i) {
        if (str.charCodeAt(offset+i)!==subStr.charCodeAt(i)) {return false}
    }
    return true;
}
String$proto.startsWith = function(str) {
    if (str.length > this.length) {return false}
    return cmpSubString(this, str, 0);
}
String$proto.startsWith.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','startsWith']};
String$proto.endsWith = function(str) {
    var start = this.length - str.length
    if (start < 0) {return false}
    return cmpSubString(this, str, start);
}
String$proto.endsWith.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','endsWith']};
String$proto.contains = function(sub) {
    var str;
    if (sub.constructor === String) {str = sub}
    else if (sub.constructor !== Character.$$) {return false}
    else {str = codepointToString(sub.value)}
    return this.indexOf(str) >= 0;
}
String$proto.contains.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','contains']};
defineAttr(String$proto, 'normalized', function() {
    // make use of the fact that all WS characters are single UTF-16 code units
    var result = "";
    var len = 0;
    var first = true;
    var i1 = 0;
    while (i1 < this.length) {
        while (this.charCodeAt(i1) in $WS) {
            if (++i1 >= this.length) {return String$(result)}
        }
        var i2 = i1;
        var cc = this.charCodeAt(i2);
        do {
            ++i2;
            if ((cc&0xfc00) === 0xd800) {++i2}
            ++len;
            cc = this.charCodeAt(i2);
        } while (i2<this.length && !(cc in $WS));
        if (!first) {
            result += " ";
            ++len;
        }
        first = false;
        result += this.substring(i1, i2);
        i1 = i2+1;
    }
    return String$(result, len);
});
/*String$proto.firstOccurrence = function(sub) {
    if (sub.length == 0) {return 0}
    var bound = this.length - sub.length;
    for (var i=0, count=0; i<=bound; ++count) {
        if (cmpSubString(this, sub, i)) {return count}
        if ((this.charCodeAt(i++)&0xfc00) === 0xd800) {++i}
    }
    return null;
}
String$proto.firstOccurrence.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','firstOccurrence']};
String$proto.lastOccurrence = function(sub) {
    if (sub.length == 0) {return this.length>0 ? this.length-1 : 0}
    for (var i=this.length-sub.length; i>=0; --i) {
        if (cmpSubString(this, sub, i)) {
            for (var count=0; i>0; ++count) {
                if ((this.charCodeAt(--i)&0xfc00) === 0xdc00) {--i}
            }
            return count;
        }
    }
    return null;
}
String$proto.lastOccurrence.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','lastOccurrence']};
*/
String$proto.firstOccurrence = function(subc) {
    for (var i=0, count=0; i<this.length; count++) {
        var cp = this.charCodeAt(i++);
        if (((cp&0xfc00) === 0xd800) && i<this.length) {
            cp = (cp<<10) + this.charCodeAt(i++) - 0x35fdc00;
        }
        if (cp === subc.value) {return count;}
    }
    this.codePoints = count;
    return null;
}
String$proto.firstOccurrence.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','firstOccurrence']};
String$proto.lastOccurrence = function(subc) {
    for (var i=this.length-1, count=0; i>=0; count++) {
        var cp = this.charCodeAt(i--);
        if (((cp%0xfc00) === 0xdc00) && i>=0) {
           cp = (this.charCodeAt(i--)<<10) + cp - 0x35fdc00;
        }
        if (cp === subc.value) {
            if (this.codePoints === undefined) {this.codePoints = countCodepoints(this);}
            return this.codePoints - count - 1;
        }
    }
    this.codePoints = count;
    return null;
}
String$proto.lastOccurrence.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','lastOccurrence']};
defineAttr(String$proto, 'characters', function() {
    return this.size>0 ? this:getEmpty();
});
defineAttr(String$proto, 'first', function() { return this.get(0); });
defineAttr(String$proto, 'last', function(){ return this.size>0?this.get(this.size.predecessor):null; });
defineAttr(String$proto, 'keys', function() {
    //TODO implement!!!
    return this.size > 0 ? Range(0, this.size.predecessor, {Element:{t:Integer}}) : getEmpty();
});
String$proto.join = function(strings) {
    var it = strings.iterator();
    var str = it.next();
    if (str === getFinished()) {return String$("", 0);}
    if (this.codePoints === undefined) {this.codePoints = countCodepoints(this)}
    var result = str;
    var len = str.codePoints;
    while ((str = it.next()) !== getFinished()) {
        result += this;
        result += str;
        len += this.codePoints + str.codePoints;
    }
    return String$(result, isNaN(len)?undefined:len);
}
String$proto.join.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','join']};
function isWhitespace(c) { return c.value in $WS; }
String$proto.$split = function(sep, discard, group) {
    // shortcut for empty input
    if (this.length === 0) {return Singleton(this, {Element:{t:String$}}); }

    if (sep === undefined) {sep = isWhitespace}
    if (discard === undefined) {discard = true}
    if (group === undefined) {group = true}

    //TODO: return an iterable which determines the next token on demand
    var tokens = [];
    var tokenBegin = 0;
    var tokenBeginCount = 0;
    var count = 0;
    var value = this;
    var separator = true;

    function pushToken(tokenEnd) {
        tokens.push(String$(value.substring(tokenBegin, tokenEnd), count-tokenBeginCount));
    }
    if (isOfType(sep, {t:Iterable})) {
        var sepChars = {}
        var it = sep.iterator();
        var c; while ((c=it.next()) !== getFinished()) {sepChars[c.value] = true}
        for (var i=0; i<this.length;) {
            var j = i;
            var cp = this.charCodeAt(i++);
            if ((cp&0xfc00)===0xd800 && i<this.length) {
                cp = (cp<<10) + this.charCodeAt(i++) - 0x35fdc00;
            }
            if (cp in sepChars) {
                if (!group) {
                    // ungrouped separator: store preceding token
                    pushToken(j);
                    if (!discard) {
                        // store separator as token
                        tokens.push(String$(this.substring(j, i), 1));
                    }
                    // next token begins after this character
                    tokenBegin = i;
                    tokenBeginCount = count + 1;
                } else if (!separator || (j == 0)) {
                    // begin of grouped separator: store preceding token
                    pushToken(j);
                    // separator token begins at this character
                    tokenBegin = j;
                    tokenBeginCount = count;
                }
                separator = true;

            } else if (separator) {
                // first non-separator after separators or at beginning
                if (!discard && (tokenBegin != j)) {
                    // store preceding grouped separator (if group=false then tokenBegin=j)
                    pushToken(j);
                }
                // non-separator token begins at this character
                tokenBegin = j;
                tokenBeginCount = count;
                separator = false;
            }
        }
        if (tokenBegin != i) {
            pushToken(i);
        }
    } else {
        for (var i=0; i<this.length; ++count) {
            var j = i;
            var cp = this.charCodeAt(i++);
            if ((cp&0xfc00)===0xd800 && i<this.length) {
                cp = (cp<<10) + this.charCodeAt(i++) - 0x35fdc00;
            }

            if (sep(Character(cp))) {
                if (!group) {
                    // ungrouped separator: store preceding token
                    pushToken(j);
                    if (!discard) {
                        // store separator as token
                        tokens.push(String$(this.substring(j, i), 1));
                    }
                    // next token begins after this character
                    tokenBegin = i;
                    tokenBeginCount = count + 1;
                } else if (!separator || (j == 0)) {
                    // begin of grouped separator: store preceding token
                    pushToken(j);
                    // separator token begins at this character
                    tokenBegin = j;
                    tokenBeginCount = count;
                }
                separator = true;

            } else if (separator) {
                // first non-separator after separators or at beginning
                if (!discard && (tokenBegin != j)) {
                    // store preceding grouped separator (if group=false then tokenBegin=j)
                    pushToken(j);
                }
                // non-separator token begins at this character
                tokenBegin = j;
                tokenBeginCount = count;
                separator = false;
            }
        }

        if ((tokenBegin != i) && !(separator && discard)) {
            // store preceding token (may be a grouped separator)
            pushToken(i);
        }
        if (separator) {
            // if last character was a separator then there's another empty token
            tokens.push(String$("", 0));
        }
    }

    this.codePoints = count;
    return ArraySequence(tokens, {Element:{t:String$}});
}
String$proto.$split.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','split']};
defineAttr(String$proto, 'reversed', function() {
    var result = "";
    for (var i=this.length; i>0;) {
        var cc = this.charCodeAt(--i);
        if ((cc&0xfc00)!==0xdc00 || i===0) {
            result += this.charAt(i);
        } else {
            result += this.substr(--i, 2);
        }
    }
    return String$(result);
});
String$proto.$replace = function(sub, repl) {
    return String$(this.replace(new RegExp(sub, 'g'), repl));
}
String$proto.$replace.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','replace']};
String$proto.repeat = function(times) {
    var sb = StringBuilder();
    for (var i = 0; i < times; i++) {
        sb.append(this);
    }
    return sb.string;
}
String$proto.repeat.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','repeat']};
function isNewline(c) { return c.value===10; }
defineAttr(String$proto, 'lines', function() {
    return this.$split(isNewline, true);
});
String$proto.occurrences = function(sub) {
    if (sub.length == 0) {return 0}
    var ocs = [];
    var bound = this.length - sub.length;
    for (var i=0, count=0; i<=bound; ++count) {
        if (cmpSubString(this, sub, i)) {
            ocs.push(count);
            i+=sub.length;
        } else if ((this.charCodeAt(i++)&0xfc00) === 0xd800) {++i;}
    }
    return ocs.length > 0 ? ocs : getEmpty();
}
String$proto.occurrences.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','occurrences']};
String$proto.$filter = function(f) {
    var r = Iterable.$$.prototype.$filter.apply(this, [f]);
    return String$(r);
}
String$proto.$filter.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','filter']};
String$proto.skipping = function(skip) {
    if (skip==0) return this;
    return this.segment(skip, this.size);
}
String$proto.skipping.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','skipping']};
String$proto.taking = function(take) {
    if (take==0) return getEmpty();
    return this.segment(0, take);
}
String$proto.taking.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','taking']};
String$proto.by = function(step) {
    var r = Iterable.$$.prototype.by.apply(this, [step]);
    return String$(r);
}
String$proto.by.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','by']};
String$proto.$sort = function(f) {
    var r = Iterable.$$.prototype.$sort.apply(this, [f]);
    return String$(r);
}
String$proto.$sort.$$metamodel$$={mod:$$METAMODEL$$,d:['ceylon.language','String','$m','sort']};
defineAttr(String$proto, 'coalesced', function(){ return this; });

function StringIterator(string) {
    var that = new StringIterator.$$;
    that.str = string;
    that.index = 0;
    return that;
}
StringIterator.$$metamodel$$={$nm:'StringIterator',$mt:'cls',$ps:[{t:String$}],$an:function(){return[shared()];},mod:$$METAMODEL$$,d:['ceylon.language','Iterator']};

initTypeProto(StringIterator, 'ceylon.language::StringIterator', $init$Basic(), Iterator);
var StringIterator$proto = StringIterator.$$.prototype;
StringIterator$proto.$$targs$$={Element:{t:Character}, Absent:{t:Null}};
StringIterator$proto.next = function() {
    if (this.index >= this.str.length) { return getFinished(); }
    var first = this.str.charCodeAt(this.index++);
    if ((first&0xfc00) !== 0xd800 || this.index >= this.str.length) {
        return Character(first);
    }
    return Character((first<<10) + this.str.charCodeAt(this.index++) - 0x35fdc00);
}

function countCodepoints(str) {
    var count = 0;
    for (var i=0; i<str.length; ++i) {
        ++count;
        if ((str.charCodeAt(i)&0xfc00) === 0xd800) {++i}
    }
    return count;
}
function codepointToString(cp) {
    if (cp <= 0xffff) {
        return String.fromCharCode(cp);
    }
    return String.fromCharCode((cp>>10)+0xd7c0, (cp&0x3ff)+0xdc00);
}
function codepointFromString(str, index) {
    var first = str.charCodeAt(index);
    if ((first&0xfc00) !== 0xd800) {return first}
    var second = str.charCodeAt(index+1);
    return isNaN(second) ? first : ((first<<10) + second - 0x35fdc00);
}
exports.codepointFromString=codepointFromString;

function Character(value) {
    if (value && value.getT$name && value.getT$name() === 'ceylon.language::Character') {
        return value;
    }
    var that = new Character.$$;
    that.value = value;
    return that;
}
Character.$$metamodel$$={'super':{t:Object$}, 'satisfies':[
    {t:Comparable,a:{Other:{t:Character}}}, {t:Enumerable,a:{Other:{t:Character}}}],
  $an:function(){return[shared(),native(),final()];},mod:$$METAMODEL$$,d:['ceylon.language','Character']};

initTypeProto(Character, 'ceylon.language::Character', Object$, Comparable, $init$Enumerable());
var Character$proto = Character.$$.prototype;
defineAttr(Character$proto, 'string', function(){ return String$(codepointToString(this.value)); });
Character$proto.equals = function(other) {
    return other.constructor===Character.$$ && other.value===this.value;
}
defineAttr(Character$proto, 'hash', function(){ return this.value; });
Character$proto.compare = function(other) {
    return this.value===other.value ? equal
                                    : (this.value<other.value ? smaller:larger);
}
defineAttr(Character$proto, 'uppercased', function() {
    var ucstr = codepointToString(this.value).toUpperCase();
    return Character(codepointFromString(ucstr, 0));
});
defineAttr(Character$proto, 'lowercased', function() {
    var lcstr = codepointToString(this.value).toLowerCase();
    return Character(codepointFromString(lcstr, 0));
});
defineAttr(Character$proto, 'titlecased', function() {
    var tc = $toTitlecase[this.value];
    return tc===undefined ? this.uppercased : Character(tc);
});
var $WS={0x9:true, 0xa:true, 0xb:true, 0xc:true, 0xd:true, 0x20:true, 0x85:true,
    0x1680:true, 0x180e:true, 0x2028:true, 0x2029:true, 0x205f:true, 0x3000:true,
    0x1c:true, 0x1d:true, 0x1e:true, 0x1f:true};
for (var i=0x2000; i<0x2007; i++) { $WS[i]=true; }
for (var i=0x2008; i<=0x200a; i++) { $WS[i]=true; }
var $digit={0x30:true, 0x660:true, 0x6f0:true, 0x7c0:true, 0x966:true, 0x9e6:true, 0xa66:true,
    0xae6:true, 0xb66:true, 0xbe6:true, 0xc66:true, 0xce6:true, 0xd66:true, 0xe50:true,
    0xed0:true, 0xf20:true, 0x1040:true, 0x1090:true, 0x17e0:true, 0x1810:true, 0x1946:true,
    0x19d0:true, 0x1a80:true, 0x1a90:true, 0x1b50:true, 0x1bb0:true, 0x1c40:true, 0x1c50:true,
    0xa620:true, 0xa8d0:true, 0xa900:true, 0xa9d0:true, 0xaa50:true, 0xabf0:true, 0xff10:true,
    0x104a0:true, 0x11066:true, 0x110f0:true, 0x11136:true, 0x111d0:true, 0x116c0:true}
var $titlecase={
    0x1c5: [0x1c4, 0x1c6], 0x1c8: [0x1c7, 0x1c9], 0x1cb: [0x1ca, 0x1cc], 0x1f2: [0x1f1, 0x1f3],
    0x1f88: [undefined, 0x1f80], 0x1f89: [undefined, 0x1f81], 0x1f8a: [undefined, 0x1f82],
    0x1f8b: [undefined, 0x1f83], 0x1f8c: [undefined, 0x1f84], 0x1f8d: [undefined, 0x1f85],
    0x1f8e: [undefined, 0x1f86], 0x1f8f: [undefined, 0x1f87], 0x1f98: [undefined, 0x1f90],
    0x1f99: [undefined, 0x1f91], 0x1f9a: [undefined, 0x1f92], 0x1f9b: [undefined, 0x1f93],
    0x1f9c: [undefined, 0x1f94], 0x1f9d: [undefined, 0x1f95], 0x1f9e: [undefined, 0x1f96],
    0x1f9f: [undefined, 0x1f97], 0x1fa8: [undefined, 0x1fa0], 0x1fa9: [undefined, 0x1fa1],
    0x1faa: [undefined, 0x1fa2], 0x1fab: [undefined, 0x1fa3], 0x1fac: [undefined, 0x1fa4],
    0x1fad: [undefined, 0x1fa5], 0x1fae: [undefined, 0x1fa6], 0x1faf: [undefined, 0x1fa7],
    0x1fbc: [undefined, 0x1fb3], 0x1fcc: [undefined, 0x1fc3], 0x1ffc: [undefined, 0x1ff3]
}
var $toTitlecase={
    0x1c6:0x1c5, 0x1c7:0x1c8, 0x1ca:0x1cb, 0x1f1:0x1f2,
    0x1c4:0x1c5, 0x1c9:0x1c8, 0x1cc:0x1cb, 0x1f3:0x1f2, 0x1f80:0x1f88, 0x1f81:0x1f89, 0x1f82:0x1f8a,
    0x1f83:0x1f8b, 0x1f84:0x1f8c, 0x1f85:0x1f8d, 0x1f86:0x1f8e, 0x1f87:0x1f8f, 0x1f90:0x1f98,
    0x1f91:0x1f99, 0x1f92:0x1f9a, 0x1f93:0x1f9b, 0x1f94:0x1f9c, 0x1f95:0x1f9d, 0x1f96:0x1f9e,
    0x1f97:0x1f9f, 0x1fa0:0x1fa8, 0x1fa1:0x1fa9, 0x1fa2:0x1faa, 0x1fa3:0x1fab, 0x1fa4:0x1fac,
    0x1fa5:0x1fad, 0x1fa6:0x1fae, 0x1fa7:0x1faf, 0x1fb3:0x1fbc, 0x1fc3:0x1fcc, 0x1ff3:0x1ffc
}
defineAttr(Character$proto, 'whitespace', function(){ return this.value in $WS; });
defineAttr(Character$proto, 'control', function(){ return this.value<32 || this.value===127; });
defineAttr(Character$proto, 'digit', function() {
    var check = this.value & 0xfffffff0;
    if (check in $digit) {
        return (this.value&0xf) <= 9;
    }
    if ((check|6) in $digit) {
        return (this.value&0xf) >= 6;
    }
    return this.value>=0x1d7ce && this.value<=0x1d7ff;
});
defineAttr(Character$proto, 'integerValue', function(){ return this.value; });
defineAttr(Character$proto, 'integer',function(){ return this.value; });
defineAttr(Character$proto, 'uppercase', function() {
    var str = codepointToString(this.value);
    return str.toLowerCase()!==str && !(this.value in $titlecase);
});
defineAttr(Character$proto, 'lowercase', function() {
    var str = codepointToString(this.value);
    return str.toUpperCase()!==str && !(this.value in $titlecase);
});
defineAttr(Character$proto, 'titlecase', function(){ return this.value in $titlecase; });
defineAttr(Character$proto, 'letter', function() {
    //TODO: this captures only letters that have case
    var str = codepointToString(this.value);
    return str.toUpperCase()!==str || str.toLowerCase()!==str || (this.value in $titlecase);
});
defineAttr(Character$proto, 'successor', function() {
    var succ = this.value+1;
    if ((succ&0xf800) === 0xd800) {return Character(0xe000)}
    return Character((succ<=0x10ffff) ? succ:0);
});
defineAttr(Character$proto, 'predecessor', function() {
    var succ = this.value-1;
    if ((succ&0xf800) === 0xd800) {return Character(0xd7ff)}
    return Character((succ>=0) ? succ:0x10ffff);
});
Character$proto.distanceFrom = function(other) {
    return this.value - other.value;
}

function StringBuilder(/*String...*/comps) {
    var that = new StringBuilder.$$;
    that.value = "";
    if (comps !== undefined) {
        that.appendAll(comps);
    }
    return that;
}
StringBuilder.$$metamodel$$={'super':{t:Basic},$ps:[],$an:function(){return[shared()];},mod:$$METAMODEL$$,d:['ceylon.language','StringBuilder']};

initTypeProto(StringBuilder, 'ceylon.language::StringBuilder', $init$Basic());
var StringBuilder$proto = StringBuilder.$$.prototype;
defineAttr(StringBuilder$proto, 'string', function(){ return String$(this.value); });
StringBuilder$proto.append = function(s) {
    this.value = this.value + s;
    return this;
}
StringBuilder$proto.appendAll = function(strings) {
    var iter = strings.iterator();
    var _s; while ((_s = iter.next()) !== getFinished()) {
        this.value += _s?_s:"null";
    }
    return this;
}
StringBuilder$proto.appendCharacter = function(c) {
    this.append(c.string);
    return this;
}
StringBuilder$proto.appendNewline = function() {
    this.value = this.value + "\n";
    return this;
}
StringBuilder$proto.appendSpace = function() {
    this.value = this.value + " ";
    return this;
}
defineAttr(StringBuilder$proto, 'size', function() {
    return countCodepoints(this.value);
});
StringBuilder$proto.reset = function() {
    this.value = "";
    return this;
}
StringBuilder$proto.insert = function(pos, content) {
    if (pos <= 0) {
        this.value = content + this.value;
    } else if (pos >= this.size) {
        this.value = this.value + content;
    } else {
        this.value = this.value.slice(0, pos) + content + this.value.slice(pos);
    }
    return this;
}
StringBuilder$proto.insertCharacter = function(pos, c) {
    if (pos <= 0) {
        this.value = c.string + this.value;
    } else if (pos >= this.size) {
        this.value = this.value + c.string;
    } else {
        this.value = this.value.slice(0, pos) + c.string + this.value.slice(pos);
    }
    return this;
}
StringBuilder$proto.$delete = function(pos, count) {
    if (pos < 0) pos=0; else if (pos>this.size) return this;
    if (count > 0) {
        this.value = this.value.slice(0, pos) + this.value.slice(pos+count);
    }
    return this;
}

exports.String=String$;
exports.Character=Character;
exports.StringBuilder=StringBuilder;
var minRadix$937=(2);
var getMinRadix=function(){return minRadix$937;};
exports.getMinRadix=getMinRadix;
var $prop$getMinRadix={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','minRadix']};}};
exports.$prop$getMinRadix=$prop$getMinRadix;
$prop$getMinRadix.get=getMinRadix;
getMinRadix.$$metamodel$$=$prop$getMinRadix.$$metamodel$$;
var maxRadix$938=(36);
var getMaxRadix=function(){return maxRadix$938;};
exports.getMaxRadix=getMaxRadix;
var $prop$getMaxRadix={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','maxRadix']};}};
exports.$prop$getMaxRadix=$prop$getMaxRadix;
$prop$getMaxRadix.get=getMaxRadix;
getMaxRadix.$$metamodel$$=$prop$getMaxRadix.$$metamodel$$;
function parseInteger(string$939,radix$940){
    if(radix$940===undefined){radix$940=(10);}
    //assert at parseInteger.ceylon (32:4-32:49)
    if (!((radix$940.compare(getMinRadix())!==getSmaller())&&(radix$940.compare(getMaxRadix())!==getLarger()))) {throw wrapexc(AssertionException("Assertion failed: \'radix >= minRadix, radix <= maxRadix\' at parseInteger.ceylon (32:11-32:48)"),'32:4-32:49','parseInteger.ceylon'); }
    var ii$941=(0);
    var setIi$941=function(ii$942){return ii$941=ii$942;};
    $prop$getIi$941={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','parseInteger','$at','ii']};}};
    $prop$getIi$941.get=function(){return ii$941};
    $prop$getIi$941.set=setIi$941;
    if (setIi$941.$$metamodel$$===undefined)setIi$941.$$metamodel$$=$prop$getIi$941.$$metamodel$$;
    var max$943=getMinIntegerValue().divided(radix$940);
    $prop$getMax$943={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','parseInteger','$at','max']};}};
    $prop$getMax$943.get=function(){return max$943};
    var negative$944;
    $prop$getNegative$944={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},d:['ceylon.language','parseInteger','$at','negative']};}};
    $prop$getNegative$944.get=function(){return negative$944};
    var char$945;
    if((char$945=string$939.get(ii$941))!==null){
        if(char$945.equals(Character(45))){
            negative$944=true;
            (oldii$946=ii$941,ii$941=oldii$946.successor,oldii$946);
            var oldii$946;
        }else {
            if(char$945.equals(Character(43))){
                negative$944=false;
                (oldii$947=ii$941,ii$941=oldii$947.successor,oldii$947);
                var oldii$947;
            }else {
                negative$944=false;
            }
        }
    }else {
        return null;
    }
    var limit$948=(opt$949=(negative$944?getMinIntegerValue():null),opt$949!==null?opt$949:(-getMaxIntegerValue()));
    $prop$getLimit$948={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','parseInteger','$at','limit']};}};
    $prop$getLimit$948.get=function(){return limit$948};
    var opt$949;
    var length$950=string$939.size;
    $prop$getLength$950={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','parseInteger','$at','length']};}};
    $prop$getLength$950.get=function(){return length$950};
    var result$951=(0);
    var setResult$951=function(result$952){return result$951=result$952;};
    $prop$getResult$951={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','parseInteger','$at','result']};}};
    $prop$getResult$951.get=function(){return result$951};
    $prop$getResult$951.set=setResult$951;
    if (setResult$951.$$metamodel$$===undefined)setResult$951.$$metamodel$$=$prop$getResult$951.$$metamodel$$;
    var sep$953=(-(1));
    var setSep$953=function(sep$954){return sep$953=sep$954;};
    $prop$getSep$953={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','parseInteger','$at','sep']};}};
    $prop$getSep$953.get=function(){return sep$953};
    $prop$getSep$953.set=setSep$953;
    if (setSep$953.$$metamodel$$===undefined)setSep$953.$$metamodel$$=$prop$getSep$953.$$metamodel$$;
    var digitIndex$955=(0);
    var setDigitIndex$955=function(digitIndex$956){return digitIndex$955=digitIndex$956;};
    $prop$getDigitIndex$955={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','parseInteger','$at','digitIndex']};}};
    $prop$getDigitIndex$955.get=function(){return digitIndex$955};
    $prop$getDigitIndex$955.set=setDigitIndex$955;
    if (setDigitIndex$955.$$metamodel$$===undefined)setDigitIndex$955.$$metamodel$$=$prop$getDigitIndex$955.$$metamodel$$;
    var groupingSize$957=(-(1));
    var setGroupingSize$957=function(groupingSize$958){return groupingSize$957=groupingSize$958;};
    $prop$getGroupingSize$957={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','parseInteger','$at','groupingSize']};}};
    $prop$getGroupingSize$957.get=function(){return groupingSize$957};
    $prop$getGroupingSize$957.set=setGroupingSize$957;
    if (setGroupingSize$957.$$metamodel$$===undefined)setGroupingSize$957.$$metamodel$$=$prop$getGroupingSize$957.$$metamodel$$;
    while(ii$941.compare(length$950).equals(getSmaller())){
        var ch$959;
        $prop$getCh$959={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Character},d:['ceylon.language','parseInteger','$at','ch']};}};
        $prop$getCh$959.get=function(){return ch$959};
        var char$960;
        if((char$960=string$939.get(ii$941))!==null){
            ch$959=char$960;
        }else {
            return null;
        }
        if(ch$959.equals(Character(95))){
            if(sep$953.equals((-(1)))){
                var digitGroupSize$961;
                if((digitGroupSize$961=computeDigitGroupingSize(radix$940,digitIndex$955,string$939,ii$941))!==null&&(digitIndex$955.compare(digitGroupSize$961)!==getLarger())){
                    groupingSize$957=digitGroupSize$961;
                    sep$953=digitIndex$955;
                }else {
                    return null;
                }
            }else {
                if(digitIndex$955.minus(sep$953).equals(groupingSize$957)){
                    return null;
                }else {
                    sep$953=digitIndex$955;
                }
            }
        }else {
            if(((!sep$953.equals((-(1))))&&digitIndex$955.minus(sep$953).equals(groupingSize$957.plus((1))))){
                return null;
            }
            if(((ii$941.plus((1)).equals(length$950)&&radix$940.equals((10)))&&Tuple(Character(107),Tuple(Character(77),Tuple(Character(71),Tuple(Character(84),Tuple(Character(80),getEmpty(),{Rest:{t:Empty},First:{t:Character},Element:{t:Character}}),{Rest:{t:Tuple,a:{Rest:{t:Empty},First:{t:Character},Element:{t:Character}}},First:{t:Character},Element:{t:Character}}),{Rest:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:{t:Empty},First:{t:Character},Element:{t:Character}}},First:{t:Character},Element:{t:Character}}},First:{t:Character},Element:{t:Character}}),{Rest:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:{t:Empty},First:{t:Character},Element:{t:Character}}},First:{t:Character},Element:{t:Character}}},First:{t:Character},Element:{t:Character}}},First:{t:Character},Element:{t:Character}}),{Rest:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:{t:Tuple,a:{Rest:{t:Empty},First:{t:Character},Element:{t:Character}}},First:{t:Character},Element:{t:Character}}},First:{t:Character},Element:{t:Character}}},First:{t:Character},Element:{t:Character}}},First:{t:Character},Element:{t:Character}}).contains(ch$959))){
                var magnitude$962;
                if((magnitude$962=computeMagnitude(radix$940,string$939.get((oldii$963=ii$941,ii$941=oldii$963.successor,oldii$963))))!==null){
                    if(limit$948.divided(magnitude$962).compare(result$951).equals(getSmaller())){
                        (result$951=result$951.times(magnitude$962));
                        break;
                    }else {
                        return null;
                    }
                }else {
                    return null;
                }
                var oldii$963;
            }else {
                var digit$964;
                if((digit$964=parseDigit(ch$959,radix$940))!==null){
                    if(result$951.compare(max$943).equals(getSmaller())){
                        return null;
                    }
                    (result$951=result$951.times(radix$940));
                    if(result$951.compare(limit$948.plus(digit$964)).equals(getSmaller())){
                        return null;
                    }
                    (result$951=result$951.minus(digit$964));
                }else {
                    return null;
                }
            }
        }
        (oldii$965=ii$941,ii$941=oldii$965.successor,oldii$965);
        var oldii$965;
        (olddigitIndex$966=digitIndex$955,digitIndex$955=olddigitIndex$966.successor,olddigitIndex$966);
        var olddigitIndex$966;
    }
    if(((!sep$953.equals((-(1))))&&(!digitIndex$955.minus(sep$953).equals(groupingSize$957.plus((1)))))){
        return null;
    }
    if(digitIndex$955.equals((0))){
        return null;
    }
    return (opt$967=(negative$944?result$951:null),opt$967!==null?opt$967:(-result$951));
    var opt$967;
}
exports.parseInteger=parseInteger;
parseInteger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},$ps:[{$nm:'string',$mt:'prm',$t:{t:String$},$an:function(){return[];}},{$nm:'radix',$mt:'prm',$def:1,$t:{t:Integer},$an:function(){return[];}}],$an:function(){return[doc(String$("The `Integer` value of the given string representation \nof an integer, or `null` if the string does not represent \nan integer or if the mathematical integer it represents \nis too large in magnitude to be represented by an \n`Integer`.\n\nThe syntax accepted by this function is the same as the \nsyntax for an `Integer` literal in the Ceylon language \nexcept that it may optionally begin with a sign \ncharacter (`+` or `-`).\n\nA radix can be given in input to specify what is the base\nto take in consideration for the parsing. radix has to be\nbetween `minRadix` and `maxRadix` included.\nThe list of available digits starts from `0` to `9` followed\nby `a` to `z`.\nWhen parsing in a specific base, the first `radix` digits\nfrom the available digits list can be used.\nThis function is not case sensitive; `a` and `A` both\ncorrespond to the `a` digit which decimal value is `10`.\n \n`_` character can be used to separate groups of digits\nfor bases 2, 10 and 16 as for `Integer` literal in the\nCeylon language. For any other bases, no grouping is\nsupported.",1046)),$throws($init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),AssertionException),String$("if `radix` is not between `minRadix` and `maxRadix`",51)),shared()];},d:['ceylon.language','parseInteger']};};
function computeDigitGroupingSize(radix$968,digitIndex$969,string$970,ii$971){
    var groupingSize$972;
    $prop$getGroupingSize$972={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},d:['ceylon.language','computeDigitGroupingSize','$at','groupingSize']};}};
    $prop$getGroupingSize$972.get=function(){return groupingSize$972};
    if(radix$968.equals((2))){
        groupingSize$972=(4);
    }else {
        if(radix$968.equals((10))){
            groupingSize$972=(3);
        }else {
            if(radix$968.equals((16))){
                var char$973;
                if((digitIndex$969.compare((2))!==getLarger())&&(char$973=string$970.get(ii$971.plus((3))))!==null&&char$973.equals(Character(95))){
                    groupingSize$972=(2);
                }else {
                    groupingSize$972=(4);
                }
            }else {
                groupingSize$972=null;
            }
        }
    }
    return groupingSize$972;
};computeDigitGroupingSize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},$ps:[{$nm:'radix',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'digitIndex',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'string',$mt:'prm',$t:{t:String$},$an:function(){return[];}},{$nm:'ii',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],d:['ceylon.language','computeDigitGroupingSize']};};
function computeMagnitude(radix$974,char$975){
    var power$976;
    $prop$getPower$976={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},d:['ceylon.language','computeMagnitude','$at','power']};}};
    $prop$getPower$976.get=function(){return power$976};
    var char$977;
    if((char$977=char$975)!==null){
        if(char$977.equals(Character(80))){
            power$976=(15);
        }else {
            if(char$977.equals(Character(84))){
                power$976=(12);
            }else {
                if(char$977.equals(Character(71))){
                    power$976=(9);
                }else {
                    if(char$977.equals(Character(77))){
                        power$976=(6);
                    }else {
                        if(char$977.equals(Character(107))){
                            power$976=(3);
                        }else {
                            power$976=null;
                        }
                    }
                }
            }
        }
    }else {
        power$976=null;
    }
    var power$978;
    if((power$978=power$976)!==null){
        return radix$974.power(power$978);
    }
    return null;
};computeMagnitude.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},$ps:[{$nm:'radix',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'char',$mt:'prm',$t:{ t:'u', l:[{t:Null},{t:Character}]},$an:function(){return[];}}],d:['ceylon.language','computeMagnitude']};};
var aInt$979=Character(97).integer;
var getAInt=function(){return aInt$979;};
exports.getAInt=getAInt;
var $prop$getAInt={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','aInt']};}};
exports.$prop$getAInt=$prop$getAInt;
$prop$getAInt.get=getAInt;
getAInt.$$metamodel$$=$prop$getAInt.$$metamodel$$;
var zeroInt$980=Character(48).integer;
var getZeroInt=function(){return zeroInt$980;};
exports.getZeroInt=getZeroInt;
var $prop$getZeroInt={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','zeroInt']};}};
exports.$prop$getZeroInt=$prop$getZeroInt;
$prop$getZeroInt.get=getZeroInt;
getZeroInt.$$metamodel$$=$prop$getZeroInt.$$metamodel$$;
function parseDigit(digit$981,radix$982){
    var figure$983;
    $prop$getFigure$983={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','parseDigit','$at','figure']};}};
    $prop$getFigure$983.get=function(){return figure$983};
    var digitInt$984=digit$981.integer;
    $prop$getDigitInt$984={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','parseDigit','$at','digitInt']};}};
    $prop$getDigitInt$984.get=function(){return digitInt$984};
    if((tmpvar$985=digitInt$984.minus(getZeroInt()),tmpvar$985.compare((0))!==getSmaller()&&tmpvar$985.compare((10))===getSmaller())){
        figure$983=digitInt$984.minus(getZeroInt());
    }else {
        if((tmpvar$986=digitInt$984.minus(getAInt()),tmpvar$986.compare((0))!==getSmaller()&&tmpvar$986.compare((26))===getSmaller())){
            figure$983=digitInt$984.minus(getAInt()).plus((10));
        }else {
            return null;
        }
    }
    return (figure$983.compare(radix$982).equals(getSmaller())?figure$983:null);
};parseDigit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Integer}]},$ps:[{$nm:'digit',$mt:'prm',$t:{t:Character},$an:function(){return[];}},{$nm:'radix',$mt:'prm',$t:{t:Integer},$an:function(){return[];}}],d:['ceylon.language','parseDigit']};};
function formatInteger(integer$987,radix$988){
    if(radix$988===undefined){radix$988=(10);}
    //assert at parseInteger.ceylon (195:4-195:49)
    if (!((radix$988.compare(getMinRadix())!==getSmaller())&&(radix$988.compare(getMaxRadix())!==getLarger()))) {throw wrapexc(AssertionException("Assertion failed: \'radix >= minRadix, radix <= maxRadix\' at parseInteger.ceylon (195:11-195:48)"),'195:4-195:49','parseInteger.ceylon'); }
    if(integer$987.equals((0))){
        return String$("0",1);
    }
    var digits$989=StringBuilder();
    $prop$getDigits$989={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringBuilder},d:['ceylon.language','formatInteger','$at','digits']};}};
    $prop$getDigits$989.get=function(){return digits$989};
    var insertIndex$990;
    $prop$getInsertIndex$990={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','formatInteger','$at','insertIndex']};}};
    $prop$getInsertIndex$990.get=function(){return insertIndex$990};
    var i$991;
    var setI$991=function(i$992){return i$991=i$992;};
    $prop$getI$991={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},$an:function(){return[variable()];},d:['ceylon.language','formatInteger','$at','i']};}};
    $prop$getI$991.get=function(){return i$991};
    $prop$getI$991.set=setI$991;
    if (setI$991.$$metamodel$$===undefined)setI$991.$$metamodel$$=$prop$getI$991.$$metamodel$$;
    if(integer$987.compare((0)).equals(getSmaller())){
        digits$989.append(String$("-",1));
        insertIndex$990=(1);
        i$991=integer$987;
    }else {
        insertIndex$990=(0);
        i$991=(-integer$987);
    }
    while((!i$991.equals((0)))){
        var d$993=(-i$991.remainder(radix$988));
        $prop$getD$993={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Integer},d:['ceylon.language','formatInteger','$at','d']};}};
        $prop$getD$993.get=function(){return d$993};
        var c$994;
        $prop$getC$994={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Character},d:['ceylon.language','formatInteger','$at','c']};}};
        $prop$getC$994.get=function(){return c$994};
        if((tmpvar$995=d$993,tmpvar$995.compare((0))!==getSmaller()&&tmpvar$995.compare((10))===getSmaller())){
            c$994=d$993.plus(getZeroInt()).character;
        }else {
            if((tmpvar$996=d$993,tmpvar$996.compare((10))!==getSmaller()&&tmpvar$996.compare((36))===getSmaller())){
                c$994=d$993.minus((10)).plus(getAInt()).character;
            }else {
                //assert at parseInteger.ceylon (220:12-220:26)
                if (!(false)) {throw wrapexc(AssertionException("Assertion failed: \'false\' at parseInteger.ceylon (220:19-220:25)"),'220:12-220:26','parseInteger.ceylon'); }
            }
        }
        digits$989.insertCharacter(insertIndex$990,c$994);
        i$991=i$991.plus(d$993).divided(radix$988);
    }
    return digits$989.string;
}
exports.formatInteger=formatInteger;
formatInteger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:String$},$ps:[{$nm:'integer',$mt:'prm',$t:{t:Integer},$an:function(){return[];}},{$nm:'radix',$mt:'prm',$def:1,$t:{t:Integer},$an:function(){return[];}}],$an:function(){return[doc(String$("The string representation of `integer` in the `radix` base.\n`radix` must be between `minRadix` and `maxRadix` included.\n\nIf `integer` is negative, returned string will start by character `-`",190)),$throws($init$OpenClass()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),AssertionException),String$("if `radix` is not between `minRadix` and `maxRadix`",51)),shared()];},d:['ceylon.language','formatInteger']};};
function Annotated($$annotated){
}
Annotated.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[doc(String$("A program element that can\nbe annotated.",40)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Annotation)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','Annotated']};};
exports.Annotated=Annotated;
function $init$Annotated(){
    if (Annotated.$$===undefined){
        initTypeProto(Annotated,'ceylon.language::Annotated');
    }
    return Annotated;
}
exports.$init$Annotated=$init$Annotated;
$init$Annotated();
function Annotation($$targs$$,$$annotation){
    set_type_args($$annotation,$$targs$$);
}
Annotation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Value:{'var':'out','satisfies':[{t:Annotation,a:{Value:'Value'}}]}},satisfies:[],$an:function(){return[doc(String$("The supertype of all *annotation classes*. \n\n### Annotation classes\n\nAn *annotation class* must satisfy `Annotation`,\n[[OptionalAnnotation]] or [[SequencedAnnotation]]\nand must be declared with the `final` and `annotation` annotations. \nFor example:\n\n    \"An annotation class.\"\n    final annotation class Example(shared String description) \n          satisfies Annotation {}\n\nAnnotation classes which satisfy `Annotation` \ndirectly may be applied to any program element that supports \nannotations (see [[Annotated]]). In practice, annotation classes often \nsatisfy [[OptionalAnnotation]] or [[SequencedAnnotation]] in order \nto prevent annotations being applied to inappropriate program elements.\n\nEach initializer parameter of an annotation class must have one of the \nfollowing types:\n\n* `Integer`, `Float`, `Character`, or `String`,\n* an enumerated type whose cases are all anonymous classes, \n  such as `Boolean`,\n* a subtype of [[ceylon.language.meta.declaration::Declaration]]\n* an annotation class,\n* `{T*}` or `[T*]` where `T` is a legal annotation parameter type, or\n* any tuple type whose element types are legal annotation parameter types.\n\nAn initializer parameter of an annotation class may be variadic \nor defaulted.\n\n### Annotation constructors\n\nAn *annotation constructor* is simply a top level function, annotated with \n`annotation` whose return type is an annotation class type. For example:\n\n    \"An annotation constructor.\"\n    annotation Example example(String description=\"\") \n        => Example(description);\n\nEach parameter of an annotation constructor must have one of the \nfollowing types:\n\n* `Integer`, `Float`, `Character`, or `String`,\n* an enumerated type whose cases are all anonymous classes, \n  such as `Boolean`,\n* a subtype of [[ceylon.language.meta.declaration::Declaration]],\n* an annotation type,\n* `{T*}` or `[T*]` where `T` is a legal annotation constructor parameter \n  type, or\n* any tuple type whose element types are legal annotation constructor \n  parameter types.\n\nA parameter of an annotation constructor may be variadic or defaulted.\n\nThe constructor must simply instantiate and return the annotation class, \nand there are strict rules about the arguments to the instantiation.\n\nAn annotation class can have multiple annotation constructors.\n",2290)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),OptionalAnnotation),$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),SequencedAnnotation),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language.meta'),annotations$meta),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language.meta'),optionalAnnotation$meta),$init$OpenFunction()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language.meta'),sequencedAnnotations$meta)].reifyCeylonType({Absent:{t:Null},Element:{ t:'u', l:[{t:InterfaceDeclaration$meta$declaration},{t:FunctionDeclaration$meta$declaration}]}})),shared()];},d:['ceylon.language','Annotation']};};
exports.Annotation=Annotation;
function $init$Annotation(){
    if (Annotation.$$===undefined){
        initTypeProto(Annotation,'ceylon.language::Annotation');
    }
    return Annotation;
}
exports.$init$Annotation=$init$Annotation;
$init$Annotation();
function ConstrainedAnnotation($$targs$$,$$constrainedAnnotation){
    Annotation($$constrainedAnnotation.$$targs$$===undefined?$$targs$$:{Value:$$constrainedAnnotation.$$targs$$.Value},$$constrainedAnnotation);
    set_type_args($$constrainedAnnotation,$$targs$$);
}
ConstrainedAnnotation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Value:{'var':'out','satisfies':[{t:Annotation,a:{Value:'Value'}}]},Values:{'var':'out'},ProgramElement:{'var':'in','satisfies':[{t:Annotated}]}},satisfies:[{t:Annotation,a:{Value:'Value'}}],$an:function(){return[doc(String$("An annotation constrained to appear only on certain \nprogram elements, and only with certain values. \n\nThis interface should not be satisfied directly. \nInstead either [[OptionalAnnotation]] or [[SequencedAnnotation]] \nshould be satisfied.",239)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Annotation)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','ConstrainedAnnotation']};};
exports.ConstrainedAnnotation=ConstrainedAnnotation;
function $init$ConstrainedAnnotation(){
    if (ConstrainedAnnotation.$$===undefined){
        initTypeProto(ConstrainedAnnotation,'ceylon.language::ConstrainedAnnotation',$init$Annotation());
        (function($$constrainedAnnotation){
            $$constrainedAnnotation.occurs=function (programElement$997){
                var $$constrainedAnnotation=this;
                return isOfType(programElement$997,$$constrainedAnnotation.$$targs$$.ProgramElement);
            };
            $$constrainedAnnotation.occurs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Boolean$},$ps:[{$nm:'programElement',$mt:'prm',$t:{t:Annotated},$an:function(){return[];}}],$cont:ConstrainedAnnotation,$an:function(){return[doc(String$("Can this annotation can occur on the given program \nelement?",60)),shared()];},d:['ceylon.language','ConstrainedAnnotation','$m','occurs']};};
        })(ConstrainedAnnotation.$$.prototype);
    }
    return ConstrainedAnnotation;
}
exports.$init$ConstrainedAnnotation=$init$ConstrainedAnnotation;
$init$ConstrainedAnnotation();
function OptionalAnnotation($$targs$$,$$optionalAnnotation){
    ConstrainedAnnotation($$optionalAnnotation.$$targs$$===undefined?$$targs$$:{Values:{ t:'u', l:[{t:Null},$$optionalAnnotation.$$targs$$.Value]},Value:$$optionalAnnotation.$$targs$$.Value,ProgramElement:$$optionalAnnotation.$$targs$$.ProgramElement},$$optionalAnnotation);
    set_type_args($$optionalAnnotation,$$targs$$);
}
OptionalAnnotation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Value:{'var':'out','satisfies':[{t:Annotation,a:{Value:'Value'}}]},ProgramElement:{'var':'in','satisfies':[{t:Annotated}],'def':{t:Annotated}}},satisfies:[{t:ConstrainedAnnotation,a:{Values:{ t:'u', l:[{t:Null},'Value']},Value:'Value',ProgramElement:'ProgramElement'}}],$an:function(){return[doc(String$("An annotation that may occur at most once at a single program element and \nonly on certain program elements.\n\nAn optional annotation is declared simply by having the annotation class\nsatisfy OptionalAnnotation instead of [[Annotation]]. For example \nthe following would only be allowed on `class` declarations:\n\n    final annotation class ExampleClass() \n            satisfies OptionalAnnotation<Example, ClassDeclaration> {}\n\nAt runtime a [[ceylon.language.meta.declaration::Declaration]] instance \ncan be queried for its `OptionalAnnotation`s of a certain type using \n[[ceylon.language.meta::annotations]] or [[ceylon.language.meta::optionalAnnotation]].\n",657)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Annotation)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','OptionalAnnotation']};};
exports.OptionalAnnotation=OptionalAnnotation;
function $init$OptionalAnnotation(){
    if (OptionalAnnotation.$$===undefined){
        initTypeProto(OptionalAnnotation,'ceylon.language::OptionalAnnotation',$init$ConstrainedAnnotation());
    }
    return OptionalAnnotation;
}
exports.$init$OptionalAnnotation=$init$OptionalAnnotation;
$init$OptionalAnnotation();
function SequencedAnnotation($$targs$$,$$sequencedAnnotation){
    ConstrainedAnnotation($$sequencedAnnotation.$$targs$$===undefined?$$targs$$:{Values:{t:Sequential,a:{Element:$$sequencedAnnotation.$$targs$$.Value}},Value:$$sequencedAnnotation.$$targs$$.Value,ProgramElement:$$sequencedAnnotation.$$targs$$.ProgramElement},$$sequencedAnnotation);
    add_type_arg($$sequencedAnnotation,'Values',{t:Sequential,a:{Element:$$sequencedAnnotation.$$targs$$.Value}});
    set_type_args($$sequencedAnnotation,$$targs$$);
}
SequencedAnnotation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Value:{'var':'out','satisfies':[{t:Annotation,a:{Value:'Value'}}]},ProgramElement:{'var':'in','satisfies':[{t:Annotated}],'def':{t:Annotated}}},satisfies:[{t:ConstrainedAnnotation,a:{Values:{t:Sequential,a:{Element:'Value'}},Value:'Value',ProgramElement:'ProgramElement'}}],$an:function(){return[doc(String$("An annotation that may occur multiple times at a single program element, \nand only on certain program elemenets.\n\nA sequenced annotation is declared simply by having the annotation class\nsatisfy SequencedAnnotation instead of [[Annotation]]. For example \nthe following would only be allowed on `class` declarations, \nfunctions or methods:\n\n    alias ExecutableDeclaration \n           => ClassOrInterfaceDeclaration|FunctionDeclaration\n    \"Documents a pattern that the annotated element is particpating in\"\n    final annotation class Pattern(String name) \n            satisfies SequencedAnnotation<Pattern, ExecutableDeclaration> {\n    }\n\nAt runtime a [[ceylon.language.meta.declaration::Declaration]] instance \ncan be queried for its `SequencedAnnotation`s of a certain type using \n[[ceylon.language.meta::annotations]] or [[ceylon.language.meta::sequencedAnnotations]].\n",872)),see([$init$OpenInterface()(getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),Annotation)].reifyCeylonType({Absent:{t:Null},Element:{t:InterfaceDeclaration$meta$declaration}})),shared()];},d:['ceylon.language','SequencedAnnotation']};};
exports.SequencedAnnotation=SequencedAnnotation;
function $init$SequencedAnnotation(){
    if (SequencedAnnotation.$$===undefined){
        initTypeProto(SequencedAnnotation,'ceylon.language::SequencedAnnotation',$init$ConstrainedAnnotation());
    }
    return SequencedAnnotation;
}
exports.$init$SequencedAnnotation=$init$SequencedAnnotation;
$init$SequencedAnnotation();
function optionalAnnotation$meta(annotationType$998,programElement$999,$$$mptypes){
    return annotations$meta(annotationType$998,programElement$999,{Values:{ t:'u', l:[{t:Null},$$$mptypes.Value]},Value:$$$mptypes.Value,ProgramElement:$$$mptypes.ProgramElement});
}
exports.optionalAnnotation$meta=optionalAnnotation$meta;
optionalAnnotation$meta.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},'Value']},$ps:[{$nm:'annotationType',$mt:'prm',$t:{t:Class$meta$model,a:{Arguments:{t:Nothing},Type:{t:OptionalAnnotation,a:{Value:'Value',ProgramElement:'ProgramElement'}}}},$an:function(){return[];}},{$nm:'programElement',$mt:'prm',$t:'ProgramElement',$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:OptionalAnnotation,a:{Value:'Value',ProgramElement:'ProgramElement'}}]},ProgramElement:{'var':'in','satisfies':[{t:Annotated}]}},$an:function(){return[doc(String$("The value of given optional annotation type on the given program element, \nor null if the program element was not annotated with that annotation type.\nFor example:\n\n    // Does the process declaration have the Shared annotation?\n    value isShared = optionalAnnotation(`Shared`, `value process`) exists;\n",304)),shared()];},d:['ceylon.language.meta','optionalAnnotation']};};
function sequencedAnnotations$meta(annotationType$1000,programElement$1001,$$$mptypes){
    return annotations$meta(annotationType$1000,programElement$1001,{Values:{t:Sequential,a:{Element:$$$mptypes.Value}},Value:$$$mptypes.Value,ProgramElement:$$$mptypes.ProgramElement});
}
exports.sequencedAnnotations$meta=sequencedAnnotations$meta;
sequencedAnnotations$meta.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:'Value'}},$ps:[{$nm:'annotationType',$mt:'prm',$t:{t:Class$meta$model,a:{Arguments:{t:Nothing},Type:{t:SequencedAnnotation,a:{Value:'Value',ProgramElement:'ProgramElement'}}}},$an:function(){return[];}},{$nm:'programElement',$mt:'prm',$t:'ProgramElement',$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:SequencedAnnotation,a:{Value:'Value',ProgramElement:'ProgramElement'}}]},ProgramElement:{'var':'in','satisfies':[{t:Annotated}]}},$an:function(){return[doc(String$("The values of given sequenced annotation type on the given program element, \nor empty if the program element was not annotated with that annotation type.\nFor example:\n\n    // Does the sum declaration have any ThrownException annotations?\n    value throwsSomething = sequencedAnnotation(`ThrownException`, `function sum`) nonempty;\n\nThe annotations may be returned in any order.\n",378)),shared()];},d:['ceylon.language.meta','sequencedAnnotations']};};
function modules$1002$meta(){
    var $$modules=new modules$1002$meta.$$;
    $$modules.$prop$getList={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Sequential,a:{Element:{t:Module$meta$declaration}}},$cont:modules$1002$meta,$an:function(){return[doc(String$("Returns the list of all currently loaded modules. This may include modules that\nwere not imported directly but your module, and multiple versions of the same\nmodule.",165)),shared(),$native()];},d:['ceylon.language.meta','modules','$at','list']};}};
    $$modules.$prop$getDefault={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Null},{t:Module$meta$declaration}]},$cont:modules$1002$meta,$an:function(){return[doc(String$("Returns the default module, if there is one. This is only the case when\nyou are running the default module.",107)),shared(),$native()];},d:['ceylon.language.meta','modules','$at','default']};}};
    return $$modules;
}
function $init$modules$1002$meta(){
    if (modules$1002$meta.$$===undefined){
        initTypeProto(modules$1002$meta,'ceylon.language.meta::modules',Basic);
    }
    return modules$1002$meta;
}
exports.$init$modules$1002$meta=$init$modules$1002$meta;
$init$modules$1002$meta();
(function($$modules){
})(modules$1002$meta.$$.prototype);
var modules$1003$meta=modules$1002$meta();
var getModules$meta=function(){
    return modules$1003$meta;
}
exports.getModules$meta=getModules$meta;
getModules$meta.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:modules$1002$meta},$an:function(){return[doc(String$("Represents the list of Ceylon modules currently loaded at runtime.\n\nNote that this contains all loaded modules, including those that are\nnot imported by your module.\n\nSince Ceylon supports module isolation at runtime, it is possible that\nthere are more than one version of a given module loaded at the same time.\n\n### Usage example\n\nHere\'s how you would iterate all the loaded modules and print their name and version:\n\n    import ceylon.language.meta { modules }\n\n    for(mod in modules.list){\n        print(\"Module: ``mod.name``/``mod.version``\");\n    }\n",556)),shared(),$native()];},d:['ceylon.language.meta','modules']};};
$prop$getModules$meta={get:getModules$meta,$$metamodel$$:getModules$meta.$$metamodel$$};
exports.$prop$getModules$meta=$prop$getModules$meta;
