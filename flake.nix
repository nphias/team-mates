{
  description = "Flake for Holochain app development";

  inputs = {
    nixpkgs.follows = "holochain-dev/nixpkgs";
    holochain-dev = {
      url = "github:holochain/holochain";
      inputs.versions.url = "github:holochain/holochain/?dir=versions/0_2";
    };
  };

  outputs = inputs @ { ... }:
    inputs.holochain-dev.inputs.flake-parts.lib.mkFlake
      {
        inherit inputs;
      }
      {
        systems = builtins.attrNames inputs.holochain-dev.devShells;
        perSystem =
          { config
          , pkgs
          , system
          , ...
          }: {
            devShells.default = pkgs.mkShell {
              inputsFrom = [ inputs.holochain-dev.devShells.${system}.holonix ];
              packages = [ pkgs.nodejs-18_x ];
            };
          };
      };
}