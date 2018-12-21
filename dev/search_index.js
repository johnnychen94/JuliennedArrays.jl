var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "JuliennedArrays.jl",
    "title": "JuliennedArrays.jl",
    "category": "page",
    "text": ""
},

{
    "location": "#Base.Iterators.flatten",
    "page": "JuliennedArrays.jl",
    "title": "Base.Iterators.flatten",
    "category": "function",
    "text": "flatten(a::AbstractArray{<:AbstractArray}, code = default_code(a))\n\nAlign an array of slices into a larger array. Code should be a tuple with an entry for each dimension of the desired output. Slices will slide into dimensions coded by :, while * indicates dimensions taken up by the container array. Each slice should be EXACTLY the same size. The default code will be * for each outer dimension followed by : for each inner dimension.\n\njulia> using JuliennedArrays, MappedArrays\n\njulia> code = (*, :);\n\njulia> array = [5 6 4; 1 3 2]\n2×3 Array{Int64,2}:\n 5  6  4\n 1  3  2\n\njulia> f = mappedarray(sort, julienne(array, code)) |> flatten\n2×3 JuliennedArrays.FlattenedArray{Int64,2,ReadonlyMappedArray{Array{Int64,1},1,JuliennedArrays.Views{SubArray{Int64,1,Array{Int64,2},Tuple{Int64,Base.OneTo{Int64}},true},1,Array{Int64,2},JuliennedArrays.JulienneIndexer{Tuple{Int64,Base.OneTo{Int64}},1,Tuple{Base.OneTo{Int64},Base.OneTo{Int64}},Tuple{Keys.True,Keys.False}}},typeof(sort)},Tuple{Keys.True,Keys.False}}:\n 4  5  6\n 1  2  3\n\njulia> collect(f)\n2×3 Array{Int64,2}:\n 4  5  6\n 1  2  3\n\n\n\n\n\n"
},

{
    "location": "#JuliennedArrays.julienne-Tuple{Any,Any}",
    "page": "JuliennedArrays.jl",
    "title": "JuliennedArrays.julienne",
    "category": "method",
    "text": "julienne(array, code)\n\nSlice array and create views. The code should a tuple of length ndims(array), where : indicates an axis parallel to slices and * axes an axis perpendicular to slices.\n\njulia> using JuliennedArrays\n\njulia> array = [5 6 4; 1 3 2; 7 9 8]\n3×3 Array{Int64,2}:\n 5  6  4\n 1  3  2\n 7  9  8\n\njulia> map(sum, julienne(array, (*, :)))\n3-element Array{Int64,1}:\n 15\n  6\n 24\n\n\n\n\n\n"
},

{
    "location": "#JuliennedArrays.jl-1",
    "page": "JuliennedArrays.jl",
    "title": "JuliennedArrays.jl",
    "category": "section",
    "text": "Modules = [JuliennedArrays]"
},

]}
