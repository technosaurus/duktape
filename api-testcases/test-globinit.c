/*
 *  Test the heap stash globInit() callback for initializing new global
 *  contexts.
 *
 *  At the moment a user callback cannot be applied to the creation of
 *  the initial context, as the heap and its initial thread are created
 *  at the same time.
 */

/*===
*** test_1 (duk_safe_call)
top: 0
top: 1
globInit callback 0
count: 1 typeof Math: undefined
top: 2
globInit callback 1
count: 2 typeof Math: undefined
top: 3
globInit callback 2
count: 3 typeof Math: undefined
final top: 4
==> rc=0, result='undefined'
===*/

static void dump_count(duk_context *ctx) {
	duk_context *ctx2;

	ctx2 = duk_require_context(ctx, -1);
	duk_eval_string_noresult(ctx2, "print('count:', this.count, 'typeof Math:', typeof Math)");
}

static int test_1(duk_context *ctx) {
	duk_push_heap_stash(ctx);

	duk_eval_string(ctx, "(function globInit() { print('globInit callback', globInit.count++); this.count = globInit.count; delete this.Math; })");
	duk_push_int(ctx, 0);
	duk_put_prop_string(ctx, -2, "count");     /* (func).count = 0 */
	duk_put_prop_string(ctx, -2, "globInit");  /* heapStash.globInit = (func) */
	duk_pop(ctx);

	/* not triggered if new thread shares same global object */
	printf("top: %d\n", duk_get_top(ctx));
	duk_push_thread(ctx);

	printf("top: %d\n", duk_get_top(ctx));
	duk_push_thread_new_globalenv(ctx);
	dump_count(ctx);

	printf("top: %d\n", duk_get_top(ctx));
	duk_push_thread_new_globalenv(ctx);
	dump_count(ctx);

	printf("top: %d\n", duk_get_top(ctx));
	duk_push_thread_new_globalenv(ctx);
	dump_count(ctx);

	printf("final top: %d\n", duk_get_top(ctx));
	return 0;
}

void test(duk_context *ctx) {
	TEST_SAFE_CALL(test_1);
}
