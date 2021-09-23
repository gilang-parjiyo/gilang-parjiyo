var flavor = "chocolate";
var vessel = "cone";
var toppings = "sprinkles";

/**
if flavor is set to vanilla or chocolate and
if vessel is set to cone or bowl and
if toppings is set to sprinkles or peanuts
 */

if (((flavor === "vanilla") || (flavor === "chocolate")) && ((vessel === "cone") || (vessel === "bowl")) && ((toppings === "sprinkles") || (toppings === "peanuts"))) {
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}