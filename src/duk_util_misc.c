/*
 *  Misc util stuff
 */

#include "duk_internal.h"

/*
 *  Lowercase digits for radix values 2 to 36.  Also doubles as lowercase
 *  hex nybble table.
 */

duk_uint8_t duk_lc_digits[36] = {
	DUK_ASC_0,    DUK_ASC_1,    DUK_ASC_2,    DUK_ASC_3,    DUK_ASC_4,    DUK_ASC_5,    DUK_ASC_6,    DUK_ASC_7,
	DUK_ASC_8,    DUK_ASC_9,    DUK_ASC_LC_A, DUK_ASC_LC_B, DUK_ASC_LC_C, DUK_ASC_LC_D, DUK_ASC_LC_E, DUK_ASC_LC_F,
	DUK_ASC_LC_G, DUK_ASC_LC_H, DUK_ASC_LC_I, DUK_ASC_LC_J, DUK_ASC_LC_K, DUK_ASC_LC_L, DUK_ASC_LC_M, DUK_ASC_LC_N,
	DUK_ASC_LC_O, DUK_ASC_LC_P, DUK_ASC_LC_Q, DUK_ASC_LC_R, DUK_ASC_LC_S, DUK_ASC_LC_T, DUK_ASC_LC_U, DUK_ASC_LC_V,
	DUK_ASC_LC_W, DUK_ASC_LC_X, DUK_ASC_LC_Y, DUK_ASC_LC_Z
};

duk_uint8_t duk_uc_nybbles[16] = {
	DUK_ASC_0,    DUK_ASC_1,    DUK_ASC_2,    DUK_ASC_3,    DUK_ASC_4,    DUK_ASC_5,    DUK_ASC_6,    DUK_ASC_7,
	DUK_ASC_8,    DUK_ASC_9,    DUK_ASC_UC_A, DUK_ASC_UC_B, DUK_ASC_UC_C, DUK_ASC_UC_D, DUK_ASC_UC_E, DUK_ASC_UC_F
};

/*
 *  Table for decoding ASCII hex digits, -1 if invalid.
 */

duk_int8_t duk_hex_dectab[256] = {
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0x00-0x0f */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0x10-0x1f */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0x20-0x2f */
	 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, -1, -1, -1, -1, -1, -1,  /* 0x30-0x3f */
	-1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0x40-0x4f */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0x50-0x5f */
	-1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0x60-0x6f */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0x70-0x7f */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0x80-0x8f */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0x90-0x9f */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0xa0-0xaf */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0xb0-0xbf */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0xc0-0xcf */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0xd0-0xdf */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  /* 0xe0-0xef */
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1   /* 0xf0-0xff */
};
