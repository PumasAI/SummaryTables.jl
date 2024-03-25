import Pkg

Pkg.activate(@__DIR__)
Pkg.develop(url=joinpath(@__DIR__, ".."))
Pkg.instantiate()

using PlutoSliderServer

# Invalidate the notebook cache when either of the manifests or Julia version change:
let fn = (file) -> string(hash(read(file)); base = 62),
    root = fn(joinpath(@__DIR__, "Manifest.toml")),
    cache = "$VERSION-$root"
    PlutoSliderServer.export_directory("notebooks"; Export_create_index = false, Export_cache_dir = joinpath("cache", cache))
end
