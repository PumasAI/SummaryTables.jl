ensure_env := "julia --startup-file=no .ci/ensure_environment.jl"

# Check doctests
doctest: (_ensure-env "docs")
    julia --startup-file=no --project=docs docs/doctest.jl

# Fix doctests
doctest-fix: (_ensure-env "docs")
    julia --startup-file=no --project=docs docs/doctest.jl --fix

# Regenerate the readme
readme: (_ensure-env "_readme")
    julia --startup-file=no --project=_readme _readme/make.jl

# Check that the readme is up to date
readme-check: readme
    git diff --exit-code -- README.md README_files

_ensure-env path:
    {{ ensure_env }} {{ path }}
