<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sri');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '.(l9@RxFjVO{</a1o/2z}}Vc$Wek{)dE[jtsA$z[4}Wi11#soAv|BQ8aE(Aj_n|v');
define('SECURE_AUTH_KEY',  'g5,_9Cz lSC?8:QbN}Pb<A+^X_7/-R@u@JvWi7Yj{[]D~p`sj&s`+0W73`T38wcW');
define('LOGGED_IN_KEY',    '48-YB4(0)4~M|^R?l=TBVK.=L&= _w<KN!PkD:l^TrutOfPNG|p{%fe|u6F4$vz7');
define('NONCE_KEY',        '5p7l1y/1J1[{GTT)YJX.WCN)=N{+ES$:HC<n28`hV]#uQs+]c=]K2k#&nv.-a$,k');
define('AUTH_SALT',        ']ezIF>0?/DISS+}KN7TU]}zx4ZrR(G?||(?UP^yk{twHs[e$<0Q:S0YJ{AN+D<&,');
define('SECURE_AUTH_SALT', ']hb<M{(]`0PJSSd%]f8xm%{*K&Jd|$B{z`:Cwr4W~+-56AQT4xbZ8K7M/}_>{v?d');
define('LOGGED_IN_SALT',   'tYWHY2a*.m{W]$@hnPo^0$u lrR$,t7m/;G4+P6cy@EJm[-nbJ^?Jpi+FA^PS_PO');
define('NONCE_SALT',       'V=w9HVo>8I-k+#RXH!xV:1Brq(#yyf-V$vD`)GNQAsg.@>c;|,PYZ?7B|uYj=raG');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
