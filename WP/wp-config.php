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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'financie' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:8889' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'T%:Qg so);<9^-hdz]zHBco4WC)j]}Qka&i|#Jf>4o0m! Y4ff+@9NHx8e$GyOL#' );
define( 'SECURE_AUTH_KEY',  'G@m-GX}`}~GlDR}hn,lH8tEJ-n}Qq?tvp|IJ)5,.3coE|F_PV bcWu=a)0Fy:i0Z' );
define( 'LOGGED_IN_KEY',    'ZGW7]*]wGf+m5bqG5AKT,Y05x)cUI@x(E_|kM,Z&C -Y-MxNQXbp)2u_q]Rg`@ :' );
define( 'NONCE_KEY',        '_GPrn=/q.Zm?./vtGU$ ~}]c=:0_AN~,_KXA7_6WWg@SUsql /vags@i(+N.4zaR' );
define( 'AUTH_SALT',        't7?GMgHHZ|@S;oXn=[N|yG.kv1`I|XTH<#Zn(.KXU8Ds90#C HTB{P-kriw,OS1p' );
define( 'SECURE_AUTH_SALT', 'KRLX,F%3,%faoMtu1G]Iy5wd!5?VD{B9O~z?o[:Wg-L<IBd3`@v73|=B67N .W6&' );
define( 'LOGGED_IN_SALT',   'IF6#@A<fhvH]9pSmOTz=!)CotcXjDey5GO:edV< YjZ5iR[|s& &D<oBi99U%X+w' );
define( 'NONCE_SALT',       'vNYl5Tb`sc;e6mw-}a4;OkKDqB1Y#ZOYQ(7{wPz1{L(/`H&:l@{JnRHZtaJl<F)c' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
