// Generated by CoffeeScript 1.6.1
(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if (typeof Backbone !== "undefined" && Backbone !== null) {
    this.DiscussionContentView = (function(_super) {

      __extends(DiscussionContentView, _super);

      function DiscussionContentView() {
        var _this = this;
        this.setWmdContent = function(cls_identifier, text) {
          return DiscussionContentView.prototype.setWmdContent.apply(_this, arguments);
        };
        this.getWmdContent = function(cls_identifier) {
          return DiscussionContentView.prototype.getWmdContent.apply(_this, arguments);
        };
        this.getWmdEditor = function(cls_identifier) {
          return DiscussionContentView.prototype.getWmdEditor.apply(_this, arguments);
        };
        this.makeWmdEditor = function(cls_identifier) {
          return DiscussionContentView.prototype.makeWmdEditor.apply(_this, arguments);
        };
        return DiscussionContentView.__super__.constructor.apply(this, arguments);
      }

      DiscussionContentView.prototype.events = {
        "click .discussion-flag-abuse": "toggleFlagAbuse",
        "keydown .discussion-flag-abuse": function(event) {
          return DiscussionUtil.activateOnSpace(event, this.toggleFlagAbuse);
        }
      };

      DiscussionContentView.prototype.attrRenderer = {
        ability: function(ability) {
          var action, selector, _ref, _results;
          _ref = this.abilityRenderer;
          _results = [];
          for (action in _ref) {
            selector = _ref[action];
            if (!ability[action]) {
              _results.push(selector.disable.apply(this));
            } else {
              _results.push(selector.enable.apply(this));
            }
          }
          return _results;
        }
      };

      DiscussionContentView.prototype.abilityRenderer = {
        editable: {
          enable: function() {
            return this.$(".action-edit").closest(".actions-item").removeClass("is-hidden");
          },
          disable: function() {
            return this.$(".action-edit").closest(".actions-item").addClass("is-hidden");
          }
        },
        can_delete: {
          enable: function() {
            return this.$(".action-delete").closest(".actions-item").removeClass("is-hidden");
          },
          disable: function() {
            return this.$(".action-delete").closest(".actions-item").addClass("is-hidden");
          }
        },
        can_openclose: {
          enable: function() {
            var _this = this;
            return _.each([".action-close", ".action-pin"], function(selector) {
              return _this.$(selector).closest(".actions-item").removeClass("is-hidden");
            });
          },
          disable: function() {
            var _this = this;
            return _.each([".action-close", ".action-pin"], function(selector) {
              return _this.$(selector).closest(".actions-item").addClass("is-hidden");
            });
          }
        }
      };

      DiscussionContentView.prototype.renderPartialAttrs = function() {
        var attr, value, _ref, _results;
        _ref = this.model.changedAttributes();
        _results = [];
        for (attr in _ref) {
          value = _ref[attr];
          if (this.attrRenderer[attr]) {
            _results.push(this.attrRenderer[attr].apply(this, [value]));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      DiscussionContentView.prototype.renderAttrs = function() {
        var attr, value, _ref, _results;
        _ref = this.model.attributes;
        _results = [];
        for (attr in _ref) {
          value = _ref[attr];
          if (this.attrRenderer[attr]) {
            _results.push(this.attrRenderer[attr].apply(this, [value]));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      DiscussionContentView.prototype.makeWmdEditor = function(cls_identifier) {
        if (!this.$el.find(".wmd-panel").length) {
          return DiscussionUtil.makeWmdEditor(this.$el, $.proxy(this.$, this), cls_identifier);
        }
      };

      DiscussionContentView.prototype.getWmdEditor = function(cls_identifier) {
        return DiscussionUtil.getWmdEditor(this.$el, $.proxy(this.$, this), cls_identifier);
      };

      DiscussionContentView.prototype.getWmdContent = function(cls_identifier) {
        return DiscussionUtil.getWmdContent(this.$el, $.proxy(this.$, this), cls_identifier);
      };

      DiscussionContentView.prototype.setWmdContent = function(cls_identifier, text) {
        return DiscussionUtil.setWmdContent(this.$el, $.proxy(this.$, this), cls_identifier, text);
      };

      DiscussionContentView.prototype.initialize = function() {
        var _this = this;
        this.model.bind('change', this.renderPartialAttrs, this);
        return this.listenTo(this.model, "change:endorsed", function() {
          if (_this.model instanceof Comment) {
            return _this.trigger("comment:endorse");
          }
        });
      };

      return DiscussionContentView;

    })(Backbone.View);
    this.DiscussionContentShowView = (function(_super) {
      var _this = this;

      __extends(DiscussionContentShowView, _super);

      function DiscussionContentShowView() {
        var _this = this;
        this.toggleClose = function(event) {
          return DiscussionContentShowView.prototype.toggleClose.apply(_this, arguments);
        };
        this.toggleReport = function(event) {
          return DiscussionContentShowView.prototype.toggleReport.apply(_this, arguments);
        };
        this.togglePin = function(event) {
          return DiscussionContentShowView.prototype.togglePin.apply(_this, arguments);
        };
        this.toggleVote = function(event) {
          return DiscussionContentShowView.prototype.toggleVote.apply(_this, arguments);
        };
        this.toggleEndorse = function(event) {
          return DiscussionContentShowView.prototype.toggleEndorse.apply(_this, arguments);
        };
        this.toggleFollow = function(event) {
          return DiscussionContentShowView.prototype.toggleFollow.apply(_this, arguments);
        };
        this.handleSecondaryActionBlur = function(event) {
          return DiscussionContentShowView.prototype.handleSecondaryActionBlur.apply(_this, arguments);
        };
        this.handleSecondaryActionEscape = function(event) {
          return DiscussionContentShowView.prototype.handleSecondaryActionEscape.apply(_this, arguments);
        };
        this.toggleSecondaryActions = function(event) {
          return DiscussionContentShowView.prototype.toggleSecondaryActions.apply(_this, arguments);
        };
        this.updateButtonState = function(selector, checked) {
          return DiscussionContentShowView.prototype.updateButtonState.apply(_this, arguments);
        };
        return DiscussionContentShowView.__super__.constructor.apply(this, arguments);
      }

      DiscussionContentShowView.prototype.events = _.reduce([[".action-follow", "toggleFollow"], [".action-answer", "toggleEndorse"], [".action-endorse", "toggleEndorse"], [".action-vote", "toggleVote"], [".action-more", "toggleSecondaryActions"], [".action-pin", "togglePin"], [".action-edit", "edit"], [".action-delete", "_delete"], [".action-report", "toggleReport"], [".action-close", "toggleClose"]], function(obj, event) {
        var funcName, selector;
        selector = event[0];
        funcName = event[1];
        obj["click " + selector] = function(event) {
          return this[funcName](event);
        };
        obj["keydown " + selector] = function(event) {
          return DiscussionUtil.activateOnSpace(event, this[funcName]);
        };
        return obj;
      }, {});

      DiscussionContentShowView.prototype.updateButtonState = function(selector, checked) {
        var $button;
        $button = this.$(selector);
        $button.toggleClass("is-checked", checked);
        return $button.attr("aria-checked", checked);
      };

      DiscussionContentShowView.prototype.attrRenderer = $.extend({}, DiscussionContentView.prototype.attrRenderer, {
        subscribed: function(subscribed) {
          return this.updateButtonState(".action-follow", subscribed);
        },
        endorsed: function(endorsed) {
          var $button, selector;
          selector = this.model.get("thread").get("thread_type") === "question" ? ".action-answer" : ".action-endorse";
          this.updateButtonState(selector, endorsed);
          $button = this.$(selector);
          $button.closest(".actions-item").toggleClass("is-hidden", !this.model.canBeEndorsed());
          return $button.toggleClass("is-checked", endorsed);
        },
        votes: function(votes) {
          var button, numVotes, selector;
          selector = ".action-vote";
          this.updateButtonState(selector, window.user.voted(this.model));
          button = this.$el.find(selector);
          numVotes = votes.up_count;
          button.find(".js-sr-vote-count").html(interpolate(ngettext("currently %(numVotes)s vote", "currently %(numVotes)s votes", numVotes), {
            numVotes: numVotes
          }, true));
          return button.find(".js-visual-vote-count").html(interpolate(ngettext("%(numVotes)s Vote", "%(numVotes)s Votes", numVotes), {
            numVotes: numVotes
          }, true));
        },
        pinned: function(pinned) {
          this.updateButtonState(".action-pin", pinned);
          return this.$(".post-label-pinned").toggleClass("is-hidden", !pinned);
        },
        abuse_flaggers: function(abuse_flaggers) {
          var flagged;
          flagged = this.model.isFlagged();
          this.updateButtonState(".action-report", flagged);
          return this.$(".post-label-reported").toggleClass("is-hidden", !flagged);
        },
        closed: function(closed) {
          this.updateButtonState(".action-close", closed);
          return this.$(".post-label-closed").toggleClass("is-hidden", !closed);
        }
      });

      DiscussionContentShowView.prototype.toggleSecondaryActions = function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.secondaryActionsExpanded = !this.secondaryActionsExpanded;
        this.$(".action-more").toggleClass("is-expanded", this.secondaryActionsExpanded);
        this.$(".actions-dropdown").toggleClass("is-expanded", this.secondaryActionsExpanded).attr("aria-expanded", this.secondaryActionsExpanded);
        if (this.secondaryActionsExpanded) {
          if (event.type === "keydown") {
            this.$(".action-list-item:first").focus();
          }
          $("body").on("click", this.toggleSecondaryActions);
          $("body").on("keydown", this.handleSecondaryActionEscape);
          return this.$(".action-list-item").on("blur", this.handleSecondaryActionBlur);
        } else {
          $("body").off("click", this.toggleSecondaryActions);
          $("body").off("keydown", this.handleSecondaryActionEscape);
          return this.$(".action-list-item").off("blur", this.handleSecondaryActionBlur);
        }
      };

      DiscussionContentShowView.prototype.handleSecondaryActionEscape = function(event) {
        if (event.keyCode === 27) {
          this.toggleSecondaryActions(event);
          return this.$(".action-more").focus();
        }
      };

      DiscussionContentShowView.prototype.handleSecondaryActionBlur = function(event) {
        var _this = this;
        return setTimeout(function() {
          if (_this.secondaryActionsExpanded && _this.$(".actions-dropdown :focus").length === 0) {
            return _this.toggleSecondaryActions(event);
          }
        }, 10);
      };

      DiscussionContentShowView.prototype.toggleFollow = function(event) {
        var is_subscribing, msg, url;
        event.preventDefault();
        is_subscribing = !this.model.get("subscribed");
        url = this.model.urlFor(is_subscribing ? "follow" : "unfollow");
        if (is_subscribing) {
          msg = gettext("We had some trouble subscribing you to this thread. Please try again.");
        } else {
          msg = gettext("We had some trouble unsubscribing you from this thread. Please try again.");
        }
        return DiscussionUtil.updateWithUndo(this.model, {
          "subscribed": is_subscribing
        }, {
          url: url,
          type: "POST",
          $elem: $(event.currentTarget)
        }, msg);
      };

      DiscussionContentShowView.prototype.toggleEndorse = function(event) {
        var beforeFunc, is_endorsing, msg, updates, url,
          _this = this;
        event.preventDefault();
        is_endorsing = !this.model.get("endorsed");
        url = this.model.urlFor("endorse");
        updates = {
          endorsed: is_endorsing,
          endorsement: is_endorsing ? {
            username: DiscussionUtil.getUser().get("username"),
            user_id: DiscussionUtil.getUser().id,
            time: new Date().toISOString()
          } : null
        };
        if (this.model.get('thread').get('thread_type') === 'question') {
          if (is_endorsing) {
            msg = gettext("We had some trouble marking this response as an answer.  Please try again.");
          } else {
            msg = gettext("We had some trouble removing this response as an answer.  Please try again.");
          }
        } else {
          if (is_endorsing) {
            msg = gettext("We had some trouble marking this response endorsed.  Please try again.");
          } else {
            msg = gettext("We had some trouble removing this endorsement.  Please try again.");
          }
        }
        beforeFunc = function() {
          return _this.trigger("comment:endorse");
        };
        return DiscussionUtil.updateWithUndo(this.model, updates, {
          url: url,
          type: "POST",
          data: {
            endorsed: is_endorsing
          },
          beforeSend: beforeFunc,
          $elem: $(event.currentTarget)
        }, msg).always(this.trigger("comment:endorse"));
      };

      DiscussionContentShowView.prototype.toggleVote = function(event) {
        var is_voting, updates, url, user,
          _this = this;
        event.preventDefault();
        user = DiscussionUtil.getUser();
        is_voting = !user.voted(this.model);
        url = this.model.urlFor(is_voting ? "upvote" : "unvote");
        updates = {
          upvoted_ids: (is_voting ? _.union : _.difference)(user.get('upvoted_ids'), [this.model.id])
        };
        return DiscussionUtil.updateWithUndo(user, updates, {
          url: url,
          type: "POST",
          $elem: $(event.currentTarget)
        }, gettext("We had some trouble saving your vote.  Please try again.")).done(function() {
          if (is_voting) {
            return _this.model.vote();
          } else {
            return _this.model.unvote();
          }
        });
      };

      DiscussionContentShowView.prototype.togglePin = function(event) {
        var is_pinning, msg, url;
        event.preventDefault();
        is_pinning = !this.model.get("pinned");
        url = this.model.urlFor(is_pinning ? "pinThread" : "unPinThread");
        if (is_pinning) {
          msg = gettext("We had some trouble pinning this thread. Please try again.");
        } else {
          msg = gettext("We had some trouble unpinning this thread. Please try again.");
        }
        return DiscussionUtil.updateWithUndo(this.model, {
          pinned: is_pinning
        }, {
          url: url,
          type: "POST",
          $elem: $(event.currentTarget)
        }, msg);
      };

      DiscussionContentShowView.prototype.toggleReport = function(event) {
        var is_flagging, msg, updates, url;
        event.preventDefault();
        if (this.model.isFlagged()) {
          is_flagging = false;
          msg = gettext("We had some trouble removing your flag on this post.  Please try again.");
        } else {
          is_flagging = true;
          msg = gettext("We had some trouble reporting this post.  Please try again.");
        }
        url = this.model.urlFor(is_flagging ? "flagAbuse" : "unFlagAbuse");
        updates = {
          abuse_flaggers: (is_flagging ? _.union : _.difference)(this.model.get("abuse_flaggers"), [DiscussionUtil.getUser().id])
        };
        return DiscussionUtil.updateWithUndo(this.model, updates, {
          url: url,
          type: "POST",
          $elem: $(event.currentTarget)
        }, msg);
      };

      DiscussionContentShowView.prototype.toggleClose = function(event) {
        var is_closing, msg, updates;
        event.preventDefault();
        is_closing = !this.model.get('closed');
        if (is_closing) {
          msg = gettext("We had some trouble closing this thread.  Please try again.");
        } else {
          msg = gettext("We had some trouble reopening this thread.  Please try again.");
        }
        updates = {
          closed: is_closing
        };
        return DiscussionUtil.updateWithUndo(this.model, updates, {
          url: this.model.urlFor("close"),
          type: "POST",
          data: updates,
          $elem: $(event.currentTarget)
        }, msg);
      };

      DiscussionContentShowView.prototype.getAuthorDisplay = function() {
        return _.template($("#post-user-display-template").html())({
          username: this.model.get('username') || null,
          user_url: this.model.get('user_url'),
          is_community_ta: this.model.get('community_ta_authored'),
          is_staff: this.model.get('staff_authored')
        });
      };

      DiscussionContentShowView.prototype.getEndorserDisplay = function() {
        var endorsement;
        endorsement = this.model.get('endorsement');
        if (endorsement && endorsement.username) {
          return _.template($("#post-user-display-template").html())({
            username: endorsement.username,
            user_url: DiscussionUtil.urlFor('user_profile', endorsement.user_id),
            is_community_ta: DiscussionUtil.isTA(endorsement.user_id),
            is_staff: DiscussionUtil.isStaff(endorsement.user_id)
          });
        } else {
          return null;
        }
      };

      return DiscussionContentShowView;

    }).call(this, DiscussionContentView);
  }

}).call(this);
