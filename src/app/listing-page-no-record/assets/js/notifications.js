
(function($) {

	'use strict';

	/*
	Default Notifications
	*/
	$('#default-primary').click(function() {
		new PNotify({
			title: 'Notification Title',
			text: 'Regular notification text',
			type: 'custom',
			addclass: 'ui-pnotify-no-icon notification-primary',
			icon: false,
			buttons: {
				sticker: false
			}
		});
	});

	$('#default-notice').click(function() {
		new PNotify({
			// title: 'Warning Notice',
			text: 'Warning Notice',
			icon: 'fas fa-exclamation-circle',
			buttons: {
				sticker: false
			}
		});
	});

	$('#default-success').click(function() {
		new PNotify({
			// title: 'Success',
			text: 'Your changes has been saved',
			type: 'success',
			icon: 'fas fa-check-circle',
			buttons: {
				sticker: false
			}
		});
	});

	$('#default-info').click(function() {
		new PNotify({
			// title: 'Regular Notice',
			text: 'Regular Notice',
			type: 'info',
			icon: 'fas fa-info-circle',
			buttons: {
				sticker: false
			}
		});
	});

	$('#default-error').click(function() {
		new PNotify({
			// title: 'Regular Notice',
			text: 'Error Message',
			type: 'error',
			icon: 'fas fa-exclamation-circle',
			buttons: {
				sticker: false
			}
		});
	});


	/*
	Sticky notifications
	*/
	$('#sticky-primary').click(function() {
		new PNotify({
			title: 'Notification Title',
			text: 'General Notice',
			addclass: 'ui-pnotify-no-icon notification-primary notification-sticky',
			icon: false,
			hide: false,
			buttons: {
				sticker: false
			}
		});
	});

	$('#sticky-notice').click(function() {
		new PNotify({
			// title: 'Sticky',
			text: 'Warning notice',
			addclass: 'notification-sticky',
			hide: false,
			icon: 'fas fa-exclamation-circle',
			buttons: {
				sticker: false
			}
		});
	});

	$('#sticky-success').click(function() {
		new PNotify({
			// title: 'Sticky',
			text: 'Your changes has been saved',
			type: 'success',
			addclass: 'notification-sticky',
			hide: false,
			icon: 'fas fa-check-circle',
			buttons: {
				sticker: false
			}
		});
	});

	$('#sticky-info').click(function() {
		new PNotify({
			// title: 'Sticky',
			text: 'Regular Notice',
			type: 'info',
			addclass: 'notification-sticky',
			hide: false,
			icon: 'fas fa-info-circle',
			buttons: {
				sticker: false
			}
		});
	});

	$('#sticky-error').click(function() {
		new PNotify({
			// title: 'Sticky',
			text: 'Error Notice',
			type: 'error',
			addclass: 'notification-sticky',
			hide: false,
			icon: 'fas fa-exclamation-circle',
			buttons: {
				sticker: false
			}
		});
	});

	$('#sticky-lightgrey').click(function() {
		new PNotify({
			// title: 'Sticky',
			text: 'Notification text',
			addclass: 'ui-pnotify-no-icon notification-lightgrey notification-sticky',
			icon: 'flase',
			hide: false,
			shadow: true,
			buttons: {
				sticker: false
			}
		});
	});

	/*
	Click to close notifications
	*/
	$('#click-to-close-primary').click(function() {
		var notice = new PNotify({
			title: 'Notification Title',
			text: 'General Notice',
			addclass: 'ui-pnotify-no-icon notification-primary click-2-close',
			icon: 'false',
			hide: false,
			buttons: {
				closer: false,
				sticker: false
			}
		});

		notice.get().click(function() {
			notice.remove();
		});
	});

	$('#click-to-close-notice').click(function() {
		var notice = new PNotify({
			// title: 'Click to Close',
			text: 'Warning Notice',
			addclass: 'click-2-close',
			hide: false,
			icon: 'fas fa-exclamation-circle',
			buttons: {
				closer: false,
				sticker: false
			}
		});

		notice.get().click(function() {
			notice.remove();
		});
	});

	$('#click-to-close-success').click(function() {
		var notice = new PNotify({
			// title: 'Click to Close',
			text: 'Your changes has been saved',
			type: 'success',
			addclass: 'click-2-close',
			hide: false,
			icon: 'fas fa-check-circle',
			buttons: {
				closer: false,
				sticker: false
			}
		});

		notice.get().click(function() {
			notice.remove();
		});
	});

	$('#click-to-close-info').click(function() {
		var notice = new PNotify({
			// title: 'Click to Close',
			text: 'Error Notice',
			type: 'info',
			addclass: 'click-2-close',
			hide: false,
			icon: 'fas fa-info-circle',
			buttons: {
				closer: false,
				sticker: false
			}
		});

		notice.get().click(function() {
			notice.remove();
		});
	});

	$('#click-to-close-error').click(function() {
		var notice = new PNotify({
			// title: 'Click to Close',
			text: 'Error Notice',
			type: 'error',
			addclass: 'click-2-close',
			hide: false,
			icon: 'fas fa-exclamation-circle',
			buttons: {
				closer: false,
				sticker: false
			}
		});

		notice.get().click(function() {
			notice.remove();
		});
	});

	$('#click-to-close-dark').click(function() {
		var notice = new PNotify({
			title: 'Click to Close',
			text: 'Check me out! I\'m a sticky notice. You\'ll have to click me to close.',
			addclass: 'notification-dark click-2-close',
			icon: 'fas fa-user',
			hide: false,
			buttons: {
				closer: false,
				sticker: false
			}
		});

		notice.get().click(function() {
			notice.remove();
		});
	});

	/*
	Positions
	*/
	var stack_topleft = {"dir1": "down", "dir2": "right", "push": "top"};
	var stack_bottomleft = {"dir1": "right", "dir2": "up", "push": "top"};
	var stack_bottomright = {"dir1": "up", "dir2": "left", "firstpos1": 15, "firstpos2": 15};
	var stack_bar_top = {"dir1": "down", "dir2": "right", "push": "top", "spacing1": 0, "spacing2": 0};
	var stack_bar_bottom = {"dir1": "up", "dir2": "right", "spacing1": 0, "spacing2": 0};

	$('#position-1-notice').click(function() {
		var notice = new PNotify({
			// title: 'Notification',
			text: 'Warning notice',
			addclass: 'stack-topleft',
			icon: 'fas fa-exclamation-circle',
			buttons: {
				sticker: false
			}
		});
	});	

	$('#position-2-success').click(function() {
		var notice = new PNotify({
			// title: 'Notification',
			text: 'Your changes has been saved',
			type: 'success',
			addclass: 'stack-bottomleft',
			icon: 'fas fa-check-circle',
			buttons: {
				sticker: false
			},
			stack: stack_bottomleft
		});
	});

	$('#position-3-error').click(function() {
		var notice = new PNotify({
			// title: 'Notification',
			text: 'Some notification text.',
			type: 'error',
			addclass: 'stack-bottomright',
			icon: 'fas fa-exclamation-circle',
			buttons: {
				sticker: false
			},
			stack: stack_bottomright
		});
	});


	$('#position-4-primary').click(function() {
		var notice = new PNotify({
			title: 'Notification',
			text: 'Some notification text.',
			addclass: 'ui-pnotify-no-icon notification-primary stack-bar-top',
			icon: false,
			buttons: {
				sticker: false
			},
			stack: stack_bar_top,
			width: "100%"
		});
	});

	$('#position-4-notice').click(function() {
		var notice = new PNotify({
			// title: 'Notification',
			text: 'Some notification text.',
			addclass: ' stack-bar-top',
			icon: 'fas fa-exclamation-circle',
			buttons: {
				sticker: false
			},
			stack: stack_bar_top,
			width: "100%"
		});
	});

	$('#position-4-success').click(function() {
		var notice = new PNotify({
			// title: 'Notification',
			text: 'Some notification text.',
			type: 'success',
			addclass: 'stack-bar-top',
			icon: 'fas fa-check-circle',
			buttons: {
				sticker: false
			},
			stack: stack_bar_top,
			width: "100%"
		});
	});

	$('#position-4-info').click(function() {
		var notice = new PNotify({
			// title: 'Notification',
			text: 'Some notification text.',
			type: 'info',
			addclass: 'stack-bar-top',
			icon: 'fas fa-info-circle',
			buttons: {
				sticker: false
			},
			stack: stack_bar_top,
			width: "100%"
		});
	});

	$('#position-4-error').click(function() {
		var notice = new PNotify({
			// title: 'Notification',
			text: 'Some notification text.',
			type: 'error',
			addclass: 'stack-bar-top',
			icon: 'fas fa-exclamation-circle',
			buttons: {
				sticker: false
			},
			stack: stack_bar_top,
			width: "100%"
		});
	});

	$('#position-4-lightgrey').click(function() {
		var notice = new PNotify({
			title: 'Notification',
			text: 'Some notification text.',
			addclass: 'ui-pnotify-no-icon notification-lightgrey stack-bar-top',
			icon: false,
			buttons: {
				sticker: false
			},
			stack: stack_bar_top,
			width: "100%"
		});
	});

	$('#position-5-primary').click(function() {
		var notice = new PNotify({
			title: 'Notification',
			text: 'Some notification text.',
			addclass: 'ui-pnotify-no-icon notification-primary stack-bar-bottom',
			icon: false,
			hide: false,
			buttons: {
				sticker: false
			},
			stack: stack_bar_bottom,
			width: "70%"
		});
	});

	$('#position-5-notice').click(function() {
		var notice = new PNotify({
			// title: 'Notification',
			text: 'Some notification text.',
			addclass: 'stack-bar-bottom',
			icon: 'fas fa-exclamation-circle',
			buttons: {
				sticker: false
			},
			stack: stack_bar_bottom,
			width: "70%"
		});
	});

	$('#position-5-success').click(function() {
		var notice = new PNotify({
			// title: 'Notification',
			text: 'Some notification text.',
			type: 'success',
			addclass: 'stack-bar-bottom',
			icon: 'fas fa-exclamation-circle',
			buttons: {
				sticker: false
			},
			stack: stack_bar_bottom,
			width: "70%"
		});
	});

	$('#position-5-info').click(function() {
		var notice = new PNotify({
			// title: 'Notification',
			text: 'Some notification text.',
			type: 'info',
			addclass: 'stack-bar-bottom',
			icon: 'fas fa-info-circle',
			buttons: {
				sticker: false
			},
			stack: stack_bar_bottom,
			width: "70%"
		});
	});

	$('#position-5-error').click(function() {
		var notice = new PNotify({
			// title: 'Notification',
			text: 'Some notification text.',
			type: 'error',
			addclass: 'stack-bar-bottom',
			icon: 'fas fa-exclamation-circle',
			buttons: {
				sticker: false
			},
			stack: stack_bar_bottom,
			width: "70%"
		});
	});

	$('#position-5-lightgrey').click(function() {
		var notice = new PNotify({
			title: 'Notification',
			text: 'Some notification text.',
			addclass: 'ui-pnotify-no-icon notification-lightgrey stack-bar-bottom',
			icon: false,
			buttons: {
				sticker: false
			},
			stack: stack_bar_bottom,
			width: "70%"
		});
	});

	/*
	Desktop Notifications Code
	*/
	$.each(['notice', 'error', 'info', 'success'], function( i, type ) {
		$( '#desktop-' + type ).click(function() {
			PNotify.desktop.permission();
			(new PNotify({
				title: 'Desktop ' + type.charAt(0).toUpperCase() + type.slice(1),
				text: 'If you\'ve given me permission, I\'ll appear as a desktop notification. If you haven\'t, I\'ll still appear as a regular notice.',
				type: type,
				desktop: {
					desktop: true
				}
			})).get().click(function() {
				alert('Hey! You clicked the desktop notification!');
			});
		});
	});

	$('#desktop-sticky').click(function() {
		PNotify.desktop.permission();
		(new PNotify({
			title: 'Sticky Desktop Notice',
			text: 'I\'m a sticky notice, so you\'ll have to close me yourself. (Some systems don\'t allow sticky notifications.) If you\'ve given me permission, I\'ll appear as a desktop notification. If you haven\'t, I\'ll still appear as a regular notice.',
			hide: false,
			desktop: {
				desktop: true
			}
		})).get().click(function() {
			alert('Hey! You clicked the desktop notification!');
		});
	});

	$('#desktop-custom').click(function() {
		PNotify.desktop.permission();
		(new PNotify({
			title: 'Desktop Custom Icon',
			text: 'If you\'ve given me permission, I\'ll appear as a desktop notification. If you haven\'t, I\'ll still appear as a regular notice.',
			desktop: {
				desktop: true,
				icon: 'img/!happy-face.png'
			}
		})).get().click(function() {
			alert('Hey! You clicked the desktop notification!');
		});
	});

}).apply(this, [jQuery]);