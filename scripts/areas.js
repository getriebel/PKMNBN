/*
Gun
[___][___][___]
[___][(B)][___]
[___][___][___]

[___][___][___]
[___][_A_][___]
[___][___][___]
Description: Current cell of player B if player B is in the same column
*/

/*
Shotgun
[___][___][___]
[___][(B)][___]
[___][(_)][___]

[___][___][___]
[___][_A_][___]
[___][___][___]
Description: Two cells in a column with depth=1, i.e. one cell in between
*/

/*
SideGun
[___][___][___]
[(_)][(B)][(_)]
[___][___][___]

[___][___][___]
[___][_A_][___]
[___][___][___]
Description: Three cells (2 cells if player A non-centered) in a row with depth=1, i.e. one cell in between
*/

/*
CrossGun
[___][(_)][___]
[(_)][(B)][(_)]
[___][(_)][___]

[___][_A_][___]
[___][___][___]
[___][___][___]
Description: Three cells (2 cells if player centered) in +-shape with depth=1, i.e. one cell in between
*/

/*
Melee
[___][___][___]
[___][___][___]
[___][(B)][___]

[___][_A_][___]
[___][___][___]
[___][___][___]
Description: One cell in front
*/

/*
WideMelee
[___][___][___]
[___][___][___]
[(_)][(B)][(_)]

[___][_A_][___]
[___][___][___]
[___][___][___]
Description: Row, i.e. three cells, in front (two cells in player not vertically centered)
*/

/*
LongMelee
[___][___][___]
[___][(B)][___]
[___][(_)][___]

[___][_A_][___]
[___][___][___]
[___][___][___]
Description: Two cells in front
*/

/*
Bomb
[___][___][___]
[___][(B)][___]
[___][___][___]

[___][___][___]
[___][_A_][___]
[___][___][___]
Description: Three cells (2 cells if player A non-centered) in a row with depth=2, i.e. two cell in between
*/

/*
SideBomb
[___][___][___]
[(_)][(B)][(_)]
[___][___][___]

[___][___][___]
[___][_A_][___]
[___][___][___]
Description: Once cell with depth=2, i.e. two cells in between
*/

/*
CrossGun
[___][(_)][___]
[(_)][(B)][(_)]
[___][(_)][___]

[___][___][___]
[___][_A_][___]
[___][___][___]
Description: Three cells (2 cells if player centered) in +-shape with depth=2, i.e. two cell in between
*/

/*
Column
[___][(_)][___]
[___][(B)][___]
[___][(_)][___]

[___][___][___]
[___][_A_][___]
[___][___][___]
Description: Full Column starting at player A's position
*/

/*
Self
[___][___][___]
[___][_B_][___]
[___][___][___]

[___][___][___]
[___][(A)][___]
[___][___][___]
Description: Current cell of player A
*/