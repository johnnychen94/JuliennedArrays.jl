var documenterSearchIndex = {"docs":
[{"location":"#JuliennedArrays.jl-1","page":"JuliennedArrays.jl","title":"JuliennedArrays.jl","text":"","category":"section"},{"location":"#","page":"JuliennedArrays.jl","title":"JuliennedArrays.jl","text":"Modules = [JuliennedArrays]","category":"page"},{"location":"#","page":"JuliennedArrays.jl","title":"JuliennedArrays.jl","text":"Modules = [JuliennedArrays]","category":"page"},{"location":"#JuliennedArrays.Align-Union{Tuple{OuterDimensions}, Tuple{InnerDimensions}, Tuple{Item}, Tuple{AbstractArray{#s13,OuterDimensions} where #s13<:AbstractArray{Item,InnerDimensions},Vararg{Int64,N} where N}} where OuterDimensions where InnerDimensions where Item","page":"JuliennedArrays.jl","title":"JuliennedArrays.Align","text":"Along(slices, alongs::Int...)\n\nAlternative syntax: alongs is which dimensions will be taken up by the inner arrays.\n\njulia> using JuliennedArrays\n\njulia> input = reshape(1:8, 2, 2, 2)\n2×2×2 reshape(::UnitRange{Int64}, 2, 2, 2) with eltype Int64:\n[:, :, 1] =\n 1  3\n 2  4\n\n[:, :, 2] =\n 5  7\n 6  8\n\njulia> slices = collect(Slices(input, 1, 3))\n2-element Array{SubArray{Int64,2,Base.ReshapedArray{Int64,3,UnitRange{Int64},Tuple{}},Tuple{Base.OneTo{Int64},Int64,Base.OneTo{Int64}},false},1}:\n [1 5; 2 6]\n [3 7; 4 8]\n\njulia> Align(slices, 1, 3)\n2×2×2 Align{Int64,3,Array{SubArray{Int64,2,Base.ReshapedArray{Int64,3,UnitRange{Int64},Tuple{}},Tuple{Base.OneTo{Int64},Int64,Base.OneTo{Int64}},false},1},Tuple{True,False,True}}:\n[:, :, 1] =\n 1  3\n 2  4\n\n[:, :, 2] =\n 5  7\n 6  8\n\n\n\n\n\n","category":"method"},{"location":"#JuliennedArrays.Align-Union{Tuple{OuterDimensions}, Tuple{InnerDimensions}, Tuple{Item}, Tuple{AbstractArray{#s14,OuterDimensions} where #s14<:AbstractArray{Item,InnerDimensions},Vararg{JuliennedArrays.TypedBool,N} where N}} where OuterDimensions where InnerDimensions where Item","page":"JuliennedArrays.jl","title":"JuliennedArrays.Align","text":"Align(slices, alongs::TypedBool...)\n\nAlign an array of arrays, all with the same size.\n\nalongs, made of True and False objects, shows which dimensions will be taken up by the inner arrays. Inverse of Slices.\n\njulia> using JuliennedArrays\n\njulia> slices = [[1, 2], [3, 4]];\n\njulia> aligned = Align(slices, False(), True())\n2×2 Align{Int64,2,Array{Array{Int64,1},1},Tuple{False,True}}:\n 1  2\n 3  4\n\njulia> aligned[1, :] == slices[1]\ntrue\n\njulia> aligned[1, 1] = 0;\n\njulia> slices\n2-element Array{Array{Int64,1},1}:\n [0, 2]\n [3, 4]\n\n\n\n\n\n","category":"method"},{"location":"#JuliennedArrays.False","page":"JuliennedArrays.jl","title":"JuliennedArrays.False","text":"struct False\n\nTyped false\n\n\n\n\n\n","category":"type"},{"location":"#JuliennedArrays.Slices-Tuple{AbstractArray,Vararg{JuliennedArrays.TypedBool,N} where N}","page":"JuliennedArrays.jl","title":"JuliennedArrays.Slices","text":"Slices(whole, alongs::TypedBool...)\n\nSlice whole into views.\n\nalongs, made of True and False objects, shows which dimensions will be replaced with : when slicing.\n\njulia> using JuliennedArrays\n\njulia> whole = [1 2; 3 4];\n\njulia> slices = Slices(whole, False(), True())\n2-element Slices{SubArray{Int64,1,Array{Int64,2},Tuple{Int64,Base.OneTo{Int64}},true},1,Array{Int64,2},Tuple{False,True}}:\n [1, 2]\n [3, 4]\n\njulia> slices[1] == whole[1, :]\ntrue\n\njulia> slices[1] = [2, 1];\n\njulia> whole\n2×2 Array{Int64,2}:\n 2  1\n 3  4\n\njulia> larger = rand(5, 5, 5);\n\njulia> larger_slices = Slices(larger, True(), False(), False());\n\njulia> size(first(larger_slices))\n(5,)\n\n\n\n\n\n","category":"method"},{"location":"#JuliennedArrays.Slices-Union{Tuple{NumberOfDimensions}, Tuple{Item}, Tuple{AbstractArray{Item,NumberOfDimensions},Vararg{Int64,N} where N}} where NumberOfDimensions where Item","page":"JuliennedArrays.jl","title":"JuliennedArrays.Slices","text":"Slices(whole, alongs::Int...)\n\nAlternative syntax: alongs is which dimensions will be replaced with : when slicing.\n\njulia> using JuliennedArrays\n\njulia> input = reshape(1:8, 2, 2, 2)\n2×2×2 reshape(::UnitRange{Int64}, 2, 2, 2) with eltype Int64:\n[:, :, 1] =\n 1  3\n 2  4\n\n[:, :, 2] =\n 5  7\n 6  8\n\njulia> s = Slices(input, 1, 3)\n2-element Slices{SubArray{Int64,2,Base.ReshapedArray{Int64,3,UnitRange{Int64},Tuple{}},Tuple{Base.OneTo{Int64},Int64,Base.OneTo{Int64}},false},1,Base.ReshapedArray{Int64,3,UnitRange{Int64},Tuple{}},Tuple{True,False,True}}:\n [1 5; 2 6]\n [3 7; 4 8]\n\njulia> map(sum, s)\n2-element Array{Int64,1}:\n 14\n 22\n\n\n\n\n\n","category":"method"},{"location":"#JuliennedArrays.True","page":"JuliennedArrays.jl","title":"JuliennedArrays.True","text":"struct True\n\nTyped true\n\n\n\n\n\n","category":"type"}]
}
